const STUDYPHYSIO = Object.freeze({
  spreadsheetId: '1lfRMcU0k1t6omcgz_cx05XxpX2wkv0yxTyqD-vW89T4',
  questionsSheet: 'Questions',
  historySheet: 'Publish & History',
  configSheet: '_Config',
  publishedSheet: '_Published',
  archiveSheet: '_Archive',
  firstQuestionRow: 7,
  expectedQuestions: 400,
  schemaVersion: 1,
});

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('StudyPhysio')
    .addItem('Validate ready changes', 'validateReadyChanges')
    .addItem('Validate and publish', 'validateAndPublish')
    .addSeparator()
    .addItem('Restore previous publication', 'restorePreviousPublication')
    .addToUi();
}

function onEdit(event) {
  if (!event || !event.range) return;

  const sheet = event.range.getSheet();
  if (sheet.getName() !== STUDYPHYSIO.questionsSheet) return;

  const firstRow = Math.max(event.range.getRow(), STUDYPHYSIO.firstQuestionRow);
  const lastRow = event.range.getLastRow();
  if (firstRow > lastRow) return;

  const firstColumn = event.range.getColumn();
  const lastColumn = event.range.getLastColumn();
  const contentChanged = firstColumn <= 6 && lastColumn >= 2;
  const readyChanged = firstColumn <= 7 && lastColumn >= 7;

  for (let row = firstRow; row <= lastRow; row += 1) {
    if (contentChanged) {
      sheet.getRange(row, 7).setValue(false);
      sheet.getRange(row, 8).setValue('Draft');
    } else if (readyChanged) {
      const ready = sheet.getRange(row, 7).getValue() === true;
      sheet.getRange(row, 8).setValue(ready ? 'Ready to publish' : rowMatchesPublished_(sheet, row) ? 'Live' : 'Draft');
    }
  }
}

function validateReadyChanges() {
  const result = buildCandidate_();
  if (!result.ok) {
    if (result.readyRows.length === 0) {
      writeValidationErrors_([]);
      SpreadsheetApp.getUi().alert(
        'Nothing to validate',
        'No questions are marked Ready to Publish. The current published question bank remains healthy.',
        SpreadsheetApp.getUi().ButtonSet.OK
      );
      return;
    }
    writeValidationErrors_(result.errors);
    SpreadsheetApp.getUi().alert('Validation blocked', result.errors.join('\n'), SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  writeValidationErrors_([]);
  SpreadsheetApp.getUi().alert(
    'Validation passed',
    result.readyRows.length + ' question change(s) are ready to publish. The live website has not changed yet.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

function validateAndPublish() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const result = buildCandidate_();
    if (!result.ok) {
      if (result.readyRows.length === 0) {
        writeValidationErrors_([]);
        SpreadsheetApp.getUi().alert(
          'Nothing to publish',
          'No questions are marked Ready to Publish. The live website has not changed.',
          SpreadsheetApp.getUi().ButtonSet.OK
        );
        return;
      }
      writeValidationErrors_(result.errors);
      SpreadsheetApp.getUi().alert('Publication blocked', result.errors.join('\n'), SpreadsheetApp.getUi().ButtonSet.OK);
      return;
    }

    const response = SpreadsheetApp.getUi().alert(
      'Publish to StudyPhysio?',
      result.readyRows.length + ' ready question change(s) passed validation. Publish them now?',
      SpreadsheetApp.getUi().ButtonSet.YES_NO
    );
    if (response !== SpreadsheetApp.getUi().Button.YES) return;

    const version = makeVersion_('v');
    writeValidationErrors_([]);
    publishCandidate_(result.candidate, version, result.readyRows, 'Published');
    SpreadsheetApp.getUi().alert(
      'Published',
      result.readyRows.length + ' question change(s) are now live. Refresh the StudyPhysio website to see them.',
      SpreadsheetApp.getUi().ButtonSet.OK
    );
  } finally {
    lock.releaseLock();
  }
}

function restorePreviousPublication() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    'Restore the previous publication?',
    'This will replace the current live question snapshot with the most recently archived version. Draft cells in Questions will also be replaced.',
    ui.ButtonSet.YES_NO
  );
  if (response !== ui.Button.YES) return;

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const archiveSheet = getSheet_(STUDYPHYSIO.archiveSheet);
    const values = archiveSheet.getLastRow() < 2
      ? []
      : archiveSheet.getRange(2, 1, archiveSheet.getLastRow() - 1, 8).getValues();
    if (values.length === 0) {
      ui.alert('Nothing to restore', 'No previous publication has been archived yet.', ui.ButtonSet.OK);
      return;
    }

    const priorVersion = String(values[values.length - 1][0]);
    const candidate = values
      .filter(function (row) { return String(row[0]) === priorVersion; })
      .map(function (row) {
        return {
          id: String(row[1]).trim(),
          checkup: String(row[2]).trim(),
          topic: String(row[3]).trim(),
          question: String(row[4]).trim(),
          correct: parseBoolean_(row[5]),
          explanation: String(row[6]).trim(),
        };
      });

    const errors = validateQuestionSet_(candidate);
    if (errors.length > 0) {
      writeValidationErrors_(errors);
      ui.alert('Restore blocked', errors.join('\n'), ui.ButtonSet.OK);
      return;
    }

    const version = makeVersion_('rollback');
    writeValidationErrors_([]);
    publishCandidate_(candidate, version, [], 'Restored ' + priorVersion);
    syncQuestionsToPublished_(candidate, version);
    ui.alert('Previous version restored', 'The archived version is live again as ' + version + '.', ui.ButtonSet.OK);
  } finally {
    lock.releaseLock();
  }
}

function convertExplanationsToPlainText() {
  const targets = [
    { sheet: STUDYPHYSIO.questionsSheet, firstRow: STUDYPHYSIO.firstQuestionRow, column: 6 },
    { sheet: STUDYPHYSIO.publishedSheet, firstRow: 2, column: 6 },
    { sheet: STUDYPHYSIO.archiveSheet, firstRow: 2, column: 7 },
  ];

  targets.forEach(function (target) {
    const sheet = getSheet_(target.sheet);
    const rowCount = Math.max(0, sheet.getLastRow() - target.firstRow + 1);
    if (rowCount === 0) return;
    const range = sheet.getRange(target.firstRow, target.column, rowCount, 1);
    const values = range.getValues().map(function (row) {
      return [String(row[0] || '').replace(/<\/?strong>/g, '')];
    });
    range.setValues(values);
  });

  getSheet_(STUDYPHYSIO.historySheet).getRange('B7').setValue('Connected and healthy');
  clearQuestionCache_();
  SpreadsheetApp.flush();
}

function doGet(event) {
  const checkupId = event && event.parameter ? String(event.parameter.checkup || '').trim() : '';
  const config = getCheckupConfig_();
  const knownCheckup = config.some(function (item) { return item.id === checkupId && item.active; });

  if (!knownCheckup) {
    return jsonOutput_({
      schemaVersion: STUDYPHYSIO.schemaVersion,
      error: 'Unknown or missing checkup.',
    });
  }

  const version = String(getSheet_(STUDYPHYSIO.configSheet).getRange('H2').getValue());
  const cacheKey = 'checkup:' + version + ':' + checkupId;
  const cache = CacheService.getScriptCache();
  const cached = cache.get(cacheKey);
  if (cached) return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);

  const questions = getPublishedQuestions_().filter(function (question) {
    return question.checkup === checkupId;
  });
  const errors = validateSingleCheckup_(checkupId, questions);
  const payload = errors.length > 0
    ? { schemaVersion: STUDYPHYSIO.schemaVersion, version: version, checkupId: checkupId, error: errors.join(' ') }
    : {
      schemaVersion: STUDYPHYSIO.schemaVersion,
      version: version,
      checkupId: checkupId,
      questions: questions.map(function (question) {
        return {
          id: question.id,
          type: 'tf',
          topic: question.topic,
          question: question.question,
          correct: question.correct,
          explanation: question.explanation,
        };
      }),
    };

  const json = JSON.stringify(payload);
  if (!payload.error && json.length < 95000) cache.put(cacheKey, json, 300);
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function buildCandidate_() {
  const sheet = getSheet_(STUDYPHYSIO.questionsSheet);
  const rowCount = Math.max(0, sheet.getLastRow() - STUDYPHYSIO.firstQuestionRow + 1);
  const rows = rowCount === 0 ? [] : sheet.getRange(STUDYPHYSIO.firstQuestionRow, 1, rowCount, 10).getValues();
  const readyRows = [];
  const published = getPublishedQuestions_();
  const candidateById = new Map();

  published.forEach(function (question) { candidateById.set(question.id, question); });

  rows.forEach(function (row, index) {
    if (row[6] !== true) return;
    const record = rowToQuestion_(row);
    readyRows.push({ rowNumber: STUDYPHYSIO.firstQuestionRow + index, record: record, note: row[8] });
    candidateById.set(record.id, record);
  });

  if (readyRows.length === 0) {
    return { ok: false, errors: ['No questions are marked Ready to Publish.'], readyRows: [], candidate: published };
  }

  const candidate = published.map(function (question) { return candidateById.get(question.id); });
  const unknownReadyIds = readyRows
    .map(function (item) { return item.record.id; })
    .filter(function (id) { return !published.some(function (question) { return question.id === id; }); });
  const errors = unknownReadyIds.length > 0
    ? ['New or changed question IDs require an owner-managed structural update: ' + unknownReadyIds.join(', ')]
    : validateQuestionSet_(candidate);

  return { ok: errors.length === 0, errors: errors, readyRows: readyRows, candidate: candidate };
}

function validateQuestionSet_(questions) {
  const errors = [];
  const config = getCheckupConfig_().filter(function (item) { return item.active; });
  const ids = new Set();
  const wording = new Set();

  if (questions.length !== STUDYPHYSIO.expectedQuestions) {
    errors.push('Expected ' + STUDYPHYSIO.expectedQuestions + ' published questions, found ' + questions.length + '.');
  }

  questions.forEach(function (question, index) {
    const label = question.id || 'Question ' + (index + 1);
    if (!question.id || !question.checkup || !question.topic || !question.question || !question.explanation) {
      errors.push(label + ' is missing a required field.');
      return;
    }
    if (typeof question.correct !== 'boolean') errors.push(label + ' must use TRUE or FALSE.');
    if (ids.has(question.id)) errors.push('Duplicate question ID: ' + question.id + '.');
    ids.add(question.id);

    const normalized = normalizeText_(question.question);
    if (wording.has(normalized)) errors.push('Duplicate question wording: ' + question.question);
    wording.add(normalized);

    const htmlError = explanationHtmlError_(question.explanation);
    if (htmlError) errors.push(label + ': ' + htmlError);
  });

  config.forEach(function (checkup) {
    const bank = questions.filter(function (question) { return question.checkup === checkup.id; });
    errors.push.apply(errors, validateSingleCheckup_(checkup.id, bank));
  });

  const knownIds = new Set(config.map(function (item) { return item.id; }));
  questions.forEach(function (question) {
    if (!knownIds.has(question.checkup)) errors.push(question.id + ' uses an unknown checkup: ' + question.checkup + '.');
  });

  return Array.from(new Set(errors));
}

function validateSingleCheckup_(checkupId, bank) {
  const errors = [];
  if (bank.length !== 50) errors.push(checkupId + ' must contain exactly 50 questions; found ' + bank.length + '.');

  const topics = new Map();
  let trueCount = 0;
  bank.forEach(function (question) {
    if (!topics.has(question.topic)) topics.set(question.topic, []);
    topics.get(question.topic).push(question);
    if (question.correct === true) trueCount += 1;
  });

  if (topics.size !== 10) errors.push(checkupId + ' must contain exactly 10 topics; found ' + topics.size + '.');
  topics.forEach(function (topicQuestions, topic) {
    if (topicQuestions.length !== 5) errors.push(checkupId + ' / ' + topic + ' must contain five questions; found ' + topicQuestions.length + '.');
    if (checkupId === 'unit7-sexual-health-and-relationships-checkup') {
      const topicTrue = topicQuestions.filter(function (question) { return question.correct; }).length;
      if (topicTrue < 2 || topicTrue > 3) errors.push(checkupId + ' / ' + topic + ' must contain both answers in a 2/3 or 3/2 split.');
    }
  });
  if (trueCount !== 25) errors.push(checkupId + ' must contain exactly 25 true and 25 false answers; found ' + trueCount + ' true.');
  return errors;
}

function publishCandidate_(candidate, version, readyRows, resultLabel) {
  const publishedSheet = getSheet_(STUDYPHYSIO.publishedSheet);
  const oldPublished = getPublishedQuestions_();
  archivePublished_(oldPublished);

  const output = candidate.map(function (question) {
    return [question.id, question.checkup, question.topic, question.question, question.correct, question.explanation, version];
  });
  publishedSheet.getRange(2, 1, output.length, 7).setValues(output);
  if (publishedSheet.getLastRow() > output.length + 1) {
    publishedSheet.getRange(output.length + 2, 1, publishedSheet.getLastRow() - output.length - 1, 7).clearContent();
  }

  const editor = Session.getActiveUser().getEmail() || 'Authorized editor';
  const timestamp = new Date();
  const configSheet = getSheet_(STUDYPHYSIO.configSheet);
  configSheet.getRange('H2').setValue(version);

  const historySheet = getSheet_(STUDYPHYSIO.historySheet);
  historySheet.getRange('B3').setValue(version);
  historySheet.getRange('B4').setValue(candidate.length);
  historySheet.getRange('B5').setValue(getCheckupConfig_().filter(function (item) { return item.active; }).length);
  historySheet.getRange('B6').setValue(timestamp);
  historySheet.getRange('B7').setValue('Connected and healthy');
  historySheet.appendRow([version, timestamp, editor, readyRows.length, resultLabel]);

  const questionsSheet = getSheet_(STUDYPHYSIO.questionsSheet);
  readyRows.forEach(function (item) {
    questionsSheet.getRange(item.rowNumber, 7, 1, 4).setValues([[false, 'Live', item.note, version]]);
  });

  clearQuestionCache_();
  SpreadsheetApp.flush();
}

function archivePublished_(questions) {
  if (questions.length === 0) return;
  const archiveSheet = getSheet_(STUDYPHYSIO.archiveSheet);
  const timestamp = new Date();
  const version = questions[0].version || 'unknown';
  const rows = questions.map(function (question) {
    return [version, question.id, question.checkup, question.topic, question.question, question.correct, question.explanation, timestamp];
  });
  archiveSheet.getRange(archiveSheet.getLastRow() + 1, 1, rows.length, 8).setValues(rows);
}

function syncQuestionsToPublished_(candidate, version) {
  const sheet = getSheet_(STUDYPHYSIO.questionsSheet);
  const notes = sheet.getRange(STUDYPHYSIO.firstQuestionRow, 9, candidate.length, 1).getValues();
  const values = candidate.map(function (question, index) {
    return [
      question.id,
      question.checkup,
      question.topic,
      question.question,
      question.correct ? 'TRUE' : 'FALSE',
      question.explanation,
      false,
      'Live',
      notes[index][0],
      version,
    ];
  });
  sheet.getRange(STUDYPHYSIO.firstQuestionRow, 1, values.length, 10).setValues(values);
}

function getPublishedQuestions_() {
  const sheet = getSheet_(STUDYPHYSIO.publishedSheet);
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, 7).getValues()
    .filter(function (row) { return String(row[0]).trim() !== ''; })
    .map(function (row) {
      return {
        id: String(row[0]).trim(),
        checkup: String(row[1]).trim(),
        topic: String(row[2]).trim(),
        question: String(row[3]).trim(),
        correct: parseBoolean_(row[4]),
        explanation: String(row[5]).trim(),
        version: String(row[6]).trim(),
      };
    });
}

function getCheckupConfig_() {
  const sheet = getSheet_(STUDYPHYSIO.configSheet);
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, 5).getValues()
    .filter(function (row) { return String(row[0]).trim() !== ''; })
    .map(function (row) {
      return {
        id: String(row[0]).trim(),
        title: String(row[1]).trim(),
        exactBalance: row[2] === true,
        active: row[3] === true,
        order: Number(row[4]),
      };
    });
}

function rowToQuestion_(row) {
  return {
    id: String(row[0]).trim(),
    checkup: String(row[1]).trim(),
    topic: String(row[2]).trim(),
    question: String(row[3]).trim(),
    correct: parseBoolean_(row[4]),
    explanation: String(row[5]).trim(),
  };
}

function rowMatchesPublished_(sheet, rowNumber) {
  const row = sheet.getRange(rowNumber, 1, 1, 6).getValues()[0];
  const record = rowToQuestion_(row);
  const published = getPublishedQuestions_().find(function (question) { return question.id === record.id; });
  return Boolean(published)
    && published.checkup === record.checkup
    && published.topic === record.topic
    && published.question === record.question
    && published.correct === record.correct
    && published.explanation === record.explanation;
}

function parseBoolean_(value) {
  if (value === true || String(value).trim().toUpperCase() === 'TRUE') return true;
  if (value === false || String(value).trim().toUpperCase() === 'FALSE') return false;
  return null;
}

function explanationHtmlError_(value) {
  const explanation = String(value || '');
  return /<[^>]*>/.test(explanation) ? 'explanations must be written as plain text without HTML tags.' : '';
}

function normalizeText_(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function makeVersion_(prefix) {
  return prefix + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');
}

function clearQuestionCache_() {
  const version = String(getSheet_(STUDYPHYSIO.configSheet).getRange('H2').getValue());
  const keys = getCheckupConfig_().map(function (item) { return 'checkup:' + version + ':' + item.id; });
  CacheService.getScriptCache().removeAll(keys);
}

function writeValidationErrors_(errors) {
  const sheet = getSheet_(STUDYPHYSIO.historySheet);
  sheet.getRange('A16:B60').clearContent();
  if (errors.length === 0) {
    sheet.getRange('B7').setValue('Validation passed');
    return;
  }
  sheet.getRange('B7').setValue('Validation blocked: ' + errors.length + ' issue(s)');
  const rows = errors.slice(0, 44).map(function (error, index) { return ['Issue ' + (index + 1), error]; });
  sheet.getRange(16, 1, rows.length, 2).setValues(rows);
}

function getSheet_(name) {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const spreadsheet = activeSpreadsheet && activeSpreadsheet.getId() === STUDYPHYSIO.spreadsheetId
    ? activeSpreadsheet
    : SpreadsheetApp.openById(STUDYPHYSIO.spreadsheetId);
  const sheet = spreadsheet.getSheetByName(name);
  if (!sheet) throw new Error('Missing required sheet: ' + name);
  return sheet;
}

function jsonOutput_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

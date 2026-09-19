const STUDYPHYSIO = Object.freeze({
  spreadsheetId: '1lfRMcU0k1t6omcgz_cx05XxpX2wkv0yxTyqD-vW89T4',
  questionsSheet: 'Questions',
  historySheet: 'Publish & History',
  configSheet: '_Config',
  publishedSheet: '_Published',
  archiveSheet: '_Archive',
  firstQuestionRow: 8,
  questionsPerCheckup: 50,
  unit5CheckupId: 'unit5-checkup',
  unit5Title: 'Unit 5 Checkup',
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
  const inactiveCheckups = new Set(getCheckupConfig_()
    .filter(function (item) { return !item.active; })
    .map(function (item) { return item.id; }));

  for (let row = firstRow; row <= lastRow; row += 1) {
    const checkupId = String(sheet.getRange(row, 2).getValue()).trim();
    if (contentChanged) {
      sheet.getRange(row, 7).setValue(false);
      sheet.getRange(row, 8).setValue(inactiveCheckups.has(checkupId) ? 'Unit draft' : 'Draft');
    } else if (readyChanged) {
      const ready = sheet.getRange(row, 7).getValue() === true;
      const unreadyStatus = inactiveCheckups.has(checkupId)
        ? 'Unit draft'
        : rowMatchesPublished_(sheet, row) ? 'Live' : 'Draft';
      sheet.getRange(row, 8).setValue(ready ? 'Ready to publish' : unreadyStatus);
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
  const activationMessage = result.newlyActivatedCheckupIds.length > 0
    ? ' The complete Unit 5 bank also passed and will be activated when published.'
    : '';
  SpreadsheetApp.getUi().alert(
    'Validation passed',
    result.readyRows.length + ' question change(s) are ready to publish.' + activationMessage + ' The live website has not changed yet.',
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

    const activatesUnit5 = result.newlyActivatedCheckupIds.indexOf(STUDYPHYSIO.unit5CheckupId) !== -1;
    const confirmationMessage = activatesUnit5
      ? result.readyRows.length + ' ready question changes passed validation. Publishing now will activate Unit 5 on StudyPhysio.org. Continue?'
      : result.readyRows.length + ' ready question change(s) passed validation. Publish them now?';
    const response = SpreadsheetApp.getUi().alert(
      'Publish to StudyPhysio?',
      confirmationMessage,
      SpreadsheetApp.getUi().ButtonSet.YES_NO
    );
    if (response !== SpreadsheetApp.getUi().Button.YES) return;

    const version = makeVersion_('v');
    writeValidationErrors_([]);
    publishCandidate_(
      result.candidate,
      version,
      result.readyRows,
      activatesUnit5 ? 'Published and activated Unit 5' : 'Published'
    );
    SpreadsheetApp.getUi().alert(
      activatesUnit5 ? 'Published and activated' : 'Published',
      result.readyRows.length + ' question change(s) are now live.'
        + (activatesUnit5 ? ' Unit 5 is now available.' : '')
        + ' Refresh the StudyPhysio website to see them.',
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

function setupUnit5DraftWorkspace() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const configSheet = getSheet_(STUDYPHYSIO.configSheet);
    let config = getCheckupConfig_();
    if (!config.some(function (item) { return item.id === STUDYPHYSIO.unit5CheckupId; })) {
      const unit6Row = config.findIndex(function (item) { return item.id === 'unit6-human-performance-checkup'; }) + 2;
      const insertRow = unit6Row > 1 ? unit6Row : configSheet.getLastRow() + 1;
      configSheet.insertRowBefore(insertRow);
      configSheet.getRange(insertRow, 1, 1, 5).setValues([[
        STUDYPHYSIO.unit5CheckupId,
        STUDYPHYSIO.unit5Title,
        false,
        false,
        7,
      ]]);
      config = getCheckupConfig_();
    }

    const displayOrder = {
      'unit1-pillar-checkup1': 1,
      'unit1-pillar-checkup2': 2,
      'unit2-cardiovascular-checkup': 3,
      'unit3-self-defense-checkup1': 4,
      'unit3-self-defense-checkup2': 5,
      'unit4-brain-on-drugs-checkup': 6,
      'unit5-checkup': 7,
      'unit6-human-performance-checkup': 8,
      'unit7-sexual-health-and-relationships-checkup': 9,
    };
    const configRows = configSheet.getRange(2, 1, configSheet.getLastRow() - 1, 5).getValues();
    configRows.forEach(function (row, index) {
      const id = String(row[0]).trim();
      if (Object.prototype.hasOwnProperty.call(displayOrder, id)) {
        row[4] = displayOrder[id];
      }
      if (id === STUDYPHYSIO.unit5CheckupId) {
        row[1] = STUDYPHYSIO.unit5Title;
        row[2] = false;
      }
      configRows[index] = row;
    });
    configSheet.getRange(2, 1, configRows.length, 5).setValues(configRows);
    config = getCheckupConfig_();

    const questionsSheet = getSheet_(STUDYPHYSIO.questionsSheet);
    const existingRowCount = Math.max(0, questionsSheet.getLastRow() - STUDYPHYSIO.firstQuestionRow + 1);
    const existingRows = existingRowCount === 0
      ? []
      : questionsSheet.getRange(STUDYPHYSIO.firstQuestionRow, 1, existingRowCount, 10).getValues();
    const existingUnit5Rows = existingRows.filter(function (row) {
      return String(row[1]).trim() === STUDYPHYSIO.unit5CheckupId;
    });

    if (existingUnit5Rows.length === 0) {
      const startRow = questionsSheet.getLastRow() + 1;
      const sourceRow = questionsSheet.getRange(startRow - 1, 1, 1, 10);
      const destination = questionsSheet.getRange(startRow, 1, STUDYPHYSIO.questionsPerCheckup, 10);
      sourceRow.copyTo(destination, SpreadsheetApp.CopyPasteType.PASTE_NORMAL, false);

      const values = Array.from({ length: STUDYPHYSIO.questionsPerCheckup }, function (_, index) {
        return [
          STUDYPHYSIO.unit5CheckupId + '-q' + String(index + 1).padStart(3, '0'),
          STUDYPHYSIO.unit5CheckupId,
          '',
          '',
          '',
          '',
          false,
          'Unit draft',
          '',
          '',
        ];
      });
      destination.setValues(values);
      questionsSheet.setRowHeightsForced(
        startRow,
        STUDYPHYSIO.questionsPerCheckup,
        questionsSheet.getRowHeight(startRow - 1)
      );
    } else if (existingUnit5Rows.length !== STUDYPHYSIO.questionsPerCheckup) {
      throw new Error('Unit 5 draft setup is incomplete: expected 50 prepared rows, found ' + existingUnit5Rows.length + '.');
    }

    const questionRowCount = Math.max(0, questionsSheet.getLastRow() - STUDYPHYSIO.firstQuestionRow + 1);
    const questionRows = questionRowCount === 0
      ? []
      : questionsSheet.getRange(STUDYPHYSIO.firstQuestionRow, 1, questionRowCount, 10).getValues();
    const orderedQuestionRows = orderQuestionRowsByConfig_(questionRows, config);
    const orderChanged = questionRows.some(function (row, index) {
      return row !== orderedQuestionRows[index];
    });
    if (orderChanged) {
      questionsSheet
        .getRange(STUDYPHYSIO.firstQuestionRow, 1, orderedQuestionRows.length, 10)
        .setValues(orderedQuestionRows);
    }

    const unit5FirstIndex = orderedQuestionRows.findIndex(function (row) {
      return String(row[1]).trim() === STUDYPHYSIO.unit5CheckupId;
    });
    if (unit5FirstIndex >= 0) {
      questionsSheet
        .getRange(STUDYPHYSIO.firstQuestionRow + unit5FirstIndex, 3)
        .setNote('Start here: enter the Unit 5 topic. Complete all 50 rows before marking them Ready to Publish.');
    }

    questionsSheet.getRange('A2').setValue(
      'Edit existing questions normally. Unit 5 stays hidden until all 50 prepared rows are complete, marked Ready to Publish, validated, and published together.'
    );

    const instructionsSheet = getSheet_('Instructions');
    instructionsSheet.getRange('A11:B17').clearContent();
    instructionsSheet.getRange('A3:B3').copyTo(instructionsSheet.getRange('A11:B11'), SpreadsheetApp.CopyPasteType.PASTE_FORMAT, false);
    instructionsSheet.getRange('A4:B9').copyTo(instructionsSheet.getRange('A12:B17'), SpreadsheetApp.CopyPasteType.PASTE_FORMAT, false);
    instructionsSheet.getRange('A11:B17').setValues([
      ['Unit 5', 'What to do'],
      ['1', 'Fill all 50 prepared Unit 5 rows. Leave Question ID and Checkup unchanged.'],
      ['2', 'Complete the topic, question, TRUE/FALSE answer, explanation, and any private source note.'],
      ['3', 'Review the entire bank: 10 topics, five questions per topic, and exactly 25 TRUE / 25 FALSE.'],
      ['4', 'Only when the bank is complete, check Ready to Publish for all 50 Unit 5 rows.'],
      ['5', 'Choose StudyPhysio → Validate ready changes, then fix every listed issue.'],
      ['6', 'Choose StudyPhysio → Validate and publish. Confirm activation, then refresh StudyPhysio.org.'],
    ]);

    const historySheet = getSheet_(STUDYPHYSIO.historySheet);
    historySheet.getRange('A8').setValue('Unit 5 draft progress');
    historySheet.getRange('B8').setFormula(
      '=COUNTIFS(Questions!B:B,"' + STUDYPHYSIO.unit5CheckupId
        + '",Questions!C:C,"<>",Questions!D:D,"<>",Questions!E:E,"<>",Questions!F:F,"<>")'
        + '&" of 50 complete (hidden until published)"'
    );
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
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
  return buildCandidateFromData_(rows, getPublishedQuestions_(), getCheckupConfig_(), STUDYPHYSIO.firstQuestionRow);
}

function buildCandidateFromData_(rows, published, config, firstQuestionRow) {
  const readyRows = [];
  const candidateById = new Map();
  const publishedIds = new Set();
  const configById = new Map(config.map(function (item) { return [item.id, item]; }));
  const errors = [];

  published.forEach(function (question) {
    candidateById.set(question.id, question);
    publishedIds.add(question.id);
  });

  rows.forEach(function (row, index) {
    if (row[6] !== true) return;
    const record = rowToQuestion_(row);
    const rawAnswer = String(row[4]).trim().toUpperCase();
    if (row[4] !== true && row[4] !== false && rawAnswer !== 'TRUE' && rawAnswer !== 'FALSE') {
      errors.push((record.id || 'A ready row') + ' must use TRUE or FALSE.');
    }
    readyRows.push({ rowNumber: firstQuestionRow + index, record: record, note: row[8] });
  });

  if (readyRows.length === 0) {
    return {
      ok: false,
      errors: ['No questions are marked Ready to Publish.'],
      readyRows: [],
      candidate: published,
      newlyActivatedCheckupIds: [],
    };
  }

  const readyIds = new Set();
  const inactiveReadyRows = new Map();
  readyRows.forEach(function (item) {
    const record = item.record;
    if (readyIds.has(record.id)) errors.push('Duplicate ready question ID: ' + (record.id || '(blank)') + '.');
    readyIds.add(record.id);

    if (publishedIds.has(record.id)) {
      candidateById.set(record.id, record);
      return;
    }

    const checkup = configById.get(record.checkup);
    if (!checkup) {
      errors.push((record.id || 'A ready row') + ' uses an unknown checkup: ' + (record.checkup || '(blank)') + '.');
      return;
    }
    if (checkup.active) {
      errors.push('New or changed question IDs require an owner-managed structural update: ' + (record.id || '(blank)') + '.');
      return;
    }
    if (!inactiveReadyRows.has(record.checkup)) inactiveReadyRows.set(record.checkup, []);
    inactiveReadyRows.get(record.checkup).push(item);
  });

  const newlyActivatedCheckupIds = [];
  const newRecords = [];
  inactiveReadyRows.forEach(function (items, checkupId) {
    const draftRows = rows.filter(function (row) { return String(row[1]).trim() === checkupId; });
    if (draftRows.length !== STUDYPHYSIO.questionsPerCheckup) {
      errors.push(checkupId + ' must have exactly 50 prepared draft rows; found ' + draftRows.length + '.');
      return;
    }
    if (items.length !== STUDYPHYSIO.questionsPerCheckup) {
      errors.push(
        checkupId + ' remains hidden: ' + items.length
          + ' of 50 rows are marked Ready to Publish. Complete and mark all 50 together.'
      );
      return;
    }
    newlyActivatedCheckupIds.push(checkupId);
    items.sort(function (a, b) { return a.rowNumber - b.rowNumber; });
    items.forEach(function (item) { newRecords.push(item.record); });
  });

  const candidate = published.map(function (question) { return candidateById.get(question.id); }).concat(newRecords);
  if (errors.length === 0) errors.push.apply(errors, validateQuestionSet_(candidate, config));

  return {
    ok: errors.length === 0,
    errors: Array.from(new Set(errors)),
    readyRows: readyRows,
    candidate: candidate,
    newlyActivatedCheckupIds: newlyActivatedCheckupIds,
  };
}

function validateQuestionSet_(questions, configOverride) {
  const errors = [];
  const allConfig = configOverride || getCheckupConfig_();
  const candidateCheckupIds = new Set(questions.map(function (question) { return question.checkup; }).filter(Boolean));
  const config = allConfig.filter(function (item) { return item.active || candidateCheckupIds.has(item.id); });
  const ids = new Set();
  const wording = new Set();
  const expectedQuestions = config.length * STUDYPHYSIO.questionsPerCheckup;

  if (questions.length !== expectedQuestions) {
    errors.push('Expected ' + expectedQuestions + ' published questions, found ' + questions.length + '.');
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

  const knownIds = new Set(allConfig.map(function (item) { return item.id; }));
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
  syncConfigActivation_(candidate);
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
  const rowCount = Math.max(0, sheet.getLastRow() - STUDYPHYSIO.firstQuestionRow + 1);
  if (rowCount === 0) return;
  const rows = sheet.getRange(STUDYPHYSIO.firstQuestionRow, 1, rowCount, 10).getValues();
  const candidateById = new Map(candidate.map(function (question) { return [question.id, question]; }));
  const inactiveCheckups = new Set(getCheckupConfig_()
    .filter(function (item) { return !item.active; })
    .map(function (item) { return item.id; }));
  const values = rows.map(function (row) {
    const id = String(row[0]).trim();
    const published = candidateById.get(id);
    if (!published) {
      row[6] = false;
      row[7] = inactiveCheckups.has(String(row[1]).trim()) ? 'Unit draft' : 'Draft';
      row[9] = '';
      return row;
    }
    return [
      published.id,
      published.checkup,
      published.topic,
      published.question,
      published.correct ? 'TRUE' : 'FALSE',
      published.explanation,
      false,
      'Live',
      row[8],
      version,
    ];
  });
  sheet.getRange(STUDYPHYSIO.firstQuestionRow, 1, values.length, 10).setValues(values);
}

function syncConfigActivation_(candidate) {
  const configSheet = getSheet_(STUDYPHYSIO.configSheet);
  const rowCount = configSheet.getLastRow() - 1;
  if (rowCount <= 0) return;
  const values = configSheet.getRange(2, 1, rowCount, 5).getValues();
  const activeIds = new Set(candidate.map(function (question) { return question.checkup; }));
  values.forEach(function (row) {
    row[3] = activeIds.has(String(row[0]).trim());
  });
  configSheet.getRange(2, 1, values.length, 5).setValues(values);
  configSheet.getRange('H4').setValue(candidate.length);
  configSheet.getRange('H5').setValue(activeIds.size);
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

function orderQuestionRowsByConfig_(rows, config) {
  const orderByCheckupId = new Map(config.map(function (item) {
    return [item.id, Number(item.order)];
  }));

  return rows
    .map(function (row, index) {
      const checkupId = String(row[1]).trim();
      return {
        row: row,
        originalIndex: index,
        order: orderByCheckupId.has(checkupId)
          ? orderByCheckupId.get(checkupId)
          : Number.MAX_SAFE_INTEGER,
      };
    })
    .sort(function (left, right) {
      return left.order - right.order || left.originalIndex - right.originalIndex;
    })
    .map(function (item) { return item.row; });
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

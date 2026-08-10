'use strict';

const checkupRegistry = {
    'unit1-pillar-checkup1': {
        title: 'Pillar Checkup 1',
        questions: pillarCheckup1Questions['unit1-pillar-checkup1']
    },
    'unit1-pillar-checkup2': {
        title: 'Pillar Checkup 2',
        questions: pillarCheckup2Questions['unit1-pillar-checkup2']
    },
    'unit2-cardiovascular-checkup': {
        title: 'Cardiovascular Health Checkup',
        questions: unit2CardiovascularCheckup['unit2-cardiovascular-checkup']
    },
    'unit3-self-defense-checkup1': {
        title: 'Self Defense Checkup 1',
        questions: unit3SelfDefenseCheckup1['unit3-self-defense-checkup1']
    },
    'unit3-self-defense-checkup2': {
        title: 'Self Defense Checkup 2',
        questions: unit3SelfDefenseCheckup2['unit3-self-defense-checkup2']
    },
    'unit4-brain-on-drugs-checkup': {
        title: 'Your Brain on Drugs Checkup',
        questions: unit4BrainOnDrugsCheckup['unit4-brain-on-drugs-checkup']
    },
    'unit6-human-performance-checkup': {
        title: 'Human Performance Checkup',
        questions: unit6HumanPerformanceCheckup['unit6-human-performance-checkup']
    },
    'unit7-sexual-health-and-relationships-checkup': {
        title: 'SHARE Checkup',
        questions: unit7SexualHealthAndRelationshipsCheckup['unit7-sexual-health-and-relationships-checkup'],
        exactBalance: true
    }
};

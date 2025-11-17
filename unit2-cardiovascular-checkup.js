// StudyPhysio - Unit 2: Cardiovascular Health Checkup Questions
// 50 True/False questions covering 10 topics

const unit2CardiovascularCheckup = {
    'unit2-cardiovascular-checkup': [

        // TOPIC 1: Directional Terms (5 questions)
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Anterior refers to the front of the body, while posterior refers to the back.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Anterior</strong> (or ventral) means toward the front of the body, while <strong>posterior</strong> (or dorsal) means toward the back. For example, the sternum is anterior to the spine.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Superior means closer to the feet, while inferior means closer to the head.',
            correct: false,
            explanation: 'This is <strong>false</strong>. It\'s the opposite! <strong>Superior</strong> means toward the head (upper), while <strong>inferior</strong> means toward the feet (lower). For example, the heart is superior to the stomach.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Medial means closer to the midline of the body, while lateral means farther from the midline.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Medial</strong> means toward the body\'s midline, while <strong>lateral</strong> means away from the midline. For example, the nose is medial to the ears.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Superficial means closer to the surface of the body, while deep means farther from the surface.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Superficial</strong> structures are near the body surface (like skin), while <strong>deep</strong> structures are farther from the surface (like bones). For example, muscles are deep to the skin.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Proximal means farther from the point of attachment, while distal means closer to the point of attachment.',
            correct: false,
            explanation: 'This is <strong>false</strong>. It\'s reversed! <strong>Proximal</strong> means closer to the point of attachment or trunk, while <strong>distal</strong> means farther away. For example, the elbow is proximal to the wrist.'
        },

        // TOPIC 2: Heart Blood Flow (5 questions)
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Blood enters the right atrium from the superior and inferior vena cava.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Deoxygenated blood</strong> returns to the heart through the superior vena cava (from upper body) and inferior vena cava (from lower body), entering the right atrium.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'The right ventricle pumps oxygenated blood to the body through the aorta.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The right ventricle pumps <strong>deoxygenated blood to the lungs</strong> through the pulmonary arteries. The <strong>left ventricle</strong> pumps oxygenated blood to the body through the aorta.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Oxygenated blood returns from the lungs to the left atrium via the pulmonary veins.',
            correct: true,
            explanation: 'This is <strong>true</strong>. After gas exchange in the lungs, <strong>oxygenated blood returns through the four pulmonary veins</strong> to the left atrium. This is the only place in the body where veins carry oxygenated blood.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Blood flows from the left atrium through the tricuspid valve into the left ventricle.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Blood flows from the left atrium through the <strong>bicuspid (mitral) valve</strong> into the left ventricle. The <strong>tricuspid valve</strong> is between the right atrium and right ventricle.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'The interventricular septum separates the left and right ventricles.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>interventricular septum</strong> is the muscular wall that separates the two ventricles. The interatrial septum separates the two atria, preventing mixing of oxygenated and deoxygenated blood.'
        },

        // TOPIC 3: Coronary Circulation (5 questions)
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'The coronary arteries supply the heart muscle with oxygenated blood.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>coronary arteries</strong> branch off the aorta and supply the myocardium (heart muscle) with oxygen and nutrients. The heart cannot use blood inside its chambers for its own needs.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'Coronary arteries branch directly from the pulmonary artery.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Coronary arteries branch from the <strong>aorta</strong>, just above the aortic valve. This ensures the heart muscle receives oxygenated blood. The pulmonary artery carries deoxygenated blood to the lungs.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'Coronary veins drain deoxygenated blood from the heart muscle into the coronary sinus.',
            correct: true,
            explanation: 'This is <strong>true</strong>. After delivering oxygen to the heart muscle, <strong>coronary veins</strong> collect deoxygenated blood and drain it into the <strong>coronary sinus</strong>, which empties into the right atrium.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'Blockage of a coronary artery can lead to a heart attack.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When a coronary artery becomes blocked (usually by plaque), the heart muscle it supplies is deprived of oxygen, causing <strong>myocardial infarction (heart attack)</strong>. This can damage or kill heart tissue.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'The heart muscle can survive for several hours without blood flow from coronary circulation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Heart muscle tissue is extremely metabolically active and requires <strong>constant oxygen supply</strong>. Even a few minutes without blood flow can cause damage, and prolonged blockage leads to tissue death (heart attack).'
        },

        // TOPIC 4: Arteries and Veins (5 questions)
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Arteries carry blood away from the heart, while veins carry blood toward the heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Arteries</strong> carry blood away from the heart (usually oxygenated), while <strong>veins</strong> carry blood back to the heart (usually deoxygenated). This is true regardless of oxygen content.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Arteries have thinner walls than veins because they carry blood at lower pressure.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Arteries have thicker, more muscular walls</strong> than veins because they must withstand higher blood pressure from the heart\'s pumping action. Veins have thinner walls and lower pressure.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Veins contain valves that prevent backflow of blood.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Most <strong>veins contain one-way valves</strong> that prevent blood from flowing backward, especially important in the legs where blood must flow against gravity. Arteries don\'t need valves because of high pressure.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Capillaries are the smallest blood vessels where gas and nutrient exchange occurs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Capillaries</strong> are tiny vessels connecting arterioles and venules. Their thin walls (one cell thick) allow exchange of oxygen, nutrients, and waste between blood and tissues.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Vasoconstriction is the widening of blood vessels that increases blood flow.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vasoconstriction</strong> is the narrowing of blood vessels, which <strong>decreases</strong> blood flow and increases blood pressure. <strong>Vasodilation</strong> is the widening that increases blood flow.'
        },

        // TOPIC 5: Heart Disease (5 questions)
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Atherosclerosis is the buildup of plaque in the arteries that narrows blood vessels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Atherosclerosis</strong> is the accumulation of fatty deposits (plaque) on artery walls, narrowing the lumen and reducing blood flow. This is a major cause of heart attacks, strokes, and peripheral artery disease.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Hypertension is defined as blood pressure consistently below 120/80 mmHg.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Hypertension (high blood pressure)</strong> is defined as blood pressure consistently <strong>at or above 130/80 mmHg</strong>. Normal blood pressure is below 120/80 mmHg. Hypertension increases cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'HDL cholesterol is considered "good" cholesterol because it helps remove cholesterol from arteries.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>HDL (high-density lipoprotein)</strong> cholesterol is "good" because it transports cholesterol from arteries to the liver for removal. <strong>LDL</strong> (low-density lipoprotein) is "bad" cholesterol that contributes to plaque buildup.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'A heart attack occurs when blood flow to part of the brain is blocked.',
            correct: false,
            explanation: 'This is <strong>false</strong>. A <strong>heart attack (myocardial infarction)</strong> occurs when blood flow to part of the <strong>heart muscle</strong> is blocked. When blood flow to the <strong>brain</strong> is blocked, it\'s called a stroke.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Cardiovascular disease is the leading cause of death in America.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cardiovascular diseases</strong> (including heart disease and stroke) are the leading cause of death in the United States and globally, accounting for more deaths than any other cause.'
        },

        // TOPIC 6: Heart Electrical System (5 questions)
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'The sinoatrial (SA) node is the natural pacemaker of the heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>SA node</strong>, located in the right atrium, generates electrical impulses that initiate each heartbeat. It sets the heart\'s rhythm at about 60-100 beats per minute at rest.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'The atrioventricular (AV) node delays the electrical signal before it reaches the ventricles.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>AV node</strong> briefly delays the electrical signal, allowing the atria to contract and empty blood into the ventricles before ventricular contraction begins. This ensures efficient pumping.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'Purkinje fibers conduct electrical signals rapidly through the ventricular walls.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Purkinje fibers</strong> are specialized conducting fibers that rapidly distribute electrical signals throughout the ventricles, causing coordinated contraction from the apex upward to efficiently eject blood.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'Tachycardia refers to an abnormally slow heart rate.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Tachycardia</strong> is an abnormally <strong>fast</strong> heart rate (typically over 100 bpm at rest). <strong>Bradycardia</strong> is an abnormally slow heart rate (typically under 60 bpm at rest).'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'An electrocardiogram (EKG) measures the electrical activity of the heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. An <strong>EKG (or ECG)</strong> records the electrical signals that control the heartbeat. It can detect arrhythmias, heart attacks, and other cardiac problems by showing abnormal electrical patterns.'
        },

        // TOPIC 7: Heart Attacks (5 questions)
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Angina is chest pain caused by reduced blood flow to the heart muscle.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Angina</strong> is chest pain or discomfort caused by insufficient blood flow to the heart muscle, usually due to coronary artery narrowing. It\'s a warning sign of heart disease but doesn\'t cause permanent damage.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Myocardial ischemia refers to adequate blood supply to the heart muscle.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Myocardial ischemia</strong> means <strong>inadequate</strong> blood supply to the heart muscle, resulting in oxygen deprivation. Prolonged ischemia leads to myocardial infarction (heart attack) and tissue death.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Sudden cardiac death is most often caused by ventricular fibrillation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Ventricular fibrillation</strong> (chaotic, ineffective quivering of ventricles) is the most common cause of sudden cardiac death. The heart cannot pump blood, causing death within minutes without immediate treatment.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'A coronary angioplasty is a procedure that uses a balloon to open blocked arteries.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Coronary angioplasty</strong> uses a balloon catheter to widen blocked coronary arteries. Often a <strong>stent</strong> (mesh tube) is placed to keep the artery open and improve blood flow to the heart.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Heart attack symptoms are always the same for men and women.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While both experience chest pain, <strong>women</strong> are more likely to have atypical symptoms like nausea, shortness of breath, back/jaw pain, and fatigue. This can delay diagnosis and treatment in women.'
        },

        // TOPIC 8: CPR and AED (5 questions)
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'CPR stands for Cardiopulmonary Resuscitation and includes chest compressions and rescue breaths.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>CPR</strong> combines chest compressions (to pump blood) and rescue breaths (to provide oxygen). However, hands-only CPR (compressions only) is now recommended for untrained bystanders and is still effective.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'An AED (Automated External Defibrillator) can restart a heart that has completely stopped beating.',
            correct: false,
            explanation: 'This is <strong>false</strong>. An AED delivers a shock to stop <strong>abnormal rhythms</strong> like ventricular fibrillation, allowing the heart to restart normal rhythm. It cannot restart a heart in asystole (flatline). CPR is still needed.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'During CPR, chest compressions should be performed at a rate of about 100-120 compressions per minute.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The recommended compression rate is <strong>100-120 per minute</strong>, roughly the tempo of "Stayin\' Alive." Compressions should be hard and fast, with full chest recoil between compressions.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'You should stop CPR immediately once an AED arrives and is being set up.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Continue CPR until the AED is ready to analyze</strong>. Minimize interruptions in compressions. Only stop when the AED prompts you to stop for rhythm analysis or shock delivery.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'AEDs provide voice instructions to guide users through the process.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Modern <strong>AEDs are designed for public use</strong> with clear voice prompts that guide users step-by-step, from pad placement to when to deliver a shock. They analyze heart rhythm automatically.'
        },

        // TOPIC 9: Stress and Heart (5 questions)
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'During acute stress, heart rate and blood pressure increase to prepare for "fight or flight."',
            correct: true,
            explanation: 'This is <strong>true</strong>. The acute stress response triggers release of <strong>adrenaline and cortisol</strong>, causing increased heart rate, blood pressure, and cardiac output to prepare the body for immediate action.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Chronic stress has no significant effect on cardiovascular health.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Chronic stress significantly damages cardiovascular health</strong> by maintaining elevated blood pressure, promoting inflammation and atherosclerosis, and increasing risk for heart attack and stroke.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Prolonged elevation of cortisol from chronic stress can contribute to hypertension.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Chronic <strong>cortisol elevation</strong> contributes to sustained high blood pressure by affecting blood vessel tone, sodium retention, and other mechanisms. This increases cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Stress only affects mental health and has no impact on physical heart disease.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Chronic stress is a <strong>major risk factor for cardiovascular disease</strong>. It contributes to high blood pressure, inflammation, atherosclerosis, and behaviors (poor diet, inactivity) that worsen heart health.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Managing stress through exercise, sleep, and relaxation techniques can improve cardiovascular health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Stress management</strong> reduces cortisol and inflammation, lowers blood pressure, and promotes healthy behaviors. Exercise, adequate sleep, social connection, and relaxation techniques all protect cardiovascular health.'
        },

        // TOPIC 10: Heart Health (5 questions)
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'The five pillars of health (social connection, nutrition, exercise, sleep, stress management) all contribute to cardiovascular health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. All <strong>five pillars</strong> protect cardiovascular health: social connections reduce stress, good nutrition prevents atherosclerosis, exercise strengthens the heart, sleep allows recovery, and stress management lowers blood pressure.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Regular aerobic exercise can lower blood pressure and strengthen the heart muscle.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Regular aerobic exercise</strong> (150+ min/week) lowers resting blood pressure, strengthens the myocardium, improves cholesterol levels, reduces atherosclerosis, and significantly decreases cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Smoking is a major modifiable risk factor for cardiovascular disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Smoking</strong> damages blood vessel linings, promotes atherosclerosis, increases blood clotting, raises blood pressure, and significantly increases heart attack and stroke risk. Quitting smoking greatly improves cardiovascular health.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'The Framingham Heart Study showed that cardiovascular disease risk factors cannot be modified.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The Framingham Heart Study identified <strong>modifiable risk factors</strong> like high blood pressure, high cholesterol, smoking, diabetes, obesity, and inactivity. Addressing these factors significantly reduces cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'A Mediterranean diet has been shown to reduce cardiovascular disease risk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Mediterranean diet</strong> (rich in fruits, vegetables, whole grains, fish, olive oil) reduces cardiovascular disease, heart attacks, and strokes through anti-inflammatory effects, healthy fats, and antioxidants.'
        }
    ]
};

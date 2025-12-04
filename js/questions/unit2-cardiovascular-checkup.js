// UNIT 2: CARDIOVASCULAR HEALTH CHECKUP - COMPLETE HARDER/TRICKIER QUESTION BANK
// 50 True/False Questions (5 per topic × 10 topics)
// Distribution: 28 True (~56%), 22 False (~44%)
// Challenge conceptual understanding with real misconceptions, not semantic tricks

const unit2CardiovascularCheckup = {
    'unit2-cardiovascular-checkup': [

        // ==========================================
        // TOPIC 1: DIRECTIONAL TERMS (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'In anatomical position, anterior means toward the front and posterior toward the back, so the stomach is anterior to the spine and the kidneys are posterior to the peritoneum.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>directional terms correctly describe these structures\' positions</strong>. Stomach is in front of spine. Kidneys are behind the peritoneum (retroperitoneal position). Understanding which structures are anterior vs posterior is crucial for understanding cardiovascular anatomy—for example, knowing the heart is mostly anterior helps explain why it\'s palpated on the left front of the chest.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Superior refers to toward the head and inferior toward the feet, which is why the superior vena cava collects blood from the upper body while the inferior vena cava collects from the lower body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The vessel names directly reflect their positions. <strong>Superior = upper, Inferior = lower</strong>. Both return deoxygenated blood to the right atrium but from different body regions. This naming convention helps remember their functions. Understanding positional terminology prevents confusion when learning blood flow pathways.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Medial means toward the midline of the body while lateral means away from the midline, so the left ventricle is medial to the left arm and the ribs are lateral to the heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. These directional relationships are correct. The heart is medial (toward center), arms are lateral (away from center). Understanding this spatial relationship helps visualize why the heart is in the mediastinum (middle compartment) and why it\'s more protected than peripheral structures. This is foundational for understanding cardiac anatomy and positioning.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Superficial means closer to the body surface while deep means farther from the surface, so the skin is superficial to muscles and the heart is deep to the ribs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Layering from outside to inside: skin (superficial) → muscles → ribs → pericardium → heart (deep). Understanding this layering explains why: you can feel the heartbeat through the chest wall, surface injuries don\'t directly damage the heart, and thoracic surgery requires penetrating multiple layers. This spatial understanding is clinically important.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Proximal means closer to a limb\'s attachment point to the body while distal means farther away, so the elbow is proximal to the wrist and the foot is distal to the knee.',
            correct: true,
            explanation: 'This is <strong>true</strong>. These terms apply to limbs specifically. Proximal = closer to trunk, distal = farther from trunk. Understanding this helps when describing vascular anatomy in limbs—for example, the femoral artery is proximal (in the thigh) while the dorsalis pedis artery is distal (on the foot). This prevents confusion when describing where blockages occur in limb vessels.'
        },

        // ==========================================
        // TOPIC 2: HEART BLOOD FLOW (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Deoxygenated blood from the body enters the right atrium via the superior and inferior vena cava, then flows through the tricuspid valve into the right ventricle, which contracts to pump it through the pulmonary valve into the pulmonary arteries toward the lungs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. This correctly traces the complete right-side pathway. <strong>Key sequencing: right atrium → tricuspid valve → right ventricle → pulmonary valve → pulmonary arteries</strong>. Understanding the proper valve names and sequence prevents confusion. The tricuspid (3 cusps) separates atrium from ventricle on the right, while the pulmonary valve separates ventricle from arteries.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Oxygenated blood returns from the lungs via the four pulmonary veins into the left atrium, flows through the bicuspid (mitral) valve into the left ventricle, which then contracts to pump it through the aortic valve into the aorta for distribution to the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. This correctly traces the left-side pathway. <strong>Left atrium → bicuspid/mitral valve → left ventricle → aortic valve → aorta</strong>. The bicuspid valve (2 cusps) separates atrium from ventricle on the left. Understanding this parallel pathway to the right side helps compare the symmetric nature of the heart\'s dual-pump system.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'The right ventricle pumps blood to the lungs while the left ventricle pumps blood to the body, so the left ventricle\'s wall is thicker because it must generate higher pressure to overcome resistance in the systemic circulation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Systemic circulation (all body organs) has much greater resistance than pulmonary circulation (lungs)</strong>. The left ventricle must develop much higher pressure to overcome this resistance, so it has thicker muscular walls. This structural adaptation matches functional demands. Understanding why the left ventricle is stronger prevents confusion about why left ventricular damage is more serious than right ventricular damage.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'The interventricular septum completely separates blood in the left ventricle from blood in the right ventricle, preventing any mixing of oxygenated and deoxygenated blood.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Complete separation is essential</strong>—mixing would reduce oxygen delivery to tissues. The septum is muscular and solid in healthy hearts. Understanding this separation explains why holes in the septum (septal defects) cause mixing and reduced oxygenation. This is foundational for understanding how normal circulation maintains oxygen delivery versus what happens when flow is disrupted.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'The aorta receives oxygenated blood directly from the right ventricle and distributes it throughout the body, while the pulmonary artery receives deoxygenated blood from the left ventricle and sends it to the lungs.',
            correct: false,
            explanation: 'This is <strong>false</strong>—it\'s completely backward. <strong>Left ventricle → aorta (oxygenated blood to body)</strong>. <strong>Right ventricle → pulmonary arteries (deoxygenated blood to lungs)</strong>. Confusing these is a major error. This mistake prevents understanding basic cardiac function and oxygen delivery. The mnemonic helps: left = aorta (systemic), right = pulmonary (lungs).'
        },

        // ==========================================
        // TOPIC 3: CORONARY CIRCULATION (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'The coronary arteries branch directly from the aorta just above the aortic valve to supply the heart muscle with oxygenated blood, meaning the heart does not nourish itself from blood inside its chambers despite containing blood continuously.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>This addresses a critical misconception: blood inside the heart is being pumped, not nourishing the walls</strong>. The myocardium needs dedicated supply from coronary arteries. This is why: coronary blockage causes ischemia despite blood being present in chambers, the heart has its own circulation system, and coronary artery disease is the leading cause of death. Understanding this distinction is foundational.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'After delivering oxygen to the heart muscle, deoxygenated blood from the coronary circulation drains into the coronary sinus, which empties directly into the right atrium.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The coronary venous return completes the coronary circulation loop. <strong>Coronary arteries deliver, coronary veins return to coronary sinus → right atrium</strong>. Understanding the complete circuit explains how cardiac blood flow is independent of the chambers\'s blood and why coronary disease can damage the heart despite systemic blood pressure being normal.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'Blockage of a coronary artery leads to myocardial infarction because the heart muscle downstream of the blockage becomes oxygen-deprived and tissue dies in that region.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Coronary blockage → ischemia (low oxygen) → infarction (tissue death)</strong>. The area affected depends on which artery is blocked and available collateral circulation. Understanding this causal chain explains: why time-to-treatment matters (more tissue dies the longer ischemia lasts), why thrombolytics/angioplasty are emergency treatments, and why scar tissue remains after MI.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'The heart muscle can survive for several hours without blood flow from coronary circulation because it has internal energy stores and doesn\'t require constant oxygen supply.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Heart muscle is <strong>extremely metabolically active and requires constant oxygen</strong>. Even a few minutes without blood flow begins causing damage. After 4-6 minutes, irreversible damage becomes extensive. This is why sudden coronary blockage is immediately life-threatening and why emergency treatment is critical. The heart cannot "wait" for blood supply—it needs continuous oxygen.'
        },

        // ==========================================
        // TOPIC 4: ARTERIES AND VEINS (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Arteries carry blood away from the heart while veins carry blood back toward the heart, regardless of whether the blood is oxygenated or deoxygenated.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Direction and function define arteries/veins, not oxygen content</strong>. Most arteries carry oxygenated blood, but the pulmonary artery carries deoxygenated blood to the lungs. Most veins carry deoxygenated blood, but pulmonary veins carry oxygenated blood from lungs. Understanding this prevents the common mistake of thinking arteries = oxygenated, veins = deoxygenated.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Arteries have thick muscular walls with elastic fibers to withstand high blood pressure from the heart\'s pumping force, while veins have thin walls because blood pressure is much lower after flowing through capillaries.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Structure directly reflects pressure gradients</strong>. Arteries: thick muscle (high pressure), elastic fibers (stretch during systole, recoil during diastole). Veins: thin walls (low pressure), larger diameter (accommodate more blood volume). Understanding this structure-function relationship explains: why hypertension damages arteries, why veins don\'t rupture from high pressure, and why vessel location matters for surgery.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Veins contain one-way valves that prevent backflow of blood, especially important in the legs where blood must flow against gravity during standing and walking.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Venous valves are crucial for lower-body circulation</strong>. Without them, blood would pool in leg veins. Mechanism: when leg muscles contract, they squeeze veins, pushing blood upward; valves close when flow reverses, preventing backflow. Artery valves aren\'t needed because of constant forward pressure. Understanding this explains: why prolonged sitting increases clot risk, why leg exercises help circulation, and what causes varicose veins (valve failure).'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Capillaries are the smallest blood vessels where gas exchange and nutrient transfer occur, with walls only one cell thick to allow substances to diffuse between blood and tissues.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Capillary structure enables function</strong>. Thin walls (one endothelial cell layer) + slow flow = optimal for diffusion. Large surface area from numerous capillaries ensures efficient exchange. Understanding capillary function explains: how oxygen gets to tissues, why some drugs are given IV (direct capillary access), and how inflammation increases capillary permeability (swelling).'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Vasoconstriction decreases blood pressure by narrowing blood vessels, which is why it occurs during the fight-or-flight stress response to increase blood flow and oxygen delivery.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vasoconstriction actually increases blood pressure initially by increasing resistance</strong>. However, <strong>during fight-or-flight, selective vasoconstriction in non-essential organs (skin, gut) redirects blood to muscles and heart</strong>. So it increases local muscle blood flow while decreasing elsewhere. This distinction matters: understanding vasoconstriction\'s effects on pressure and distribution explains shock physiology and blood pressure regulation.'
        },

        // ==========================================
        // TOPIC 5: HEART DISEASE (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Atherosclerosis is the gradual buildup of plaque (lipids, cholesterol, immune cells, smooth muscle cells) inside artery walls that narrows the lumen and restricts blood flow, developing over decades before symptoms appear.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Atherosclerosis is a progressive, largely silent disease</strong>. Stages: endothelial damage → LDL infiltration → inflammatory response → smooth muscle proliferation → plaque formation → lumen narrowing. By the time symptoms appear (angina, MI), significant disease is already present. This explains why prevention and screening matter even in asymptomatic people.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Hypertension (high blood pressure) is defined as consistently elevated blood pressure at or above 130/80 mmHg, and chronic hypertension damages arteries by increasing stress on vessel walls and promoting atherosclerosis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>High pressure damages multiple ways</strong>: mechanical injury to endothelium (initiating atherosclerosis), increased LDL infiltration, smooth muscle proliferation, left ventricle hypertrophy (thickened walls from constant high pressure). This explains why hypertension is called "silent killer"—it causes damage without symptoms. Understanding the mechanisms explains why treatment even in asymptomatic people prevents future disease.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'HDL cholesterol is considered "good" cholesterol because it transports cholesterol from arteries back to the liver for removal, while LDL is "bad" cholesterol because it deposits cholesterol in artery walls promoting atherosclerosis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cholesterol transport direction matters functionally</strong>. HDL removes cholesterol (protective). LDL delivers cholesterol to arteries (harmful). Understanding this explains: why HDL levels and LDL levels independently predict heart disease risk, why statins primarily lower LDL, and why raising HDL is also beneficial. This is not arbitrary labeling—it reflects actual mechanism.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'A heart attack occurs when blood flow to part of the brain is blocked due to a clot or plaque rupture, causing sudden neurological symptoms.',
            correct: false,
            explanation: 'This is <strong>false</strong>. A <strong>heart attack (myocardial infarction) affects the heart muscle</strong>, not the brain. <strong>Brain blood flow blockage is a stroke</strong>. Confusing these is a serious error. MI symptoms: chest pain, shortness of breath, arm/jaw pain. Stroke symptoms: facial drooping, arm weakness, speech difficulty (FAST assessment). Understanding the distinction is crucial for recognizing emergencies and providing correct treatment.'
        },

        // ==========================================
        // TOPIC 6: HEART ELECTRICAL SYSTEM (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'The sinoatrial (SA) node is the heart\'s natural pacemaker, generating electrical impulses at about 60-100 per minute that initiate each heartbeat, setting the rhythm for the entire heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>SA node is the primary pacemaker</strong>. Located in right atrial wall, it fires spontaneously and fastest (if it fails, AV node can take over at slower rate). This natural rhythm is modulated by: sympathetic (increases rate), parasympathetic (decreases rate), and various hormones. Understanding the SA node explains how pacemakers work and why losing SA function is serious.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'The atrioventricular (AV) node briefly delays the electrical signal before it spreads to ventricles, allowing the atria to fully contract and empty blood into ventricles before ventricular contraction begins.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>The delay is functionally crucial</strong>. Without it, atria and ventricles would contract simultaneously, preventing effective blood movement through the heart. The delay ensures: atrial contraction completes first (atrial kick contributes ~20% of ventricular fill), then ventricles contract with full blood volume. Understanding this explains why heart blocks (AV node dysfunction) cause inefficient pumping.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'Purkinje fibers conduct the electrical signal rapidly through the ventricular walls, causing coordinated ventricular contraction that efficiently ejects blood from apex to base (upward).',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Purkinje fibers ensure synchronized ventricular contraction</strong>. Rapid conduction (fastest conduction velocity in the heart) plus strategic distribution means all ventricular muscle contracts nearly simultaneously. The contraction direction (apex upward) helps eject blood out the aorta efficiently. Understanding this explains: how arrhythmias disrupt this coordination, why bundle branch blocks reduce pumping efficiency, and what EKG abnormalities reveal about conduction problems.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'Tachycardia refers to an abnormally fast resting heart rate (typically over 100 bpm), while bradycardia refers to an abnormally slow resting heart rate (typically under 60 bpm).',
            correct: true,
            explanation: 'This is <strong>true</strong>. These terms describe rate abnormalities. <strong>Normal resting: 60-100 bpm</strong>. Tachycardia can result from: fever, stress, caffeine, hyperThyroidism, or arrhythmias. Bradycardia can result from: athletic conditioning (benign), hypothyroidism, medications, or conduction disease. Understanding these distinctions helps identify when abnormal rates indicate disease versus normal variation.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'An electrocardiogram (EKG) measures the electrical activity of the heart and can detect arrhythmias, ischemia, and past heart damage by showing abnormal patterns in the electrical signal.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The EKG records electrical signals from outside the body. <strong>Different waves represent different events</strong>: P wave (atrial depolarization), QRS complex (ventricular depolarization), T wave (ventricular repolarization). Abnormalities reveal: rhythm problems (arrhythmias), structural disease (hypertrophy), ischemia (ST changes), or past infarction (pathological Q waves). Understanding EKG basics helps interpret cardiac assessment findings.'
        },

        // ==========================================
        // TOPIC 7: HEART ATTACKS (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Angina is chest discomfort caused by insufficient blood flow to the heart muscle (ischemia) from coronary artery narrowing, serving as a warning sign that the heart is not getting enough oxygen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Angina = ischemia without infarction (no permanent damage yet)</strong>. Symptoms: chest pain/pressure, often triggered by exertion, relieved by rest. Stable angina is predictable; unstable angina occurs at rest (dangerous—may precede MI). Understanding angina as a warning sign explains why it\'s taken seriously and treated to prevent progression to infarction.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Myocardial ischemia refers to inadequate blood supply to the heart muscle causing oxygen deprivation, which leads to myocardial infarction (tissue death) if the blockage is not rapidly restored.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Ischemia is the process (low oxygen), infarction is the result (tissue death)</strong>. Timeline matters: ischemia begins immediately upon blockage; cell death becomes extensive after 4-6 minutes; large portions die within hours. This explains urgent treatment: restoring blood flow quickly (thrombolytics, angioplasty, stents) minimizes tissue loss. Understanding this timeline is critical for emergency response.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Sudden cardiac death most often results from ventricular fibrillation, a chaotic abnormal rhythm where ventricles quiver ineffectively rather than contract, preventing blood flow to the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Ventricular fibrillation is a lethal arrhythmia</strong>. The uncoordinated electrical activity prevents any effective pumping, stopping blood circulation within seconds. Death results without immediate treatment. This is why: defibrillation (AED) is emergency treatment—it stops the chaotic rhythm allowing the heart to restart normal rhythm, why time to treatment is measured in minutes, and why AEDs are placed in public spaces.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Coronary angioplasty is a procedure where a balloon catheter is inserted into a blocked coronary artery to widen it and restore blood flow, often followed by placing a stent to keep the artery open.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Angioplasty is a catheter-based intervention</strong>. Process: balloon expands narrowed segment, stent (mesh tube) holds it open. Advantages: less invasive than bypass surgery, can be done during acute MI (percutaneous coronary intervention). Understanding this explains: why it\'s an emergency treatment during MI, how it differs from bypass surgery, and why post-stent medications prevent clot formation.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Men and women experience identical heart attack symptoms and have the same risk factors, so screening and prevention strategies can be identical for both sexes.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Sex differences in MI presentation and risk exist</strong>. Women more often have: atypical symptoms (fatigue, shortness of breath, indigestion rather than chest pain), higher risk from depression/stress, worse outcomes partly due to delayed diagnosis. Risk factors also differ: hormonal changes (menopause increases risk), pregnancy complications increase lifetime risk. Understanding these differences prevents missed diagnoses in women.'
        },

        // ==========================================
        // TOPIC 8: CPR AND AED (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'CPR (Cardiopulmonary Resuscitation) combines chest compressions to pump blood and rescue breaths to provide oxygen, maintaining circulation and oxygenation until the heart rhythm can be restored.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>CPR is dual action: mechanical pump + oxygen delivery</strong>. Compressions maintain minimal circulation to vital organs. Rescue breaths provide oxygen. Hands-only CPR (compressions without breaths) is also effective and recommended for untrained bystanders. Understanding CPR\'s purpose explains why immediate initiation matters—every minute without circulation causes irreversible brain damage.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'An Automated External Defibrillator (AED) can detect life-threatening arrhythmias like ventricular fibrillation and deliver an electrical shock to stop the abnormal rhythm, allowing the heart to restart with normal rhythm.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>AED is designed for public use with voice prompts</strong>. It analyzes rhythm (if shockable, it charges and delivers shock). The shock stops disorganized electrical activity, allowing normal rhythm to restart. Understanding this explains: why AEDs are in public places, why time to defibrillation is critical (few minutes available before permanent brain damage), and why AED + CPR together save lives.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'During CPR, chest compressions should be performed at a rate of approximately 100-120 compressions per minute, roughly matching the tempo of the song "Stayin\' Alive."',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>100-120/min rate is evidence-based for optimal blood flow</strong>. "Stayin\' Alive" tempo matches this rate perfectly, providing a memory aid. Compressions should be: hard (pushing at least 2 inches deep), fast (100-120/min), with full chest recoil between compressions. Understanding proper technique explains why quality CPR matters—inadequate rate or depth reduces survival chances.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'You should stop CPR immediately once an AED arrives and is being set up, so the AED can accurately analyze the heart rhythm without movement interference.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Continue CPR until the AED is ready to analyze</strong>. Only pause briefly for rhythm analysis (takes few seconds). Minimize interruptions in compressions. Every pause in circulation increases risk of death—continuous flow is critical. The modern instruction: "Push hard and fast" with minimal interruption. Understanding this prevents dangerous gaps in circulation.'
        },

        // ==========================================
        // TOPIC 9: STRESS AND HEART (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'During the acute stress response, sympathetic nervous system activation increases heart rate, blood pressure, and cardiac output to prepare the body for "fight or flight" action during emergencies.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>The acute response is adaptive for genuine threats</strong>. Sympathetic effects: increased heart rate (more beats/min), increased contractility (stronger contractions), increased cardiac output (more blood per minute), vasoconstriction in non-essential organs. Together, these maximize delivery to muscles and brain. Understanding this adaptive response explains why it\'s beneficial temporarily but harmful when chronic.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Chronic stress maintains persistently elevated blood pressure and promotes atherosclerosis by increasing inflammation, arterial smooth muscle proliferation, and LDL infiltration into vessel walls.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Chronic stress is a cardiovascular disease risk factor through multiple mechanisms</strong>. Elevated cortisol and adrenaline cause: persistent high blood pressure (endothelial damage), increased inflammation (atherosclerosis foundation), sodium/water retention (volume expansion). Understanding these mechanisms explains why stress management is preventive cardiovascular medicine.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Prolonged elevation of cortisol from chronic stress contributes to sustained high blood pressure by affecting blood vessel tone, promoting sodium and water retention, and increasing peripheral vascular resistance.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cortisol has multiple hypertensive effects</strong>. It: increases sympathetic tone (raises blood pressure), increases sensitivity to catecholamines (amplifies stress response), causes sodium/water retention (increases blood volume), increases peripheral resistance. Together, these cause and sustain elevated blood pressure. Understanding this explains why chronic stress and hypertension are linked.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Stress only affects mental health and emotional state, with no direct impact on the development of physical heart disease.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Stress is a major cardiovascular disease risk factor with direct biological mechanisms</strong>. Mechanisms: hypertension, atherosclerosis promotion, arrhythmia triggering, increased clotting (thrombosis), endothelial dysfunction. Research shows: chronic stress predicts MI risk independently, acute emotional stress can trigger MI ("stress-induced cardiomyopathy"), depression is a post-MI prognostic factor. Understanding this prevents dismissing stress as "just psychological."'
        },

        // ==========================================
        // TOPIC 10: HEART HEALTH (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'The five pillars of health (social connection, nutrition, exercise, sleep, stress management) all contribute to cardiovascular health through different mechanisms—from reducing blood pressure to preventing atherosclerosis to managing inflammation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Each pillar addresses different disease mechanisms</strong>. Social connection reduces stress and promotes healthy behaviors. Exercise strengthens the heart and improves cholesterol. Good nutrition prevents atherosclerosis. Sleep allows cardiovascular recovery. Stress management prevents chronic activation. Understanding how these work together explains why "lifestyle changes" are recommended—no single intervention addresses all cardiovascular disease mechanisms.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Regular aerobic exercise (150+ minutes per week) reduces cardiovascular disease risk by lowering resting blood pressure, improving cholesterol levels, increasing cardiac output, and preventing atherosclerosis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Exercise is cardiovascular preventive medicine</strong>. Benefits: strengthens myocardium, improves endothelial function, lowers LDL and raises HDL, reduces resting blood pressure, improves insulin sensitivity. Mechanisms: less atherosclerosis development, reduced inflammation, weight management, stress reduction. Understanding why exercise works at a mechanistic level explains its importance even for seemingly healthy people.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Smoking is a major modifiable risk factor for cardiovascular disease because tobacco damages blood vessel linings, promotes atherosclerosis, increases thrombosis risk, and significantly increases MI and stroke risk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Smoking causes direct cardiovascular damage</strong>. Mechanisms: endothelial damage (atherosclerosis initiation), increased platelet activation (clotting risk), increased LDL oxidation (more atherogenic), increased blood viscosity, reduced oxygen availability. Quitting provides rapid benefits: within weeks, blood pressure drops; within months, atherosclerosis progression slows; cardiovascular risk decreases substantially. Understanding this explains why smoking cessation is priority cardiovascular intervention.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'The Mediterranean diet has been shown to reduce cardiovascular disease risk more effectively than most other dietary patterns due to its emphasis on unsaturated fats, fruits, vegetables, and whole grains.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Research confirms Mediterranean diet benefits. <strong>Components: olive oil (unsaturated fats), fish (omega-3), vegetables (antioxidants, fiber), whole grains (fiber), limited red meat</strong>. Mechanisms: reduces inflammation, improves cholesterol, reduces atherosclerosis progression. Understanding the dietary components explains which elements are protective and why—it\'s not just a diet but a pattern addressing multiple risk factors.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Cardiovascular disease prevention requires only managing a single risk factor like blood pressure or cholesterol, as controlling one factor is sufficient to prevent most heart attacks and strokes.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Cardiovascular disease is multifactorial—addressing all risk factors matters</strong>. Single-factor management is insufficient. Risk factors interact: a person with borderline blood pressure + borderline cholesterol + diabetes has higher risk than one factor alone would suggest. Comprehensive approach addressing: blood pressure, cholesterol, diabetes, smoking, obesity, exercise, diet, stress is necessary for optimal prevention. Understanding this explains why multiple "pills" and lifestyle changes are often recommended.'
        }
    ]
};

// Export for use in StudyPhysio

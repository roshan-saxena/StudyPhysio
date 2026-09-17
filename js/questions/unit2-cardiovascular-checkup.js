// UNIT 2: CARDIOVASCULAR HEALTH CHECKUP - COMPLETE HARDER/TRICKIER QUESTION BANK
// 50 True/False Questions (5 per topic × 10 topics)
// Distribution: 25 True / 25 False
// Challenge conceptual understanding with real misconceptions, not semantic tricks

const unit2CardiovascularCheckup = {
    'unit2-cardiovascular-checkup': [

        // ==========================================
        // TOPIC 1: DIRECTIONAL TERMS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'In anatomical position, anterior means toward the front and posterior toward the back, so the stomach is anterior to the spine and the kidneys are posterior to the peritoneum.',
            correct: true,
            explanation: 'This is true. The directional terms correctly describe these structures\' positions. Stomach is in front of spine. Kidneys are behind the peritoneum (retroperitoneal position). Understanding which structures are anterior vs posterior is crucial for understanding cardiovascular anatomy—for example, knowing the heart is mostly anterior helps explain why it\'s palpated on the left front of the chest.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Superior and inferior reverse when a person lies down, so the vena cava draining the upper body becomes anatomically inferior in a horizontal position.',
            correct: false,
            explanation: 'This is false. Anatomical directional terms are based on the standard anatomical position, not on how the body happens to be oriented. Superior remains toward the head and inferior toward the feet. Lying down changes orientation relative to the room, not the anatomical relationship between the venae cavae and the body regions they drain.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Medial means toward the midline of the body while lateral means away from the midline, so the left ventricle is medial to the left arm and the ribs are lateral to the heart.',
            correct: true,
            explanation: 'This is true. These directional relationships are correct. The heart is medial (toward center), arms are lateral (away from center). Understanding this spatial relationship helps visualize why the heart is in the mediastinum (middle compartment) and why it\'s more protected than peripheral structures. This is foundational for understanding cardiac anatomy and positioning.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Superficial means closer to the body surface while deep means farther from the surface, so the skin is superficial to muscles and the heart is deep to the ribs.',
            correct: true,
            explanation: 'This is true. Layering from outside to inside: skin (superficial) → muscles → ribs → pericardium → heart (deep). Understanding this layering explains why: you can feel the heartbeat through the chest wall, surface injuries don\'t directly damage the heart, and thoracic surgery requires penetrating multiple layers. This spatial understanding is clinically important.'
        },
        {
            type: 'tf',
            topic: 'Directional Terms',
            question: 'Proximal and distal describe distance from the body\'s midline, which is why the elbow is proximal to the wrist because it is more medial.',
            correct: false,
            explanation: 'This is false. Proximal and distal describe distance from a limb\'s attachment to the trunk; medial and lateral describe distance from the midline. The elbow is proximal to the wrist because it is closer to the arm\'s attachment point. The misconception combines two different directional axes.'
        },

        // ==========================================
        // TOPIC 2: HEART BLOOD FLOW (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Deoxygenated blood from the body enters the right atrium via the superior and inferior vena cava, then flows through the tricuspid valve into the right ventricle, which contracts to pump it through the pulmonary valve into the pulmonary arteries toward the lungs.',
            correct: true,
            explanation: 'This is true. This correctly traces the complete right-side pathway. Key sequencing: right atrium → tricuspid valve → right ventricle → pulmonary valve → pulmonary arteries. Understanding the proper valve names and sequence prevents confusion. The tricuspid (3 cusps) separates atrium from ventricle on the right, while the pulmonary valve separates ventricle from arteries.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Oxygenated blood returns from the lungs via the four pulmonary veins into the left atrium, flows through the bicuspid (mitral) valve into the left ventricle, which then contracts to pump it through the aortic valve into the aorta for distribution to the body.',
            correct: true,
            explanation: 'This is true. This correctly traces the left-side pathway. Left atrium → bicuspid/mitral valve → left ventricle → aortic valve → aorta. The bicuspid valve (2 cusps) separates atrium from ventricle on the left. Understanding this parallel pathway to the right side helps compare the symmetric nature of the heart\'s dual-pump system.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'The left ventricle has a thicker wall mainly because oxygenated blood is harder to move than deoxygenated blood, not because systemic circulation has greater resistance.',
            correct: false,
            explanation: 'This is false. Wall thickness reflects the pressure required to move blood through the circuit. The left ventricle pumps through the higher-resistance systemic circulation, whereas the right ventricle pumps through the lower-resistance pulmonary circuit. Oxygen content does not make blood intrinsically harder to pump.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'Because the interventricular septum separates the two ventricles, it alone prevents oxygenated and deoxygenated blood from mixing throughout all four chambers of the heart.',
            correct: false,
            explanation: 'This is false. The interventricular septum specifically separates the left and right ventricles. Normal separation of the complete right- and left-sided pathways also depends on the atrial separation and correctly directed valve flow. A structure can be essential without being solely responsible for the entire heart\'s separation.'
        },
        {
            type: 'tf',
            topic: 'Heart Blood Flow',
            question: 'The aorta receives oxygenated blood directly from the right ventricle and distributes it throughout the body, while the pulmonary artery receives deoxygenated blood from the left ventricle and sends it to the lungs.',
            correct: false,
            explanation: 'This is false—it\'s completely backward. Left ventricle → aorta (oxygenated blood to body). Right ventricle → pulmonary arteries (deoxygenated blood to lungs). Confusing these is a major error. This mistake prevents understanding basic cardiac function and oxygen delivery. The mnemonic helps: left = aorta (systemic), right = pulmonary (lungs).'
        },

        // ==========================================
        // TOPIC 3: CORONARY CIRCULATION (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'The coronary arteries branch directly from the aorta just above the aortic valve to supply the heart muscle with oxygenated blood, meaning the heart does not nourish itself from blood inside its chambers despite containing blood continuously.',
            correct: true,
            explanation: 'This is true. This addresses a critical misconception: blood inside the heart is being pumped, not nourishing the walls. The myocardium needs dedicated supply from coronary arteries. This is why: coronary blockage causes ischemia despite blood being present in chambers, the heart has its own circulation system, and coronary artery disease is the leading cause of death. Understanding this distinction is foundational.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'After delivering oxygen to the heart muscle, deoxygenated blood from the coronary circulation drains into the coronary sinus, which empties directly into the right atrium.',
            correct: true,
            explanation: 'This is true. The coronary venous return completes the coronary circulation loop. Coronary arteries deliver, coronary veins return to coronary sinus → right atrium. Understanding the complete circuit explains how cardiac blood flow is independent of the chambers\'s blood and why coronary disease can damage the heart despite systemic blood pressure being normal.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'A coronary artery blockage causes immediate death of the entire heart muscle because all myocardial regions receive oxygen from the blocked vessel after coronary blood mixes.',
            correct: false,
            explanation: 'This is false. A blockage deprives the downstream region supplied by that coronary artery, producing ischemia and, if prolonged, infarction in that territory. The affected area depends on the vessel and available circulation. The misconception turns a regional blood-supply problem into uniform, instantaneous injury to the entire heart.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'The heart muscle can survive for several hours without blood flow from coronary circulation because it has internal energy stores and doesn\'t require constant oxygen supply.',
            correct: false,
            explanation: 'This is false. Heart muscle is extremely metabolically active and requires constant oxygen. Even a few minutes without blood flow begins causing damage. After 4-6 minutes, irreversible damage becomes extensive. This is why sudden coronary blockage is immediately life-threatening and why emergency treatment is critical. The heart cannot "wait" for blood supply—it needs continuous oxygen.'
        },
        {
            type: 'tf',
            topic: 'Coronary Circulation',
            question: 'The left coronary artery divides into the left anterior descending (LAD) and left circumflex arteries to supply the left ventricle and septum, while the right coronary artery supplies the right ventricle and often the posterior wall of the left ventricle.',
            correct: true,
            explanation: 'This is true. Understanding coronary distribution explains which heart areas are affected by specific blockages. LAD blockages ("widow maker") affect the anterior wall and septum—critical areas. Right coronary blockages affect the inferior wall and can damage the SA node. This anatomical knowledge explains: why LAD blockages are particularly dangerous, how the location of chest pain can suggest which artery is blocked, and why coronary angiography identifies specific vessels for treatment.'
        },

        // ==========================================
        // TOPIC 4: ARTERIES AND VEINS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Arteries carry blood away from the heart while veins carry blood back toward the heart, regardless of whether the blood is oxygenated or deoxygenated.',
            correct: true,
            explanation: 'This is true. Direction and function define arteries/veins, not oxygen content. Most arteries carry oxygenated blood, but the pulmonary artery carries deoxygenated blood to the lungs. Most veins carry deoxygenated blood, but pulmonary veins carry oxygenated blood from lungs. Understanding this prevents the common mistake of thinking arteries = oxygenated, veins = deoxygenated.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Veins can have thinner walls than arteries because their valves absorb the high-pressure pulse that remains after blood passes through capillaries.',
            correct: false,
            explanation: 'This is false. Pressure is already much lower after blood passes through the capillary network. Vein walls therefore do not need the thick muscular and elastic structure of arteries. Valves help prevent backflow; they do not absorb an arterial-level pressure pulse. The misconception assigns valves the pressure-handling role of arterial walls.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Veins contain one-way valves that prevent backflow of blood, especially important in the legs where blood must flow against gravity during standing and walking.',
            correct: true,
            explanation: 'This is true. Venous valves are crucial for lower-body circulation. Without them, blood would pool in leg veins. Mechanism: when leg muscles contract, they squeeze veins, pushing blood upward; valves close when flow reverses, preventing backflow. Artery valves aren\'t needed because of constant forward pressure. Understanding this explains: why prolonged sitting increases clot risk, why leg exercises help circulation, and what causes varicose veins (valve failure).'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Capillary exchange is driven mainly by contractions of a muscular capillary wall that actively pumps oxygen and nutrients into surrounding tissues.',
            correct: false,
            explanation: 'This is false. Capillaries have extremely thin walls that support diffusion and exchange; they do not use a thick muscular layer to pump substances into tissues. Slow flow, large surface area, and one-cell-thick walls enable transfer. The misconception applies the pumping structure of larger vessels to vessels specialized for exchange.'
        },
        {
            type: 'tf',
            topic: 'Arteries and Veins',
            question: 'Vasoconstriction decreases blood pressure by narrowing blood vessels, which is why it occurs during the fight-or-flight stress response to increase blood flow and oxygen delivery.',
            correct: false,
            explanation: 'This is false. Vasoconstriction actually increases blood pressure initially by increasing resistance. However, during fight-or-flight, selective vasoconstriction in non-essential organs (skin, gut) redirects blood to muscles and heart. So it increases local muscle blood flow while decreasing elsewhere. This distinction matters: understanding vasoconstriction\'s effects on pressure and distribution explains shock physiology and blood pressure regulation.'
        },

        // ==========================================
        // TOPIC 5: HEART DISEASE (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Atherosclerosis is the gradual buildup of plaque (lipids, cholesterol, immune cells, smooth muscle cells) inside artery walls that narrows the lumen and restricts blood flow, developing over decades before symptoms appear.',
            correct: true,
            explanation: 'This is true. Atherosclerosis is a progressive, largely silent disease. Stages: endothelial damage → LDL infiltration → inflammatory response → smooth muscle proliferation → plaque formation → lumen narrowing. By the time symptoms appear (angina, MI), significant disease is already present. This explains why prevention and screening matter even in asymptomatic people.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Hypertension (high blood pressure) is defined as consistently elevated blood pressure at or above 130/80 mmHg, and chronic hypertension damages arteries by increasing stress on vessel walls and promoting atherosclerosis.',
            correct: true,
            explanation: 'This is true. High pressure damages multiple ways: mechanical injury to endothelium (initiating atherosclerosis), increased LDL infiltration, smooth muscle proliferation, left ventricle hypertrophy (thickened walls from constant high pressure). This explains why hypertension is called "silent killer"—it causes damage without symptoms. Understanding the mechanisms explains why treatment even in asymptomatic people prevents future disease.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'HDL cholesterol is considered "good" cholesterol because it transports cholesterol from arteries back to the liver for removal, while LDL is "bad" cholesterol because it deposits cholesterol in artery walls promoting atherosclerosis.',
            correct: true,
            explanation: 'This is true. Cholesterol transport direction matters functionally. HDL removes cholesterol (protective). LDL delivers cholesterol to arteries (harmful). Understanding this explains: why HDL levels and LDL levels independently predict heart disease risk, why statins primarily lower LDL, and why raising HDL is also beneficial. This is not arbitrary labeling—it reflects actual mechanism.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'A heart attack occurs when blood flow to part of the brain is blocked due to a clot or plaque rupture, causing sudden neurological symptoms.',
            correct: false,
            explanation: 'This is false. A heart attack (myocardial infarction) affects the heart muscle, not the brain. Brain blood flow blockage is a stroke. Confusing these is a serious error. MI symptoms: chest pain, shortness of breath, arm/jaw pain. Stroke symptoms: facial drooping, arm weakness, speech difficulty (FAST assessment). Understanding the distinction is crucial for recognizing emergencies and providing correct treatment.'
        },
        {
            type: 'tf',
            topic: 'Heart Disease',
            question: 'Congestive heart failure reduces forward pumping but does not cause fluid accumulation because venous blood flow remains independent of the heart\'s pumping efficiency.',
            correct: false,
            explanation: 'This is false. When the heart cannot pump efficiently, blood can back up in the venous circulation, contributing to fluid accumulation in the lungs or peripheral tissues. The heart may still beat, but impaired forward flow affects the pressures behind it. The misconception separates venous backup from the pump that normally moves venous return forward.'
        },

        // ==========================================
        // TOPIC 6: HEART ELECTRICAL SYSTEM (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'The sinoatrial (SA) node is the heart\'s natural pacemaker, generating electrical impulses at about 60-100 per minute that initiate each heartbeat, setting the rhythm for the entire heart.',
            correct: true,
            explanation: 'This is true. SA node is the primary pacemaker. Located in right atrial wall, it fires spontaneously and fastest (if it fails, AV node can take over at slower rate). This natural rhythm is modulated by: sympathetic (increases rate), parasympathetic (decreases rate), and various hormones. Understanding the SA node explains how pacemakers work and why losing SA function is serious.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'The AV node speeds the electrical signal so the ventricles begin contracting before the atria finish, which prevents blood from backing up into the atria.',
            correct: false,
            explanation: 'This is false. The AV node briefly delays the signal so atrial contraction can finish and the ventricles can fill before ventricular contraction begins. Efficient sequencing depends on delay, not acceleration. Making the chambers contract simultaneously would reduce effective filling rather than prevent backup.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'Purkinje fibers conduct the electrical signal rapidly through the ventricular walls, causing coordinated ventricular contraction that efficiently ejects blood from apex to base (upward).',
            correct: true,
            explanation: 'This is true. Purkinje fibers ensure synchronized ventricular contraction. Rapid conduction (fastest conduction velocity in the heart) plus strategic distribution means all ventricular muscle contracts nearly simultaneously. The contraction direction (apex upward) helps eject blood out the aorta efficiently. Understanding this explains: how arrhythmias disrupt this coordination, why bundle branch blocks reduce pumping efficiency, and what EKG abnormalities reveal about conduction problems.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'A resting rate classified as tachycardia or bradycardia is necessarily a dangerous arrhythmia, regardless of exercise conditioning, medication, stress, or illness.',
            correct: false,
            explanation: 'This is false. Tachycardia and bradycardia describe rate, but context determines whether the rate is dangerous, expected, or benign. Stress and illness can raise rate, while athletic conditioning or medication can lower it. A numerical category does not by itself establish the cause or clinical significance of a rhythm.'
        },
        {
            type: 'tf',
            topic: 'Heart Electrical System',
            question: 'An EKG directly measures the force of cardiac contraction and the volume of blood pumped, so weak EKG waves necessarily mean low cardiac output.',
            correct: false,
            explanation: 'This is false. An EKG records the heart\'s electrical activity, not contraction force or blood volume directly. Electrical patterns can reveal rhythm abnormalities and signs associated with ischemia or prior damage, but they are not a direct measurement of cardiac output. The misconception treats an electrical recording as a mechanical pumping measurement.'
        },

        // ==========================================
        // TOPIC 7: HEART ATTACKS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Angina is chest discomfort caused by insufficient blood flow to the heart muscle (ischemia) from coronary artery narrowing, serving as a warning sign that the heart is not getting enough oxygen.',
            correct: true,
            explanation: 'This is true. Angina = ischemia without infarction (no permanent damage yet). Symptoms: chest pain/pressure, often triggered by exertion, relieved by rest. Stable angina is predictable; unstable angina occurs at rest (dangerous—may precede MI). Understanding angina as a warning sign explains why it\'s taken seriously and treated to prevent progression to infarction.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Myocardial ischemia refers to inadequate blood supply to the heart muscle causing oxygen deprivation, which leads to myocardial infarction (tissue death) if the blockage is not rapidly restored.',
            correct: true,
            explanation: 'This is true. Ischemia is the process (low oxygen), infarction is the result (tissue death). Timeline matters: ischemia begins immediately upon blockage; cell death becomes extensive after 4-6 minutes; large portions die within hours. This explains urgent treatment: restoring blood flow quickly (thrombolytics, angioplasty, stents) minimizes tissue loss. Understanding this timeline is critical for emergency response.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Sudden cardiac death most often results from ventricular fibrillation, a chaotic abnormal rhythm where ventricles quiver ineffectively rather than contract, preventing blood flow to the body.',
            correct: true,
            explanation: 'This is true. Ventricular fibrillation is a lethal arrhythmia. The uncoordinated electrical activity prevents any effective pumping, stopping blood circulation within seconds. Death results without immediate treatment. This is why: defibrillation (AED) is emergency treatment—it stops the chaotic rhythm allowing the heart to restart normal rhythm, why time to treatment is measured in minutes, and why AEDs are placed in public spaces.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'During coronary angioplasty, the balloon remains inflated inside the artery to hold it open permanently, while a stent is used only temporarily during the procedure.',
            correct: false,
            explanation: 'This is false. The balloon is inflated temporarily to widen the narrowed segment and then removed. A stent may remain in place to help keep the artery open. The misconception reverses the temporary role of the balloon and the continuing structural role of the stent.'
        },
        {
            type: 'tf',
            topic: 'Heart Attacks',
            question: 'Men and women experience identical heart attack symptoms and have the same risk factors, so screening and prevention strategies can be identical for both sexes.',
            correct: false,
            explanation: 'This is false. Sex differences in MI presentation and risk exist. Women more often have: atypical symptoms (fatigue, shortness of breath, indigestion rather than chest pain), higher risk from depression/stress, worse outcomes partly due to delayed diagnosis. Risk factors also differ: hormonal changes (menopause increases risk), pregnancy complications increase lifetime risk. Understanding these differences prevents missed diagnoses in women.'
        },

        // ==========================================
        // TOPIC 8: CPR AND AED (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'CPR (Cardiopulmonary Resuscitation) combines chest compressions to pump blood and rescue breaths to provide oxygen, maintaining circulation and oxygenation until the heart rhythm can be restored.',
            correct: true,
            explanation: 'This is true. CPR is dual action: mechanical pump + oxygen delivery. Compressions maintain minimal circulation to vital organs. Rescue breaths provide oxygen. Hands-only CPR (compressions without breaths) is also effective and recommended for untrained bystanders. Understanding CPR\'s purpose explains why immediate initiation matters—every minute without circulation causes irreversible brain damage.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'An AED should deliver a shock during any cardiac arrest, including when it detects no electrical activity, because the shock directly restarts a stopped heart.',
            correct: false,
            explanation: 'This is false. An AED analyzes the rhythm and shocks only certain life-threatening electrical patterns, such as ventricular fibrillation. It does not shock every cardiac arrest rhythm or directly act as a universal restart button. The misconception confuses stopping disorganized electrical activity with creating activity when no shockable rhythm is present.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'During CPR, chest compressions should be performed at a rate of approximately 100-120 compressions per minute, roughly matching the tempo of the song "Stayin\' Alive."',
            correct: true,
            explanation: 'This is true. The 100-120/min rate is evidence-based for optimal blood flow. "Stayin\' Alive" tempo matches this rate perfectly, providing a memory aid. Compressions should be: hard (pushing at least 2 inches deep), fast (100-120/min), with full chest recoil between compressions. Understanding proper technique explains why quality CPR matters—inadequate rate or depth reduces survival chances.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'You should stop CPR immediately once an AED arrives and is being set up, so the AED can accurately analyze the heart rhythm without movement interference.',
            correct: false,
            explanation: 'This is false. Continue CPR until the AED is ready to analyze. Only pause briefly for rhythm analysis (takes few seconds). Minimize interruptions in compressions. Every pause in circulation increases risk of death—continuous flow is critical. The modern instruction: "Push hard and fast" with minimal interruption. Understanding this prevents dangerous gaps in circulation.'
        },
        {
            type: 'tf',
            topic: 'CPR and AED',
            question: 'The steps in the cardiac-arrest chain of survival are interchangeable because advanced life support can compensate fully for delays in CPR or defibrillation.',
            correct: false,
            explanation: 'This is false. Early recognition, CPR, rapid defibrillation when appropriate, and advanced care form a time-sensitive sequence. Later care cannot fully restore the circulation and time lost when early links are delayed. The chain model emphasizes that each link supports the next rather than substituting for it.'
        },

        // ==========================================
        // TOPIC 9: STRESS AND HEART (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'During the acute stress response, sympathetic nervous system activation increases heart rate, blood pressure, and cardiac output to prepare the body for "fight or flight" action during emergencies.',
            correct: true,
            explanation: 'This is true. The acute response is adaptive for genuine threats. Sympathetic effects: increased heart rate (more beats/min), increased contractility (stronger contractions), increased cardiac output (more blood per minute), vasoconstriction in non-essential organs. Together, these maximize delivery to muscles and brain. Understanding this adaptive response explains why it\'s beneficial temporarily but harmful when chronic.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Chronic stress maintains persistently elevated blood pressure and promotes atherosclerosis by increasing inflammation, arterial smooth muscle proliferation, and LDL infiltration into vessel walls.',
            correct: true,
            explanation: 'This is true. Chronic stress is a cardiovascular disease risk factor through multiple mechanisms. Elevated cortisol and adrenaline cause: persistent high blood pressure (endothelial damage), increased inflammation (atherosclerosis foundation), sodium/water retention (volume expansion). Understanding these mechanisms explains why stress management is preventive cardiovascular medicine.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Prolonged elevation of cortisol from chronic stress contributes to sustained high blood pressure by affecting blood vessel tone, promoting sodium and water retention, and increasing peripheral vascular resistance.',
            correct: true,
            explanation: 'This is true. Cortisol has multiple hypertensive effects. It: increases sympathetic tone (raises blood pressure), increases sensitivity to catecholamines (amplifies stress response), causes sodium/water retention (increases blood volume), increases peripheral resistance. Together, these cause and sustain elevated blood pressure. Understanding this explains why chronic stress and hypertension are linked.'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Stress only affects mental health and emotional state, with no direct impact on the development of physical heart disease.',
            correct: false,
            explanation: 'This is false. Stress is a major cardiovascular disease risk factor with direct biological mechanisms. Mechanisms: hypertension, atherosclerosis promotion, arrhythmia triggering, increased clotting (thrombosis), endothelial dysfunction. Research shows: chronic stress predicts MI risk independently, acute emotional stress can trigger MI ("stress-induced cardiomyopathy"), depression is a post-MI prognostic factor. Understanding this prevents dismissing stress as "just psychological."'
        },
        {
            type: 'tf',
            topic: 'Stress and Heart',
            question: 'Deep breathing, meditation, and physical activity may change how stress feels but cannot affect sympathetic activation, cortisol, or heart-rate variability.',
            correct: false,
            explanation: 'This is false. Stress-management practices can produce measurable physiological effects, including reduced sympathetic activation, changes in cortisol and blood pressure, and improved autonomic balance. The misconception treats psychological experience and cardiovascular physiology as separate even though the stress response connects them.'
        },

        // ==========================================
        // TOPIC 10: HEART HEALTH (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'The five pillars of health (social connection, nutrition, exercise, sleep, stress management) all contribute to cardiovascular health through different mechanisms—from reducing blood pressure to preventing atherosclerosis to managing inflammation.',
            correct: true,
            explanation: 'This is true. Each pillar addresses different disease mechanisms. Social connection reduces stress and promotes healthy behaviors. Exercise strengthens the heart and improves cholesterol. Good nutrition prevents atherosclerosis. Sleep allows cardiovascular recovery. Stress management prevents chronic activation. Understanding how these work together explains why "lifestyle changes" are recommended—no single intervention addresses all cardiovascular disease mechanisms.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Regular aerobic exercise (150+ minutes per week) reduces cardiovascular disease risk by lowering resting blood pressure, improving cholesterol levels, increasing cardiac output, and preventing atherosclerosis.',
            correct: true,
            explanation: 'This is true. Exercise is cardiovascular preventive medicine. Benefits: strengthens myocardium, improves endothelial function, lowers LDL and raises HDL, reduces resting blood pressure, improves insulin sensitivity. Mechanisms: less atherosclerosis development, reduced inflammation, weight management, stress reduction. Understanding why exercise works at a mechanistic level explains its importance even for seemingly healthy people.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Smoking raises cardiovascular risk mainly through a temporary increase in heart rate, so stopping has little effect once blood-vessel damage and clotting risk have begun.',
            correct: false,
            explanation: 'This is false. Smoking contributes to endothelial damage, atherosclerosis, platelet activation, and reduced oxygen availability—not merely a temporary heart-rate increase. Quitting can reduce ongoing damage and cardiovascular risk. The misconception both narrows the mechanism and treats a modifiable exposure as irreversible.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'The cardiovascular benefit of a Mediterranean diet comes almost entirely from unsaturated fat, so fruits, vegetables, whole grains, and the overall dietary pattern add little protection.',
            correct: false,
            explanation: 'This is false. Unsaturated fats contribute, but the pattern also combines fruits, vegetables, whole grains, fish, fiber, and reduced reliance on highly processed foods or red meat. These components influence inflammation, cholesterol, and atherosclerosis through multiple pathways. The misconception isolates one useful component and mistakes it for the whole pattern.'
        },
        {
            type: 'tf',
            topic: 'Heart Health',
            question: 'Cardiovascular disease prevention requires only managing a single risk factor like blood pressure or cholesterol, as controlling one factor is sufficient to prevent most heart attacks and strokes.',
            correct: false,
            explanation: 'This is false. Cardiovascular disease is multifactorial—addressing all risk factors matters. Single-factor management is insufficient. Risk factors interact: a person with borderline blood pressure + borderline cholesterol + diabetes has higher risk than one factor alone would suggest. Comprehensive approach addressing: blood pressure, cholesterol, diabetes, smoking, obesity, exercise, diet, stress is necessary for optimal prevention. Understanding this explains why multiple "pills" and lifestyle changes are often recommended.'
        }
    ]
};

// Export for use in StudyPhysio

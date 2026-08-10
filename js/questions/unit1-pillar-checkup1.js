// UNIT 1: PILLAR CHECKUP 1 - COMPLETE HARDER/TRICKIER QUESTION BANK
// 50 True/False Questions (5 per topic × 10 topics)
// Distribution: 25 True / 25 False
// Challenge conceptual understanding with tricky logic, misconceptions, and nuanced distinctions

const pillarCheckup1Questions = {
    'unit1-pillar-checkup1': [

        // ==========================================
        // TOPIC 1: HEALTH (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Health',
            question: 'Overall good health requires physical, mental, and social health working together because neglecting one pillar can undermine gains made in the others.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Health is interconnected—<strong>the three pillars support each other</strong>. Someone physically fit but socially isolated experiences poor mental health and weakened immune function. Someone mentally healthy but sedentary faces physical decline. <strong>Neglecting one pillar creates cascading problems</strong> that affect the others. This is why comprehensive health requires all three working together.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Lateral reading is a strategy that requires checking multiple sources to verify health information, so checking one credible secondary source is sufficient to confirm information as accurate.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Lateral reading means <strong>checking MULTIPLE different sources</strong>, not just one credible one. Even credible sources can be incomplete, have methodological limitations, or emphasize certain findings. One source—even from CDC or WHO—should be cross-referenced with others to catch blind spots, biases, or outdated information. <strong>True lateral reading requires multiple independent sources confirming the same conclusion.</strong>'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'A health claim supported by peer-reviewed research from a reputable institution is automatically more credible than a secondary source synthesizing that research, regardless of sample size or study design.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Credibility depends on methodology and synthesis, not just peer review status</strong>. A meta-analysis synthesizing 50 studies is more credible than one poorly-designed peer-reviewed study with 20 subjects. Publication doesn\'t guarantee quality—it just means experts reviewed it. Sample size, study design, conflict of interest, and synthesis of multiple studies all matter more than the mere existence of peer review.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Physical health problems can negatively affect mental health and vice versa because the body and mind are connected through physiological mechanisms like hormone release and inflammation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Physical and mental health are deeply interconnected through biological pathways: <strong>chronic pain triggers depression</strong> (neurochemical changes), <strong>depression suppresses immune function</strong> (lowered antibodies), <strong>stress causes inflammation</strong> (affecting heart health), <strong>exercise improves mood</strong> (endorphin release). The mind-body connection isn\'t metaphorical—it\'s physiological. Treating one without addressing the other is incomplete.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'The relationship between social connection and health is correlational rather than causal, meaning we cannot conclude that improving social connections will actually improve health outcomes.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While initial research identified correlations, subsequent intervention studies have demonstrated <strong>causality—improving social connections directly improves health outcomes</strong>. When people increase social contact, blood pressure drops, immune function improves, and longevity increases. <strong>Longitudinal studies show that changes in social connection precede health changes, confirming causality.</strong> This is no longer just correlation.'
        },

        // ==========================================
        // TOPIC 2: SIGNS AND SYMPTOMS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'A person can have dangerously high blood pressure (objective sign) while feeling completely fine with no subjective symptoms, which is why hypertension is called the "silent killer."',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Signs and symptoms are independent</strong>. Hypertension often progresses silently—people have measurable signs (high blood pressure on reading) but no subjective feelings. This independence is dangerous because patients feel healthy while organ damage accumulates. <strong>Absence of symptoms does NOT mean absence of disease.</strong> This is why screening for signs through measurement is essential, not relying on how people feel.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'Symptoms are more reliable than signs for making accurate medical diagnoses because patients directly experience and report their symptoms.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Signs are more reliable than symptoms</strong> for diagnosis. Signs (objective, measured) cannot be biased by patient perception, memory, or reporting ability. Symptoms (subjective, reported) are filtered through individual interpretation. Someone\'s pain description depends on their pain tolerance, cultural background, emotional state. <strong>Good diagnosis requires BOTH but weights objective signs more heavily</strong> for accuracy.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'A fever is a sign because it can be measured with a thermometer, while the patient\'s report of feeling hot and uncomfortable is a symptom.',
            correct: true,
            explanation: 'This is <strong>true</strong>. This correctly distinguishes the concepts. <strong>Fever (measured temperature) = sign</strong> (objective, independent of patient report). <strong>Feeling hot/uncomfortable = symptom</strong> (subjective, only the patient experiences it). A person could have a high fever but NOT feel hot (happens with certain medications), or feel hot but have normal temperature. Signs and symptoms are categorically different.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'Healthcare providers rely more on patient-reported symptoms than on measured signs when diagnosing diseases because symptoms directly indicate the disease process.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While symptoms provide context, <strong>healthcare providers prioritize measured signs for diagnosis</strong>. Many diseases present with similar symptoms (chest pain could be heart attack, anxiety, or muscle strain), but specific signs (EKG changes, troponin levels, physical exam findings) distinguish them. Symptoms guide which signs to measure; signs confirm diagnosis. Relying primarily on symptoms leads to misdiagnosis.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'A patient reporting severe joint pain without visible swelling could have rheumatoid arthritis with inflammatory damage occurring, even if there are no objective signs visible on initial examination.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Disease can exist with symptoms but few visible signs, especially in early stages. Rheumatoid arthritis can cause severe pain before swelling becomes visible. This is why <strong>blood tests and imaging (additional signs) are needed to confirm</strong> what symptoms suggest. This illustrates why symptoms alone cannot diagnose—you need objective evidence (signs) to confirm what you suspect from subjective reports.'
        },

        // ==========================================
        // TOPIC 3: SOCIAL DETERMINANTS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Social determinants like neighborhood, income, and education directly affect health outcomes because they determine access to resources like food, healthcare, and safe environments.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Social determinants create measurable health disparities</strong>. Neighborhoods without grocery stores = poor nutrition. Areas with high pollution = respiratory disease. Limited healthcare access = late diagnosis. Underfunded schools = poor health literacy. <strong>These aren\'t just correlated with poverty—they directly cause worse health.</strong> A person with identical genetics has dramatically different outcomes based on zip code.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'If a low-income person and a wealthy person both receive identical health information and have equal willpower, they will have nearly identical health outcomes because personal choices determine health more than social determinants.',
            correct: false,
            explanation: 'This is <strong>false</strong>. This confuses information access with environmental barriers. <strong>Knowledge doesn\'t overcome structural barriers</strong>. A person in a food desert cannot choose fresh vegetables if stores don\'t sell them. Someone in unsafe neighborhoods cannot exercise outdoors. Chronic stress from discrimination physiologically harms health regardless of willpower. <strong>Individual agency has limits when social determinants are stacked against you.</strong> Zip code remains a better predictor than personal choice.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Access to quality education is considered a social determinant because education increases health literacy and income, both of which are associated with better health outcomes.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Education is foundational to health</strong>. It enables: understanding health information, making informed decisions, accessing better-paying jobs, affording healthcare and healthy food. Health literacy specifically allows people to navigate complex medical systems and evaluate health claims. <strong>Each extra year of education correlates with increased life expectancy.</strong> Education is transformative across all health domains.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Social determinants only affect people living in poverty; wealthy individuals in safe neighborhoods with good schools and healthcare access are not affected by social determinants.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Social determinants affect everyone</strong>, though the effects are most extreme at the bottom. Even wealthy people are affected—they benefit from good schools, safe neighborhoods, healthcare access. The difference is that advantages compound for wealthy people while disadvantages compound for poor people. Social determinants show a gradient effect, not a poverty-only effect. Understanding this helps recognize privilege and structural advantages.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Zip code can predict health outcomes better than genetic makeup because environmental and social factors ultimately have more influence on health than inherited traits.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Research confirms <strong>zip code predicts health better than genetic code</strong>. While genetics set potential predispositions, <strong>social determinants determine actual outcomes</strong>: nutrition, stress, healthcare access, exercise opportunities, environmental toxins. Someone genetically prone to heart disease might avoid it with good environment and lifestyle, while someone with genetics favoring longevity might die young in disadvantaged circumstances. Environment activates or suppresses genetic potential.'
        },

        // ==========================================
        // TOPIC 4: SOCIAL CONNECTIONS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Social',
            question: 'Loneliness triggers the stress response by increasing cortisol, and chronic loneliness keeps cortisol elevated, which damages the immune system and increases inflammation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Loneliness is physiologically stressful</strong>. The brain interprets social isolation as threat, activating the stress response chronically. Persistently elevated cortisol: suppresses immune cells, increases inflammation, damages the hippocampus, impairs healing. <strong>This is why social isolation increases mortality risk at levels comparable to smoking.</strong> The mechanism is biological, not just psychological.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Since both social isolation and brief exercise increase cortisol, and cortisol is a stress hormone, both social isolation and exercise have similar negative health effects.',
            correct: false,
            explanation: 'This is <strong>false</strong>. This confuses hormone presence with health outcome. While both briefly raise cortisol, <strong>the pattern determines the effect</strong>. Exercise-induced cortisol is controlled, brief, followed by recovery—the body adapts and strengthens. Isolation-induced cortisol is chronic, uncontrolled, without recovery—damaging. <strong>Same hormone, opposite effects based on duration and recovery.</strong> This distinguishes hormetic stress (beneficial adaptation) from chronic stress (damage).'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Quality of social connections is more important for health than quantity because a few close, supportive relationships provide greater health benefits than many superficial acquaintances.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Research shows quality over quantity matters</strong>. One genuine confidant providing support confers more health benefit than dozens of shallow social media followers. Close relationships: reduce stress hormones, increase immune function, provide tangible help during illness. Superficial connections lack emotional depth and mutual support. <strong>One person who truly cares beats 100 acquaintances.</strong>'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Social connections only benefit mental health through emotional support; they do not directly affect physical health markers like blood pressure or immune function.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Social connections have direct physical health effects: <strong>lower resting blood pressure, stronger immune response, reduced inflammation, faster wound healing, increased longevity</strong>. These are measurable physiological changes, not just mood improvements. <strong>The mind-body connection through social relationships is biological.</strong> Social support literally makes cells function better through multiple pathways.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Social capital refers to the financial wealth and economic resources that individuals accumulate and use to improve their social status.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Social capital is NOT money</strong>. It refers to <strong>the networks, relationships, trust, and reciprocity norms within communities</strong>. High social capital means: people trust each other, help one another, participate in community, share information. Communities with high social capital have better health outcomes because people support each other. Economic capital and social capital are different things, though they can interact.'
        },

        // ==========================================
        // TOPIC 5: SOCIAL MEDIA (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Primary sources are original research studies, while secondary sources interpret or synthesize that research, so secondary sources may be more credible if they synthesize multiple high-quality primary sources.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Source type matters less than quality of information. <strong>A meta-analysis (secondary) synthesizing 50 rigorous studies is more credible than one peer-reviewed primary study with methodological limitations</strong>. Secondary sources provide context, identify patterns, acknowledge limitations across studies. <strong>Credibility depends on what the source says and how, not its classification.</strong> Good secondary sources can be more credible than weak primary sources.'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Using electronic devices before bed suppresses melatonin production due to blue light exposure, making it harder to fall asleep.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Blue light signals "daytime" to the brain, suppressing melatonin</strong> (the sleep hormone). Additionally, stimulating screen content activates the mind, raising heart rate and alertness. Both mechanisms interfere with sleep onset and quality. This is why sleep hygiene recommends avoiding screens 1-2 hours before bed. The effect is significant enough that sleep disruption is measurable.'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Heavy social media use is correlated with increased anxiety and depression in adolescents, which proves that social media causes these mental health problems.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Correlation ≠ causation. <strong>Heavy social media use correlates with mental health problems, but causality isn\'t proven</strong>. Possible explanations: people with depression use social media more (reverse causation), third factors like loneliness drive both, social comparison triggers anxiety. Some research suggests social media can contribute to problems, but the relationship is complex. <strong>Don\'t confuse correlation with cause.</strong>'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Social media has only negative effects on mental health because it promotes social comparison and reduces real-world social interaction.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Social media has both positive and negative effects. Positive: connects people with support communities (chronic illness, mental health), maintains long-distance relationships, disseminates health information, facilitates activism. Negative: social comparison, cyberbullying, sleep disruption, reduced in-person interaction. <strong>Impact depends on how it\'s used.</strong> Dismissing all effects as negative ignores real benefits for certain populations.'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'A news article about a health study published on a reputable health website is always more accurate than a peer-reviewed primary research paper discussing the same topic.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Credibility depends on specific content, not source type. <strong>A well-written, comprehensive news article can be more accurate than a flawed peer-reviewed study</strong>, but it could also be less accurate if it misrepresents findings. A rigorous primary study is usually more reliable than oversimplified secondary coverage. <strong>Each source must be evaluated individually</strong> for methodology, representation of evidence, and potential bias.'
        },

        // ==========================================
        // TOPIC 6: NUTRITION MYTHS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'All carbohydrates are not equivalent to health; complex carbohydrates from whole grains provide fiber, vitamins, and sustained energy, while refined carbohydrates cause blood sugar spikes.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The "carbs are carbs" myth is dangerous misconception. <strong>Complex carbs (whole grains) retain fiber, B vitamins, minerals, and digest slowly</strong>, maintaining stable energy. <strong>Refined carbs (white bread, sugar) are stripped of nutrients and digest quickly</strong>, causing glucose spikes then crashes. Same macronutrient (carbohydrate), dramatically different physiological effects. The source and structure matter enormously.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Some types of fats are essential for good health because unsaturated fats are necessary for brain function, hormone production, and nutrient absorption.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Healthy fats are essential nutrients</strong>. Unsaturated fats from olive oil, avocados, nuts, and fatty fish are necessary for: brain development and function (DHA), hormone synthesis, absorption of fat-soluble vitamins (A, D, E, K). The brain is 60% fat. <strong>Eliminating all fats harms health.</strong> The myth is "all fats are bad"; reality is "type and amount matter."'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Trans fats should be avoided and saturated fats should be limited because both increase risk for cardiovascular disease and are found primarily in processed foods and animal products.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Trans fats should be eliminated, saturated fats limited</strong>. Both increase LDL cholesterol, inflammation, and atherosclerosis risk. Trans fats (industrially produced, hydrogenated oils) are particularly harmful. Saturated fats (butter, cheese, meat) should be limited but aren\'t identical to trans fats. <strong>Replace with unsaturated fats</strong> for cardiovascular health. This distinction guides healthy eating.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Artificial sweeteners are always healthier than natural sugars because they contain fewer calories and do not raise blood glucose.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While artificial sweeteners reduce calories, research shows <strong>they may not be superior for health</strong>. Concerns: may alter gut bacteria composition, may affect metabolism and appetite regulation, some evidence suggests possible metabolic disruption. <strong>Moderation with natural sugars from whole foods (fruit, honey) may be healthier</strong> than assuming artificial alternatives are safe. The evidence doesn\'t support artificial being universally better.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Whole grains and refined grains have equivalent nutritional value because both break down to glucose in the digestive system.',
            correct: false,
            explanation: 'This is <strong>false</strong>. This confuses the end product (glucose) with overall nutrition. <strong>Whole grains retain bran, germ, and endosperm</strong> providing fiber, vitamins, minerals, phytonutrients. Refined grains have these removed, leaving just starch. <strong>Nutritional value depends on what travels WITH the glucose</strong>: the fiber slows digestion, the nutrients support body function. Same end product, entirely different nutritional packages.'
        },

        // ==========================================
        // TOPIC 7: MEDITERRANEAN DIET (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Mediterranean diet emphasizes plant foods, olive oil, fish, whole grains, and legumes while limiting red meat, and this pattern has been shown to reduce cardiovascular disease risk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Large prospective studies demonstrate <strong>Mediterranean diet reduces heart disease, stroke, and mortality</strong>. Benefits come from: monounsaturated fats (olive oil), omega-3 fatty acids (fish), fiber and antioxidants (whole grains, vegetables), plant-based proteins (legumes). <strong>This is one of the most evidence-supported healthy dietary patterns.</strong>'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Standard American Diet is associated with higher rates of obesity, diabetes, and cardiovascular disease compared to Mediterranean patterns.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>SAD (high in processed foods, refined grains, added sugars, unhealthy fats) directly contributes to chronic disease</strong>. Processed foods lack fiber and nutrients while providing excess calories. Refined carbs cause metabolic dysfunction. Trans and saturated fats promote inflammation and atherosclerosis. <strong>The dietary pattern itself drives health problems.</strong> Changing from SAD to Mediterranean-style patterns reverses many chronic diseases.'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'Michael Pollan\'s mantra "Eat food, not too much, mostly plants" means eating only vegetables and never consuming animal products.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The mantra means: (1) eat <strong>real/whole foods</strong> not processed, (2) practice <strong>moderation/portion control</strong>, (3) <strong>emphasize plants</strong> but not exclusively. "Mostly plants" allows for fish, eggs, dairy—just make plants the foundation. This is descriptive of Mediterranean eating, not strict vegetarianism. <strong>The insight is about food quality and proportion, not strict categorization.</strong>'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Mediterranean diet works primarily because it uses olive oil liberally and includes fish, making these the key protective components.',
            correct: false,
            explanation: 'This is <strong>false</strong>. This isolates components and misses the <strong>synergistic whole-pattern benefits</strong>. Protection comes from: olive oil AND vegetables AND whole grains AND legumes AND fish AND the cultural context (social meals, portion control, active lifestyle). Taking fish oil supplements while eating processed food ignores the pattern. <strong>The whole is more protective than parts in isolation.</strong> Mediterranean eating is a comprehensive lifestyle, not ingredient substitution.'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Standard American Diet contains fewer whole grains and vegetables than the Mediterranean diet, reflecting dietary pattern differences that contribute to health outcome disparities.',
            correct: true,
            explanation: 'This is <strong>true</strong>. SAD emphasizes processed foods, refined grains, red meat; Mediterranean emphasizes whole grains, abundant vegetables, legumes. <strong>This macroscopic pattern difference explains much of the health outcome difference.</strong> More fiber, more antioxidants, more plant nutrients in Mediterranean. Less inflammation, better blood pressure, better glucose control, less obesity. The dietary patterns are structurally different, producing different health results.'
        },

        // ==========================================
        // TOPIC 8: HOMEOSTASIS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Homeostasis is the maintenance of stable internal conditions within narrow ranges despite changes in the external environment through continuous regulation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Homeostasis keeps temperature, pH, glucose, blood pressure stable</strong> despite external changes. This stability is <strong>continuously achieved through active regulation, not passive</strong>. If regulation fails, cells malfunction and death results. Homeostasis is dynamic—not a set point, but active maintenance of conditions within functioning ranges.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Negative feedback loops work by amplifying changes away from the set point, which is why they are called "negative" feedback.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>"Negative" refers to the mechanism, not the effect</strong>. Negative feedback OPPOSES and reverses changes (returns to set point). "Negative" means corrective, stabilizing. Positive feedback AMPLIFIES changes away from set point. <strong>This terminology confusion is common but critical</strong>—negative feedback maintains homeostasis; positive feedback destabilizes. The naming refers to direction of response, not value judgment.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'In homeostatic feedback loops, receptors detect changes, control centers integrate information and determine responses, and effectors execute those responses.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>All homeostatic loops have three components: detection → processing → response</strong>. Receptors sense deviation, control centers analyze and decide, effectors implement correction. Blood glucose example: pancreas detects high glucose (receptor), determines response needed (control center), secretes insulin (effector). Understanding this three-part system applies to all homeostatic mechanisms.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Because hormones act more slowly than nerve signals, the endocrine system begins regulating homeostasis only after the nervous system has finished responding.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The nervous and endocrine systems can operate at the same time; their major difference is the speed and duration of their signals. Neural responses are generally rapid and brief, while hormones act more slowly and can sustain regulation. <strong>Slower signaling does not mean delayed participation or dependence on the nervous system finishing first.</strong>'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Positive feedback loops are more common than negative feedback loops in maintaining homeostasis because they amplify responses, creating faster corrections.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Negative feedback loops are far more common for homeostasis</strong> because they maintain stability. Positive feedback amplifies changes, which destabilizes systems. Positive feedback is rare and used only in specific situations (childbirth contractions, blood clotting cascade) where temporary amplification is needed. <strong>For stability, you need negative feedback to oppose changes.</strong>'
        },

        // ==========================================
        // TOPIC 9: BLOOD GLUCOSE (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Normal fasting blood glucose ranges from 70-100 mg/dL, and maintaining glucose within this narrow range is essential because glucose is the primary fuel for the brain.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>The brain depends on glucose and cannot switch fuels easily</strong>. Tight glucose regulation (70-100 fasting) is maintained because: too low causes confusion/seizures/death, too high causes inflammation and cellular damage. <strong>The brain represents only 2% of body weight but uses 20% of glucose</strong>. Glucose homeostasis is really about protecting brain function.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Blood glucose regulation uses positive feedback where high glucose triggers insulin, which lowers glucose, amplifying the corrective response.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Blood glucose regulation uses negative feedback, not positive</strong>. High glucose triggers insulin, which lowers glucose back toward normal—this OPPOSES and reverses the original change (negative feedback). <strong>This is foundational: negative feedback maintains homeostasis; positive feedback would create runaway loops.</strong> Confusing feedback types reveals misunderstanding of homeostasis.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'When blood glucose rises after eating, the pancreas detects this change and secretes insulin, which promotes glucose uptake into cells and storage as glycogen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>This describes the normal postprandial response</strong>. Pancreatic beta cells act as glucose sensors, detecting elevated blood glucose and secreting appropriate insulin amount. Insulin enables cells to absorb glucose, promoting storage as glycogen in liver/muscles or energy production in active cells. <strong>This feedback loop prevents dangerous glucose accumulation.</strong>'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'When fasting blood glucose drops below 70 mg/dL, glucagon is secreted and immediately restores normal glucose levels within seconds.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While glucagon IS the appropriate response to hypoglycemia, <strong>hormones don\'t work instantaneously</strong>. Glucagon takes several minutes to signal the liver to break down glycogen. If glucose drops very rapidly or very low, glucagon alone may be insufficient before symptoms develop. <strong>Understanding physiological timing matters</strong>—hormonal responses have real latency and limitations.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Once excess glucose has been stored as glycogen, it remains unavailable until circulating glucose is completely depleted, so glycogen does not help stabilize blood glucose between meals.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Glycogen is a short-term glucose reserve that can be mobilized as blood glucose begins to fall during fasting or between meals. Glucagon promotes glycogen breakdown before circulating glucose is exhausted. <strong>The misconception is treating glycogen as inaccessible long-term storage rather than a readily regulated buffer.</strong>'
        },

        // ==========================================
        // TOPIC 10: INSULIN AND GLUCAGON (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Insulin is produced by pancreatic beta cells and lowers blood glucose by promoting cellular glucose uptake and glycogen storage.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Beta cells act as glucose sensors and secretion-regulators</strong>. When glucose rises, beta cells release insulin proportionate to the increase. Insulin enables: glucose entry into muscle and fat cells, glycogen synthesis in liver, glucose metabolism. <strong>This is a dose-response relationship</strong>—more glucose triggers more insulin. The mechanism enables precise glucose control.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Type 1 diabetes and Type 2 diabetes result from the same underlying pancreatic dysfunction, just manifesting differently.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>These are fundamentally different diseases with different causes</strong>. <strong>Type 1: immune system destroys beta cells, so pancreas produces little/no insulin (deficiency)</strong>. <strong>Type 2: pancreas produces normal/high insulin, but cells don\'t respond (insulin resistance)</strong>. Different mechanisms require different treatments. Type 1 needs insulin replacement; Type 2 initially needs improved sensitivity. Confusing them leads to treatment errors.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Glucagon stimulates the liver to perform glycogenolysis (breaking down glycogen) and gluconeogenesis (making new glucose), raising blood glucose during fasting.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Glucagon has dual actions to raise glucose</strong>: mobilizes stored glycogen AND creates new glucose from non-carbohydrate sources (amino acids, lactate). This dual approach ensures sustained glucose supply during prolonged fasting when glycogen stores deplete. <strong>Understanding both mechanisms explains how blood glucose stays stable without constant eating.</strong>'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'In Type 1 diabetes, the body produces too much insulin that cannot function properly, so additional insulin injections are ineffective.',
            correct: false,
            explanation: 'This is <strong>false</strong>—critical misconception. <strong>Type 1: body produces little/no insulin (not excess nonfunctional insulin)</strong>. This is why insulin injections ARE effective—they replace the missing hormone. The problem is beta cell destruction, not insulin malfunction. People with Type 1 require lifelong insulin because they cannot produce any. Misunderstanding this mechanism leads to incorrect treatment approaches.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Hypoglycemia below 70 mg/dL causes shakiness, sweating, and confusion because the brain depends on glucose and low levels impair neurological function.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>These symptoms reflect acute brain glucose deprivation</strong>. Shakiness = stress hormone response (adrenaline). Sweating = sympathetic activation. Confusion = inadequate glucose for higher brain functions. <strong>The brain is glucose-dependent and highly sensitive to depletion</strong>. These are emergency warning signs that glucose needs immediate restoration. Recognizing symptoms is lifesaving for diabetes management.'
        }
    ]
};

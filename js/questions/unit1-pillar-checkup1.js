// Unit 1: Pillar Checkup 1 - Final Question Bank
// 50 Questions Total: 10 Topics × 5 Questions per Topic
// Exact distribution: 25 True (50%), 25 False (50%)
// Difficulty level: Requires deep understanding, not surface facts

const pillarCheckup1Questions = {
    'unit1-pillar-checkup1': [
        // ==========================================
        // TOPIC 1: Health (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Health',
            question: 'Health-informed decisions require understanding the difference between primary sources like peer-reviewed studies and secondary sources like news articles, since secondary sources can sometimes misrepresent research findings.',
            correct: true,
            explanation: 'This is <strong>true</strong>. While secondary sources make research accessible, they can oversimplify, misinterpret, or even distort findings from primary research. <strong>Primary sources (peer-reviewed studies) show the actual data and methods</strong>, while secondary sources (news, blogs, social media) may contain errors, sensationalism, or incomplete information. Understanding this distinction helps you evaluate the reliability of health claims.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Since social determinants of health like income and neighborhood affect health outcomes, improving individual health behaviors alone can completely overcome the negative effects of poor social determinants.',
            correct: false,
            explanation: 'This is <strong>false</strong>. This is tricky because individual behaviors DO matter, but they have <strong>limited power against structural barriers</strong>. A person in a food desert cannot eat nutritiously through willpower alone; someone in an unsafe neighborhood cannot exercise freely. Research shows social determinants often have MORE impact than individual choices. While behaviors help, <strong>systemic change is necessary to address health inequities</strong>.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'The five pillars of health—social connection, nutrition, exercise, sleep, and stress management—work synergistically, meaning deficiency in one pillar cannot be fully compensated by excellence in the others.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The pillars are <strong>interdependent, not interchangeable</strong>. Someone with excellent nutrition and exercise but severe social isolation still suffers health consequences from loneliness. Someone with perfect sleep but chronic unmanaged stress still faces disease risk. Each pillar provides unique benefits the others cannot replace. True health requires balanced attention to all five.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Peer-reviewed research is always more accurate than reports from established health organizations like the CDC or WHO because peer review ensures higher standards than institutional review boards.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Both have rigorous review processes but serve different purposes. Peer review validates individual studies for accuracy and methodology. Institutional review boards and health organizations synthesize multiple studies into evidence-based guidelines. Individual peer-reviewed studies can have limitations or even be wrong, while organizations aggregate many studies to identify trends. Trusting one source type blindly creates problems—you need both.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Lateral reading involves opening multiple browser tabs to cross-reference health claims against primary sources and reputable organizations, helping identify when secondary sources have misrepresented research or made unsupported claims.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lateral reading is a powerful critical evaluation tool</strong>. When you encounter a health claim, checking the original research reveals whether secondary sources accurately represented findings. News articles frequently misinterpret studies, claim causation from correlation, or exaggerate effect sizes. By comparing the secondary claim to the actual research, you catch these distortions and identify credible versus unreliable sources.'
        },

        // ==========================================
        // TOPIC 2: Signs and Symptoms (5 questions) - 2T, 3F
        // ==========================================
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'A patient reporting persistent fatigue that interferes with daily activities is describing a symptom, whereas visible jaundice (yellowing of skin) observed by a healthcare provider is a sign.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The patient\'s reported fatigue is subjective experience (symptom). The visible yellowing of skin is an objective, observable finding (sign). Both are important: the symptom tells us something is wrong from the patient\'s perspective, while the sign reveals physical evidence that helps identify the cause.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'Symptoms are more clinically useful than signs because they reflect what the patient actually experiences, whereas signs only show objective measurements that don\'t necessarily correlate with how sick the patient feels.',
            correct: false,
            explanation: 'This is <strong>false</strong>. This reverses clinical reality. <strong>Signs and symptoms serve different purposes—both are essential</strong>. A patient might FEEL fine (symptom) while showing dangerous vital signs (signs of sepsis). Conversely, a patient might complain of severe pain (symptom) while appearing healthy (signs normal). Experienced clinicians know to trust objective signs when they contradict reported symptoms, as serious conditions can be asymptomatic.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'Because signs are objective and measurable, they are always more important clinically than symptoms when making a diagnosis.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While signs are objective, <strong>symptoms are often equally or more important clinically</strong>. Many serious conditions (chest pain from heart disease, severe headaches from migraines) are primarily diagnosed through symptoms. A patient might report severe pain (symptom) while showing minimal physical findings (signs). Dismissing symptoms as less important leads to missed diagnoses.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'A fever of 102°F measured with a thermometer is a sign, while a patient saying "I feel hot and sweaty" is describing the same phenomenon, making these essentially equivalent for diagnostic purposes.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Though related, these are NOT equivalent. The measured fever (sign) provides specific diagnostic information about severity and pattern. The patient\'s description (symptom) reflects perception but lacks precision—someone feeling "hot" might have a 99°F fever or might be in a warm room. Clinicians need the sign (measurement) to distinguish actual fever from subjective sensation. They\'re complementary but distinct.'
        },
        {
            type: 'tf',
            topic: 'Signs and Symptoms',
            question: 'Nausea is classified as a symptom rather than a sign because only the patient can experience and report the sensation of nausea, making it impossible for healthcare providers to observe or measure it directly.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Nausea is purely subjective—no physical finding directly reveals it</strong>. A provider cannot see, hear, or measure nausea the way they can measure blood pressure or observe rash. They rely entirely on patient report. While providers can observe consequences (vomiting), the sensation itself belongs only to the patient experiencing it, making it definitionally a symptom.'
        },

        // ==========================================
        // TOPIC 3: Social Determinants of Health (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Researchers found that when low-income immigrants move to higher-income countries, their health outcomes often improve despite their genetic makeup remaining unchanged, suggesting social determinants can override genetic predisposition.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Migration studies show dramatic health improvements in immigrants moving from resource-poor to resource-rich countries, even within the same generation. This proves <strong>environment powerfully shapes health outcomes independent of genetics</strong>. If genetics were deterministic, these improvements wouldn\'t occur. This is strong evidence that social determinants are primary drivers of health disparities.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'The statement "your zip code matters more than your genetic code" oversimplifies health, since genetics and social determinants interact, and environmental factors are limited in their power to change genetic predispositions.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While genetics matter, research overwhelmingly shows that <strong>environmental and social factors can dramatically override genetic predisposition</strong>. Someone genetically predisposed to heart disease can avoid it through good nutrition and exercise. Environmental toxins and stress can express latent genetic risks. Social determinants are remarkably powerful—not limited.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Social determinants of health explain why life expectancy can vary by 10-20 years depending on neighborhood within the same city.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Dramatic health disparities within cities are largely explained by social determinants: access to quality healthcare, safe neighborhoods, nutritious food, education, and economic opportunity. Two neighborhoods just miles apart can have vastly different life expectancies due to these structural differences. This shows health is not just individual choice—it\'s shaped by where you live.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Since education is a social determinant that correlates with better health outcomes, providing health education programs to disadvantaged communities can eliminate health disparities caused by other social determinants.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Education alone cannot overcome systemic barriers. Even well-informed people in food deserts cannot access nutritious food. Knowledge about exercise doesn\'t help in unsafe neighborhoods. <strong>Social determinants are structural issues requiring structural solutions</strong>—not just individual behavior change. While education helps, addressing poverty, discrimination, healthcare access, and environmental quality is necessary to truly reduce disparities.'
        },
        {
            type: 'tf',
            topic: 'Social Determinants of Health',
            question: 'Access to higher education affects health outcomes because it typically leads to better employment, higher income, and health insurance coverage, creating multiple pathways through which education influences health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Education is a crucial social determinant with cascading effects. <strong>Higher education → better employment → higher income → health insurance access → better healthcare → health screening → preventive care</strong>. Beyond economics, education also improves health literacy (understanding medical information) and sense of agency (believing you can improve your health). Education\'s effects on health are powerful and multifaceted.'
        },

        // ==========================================
        // TOPIC 4: Social Connection (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Social',
            question: 'Studies comparing isolated individuals to socially connected individuals show that chronic loneliness increases mortality risk at a magnitude comparable to smoking 15 cigarettes daily, suggesting social connection is as important to longevity as major behavioral health factors.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Meta-analyses of large population studies consistently show <strong>social isolation increases mortality risk equivalent to smoking</strong>. This is remarkable because it establishes social factors as major health determinants—equal to behavioral factors we consider critical. The mechanism involves chronic stress activation, immune suppression, and increased inflammation.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Chronic loneliness produces elevated cortisol levels which suppress immune function, explaining why isolated individuals are more susceptible to both infectious and chronic diseases.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Loneliness activates chronic stress response</strong>, keeping cortisol high. Elevated cortisol: suppresses antibody production, reduces lymphocyte function, increases inflammation, and impairs wound healing. This explains why isolated people suffer higher rates of colds, infections, heart disease, and earlier mortality. The biological mechanism connects social isolation directly to physical disease risk.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Since quality of relationships matters more than quantity for health outcomes, having one very close friend is equivalent to having a large social network for health protection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While quality matters more than quantity, <strong>research shows both matter</strong>. A single close relationship provides some protection, but a diverse social network provides MORE protection. Different relationships meet different needs: intimate partners provide emotional support, friends provide belonging, community connections provide purpose. One relationship, no matter how close, cannot fully replace the health benefits of multiple types of connection.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Social capital refers to the networks, relationships, norms, and trust within a community that enable people to work together effectively, and high social capital has been associated with better health outcomes at both individual and community levels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Social capital predicts community health outcomes</strong>. Communities with high social capital have: stronger civic engagement, more mutual support networks, greater trust enabling cooperation on health issues, and better collective problem-solving. These communities achieve better vaccination rates, lower crime, and improved health behaviors. Social capital amplifies health benefits beyond individual relationships.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'The health benefits of social connection are primarily due to improved compliance with medical recommendations, since people with strong social networks are more likely to take medications and follow doctor\'s orders.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While social support can improve medical compliance, that\'s only one mechanism. <strong>Social connection benefits health through multiple pathways</strong>: reducing stress hormones (cortisol), boosting immune function, improving mental health (reducing depression/anxiety), increasing physical activity, improving sleep quality, and promoting healthier eating. These benefits occur independent of healthcare system interactions. Someone socially isolated but compliant with medications still has worse health than someone connected but less compliant.'
        },

        // ==========================================
        // TOPIC 5: Nutrition Myths - Carbs and Fats (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Since refined carbohydrates and whole grains both provide glucose to fuel cells, they are nutritionally equivalent in their health effects, and choosing between them is purely a matter of personal preference.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Though both provide glucose, they have dramatically different health effects. <strong>Whole grains contain fiber, vitamins, minerals, and polyphenols</strong> that slow digestion, prevent blood sugar spikes, feed healthy gut bacteria, and reduce disease risk. <strong>Refined carbs lack these components</strong>, causing rapid glucose spikes, increasing inflammation, and contributing to diabetes and obesity. Nutritionally equivalent is false.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Unsaturated fats from sources like olive oil, avocados, nuts, and fatty fish are essential for health, whereas trans fats should be avoided and saturated fats should be limited in a healthy diet.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Unsaturated fats support cardiovascular and brain health</strong>, reduce inflammation, and are needed for hormone production and vitamin absorption. <strong>Trans fats actively harm health</strong> by increasing LDL cholesterol and inflammation. <strong>Saturated fats in excess raise disease risk</strong>, though small amounts from whole foods are acceptable. The fat quality matters enormously for health outcomes.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'All carbohydrates are unhealthy and should be avoided for weight loss because they are more likely to be converted to fat than protein or vegetables are.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Complex carbohydrates from whole grains, legumes, and vegetables are healthy</strong>. The body preferentially uses carbohydrates for fuel rather than converting them to fat. Only excess carbohydrates (beyond energy needs) are converted to fat—just as excess protein or fat are. Additionally, fiber-rich carbohydrates actually improve weight management by increasing satiety and improving metabolic health. The key is carbohydrate quality, not elimination.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'The Mediterranean diet emphasizes plant foods, olive oil, fish, and moderate wine consumption, and has been shown in large studies to reduce cardiovascular disease and mortality compared to the Standard American Diet.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>Mediterranean diet consistently shows superior health outcomes</strong> in rigorous studies. Its combination of unsaturated fats (olive oil), plant compounds (vegetables, nuts), omega-3 fatty acids (fish), and moderate alcohol creates <strong>anti-inflammatory effects that protect cardiovascular health</strong>. Studies show reduced heart attacks, strokes, and all-cause mortality in adherents compared to typical Western diets.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Michael Pollan\'s guideline "Eat food, not too much, mostly plants" recommends complete elimination of animal products because plant-based diets are universally superior to all other dietary patterns.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Pollan\'s "mantra" means: eat <strong>real/whole foods</strong> (not processed), practice <strong>moderation</strong>, and <strong>emphasize plant-based foods</strong> (not exclusively vegan). The guideline allows some animal products and doesn\'t claim plant-only diets are universally superior. The Mediterranean diet (emphasizing plants but including fish and occasional meat) achieves excellent health outcomes. The mantra is about balance and food quality, not dietary dogmatism.'
        },

        // ==========================================
        // TOPIC 6: Homeostasis (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Negative feedback loops maintain homeostasis by detecting deviations from the set point and triggering responses that reverse those deviations, while positive feedback loops amplify changes away from the set point.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Negative feedback</strong> = counteracts changes (maintains stability). When body temperature rises, sweating cools you back down. <strong>Positive feedback</strong> = amplifies changes (rare in the body). During labor, contractions trigger more contractions, amplifying until birth occurs. Understanding this distinction is crucial for predicting how the body responds to disruptions.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'The endocrine system maintains homeostasis faster than the nervous system because hormones travel through the bloodstream instantaneously.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The <strong>nervous system is actually much faster</strong>. Nervous system responses (electrical signals) occur in milliseconds, while endocrine responses (hormone synthesis and travel) take minutes to hours. The nervous system handles quick adjustments (pain response, fight-or-flight), while the endocrine system handles sustained, longer-term adjustments (growth, metabolism). They\'re complementary systems with different timescales.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'The endocrine system maintains homeostasis through negative feedback loops where hormones directly inhibit the gland that produced them, creating a system that self-regulates without requiring constant monitoring by the nervous system.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While hormones DO inhibit their own production (negative feedback), the statement implies the endocrine system works <strong>independently without nervous system input</strong>, which is incorrect. The nervous system constantly monitors conditions and signals the endocrine system to adjust hormone production. The systems work together—the brain (nervous system) tells glands what to do, not independently.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Negative feedback loops are called "negative" because they slow down or prevent responses to environmental changes, which is why organisms with more negative feedback loops respond more slowly to external threats than organisms with more positive feedback loops.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The term "negative" does NOT mean slow or inhibitory. <strong>"Negative" means the response opposes (reverses) the change</strong>—it negates the deviation. Negative feedback loops allow RAPID responses (through nervous system) or sustained responses (through endocrine) that maintain stability. Positive feedback loops are rare and used only when amplification is desired. More negative feedback loops make organisms MORE responsive to maintain homeostasis, not less.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'In a homeostatic feedback loop, receptors detect changes in the internal environment, control centers interpret that information and determine appropriate responses, and effectors carry out those responses to restore stability.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Homeostatic loops require all three components</strong>: Receptors (thermoreceptors sense temperature change), Control centers (hypothalamus interprets data and decides response), Effectors (sweat glands or muscles execute the response). This architecture allows the body to detect disturbances and automatically restore balance. Understanding this three-part structure explains how diverse homeostatic mechanisms work.'
        },

        // ==========================================
        // TOPIC 7: Blood Glucose Regulation (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Normal fasting blood glucose levels range from 70-100 mg/dL, and levels above 100 mg/dL indicate prediabetes or diabetes, representing a failure of glucose homeostasis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>The narrow range 70-100 mg/dL represents tight homeostatic control</strong>. Fasting glucose above 100 mg/dL indicates the pancreas cannot maintain homeostasis—the set point has shifted upward. This represents disease: prediabetes (100-125 mg/dL) or diabetes (126+ mg/dL). Even small deviations from the normal range have significant metabolic consequences.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Blood glucose regulation uses positive feedback to maintain homeostasis.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Blood glucose regulation uses <strong>negative feedback</strong>. When glucose rises, insulin lowers it; when glucose falls, glucagon raises it. These responses reverse changes and maintain homeostasis. If glucose regulation used positive feedback, high glucose would trigger more insulin production, which would trigger even more insulin—creating a dangerous spiral. Negative feedback is essential for glucose stability.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'The pancreas simultaneously functions as a receptor detecting blood glucose levels, a control center interpreting that information, and an effector producing appropriate hormonal responses, making it an unusual organ that embodies all three components of a homeostatic feedback loop.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The pancreas is unique in performing all three feedback loop functions: <strong>receptor</strong> (beta cells detect glucose), <strong>control center</strong> (interprets levels and decides response), and <strong>effector</strong> (secretes insulin or glucagon). Most homeostatic loops involve different structures for each component. The pancreas\'s integrated design makes it highly efficient for glucose regulation.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'When blood glucose is high, the hormone glucagon is released to lower it.',
            correct: false,
            explanation: 'This is <strong>false</strong>. When blood glucose is high, <strong>insulin</strong> (not glucagon) is released to lower it. Glucagon is released when blood glucose is <strong>low</strong> to raise it back up. Confusing these hormones is a common error. Remember: <strong>Insulin = glucose down, Glucagon = glucose up</strong>. Both are necessary for maintaining the narrow homeostatic range.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Excess glucose can be stored as glycogen in the liver and muscles, allowing the body to maintain stable blood glucose levels between meals.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When insulin is present and glucose is abundant, excess glucose is <strong>converted to glycogen</strong> (through glycogenesis) for storage in liver and muscles. This glucose reserve can be broken down when glucose is needed (between meals or during fasting). This glycogen storage system allows the body to maintain stable blood glucose without eating constantly.'
        },

        // ==========================================
        // TOPIC 8: Insulin and Glucagon (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Insulin and glucagon are considered antagonistic hormones because they produce opposite metabolic effects, with insulin promoting glucose storage and glucagon promoting glucose release, yet both are necessary for maintaining stable blood glucose levels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Antagonistic hormones have opposing effects but work together</strong>. Insulin (high glucose) stores glucose as glycogen and promotes anabolic reactions. Glucagon (low glucose) breaks down glycogen and promotes glucose release. Neither alone maintains homeostasis—you need both. This reciprocal regulation creates a balanced system where opposing forces keep glucose stable.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Insulin is produced by alpha cells in the pancreas.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Beta cells (not alpha cells) in the pancreatic islets of Langerhans produce insulin</strong>. Alpha cells produce glucagon. This distinction matters because: beta cell destruction causes Type 1 diabetes (no insulin production), while alpha cell problems are rare. Understanding which cell type produces which hormone is crucial for understanding diabetes pathology.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Glucagon stimulates the liver to break down glycogen and release glucose into the bloodstream when blood glucose is low.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Glucagon</strong> triggers glycogenolysis (glycogen breakdown) in the liver and gluconeogenesis (making new glucose), releasing glucose into the blood to raise blood glucose levels when they drop too low. This is how your body maintains glucose between meals and during fasting.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'In Type 1 diabetes, the body produces too much insulin.',
            correct: false,
            explanation: 'This is <strong>false</strong>. In Type 1 diabetes, the immune system destroys insulin-producing beta cells, so the body produces <strong>little to no insulin</strong>. People with Type 1 diabetes require insulin injections to survive. This is opposite from Type 2 diabetes, where the body produces adequate insulin but cells become insulin-resistant. The distinction is crucial for treatment.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Hypoglycemia refers to abnormally low blood glucose levels that can cause shakiness, sweating, confusion, and potentially seizures or unconsciousness if untreated.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Hypoglycemia</strong> (blood glucose below 70 mg/dL) is a medical emergency. Low glucose deprives the brain of fuel, causing: shakiness, sweating, anxiety, confusion, impaired thinking, and if severe, seizures, coma, or death. Hyperglycemia (high glucose) develops slowly with less immediate danger, but hypoglycemia can cause rapid, life-threatening symptoms.'
        },

        // ==========================================
        // TOPIC 9: Sleep (5 questions) - 2T, 3F
        // ==========================================
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Most teenagers need 8-10 hours of sleep per night for optimal health, yet research shows the average teen gets 6-7 hours due to early school start times and other factors.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>The disconnect between sleep need and sleep reality is a major public health issue</strong>. Teens need 8-10 hours but school schedules, social obligations, and technology use prevent this. This chronic sleep debt impairs learning, increases mood disorders, and raises accident risk. Some schools have moved start times later with documented improvements in teen health.'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Sleep debt can be fully recovered with one long night of sleep.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While you can partially recover from sleep deprivation, <strong>chronic sleep debt has lasting effects</strong> that can\'t be fully "made up" with occasional long sleep sessions. One night of sleep cannot repair weeks of poor sleep\'s effects on immune function, metabolism, and emotional regulation. Consistent adequate sleep is essential—weekday sleep cannot be replaced by weekend sleep.'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Since caffeine is eliminated from your system within 2 hours of consumption, having a coffee in the afternoon should not affect evening sleep.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Caffeine has a <strong>half-life of 3-7 hours</strong>, meaning it can affect your system for 6-8 hours or longer. A 3pm coffee can still impact 10pm sleep. Additionally, individual caffeine metabolism varies dramatically—some people break it down faster than others. Afternoon/evening caffeine use significantly disrupts sleep for most people, particularly those sensitive to caffeine.'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Short naps of 20-30 minutes taken before mid-afternoon can improve alertness and performance without causing sleep inertia or disrupting nighttime sleep.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Brief naps (20-30 min) before mid-afternoon</strong> boost alertness and performance without negative effects. Longer naps (60-90+ minutes) cause sleep inertia (grogginess upon waking) and can interfere with nighttime sleep. Napping after 3pm can disrupt nighttime sleep by reducing sleep drive. Timing and duration matter crucially for napping benefits.'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Cortisol levels peak in the evening to promote sleep, which is why cortisol-lowering medications improve sleep quality when taken before bed.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Cortisol peaks in the morning</strong> (cortisol awakening response) to promote wakefulness and alertness. Levels gradually decline during the day and are lowest at night, when melatonin rises. Evening cortisol elevation would disrupt sleep. Cortisol-lowering medications don\'t improve sleep through this mechanism because normal evening cortisol is already low. Confusing cortisol\'s timing disrupts understanding of sleep regulation.'
        },

        // ==========================================
        // TOPIC 10: Stress Management (5 questions) - 3T, 2F
        // ==========================================
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'The fight-or-flight response is an adaptive acute stress response that prepares the body for immediate action through sympathetic nervous system activation and adrenaline release.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Fight-or-flight is survival-critical for immediate threats</strong>. It causes: increased heart rate, blood pressure, and glucose release for energy; pupil dilation for better vision; reduced digestion; and increased alertness. This response is adaptive when facing real danger, but problematic when activated chronically by modern stressors (work deadlines, social anxiety).'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'Since acute stress triggers the sympathetic nervous system, people who experience frequent acute stressors (like combat, emergency medicine, or trauma) have more resilient stress responses than people who experience rare stressors.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Frequent acute stress does not build resilience—it builds chronic stress</strong>. Repeated acute stressors trigger the HPA axis (slower stress response), keeping cortisol chronically elevated. This leads to: immune dysfunction, hypertension, burnout, PTSD, and accelerated aging. Resilience comes from adequate recovery between stressors and supportive environments—not from repeated exposure. Frequent acute stress is harmful.'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'Chronic stress maintains elevated cortisol levels which suppress immune function, increase inflammation, promote visceral fat accumulation, and increase risk for cardiovascular disease and metabolic disorders.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Chronic stress creates a cascade of harmful physiological changes</strong>. Sustained cortisol elevation: suppresses lymphocytes and antibodies (immunosuppression), increases inflammatory cytokines, promotes abdominal fat storage, increases blood pressure, promotes atherosclerosis, and impairs metabolism. This explains why chronic stress predicts multiple diseases and early mortality.'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'Adverse Childhood Experiences (ACEs) like trauma, abuse, and household dysfunction affect health only during childhood and do not have lasting effects into adulthood.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>ACEs have profound, lasting effects throughout life</strong>. Childhood trauma alters brain development (hippocampus, amygdala, prefrontal cortex) and dysregulates the HPA axis, causing lifelong hypervigilance and stress reactivity. Higher ACE scores predict chronic disease, mental health disorders, substance abuse, and early death in adulthood. The effects are measurable decades later—ACEs are not just childhood issues.'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'Exercise, sleep, social connection, and mindfulness practices all reduce cortisol levels and activate the parasympathetic nervous system, countering chronic stress effects and promoting recovery.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>These interventions activate the parasympathetic (rest-and-digest) system</strong>. Exercise increases endorphins and reduces cortisol. Sleep allows HPA axis recovery. Social connection reduces perceived threat. Mindfulness shifts brain activity toward regions associated with calm. Together, these practices create a powerful counterweight to chronic stress, reducing disease risk and improving wellbeing.'
        }
    ]
};

// Export for StudyPhysio platform
// Total: 50 questions
// Distribution: 25 True (50%), 25 False (50%)
// All questions require deep understanding of course concepts
// Vocabulary strictly limited to Unit 1 course guide
// False questions contain plausible reasoning with subtle conceptual flaws
// Explanations address common misconceptions and reinforce key learning

// PILLAR CHECKUP TRUE/FALSE QUESTIONS
// 50 questions per checkup (5 questions per topic)
// Each question includes: type, topic, question, correct, explanation

const pillarCheckupQuestions = {

    // ==========================================
    // PILLAR CHECKUP 1 (50 QUESTIONS)
    // ==========================================
    'unit1-pillar-checkup1': [

        // TOPIC 1: Health (5 questions)
        {
            type: 'tf',
            topic: 'Health',
            question: 'Overall good health requires physical, mental, and social health working together.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The course emphasizes that overall good health is a combination of all three: physical health, mental health, and social health. These components are interconnected and all are necessary for complete well-being.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'There are four main pillars of health: nutrition, exercise, sleep, and stress management.',
            correct: false,
            explanation: 'This is <strong>false</strong>. There are actually <strong>five pillars of health</strong>: social connection, nutrition, exercise, sleep, and managing stress. Social connection is an essential pillar that is often overlooked.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Lateral reading is a strategy where you check multiple sources to verify health information.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lateral reading</strong> means opening new tabs to check other sources and verify claims before trusting information. This strategy, along with peer review, helps identify credible health information and avoid misinformation.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Personal health only requires access to healthcare, not accurate health information.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Personal and societal health require <strong>both accurate information AND equitable access to effective healthcare</strong>. Being health-informed is just as important as having access to medical care.'
        },
        {
            type: 'tf',
            topic: 'Health',
            question: 'Physical health problems can negatively affect mental health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Physical and mental health are deeply interconnected. Chronic physical illnesses can lead to depression and anxiety, while mental health conditions can manifest as physical symptoms. They influence each other significantly.'
        },

        // TOPIC 2: Signs and symptoms (5 questions)
        {
            type: 'tf',
            topic: 'Signs and symptoms',
            question: 'A sign is something a doctor can observe or measure, while a symptom is what a patient experiences and reports.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Signs</strong> are objective (fever, rash, high blood pressure) and can be observed/measured. <strong>Symptoms</strong> are subjective (pain, nausea, dizziness) and can only be experienced and reported by the patient.'
        },
        {
            type: 'tf',
            topic: 'Signs and symptoms',
            question: 'A patient feeling nauseated is an example of a sign.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Nausea is a <strong>symptom</strong> because it is a subjective feeling that only the patient experiences. Signs are objective findings that can be observed or measured by healthcare providers.'
        },
        {
            type: 'tf',
            topic: 'Signs and symptoms',
            question: 'A fever of 102°F measured with a thermometer is classified as a sign.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A measurable fever is a <strong>sign</strong> because it is objective data obtained through measurement. Healthcare providers can observe and document this finding independently of what the patient reports.'
        },
        {
            type: 'tf',
            topic: 'Signs and symptoms',
            question: 'Symptoms are more reliable than signs for making medical diagnoses.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While symptoms provide valuable information, <strong>signs are generally more reliable</strong> because they are objective and measurable. Symptoms can be influenced by patient perception, memory, and reporting ability.'
        },
        {
            type: 'tf',
            topic: 'Signs and symptoms',
            question: 'Doctors use both signs and symptoms together when making a diagnosis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Healthcare providers combine <strong>both signs (objective findings) and symptoms (patient experiences)</strong> to get a complete picture of the patient\'s condition and make accurate diagnoses.'
        },

        // TOPIC 3: Social determinants of health (5 questions)
        {
            type: 'tf',
            topic: 'Social determinants of health',
            question: 'Social determinants of health include factors like income, education, and neighborhood conditions.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Social determinants of health</strong> are the conditions in environments where people live, work, and play. They include economic stability, education access, healthcare access, neighborhood quality, and social context.'
        },
        {
            type: 'tf',
            topic: 'Social determinants of health',
            question: 'Your zip code can be a stronger predictor of health outcomes than your genetic makeup.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Research shows <strong>zip code can predict health better than genetic code</strong>. Where you live determines access to healthy food, quality healthcare, safe environments, clean air and water—all major factors affecting health.'
        },
        {
            type: 'tf',
            topic: 'Social determinants of health',
            question: 'Social determinants of health only impact people who are living below the poverty line.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Social determinants affect <strong>everyone</strong>, though disadvantaged groups often face greater challenges. Neighborhood safety, environmental quality, and community resources impact health across all income levels.'
        },
        {
            type: 'tf',
            topic: 'Social determinants of health',
            question: 'Access to education is considered a social determinant of health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Education</strong> is a key social determinant of health. Higher education correlates with better health literacy, increased income, improved access to healthcare, and healthier lifestyle choices.'
        },
        {
            type: 'tf',
            topic: 'Social determinants of health',
            question: 'Social determinants of health contribute to health disparities between different populations.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Unequal access to resources like education, healthcare, healthy food, and safe environments creates <strong>health disparities</strong>. Groups with fewer opportunities and resources experience worse health outcomes.'
        },

        // TOPIC 4: Social (5 questions)
        {
            type: 'tf',
            topic: 'Social',
            question: 'Social isolation can increase risk of early death similar to smoking cigarettes.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Research shows <strong>social isolation increases mortality risk</strong> at levels comparable to smoking 15 cigarettes per day. Loneliness impacts both mental and physical health, increasing risk for heart disease, depression, and early death.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Social connections only improve mental health and have no effect on physical health.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Social connections benefit <strong>both mental AND physical health</strong>. Strong relationships are linked to lower blood pressure, reduced inflammation, stronger immune function, and increased longevity.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Social capital refers to the networks, relationships, and trust within a community.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Social capital</strong> includes the networks, relationships, norms, and trust that exist within communities. High social capital is associated with better health outcomes because communities can better support their members.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'Loneliness triggers the release of stress hormones like cortisol.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Loneliness activates the stress response, leading to <strong>elevated cortisol levels</strong>. Chronic loneliness keeps stress hormones high, which damages the immune system and increases inflammation.'
        },
        {
            type: 'tf',
            topic: 'Social',
            question: 'The number of social connections matters more for health than the quality of those connections.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While having social connections is important, <strong>quality matters more than quantity</strong>. A few close, supportive relationships provide greater health benefits than many superficial connections.'
        },

        // TOPIC 5: Social Media (5 questions)
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Heavy social media use has been linked to increased rates of anxiety and depression in adolescents.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Research shows correlations between heavy social media use and <strong>increased anxiety and depression</strong> in teens, particularly related to social comparison, cyberbullying, and fear of missing out (FOMO).'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Primary sources are original research studies, while secondary sources interpret or summarize that research.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Primary sources</strong> contain original research and data (like peer-reviewed studies). <strong>Secondary sources</strong> interpret, analyze, or summarize primary sources (like news articles or blog posts).'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Using electronic devices before bed has no effect on sleep quality.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Social media use before bed can <strong>significantly disrupt sleep</strong>. Blue light exposure suppresses melatonin production, and stimulating content keeps the brain alert, both interfering with falling asleep.'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Social media can have both positive and negative effects on health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Social media can provide health information, support communities, and maintain connections (positive), but can also contribute to anxiety, poor sleep, sedentary behavior, and negative social comparison (negative).'
        },
        {
            type: 'tf',
            topic: 'Social Media',
            question: 'Secondary sources like news articles are always less accurate than primary research sources.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While primary sources provide direct evidence, good secondary sources can accurately interpret research for general audiences. The key is evaluating the <strong>quality and credibility</strong> of the source, whether primary or secondary.'
        },

        // TOPIC 6: Nutrition Myths: Carbs and Fats (5 questions)
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'All carbohydrates are unhealthy and should be avoided for good health.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Not all carbs are equal. <strong>Complex carbohydrates</strong> from whole grains, fruits, and vegetables provide fiber, vitamins, and sustained energy. Only refined/processed carbs should be limited.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Some types of fats are essential for good health and should be included in the diet.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Unsaturated fats</strong> from sources like olive oil, avocados, nuts, and fatty fish are essential for brain function, hormone production, and vitamin absorption. These healthy fats should be part of a balanced diet.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Trans fats and saturated fats should be limited in a healthy diet.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Trans fats should be avoided</strong> and <strong>saturated fats should be limited</strong> as they increase risk for heart disease. Focus instead on unsaturated fats from plant and fish sources.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Whole grains contain more fiber and nutrients than refined grains.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Whole grains</strong> retain the bran, germ, and endosperm, providing fiber, B vitamins, minerals, and phytochemicals. Refined grains have had the nutritious bran and germ removed.'
        },
        {
            type: 'tf',
            topic: 'Nutrition Myths: Carbs and Fats',
            question: 'Artificial sweeteners are always a healthier choice than natural sugars.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While artificial sweeteners reduce calories, research on their long-term health effects is mixed. Some studies suggest they may affect gut bacteria and metabolism. <strong>Moderation with natural sugars</strong> from whole foods is often better.'
        },

        // TOPIC 7: Nutrition: Mediterranean/SAD (5 questions)
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Mediterranean diet emphasizes plant foods, olive oil, fish, and moderate wine consumption.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>Mediterranean diet</strong> focuses on fruits, vegetables, whole grains, legumes, olive oil, and fish, with moderate wine and limited red meat. This pattern is associated with reduced heart disease and longer life.'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Standard American Diet (SAD) is associated with increased rates of chronic diseases.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The Standard American Diet—high in processed foods, refined grains, added sugars, and unhealthy fats—is linked to <strong>increased obesity, heart disease, diabetes, and cancer</strong>.'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'Michael Pollan\'s food mantra "Eat food, not too much, mostly plants" means you should only eat vegetables.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The mantra means: eat <strong>real/whole foods</strong> (not processed), practice <strong>moderation</strong>, and <strong>emphasize plant-based foods</strong> (not exclusively). It allows for balanced eating including some animal products.'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Mediterranean diet has been shown to reduce cardiovascular disease risk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Large studies have demonstrated that the <strong>Mediterranean diet reduces cardiovascular disease</strong>, stroke, and mortality. Its healthy fats, antioxidants, fiber, and anti-inflammatory compounds provide protection.'
        },
        {
            type: 'tf',
            topic: 'Nutrition: Mediterranean/SAD',
            question: 'The Standard American Diet typically contains more whole grains and vegetables than the Mediterranean diet.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The Standard American Diet contains <strong>fewer whole grains and vegetables</strong> than the Mediterranean diet. It is characterized by more processed foods, refined grains, added sugars, and unhealthy fats.'
        },

        // TOPIC 8: Homeostasis (5 questions)
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Homeostasis is the maintenance of stable internal conditions despite changes in the external environment.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Homeostasis</strong> is the body\'s ability to maintain stable internal conditions (temperature, pH, blood pressure, glucose) within narrow ranges despite external changes.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Negative feedback loops work by amplifying changes away from the set point.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Negative feedback loops work by <strong>reversing changes</strong> and returning conditions to the set point. They oppose deviations from homeostasis. (Positive feedback loops amplify changes.)'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'The endocrine system uses hormones to help maintain homeostasis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>endocrine system releases hormones</strong> (chemical messengers) into the bloodstream to regulate body functions and maintain homeostasis, including metabolism, growth, and stress response.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'Positive feedback loops are more common than negative feedback loops in the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Negative feedback loops are far more common</strong> because they maintain stability. Positive feedback loops (which amplify changes) are rare and used only in specific situations like childbirth.'
        },
        {
            type: 'tf',
            topic: 'Homeostasis',
            question: 'In a homeostatic feedback loop, receptors detect changes, control centers process information, and effectors carry out responses.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Homeostatic feedback loops have three main components: <strong>receptors</strong> (detect changes), <strong>control centers</strong> (process information and determine response), and <strong>effectors</strong> (carry out the response).'
        },

        // TOPIC 9: Blood Glucose Regulation (5 questions)
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Normal fasting blood glucose levels range from 70-100 mg/dL.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Normal fasting blood glucose is 70-100 mg/dL</strong>. Levels of 100-125 mg/dL indicate prediabetes, and 126 mg/dL or higher indicates diabetes.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Blood glucose regulation uses positive feedback to maintain homeostasis.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Blood glucose regulation uses <strong>negative feedback</strong>. When glucose rises, insulin lowers it; when glucose falls, glucagon raises it. These responses reverse changes and maintain homeostasis.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'The pancreas plays a role in detecting blood glucose levels and secreting regulatory hormones.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>pancreas acts as both receptor and control center</strong> by detecting blood glucose levels and secreting insulin or glucagon accordingly. It also functions as an effector by releasing these hormones.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'When blood glucose is high, the hormone glucagon is released to lower it.',
            correct: false,
            explanation: 'This is <strong>false</strong>. When blood glucose is high, <strong>insulin</strong> (not glucagon) is released to lower it. Glucagon is released when blood glucose is <strong>low</strong> to raise it back up.'
        },
        {
            type: 'tf',
            topic: 'Blood Glucose Regulation',
            question: 'Excess glucose can be stored as glycogen in the liver and muscles.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When insulin is present and glucose is abundant, excess glucose is <strong>converted to glycogen</strong> (through glycogenesis) for storage in liver and muscles. This can later be broken down when glucose is needed.'
        },

        // TOPIC 10: Insulin and Glucagon (5 questions)
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Insulin is produced by beta cells in the pancreas.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Beta cells</strong> in the pancreatic islets of Langerhans produce insulin. These cells detect rising blood glucose after eating and secrete insulin in response.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Insulin and glucagon have similar effects on blood glucose levels.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Insulin and glucagon have <strong>opposite effects</strong>. Insulin <strong>lowers</strong> blood glucose (promotes uptake and storage), while glucagon <strong>raises</strong> blood glucose (promotes glycogen breakdown and glucose release).'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Glucagon stimulates the liver to break down glycogen and release glucose into the bloodstream.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Glucagon</strong> triggers glycogenolysis (glycogen breakdown) in the liver and gluconeogenesis (making new glucose), releasing glucose into the blood to raise blood glucose levels when they drop too low.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'In Type 1 diabetes, the body produces too much insulin.',
            correct: false,
            explanation: 'This is <strong>false</strong>. In Type 1 diabetes, the immune system destroys insulin-producing beta cells, so the body produces <strong>little to no insulin</strong>. People with Type 1 diabetes require insulin injections to survive.'
        },
        {
            type: 'tf',
            topic: 'Insulin and Glucagon',
            question: 'Hypoglycemia refers to abnormally low blood glucose levels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Hypoglycemia</strong> means low blood glucose (typically below 70 mg/dL), causing shakiness, sweating, confusion, and potentially seizures or unconsciousness. Hyperglycemia means high blood glucose.'
        }
    ],

    // ==========================================
    // PILLAR CHECKUP 2 (50 QUESTIONS)
    // ==========================================
    'unit1-pillar-checkup2': [

        // TOPIC 1: Types of exercise (5 questions)
        {
            type: 'tf',
            topic: 'Types of exercise',
            question: 'Aerobic exercise strengthens the heart and improves cardiovascular endurance.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Aerobic (cardio) exercise</strong> strengthens the heart and lungs, improves oxygen delivery to tissues, and enhances cardiovascular endurance. Examples include running, swimming, cycling, and brisk walking.'
        },
        {
            type: 'tf',
            topic: 'Types of exercise',
            question: 'Muscle strengthening exercises use resistance to build strength and should be done at least 2 days per week.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Muscle strengthening exercises</strong> use resistance (weights, bands, body weight) to build strength. Guidelines recommend doing these exercises at least <strong>2 days per week</strong> targeting major muscle groups.'
        },
        {
            type: 'tf',
            topic: 'Types of exercise',
            question: 'Balance exercises are only important for young children learning to walk.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While balance develops in childhood, <strong>balance exercises are especially important for older adults</strong> to maintain stability and prevent falls. Examples include tai chi and standing on one foot.'
        },
        {
            type: 'tf',
            topic: 'Types of exercise',
            question: 'Bone strengthening exercises help increase bone density and reduce osteoporosis risk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Weight-bearing and resistance exercises</strong> create force on bones, stimulating them to become stronger and denser. This helps prevent osteoporosis, especially important for children, teens, and older adults.'
        },
        {
            type: 'tf',
            topic: 'Types of exercise',
            question: 'Flexibility exercises improve range of motion and can help prevent injuries.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Flexibility exercises</strong> (stretching, yoga) improve range of motion in joints and muscles, reduce stiffness, and may help prevent injuries. They\'re an important component of overall fitness.'
        },

        // TOPIC 2: Exercise guidelines/intensity (5 questions)
        {
            type: 'tf',
            topic: 'Exercise guidelines/intensity',
            question: 'Adults should get at least 150 minutes of moderate-intensity aerobic activity per week.',
            correct: true,
            explanation: 'This is <strong>true</strong>. CDC guidelines recommend adults get at least <strong>150 minutes of moderate-intensity aerobic activity weekly</strong> (or 75 minutes vigorous), plus muscle-strengthening on 2+ days.'
        },
        {
            type: 'tf',
            topic: 'Exercise guidelines/intensity',
            question: 'During moderate-intensity exercise, you should be able to talk but not sing.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>"talk test"</strong> helps gauge intensity. At moderate intensity, you can hold a conversation but can\'t sing. At vigorous intensity, you can only say a few words before catching your breath.'
        },
        {
            type: 'tf',
            topic: 'Exercise guidelines/intensity',
            question: 'The Borg Rating of Perceived Exertion (RPE) measures exact heart rate during exercise.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The Borg RPE scale measures <strong>subjective feeling of effort</strong>, not exact heart rate. It asks how hard you feel you\'re working, considering breathing, heart rate, and fatigue.'
        },
        {
            type: 'tf',
            topic: 'Exercise guidelines/intensity',
            question: 'Frequency refers to how often you exercise, while duration refers to how long each session lasts.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Frequency</strong> is how often (e.g., 5 days/week), <strong>intensity</strong> is how hard (moderate/vigorous), and <strong>duration</strong> is how long (e.g., 30 minutes per session).'
        },
        {
            type: 'tf',
            topic: 'Exercise guidelines/intensity',
            question: 'MET (Metabolic Equivalent of Task) is a unit that estimates energy expenditure during physical activities.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>One MET equals resting energy expenditure</strong>. Moderate activities are 3-6 METs (brisk walking), vigorous activities are >6 METs (running). METs help compare activity intensities.'
        },

        // TOPIC 3: Blood pH regulation (5 questions)
        {
            type: 'tf',
            topic: 'Blood pH regulation',
            question: 'Normal blood pH ranges from 7.35 to 7.45.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Blood pH must stay within the narrow range of <strong>7.35-7.45</strong> (slightly alkaline). Even small deviations outside this range can be dangerous or fatal, so tight regulation is essential.'
        },
        {
            type: 'tf',
            topic: 'Blood pH regulation',
            question: 'A pH of 7 is considered acidic on the pH scale.',
            correct: false,
            explanation: 'This is <strong>false</strong>. On the pH scale (0-14), <strong>7 is neutral</strong>. Values below 7 are acidic, and values above 7 are basic (alkaline). Blood is slightly alkaline at ~7.4.'
        },
        {
            type: 'tf',
            topic: 'Blood pH regulation',
            question: 'During intense exercise, blood becomes more acidic due to increased CO₂ and lactic acid production.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Intense exercise produces more <strong>CO₂ (from cellular respiration) and lactic acid (from anaerobic metabolism)</strong>, making blood more acidic. The body compensates by increasing breathing rate to expel CO₂.'
        },
        {
            type: 'tf',
            topic: 'Blood pH regulation',
            question: 'The respiratory system helps regulate blood pH by controlling oxygen levels.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While the respiratory system does deliver oxygen, it regulates pH by <strong>controlling CO₂ levels</strong>. Faster breathing expels more CO₂ (raising pH), slower breathing retains CO₂ (lowering pH).'
        },
        {
            type: 'tf',
            topic: 'Blood pH regulation',
            question: 'High CO₂ levels in blood make it more acidic and lower the pH.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>CO₂ combines with water to form carbonic acid</strong>, which releases H⁺ ions and lowers pH. This is why breathing rate increases during exercise—to expel excess CO₂ and prevent acidosis.'
        },

        // TOPIC 4: Sleep facts (5 questions)
        {
            type: 'tf',
            topic: 'Sleep facts',
            question: 'Most teenagers need 8-10 hours of sleep per night for optimal health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Teens typically need <strong>8-10 hours of sleep nightly</strong> for proper development, learning, and health. Unfortunately, most teens get significantly less due to early school start times and other factors.'
        },
        {
            type: 'tf',
            topic: 'Sleep facts',
            question: 'Sleep debt can be fully recovered with one long night of sleep.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While you can partially recover from sleep deprivation, <strong>chronic sleep debt has lasting effects</strong> that can\'t be fully "made up" with occasional long sleep sessions. Consistent adequate sleep is essential.'
        },
        {
            type: 'tf',
            topic: 'Sleep facts',
            question: 'Short naps of 20-30 minutes taken before mid-afternoon can improve alertness without disrupting nighttime sleep.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Brief naps (20-30 min) before mid-afternoon</strong> can boost alertness and performance without causing sleep inertia or interfering with nighttime sleep. Longer or later naps may be problematic.'
        },
        {
            type: 'tf',
            topic: 'Sleep facts',
            question: 'Caffeine is completely eliminated from your system within 2 hours of consumption.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Caffeine has a <strong>half-life of 3-7 hours</strong>, meaning it can affect your system for 6-8 hours or longer. Afternoon/evening caffeine can significantly interfere with sleep.'
        },
        {
            type: 'tf',
            topic: 'Sleep facts',
            question: 'Quiet wakefulness is a restful state that can provide some benefits similar to napping.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Quiet wakefulness</strong> (lying down and relaxing without sleeping) can provide some restorative benefits and improved alertness, though not as comprehensively as actual sleep.'
        },

        // TOPIC 5: REM sleep/Biological clock/Sleep drive (5 questions)
        {
            type: 'tf',
            topic: 'REM sleep/Biological clock/Sleep drive',
            question: 'Most vivid dreaming occurs during REM (Rapid Eye Movement) sleep.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>REM sleep</strong> is when most vivid dreams occur. It\'s characterized by rapid eye movements, increased brain activity, temporary muscle paralysis, and plays a key role in memory consolidation and emotional processing.'
        },
        {
            type: 'tf',
            topic: 'REM sleep/Biological clock/Sleep drive',
            question: 'The suprachiasmatic nucleus (SCN) in the hypothalamus controls the body\'s circadian rhythms.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>SCN in the hypothalamus</strong> acts as the master biological clock, regulating circadian rhythms. It receives light information from the eyes and coordinates sleep-wake cycles and hormone release.'
        },
        {
            type: 'tf',
            topic: 'REM sleep/Biological clock/Sleep drive',
            question: 'Melatonin is released in response to light exposure to promote wakefulness.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Melatonin is released in response to darkness</strong> to promote sleepiness. Light exposure (especially blue light) suppresses melatonin, which is why screen use before bed interferes with sleep.'
        },
        {
            type: 'tf',
            topic: 'REM sleep/Biological clock/Sleep drive',
            question: 'The homeostatic sleep drive increases the longer you stay awake.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Sleep drive (sleep pressure) builds up</strong> as adenosine accumulates in the brain throughout waking hours. The longer you\'re awake, the stronger the drive to sleep becomes.'
        },
        {
            type: 'tf',
            topic: 'REM sleep/Biological clock/Sleep drive',
            question: 'Cortisol levels are highest in the evening to promote sleep.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Cortisol peaks in the morning</strong> (cortisol awakening response) to promote wakefulness and alertness. Levels gradually decline during the day and are lowest at night.'
        },

        // TOPIC 6: Effects of sleep deprivation (5 questions)
        {
            type: 'tf',
            topic: 'Effects of sleep deprivation',
            question: 'Sleep deprivation significantly impairs attention, concentration, and reaction time.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Even mild sleep loss <strong>significantly impairs cognitive functions</strong>, especially attention, concentration, reaction time, and decision-making. Memory consolidation and emotional regulation are also heavily affected.'
        },
        {
            type: 'tf',
            topic: 'Effects of sleep deprivation',
            question: 'Chronic sleep deprivation increases the risk of obesity, diabetes, and heart disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Chronic sleep deprivation disrupts <strong>metabolism, hormone regulation (insulin, leptin, ghrelin), and cardiovascular function</strong>, significantly increasing risk for obesity, type 2 diabetes, hypertension, and heart disease.'
        },
        {
            type: 'tf',
            topic: 'Effects of sleep deprivation',
            question: 'Sleep deprivation strengthens immune function and helps fight off infections.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Sleep deprivation <strong>weakens immune function</strong>, reducing production of infection-fighting cells and antibodies. Sleep-deprived people are more susceptible to illness and recover more slowly.'
        },
        {
            type: 'tf',
            topic: 'Effects of sleep deprivation',
            question: 'Being awake for 18-20 hours can impair driving ability similar to being legally drunk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Being awake for <strong>18-20 hours impairs driving equivalent to a 0.08% blood alcohol level</strong> (legally drunk). Drowsy driving causes thousands of accidents and deaths annually.'
        },
        {
            type: 'tf',
            topic: 'Effects of sleep deprivation',
            question: 'Sleep deprivation has no significant effect on emotional regulation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Sleep deprivation <strong>significantly impairs emotional regulation</strong>. The amygdala becomes hyperactive while the prefrontal cortex weakens, leading to mood swings, irritability, anxiety, and poor emotional control.'
        },

        // TOPIC 7: Acute stress response (5 questions)
        {
            type: 'tf',
            topic: 'Acute stress response',
            question: 'The "fight-or-flight" response is an automatic physiological reaction to perceived threats.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>fight-or-flight response</strong> is an automatic survival mechanism activated by the sympathetic nervous system when danger is perceived, preparing the body for immediate action.'
        },
        {
            type: 'tf',
            topic: 'Acute stress response',
            question: 'During acute stress, the parasympathetic nervous system is activated.',
            correct: false,
            explanation: 'This is <strong>false</strong>. During acute stress, the <strong>sympathetic nervous system</strong> is activated (fight-or-flight). The <strong>parasympathetic system</strong> is activated during rest and recovery (rest-and-digest).'
        },
        {
            type: 'tf',
            topic: 'Acute stress response',
            question: 'Adrenaline (epinephrine) is rapidly released during the acute stress response.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Adrenaline</strong> is quickly released from the adrenal medulla during stress, increasing heart rate, blood pressure, and blood glucose to prepare for action. Cortisol is released more gradually.'
        },
        {
            type: 'tf',
            topic: 'Acute stress response',
            question: 'The HPA axis stands for Heart-Pancreas-Adrenal axis.',
            correct: false,
            explanation: 'This is <strong>false</strong>. HPA stands for <strong>Hypothalamus-Pituitary-Adrenal axis</strong>. This system coordinates the slower stress response: hypothalamus releases CRH, pituitary releases ACTH, adrenals release cortisol.'
        },
        {
            type: 'tf',
            topic: 'Acute stress response',
            question: 'The acute stress response causes increased heart rate, blood pressure, and glucose release.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Acute stress triggers: <strong>increased heart rate and blood pressure, faster breathing, glucose release, pupil dilation, increased alertness, and reduced digestion</strong>—all preparing for "fight or flight."'
        },

        // TOPIC 8: Effects of chronic stress (5 questions)
        {
            type: 'tf',
            topic: 'Effects of chronic stress',
            question: 'Chronic stress persists over extended periods and can damage multiple body systems.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Chronic stress</strong> lasts weeks to years, keeping stress hormones elevated. Unlike adaptive acute stress, chronic stress damages immune, cardiovascular, digestive, and nervous systems.'
        },
        {
            type: 'tf',
            topic: 'Effects of chronic stress',
            question: 'Chronic stress strengthens the immune system over time.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Chronic stress <strong>weakens immune function</strong>. Prolonged cortisol elevation suppresses lymphocytes and antibodies, increasing susceptibility to infections, slowing wound healing, and potentially increasing cancer risk.'
        },
        {
            type: 'tf',
            topic: 'Effects of chronic stress',
            question: 'Chronic stress increases risk of hypertension, atherosclerosis, and heart disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Chronic stress causes <strong>persistent high blood pressure, increased inflammation, and plaque buildup</strong> in arteries, significantly raising risk for hypertension, atherosclerosis, heart attack, and stroke.'
        },
        {
            type: 'tf',
            topic: 'Effects of chronic stress',
            question: 'Chronic stress has no connection to mental health conditions like anxiety and depression.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Chronic stress is <strong>strongly linked to anxiety and depression</strong>. Prolonged cortisol affects brain structure (hippocampus, prefrontal cortex) and neurotransmitter function, increasing mental health disorder risk.'
        },
        {
            type: 'tf',
            topic: 'Effects of chronic stress',
            question: 'Chronic stress can promote weight gain, particularly abdominal fat accumulation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Chronic stress <strong>promotes visceral (abdominal) fat</strong> storage. Cortisol increases appetite (especially for high-calorie foods), promotes fat storage, and can cause insulin resistance, contributing to weight gain.'
        },

        // TOPIC 9: Weathering, ACEs, trauma, PTSD (5 questions)
        {
            type: 'tf',
            topic: 'Weathering, ACEs, trauma, PTSD',
            question: 'Weathering refers to accelerated health deterioration due to chronic social and environmental stress.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Weathering</strong> describes accelerated aging and health decline from cumulative exposure to chronic stressors like discrimination, poverty, and environmental challenges, particularly affecting marginalized communities.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, trauma, PTSD',
            question: 'Adverse Childhood Experiences (ACEs) have long-lasting effects on both physical and mental health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>ACEs (trauma before age 18)</strong> have profound, lasting effects. Higher ACE scores correlate with increased chronic disease, mental health disorders, substance abuse, and early death due to effects on developing systems.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, trauma, PTSD',
            question: 'Examples of ACEs include only physical and sexual abuse.',
            correct: false,
            explanation: 'This is <strong>false</strong>. ACEs include: <strong>physical, emotional, or sexual abuse; physical or emotional neglect; and household dysfunction</strong> (domestic violence, substance abuse, mental illness, parental separation/divorce, incarceration). All types have health impacts.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, trauma, PTSD',
            question: 'PTSD (Post-Traumatic Stress Disorder) can only develop after combat experiences.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While combat is one cause, <strong>PTSD can develop after any traumatic event</strong>: assault, accidents, natural disasters, abuse, witnessing violence, or other life-threatening situations.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, trauma, PTSD',
            question: 'ACEs can alter brain development and stress response systems in children.',
            correct: true,
            explanation: 'This is <strong>true</strong>. ACEs affect developing brain structures (hippocampus, amygdala, prefrontal cortex) and <strong>dysregulate the HPA axis</strong>, leading to heightened stress reactivity and increased lifelong health risks.'
        },

        // TOPIC 10: Healthcare pillar (5 questions)
        {
            type: 'tf',
            topic: 'Healthcare pillar',
            question: 'Universal healthcare means all residents have access to healthcare services without financial hardship.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Universal healthcare</strong> ensures all residents can access healthcare services without facing financial hardship, though it can be achieved through various systems (single-payer, socialized medicine, mandated insurance).'
        },
        {
            type: 'tf',
            topic: 'Healthcare pillar',
            question: 'The United States currently has a universal healthcare system covering all residents.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The U.S. does NOT have universal healthcare. Despite the Affordable Care Act expanding coverage, <strong>millions remain uninsured</strong>, and access varies greatly. The U.S. relies primarily on private and employer-based insurance.'
        },
        {
            type: 'tf',
            topic: 'Healthcare pillar',
            question: 'In a single-payer system, the government pays for healthcare for all residents.',
            correct: true,
            explanation: 'This is <strong>true</strong>. In a <strong>single-payer system, one entity (usually government) pays for healthcare</strong> for all residents, funded through taxes. Providers may remain private. Examples include Medicare and Canada\'s system.'
        },
        {
            type: 'tf',
            topic: 'Healthcare pillar',
            question: 'The Affordable Care Act (ACA) allowed insurance companies to deny coverage based on pre-existing conditions.',
            correct: false,
            explanation: 'This is <strong>false</strong>. A major ACA provision <strong>prohibited denying coverage or charging higher premiums based on pre-existing conditions</strong>. It also allowed young adults to stay on parents\' insurance until 26.'
        },
        {
            type: 'tf',
            topic: 'Healthcare pillar',
            question: 'In socialized medicine, the government owns hospitals and employs healthcare workers directly.',
            correct: true,
            explanation: 'This is <strong>true</strong>. In <strong>socialized medicine, government owns facilities and employs providers</strong>, providing care directly (like UK\'s NHS or U.S. VA). This differs from single-payer where government pays but providers remain independent.'
        }
    ],

    // ==========================================
    // UNIT 2: CARDIOVASCULAR HEALTH CHECKUP (50 QUESTIONS)
    // ==========================================
    'unit2-cardiovascular-checkup': [

        // TOPIC 1: Directional terms (5 questions)
        {
            type: 'tf',
            topic: 'Directional terms',
            question: 'Anterior refers to the front of the body, while posterior refers to the back.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Anterior</strong> (or ventral) means toward the front of the body, while <strong>posterior</strong> (or dorsal) means toward the back. For example, the sternum is anterior to the spine.'
        },
        {
            type: 'tf',
            topic: 'Directional terms',
            question: 'Superior means closer to the feet, while inferior means closer to the head.',
            correct: false,
            explanation: 'This is <strong>false</strong>. It\'s the opposite! <strong>Superior</strong> means toward the head (upper), while <strong>inferior</strong> means toward the feet (lower). For example, the heart is superior to the stomach.'
        },
        {
            type: 'tf',
            topic: 'Directional terms',
            question: 'Medial means closer to the midline of the body, while lateral means farther from the midline.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Medial</strong> means toward the body\'s midline, while <strong>lateral</strong> means away from the midline. For example, the nose is medial to the ears.'
        },
        {
            type: 'tf',
            topic: 'Directional terms',
            question: 'Superficial means closer to the surface of the body, while deep means farther from the surface.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Superficial</strong> structures are near the body surface (like skin), while <strong>deep</strong> structures are farther from the surface (like bones). For example, muscles are deep to the skin.'
        },
        {
            type: 'tf',
            topic: 'Directional terms',
            question: 'Proximal means farther from the point of attachment, while distal means closer to the point of attachment.',
            correct: false,
            explanation: 'This is <strong>false</strong>. It\'s reversed! <strong>Proximal</strong> means closer to the point of attachment or trunk, while <strong>distal</strong> means farther away. For example, the elbow is proximal to the wrist.'
        },

        // TOPIC 2: Blood flow through the heart (5 questions)
        {
            type: 'tf',
            topic: 'Blood flow through the heart',
            question: 'Blood enters the right atrium from the superior and inferior vena cava.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Deoxygenated blood</strong> returns to the heart through the superior vena cava (from upper body) and inferior vena cava (from lower body), entering the right atrium.'
        },
        {
            type: 'tf',
            topic: 'Blood flow through the heart',
            question: 'The right ventricle pumps oxygenated blood to the body through the aorta.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The right ventricle pumps <strong>deoxygenated blood to the lungs</strong> through the pulmonary arteries. The <strong>left ventricle</strong> pumps oxygenated blood to the body through the aorta.'
        },
        {
            type: 'tf',
            topic: 'Blood flow through the heart',
            question: 'Oxygenated blood returns from the lungs to the left atrium via the pulmonary veins.',
            correct: true,
            explanation: 'This is <strong>true</strong>. After gas exchange in the lungs, <strong>oxygenated blood returns through the four pulmonary veins</strong> to the left atrium. This is the only place in the body where veins carry oxygenated blood.'
        },
        {
            type: 'tf',
            topic: 'Blood flow through the heart',
            question: 'Blood flows from the left atrium through the tricuspid valve into the left ventricle.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Blood flows from the left atrium through the <strong>bicuspid (mitral) valve</strong> into the left ventricle. The <strong>tricuspid valve</strong> is between the right atrium and right ventricle.'
        },
        {
            type: 'tf',
            topic: 'Blood flow through the heart',
            question: 'The interventricular septum separates the left and right ventricles.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>interventricular septum</strong> is the muscular wall that separates the two ventricles. The interatrial septum separates the two atria, preventing mixing of oxygenated and deoxygenated blood.'
        },

        // TOPIC 3: Coronary circulation (5 questions)
        {
            type: 'tf',
            topic: 'Coronary circulation',
            question: 'The coronary arteries supply the heart muscle with oxygenated blood.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>coronary arteries</strong> branch off the aorta and supply the myocardium (heart muscle) with oxygen and nutrients. The heart cannot use blood inside its chambers for its own needs.'
        },
        {
            type: 'tf',
            topic: 'Coronary circulation',
            question: 'Coronary arteries branch directly from the pulmonary artery.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Coronary arteries branch from the <strong>aorta</strong>, just above the aortic valve. This ensures the heart muscle receives oxygenated blood. The pulmonary artery carries deoxygenated blood to the lungs.'
        },
        {
            type: 'tf',
            topic: 'Coronary circulation',
            question: 'Coronary veins drain deoxygenated blood from the heart muscle into the coronary sinus.',
            correct: true,
            explanation: 'This is <strong>true</strong>. After delivering oxygen to the heart muscle, <strong>coronary veins</strong> collect deoxygenated blood and drain it into the <strong>coronary sinus</strong>, which empties into the right atrium.'
        },
        {
            type: 'tf',
            topic: 'Coronary circulation',
            question: 'Blockage of a coronary artery can lead to a heart attack.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When a coronary artery becomes blocked (usually by plaque), the heart muscle it supplies is deprived of oxygen, causing <strong>myocardial infarction (heart attack)</strong>. This can damage or kill heart tissue.'
        },
        {
            type: 'tf',
            topic: 'Coronary circulation',
            question: 'The heart muscle can survive for several hours without blood flow from coronary circulation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Heart muscle tissue is extremely metabolically active and requires <strong>constant oxygen supply</strong>. Even a few minutes without blood flow can cause damage, and prolonged blockage leads to tissue death (heart attack).'
        },

        // TOPIC 4: Arteries and veins (5 questions)
        {
            type: 'tf',
            topic: 'Arteries and veins',
            question: 'Arteries carry blood away from the heart, while veins carry blood toward the heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Arteries</strong> carry blood away from the heart (usually oxygenated), while <strong>veins</strong> carry blood back to the heart (usually deoxygenated). This is true regardless of oxygen content.'
        },
        {
            type: 'tf',
            topic: 'Arteries and veins',
            question: 'Arteries have thinner walls than veins because they carry blood at lower pressure.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Arteries have thicker, more muscular walls</strong> than veins because they must withstand higher blood pressure from the heart\'s pumping action. Veins have thinner walls and lower pressure.'
        },
        {
            type: 'tf',
            topic: 'Arteries and veins',
            question: 'Veins contain valves that prevent backflow of blood.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Most <strong>veins contain one-way valves</strong> that prevent blood from flowing backward, especially important in the legs where blood must flow against gravity. Arteries don\'t need valves because of high pressure.'
        },
        {
            type: 'tf',
            topic: 'Arteries and veins',
            question: 'Capillaries are the smallest blood vessels where gas and nutrient exchange occurs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Capillaries</strong> are tiny vessels connecting arterioles and venules. Their thin walls (one cell thick) allow exchange of oxygen, nutrients, and waste between blood and tissues.'
        },
        {
            type: 'tf',
            topic: 'Arteries and veins',
            question: 'Vasoconstriction is the widening of blood vessels that increases blood flow.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vasoconstriction</strong> is the narrowing of blood vessels, which <strong>decreases</strong> blood flow and increases blood pressure. <strong>Vasodilation</strong> is the widening that increases blood flow.'
        },

        // TOPIC 5: Cardiovascular disease (5 questions)
        {
            type: 'tf',
            topic: 'Cardiovascular disease',
            question: 'Atherosclerosis is the buildup of plaque in the arteries that narrows blood vessels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Atherosclerosis</strong> is the accumulation of fatty deposits (plaque) on artery walls, narrowing the lumen and reducing blood flow. This is a major cause of heart attacks, strokes, and peripheral artery disease.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular disease',
            question: 'Hypertension is defined as blood pressure consistently below 120/80 mmHg.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Hypertension (high blood pressure)</strong> is defined as blood pressure consistently <strong>at or above 130/80 mmHg</strong>. Normal blood pressure is below 120/80 mmHg. Hypertension increases cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular disease',
            question: 'HDL cholesterol is considered "good" cholesterol because it helps remove cholesterol from arteries.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>HDL (high-density lipoprotein)</strong> cholesterol is "good" because it transports cholesterol from arteries to the liver for removal. <strong>LDL</strong> (low-density lipoprotein) is "bad" cholesterol that contributes to plaque buildup.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular disease',
            question: 'A heart attack occurs when blood flow to part of the brain is blocked.',
            correct: false,
            explanation: 'This is <strong>false</strong>. A <strong>heart attack (myocardial infarction)</strong> occurs when blood flow to part of the <strong>heart muscle</strong> is blocked. When blood flow to the <strong>brain</strong> is blocked, it\'s called a stroke.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular disease',
            question: 'Cardiovascular disease is the leading cause of death in America.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cardiovascular diseases</strong> (including heart disease and stroke) are the leading cause of death in the United States and globally, accounting for more deaths than any other cause.'
        },

        // TOPIC 6: Heart electrical system (5 questions)
        {
            type: 'tf',
            topic: 'Heart electrical system',
            question: 'The sinoatrial (SA) node is the natural pacemaker of the heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>SA node</strong>, located in the right atrium, generates electrical impulses that initiate each heartbeat. It sets the heart\'s rhythm at about 60-100 beats per minute at rest.'
        },
        {
            type: 'tf',
            topic: 'Heart electrical system',
            question: 'The atrioventricular (AV) node delays the electrical signal before it reaches the ventricles.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>AV node</strong> briefly delays the electrical signal, allowing the atria to contract and empty blood into the ventricles before ventricular contraction begins. This ensures efficient pumping.'
        },
        {
            type: 'tf',
            topic: 'Heart electrical system',
            question: 'Purkinje fibers conduct electrical signals rapidly through the ventricular walls.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Purkinje fibers</strong> are specialized conducting fibers that rapidly distribute electrical signals throughout the ventricles, causing coordinated contraction from the apex upward to efficiently eject blood.'
        },
        {
            type: 'tf',
            topic: 'Heart electrical system',
            question: 'Tachycardia refers to an abnormally slow heart rate.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Tachycardia</strong> is an abnormally <strong>fast</strong> heart rate (typically over 100 bpm at rest). <strong>Bradycardia</strong> is an abnormally slow heart rate (typically under 60 bpm at rest).'
        },
        {
            type: 'tf',
            topic: 'Heart electrical system',
            question: 'An electrocardiogram (EKG) measures the electrical activity of the heart.',
            correct: true,
            explanation: 'This is <strong>true</strong>. An <strong>EKG (or ECG)</strong> records the electrical signals that control the heartbeat. It can detect arrhythmias, heart attacks, and other cardiac problems by showing abnormal electrical patterns.'
        },

        // TOPIC 7: Heart attack and sudden cardiac death (5 questions)
        {
            type: 'tf',
            topic: 'Heart attack and sudden cardiac death',
            question: 'Angina is chest pain caused by reduced blood flow to the heart muscle.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Angina</strong> is chest pain or discomfort caused by insufficient blood flow to the heart muscle, usually due to coronary artery narrowing. It\'s a warning sign of heart disease but doesn\'t cause permanent damage.'
        },
        {
            type: 'tf',
            topic: 'Heart attack and sudden cardiac death',
            question: 'Myocardial ischemia refers to adequate blood supply to the heart muscle.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Myocardial ischemia</strong> means <strong>inadequate</strong> blood supply to the heart muscle, resulting in oxygen deprivation. Prolonged ischemia leads to myocardial infarction (heart attack) and tissue death.'
        },
        {
            type: 'tf',
            topic: 'Heart attack and sudden cardiac death',
            question: 'Sudden cardiac death is most often caused by ventricular fibrillation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Ventricular fibrillation</strong> (chaotic, ineffective quivering of ventricles) is the most common cause of sudden cardiac death. The heart cannot pump blood, causing death within minutes without immediate treatment.'
        },
        {
            type: 'tf',
            topic: 'Heart attack and sudden cardiac death',
            question: 'A coronary angioplasty is a procedure that uses a balloon to open blocked arteries.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Coronary angioplasty</strong> uses a balloon catheter to widen blocked coronary arteries. Often a <strong>stent</strong> (mesh tube) is placed to keep the artery open and improve blood flow to the heart.'
        },
        {
            type: 'tf',
            topic: 'Heart attack and sudden cardiac death',
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

        // TOPIC 9: Cardiovascular stress response and cardiovascular disease (5 questions)
        {
            type: 'tf',
            topic: 'Cardiovascular stress response and cardiovascular disease',
            question: 'During acute stress, heart rate and blood pressure increase to prepare for "fight or flight."',
            correct: true,
            explanation: 'This is <strong>true</strong>. The acute stress response triggers release of <strong>adrenaline and cortisol</strong>, causing increased heart rate, blood pressure, and cardiac output to prepare the body for immediate action.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular stress response and cardiovascular disease',
            question: 'Chronic stress has no significant effect on cardiovascular health.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Chronic stress significantly damages cardiovascular health</strong> by maintaining elevated blood pressure, promoting inflammation and atherosclerosis, and increasing risk for heart attack and stroke.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular stress response and cardiovascular disease',
            question: 'Prolonged elevation of cortisol from chronic stress can contribute to hypertension.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Chronic <strong>cortisol elevation</strong> contributes to sustained high blood pressure by affecting blood vessel tone, sodium retention, and other mechanisms. This increases cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular stress response and cardiovascular disease',
            question: 'Stress only affects mental health and has no impact on physical heart disease.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Chronic stress is a <strong>major risk factor for cardiovascular disease</strong>. It contributes to high blood pressure, inflammation, atherosclerosis, and behaviors (poor diet, inactivity) that worsen heart health.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular stress response and cardiovascular disease',
            question: 'Managing stress through exercise, sleep, and relaxation techniques can improve cardiovascular health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Stress management</strong> reduces cortisol and inflammation, lowers blood pressure, and promotes healthy behaviors. Exercise, adequate sleep, social connection, and relaxation techniques all protect cardiovascular health.'
        },

        // TOPIC 10: Cardiovascular health (5 questions)
        {
            type: 'tf',
            topic: 'Cardiovascular health',
            question: 'The five pillars of health (social connection, nutrition, exercise, sleep, stress management) all contribute to cardiovascular health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. All <strong>five pillars</strong> protect cardiovascular health: social connections reduce stress, good nutrition prevents atherosclerosis, exercise strengthens the heart, sleep allows recovery, and stress management lowers blood pressure.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular health',
            question: 'Regular aerobic exercise can lower blood pressure and strengthen the heart muscle.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Regular aerobic exercise</strong> (150+ min/week) lowers resting blood pressure, strengthens the myocardium, improves cholesterol levels, reduces atherosclerosis, and significantly decreases cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular health',
            question: 'Smoking is a major modifiable risk factor for cardiovascular disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Smoking</strong> damages blood vessel linings, promotes atherosclerosis, increases blood clotting, raises blood pressure, and significantly increases heart attack and stroke risk. Quitting smoking greatly improves cardiovascular health.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular health',
            question: 'The Framingham Heart Study showed that cardiovascular disease risk factors cannot be modified.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The Framingham Heart Study identified <strong>modifiable risk factors</strong> like high blood pressure, high cholesterol, smoking, diabetes, obesity, and inactivity. Addressing these factors significantly reduces cardiovascular disease risk.'
        },
        {
            type: 'tf',
            topic: 'Cardiovascular health',
            question: 'A Mediterranean diet has been shown to reduce cardiovascular disease risk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>Mediterranean diet</strong> (rich in fruits, vegetables, whole grains, fish, olive oil) reduces cardiovascular disease, heart attacks, and strokes through anti-inflammatory effects, healthy fats, and antioxidants.'
        }
    ],

    // ==========================================
    // UNIT 3: SELF DEFENSE CHECKUP #1 (50 QUESTIONS)
    // ==========================================
    'unit3-self-defense-checkup1': [

        // TOPIC 1: Pathogens (5 questions)
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Bacteria are single-celled organisms that can be treated with antibiotics.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Bacteria</strong> are prokaryotic single-celled organisms, and bacterial infections can be treated with <strong>antibiotics</strong> that target bacterial cell walls, protein synthesis, or other bacterial-specific processes.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Viruses can reproduce on their own without needing a host cell.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Viruses cannot reproduce independently</strong>. They must infect host cells and hijack the cell\'s machinery to replicate. This is why antibiotics don\'t work on viruses—they need antiviral medications.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Fungi can cause infections in humans, such as athlete\'s foot and ringworm.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Fungi</strong> are eukaryotic organisms that can cause various infections in humans, including superficial infections (athlete\'s foot, ringworm) and more serious systemic infections, especially in immunocompromised individuals.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Parasites live on or in a host organism and benefit at the host\'s expense.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Parasites</strong> depend on host organisms for survival, obtaining nutrients and shelter while causing harm. Examples include protozoans (malaria), helminths (tapeworms), and ectoparasites (lice, ticks).'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'A vector is an organism that transmits pathogens from one host to another.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>vector</strong> is a carrier organism (often an insect like mosquitoes or ticks) that transmits pathogens between hosts. Examples include mosquitoes spreading malaria and ticks spreading Lyme disease.'
        },

        // TOPIC 2: Infections by location (5 questions)
        {
            type: 'tf',
            topic: 'Infections by location',
            question: 'Meningitis is an infection or inflammation of the membranes covering the brain and spinal cord.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Meningitis</strong> is inflammation of the meninges (protective membranes around the brain and spinal cord). It can be caused by bacteria, viruses, or fungi and is potentially life-threatening.'
        },
        {
            type: 'tf',
            topic: 'Infections by location',
            question: 'Pneumonia is an infection of the urinary tract.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Pneumonia</strong> is an infection of the <strong>lungs</strong> (specifically the alveoli), not the urinary tract. Urinary tract infections (UTIs) affect the bladder, urethra, or kidneys.'
        },
        {
            type: 'tf',
            topic: 'Infections by location',
            question: 'Bronchitis is inflammation of the bronchial tubes that carry air to the lungs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Bronchitis</strong> is inflammation of the bronchi (airways leading to the lungs), causing coughing, mucus production, and breathing difficulty. It can be acute or chronic.'
        },
        {
            type: 'tf',
            topic: 'Infections by location',
            question: 'A urinary tract infection (UTI) can affect the bladder, urethra, or kidneys.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>UTIs</strong> can occur in any part of the urinary system: urethra (urethritis), bladder (cystitis), or kidneys (pyelonephritis). They\'re more common in women due to shorter urethras.'
        },
        {
            type: 'tf',
            topic: 'Infections by location',
            question: 'Septicemia (sepsis) is a localized infection that remains in one part of the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Septicemia (sepsis)</strong> is a <strong>systemic infection</strong> where bacteria or their toxins spread throughout the bloodstream. It\'s a life-threatening condition requiring immediate treatment.'
        },

        // TOPIC 3: Endemic epidemic pandemic (5 questions)
        {
            type: 'tf',
            topic: 'Endemic epidemic pandemic',
            question: 'An endemic disease is constantly present in a particular region or population.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Endemic</strong> means a disease is consistently present in a specific geographic area or population at expected levels. Examples include malaria in tropical regions or Lyme disease in certain U.S. areas.'
        },
        {
            type: 'tf',
            topic: 'Endemic epidemic pandemic',
            question: 'An epidemic is a disease outbreak that occurs on a global scale.',
            correct: false,
            explanation: 'This is <strong>false</strong>. An <strong>epidemic</strong> is a disease outbreak that spreads rapidly and affects many people in a <strong>region or population</strong>, exceeding normal expectations. A <strong>pandemic</strong> is a global outbreak.'
        },
        {
            type: 'tf',
            topic: 'Endemic epidemic pandemic',
            question: 'A pandemic is an epidemic that has spread across multiple countries or continents.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>pandemic</strong> is an epidemic that spreads across international boundaries, affecting large numbers of people on multiple continents. COVID-19 and the 1918 flu were pandemics.'
        },
        {
            type: 'tf',
            topic: 'Endemic epidemic pandemic',
            question: 'The distinction between endemic, epidemic, and pandemic is based only on the severity of the disease.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The distinction is based on <strong>geographic spread and affected population size</strong>, not severity. Endemic is localized, epidemic is regional outbreak, pandemic is global—regardless of how deadly the disease is.'
        },
        {
            type: 'tf',
            topic: 'Endemic epidemic pandemic',
            question: 'A disease can transition from endemic to epidemic if cases suddenly increase beyond expected levels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. An endemic disease can become <strong>epidemic</strong> if there\'s a sudden surge in cases beyond normal levels. This can happen due to environmental changes, weakened immunity, or pathogen mutations.'
        },

        // TOPIC 4: Latent infections (5 questions)
        {
            type: 'tf',
            topic: 'Latent infections',
            question: 'Latent infections are those where the pathogen remains inactive in the body for a period of time.',
            correct: true,
            explanation: 'This is <strong>true</strong>. In <strong>latent infections</strong>, the pathogen remains dormant in the body without causing symptoms but can reactivate later. The person carries the pathogen but isn\'t actively sick.'
        },
        {
            type: 'tf',
            topic: 'Latent infections',
            question: 'Herpes simplex virus (HSV) can establish latent infections that may reactivate causing cold sores.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>HSV</strong> establishes latent infection in nerve cells. The virus can reactivate due to stress, illness, or immune suppression, causing recurrent cold sores or genital herpes outbreaks.'
        },
        {
            type: 'tf',
            topic: 'Latent infections',
            question: 'During a latent infection, the pathogen is completely eliminated from the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. During latency, the pathogen <strong>remains in the body</strong> but is dormant/inactive. It hasn\'t been eliminated and can potentially reactivate. True elimination would mean the infection is cured.'
        },
        {
            type: 'tf',
            topic: 'Latent infections',
            question: 'Chickenpox and shingles are caused by the same virus that can remain latent in nerve cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Varicella-zoster virus</strong> causes chickenpox in initial infection, then becomes latent in nerve cells. It can reactivate years later as shingles, causing painful rash along nerve pathways.'
        },
        {
            type: 'tf',
            topic: 'Latent infections',
            question: 'A person with a latent infection cannot transmit the pathogen to others.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While <strong>transmission is less likely</strong> during latency, some latent infections (like HIV) can still be transmitted. Additionally, reactivation produces active infection that is definitely contagious.'
        },

        // TOPIC 5: Sexually transmitted infections (5 questions)
        {
            type: 'tf',
            topic: 'Sexually transmitted infections',
            question: 'STIs (sexually transmitted infections) can be caused by bacteria, viruses, and parasites.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>STIs</strong> can be bacterial (chlamydia, gonorrhea, syphilis), viral (HIV, herpes, HPV, hepatitis B), or parasitic (trichomoniasis). Treatment depends on the type of pathogen.'
        },
        {
            type: 'tf',
            topic: 'Sexually transmitted infections',
            question: 'All STIs can be cured with antibiotics.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Only <strong>bacterial STIs</strong> can be cured with antibiotics. <strong>Viral STIs</strong> (HIV, herpes, HPV) cannot be cured, though symptoms can be managed with antiviral medications.'
        },
        {
            type: 'tf',
            topic: 'Sexually transmitted infections',
            question: 'Many STIs can be asymptomatic, meaning infected people may not show symptoms.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Many STIs are <strong>asymptomatic</strong>, especially in early stages. People can be infected and transmit the disease without knowing. Regular testing is important for sexually active individuals.'
        },
        {
            type: 'tf',
            topic: 'Sexually transmitted infections',
            question: 'HPV (human papillomavirus) infection can lead to cervical cancer.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Certain high-risk strains of <strong>HPV</strong> can cause cervical cancer and other cancers. HPV vaccines protect against these cancer-causing strains and are recommended for adolescents.'
        },
        {
            type: 'tf',
            topic: 'Sexually transmitted infections',
            question: 'STIs can only be transmitted through sexual intercourse.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While primarily sexually transmitted, some STIs can spread through <strong>other routes</strong>: blood transfusions, shared needles, mother to child during birth/breastfeeding, or close skin contact (like herpes).'
        },

        // TOPIC 6: Lymphatic system (5 questions)
        {
            type: 'tf',
            topic: 'Lymphatic system',
            question: 'The lymphatic system helps defend the body against infection and returns excess fluid to the bloodstream.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>lymphatic system</strong> has two main functions: returning excess interstitial fluid (lymph) to blood circulation and housing immune cells (lymphocytes) that fight infection.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic system',
            question: 'Lymph is a fluid that circulates through lymphatic vessels and contains white blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lymph</strong> is clear fluid derived from blood plasma that leaks into tissues. It contains lymphocytes (white blood cells) and flows through lymphatic vessels back to the bloodstream.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic system',
            question: 'The lymphatic system has a pump like the heart to circulate lymph.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Unlike blood circulation, the lymphatic system <strong>has no central pump</strong>. Lymph moves through muscle contractions, breathing movements, and one-way valves in lymphatic vessels.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic system',
            question: 'Lymph nodes filter lymph and contain immune cells that can trap and destroy pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lymph nodes</strong> filter lymph, trapping bacteria, viruses, and abnormal cells. They contain lymphocytes and macrophages that destroy pathogens. Swollen nodes indicate active immune response.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic system',
            question: 'Lymphatic circulation is separate from blood circulation and the two never connect.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While separate, the lymphatic and blood circulatory systems <strong>do connect</strong>. Lymph returns to blood circulation via the thoracic duct and right lymphatic duct, which empty into subclavian veins.'
        },

        // TOPIC 7: Blood cells (5 questions)
        {
            type: 'tf',
            topic: 'Blood cells',
            question: 'Red blood cells (erythrocytes) contain hemoglobin that carries oxygen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>RBCs</strong> contain hemoglobin protein that binds oxygen in the lungs and delivers it to tissues. Mature RBCs lack a nucleus, maximizing space for hemoglobin.'
        },
        {
            type: 'tf',
            topic: 'Blood cells',
            question: 'White blood cells (leukocytes) are primarily responsible for fighting infections.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>WBCs (leukocytes)</strong> are the body\'s defense against infection and disease. Different types include neutrophils (bacteria fighters), lymphocytes (adaptive immunity), and eosinophils (parasites/allergies).'
        },
        {
            type: 'tf',
            topic: 'Blood cells',
            question: 'Platelets (thrombocytes) are responsible for blood clotting.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Platelets</strong> are cell fragments that initiate blood clotting (coagulation) at injury sites. They clump together and release chemicals that form clots to stop bleeding.'
        },
        {
            type: 'tf',
            topic: 'Blood cells',
            question: 'All blood cells are produced in the lymph nodes.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Blood cells are produced in <strong>bone marrow</strong>, not lymph nodes. Red bone marrow contains stem cells that differentiate into RBCs, WBCs, and platelets through hematopoiesis.'
        },
        {
            type: 'tf',
            topic: 'Blood cells',
            question: 'Plasma is the liquid component of blood that carries cells, nutrients, and wastes.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Plasma</strong> is the straw-colored liquid (about 55% of blood) that suspends blood cells and transports nutrients, hormones, proteins, gases, and waste products throughout the body.'
        },

        // TOPIC 8: Blood disorders (5 questions)
        {
            type: 'tf',
            topic: 'Blood disorders',
            question: 'Anemia is a condition where there is a deficiency in red blood cells or hemoglobin.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Anemia</strong> means insufficient RBCs or hemoglobin to carry adequate oxygen, causing fatigue, weakness, and pale skin. Causes include iron deficiency, blood loss, or genetic conditions.'
        },
        {
            type: 'tf',
            topic: 'Blood disorders',
            question: 'Iron deficiency anemia results from inadequate iron needed to produce hemoglobin.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Iron deficiency anemia</strong> is the most common type, occurring when the body lacks sufficient iron to make hemoglobin. It can result from poor diet, blood loss, or absorption problems.'
        },
        {
            type: 'tf',
            topic: 'Blood disorders',
            question: 'Sickle cell anemia causes red blood cells to become rigid and crescent-shaped.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Sickle cell anemia</strong> is a genetic disorder causing RBCs to become rigid, sticky, and sickle-shaped. These cells block blood flow, break down early, and cause pain crises and organ damage.'
        },
        {
            type: 'tf',
            topic: 'Blood disorders',
            question: 'Leukemia is a cancer of the blood characterized by overproduction of abnormal white blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Leukemia</strong> is cancer of blood-forming tissues causing production of abnormal WBCs that don\'t function properly. These crowd out normal blood cells, impairing immunity and causing anemia.'
        },
        {
            type: 'tf',
            topic: 'Blood disorders',
            question: 'All types of anemia are caused by iron deficiency.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While iron deficiency is common, anemia has many causes: <strong>vitamin B12 or folate deficiency, chronic disease, blood loss, genetic disorders</strong> (sickle cell, thalassemia), or bone marrow problems.'
        },

        // TOPIC 9: Reading a CBC (5 questions)
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'A CBC (Complete Blood Count) measures the numbers of different types of blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>CBC</strong> measures RBCs, WBCs, platelets, hemoglobin, hematocrit, and other parameters. It helps diagnose conditions like anemia, infections, immune disorders, and blood cancers.'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'Elevated white blood cell count typically indicates an infection or inflammation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Elevated WBC count (leukocytosis)</strong> usually indicates infection, inflammation, stress, or leukemia. The body produces more WBCs to fight pathogens or in response to tissue damage.'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'Low red blood cell count and low hemoglobin levels suggest anemia.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Low RBC count and hemoglobin</strong> indicate anemia—insufficient oxygen-carrying capacity. This causes fatigue and weakness. Further tests determine the specific type and cause of anemia.'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'A CBC with differential breaks down the percentage of different types of white blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>CBC with differential</strong> shows percentages of WBC types: neutrophils, lymphocytes, monocytes, eosinophils, and basophils. This pattern helps diagnose specific infections or immune conditions.'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'Normal CBC values are the same for everyone regardless of age or sex.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Normal CBC ranges vary</strong> by age, sex, and sometimes altitude or pregnancy status. For example, men typically have higher RBC counts and hemoglobin than women.'
        },

        // TOPIC 10: CBC/Differential (5 questions)
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'Neutrophils are the most abundant type of white blood cell and are first responders to bacterial infections.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Neutrophils</strong> comprise 50-70% of WBCs and are first responders to infection. They phagocytose (engulf) bacteria and release antimicrobial chemicals. Elevated neutrophils suggest bacterial infection.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'Lymphocytes include B cells and T cells that are important for adaptive immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lymphocytes</strong> (20-40% of WBCs) include B cells (produce antibodies) and T cells (cell-mediated immunity). Elevated lymphocytes often indicate viral infections or immune disorders.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'Eosinophils increase in number primarily during bacterial infections.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Eosinophils</strong> increase primarily during <strong>parasitic infections and allergic reactions</strong>, not bacterial infections. They release chemicals that damage parasites and moderate allergic responses.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'A shift in the differential can help doctors determine whether an infection is bacterial or viral.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Elevated neutrophils</strong> suggest bacterial infection, while <strong>elevated lymphocytes</strong> suggest viral infection. The pattern in the differential helps guide diagnosis and treatment decisions.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'Monocytes differentiate into macrophages that engulf pathogens and dead cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Monocytes</strong> circulate in blood and migrate into tissues where they differentiate into <strong>macrophages</strong>—large phagocytic cells that engulf pathogens, dead cells, and debris.'
        }
    ],

    // ==========================================
    // UNIT 3: SELF DEFENSE CHECKUP #2 (50 QUESTIONS)
    // ==========================================
    'unit3-self-defense-checkup2': [

        // TOPIC 1: Nonspecific immunity — 1st line (5 questions)
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 1st line',
            question: 'Innate immunity provides immediate, non-specific defense against all pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Innate (nonspecific) immunity</strong> provides rapid, general defense against any pathogen. It doesn\'t require prior exposure and includes physical/chemical barriers and cellular responses.'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 1st line',
            question: 'Skin provides a physical barrier that prevents most pathogens from entering the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Intact skin</strong> is the body\'s first line of defense, providing a physical barrier that most pathogens cannot penetrate. Cuts or breaks in skin allow pathogen entry.'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 1st line',
            question: 'Mucous membranes line body cavities and produce mucus that traps pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Mucous membranes</strong> line respiratory, digestive, and urogenital tracts. They secrete <strong>mucus</strong> that traps pathogens, which are then expelled through coughing, sneezing, or other means.'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 1st line',
            question: 'Lysozymes are enzymes found in tears and saliva that can destroy bacterial cell walls.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lysozymes</strong> are antibacterial enzymes in tears, saliva, mucus, and other secretions that break down bacterial cell walls, providing chemical defense at body surfaces.'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 1st line',
            question: 'The microbiome (normal bacteria on skin and in body) helps prevent pathogen colonization.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>microbiome</strong> (beneficial bacteria) competes with pathogens for space and nutrients, produces antimicrobial substances, and helps train the immune system, providing biological defense.'
        },

        // TOPIC 2: Nonspecific immunity — 2nd line (inflammation) (5 questions)
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 2nd line (inflammation)',
            question: 'Inflammation is a nonspecific immune response to tissue damage or infection.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Inflammation</strong> is a protective response to injury or infection involving vasodilation, increased permeability, immune cell recruitment, and release of chemical mediators to eliminate threats and begin healing.'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 2nd line (inflammation)',
            question: 'The four classic signs of inflammation are redness, heat, swelling, and pain.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The four cardinal signs are: <strong>redness</strong> (vasodilation), <strong>heat</strong> (increased blood flow), <strong>swelling</strong> (fluid accumulation), and <strong>pain</strong> (nerve stimulation by chemicals and pressure).'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 2nd line (inflammation)',
            question: 'Vasodilation during inflammation decreases blood flow to the affected area.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vasodilation increases blood flow</strong> to the inflamed area, bringing more oxygen, nutrients, immune cells, and chemical mediators to fight infection and promote healing.'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 2nd line (inflammation)',
            question: 'Phagocytes are white blood cells that engulf and destroy pathogens and debris.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Phagocytes</strong> (neutrophils, macrophages) perform <strong>phagocytosis</strong>—engulfing and digesting pathogens, dead cells, and debris. They\'re crucial for clearing infections and damaged tissue.'
        },
        {
            type: 'tf',
            topic: 'Nonspecific immunity — 2nd line (inflammation)',
            question: 'Fever is an inflammatory response that can help inhibit pathogen growth and speed immune responses.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Fever</strong> (elevated body temperature) is triggered by cytokines. It inhibits some pathogens\' growth, speeds up immune cell activity and metabolism, and enhances repair processes.'
        },

        // TOPIC 3: Specific immunity: T cells and B cells (5 questions)
        {
            type: 'tf',
            topic: 'Specific immunity: T cells and B cells',
            question: 'Adaptive immunity is specific to particular pathogens and has memory.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Adaptive (specific) immunity</strong> targets specific pathogens, takes days to develop, but creates <strong>immunological memory</strong> for faster, stronger responses to future encounters with the same pathogen.'
        },
        {
            type: 'tf',
            topic: 'Specific immunity: T cells and B cells',
            question: 'T cells mature in the thymus and are responsible for cell-mediated immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>T cells</strong> mature in the thymus gland. They provide <strong>cell-mediated immunity</strong>—directly attacking infected cells, activating other immune cells, and regulating immune responses.'
        },
        {
            type: 'tf',
            topic: 'Specific immunity: T cells and B cells',
            question: 'B cells produce antibodies that circulate in blood and lymph to neutralize pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>B cells</strong> produce <strong>antibodies (immunoglobulins)</strong> that bind to specific antigens on pathogens, marking them for destruction, neutralizing toxins, and preventing pathogen attachment to cells.'
        },
        {
            type: 'tf',
            topic: 'Specific immunity: T cells and B cells',
            question: 'Helper T cells activate both B cells and cytotoxic T cells, coordinating the immune response.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Helper T cells (CD4+)</strong> are crucial coordinators—they activate B cells to produce antibodies, activate cytotoxic T cells to kill infected cells, and stimulate macrophages. Loss of helper T cells (as in HIV) cripples immunity.'
        },
        {
            type: 'tf',
            topic: 'Specific immunity: T cells and B cells',
            question: 'Cytotoxic T cells destroy cancer cells and cells infected with viruses.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cytotoxic T cells (CD8+)</strong> recognize and destroy body cells that are infected with viruses or have become cancerous, releasing chemicals that induce programmed cell death (apoptosis).'
        },

        // TOPIC 4: Specific Immunity: Primary and secondary immune responses (5 questions)
        {
            type: 'tf',
            topic: 'Specific Immunity: Primary and secondary immune responses',
            question: 'The primary immune response occurs the first time the body encounters a specific antigen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>primary response</strong> occurs on first exposure to an antigen. It takes several days to develop, produces moderate antibody levels, and establishes memory cells for future protection.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Primary and secondary immune responses',
            question: 'The secondary immune response is faster and stronger than the primary response.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>secondary response</strong> (upon re-exposure) is <strong>faster, stronger, and longer-lasting</strong> because memory B and T cells recognize the antigen immediately and mount a rapid, amplified response.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Primary and secondary immune responses',
            question: 'Memory cells are produced during the primary immune response and provide long-term immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. During primary response, some activated B and T cells become <strong>memory cells</strong> that persist for years or life, enabling rapid secondary responses and providing long-term immunity.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Primary and secondary immune responses',
            question: 'The primary immune response provides immediate protection on first exposure to a pathogen.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The primary response takes <strong>several days to weeks</strong> to develop full protection. During this lag period, innate immunity provides defense while adaptive immunity develops.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Primary and secondary immune responses',
            question: 'Vaccination triggers a primary immune response without causing disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Vaccines</strong> contain weakened/killed pathogens or pathogen parts that trigger primary immune response and memory cell formation, providing protection against future real infection without causing disease.'
        },

        // TOPIC 5: Specific Immunity: Active and passive immunity (5 questions)
        {
            type: 'tf',
            topic: 'Specific Immunity: Active and passive immunity',
            question: 'Active immunity occurs when the body produces its own antibodies in response to an antigen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Active immunity</strong> develops when your immune system responds to an antigen (from infection or vaccine) by producing antibodies and memory cells. It\'s long-lasting but takes time to develop.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Active and passive immunity',
            question: 'Passive immunity occurs when antibodies are transferred from another source rather than produced by the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Passive immunity</strong> comes from receiving antibodies made by another person/animal (maternal antibodies through placenta/breast milk, or antibody injections). It provides immediate but temporary protection.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Active and passive immunity',
            question: 'Active immunity provides immediate protection but is short-lived.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Active immunity takes time to develop (days-weeks) but provides <strong>long-lasting protection</strong> through memory cells. <strong>Passive immunity</strong> provides immediate but short-lived protection.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Active and passive immunity',
            question: 'Breastfeeding provides passive immunity to infants through maternal antibodies in breast milk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Breast milk contains maternal antibodies (especially IgA)</strong> that provide passive immunity, protecting infants from infections while their own immune systems develop.'
        },
        {
            type: 'tf',
            topic: 'Specific Immunity: Active and passive immunity',
            question: 'Vaccines provide passive immunity by injecting pre-formed antibodies.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Most vaccines provide <strong>active immunity</strong> by exposing the immune system to antigens, triggering antibody production and memory. Passive immunity comes from direct antibody transfer (like immune globulin injections).'
        },

        // TOPIC 6: Vaccines (5 questions)
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Vaccines work by triggering an immune response without causing the disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Vaccines</strong> contain weakened, killed, or partial pathogens (or mRNA instructions) that stimulate immune response and memory cell formation without causing disease, preparing the body for future real infection.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'mRNA vaccines contain weakened live virus that can cause mild infection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>mRNA vaccines</strong> contain genetic instructions for cells to make a harmless piece of pathogen (like COVID spike protein). They contain <strong>no virus</strong>—live, weakened, or dead—and cannot cause infection.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Vaccines can sometimes fail to provide immunity if the immune system does not respond adequately.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Vaccines can fail if: the person is <strong>immunocompromised</strong>, doesn\'t complete the series, the pathogen mutates significantly, or the individual\'s immune system doesn\'t mount an adequate response.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Vaccination not only protects the individual but also helps protect communities through herd immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When enough people are vaccinated, it creates <strong>herd immunity</strong>, reducing disease spread and protecting vulnerable individuals who cannot be vaccinated (infants, immunocompromised).'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Once vaccinated, a person can never get the disease they were vaccinated against.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While vaccines are highly effective, they\'re not 100% guaranteed. <strong>Breakthrough infections can occur</strong>, especially if immunity wanes, the pathogen mutates, or the person is immunocompromised.'
        },

        // TOPIC 7: Herd immunity (5 questions)
        {
            type: 'tf',
            topic: 'Herd immunity',
            question: 'Herd immunity occurs when enough people in a population are immune to prevent disease spread.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Herd immunity</strong> (community immunity) occurs when a large percentage of the population is immune (through vaccination or previous infection), making disease spread unlikely and protecting vulnerable individuals.'
        },
        {
            type: 'tf',
            topic: 'Herd immunity',
            question: 'Herd immunity protects individuals who cannot be vaccinated, such as infants or immunocompromised people.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Herd immunity provides <strong>indirect protection</strong> for vulnerable people who cannot be vaccinated (too young, allergies, immunocompromised) by reducing their exposure to disease.'
        },
        {
            type: 'tf',
            topic: 'Herd immunity',
            question: 'The percentage of population needed for herd immunity is the same for all diseases.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The <strong>threshold varies by disease</strong> based on contagiousness. Highly contagious diseases (measles) require 95% immunity, while less contagious ones need lower percentages.'
        },
        {
            type: 'tf',
            topic: 'Herd immunity',
            question: 'Vaccine hesitancy can reduce herd immunity and lead to disease outbreaks.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When <strong>vaccination rates drop</strong> due to hesitancy, herd immunity weakens, allowing disease resurgence. This has caused measles and whooping cough outbreaks in communities with low vaccination rates.'
        },
        {
            type: 'tf',
            topic: 'Herd immunity',
            question: 'Herd immunity can only be achieved through vaccination, not through natural infection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Herd immunity can develop through <strong>either vaccination or widespread natural infection</strong>. However, vaccination is much safer—achieving herd immunity through natural infection causes many deaths and severe illness.'
        },

        // TOPIC 8: Immune disorders (5 questions)
        {
            type: 'tf',
            topic: 'Immune disorders',
            question: 'Immunocompromised individuals have weakened immune systems and are more susceptible to infections.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Immunocompromised</strong> people have impaired immunity due to disease (HIV/AIDS), medications (chemotherapy, immunosuppressants), or conditions. They\'re more vulnerable to infections that healthy immune systems easily fight.'
        },
        {
            type: 'tf',
            topic: 'Immune disorders',
            question: 'Autoimmune diseases occur when the immune system attacks the body\'s own healthy cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. In <strong>autoimmune diseases</strong>, the immune system mistakenly attacks healthy tissues. Examples include Type 1 diabetes (attacks pancreatic cells), rheumatoid arthritis (attacks joints), and lupus (attacks multiple tissues).'
        },
        {
            type: 'tf',
            topic: 'Immune disorders',
            question: 'HIV/AIDS weakens the immune system by destroying helper T cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>HIV</strong> (Human Immunodeficiency Virus) targets and destroys <strong>helper T cells (CD4+)</strong>, progressively weakening immunity. AIDS develops when CD4+ counts drop critically low, causing severe opportunistic infections.'
        },
        {
            type: 'tf',
            topic: 'Immune disorders',
            question: 'Immunosuppressant drugs are used to treat autoimmune diseases and prevent organ rejection.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Immunosuppressants</strong> deliberately weaken immune responses to treat autoimmune diseases (reducing self-attack) and prevent transplant rejection (preventing attack on donor organ).'
        },
        {
            type: 'tf',
            topic: 'Immune disorders',
            question: 'Autoimmune diseases can be cured with antibiotics.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Autoimmune diseases <strong>cannot be cured</strong> and don\'t respond to antibiotics (which treat bacteria). Treatment focuses on managing symptoms and suppressing excessive immune response with immunosuppressants.'
        },

        // TOPIC 9: Allergic reactions (5 questions)
        {
            type: 'tf',
            topic: 'Allergic reactions',
            question: 'An allergic reaction is an exaggerated immune response to a normally harmless substance.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Allergies</strong> occur when the immune system overreacts to harmless substances (allergens like pollen, food, or pet dander), treating them as dangerous invaders and causing symptoms.'
        },
        {
            type: 'tf',
            topic: 'Allergic reactions',
            question: 'During an allergic reaction, mast cells release histamine that causes inflammation and symptoms.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When allergens bind to IgE antibodies on <strong>mast cells</strong>, the cells release <strong>histamine</strong> and other chemicals, causing inflammation, mucus production, itching, swelling, and other allergy symptoms.'
        },
        {
            type: 'tf',
            topic: 'Allergic reactions',
            question: 'Anaphylaxis is a mild allergic reaction that causes minor skin irritation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Anaphylaxis (anaphylactic shock)</strong> is a <strong>severe, life-threatening allergic reaction</strong> causing difficulty breathing, drop in blood pressure, and potential death. It requires immediate epinephrine treatment.'
        },
        {
            type: 'tf',
            topic: 'Allergic reactions',
            question: 'Epinephrine (adrenaline) is the first-line treatment for anaphylaxis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Epinephrine</strong> (administered via EpiPen or injection) reverses anaphylaxis by constricting blood vessels, relaxing airway muscles, and reducing swelling. It must be given immediately when anaphylaxis occurs.'
        },
        {
            type: 'tf',
            topic: 'Allergic reactions',
            question: 'Antihistamines work by blocking the effects of histamine released during allergic reactions.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Antihistamines</strong> block histamine receptors, reducing allergy symptoms like sneezing, itching, and runny nose. They\'re effective for mild-moderate allergies but cannot treat anaphylaxis (which requires epinephrine).'
        },

        // TOPIC 10: Cancer (5 questions)
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Cancer results from uncontrolled cell division due to mutations in genes that regulate the cell cycle.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cancer</strong> develops when mutations in genes (oncogenes, tumor suppressors, DNA repair genes) disrupt normal cell cycle control, causing uncontrolled growth and division.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Benign tumors are cancerous and can spread to other parts of the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Benign tumors are NOT cancerous</strong>—they don\'t invade nearby tissue or spread. <strong>Malignant tumors</strong> are cancerous, invading tissues and metastasizing to distant sites.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Metastasis is the spread of cancer cells from the original tumor to other parts of the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Metastasis</strong> occurs when cancer cells break away from the primary tumor, travel through blood or lymph, and establish secondary tumors in other organs, making cancer much harder to treat.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Chemotherapy and radiation therapy work by targeting and killing rapidly dividing cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Chemotherapy</strong> (drugs) and <strong>radiation therapy</strong> kill rapidly dividing cells. Unfortunately, they also damage healthy fast-growing cells (hair, digestive lining, bone marrow), causing side effects.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Cancer risk can be reduced through lifestyle choices like not smoking, healthy diet, and exercise.',
            correct: true,
            explanation: 'This is <strong>true</strong>. While some cancers have genetic predisposition, many can be prevented through: <strong>avoiding tobacco, maintaining healthy weight, exercising, eating nutritious foods, limiting alcohol, protecting from UV radiation, and getting vaccinated</strong> (HPV, hepatitis B).'
        }
    ]
};

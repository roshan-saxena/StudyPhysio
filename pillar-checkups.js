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
    ]
};

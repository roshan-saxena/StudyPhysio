// PILLAR CHECKUP QUESTIONS
// 50 questions per checkup (5 questions per topic)

const pillarCheckupQuestions = {
    
    // ==========================================
    // PILLAR CHECKUP 1 (50 QUESTIONS)
    // ==========================================
    'unit1-pillar-checkup1': [
        
        // TOPIC 1: Health (5 questions)
        {
            type: 'mcq',
            question: 'Which of the following best defines health according to the WHO?',
            options: [
                'The absence of disease or infirmity',
                'A state of complete physical, mental, and social well-being',
                'Having good nutrition and exercise habits',
                'Being free from chronic illnesses'
            ],
            correct: 1,
            explanation: 'Health is defined as <strong>a state of complete physical, mental, and social well-being</strong>, not merely the absence of disease. This holistic definition recognizes that true health encompasses multiple dimensions.'
        },
        {
            type: 'tf',
            question: 'Physical health, mental health, and social health are all equally important components of overall health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Overall good health is a combination of physical, mental, and social health. All three pillars are interconnected and essential for complete well-being.'
        },
        {
            type: 'mcq',
            question: 'Which of the following is NOT one of the five pillars of health?',
            options: [
                'Social connection',
                'Nutrition',
                'Wealth',
                'Sleep'
            ],
            correct: 2,
            explanation: 'The five pillars of health are: <strong>social connection, nutrition, exercise, sleep, and managing stress</strong>. While financial stability can affect health, wealth itself is not considered a pillar of health.'
        },
        {
            type: 'mcq',
            question: 'What is the best strategy for evaluating health information found online?',
            options: [
                'Check if the website looks professional',
                'Use peer review and lateral reading techniques',
                'See how many people shared the article',
                'Trust information from the first search result'
            ],
            correct: 1,
            explanation: '<strong>Peer review and lateral reading</strong> are essential strategies for evaluating health information. This involves checking sources, looking for scientific evidence, and verifying claims through multiple credible sources.'
        },
        {
            type: 'tf',
            question: 'Mental health and physical health are completely separate and do not influence each other.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Mental and physical health are deeply interconnected. Poor mental health can lead to physical symptoms and increased disease risk, while physical health problems can impact mental well-being.'
        },

        // TOPIC 2: Signs and symptoms (5 questions)
        {
            type: 'mcq',
            question: 'What is the difference between a sign and a symptom?',
            options: [
                'Signs are subjective, symptoms are objective',
                'Signs are objective and observable, symptoms are subjective experiences',
                'They are the same thing',
                'Signs are always more serious than symptoms'
            ],
            correct: 1,
            explanation: '<strong>Signs are objective</strong> findings that can be observed or measured (like fever, rash, or high blood pressure), while <strong>symptoms are subjective</strong> experiences reported by the patient (like pain, fatigue, or nausea).'
        },
        {
            type: 'tf',
            question: 'A headache is an example of a sign rather than a symptom.',
            correct: false,
            explanation: 'This is <strong>false</strong>. A headache is a <strong>symptom</strong> because it is a subjective experience that only the patient can feel and describe. It cannot be directly observed or measured by others.'
        },
        {
            type: 'mcq',
            question: 'Which of the following is an example of a sign?',
            options: [
                'Feeling dizzy',
                'Having a fever of 101°F',
                'Experiencing nausea',
                'Feeling anxious'
            ],
            correct: 1,
            explanation: 'A <strong>fever of 101°F is a sign</strong> because it can be objectively measured with a thermometer. The other options are symptoms because they are subjective experiences that cannot be directly observed.'
        },
        {
            type: 'tf',
            question: 'Symptoms are generally more reliable for diagnosis than signs because they come directly from the patient.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While symptoms provide important information, <strong>signs are often more reliable for diagnosis</strong> because they are objective and measurable. Symptoms can be influenced by patient perception and reporting.'
        },
        {
            type: 'mcq',
            question: 'A patient reports feeling tired all the time. This is classified as:',
            options: [
                'A sign because it can be observed',
                'A symptom because it is a subjective experience',
                'Both a sign and a symptom',
                'Neither a sign nor a symptom'
            ],
            correct: 1,
            explanation: 'Fatigue is a <strong>symptom</strong> because it is a <strong>subjective experience</strong> that the patient reports. While a doctor might observe that someone looks tired, the feeling of tiredness itself cannot be directly measured or observed.'
        },

        // TOPIC 3: Social determinants of health (5 questions)
        {
            type: 'mcq',
            question: 'Which of the following is a social determinant of health?',
            options: [
                'Genetic predisposition to disease',
                'Access to quality education',
                'Individual exercise habits',
                'Personal food preferences'
            ],
            correct: 1,
            explanation: '<strong>Access to quality education is a social determinant of health</strong>. Social determinants are conditions in the environments where people live, work, and play that affect health outcomes, including economic stability, education, healthcare access, and neighborhood conditions.'
        },
        {
            type: 'tf',
            question: 'Social determinants of health only affect people living in poverty.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Social determinants of health affect everyone, though disadvantaged populations often experience greater negative impacts. Factors like neighborhood safety, air quality, and healthcare access affect people across all socioeconomic levels.'
        },
        {
            type: 'mcq',
            question: 'Which statement best describes the relationship between zip code and health outcomes?',
            options: [
                'Zip code has no relationship with health',
                'Zip code can be a better predictor of health than genetic code',
                'Only rural zip codes affect health',
                'Zip code only matters for infectious diseases'
            ],
            correct: 1,
            explanation: 'Research shows that <strong>zip code can be a better predictor of health than genetic code</strong>. Where you live determines access to healthy food, quality healthcare, safe spaces for exercise, clean air and water, and many other factors that profoundly impact health.'
        },
        {
            type: 'tf',
            question: 'Economic stability is considered a social determinant of health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Economic stability</strong> is a major social determinant of health, affecting access to healthcare, nutritious food, safe housing, and the ability to afford medications and preventive care.'
        },
        {
            type: 'mcq',
            question: 'How do social determinants of health contribute to health disparities?',
            options: [
                'They affect everyone equally',
                'They create unequal opportunities and access to resources',
                'They only affect mental health',
                'They have no impact on health disparities'
            ],
            correct: 1,
            explanation: 'Social determinants of health <strong>create unequal opportunities and access to resources</strong>, leading to health disparities. Groups with less access to education, healthcare, healthy food, and safe environments experience worse health outcomes.'
        },

        // TOPIC 4: Social (5 questions)
        {
            type: 'mcq',
            question: 'What effect does social isolation have on mortality risk?',
            options: [
                'No significant effect',
                'Slightly decreases mortality risk',
                'Can increase mortality risk similar to smoking 15 cigarettes per day',
                'Only affects elderly populations'
            ],
            correct: 2,
            explanation: 'Research shows that <strong>social isolation can increase mortality risk comparable to smoking 15 cigarettes per day</strong>. Loneliness and social isolation have profound effects on both physical and mental health, increasing risk for cardiovascular disease, depression, and other conditions.'
        },
        {
            type: 'tf',
            question: 'Social connections only benefit mental health and have no impact on physical health.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Social connections benefit both mental AND physical health. Strong social relationships are associated with lower blood pressure, reduced inflammation, stronger immune function, and increased longevity.'
        },
        {
            type: 'mcq',
            question: 'What is social capital?',
            options: [
                'Money earned from social media',
                'The networks, relationships, and trust within a community',
                'The number of friends someone has',
                'Time spent socializing each day'
            ],
            correct: 1,
            explanation: '<strong>Social capital</strong> refers to <strong>the networks, relationships, norms, and trust that exist within a community</strong>. High social capital is associated with better health outcomes, as communities with strong social ties can better support their members.'
        },
        {
            type: 'tf',
            question: 'Loneliness can trigger the release of stress hormones like cortisol.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Loneliness activates the stress response, leading to <strong>increased cortisol production</strong>. Chronic loneliness keeps cortisol elevated, which can damage the immune system and increase inflammation throughout the body.'
        },
        {
            type: 'mcq',
            question: 'Which of the following best describes the relationship between social connection and longevity?',
            options: [
                'There is no proven relationship',
                'Strong social connections are associated with increased longevity',
                'Social connections decrease longevity due to disease transmission',
                'Only family connections affect longevity'
            ],
            correct: 1,
            explanation: '<strong>Strong social connections are associated with increased longevity</strong>. People with robust social networks tend to live longer, healthier lives. This effect is seen across different types of relationships including family, friends, and community connections.'
        },

        // TOPIC 5: Social Media (5 questions)
        {
            type: 'mcq',
            question: 'What is a primary concern regarding social media use and mental health in adolescents?',
            options: [
                'Increased physical activity',
                'Better sleep quality',
                'Increased rates of anxiety and depression',
                'Improved face-to-face communication skills'
            ],
            correct: 2,
            explanation: 'Research has shown correlations between heavy social media use and <strong>increased rates of anxiety and depression</strong> in adolescents, particularly related to social comparison, cyberbullying, and FOMO (fear of missing out).'
        },
        {
            type: 'tf',
            question: 'Using primary sources on social media is generally more reliable than secondary sources for scientific information.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Primary sources</strong> (original research, peer-reviewed studies) are more reliable than secondary sources (news articles, blog posts) because they contain original data and methods. However, primary sources may be harder to interpret without scientific training.'
        },
        {
            type: 'mcq',
            question: 'Which of the following is a potential negative impact of social media on health?',
            options: [
                'Increased social connection',
                'Access to health information',
                'Disrupted sleep patterns from late-night use',
                'Support for health conditions'
            ],
            correct: 2,
            explanation: '<strong>Disrupted sleep patterns</strong> are a major negative impact of social media use, particularly when devices are used before bedtime. Blue light exposure and stimulating content can interfere with melatonin production and sleep quality.'
        },
        {
            type: 'tf',
            question: 'Social media can have both positive and negative impacts on health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Social media can provide valuable health information, support communities, and maintain connections (positive effects), but can also contribute to anxiety, poor sleep, sedentary behavior, and social comparison (negative effects).'
        },
        {
            type: 'mcq',
            question: 'What is the main difference between primary and secondary sources when researching health topics?',
            options: [
                'Primary sources are always shorter',
                'Primary sources contain original research; secondary sources interpret or summarize',
                'Secondary sources are always more accurate',
                'There is no important difference'
            ],
            correct: 1,
            explanation: '<strong>Primary sources contain original research and data</strong> (like peer-reviewed studies), while <strong>secondary sources interpret, analyze, or summarize</strong> primary sources (like news articles or reviews). Both have value, but primary sources provide direct evidence.'
        },

        // TOPIC 6: Nutrition Myths: Carbs and Fats (5 questions)
        {
            type: 'mcq',
            question: 'Which statement about carbohydrates is TRUE?',
            options: [
                'All carbohydrates are unhealthy and should be avoided',
                'Complex carbohydrates from whole grains are more healthful than refined carbohydrates',
                'Carbohydrates have no role in a healthy diet',
                'Simple sugars are healthier than complex carbohydrates'
            ],
            correct: 1,
            explanation: '<strong>Complex carbohydrates from whole grains, fruits, and vegetables are more healthful</strong> than refined carbohydrates. They provide fiber, vitamins, minerals, and sustained energy. Not all carbs are created equal!'
        },
        {
            type: 'tf',
            question: 'All fats are unhealthy and should be eliminated from the diet.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Some fats are essential for health</strong>, including unsaturated fats from sources like olive oil, avocados, nuts, and fatty fish. These fats support brain function, hormone production, and vitamin absorption. Trans fats and excessive saturated fats should be limited.'
        },
        {
            type: 'mcq',
            question: 'Which type of fat is considered MOST healthful?',
            options: [
                'Trans fats',
                'Saturated fats',
                'Unsaturated fats (especially omega-3s)',
                'Hydrogenated fats'
            ],
            correct: 2,
            explanation: '<strong>Unsaturated fats, particularly omega-3 fatty acids</strong>, are the most healthful. They support heart health, reduce inflammation, and are essential for brain function. Sources include fish, nuts, seeds, and olive oil.'
        },
        {
            type: 'tf',
            question: 'Artificial sweeteners are always a healthier choice than natural sugars.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While artificial sweeteners reduce calorie intake, research on their long-term health effects is mixed. Some studies suggest they may alter gut bacteria and metabolism. Moderation with natural sugars from whole foods is often a better approach than relying heavily on artificial sweeteners.'
        },
        {
            type: 'mcq',
            question: 'What is a key difference between refined and whole grain carbohydrates?',
            options: [
                'Refined grains contain more fiber',
                'Whole grains retain the bran, germ, and endosperm',
                'Refined grains are more nutritious',
                'There is no meaningful difference'
            ],
            correct: 1,
            explanation: '<strong>Whole grains retain all three parts of the grain kernel</strong> (bran, germ, and endosperm), providing fiber, B vitamins, minerals, and phytochemicals. Refined grains have had the bran and germ removed, losing most of the fiber and nutrients.'
        },

        // TOPIC 7: Nutrition: Mediterranean/SAD (5 questions)
        {
            type: 'mcq',
            question: 'Which of the following best describes the Mediterranean diet?',
            options: [
                'High in red meat and dairy products',
                'Emphasizes plant foods, olive oil, fish, and moderate wine consumption',
                'Focuses on processed foods and convenience',
                'Eliminates all carbohydrates'
            ],
            correct: 1,
            explanation: 'The Mediterranean diet <strong>emphasizes plant foods (fruits, vegetables, whole grains, legumes), olive oil, fish, and moderate wine consumption</strong>. It limits red meat and includes moderate amounts of dairy. This dietary pattern is associated with reduced cardiovascular disease and increased longevity.'
        },
        {
            type: 'tf',
            question: 'The Standard American Diet (SAD) is associated with increased rates of chronic diseases.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The Standard American Diet, high in processed foods, refined grains, added sugars, and unhealthy fats, is <strong>associated with increased rates of obesity, heart disease, diabetes, and cancer</strong>.'
        },
        {
            type: 'mcq',
            question: 'What does Michael Pollan\'s mantra "Eat food, not too much, mostly plants" emphasize?',
            options: [
                'Only eat vegetables',
                'Count every calorie',
                'Focus on whole foods, practice moderation, and emphasize plant-based foods',
                'Avoid all animal products'
            ],
            correct: 2,
            explanation: 'Pollan\'s mantra emphasizes: <strong>"Eat food"</strong> (whole, real foods not processed products), <strong>"not too much"</strong> (practice moderation and portion control), <strong>"mostly plants"</strong> (emphasize but don\'t exclusively eat plant-based foods). This simple guideline promotes healthful eating without complex rules.'
        },
        {
            type: 'tf',
            question: 'The Mediterranean diet has been shown to reduce the risk of cardiovascular disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Multiple studies, including large clinical trials, have shown that <strong>the Mediterranean diet reduces cardiovascular disease risk</strong>, stroke, and mortality. The combination of healthy fats, antioxidants, fiber, and anti-inflammatory compounds provides protective effects.'
        },
        {
            type: 'mcq',
            question: 'Compared to the Mediterranean diet, the Standard American Diet typically contains:',
            options: [
                'More whole grains and vegetables',
                'More processed foods, added sugars, and unhealthy fats',
                'More olive oil and fish',
                'Fewer calories overall'
            ],
            correct: 1,
            explanation: 'The Standard American Diet (SAD) typically contains <strong>more processed foods, added sugars, refined grains, and unhealthy fats</strong> compared to the Mediterranean diet. It is also lower in fruits, vegetables, whole grains, and healthy fats like olive oil.'
        },

        // TOPIC 8: Homeostasis (5 questions)
        {
            type: 'mcq',
            question: 'What is homeostasis?',
            options: [
                'The process of cell division',
                'The maintenance of stable internal conditions despite external changes',
                'The breakdown of food for energy',
                'The removal of waste from the body'
            ],
            correct: 1,
            explanation: '<strong>Homeostasis is the maintenance of stable internal conditions</strong> in the body despite changes in the external environment. This includes regulation of temperature, pH, blood pressure, glucose levels, and many other variables within narrow ranges.'
        },
        {
            type: 'tf',
            question: 'Negative feedback loops work to maintain homeostasis by reversing changes from the set point.',
            correct: true,
            explanation: 'This is <strong>true</strong>. In <strong>negative feedback</strong>, when a variable deviates from its set point, the body activates mechanisms to reverse that change and return to the set point. Most homeostatic regulation uses negative feedback.'
        },
        {
            type: 'mcq',
            question: 'Which of the following is an example of a homeostatic mechanism?',
            options: [
                'Shivering when cold to generate heat',
                'Growing taller during adolescence',
                'Learning a new skill',
                'Digesting food'
            ],
            correct: 0,
            explanation: '<strong>Shivering when cold is a homeostatic mechanism</strong> that maintains body temperature. When temperature drops below the set point, receptors detect the change, and the control center (hypothalamus) triggers effectors (muscles) to shiver and generate heat.'
        },
        {
            type: 'tf',
            question: 'Positive feedback loops are more common than negative feedback loops in maintaining homeostasis.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Negative feedback loops are far more common</strong> for maintaining homeostasis because they reverse changes and maintain stability. Positive feedback loops amplify changes and are used in specific situations like childbirth or blood clotting, but are not suitable for maintaining steady states.'
        },
        {
            type: 'mcq',
            question: 'In a homeostatic feedback loop, what is the role of the control center?',
            options: [
                'Detects the change in conditions',
                'Receives information and determines the appropriate response',
                'Carries out the response to restore homeostasis',
                'Acts as the set point'
            ],
            correct: 1,
            explanation: 'The <strong>control center receives information from receptors and determines the appropriate response</strong> to maintain homeostasis. It compares the current value to the set point and activates effectors to make corrections. The brain (particularly the hypothalamus) and endocrine glands often serve as control centers.'
        },

        // TOPIC 9: Blood Glucose Regulation (5 questions)
        {
            type: 'mcq',
            question: 'What is the normal blood glucose range for a healthy person?',
            options: [
                '40-60 mg/dL',
                '70-100 mg/dL (fasting)',
                '120-150 mg/dL',
                '160-200 mg/dL'
            ],
            correct: 1,
            explanation: 'Normal fasting blood glucose is <strong>70-100 mg/dL</strong>. Levels of 100-125 mg/dL indicate prediabetes, and levels of 126 mg/dL or higher (on two separate occasions) indicate diabetes.'
        },
        {
            type: 'tf',
            question: 'Blood glucose regulation is an example of negative feedback homeostasis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Blood glucose regulation is a classic example of <strong>negative feedback</strong>. When glucose rises, insulin is released to lower it; when glucose falls, glucagon is released to raise it. These responses reverse the initial change and maintain homeostasis.'
        },
        {
            type: 'mcq',
            question: 'When blood glucose levels are too high, which hormone is released?',
            options: [
                'Glucagon',
                'Insulin',
                'Cortisol',
                'Adrenaline'
            ],
            correct: 1,
            explanation: 'When blood glucose is high, <strong>insulin is released by pancreatic beta cells</strong>. Insulin promotes glucose uptake by cells, conversion of glucose to glycogen in the liver and muscles, and storage of excess energy, thereby lowering blood glucose.'
        },
        {
            type: 'tf',
            question: 'The pancreas functions as both a receptor and control center in blood glucose regulation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The pancreas detects blood glucose levels (receptor function) and determines the appropriate hormonal response (control center function), releasing either insulin or glucagon. It also acts as an effector by secreting these hormones into the bloodstream.'
        },
        {
            type: 'mcq',
            question: 'What happens to excess glucose in the body when insulin is present?',
            options: [
                'It is immediately excreted in urine',
                'It is converted to glycogen for storage in liver and muscles',
                'It is converted directly to ATP',
                'Nothing, it circulates indefinitely'
            ],
            correct: 1,
            explanation: 'When insulin is present, excess glucose is <strong>converted to glycogen (glycogenesis) for storage in the liver and muscles</strong>. When these stores are full, excess glucose can also be converted to fat for long-term storage.'
        },

        // TOPIC 10: Insulin and Glucagon (5 questions)
        {
            type: 'mcq',
            question: 'Which cells in the pancreas produce insulin?',
            options: [
                'Alpha cells',
                'Beta cells',
                'Delta cells',
                'Gamma cells'
            ],
            correct: 1,
            explanation: '<strong>Beta cells in the pancreatic islets (islets of Langerhans) produce insulin</strong>. These cells detect rising blood glucose and secrete insulin in response. In Type 1 diabetes, beta cells are destroyed by the immune system.'
        },
        {
            type: 'tf',
            question: 'Insulin and glucagon have opposite effects on blood glucose levels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Insulin lowers blood glucose</strong> (by promoting uptake and storage), while <strong>glucagon raises blood glucose</strong> (by promoting glycogen breakdown and glucose release). They work antagonistically to maintain glucose homeostasis.'
        },
        {
            type: 'mcq',
            question: 'What is the primary function of glucagon?',
            options: [
                'Lower blood glucose levels',
                'Raise blood glucose levels',
                'Store glucose as glycogen',
                'Promote glucose uptake by cells'
            ],
            correct: 1,
            explanation: '<strong>Glucagon raises blood glucose levels</strong> when they drop too low. It stimulates the liver to break down glycogen into glucose (glycogenolysis) and to produce new glucose from amino acids (gluconeogenesis), releasing glucose into the bloodstream.'
        },
        {
            type: 'tf',
            question: 'In Type 1 diabetes, the body produces too much insulin.',
            correct: false,
            explanation: 'This is <strong>false</strong>. In Type 1 diabetes, the <strong>immune system destroys insulin-producing beta cells</strong>, so the body produces little to no insulin. Patients require insulin injections to survive. Type 2 diabetes involves insulin resistance and eventual beta cell dysfunction.'
        },
        {
            type: 'mcq',
            question: 'What is the term for the condition when blood glucose levels are too low?',
            options: [
                'Hyperglycemia',
                'Hypoglycemia',
                'Glycosuria',
                'Gluconeogenesis'
            ],
            correct: 1,
            explanation: '<strong>Hypoglycemia</strong> refers to abnormally low blood glucose levels (typically below 70 mg/dL). Symptoms include shakiness, sweating, confusion, and in severe cases, seizures or loss of consciousness. <strong>Hyperglycemia</strong> refers to high blood glucose.'
        }
    ],

    // ==========================================
    // PILLAR CHECKUP 2 (50 QUESTIONS)
    // ==========================================
    'unit1-pillar-checkup2': [
        
        // TOPIC 1: Types of exercise (5 questions)
        {
            type: 'mcq',
            question: 'Which type of exercise strengthens the heart and improves cardiovascular endurance?',
            options: [
                'Flexibility exercises',
                'Balance exercises',
                'Aerobic exercise',
                'Muscle strengthening exercises'
            ],
            correct: 2,
            explanation: '<strong>Aerobic exercise</strong> (also called cardio) strengthens the heart and lungs, improves cardiovascular endurance, and enhances oxygen delivery to tissues. Examples include running, swimming, cycling, and brisk walking.'
        },
        {
            type: 'tf',
            question: 'Muscle strengthening exercises use resistance to build strength and endurance in muscles.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Muscle strengthening exercises</strong> use resistance (weights, resistance bands, or body weight) to build muscle strength and endurance. Examples include weight lifting, push-ups, and squats.'
        },
        {
            type: 'mcq',
            question: 'Which type of exercise is particularly important for older adults to prevent falls?',
            options: [
                'Aerobic exercise',
                'Balance exercises',
                'Muscle strengthening',
                'Flexibility exercises'
            ],
            correct: 1,
            explanation: '<strong>Balance exercises</strong> are particularly important for older adults to maintain stability and prevent falls. Examples include tai chi, standing on one foot, and heel-to-toe walking. However, muscle strengthening also contributes to fall prevention.'
        },
        {
            type: 'tf',
            question: 'Bone strengthening exercises help increase bone density and reduce the risk of osteoporosis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Bone strengthening (weight-bearing) exercises</strong> create force on bones, stimulating them to become stronger and denser. Examples include jumping, running, and resistance training. These are crucial for preventing osteoporosis.'
        },
        {
            type: 'mcq',
            question: 'Which type of exercise improves range of motion and reduces risk of injury?',
            options: [
                'Aerobic exercise',
                'Muscle strengthening',
                'Flexibility exercises',
                'Balance exercises'
            ],
            correct: 2,
            explanation: '<strong>Flexibility exercises</strong> (stretching) improve range of motion in joints and muscles, reduce stiffness, and can help prevent injuries. Examples include yoga, static stretching, and dynamic stretching.'
        },

        // TOPIC 2: Exercise guidelines/intensity (5 questions)
        {
            type: 'mcq',
            question: 'According to CDC guidelines, how many minutes of moderate-intensity aerobic activity should adults get per week?',
            options: [
                '30 minutes',
                '75 minutes',
                '150 minutes',
                '300 minutes'
            ],
            correct: 2,
            explanation: 'Adults should get at least <strong>150 minutes of moderate-intensity aerobic activity per week</strong> (or 75 minutes of vigorous-intensity), plus muscle-strengthening activities on 2 or more days per week.'
        },
        {
            type: 'tf',
            question: 'During moderate-intensity exercise, you should be able to talk but not sing.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>"talk test"</strong> is a simple way to gauge exercise intensity. During moderate-intensity exercise, you can carry on a conversation but not sing. During vigorous-intensity, you can only speak a few words before needing to catch your breath.'
        },
        {
            type: 'mcq',
            question: 'What does the Borg Rating of Perceived Exertion (RPE) scale measure?',
            options: [
                'Exact heart rate during exercise',
                'Subjective feeling of effort during exercise',
                'Calories burned during exercise',
                'Blood pressure during exercise'
            ],
            correct: 1,
            explanation: 'The Borg RPE scale measures <strong>subjective perception of effort</strong> during exercise, typically on a scale of 6-20 (or 0-10). It helps people monitor exercise intensity based on how hard they feel they\'re working, considering factors like breathing, heart rate, and muscle fatigue.'
        },
        {
            type: 'tf',
            question: 'Frequency refers to how often you exercise, while duration refers to how long each session lasts.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Frequency</strong> is how often you exercise (e.g., 5 days per week), <strong>intensity</strong> is how hard you exercise (moderate or vigorous), and <strong>duration</strong> is how long each session lasts (e.g., 30 minutes).'
        },
        {
            type: 'mcq',
            question: 'What is MET (Metabolic Equivalent of Task)?',
            options: [
                'A measure of muscle strength',
                'A unit that estimates energy expenditure during activities',
                'A type of exercise equipment',
                'A measurement of flexibility'
            ],
            correct: 1,
            explanation: '<strong>MET is a unit that estimates the energy expenditure</strong> of physical activities. One MET equals the energy used at rest. Moderate activities are 3-6 METs (like brisk walking), while vigorous activities are >6 METs (like running).'
        },

        // TOPIC 3: Blood pH regulation (5 questions)
        {
            type: 'mcq',
            question: 'What is the normal pH range for human blood?',
            options: [
                '6.35-6.45',
                '6.85-6.95',
                '7.35-7.45',
                '7.85-7.95'
            ],
            correct: 2,
            explanation: 'Normal blood pH is maintained within a narrow range of <strong>7.35-7.45</strong>. This slightly alkaline pH is essential for proper enzyme function, oxygen delivery, and cellular processes. Even small deviations can be life-threatening.'
        },
        {
            type: 'tf',
            question: 'The pH scale ranges from 0 to 14, with 7 being neutral.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The pH scale measures acidity/alkalinity from <strong>0 (most acidic) to 14 (most alkaline), with 7 being neutral</strong>. Values below 7 are acidic, above 7 are basic (alkaline). Blood is slightly alkaline at ~7.4.'
        },
        {
            type: 'mcq',
            question: 'During intense exercise, what happens to blood pH?',
            options: [
                'It becomes more alkaline',
                'It becomes more acidic due to CO₂ and lactic acid production',
                'It remains unchanged',
                'It fluctuates randomly'
            ],
            correct: 1,
            explanation: 'During intense exercise, blood pH <strong>becomes more acidic</strong> due to increased production of <strong>CO₂ (from cellular respiration) and lactic acid (from anaerobic metabolism)</strong>. The body compensates through increased breathing to expel CO₂ and buffering systems in the blood.'
        },
        {
            type: 'tf',
            question: 'The respiratory system helps regulate blood pH by controlling CO₂ levels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>respiratory system regulates pH by controlling CO₂ elimination</strong>. When blood becomes too acidic, breathing rate increases to expel more CO₂ (which forms carbonic acid in blood). When too alkaline, breathing slows to retain CO₂.'
        },
        {
            type: 'mcq',
            question: 'What is the relationship between CO₂ and blood pH?',
            options: [
                'CO₂ has no effect on pH',
                'High CO₂ makes blood more acidic (lower pH)',
                'High CO₂ makes blood more alkaline (higher pH)',
                'CO₂ only affects blood oxygen, not pH'
            ],
            correct: 1,
            explanation: '<strong>High CO₂ makes blood more acidic</strong> because CO₂ combines with water to form carbonic acid (H₂CO₃), which releases H⁺ ions, lowering pH. This is why increased breathing during exercise (to expel CO₂) helps maintain pH homeostasis.'
        },

        // TOPIC 4: Sleep facts (5 questions)
        {
            type: 'mcq',
            question: 'How many hours of sleep do most teenagers need per night?',
            options: [
                '6-7 hours',
                '7-8 hours',
                '8-10 hours',
                '10-12 hours'
            ],
            correct: 2,
            explanation: 'Teenagers typically need <strong>8-10 hours of sleep per night</strong> for optimal health, learning, and development. Unfortunately, most teens get significantly less due to early school start times and lifestyle factors.'
        },
        {
            type: 'tf',
            question: 'Sleep debt can accumulate over time and cannot be fully recovered with a single night of extended sleep.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Sleep debt accumulates</strong> when you consistently don\'t get enough sleep. While you can partially recover with extra sleep, chronic sleep debt has lasting effects and cannot be fully "made up" with occasional long sleep sessions.'
        },
        {
            type: 'mcq',
            question: 'What is the recommended approach to napping for optimal benefits?',
            options: [
                'Nap for 2-3 hours in the late afternoon',
                'Take short 20-30 minute naps before mid-afternoon',
                'Avoid napping entirely',
                'Nap only right before bedtime'
            ],
            correct: 1,
            explanation: 'For optimal benefits, take <strong>short 20-30 minute naps before mid-afternoon</strong>. This prevents sleep inertia (grogginess), doesn\'t interfere with nighttime sleep, and can improve alertness and performance. Longer or later naps can disrupt nighttime sleep.'
        },
        {
            type: 'tf',
            question: 'Caffeine can remain in your system for 6-8 hours after consumption.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Caffeine has a <strong>half-life of 3-7 hours</strong>, meaning it can affect your system for 6-8 hours or longer. Consuming caffeine in the afternoon or evening can interfere with sleep onset and quality.'
        },
        {
            type: 'mcq',
            question: 'What is "quiet wakefulness" and how does it compare to napping?',
            options: [
                'A meditation technique that provides no rest benefits',
                'A restful state that can provide some benefits similar to napping',
                'A sleep disorder',
                'The same thing as napping'
            ],
            correct: 1,
            explanation: '<strong>Quiet wakefulness</strong> is a restful state where you lie down and relax without actually falling asleep. Research suggests it can provide some restorative benefits and improved alertness, though not as comprehensively as actual sleep.'
        },

        // TOPIC 5: REM sleep/Biological clock/Sleep drive (5 questions)
        {
            type: 'mcq',
            question: 'During which sleep stage does most dreaming occur?',
            options: [
                'Stage 1 (N1)',
                'Stage 2 (N2)',
                'Stage 3 (N3 - deep sleep)',
                'REM sleep'
            ],
            correct: 3,
            explanation: '<strong>Most vivid dreaming occurs during REM sleep</strong>. REM (Rapid Eye Movement) is characterized by rapid eye movements, increased brain activity similar to waking, temporary muscle paralysis, and consolidation of memories and emotions.'
        },
        {
            type: 'tf',
            question: 'The circadian rhythm is controlled by the suprachiasmatic nucleus in the hypothalamus.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>suprachiasmatic nucleus (SCN) in the hypothalamus</strong> acts as the body\'s master clock, regulating circadian rhythms. It receives light information from the eyes and coordinates sleep-wake cycles, hormone release, and body temperature.'
        },
        {
            type: 'mcq',
            question: 'What hormone promotes sleepiness and is released in response to darkness?',
            options: [
                'Cortisol',
                'Adrenaline',
                'Melatonin',
                'Insulin'
            ],
            correct: 2,
            explanation: '<strong>Melatonin</strong> is released by the pineal gland in response to darkness, promoting sleepiness. Light exposure (especially blue light) suppresses melatonin production, which is why screen use before bed can interfere with sleep.'
        },
        {
            type: 'tf',
            question: 'The homeostatic sleep drive increases the longer you are awake.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>homeostatic sleep drive (sleep pressure)</strong> builds up throughout the day as adenosine accumulates in the brain. The longer you\'re awake, the stronger the drive to sleep becomes. Sleep clears adenosine, reducing sleep pressure.'
        },
        {
            type: 'mcq',
            question: 'What is the relationship between cortisol and the circadian rhythm?',
            options: [
                'Cortisol levels remain constant throughout the day',
                'Cortisol peaks in the evening to promote sleep',
                'Cortisol rises in the morning to promote wakefulness',
                'Cortisol has no relationship to sleep-wake cycles'
            ],
            correct: 2,
            explanation: '<strong>Cortisol levels rise in the morning</strong> (cortisol awakening response) to promote wakefulness and alertness. Levels gradually decline throughout the day and are lowest at night. This pattern is part of the circadian rhythm and helps regulate the sleep-wake cycle.'
        },

        // TOPIC 6: Effects of sleep deprivation (5 questions)
        {
            type: 'mcq',
            question: 'Which cognitive function is MOST impaired by sleep deprivation?',
            options: [
                'Long-term memory storage',
                'Attention and concentration',
                'Language skills',
                'Motor coordination'
            ],
            correct: 1,
            explanation: '<strong>Attention and concentration</strong> are among the most affected by sleep deprivation. Even mild sleep loss significantly impairs focus, reaction time, decision-making, and cognitive performance. Memory consolidation and emotional regulation are also heavily impacted.'
        },
        {
            type: 'tf',
            question: 'Chronic sleep deprivation increases the risk of obesity, diabetes, and cardiovascular disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Chronic sleep deprivation disrupts <strong>metabolism, hormone regulation (insulin, leptin, ghrelin), and cardiovascular function</strong>, significantly increasing risk for obesity, type 2 diabetes, hypertension, and heart disease.'
        },
        {
            type: 'mcq',
            question: 'How does sleep deprivation affect the immune system?',
            options: [
                'Strengthens immune response',
                'Has no effect on immunity',
                'Weakens immune function and increases susceptibility to illness',
                'Only affects immunity in children'
            ],
            correct: 2,
            explanation: 'Sleep deprivation <strong>weakens immune function</strong>, reducing production of cytokines, antibodies, and infection-fighting cells. Sleep-deprived people are more susceptible to infections and have slower recovery from illness.'
        },
        {
            type: 'tf',
            question: 'Sleep deprivation can impair driving ability as much as alcohol intoxication.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Being awake for <strong>18-20 hours impairs driving ability equivalent to a blood alcohol level of 0.08%</strong> (legally drunk in most states). Drowsy driving causes thousands of accidents and deaths annually.'
        },
        {
            type: 'mcq',
            question: 'What effect does sleep deprivation have on emotional regulation?',
            options: [
                'Improves emotional stability',
                'Has no effect on emotions',
                'Increases emotional reactivity and reduces ability to regulate emotions',
                'Only affects positive emotions'
            ],
            correct: 2,
            explanation: 'Sleep deprivation <strong>increases emotional reactivity and impairs emotion regulation</strong>. The amygdala (emotion center) becomes hyperactive while the prefrontal cortex (rational control) becomes less effective, leading to mood swings, irritability, anxiety, and poor emotional control.'
        },

        // TOPIC 7: Acute stress response (5 questions)
        {
            type: 'mcq',
            question: 'What is the "fight-or-flight" response?',
            options: [
                'A learned behavior for dealing with stress',
                'An automatic physiological response to perceived threats',
                'A conscious decision-making process',
                'A type of chronic stress'
            ],
            correct: 1,
            explanation: 'The <strong>fight-or-flight response is an automatic physiological response</strong> to perceived threats, preparing the body for action. It\'s mediated by the sympathetic nervous system and involves release of adrenaline and cortisol.'
        },
        {
            type: 'tf',
            question: 'During the acute stress response, the sympathetic nervous system is activated.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>sympathetic nervous system</strong> is activated during acute stress, triggering the release of adrenaline (epinephrine) and noradrenaline. This causes increased heart rate, blood pressure, breathing rate, and energy mobilization.'
        },
        {
            type: 'mcq',
            question: 'Which hormone is rapidly released during the acute stress response?',
            options: [
                'Insulin',
                'Melatonin',
                'Adrenaline (epinephrine)',
                'Growth hormone'
            ],
            correct: 2,
            explanation: '<strong>Adrenaline (epinephrine)</strong> is rapidly released from the adrenal medulla during acute stress. It increases heart rate, blood pressure, and blood glucose, preparing the body for immediate action. Cortisol is released more gradually through the HPA axis.'
        },
        {
            type: 'tf',
            question: 'The HPA axis stands for Hypothalamus-Pituitary-Adrenal axis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>HPA (Hypothalamus-Pituitary-Adrenal) axis</strong> is a major stress response system. The hypothalamus releases CRH, triggering the pituitary to release ACTH, which stimulates the adrenal cortex to release cortisol.'
        },
        {
            type: 'mcq',
            question: 'What physiological changes occur during the acute stress response?',
            options: [
                'Decreased heart rate and lowered blood pressure',
                'Increased digestion and decreased alertness',
                'Increased heart rate, blood pressure, and glucose release',
                'Activation of the parasympathetic nervous system'
            ],
            correct: 2,
            explanation: 'The acute stress response causes: <strong>increased heart rate and blood pressure, faster breathing, glucose release into blood, pupil dilation, increased alertness, and reduced digestion</strong>. These changes prepare the body for "fight or flight."'
        },

        // TOPIC 8: Effects of chronic stress (5 questions)
        {
            type: 'mcq',
            question: 'How does chronic stress differ from acute stress?',
            options: [
                'Chronic stress is always less intense',
                'Chronic stress persists over extended periods and can damage health',
                'Chronic stress only affects mental health',
                'There is no significant difference'
            ],
            correct: 1,
            explanation: '<strong>Chronic stress persists over extended periods</strong> (weeks, months, years) and keeps stress hormones elevated, damaging multiple body systems. Unlike acute stress (which is adaptive and temporary), chronic stress is maladaptive and harmful to health.'
        },
        {
            type: 'tf',
            question: 'Chronic stress can weaken the immune system and increase susceptibility to illness.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Prolonged elevation of <strong>cortisol suppresses immune function</strong>, reducing production of lymphocytes and antibodies. This increases vulnerability to infections, slows wound healing, and may increase cancer risk.'
        },
        {
            type: 'mcq',
            question: 'What cardiovascular effects can result from chronic stress?',
            options: [
                'Lower blood pressure and reduced heart rate',
                'Stronger, healthier blood vessels',
                'Increased risk of hypertension, atherosclerosis, and heart disease',
                'No significant cardiovascular effects'
            ],
            correct: 2,
            explanation: 'Chronic stress causes <strong>persistent elevation of blood pressure, increased inflammation, and atherosclerosis</strong> (plaque buildup), significantly increasing risk for hypertension, heart attack, and stroke. Cortisol and inflammatory markers damage blood vessels.'
        },
        {
            type: 'tf',
            question: 'Chronic stress can negatively affect mental health, contributing to anxiety and depression.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Chronic stress is strongly linked to <strong>anxiety disorders, depression, and other mental health conditions</strong>. Prolonged cortisol elevation affects brain structure (particularly the hippocampus and prefrontal cortex) and neurotransmitter function.'
        },
        {
            type: 'mcq',
            question: 'How does chronic stress affect metabolism and weight?',
            options: [
                'It always causes weight loss',
                'It has no effect on metabolism',
                'It can promote weight gain, particularly abdominal fat',
                'It improves metabolic health'
            ],
            correct: 2,
            explanation: 'Chronic stress <strong>promotes weight gain, particularly visceral (abdominal) fat</strong>. Cortisol increases appetite (especially for high-calorie foods), promotes fat storage, and can lead to insulin resistance. Stress-related behaviors (poor sleep, less exercise) also contribute.'
        },

        // TOPIC 9: Weathering, ACEs, trauma, PTSD (5 questions)
        {
            type: 'mcq',
            question: 'What is "weathering" in the context of health?',
            options: [
                'The normal aging process',
                'Accelerated health deterioration due to chronic social and environmental stress',
                'A type of skin condition',
                'The effect of climate on health'
            ],
            correct: 1,
            explanation: '<strong>Weathering refers to accelerated health deterioration</strong> caused by cumulative exposure to social, economic, and environmental stressors. It particularly affects marginalized communities experiencing discrimination, poverty, and chronic stress, leading to premature aging and disease.'
        },
        {
            type: 'tf',
            question: 'Adverse Childhood Experiences (ACEs) can have long-lasting effects on physical and mental health.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>ACEs (trauma experienced before age 18)</strong> have profound, lasting effects on health. Higher ACE scores correlate with increased risk for chronic diseases, mental health disorders, substance abuse, and early death. Toxic stress during development affects brain structure and stress response systems.'
        },
        {
            type: 'mcq',
            question: 'Which of the following is an example of an Adverse Childhood Experience (ACE)?',
            options: [
                'Getting a poor grade on a test',
                'Experiencing physical, emotional, or sexual abuse',
                'Moving to a new school',
                'Having a strict teacher'
            ],
            correct: 1,
            explanation: 'ACEs include: <strong>physical, emotional, or sexual abuse; neglect; household dysfunction (domestic violence, substance abuse, mental illness, parental separation, incarceration)</strong>. These traumatic experiences during development have lasting impacts on health and well-being.'
        },
        {
            type: 'tf',
            question: 'PTSD (Post-Traumatic Stress Disorder) can only develop after combat experiences.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While combat is one cause, <strong>PTSD can develop after any traumatic event</strong>: assault, accidents, natural disasters, abuse, witnessing violence, or other life-threatening situations. It involves intrusive memories, avoidance, hyperarousal, and negative changes in mood/thinking.'
        },
        {
            type: 'mcq',
            question: 'How do ACEs affect the developing brain?',
            options: [
                'They have no effect on brain development',
                'They can alter brain structure and stress response systems',
                'They only affect motor skills',
                'They improve resilience'
            ],
            correct: 1,
            explanation: 'ACEs can <strong>alter brain development and stress response systems</strong>. Toxic stress affects the developing hippocampus (memory), amygdala (emotion), and prefrontal cortex (executive function). The HPA axis becomes dysregulated, leading to heightened stress reactivity and increased health risks throughout life.'
        },

        // TOPIC 10: Healthcare pillar (5 questions)
        {
            type: 'mcq',
            question: 'What is universal health care?',
            options: [
                'Healthcare only for citizens',
                'A system where all residents have access to healthcare services',
                'Healthcare only for wealthy individuals',
                'Private insurance companies'
            ],
            correct: 1,
            explanation: '<strong>Universal health care</strong> is a system where <strong>all residents have access to healthcare services</strong> without financial hardship. It can be achieved through various models: single-payer systems, socialized medicine, or mandated insurance with subsidies.'
        },
        {
            type: 'tf',
            question: 'The United States currently has a universal healthcare system.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The U.S. does NOT have universal healthcare. While the Affordable Care Act expanded coverage, <strong>millions remain uninsured</strong>, and healthcare access varies greatly. The U.S. relies primarily on private insurance and employer-based coverage.'
        },
        {
            type: 'mcq',
            question: 'What is a single-payer healthcare system?',
            options: [
                'A system where each person pays for their own healthcare',
                'A system where one entity (typically the government) pays for healthcare',
                'A system where only private insurance exists',
                'A system with no government involvement'
            ],
            correct: 1,
            explanation: 'In a <strong>single-payer system, one entity (usually the government) pays for healthcare</strong> for all residents, funded through taxes. Providers may be public or private. Examples include Medicare in the U.S. (for seniors) and Canada\'s system. It eliminates most private insurance administrative costs.'
        },
        {
            type: 'tf',
            question: 'The Affordable Care Act (ACA) prohibited insurance companies from denying coverage based on pre-existing conditions.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A major provision of the ACA <strong>prohibited denial of coverage or charging higher premiums based on pre-existing conditions</strong>. It also allowed young adults to stay on parents\' insurance until age 26 and expanded Medicaid in participating states.'
        },
        {
            type: 'mcq',
            question: 'Which healthcare model typically has the government owning hospitals and employing healthcare workers?',
            options: [
                'Private insurance model',
                'Single-payer model',
                'Socialized medicine',
                'Out-of-pocket payment model'
            ],
            correct: 2,
            explanation: 'In <strong>socialized medicine</strong>, the <strong>government owns hospitals and employs healthcare workers</strong>, providing care directly (like the UK\'s NHS or the U.S. Veterans Health Administration). This differs from single-payer systems where the government pays but providers remain independent.'
        }
    ]
};

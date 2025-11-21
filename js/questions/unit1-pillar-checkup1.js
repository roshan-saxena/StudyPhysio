// PILLAR CHECKUP 1 TRUE/FALSE QUESTIONS
// 50 questions (5 questions per topic)
// Each question includes: type, topic, question, correct, explanation

const pillarCheckup1Questions = {
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
    ]
};

// PILLAR CHECKUP 2 TRUE/FALSE QUESTIONS
// 50 questions (5 questions per topic)
// Each question includes: type, topic, question, correct, explanation

const pillarCheckup2Questions = {
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

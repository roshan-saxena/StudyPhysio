// UNIT 1: PILLAR CHECKUP 2 - COMPLETE HARDER/TRICKIER QUESTION BANK
// 50 True/False Questions (5 per topic × 10 topics)
// Distribution: 25 True / 25 False
// Challenge conceptual understanding with real misconceptions, not semantic tricks

const pillarCheckup2Questions = {
    'unit1-pillar-checkup2': [

        // ==========================================
        // TOPIC 1: TYPES OF EXERCISE (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Types of Exercise',
            question: 'Aerobic exercise strengthens the heart and improves cardiovascular endurance, but it does not build muscle strength or bone density like resistance training does.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Aerobic and resistance training have different adaptations</strong>. Aerobic exercise: strengthens heart muscle, improves oxygen delivery, builds muscular endurance. Resistance training: builds muscle mass, increases bone density, develops strength. <strong>You cannot fully replace one with the other.</strong> Comprehensive fitness requires both types for complete health benefits.'
        },
        {
            type: 'tf',
            topic: 'Types of Exercise',
            question: 'Flexibility exercises like yoga and stretching improve range of motion and can help prevent injuries by maintaining muscle elasticity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Flexibility training maintains and increases joint range of motion</strong>. Benefits: reduced muscle stiffness, lower injury risk (tight muscles are injury-prone), improved posture, reduced chronic pain. Regular stretching prevents the gradual loss of flexibility that comes with aging and sedentary behavior. <strong>This is why flexibility is a separate pillar from strength and endurance.</strong>'
        },
        {
            type: 'tf',
            topic: 'Types of Exercise',
            question: 'Balance exercises are only important for elderly adults to prevent falls; younger adults do not need balance training because they naturally maintain good balance.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Balance training is important across all ages</strong>, not just elderly. Young people can improve athletic performance, prevent ankle injuries, and enhance proprioception through balance work. Age-related balance decline happens gradually throughout life, not suddenly. <strong>Starting balance training young prevents falls later</strong> and improves overall coordination and sports performance now.'
        },
        {
            type: 'tf',
            topic: 'Types of Exercise',
            question: 'Bone-strengthening exercises like running and jumping create stress on bones that stimulates bone cells to build stronger, denser bone tissue.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Weight-bearing and impact activities trigger bone adaptation</strong>. When bones experience mechanical stress, osteoblasts (bone-building cells) respond by increasing bone density. This is especially important during childhood and teen years when peak bone mass is built, and again in adulthood to prevent osteoporosis. <strong>Bones strengthen through use, atrophy from disuse.</strong>'
        },
        {
            type: 'tf',
            topic: 'Types of Exercise',
            question: 'Someone who runs 30 minutes daily but never does resistance or flexibility training has achieved comprehensive fitness covering all the major exercise types.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Running alone is <strong>primarily aerobic exercise</strong>, building cardiovascular fitness but not muscle strength or bone density (impact helps bone somewhat). <strong>Missing: resistance training (strength), flexibility work (range of motion), balance work</strong>. Comprehensive fitness requires all types. Someone who only runs is fit in one dimension but has gaps in other critical health domains.'
        },

        // ==========================================
        // TOPIC 2: EXERCISE GUIDELINES/INTENSITY (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Exercise Guidelines',
            question: 'During moderate-intensity exercise, the "talk test" indicates appropriate effort because you can speak but cannot sing, showing your cardiovascular system is working hard but you are not overexerting.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>talk test is a practical intensity gauge</strong>. At moderate intensity: breathing is elevated (harder to talk continuously) but not maximal (can still form sentences). This indicates optimal cardiovascular challenge without unsustainable effort. <strong>It\'s accessible without heart rate monitors</strong> and matches research definitions of moderate intensity. This makes intensity self-management practical for everyone.'
        },
        {
            type: 'tf',
            topic: 'Exercise Guidelines',
            question: 'Adults can meet muscle-strengthening guidelines by training the same muscle groups on consecutive days because recovery matters only after vigorous aerobic exercise.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Muscle-strengthening guidelines include recovery time because challenged muscle groups need time to repair and adapt. Different muscle groups may be trained on consecutive days, but repeatedly loading the same groups without recovery is not equivalent. <strong>The misconception is assigning recovery needs only to aerobic exercise.</strong>'
        },
        {
            type: 'tf',
            topic: 'Exercise Guidelines',
            question: 'The Borg Rating of Perceived Exertion measures your subjective feeling of how hard you are working, making it less accurate than measuring your actual heart rate.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>RPE is surprisingly accurate despite being subjective</strong>. Your body\'s sensing of effort (breathing, fatigue, sweating) correlates well with actual physiological work. RPE is practical (no equipment needed), personalizes to individual fitness level (same heart rate feels different to trained vs untrained), and is what research shows predicts training effect. <strong>It\'s not "less accurate"—it\'s differently useful.</strong>'
        },
        {
            type: 'tf',
            topic: 'Exercise Guidelines',
            question: 'A MET (Metabolic Equivalent of Task) measures energy expenditure, so a 6-MET activity uses six times more energy than sitting at rest.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>One MET equals resting energy expenditure (sitting quietly)</strong>. So 6 METs means burning 6 times that amount. Examples: moderate walking = 3-4 METs, vigorous jogging = 8+ METs. <strong>METs provide a standardized way to compare activity intensity</strong> across different people and exercises. This helps people understand how different activities compare in energy demand.'
        },
        {
            type: 'tf',
            topic: 'Exercise Guidelines',
            question: 'If someone has been sedentary for years, they can safely jump immediately into vigorous-intensity exercise if they follow the talk test to measure intensity.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The <strong>talk test measures intensity, but doesn\'t assess readiness for vigorous exercise after prolonged inactivity</strong>. Sedentary people need gradual progression to prevent injury and cardiac stress. They should start with moderate intensity, build fitness base first, then progress to vigorous. <strong>The talk test is a tool for intensity within appropriate training levels, not a safety assessment for readiness.</strong>'
        },

        // ==========================================
        // TOPIC 3: BLOOD pH REGULATION (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Blood pH Regulation',
            question: 'Normal blood pH is tightly maintained between 7.35-7.45 because even small deviations can impair enzyme function and disrupt cellular processes.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>pH controls enzyme activity and protein structure</strong>. Acidosis (below 7.35) and alkalosis (above 7.45) both cause dysfunction: confusion, seizures, dangerous heart rhythms. Enzymes only work in narrow pH ranges. <strong>This tight regulation is why respiratory and renal systems constantly adjust</strong>. Even 0.3 pH change is dangerous; 1.0 unit change is typically fatal.'
        },
        {
            type: 'tf',
            topic: 'Blood pH Regulation',
            question: 'On the pH scale, a value of 7 is neutral, values below 7 are acidic, and values above 7 are basic (alkaline), with blood normally being slightly alkaline at 7.4.',
            correct: true,
            explanation: 'This is <strong>true</strong>. This correctly defines the pH scale and blood\'s normal state. <strong>Blood is slightly alkaline, not neutral</strong>. This alkaline environment is optimal for enzyme function and physiological processes. The body works hard to maintain this slightly alkaline state despite metabolic processes constantly producing acid (CO₂, lactic acid). Understanding blood is naturally alkaline matters for interpreting acid-base disorders.'
        },
        {
            type: 'tf',
            topic: 'Blood pH Regulation',
            question: 'During intense exercise, muscles produce both CO₂ from cellular respiration and lactic acid from anaerobic metabolism, both of which lower blood pH.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Both are acidifying</strong>. CO₂ dissolves to form carbonic acid (H₂CO₃). Lactic acid directly lowers pH. During intense exercise, both accumulate faster than they can be removed, causing temporary acidosis. <strong>This is why the body increases ventilation during exercise</strong>—to expel excess CO₂ quickly and restore pH. Understanding both mechanisms explains the respiratory response to exercise.'
        },
        {
            type: 'tf',
            topic: 'Blood pH Regulation',
            question: 'The respiratory system regulates blood pH by controlling the amount of oxygen delivered to tissues.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The respiratory system regulates pH by <strong>controlling CO₂ levels, not oxygen delivery</strong>. CO₂ dissolves to form carbonic acid affecting pH directly. Faster breathing expels more CO₂ (raising pH), slower breathing retains CO₂ (lowering pH). <strong>This is independent of oxygen delivery</strong>. The lungs regulate acid-base balance through CO₂ management, not O₂ management.'
        },
        {
            type: 'tf',
            topic: 'Blood pH Regulation',
            question: 'When CO₂ makes blood too acidic, the kidneys provide the first correction within seconds, while the lungs take hours to days to change blood pH.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The timing is reversed. The lungs can change CO₂ levels within seconds to minutes, whereas the kidneys provide slower, sustained regulation by altering acid excretion and reabsorption over hours to days. <strong>Both systems contribute, but rapid respiratory regulation should not be confused with slower renal regulation.</strong>'
        },

        // ==========================================
        // TOPIC 4: SLEEP FACTS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Most teenagers need 8-10 hours of sleep per night for optimal cognitive function, physical development, and mood regulation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Adolescents have high sleep needs</strong> because their brains and bodies are developing, and sleep is when growth hormone is released. During puberty, cognition, emotional regulation, and immune function all depend on adequate sleep. Research shows clear deficits in attention, mood, and grades when teens get less than 8 hours. <strong>Teen sleep deprivation is a documented problem affecting academic and social functioning.</strong>'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'While sleep debt from a single night of lost sleep can be partially recovered with extended sleep later, chronic sleep deprivation effects persist even after catching up on weekends.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>One night of recovery helps but doesn\'t fully reverse chronic deprivation</strong>. Brain damage from persistent sleep loss (hippocampus shrinking, cognitive decline) doesn\'t recover from weekend sleep-ins. Additionally, irregular sleep patterns (sleeping late on weekends) disrupt circadian rhythms, actually worsening sleep quality. <strong>"Catching up" on sleep is different from maintaining adequate regular sleep.</strong>'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'A 20-30 minute afternoon nap generally produces more sleep inertia than a long nap because short naps enter deep sleep more quickly.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Brief, appropriately timed naps can improve alertness while reducing the chance of entering the deeper sleep associated with pronounced sleep inertia. Longer naps are more likely to reach deep sleep. <strong>The misconception reverses how nap duration relates to sleep depth and post-nap grogginess.</strong>'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Caffeine is completely eliminated from the body within a few hours, so coffee or tea consumed in the afternoon will not affect nighttime sleep.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Caffeine has a half-life of 3-7 hours</strong>, meaning it remains active much longer than people realize. Afternoon coffee (say 2 PM) still has 50% of caffeine at 5-9 PM, affecting sleep onset and quality. <strong>Even amounts below conscious perception can disrupt sleep measurably.</strong> This is why sleep hygiene recommends no caffeine after early afternoon. Understanding caffeine persistence explains sleep problems many people have.'
        },
        {
            type: 'tf',
            topic: 'Sleep Facts',
            question: 'Quiet wakefulness—lying down and relaxing without trying to sleep—provides most of the same restorative benefits as actual sleep.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While quiet wakefulness is relaxing and reduces stress, <strong>it does not provide the physiological benefits of actual sleep</strong>. Sleep involves specific stages (REM, deep sleep) with unique functions: memory consolidation, glymphatic system cleanup, hormone regulation. <strong>Lying in bed quietly does not trigger these processes.</strong> Rest and sleep are related but distinct physiological states with different outcomes.'
        },

        // ==========================================
        // TOPIC 5: REM SLEEP/BIOLOGICAL CLOCK/SLEEP DRIVE (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'REM Sleep/Biological Clock',
            question: 'Most vivid dreams occur during REM (Rapid Eye Movement) sleep, which is also when memory consolidation for emotional and procedural learning happens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>REM sleep has multiple critical functions</strong>: vivid dreams, muscle atonia (temporary paralysis), memory consolidation for skills and emotional processing. Dream content (vivid, emotional, story-like) reflects REM brain state. Missing REM sleep affects emotional regulation and skill learning. <strong>This is why REM rebound occurs after deprivation—the brain compensates for missed REM.</strong>'
        },
        {
            type: 'tf',
            topic: 'REM Sleep/Biological Clock',
            question: 'The suprachiasmatic nucleus coordinates circadian rhythms by producing melatonin itself whenever retinal light signals reach the hypothalamus.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The SCN receives light information and coordinates circadian timing, but melatonin is released by the pineal gland under that regulatory system. <strong>Coordinating a hormone\'s release is not the same as producing the hormone.</strong> This distinction connects the master clock to, rather than merges it with, its downstream signal.'
        },
        {
            type: 'tf',
            topic: 'REM Sleep/Biological Clock',
            question: 'Melatonin is released in response to darkness and promotes sleepiness, so bright blue light from screens suppresses melatonin by signaling the brain that it is daytime.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Light wavelength matters—blue light especially suppresses melatonin</strong>. The retina has specialized photosensitive cells (intrinsically photosensitive retinal ganglion cells) that sense blue light specifically and signal the SCN. Screens emit blue light, tricking the brain into "it\'s daytime, stay alert" even at night. <strong>This is a biological mechanism, not just a behavior problem.</strong> Screen filters or avoiding screens 1-2 hours before bed helps.'
        },
        {
            type: 'tf',
            topic: 'REM Sleep/Biological Clock',
            question: 'Because cortisol promotes wakefulness, it normally remains near its morning peak throughout the day and falls only after sleep has begun.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Cortisol normally peaks around waking and then declines across the day, reaching low levels at night that support sleep. It does not remain near its morning peak until sleep begins. <strong>The misconception treats a wake-promoting hormone as an on/off switch rather than a circadian signal that changes gradually.</strong>'
        },
        {
            type: 'tf',
            topic: 'REM Sleep/Biological Clock',
            question: 'The homeostatic sleep drive increases continuously the longer a person stays awake, creating sleep pressure that builds throughout the day and night.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Adenosine accumulates in the brain during waking and creates "sleep pressure"</strong>. Longer wake periods = more adenosine = stronger drive to sleep. This is why alertness decreases as the day progresses and why sleep becomes irresistible after very long wake periods. <strong>This interacts with circadian rhythms</strong>: maximum sleep drive is late night (high adenosine + low cortisol + high melatonin).'
        },

        // ==========================================
        // TOPIC 6: EFFECTS OF SLEEP DEPRIVATION (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Effects of Sleep Deprivation',
            question: 'Sleep deprivation significantly impairs attention, concentration, and reaction time even after just one night of insufficient sleep.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Even mild sleep loss causes measurable cognitive decline</strong>. After one night of poor sleep: attention drops, reaction time slows, mistakes increase. This is why drowsy driving is dangerous—it\'s comparable to drunk driving. <strong>These deficits accumulate with chronic deprivation.</strong> Understanding this explains why prioritizing sleep matters for work, school, and safety.'
        },
        {
            type: 'tf',
            topic: 'Effects of Sleep Deprivation',
            question: 'The metabolic risks associated with chronic sleep deprivation come only from having more time to eat; disrupted sleep does not itself affect appetite hormones or insulin sensitivity.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Extra opportunities to eat can matter, but sleep loss also disrupts appetite regulation, insulin sensitivity, and inflammation. Those physiological effects help connect chronic sleep deprivation with obesity, type 2 diabetes, and cardiovascular disease. <strong>The misconception reduces a hormonal and metabolic problem to behavior alone.</strong>'
        },
        {
            type: 'tf',
            topic: 'Effects of Sleep Deprivation',
            question: 'Sleep deprivation weakens immune function by reducing production of infection-fighting cells and antibodies, making sleep-deprived people more susceptible to illness.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Sleep is when the immune system consolidates and produces immune cells</strong>. Sleep loss: reduces T cells and B cells production, decreases antibody levels, impairs natural killer cell function. Sleep-deprived people catch colds more often and recover more slowly. <strong>Sleep deprivation is immunosuppressive—weakening the defense against infection.</strong>'
        },
        {
            type: 'tf',
            topic: 'Effects of Sleep Deprivation',
            question: 'After 18-20 hours awake, drivers can reliably overcome impaired reaction time by rating their own alertness before driving, unlike alcohol-related impairment.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Extended wakefulness can impair attention, judgment, and reaction time at levels comparable to alcohol impairment, and subjective confidence does not reliably restore those abilities. <strong>Feeling capable is not a physiological countermeasure to sleep loss.</strong> The statement underestimates drowsy-driving risk by treating self-assessment as compensation.'
        },
        {
            type: 'tf',
            topic: 'Effects of Sleep Deprivation',
            question: 'Sleep deprivation has no significant effect on emotional regulation, so sleep-deprived people should function normally emotionally despite feeling tired.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Sleep deprivation <strong>severely impairs emotional regulation</strong>. The amygdala (emotion processing) becomes hyperactive while the prefrontal cortex (emotional control) weakens. Results: mood swings, irritability, anxiety, poor frustration tolerance, emotional overreaction to minor stressors. <strong>People become emotionally reactive and struggle to regulate feelings.</strong> This explains road rage, family conflicts, and workplace problems in sleep-deprived people.'
        },

        // ==========================================
        // TOPIC 7: ACUTE STRESS RESPONSE (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'The "fight-or-flight" response is an automatic physiological reaction where the sympathetic nervous system activates to prepare the body for immediate action during perceived threats.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>This is the foundational survival mechanism</strong>. Sympathetic activation causes: heart rate increase, blood pressure rise, glucose mobilization, airways opening, digestion suppression, focus sharpening. <strong>This response evolved to handle physical threats (predators, attackers)</strong> and remains adaptive for genuine emergencies. The problem is chronic activation to non-threats.'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'During acute stress, the parasympathetic nervous system is activated to slow heart rate and promote relaxation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. During acute stress, the <strong>sympathetic nervous system is activated</strong> (fight-or-flight). The <strong>parasympathetic system activates during rest and recovery</strong> (rest-and-digest). These systems work in opposition: sympathetic speeds everything up, parasympathetic slows it down. <strong>Confusing which system is active during stress is a fundamental misunderstanding.</strong>'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'Adrenaline (epinephrine) is rapidly released from the adrenal medulla during acute stress, quickly increasing heart rate, blood pressure, and glucose availability for immediate action.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Adrenaline provides immediate response within seconds</strong>. Released directly into bloodstream, it circulates and acts rapidly on target tissues. This is distinct from cortisol, which is released slower via the HPA axis and acts over minutes-hours. <strong>Adrenaline = rapid emergency response; cortisol = sustained stress response.</strong> Understanding this distinction explains acute vs chronic stress effects.'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'The HPA axis (Hypothalamus-Pituitary-Adrenal axis) coordinates the slower, sustained stress response through hormone release.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>HPA axis provides slower but sustained response</strong>: hypothalamus releases CRH → pituitary releases ACTH → adrenal cortex releases cortisol. This takes minutes compared to adrenaline\'s seconds. <strong>Both systems work together: adrenaline handles immediate crisis, HPA axis sustains response if threat persists.</strong> Understanding both explains the progression from acute to chronic stress.'
        },
        {
            type: 'tf',
            topic: 'Acute Stress Response',
            question: 'Repeated activation of the acute stress response by non-threats remains beneficial as long as each episode raises heart rate, blood pressure, and glucose only temporarily.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Temporary mobilization is useful during genuine emergencies, but repeated activation without a real physical need creates cumulative wear even when individual episodes end. <strong>The misconception assumes that recovery after each episode erases the effects of frequent stress activation.</strong> Frequency and context help determine whether the response is adaptive or harmful.'
        },

        // ==========================================
        // TOPIC 8: EFFECTS OF CHRONIC STRESS (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Chronic Stress',
            question: 'Chronic stress persists over weeks to years and keeps stress hormones like cortisol elevated, causing damage that is qualitatively different from beneficial acute stress.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Chronic stress is pathological; acute stress is adaptive</strong>. Persistent cortisol elevation: suppresses immune cells, increases inflammation, damages the hippocampus (memory shrinking), raises blood pressure, increases atherosclerosis risk. <strong>The same hormone that helps in acute crisis damages the body when persistently elevated.</strong> Duration and recovery are what distinguish helpful from harmful stress.'
        },
        {
            type: 'tf',
            topic: 'Chronic Stress',
            question: 'Chronic stress strengthens the immune system over time because persistent stress hormone elevation maintains elevated alertness.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Chronic stress weakens, not strengthens, immune function</strong>. Prolonged cortisol elevation suppresses: lymphocyte production, antibody formation, inflammation-controlling cytokines. <strong>Result: increased susceptibility to infections, slower wound healing, increased cancer risk.</strong> The confusion might come from acute stress temporarily boosting immune response, but chronic stress reverses this. Understanding the dose-response relationship is key.'
        },
        {
            type: 'tf',
            topic: 'Chronic Stress',
            question: 'Chronic stress increases blood pressure and promotes atherosclerosis (artery clogging) by increasing inflammation and causing the body to retain sodium and water.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Multiple mechanisms link chronic stress to cardiovascular disease</strong>: cortisol and adrenaline increase blood pressure directly, stress hormones promote inflammation (atherosclerosis foundation), cortisol causes sodium/water retention (volume expansion), stress increases visceral fat (inflammatory). <strong>These converge to damage cardiovascular health.</strong> This explains why chronic stress is a documented cardiovascular disease risk factor.'
        },
        {
            type: 'tf',
            topic: 'Chronic Stress',
            question: 'Chronic stress has no direct connection to mental health conditions like anxiety and depression; these conditions are purely biological or purely environmental problems.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Chronic stress directly contributes to anxiety and depression</strong>. Mechanisms: persistent cortisol disrupts neurotransmitters (serotonin, dopamine), damages prefrontal cortex (emotional control), activates amygdala (anxiety center), alters brain structure (hippocampus shrinking affects mood). <strong>Chronic stress isn\'t just a risk factor—it\'s a biological pathway to mental health problems.</strong> This explains why stress management is mental health treatment.'
        },
        {
            type: 'tf',
            topic: 'Chronic Stress',
            question: 'Because cortisol can mobilize energy during acute stress, persistently elevated cortisol generally prevents visceral fat accumulation even when it increases appetite.',
            correct: false,
            explanation: 'This is <strong>false</strong>. An acute energy-mobilizing role does not mean chronic cortisol elevation prevents fat storage. Chronic stress can increase appetite, impair metabolic regulation, and promote visceral fat accumulation. <strong>The misconception applies a short-term stress effect to prolonged exposure without considering how duration changes the outcome.</strong>'
        },

        // ==========================================
        // TOPIC 9: WEATHERING/ACEs/TRAUMA/PTSD (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Weathering, ACEs, Trauma, PTSD',
            question: 'Weathering refers to accelerated biological aging and health deterioration from cumulative exposure to chronic social and environmental stressors, particularly affecting marginalized communities.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Weathering describes how social determinants become biological burden</strong>. Marginalized communities face compounded stressors: discrimination (chronic psychological stress), environmental pollution (chemical stress), poverty (resource scarcity stress), neighborhood violence (threat stress). <strong>These stack over time, accelerating aging and disease.</strong> This explains health disparities better than genetics or individual choices alone.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, Trauma, PTSD',
            question: 'Adverse Childhood Experiences (ACEs) like trauma, abuse, and household dysfunction during childhood have long-lasting effects on both physical and mental health into adulthood.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Childhood trauma "gets under the skin" through multiple pathways</strong>. ACEs affect: stress response system development (hyperreactivity), brain structure (reduced hippocampus/prefrontal cortex), inflammation markers (elevated throughout life), health behaviors (smoking, overeating). <strong>Higher ACE scores predict chronic disease, mental illness, and early death.</strong> This explains why childhood adversity is a major health determinant.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, Trauma, PTSD',
            question: 'Examples of Adverse Childhood Experiences (ACEs) include only physical and sexual abuse, not emotional neglect or witnessing parental conflict.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>ACEs include diverse forms of childhood adversity</strong>: physical/sexual/emotional abuse, physical/emotional neglect, AND household dysfunction (parental divorce, substance abuse, mental illness, incarceration, domestic violence). <strong>All types affect developing children\'s stress systems and brain architecture.</strong> Narrow definitions miss important sources of childhood trauma. Understanding the full range matters for identifying affected individuals.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, Trauma, PTSD',
            question: 'PTSD (Post-Traumatic Stress Disorder) can develop after any sufficiently severe or prolonged traumatic event, not only combat experience.',
            correct: true,
            explanation: 'This is <strong>true</strong>. While combat is a recognized cause, <strong>PTSD can follow any trauma</strong>: sexual assault, accidents, natural disasters, abuse, witnessing violence, medical trauma. <strong>The key is the traumatic event\'s severity and individual\'s reaction, not the specific event type.</strong> Expanding understanding beyond "combat PTSD" helps clinicians identify and treat PTSD in broader populations.'
        },
        {
            type: 'tf',
            topic: 'Weathering, ACEs, Trauma, PTSD',
            question: 'ACEs may heighten HPA-axis reactivity during childhood, but the stress-response system automatically returns to a typical pattern in adulthood once the original adversity has ended.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Adversity during development can produce lasting changes in stress reactivity and brain development that persist after the original circumstances end. Improvement is possible, but it is not an automatic consequence of reaching adulthood. <strong>The misconception confuses removal of a stressor with immediate reversal of its developmental effects.</strong>'
        },

        // ==========================================
        // TOPIC 10: HEALTHCARE PILLAR (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Healthcare Pillar',
            question: 'Universal healthcare means all residents have access to healthcare services without facing financial hardship, though different healthcare systems deliver this access differently.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Universal healthcare is about access equity, not about one specific system design</strong>. Different countries achieve universal access through: single-payer systems (Canada, Medicare), socialized medicine (UK NHS), mandated insurance (Germany), mixed models. <strong>All remove financial barriers to care.</strong> The defining feature is no one goes without healthcare due to cost, not that all systems are identical.'
        },
        {
            type: 'tf',
            topic: 'Healthcare Pillar',
            question: 'The United States currently has universal healthcare covering all residents without financial hardship.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The U.S. does NOT have universal healthcare. Despite the Affordable Care Act expanding coverage, <strong>millions remain uninsured</strong>, and many underinsured face financial hardship for healthcare. The U.S. relies on private/employer-based insurance, creating coverage gaps. <strong>Healthcare access in the U.S. depends largely on employment and income.</strong> This is why medical debt is the leading cause of personal bankruptcy in America.'
        },
        {
            type: 'tf',
            topic: 'Healthcare Pillar',
            question: 'In a single-payer system, the government (as sole payer) funds healthcare for all residents through taxation, while providers may remain private or be publicly employed.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Single-payer = one funding source (government), not necessarily one provider</strong>. Examples: Medicare (U.S. government pays, private providers deliver), Canadian provincial plans (government pays, mixed public/private providers). <strong>This differs from socialized medicine (government owns hospitals AND employs providers).</strong> Understanding this distinction clarifies how different universal systems organize healthcare delivery.'
        },
        {
            type: 'tf',
            topic: 'Healthcare Pillar',
            question: 'The Affordable Care Act stopped insurers from denying coverage for pre-existing conditions but still allowed premiums to be increased solely because an applicant already had an illness.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The protection addressed both denial of coverage and health-based premium increases tied solely to pre-existing conditions. <strong>Access would remain severely restricted if insurers had to offer a plan but could price it according to an applicant\'s illness.</strong> The misconception separates two connected parts of the same coverage protection.'
        },
        {
            type: 'tf',
            topic: 'Healthcare Pillar',
            question: 'A healthcare system is socialized medicine whenever government funds care, even if hospitals remain privately owned and healthcare workers are privately employed.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Government financing alone can describe a single-payer arrangement. Socialized medicine additionally involves government ownership of facilities and direct employment of healthcare workers. <strong>The misconception collapses who pays for care and who owns or delivers care into the same feature.</strong>'
        }
    ]
};

// Unit 4: Your Brain on Drugs - Complete Question Bank (REVISED)
// 50 True/False Questions: 10 Topics × 5 Questions per Topic
// Distribution: 25 True / 25 False

const unit4BrainOnDrugsCheckup = {
    'unit4-brain-on-drugs-checkup': [

        // Topic 1: Nervous System Organization (5 questions: 3 True / 2 False)
        {
            type: 'tf',
            topic: 'Nervous System Organization',
            question: 'The central nervous system consists of the brain and spinal cord.',
            correct: true,
            explanation: 'This is true. The CNS is composed of the brain and spinal cord, which integrate sensory information and coordinate responses.'
        },
        {
            type: 'tf',
            topic: 'Nervous System Organization',
            question: 'The peripheral nervous system includes all nerves outside the brain and spinal cord.',
            correct: true,
            explanation: 'This is true. The PNS connects the CNS to limbs and organs, transmitting sensory and motor information.'
        },
        {
            type: 'tf',
            topic: 'Nervous System Organization',
            question: 'The somatic nervous system controls involuntary functions like heart rate and digestion.',
            correct: false,
            explanation: 'This is false. The somatic nervous system controls voluntary movements (skeletal muscles). Involuntary functions are controlled by the autonomic nervous system.'
        },
        {
            type: 'tf',
            topic: 'Nervous System Organization',
            question: 'The parasympathetic nervous system is responsible for the "fight or flight" response.',
            correct: false,
            explanation: 'This is false. The sympathetic nervous system triggers "fight or flight" responses. The parasympathetic system promotes "rest and digest" activities.'
        },
        {
            type: 'tf',
            topic: 'Nervous System Organization',
            question: 'Neurons transmit electrical impulses and communicate via chemical signals at synapses.',
            correct: true,
            explanation: 'This is true. Neurons use electrical impulses (action potentials) for rapid signaling within the cell and chemical neurotransmitters to communicate across synapses.'
        },

        // Topic 2: Brain Structure & Function (5 questions: 3 True / 2 False)
        {
            type: 'tf',
            topic: 'Brain Structure & Function',
            question: 'The cerebral cortex is the outermost layer of the brain and is responsible for higher-order thinking.',
            correct: true,
            explanation: 'This is true. The cerebral cortex handles complex functions like reasoning, language, and decision-making.'
        },
        {
            type: 'tf',
            topic: 'Brain Structure & Function',
            question: 'The brainstem regulates breathing and heart rate, but consciousness depends entirely on the cerebral cortex, so brainstem damage cannot affect wakefulness.',
            correct: false,
            explanation: 'This is false. The brainstem supports automatic life-sustaining functions and also contributes to arousal and consciousness. The cortex is important for conscious experience, but wakefulness does not depend on the cortex alone. The misconception assigns a complex function exclusively to one brain region.'
        },
        {
            type: 'tf',
            topic: 'Brain Structure & Function',
            question: 'The cerebellum is primarily involved in regulating emotions and memory formation.',
            correct: false,
            explanation: 'This is false. The cerebellum coordinates movement, balance, and motor learning. Emotions and memory are handled by structures like the limbic system.'
        },
        {
            type: 'tf',
            topic: 'Brain Structure & Function',
            question: 'The frontal lobe contains the motor cortex, which controls voluntary muscle movements.',
            correct: true,
            explanation: 'This is true. The primary motor cortex in the frontal lobe initiates voluntary movements throughout the body.'
        },
        {
            type: 'tf',
            topic: 'Brain Structure & Function',
            question: 'The occipital lobe is responsible for processing auditory information.',
            correct: false,
            explanation: 'This is false. The occipital lobe processes visual information. Auditory processing occurs in the temporal lobe.'
        },

        // Topic 3: Limbic System (5 questions: 2 True / 3 False)
        {
            type: 'tf',
            topic: 'Limbic System',
            question: 'The amygdala plays a key role in processing emotions, especially fear and aggression.',
            correct: true,
            explanation: 'This is true. The amygdala is central to emotional responses, particularly threat detection and fear conditioning.'
        },
        {
            type: 'tf',
            topic: 'Limbic System',
            question: 'The hippocampus serves as the permanent storage site for all long-term memories rather than helping form and organize new long-term memories.',
            correct: false,
            explanation: 'This is false. The hippocampus is critical for forming new long-term memories and supporting spatial memory, but describing it as the permanent warehouse for every long-term memory oversimplifies its role. The misconception confuses memory formation with permanent storage.'
        },
        {
            type: 'tf',
            topic: 'Limbic System',
            question: 'The hypothalamus regulates body temperature, hunger, thirst, and circadian rhythms.',
            correct: true,
            explanation: 'This is true. The hypothalamus maintains homeostasis and controls autonomic functions and endocrine activity.'
        },
        {
            type: 'tf',
            topic: 'Limbic System',
            question: 'The nucleus accumbens processes pleasure but has little role in motivation or reinforcement, so reward signals do not influence whether a behavior is repeated.',
            correct: false,
            explanation: 'This is false. The nucleus accumbens participates in reward, motivation, and reinforcement, helping rewarding outcomes influence future behavior. The misconception treats pleasure as a passive sensation disconnected from learning and behavioral repetition.'
        },
        {
            type: 'tf',
            topic: 'Limbic System',
            question: 'The thalamus acts primarily as a relay station for sensory information except for the sense of smell.',
            correct: true,
            explanation: 'This is true. The thalamus relays most sensory signals to the cortex; olfactory signals go directly to limbic structures.'
        },

        // Topic 4: Adolescent Brain Development (5 questions: 2 True / 3 False)
        {
            type: 'tf',
            topic: 'Adolescent Brain Development',
            question: 'The adolescent brain is fully developed by age 16.',
            correct: false,
            explanation: 'This is false. Brain development continues into the mid-20s, with the prefrontal cortex maturing last.'
        },
        {
            type: 'tf',
            topic: 'Adolescent Brain Development',
            question: 'The prefrontal cortex, responsible for decision-making and impulse control, develops earlier than the limbic system.',
            correct: false,
            explanation: 'This is false. The limbic system matures before the prefrontal cortex, leading to heightened emotion and risk-taking in adolescence.'
        },
        {
            type: 'tf',
            topic: 'Adolescent Brain Development',
            question: 'Adolescents are more sensitive to rewards than adults, which can lead to increased risk-taking behavior.',
            correct: true,
            explanation: 'This is true. The adolescent brain shows heightened reward sensitivity, driving exploration but also risky choices.'
        },
        {
            type: 'tf',
            topic: 'Adolescent Brain Development',
            question: 'Myelination, which increases the speed of neural communication, is completed by early childhood.',
            correct: false,
            explanation: 'This is false. Myelination continues through adolescence and into the 20s, improving neural efficiency over time.'
        },
        {
            type: 'tf',
            topic: 'Adolescent Brain Development',
            question: 'Synaptic pruning during adolescence strengthens frequently used neural connections and removes unused ones.',
            correct: true,
            explanation: 'This is true. Pruning optimizes brain efficiency by eliminating weak connections and reinforcing active pathways.'
        },

        // Topic 5: Neurotransmitter Communication (5 questions: 3 True / 2 False)
        {
            type: 'tf',
            topic: 'Neurotransmitter Communication',
            question: 'Neurotransmitters are released from the axon terminal of one neuron and bind to receptors on another neuron.',
            correct: true,
            explanation: 'This is true. Neurotransmitters cross the synaptic gap to activate receptors on the postsynaptic neuron.'
        },
        {
            type: 'tf',
            topic: 'Neurotransmitter Communication',
            question: 'Dopamine is involved in reward, motivation, and motor control.',
            correct: true,
            explanation: 'This is true. Dopamine pathways regulate pleasure, goal-directed behavior, and movement.'
        },
        {
            type: 'tf',
            topic: 'Neurotransmitter Communication',
            question: 'Serotonin regulates mood but has little connection to sleep or appetite because those functions use entirely separate signaling systems.',
            correct: false,
            explanation: 'This is false. Serotonin influences emotional well-being as well as sleep-related rhythms and hunger signals. Physiological functions can involve overlapping neurotransmitter systems rather than one exclusive chemical for each function. The misconception imposes a one-neurotransmitter, one-function model.'
        },
        {
            type: 'tf',
            topic: 'Neurotransmitter Communication',
            question: 'GABA (gamma-aminobutyric acid) is the primary excitatory neurotransmitter in the brain.',
            correct: false,
            explanation: 'This is false. GABA is the main inhibitory neurotransmitter, reducing neural activity. Glutamate is the primary excitatory transmitter.'
        },
        {
            type: 'tf',
            topic: 'Neurotransmitter Communication',
            question: 'Glutamate is involved in learning and memory by promoting long-term potentiation.',
            correct: true,
            explanation: 'This is true. Glutamate strengthens synaptic connections through long-term potentiation, essential for memory formation.'
        },

        // Topic 6: Drugs & the Brain (5 questions: 3 True / 2 False)
        {
            type: 'tf',
            topic: 'Drugs & the Brain',
            question: 'Psychoactive drugs alter brain function by interacting with neurotransmitter systems.',
            correct: true,
            explanation: 'This is true. Psychoactive drugs mimic, block, or modify neurotransmitter activity to change mood, perception, and behavior.'
        },
        {
            type: 'tf',
            topic: 'Drugs & the Brain',
            question: 'Cocaine and methamphetamine produce stimulant effects mainly by reducing dopamine signaling in reward pathways, which the brain experiences as euphoria.',
            correct: false,
            explanation: 'This is false. These stimulants increase dopamine signaling in reward pathways, contributing to euphoria and addiction risk. The misconception correctly connects stimulants to dopamine but reverses the direction of the drug effect.'
        },
        {
            type: 'tf',
            topic: 'Drugs & the Brain',
            question: 'Depressants such as alcohol and benzodiazepines primarily enhance the activity of the excitatory neurotransmitter glutamate.',
            correct: false,
            explanation: 'This is false. Depressants enhance GABA (inhibitory) activity and reduce glutamate (excitatory) activity, slowing brain function.'
        },
        {
            type: 'tf',
            topic: 'Drugs & the Brain',
            question: 'Opioids relieve pain by binding to opioid receptors in the brain and spinal cord.',
            correct: true,
            explanation: 'This is true. Opioids activate receptors that reduce pain signals and produce feelings of well-being.'
        },
        {
            type: 'tf',
            topic: 'Drugs & the Brain',
            question: 'LSD and psilocybin alter perception through the same primary dopamine mechanism as stimulants, with serotonin receptors playing only a secondary role.',
            correct: false,
            explanation: 'This is false. These hallucinogens primarily act through serotonin receptors, producing changes in sensory processing, mood, and consciousness. The misconception groups drugs by their ability to change experience while ignoring that different drug classes act through different neurotransmitter systems.'
        },

        // Topic 7: Addiction Models (5 questions: 2 True / 3 False)
        {
            type: 'tf',
            topic: 'Addiction Models',
            question: 'The disease model of addiction views addiction as a chronic brain disorder characterized by compulsive drug-seeking behavior.',
            correct: true,
            explanation: 'This is true. The disease model emphasizes neurobiological changes and the chronic, relapsing nature of addiction.'
        },
        {
            type: 'tf',
            topic: 'Addiction Models',
            question: 'Tolerance occurs when repeated drug use leads to a diminished response, requiring higher doses to achieve the same effect.',
            correct: true,
            explanation: 'This is true. Tolerance develops as the brain adapts to the drug\'s presence, reducing sensitivity over time.'
        },
        {
            type: 'tf',
            topic: 'Addiction Models',
            question: 'Physical dependence means that stopping drug use will result in withdrawal symptoms.',
            correct: true,
            explanation: 'This is true. Physical dependence occurs when the body adapts to a drug and reacts negatively when it\'s removed.'
        },
        {
            type: 'tf',
            topic: 'Addiction Models',
            question: 'Psychological dependence involves only physical withdrawal symptoms and no emotional or behavioral components.',
            correct: false,
            explanation: 'This is false. Psychological dependence includes emotional and behavioral cravings, not just physical symptoms.'
        },
        {
            type: 'tf',
            topic: 'Addiction Models',
            question: 'The biopsychosocial model of addiction considers only biological factors like genetics and brain chemistry.',
            correct: false,
            explanation: 'This is false. The biopsychosocial model integrates biological, psychological, and social factors in understanding addiction.'
        },

        // Topic 8: Harm Reduction (5 questions: 3 True / 2 False)
        {
            type: 'tf',
            topic: 'Harm Reduction',
            question: 'Harm reduction strategies aim to minimize negative health and social consequences of drug use without requiring abstinence.',
            correct: true,
            explanation: 'This is true. Harm reduction focuses on reducing risks and harms rather than eliminating drug use entirely.'
        },
        {
            type: 'tf',
            topic: 'Harm Reduction',
            question: 'Needle exchange programs reduce the spread of infectious diseases like HIV and hepatitis C among people who inject drugs.',
            correct: true,
            explanation: 'This is true. Providing clean needles prevents disease transmission and connects users to health services.'
        },
        {
            type: 'tf',
            topic: 'Harm Reduction',
            question: 'Naloxone reverses an opioid overdose by rapidly breaking down the opioid in the bloodstream and permanently restoring damaged opioid receptors.',
            correct: false,
            explanation: 'This is false. Naloxone works by blocking opioid receptors, rapidly reversing dangerous opioid effects such as respiratory depression. It does not metabolize the opioid or permanently repair receptors. The misconception confuses receptor competition with removal of the drug from the body.'
        },
        {
            type: 'tf',
            topic: 'Harm Reduction',
            question: 'Supervised consumption sites, where people can use drugs under medical supervision, have been shown to increase overdose deaths.',
            correct: false,
            explanation: 'This is false. Supervised sites reduce overdose deaths by providing immediate medical intervention and sterile equipment.'
        },
        {
            type: 'tf',
            topic: 'Harm Reduction',
            question: 'Methadone or buprenorphine treatment cannot be considered harm reduction because using a medication that acts on opioid pathways simply replaces one addiction with another without reducing risk.',
            correct: false,
            explanation: 'This is false. Medication-assisted treatment can reduce cravings, withdrawal, and risky opioid use while supporting stabilization. A controlled treatment that lowers harm is not equivalent to uncontrolled use solely because both involve opioid pathways. The misconception ignores differences in dose, supervision, function, and health outcome.'
        },

        // Topic 9: Cannabis (5 questions: 2 True / 3 False)
        {
            type: 'tf',
            topic: 'Cannabis',
            question: 'THC (tetrahydrocannabinol) is the primary psychoactive compound in cannabis.',
            correct: true,
            explanation: 'This is true. THC binds to cannabinoid receptors in the brain, producing the "high" associated with cannabis.'
        },
        {
            type: 'tf',
            topic: 'Cannabis',
            question: 'CBD (cannabidiol) is non-psychoactive and may have therapeutic effects such as reducing anxiety and inflammation.',
            correct: true,
            explanation: 'This is true. CBD does not produce intoxication and shows promise in treating various conditions.'
        },
        {
            type: 'tf',
            topic: 'Cannabis',
            question: 'Cannabis use during adolescence has no impact on brain development.',
            correct: false,
            explanation: 'This is false. Adolescent cannabis use can impair memory, learning, and attention due to ongoing brain development.'
        },
        {
            type: 'tf',
            topic: 'Cannabis',
            question: 'Regular cannabis use can lead to cannabis use disorder, characterized by dependence and difficulty quitting.',
            correct: true,
            explanation: 'This is true. About 9% of users develop cannabis use disorder, with higher rates among adolescent users.'
        },
        {
            type: 'tf',
            topic: 'Cannabis',
            question: 'Smoking cannabis has no harmful effects on the respiratory system.',
            correct: false,
            explanation: 'This is false. Smoking cannabis can irritate the lungs and lead to chronic bronchitis and other respiratory issues.'
        },

        // Topic 10: Drug Policy & Legalization (5 questions: 3 True / 2 False)
        {
            type: 'tf',
            topic: 'Drug Policy & Legalization',
            question: 'The War on Drugs, launched in the 1970s, led to mass incarceration, particularly affecting minority communities.',
            correct: true,
            explanation: 'This is true. Drug prohibition policies resulted in disproportionate arrests and imprisonment of Black and Latino individuals.'
        },
        {
            type: 'tf',
            topic: 'Drug Policy & Legalization',
            question: 'Decriminalization and legalization both create regulated legal markets for drug supply, but decriminalization achieves this through criminal law reform while legalization does so through commercial licensing.',
            correct: false,
            explanation: 'This is false—decriminalization does NOT create legal markets. Decriminalization removes criminal penalties for possession but leaves supply illegal, so no regulated legal market develops. Only legalization creates legal supply markets with regulation and licensing. Portugal decriminalized possession but drug supply remains illegal—users don\'t have legal access points. Understanding that decriminalization addresses demand-side penalties while leaving supply illegal explains why decriminalization doesn\'t generate tax revenue or quality control like legalization does, and why both approaches can coexist (some drugs decriminalized, others legalized).'
        },
        {
            type: 'tf',
            topic: 'Drug Policy & Legalization',
            question: 'Legalizing cannabis for recreational use has been shown to increase rates of adolescent cannabis use in all states that have done so.',
            correct: false,
            explanation: 'This is false. Research shows mixed results; many states with legalization have not seen significant increases in adolescent use.'
        },
        {
            type: 'tf',
            topic: 'Drug Policy & Legalization',
            question: 'Drug courts offer treatment and rehabilitation as an alternative to incarceration for non-violent drug offenders.',
            correct: true,
            explanation: 'This is true. Drug courts aim to reduce recidivism by addressing addiction through supervised treatment programs.'
        },
        {
            type: 'tf',
            topic: 'Drug Policy & Legalization',
            question: 'There are strong research results showing that legalizing drugs will increase adolescent drug use because legal availability lowers perceived risk.',
            correct: false,
            explanation: 'This is false—legalization does not inevitably increase adolescent use. Evidence from places like Portugal and U.S. states with cannabis legalization shows minimal or no increase in youth consumption.'
        }
    ]
};

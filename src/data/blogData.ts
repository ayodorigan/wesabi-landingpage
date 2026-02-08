export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: 'Immediate Help' | 'Medication Safety' | 'Chronic Care' | 'Pharmacy Services';
    date: string;
    author: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    // 1. Immediate Help (High Patient Search Intent)
    {
        id: 'malaria-symptoms',
        title: 'Malaria: Don\'t Wait for the Shivers',
        excerpt: 'Is it just a common cold or something more? Recognizing malaria early can save your life.',
        content: `
      Malaria remains one of the most significant health challenges, but early detection makes it completely treatable. Many people wait for "chills" or "shaking" before seeking help, but symptoms often start much more subtly.

      ### Common Early Signs:
      - **Persistent Headache:** Often localized behind the eyes.
      - **Muscle and Joint Pain:** Feeling like you've run a marathon without exercise.
      - **High Fever:** Coming in waves, often in the late afternoon.
      - **Nausea and Loss of Appetite:** Foods you usually love suddenly seem unappealing.

      ### When to Seek Treatment?
      If you experience a fever that lasts more than 24 hours in a malaria-prone area, you should get a rapid diagnostic test (RDT) at a pharmacy or clinic immediately. At Wesabi Pharmacy, we provide quick testing and the right WHO-approved ACT treatments to get you back on your feet fast.
    `,
        category: 'Immediate Help',
        date: 'Feb 05, 2026',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'reduce-bp-fast',
        title: 'How to Lower Blood Pressure in Minutes',
        excerpt: 'Caught with a high reading? Here are safe, immediate steps to take while waiting for medical help.',
        content: `
      Finding out your blood pressure is high can be scary. While medication is key for long-term control, there are immediate steps you can take to help lower a spiked reading.

      ### Immediate Steps:
      1. **Stop and Sit:** Sit in a comfortable chair with your back supported and feet flat on the floor.
      2. **Deep Breathing:** Slow, deep breaths (breathe in for 4, hold for 4, out for 6) can calm your nervous system.
      3. **Dark and Quiet:** Minimize light and noise to reduce sensory stress.
      4. **Hydrate:** Sip water slowly, but avoid caffeine or sugary drinks.

      ### When is it an Emergency?
      If your reading is above 180/120 and you have chest pain, blurred vision, or a severe headache, skip the home remedies and call for emergency help immediately. Visit us at Wesabi for a free, professional BP check anytime.
    `,
        category: 'Immediate Help',
        date: 'Jan 20, 2026',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/6050516/pexels-photo-6050516.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'blood-sugar-signs',
        title: 'Sugar Highs and Lows: The Warning Signs',
        excerpt: 'Your body has a language for blood sugar. Learn to translate it before it becomes a crisis.',
        content: `
       Managing blood sugar is about balance. Both too high (Hyperglycemia) and too low (Hypoglycemia) can be dangerous if left unchecked.

      ### Signs Your Sugar is Too HIGH:
      - Extreme thirst (feeling like you can't drink enough).
      - Frequent urination, especially at night.
      - Blurred vision or "floaters" in your sight.
      - Unexplained fatigue.

      ### Signs Your Sugar is Too LOW:
      - Sudden shaking or trembling.
      - Excessive sweating and coldness.
      - Irritability or sudden confusion.
      - Dizziness and a racing heart.

      Consistent monitoring is the only way to be sure. We stock a variety of glucometers and test strips at Wesabi Pharmacy to help you stay in control.
    `,
        category: 'Immediate Help',
        date: 'Jan 10, 2026',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5909477/pexels-photo-5909477.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'toothache-relief',
        title: 'Toothache: What Actually Stops the Pain?',
        excerpt: 'Dental pain is some of the worst. We break down which painkillers work and what home remedies to avoid.',
        content: `
      A toothache can stop your world. While a dentist is your eventual destination, you need relief *now*.

      ### What Works:
      - **Ibuprofen:** Excellent for the inflammation often found in dental pulp.
      - **Paracetamol:** Good for general pain relief, often taken alongside Ibuprofen (ask your pharmacist for the correct dosage).
      - **Clove Oil:** A natural numbing agent that provides temporary relief.

      ### What to Avoid:
      - **Direct Aspirin:** Never place an aspirin tablet directly on the gum next to the aching tooth; it will cause a chemical burn.
      - **Excessive Heat:** While a warm compress might feel good, extreme heat can sometimes worsen infection-related pain.

      Visit Wesabi for expert advice on the best OTC dental pain management until your appointment.
    `,
        category: 'Immediate Help',
        date: 'Dec 25, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3762443/pexels-photo-3762443.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'flu-home-treatment',
        title: 'Defeating the Flu: Your Home Care Guide',
        excerpt: 'The flu season is here. Learn how to manage the symptoms and recover faster without unnecessary meds.',
        content: `
      The flu (Influenza) is a viral infection, which means antibiotics won't help. Recovery is all about supporting your body's immune system.

      ### The Golden Trio of Recovery:
      1. **Hydration:** Water, herbal teas, and clear soups help thin mucus and replace lost fluids.
      2. **Rest:** Your body uses a lot of energy to fight a virus. Let it sleep.
      3. **Symptom Management:** Use paracetamol for fever and body aches, and saline nasal sprays for congestion.

      ### When to worry:
      - Difficulty breathing or shortness of breath.
      - Chest pain.
      - Sudden dizziness or confusion.
      - Fever that goes away then comes back worse.

      Get your immunity-boosting supplements like Vitamin C and Zinc at Wesabi today.
    `,
        category: 'Immediate Help',
        date: 'Dec 15, 2025',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'headache-warnings',
        title: 'Is it Just a Headache? When to be Concerned',
        excerpt: 'Most headaches are harmless, but some are warning signals. Learn to spot the difference.',
        content: `
      Headaches come in many forms—tension, migraine, or sinus. Most are managed with simple rest and hydration, but some require immediate medical attention.

      ### Red Flag Symptoms:
      - **"The Worst Headache"**: A sudden, extremely severe headache like you've never felt.
      - **Stiff Neck and Fever**: Could indicate meningitis.
      - **Confusion or Slurred Speech**: Possible sign of a stroke.
      - **Headache after Injury**: Even if it seems minor, a headache following a fall or blow to the head should be checked.

      If your headache is frequent but manageable, stop by Wesabi for a consultation. We can help identify triggers and suggest appropriate management.
    `,
        category: 'Immediate Help',
        date: 'Nov 28, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'minor-burns-first-aid',
        title: 'Burned? The First 60 Seconds Matter',
        excerpt: 'Kitchen mishap? Learn the correct first aid for minor burns to prevent scarring and infection.',
        content: `
      Minor burns happen. How you treat them in the first minute dictates how they heal.

      ### Do:
      1. **Cool Water:** Run cool (not cold) tap water over the burn for at least 10–20 minutes.
      2. **Remove Jewelry:** Do this quickly before any swelling starts.
      3. **Cover Loosely:** Use sterile gauze or a clean plastic wrap (don't wrap tightly).

      ### DON'T:
      1. **No Ice:** Ice can further damage the tissue.
      2. **No Butter or Toothpaste:** These trap heat and invite infection.
      3. **Don't Pop Blisters:** They are nature's protective bandage.

      Wesabi Pharmacy stocks high-quality burn Gels and sterile dressings for your first aid kit.
    `,
        category: 'Immediate Help',
        date: 'Nov 12, 2025',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5909241/pexels-photo-5909241.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'stomach-ulcers-guide',
        title: 'Stomach Ulcers: More Than Just "Sour Stomach"',
        excerpt: 'Understanding the causes of ulcers and how modern pharmacy can provide lasting relief.',
        content: `
      Stomach ulcers are sores that develop on the lining of your stomach or small intestine. They aren't just caused by spicy food—the real culprits are often surprisingly different.

      ### Real Causes:
      - **H. pylori Bacteria:** A common infection that weakens the stomach lining.
      - **NSAID Use:** Overusing painkillers like Aspirin or Ibuprofen.
      - **Extreme Stress:** Not the cause, but it can certainly worsen symptoms.

      ### Treatment Path:
      Luckily, ulcers are very treatable. Doctors often prescribe a combination of antibiotics (to kill H. pylori) and acid-reducers. We have the full range of antacids and prescription ulcer medications at Wesabi Pharmacy.
    `,
        category: 'Immediate Help',
        date: 'Oct 25, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'child-fever-safety',
        title: 'Fever in Children: A Parent\'s Roadmap',
        excerpt: 'Don\'t panic when your child feels warm. Here is how to manage fever safely and when to call the doctor.',
        content: `
      A child with a fever is a worry for any parent. But a fever is just a sign that their body is doing its job and fighting an infection.

      ### Safe Management:
      1. **Keep them Cool:** Light clothing and a comfortable room temperature.
      2. **Hydration:** Small, frequent sips of water or ORS (Oral Rehydration Salts).
      3. **Right Meds:** Use children-formulated paracetamol or ibuprofen. *Calculation is usually by weight, not just age—ask our pharmacist for help.*

      ### When is it a Medical Emergency?
      - Infants under 3 months with *any* fever.
      - Fever accompanied by a purple rash that doesn't fade under a glass.
      - Difficulty breathing or extreme lethargy.

      We have child-friendly medications and professional thermometers at Wesabi to give you peace of mind.
    `,
        category: 'Immediate Help',
        date: 'Oct 05, 2025',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/3762953/pexels-photo-3762953.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'dangerous-cough',
        title: 'When a Cough is More Than a Cold',
        excerpt: 'Is that seasonal cough actually pneumonia? Learn the red flags you shouldn\'t ignore.',
        content: `
      Most coughs clear up on their own within a week or two. However, some coughs are indicators of more serious respiratory issues.

      ### See a Professional IF:
      - **Duration:** The cough lasts longer than 3 weeks.
      - **Blood:** You see any blood or pink-tinged mucus.
      - **Wheezing:** High-pitched whistling sounds when breathing.
      - **Chest Pain:** Sharp pain when coughing or deep breathing.

      A persistent cough requires an expert eye. Visit Wesabi for a consultation, and we can guide you on whether you need a simple cough syrup or a specialist referral.
    `,
        category: 'Immediate Help',
        date: 'Sept 15, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3807628/pexels-photo-3807628.jpeg?auto=compress&cs=tinysrgb&w=800',
    },

    // 2. Medication Safety (Medication & Pharmacy Search Intent)
    {
        id: 'medication-mixing',
        title: 'The Dangerous Mix: Medications That Don\'t Get Along',
        excerpt: 'Mixing the wrong meds can lead to serious health issues. Learn which combinations to avoid.',
        content: `
      Drug-drug interactions are one of the most common causes of preventable health issues. Even "natural" supplements can interfere with your prescriptions.

      ### Common Danger Zones:
      - **Blood Thinners & Painkillers:** Can cause dangerous internal bleeding.
      - **Antibiotics & The Pill:** Some antibiotics can make birth control less effective.
      - **Grapefruit & Cholesterol Meds:** Believe it or not, grapefruit can wildly change how your body processes certain statins.

      ### Your Safety Shield:
      Always inform your pharmacist of *everything* you are taking, including herbal teas and over-the-counter vitamins. We keep record of your history at Wesabi to prevent these dangerous interactions.
    `,
        category: 'Medication Safety',
        date: 'Feb 01, 2026',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'missed-dose-actions',
        title: 'Missed a Dose? Don\'t Pivot into Panic',
        excerpt: 'It happens to the best of us. Here is exactly what to do for different types of medications.',
        content: `
      "Did I take my pill?" It's a question we've all asked. The rules for a missed dose depend heavily on the medication.

      ### The General Rule:
      - **If you just missed it:** Take it as soon as you remember.
      - **If it's nearly time for the next dose:** Skip the missed one and take your next dose as scheduled.
      - **NEVER:** Take two doses at once to "catch up" unless specifically told by a professional.

      ### Exceptions:
      Birth control, diabetes medications, and blood thinners have very specific "window" rules. If you're unsure, call Wesabi Pharmacy immediately and we'll tell you exactly how to proceed.
    `,
        category: 'Medication Safety',
        date: 'Jan 25, 2026',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'antibiotics-usage',
        title: 'Antibiotics: The Truth About When You Need Them',
        excerpt: 'Antibiotics are powerful, but only for certain fights. Learn the difference between viruses and bacteria.',
        content: `
      Overusing antibiotics creates "superbugs" that medicines can't kill. It's essential to use them correctly.

      ### Bacteria vs. Virus:
      - **Bacteria:** Tiny organisms that cause infections like strep throat or UTIs. Antibiotics kill these.
      - **Viruses:** Cause the common cold, most sore throats, and the flu. **Antibiotics do NOTHING for viruses.**

      ### Use them Right:
      - Only take antibiotics prescribed *for you*.
      - Don't save "leftovers" for next time.
      - Always complete the full course even if you feel 100% better.

      Talk to our pharmacists at Wesabi to understand if your symptoms actually require an antibiotic.
    `,
        category: 'Medication Safety',
        date: 'Jan 15, 2026',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5910950/pexels-photo-5910950.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'painkiller-mistakes',
        title: 'Painkiller Pitfalls: Common Mistakes People Make',
        excerpt: 'Think twice before reaching for that pill. Learn the safe way to manage your pain.',
        content: `
      Over-the-counter painkillers are generally safe, but common mistakes lead to gastric ulcers, liver issues, or kidney damage.

      ### Stop These Mistakes:
      1. **Taking more than directed:** Double the dose doesn't mean double the speed of relief.
      2. **Mixing Brands with same ingredients:** Taking two different brands that both contain paracetamol can lead to dangerous overdose.
      3. **Using them for everything:** Not every ache needs medication—sometimes stretching or hydration is the answer.
      4. **Ignoring Expiry Dates:** Older medications can become less effective or even toxic.

      For the safest pain management tailored to your weight and history, consultation at Wesabi is always free.
    `,
        category: 'Medication Safety',
        date: 'Dec 30, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'reading-prescriptions',
        title: 'Doctor Speak: Decoding Your Prescription',
        excerpt: 'What does "TID" or "PRN" mean? We translate the shorthand for you.',
        content: `
       Ever looked at a prescription and felt like it was written in code? That's because it technically is—mostly using Latin abbreviations.

      ### Quick Translation:
      - **QD:** Every day.
      - **BID:** Twice a day.
      - **TID:** Three times a day.
      - **PO:** By mouth.
      - **PRN:** As needed (typically for pain).
      - **PC:** After meals.

      While we always provide clear, English instructions on your medicine pack at Wesabi, understanding these symbols helps you verify your own care.
    `,
        category: 'Medication Safety',
        date: 'Dec 20, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/4047120/pexels-photo-4047120.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'finish-antibiotics',
        title: 'Complete the Course: Why Stopping Early is Dangerous',
        excerpt: 'Feeling better? That doesn\'t mean the bacteria are gone. Here\'s why you must finish every pill.',
        content: `
      Stopping antibiotics as soon as you feel better is a recipe for disaster. It's the primary cause of antibiotic resistance.

      ### What Happens:
      The strongest bacteria are often the last to die. If you stop early, these "survivors" multiply. They are now "aware" of the medicine and learn how to resist it. Next time you get sick, that same medicine won't work.

      Always follow the count. If you have 21 pills, take 21 pills. Need a hand with a schedule? Wesabi Pharmacy offers free medication organizers.
    `,
        category: 'Medication Safety',
        date: 'Dec 10, 2025',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/3683072/pexels-photo-3683072.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'side-effect-warnings',
        title: 'Side Effects: What\'s Normal and What\'s Not',
        excerpt: 'Nausea? Dizziness? Rash? Learn which side effects are expected and which are warnings.',
        content: `
      All medications can cause side effects. Most are mild and go away as your body adjusts, but some are a sign that the medication isn't right for you.

      ### Expect These (But Inform Us):
      - Mild stomach upset.
      - Slight drowsiness.
      - Dry mouth.

      ### Stop and Call Immediately IF:
      - **Sudden Rash or Hives:** Possible allergic reaction.
      - **Swelling of face/tongue:** Signs of anaphylaxis.
      - **Severe Dizziness or Fainting.**
      - **Yellowing of eyes/skin:** Possible liver reaction.

      We provide a detailed patient information leaflet with every medication at Wesabi to keep you informed.
    `,
        category: 'Medication Safety',
        date: 'Nov 20, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'medication-storage',
        title: 'Cool, Dry, Dark: Storing Meds in Hot Climates',
        excerpt: 'The heat isn\'t just hard on you—it can destroy your medication. Learn the best storage spots.',
        content: `
      Nairobi can get warm, and that heat significantly degrades the effectiveness of many medications. Proper storage is about protecting your health investment.

      ### Best Spots:
      - A high shelf in a hallway or bedroom cupboard.
      - Away from direct sunlight.

      ### WORST Spots:
      - **The Bathroom:** Humidity from showers is the number one destroyer of pills.
      - **The Kitchen:** Heat from cooking and steam is a major issue.
      - **Windowsills:** Direct UV light breaks down chemical bonds.

      Not sure if a specific medication needs refrigeration? Just look for the storage instructions on our labels or ask us at Wesabi.
    `,
        category: 'Medication Safety',
        date: 'Nov 05, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'self-medication-dangers',
        title: 'The Hidden Risks of Self-Medication',
        excerpt: 'Treating yourself without a diagnosis often masks the real problem. Let professionals lead the way.',
        content: `
      It's tempting to reach for a pill based on advice from a friend or a quick Google search. But self-medication comes with serious risks.

      ### The Dangers:
      - **Masking Symptoms:** You might silence a headache that is actually a sign of high blood pressure.
      - **Incorrect Diagnosis:** Thinking you have an "infection" when it's actually an allergy.
      - **Wasted Money:** Buying expensive medicines you don't actually need.

      At Wesabi Pharmacy, we offer professional consultations for free. We'll help you understand your symptoms so you get the right treatment, not just *any* treatment.
    `,
        category: 'Medication Safety',
        date: 'Oct 15, 2025',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5910955/pexels-photo-5910955.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'otc-overuse',
        title: 'Too Much of a Good Thing: OTC Meds to Not Overuse',
        excerpt: 'Even Over-the-counter meds can hurt you if used too long. Learn the limits.',
        content: `
      "Over the counter" doesn't mean "Risk-free." Some medicines are only intended for very short-term use.

      ### Watch Out For:
      - **Nasal Sprays:** Using decongestant sprays for more than 3-5 days can actually cause *more* congestion (rebound effect).
      - **Laxatives:** Long-term use can make your body dependent on them.
      - **Acid Reducers:** Taking them daily for months can hide serious stomach issues.

      If you find yourself needing an OTC medicine every single day, it's time to talk to us at Wesabi.
    `,
        category: 'Medication Safety',
        date: 'Sept 30, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3683050/pexels-photo-3683050.jpeg?auto=compress&cs=tinysrgb&w=800',
    },

    // 3. Chronic Care (Chronic Disease & Long-Term Care)
    {
        id: 'diabetes-control-habits',
        title: 'Diabetes Mastery: Daily Habits for a Better Life',
        excerpt: 'Living with diabetes is a marathon. These daily habits make the journey easier.',
        content: `
      Managing diabetes is about more than just checking numbers. It's about small, consistent choices.

      ### The Daily Success Checklist:
      1. **Foot Checks:** Look for any cuts or sores every single night.
      2. **Fiber First:** Start every meal with high-fiber veggies to slow sugar absorption.
      3. **Timed Movement:** A 10-minute walk after meals can significantly improve sugar processing.
      4. **Stay Hydrated:** Water helps your kidneys flush out excess sugar.

      We offer full diabetic support at Wesabi, from specialized footwear advice to the latest insulin storage solutions.
    `,
        category: 'Chronic Care',
        date: 'Feb 08, 2026',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5909477/pexels-photo-5909477.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'bp-diet-foods',
        title: 'Eat to Live: Foods That Lower High Blood Pressure',
        excerpt: 'Your kitchen is your first line of defense against hypertension. Add these to your plate.',
        content: `
      Dietary changes are one of the most powerful ways to manage or prevent high blood pressure.

      ### The BP Power Foods:
      - **Leafy Greens:** Spinach and kale are high in potassium, which helps your heart.
      - **Berries:** Full of flavonoids that reduce inflammation.
      - **Garlic:** Contains allicin, which helps relax blood vessels.
      - **Oats:** High fiber reduces cholesterol and manages pressure.

      Pair a heart-healthy diet with regular monitoring. We offer full nutritional guidance for hypertension patients at Wesabi.
    `,
        category: 'Chronic Care',
        date: 'Jan 28, 2026',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/1435737/pexels-photo-1435737.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'bp-check-frequency',
        title: 'The BP Schedule: How Often is Often Enough?',
        excerpt: 'Monitoring is key, but don\'t let it become an obsession. Here is the recommended frequency.',
        content: `
      Knowledge is power, but overdrawing blood pressure can cause "monitor stress" which spikes the reading!

      ### Recommended Frequency:
      - **Stability Phase:** Once a week is usually enough if your readings are consistently in range.
      - **Adjustment Phase:** Twice a day (Morning and Evening) if you've recently changed medications or dosage.
      - **Prevention:** Once a month for healthy adults over 40.

      Stop by Wesabi for a professional check if you feel your home monitor is giving strange readings. We also provide free calibration services.
    `,
        category: 'Chronic Care',
        date: 'Jan 05, 2026',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/6050516/pexels-photo-6050516.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'diabetes-warning-signs',
        title: 'Early Warnings: Diabetes Signs You Often Ignore',
        excerpt: 'Your body broadcasts signals for months before a diagnosis. Learn to spot the quiet ones.',
        content: `
      Type 2 diabetes often develops slowly. Many people ignore the early signals because they seem like "normal aging" or "busy lifestyle."

      ### The Quiet Warnings:
      - **Slow Healing:** That simple cut takes two weeks to close instead of two days.
      - **Dark Patches:** Darker skin on the neck or armpits (acanthosis nigricans).
      - **Blurred Vision:** That comes and goes during the day.
      - **Extreme Hunger:** Even after a full meal.

      Early detection can prevent long-term complications. Visit Wesabi for a quick, painless HBA1c test today.
    `,
        category: 'Chronic Care',
        date: 'Dec 05, 2025',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5909477/pexels-photo-5909477.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'asthma-attack-management',
        title: 'Asthma Attack: Staying Calm When You Can\'t Breathe',
        excerpt: 'An asthma attack is terrifying. Having a clear, practiced plan saves lives.',
        content: `
      Knowing exactly what to do when your chest tightens can prevent a hospital stay.

      ### 5 Steps for Success:
      1. **Sit Up Straight:** Don't lie down; it makes breathing harder.
      2. **Slow, Steady Breaths:** Keep calm to prevent the airways from tightening further.
      3. **Use Your Inhaler:** Take one puff of your reliever (blue) inhaler every 30–60 seconds, up to 10 puffs.
      4. **Distance the Trigger:** Move away from smoke, pets, or dust.
      5. **Call for Help:** If you don't feel better after 10 puffs, seek emergency care.

      Need a new inhaler or spacers? We stock all major brands at Wesabi and can show you the correct technique for the most effective delivery.
    `,
        category: 'Chronic Care',
        date: 'Nov 15, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'hypertension-lifestyle',
        title: 'Beyond the Pill: Lifestyle for Hypertension',
        excerpt: 'Medication is only half the battle. Here is how to win the rest with simple lifestyle shifts.',
        content: `
      Living with high blood pressure doesn't mean life is over—it just means it's time for an upgrade.

      ### The Lifestyle Shift:
      - **Salt Swap:** Use herbs and spices instead of salt for flavor.
      - **Stress Buster:** Just 15 minutes of quiet time or prayer daily reduces stress hormones.
      - **Sleep Well:** Aim for 7–8 hours; poor sleep is a primary driver of high pressure.
      - **Limit "Hidden" Salt:** Most salt comes from processed bread and canned goods, not the salt shaker.

      We offer blood pressure management plans at Wesabi that include tracking journals and counseling.
    `,
        category: 'Chronic Care',
        date: 'Oct 20, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/6050516/pexels-photo-6050516.jpeg?auto=compress&cs=tinysrgb&w=800',
    },

    // 4. Pharmacy Services (Local Pharmacy Conversion Topics)
    {
        id: 'licensed-pharmacy-importance',
        title: 'Licensed vs. Legend: Why Where You Buy Matters',
        excerpt: 'Counterfeit medicines are a real risk. Buying from licensed pharmacies is your only guarantee of safety.',
        content: `
      In the world of medicine, the source is everything. Licensed pharmacies aren't just shops; they are regulated healthcare institutions.

      ### Why Choose a Licensed Pharmacy?
      - **Proven Source:** Every pill is tracked from the manufacturer to ensure it's genuine.
      - **Storage Control:** We maintain strict temperature controls to prevent medicine degradation.
      - **Expert Oversight:** You are served by trained pharmaceutical technologists who catch errors.
      - **Legal Recourse:** We are accountable to the Pharmacy and Poisons Board.

      Wesabi Pharmacy is fully licensed and committed to the highest standards of safety for our community.
    `,
        category: 'Pharmacy Services',
        date: 'Feb 10, 2026',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'benefits-of-regular-checks',
        title: 'The Hidden Benefit of Your Local Pharmacist',
        excerpt: 'We do more than just sell pills. Learn how checking in with us regularly keeps you healthier.',
        content: `
      Think of your local pharmacist as the most accessible member of your healthcare team.

      ### Why Check-in Weekly?
      - **Relationship-Based Care:** We know your history and can spot subtle changes in your health.
      - **Free Consultations:** Get professional medical advice without the hospital queue.
      - **Weight Monitoring:** Track your BMI and heart health on your way home.
      - **Medication Review:** We can help simplify your regimen to make it easier to follow.

      Don't be a stranger! Stop by Wesabi for a quick health check-in today.
    `,
        category: 'Pharmacy Services',
        date: 'Jan 02, 2026',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/5910950/pexels-photo-5910950.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'save-hospital-visits',
        title: 'Avoid the Queue: How We Save You Hospital Visits',
        excerpt: 'Minor ailments don\'t always need a doctor. See us first for faster, cheaper care.',
        content: `
      Did you know that up to 40% of emergency room visits could be safely handled in a pharmacy?

      ### See Us First For:
      - Rashes and minor skin irritations.
      - Coughs, colds, and seasonal flu.
      - Minor aches and pains.
      - Basic first aid for cuts and scrapes.
      - Questions about your existing medications.

      We'll provide the right care and, more importantly, we'll tell you honestly if you *do* need to see a doctor. Save time and money at Wesabi.
    `,
        category: 'Pharmacy Services',
        date: 'Dec 01, 2025',
        author: 'Dr. John Kamau',
        image: 'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 'quick-health-tests',
        title: '5-Minute Health Checks at Wesabi',
        excerpt: 'You don\'t need a full day lab visit to know your numbers. Get your essentials checked in minutes.',
        content: `
      Preventive health shouldn't be a chore. We offer rapid, professional testing right here in your neighborhood.

      ### Available Rapid Tests:
      - **Blood Pressure:** Instant results to track your heart health.
      - **Blood Sugar (Random/Fasting):** Essential for diabetes monitoring.
      - **BMI and Weight Analysis:** Understand your body composition.
      - **Malaria Testing:** Get your results in 15 minutes.

      No appointment needed. Just walk in and walk out with peace of mind. Your health is our priority at Wesabi Pharmacy.
    `,
        category: 'Pharmacy Services',
        date: 'Nov 01, 2025',
        author: 'Pharm. Mary Wambui',
        image: 'https://images.pexels.com/photos/5909241/pexels-photo-5909241.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

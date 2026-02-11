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
      <p>Malaria remains one of the most significant health challenges, but early detection makes it completely treatable. Many people wait for "chills" or "shaking" before seeking help, but symptoms often start much more subtly.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Common Early Signs:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Persistent Headache:</strong> Often localized behind the eyes.</li>
        <li><strong>Muscle and Joint Pain:</strong> Feeling like you've run a marathon without exercise.</li>
        <li><strong>High Fever:</strong> Coming in waves, often in the late afternoon.</li>
        <li><strong>Nausea and Loss of Appetite:</strong> Foods you usually love suddenly seem unappealing.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">When to Seek Treatment?</h3>
      <p>If you experience a fever that lasts more than 24 hours in a malaria-prone area, you should get a rapid diagnostic test (RDT) at a pharmacy or clinic immediately. At Wesabi Pharmacy, we provide quick testing and the right WHO-approved ACT treatments to get you back on your feet fast.</p>
    `,
    category: 'Immediate Help',
    date: 'Feb 05, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'reduce-bp-fast',
    title: 'How to Lower Blood Pressure in Minutes',
    excerpt: 'Caught with a high reading? Here are safe, immediate steps to take while waiting for medical help.',
    content: `
      <p>Finding out your blood pressure is high can be scary. While medication is key for long-term control, there are immediate steps you can take to help lower a spiked reading.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Immediate Steps:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Stop and Sit:</strong> Sit in a comfortable chair with your back supported and feet flat on the floor.</li>
        <li><strong>Deep Breathing:</strong> Slow, deep breaths (breathe in for 4, hold for 4, out for 6) can calm your nervous system.</li>
        <li><strong>Dark and Quiet:</strong> Minimize light and noise to reduce sensory stress.</li>
        <li><strong>Hydrate:</strong> Sip water slowly, but avoid caffeine or sugary drinks.</li>
      </ol>

      <h3 class="text-xl font-bold mt-6 mb-3">When is it an Emergency?</h3>
      <p>If your reading is above 180/120 and you have chest pain, blurred vision, or a severe headache, skip the home remedies and call for emergency help immediately. Visit us at Wesabi for a free, professional BP check anytime.</p>
    `,
    category: 'Immediate Help',
    date: 'Jan 20, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/6050516/pexels-photo-6050516.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'blood-sugar-signs',
    title: 'Sugar Highs and Lows: The Warning Signs',
    excerpt: 'Your body has a language for blood sugar. Learn to translate it before it becomes a crisis.',
    content: `
      <p>Managing blood sugar is about balance. Both too high (Hyperglycemia) and too low (Hypoglycemia) can be dangerous if left unchecked.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Signs Your Sugar is Too HIGH:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Extreme thirst (feeling like you can't drink enough).</li>
        <li>Frequent urination, especially at night.</li>
        <li>Blurred vision or "floaters" in your sight.</li>
        <li>Unexplained fatigue.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Signs Your Sugar is Too LOW:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Sudden shaking or trembling.</li>
        <li>Excessive sweating and coldness.</li>
        <li>Irritability or sudden confusion.</li>
        <li>Dizziness and a racing heart.</li>
      </ul>

      <p>Consistent monitoring is the only way to be sure. We stock a variety of glucometers and test strips at Wesabi Pharmacy to help you stay in control.</p>
    `,
    category: 'Immediate Help',
    date: 'Jan 10, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5909477/pexels-photo-5909477.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'toothache-relief',
    title: 'Toothache: What Actually Stops the Pain?',
    excerpt: 'Dental pain is some of the worst. We break down which painkillers work and what home remedies to avoid.',
    content: `
      <p>A toothache can stop your world. While a dentist is your eventual destination, you need relief <em>now</em>.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">What Works:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Ibuprofen:</strong> Excellent for the inflammation often found in dental pulp.</li>
        <li><strong>Paracetamol:</strong> Good for general pain relief, often taken alongside Ibuprofen (ask your pharmacist for the correct dosage).</li>
        <li><strong>Clove Oil:</strong> A natural numbing agent that provides temporary relief.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">What to Avoid:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Direct Aspirin:</strong> Never place an aspirin tablet directly on the gum next to the aching tooth; it will cause a chemical burn.</li>
        <li><strong>Excessive Heat:</strong> While a warm compress might feel good, extreme heat can sometimes worsen infection-related pain.</li>
      </ul>

      <p>Visit Wesabi for expert advice on the best OTC dental pain management until your appointment.</p>
    `,
    category: 'Immediate Help',
    date: 'Dec 25, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3762443/pexels-photo-3762443.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'flu-home-treatment',
    title: 'Defeating the Flu: Your Home Care Guide',
    excerpt: 'The flu season is here. Learn how to manage the symptoms and recover faster without unnecessary meds.',
    content: `
      <p>The flu (Influenza) is a viral infection, which means antibiotics won't help. Recovery is all about supporting your body's immune system.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">The Golden Trio of Recovery:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Hydration:</strong> Water, herbal teas, and clear soups help thin mucus and replace lost fluids.</li>
        <li><strong>Rest:</strong> Your body uses a lot of energy to fight a virus. Let it sleep.</li>
        <li><strong>Symptom Management:</strong> Use paracetamol for fever and body aches, and saline nasal sprays for congestion.</li>
      </ol>

      <h3 class="text-xl font-bold mt-6 mb-3">When to worry:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Difficulty breathing or shortness of breath.</li>
        <li>Chest pain.</li>
        <li>Sudden dizziness or confusion.</li>
        <li>Fever that goes away then comes back worse.</li>
      </ul>

      <p>Get your immunity-boosting supplements like Vitamin C and Zinc at Wesabi today.</p>
    `,
    category: 'Immediate Help',
    date: 'Dec 15, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'headache-warnings',
    title: 'Is it Just a Headache? When to be Concerned',
    excerpt: 'Most headaches are harmless, but some are warning signals. Learn to spot the difference.',
    content: `
      <p>Headaches come in many forms—tension, migraine, or sinus. Most are managed with simple rest and hydration, but some require immediate medical attention.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Red Flag Symptoms:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>"The Worst Headache":</strong> A sudden, extremely severe headache like you've never felt.</li>
        <li><strong>Stiff Neck and Fever:</strong> Could indicate meningitis.</li>
        <li><strong>Confusion or Slurred Speech:</strong> Possible sign of a stroke.</li>
        <li><strong>Headache after Injury:</strong> Even if it seems minor, a headache following a fall or blow to the head should be checked.</li>
      </ul>

      <p>If your headache is frequent but manageable, stop by Wesabi for a consultation. We can help identify triggers and suggest appropriate management.</p>
    `,
    category: 'Immediate Help',
    date: 'Nov 28, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'minor-burns-first-aid',
    title: 'Burned? The First 60 Seconds Matter',
    excerpt: 'Kitchen mishap? Learn the correct first aid for minor burns to prevent scarring and infection.',
    content: `
      <p>Minor burns happen. How you treat them in the first minute dictates how they heal.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Do:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Cool Water:</strong> Run cool (not cold) tap water over the burn for at least 10–20 minutes.</li>
        <li><strong>Remove Jewelry:</strong> Do this quickly before any swelling starts.</li>
        <li><strong>Cover Loosely:</strong> Use sterile gauze or a clean plastic wrap (don't wrap tightly).</li>
      </ol>

      <h3 class="text-xl font-bold mt-6 mb-3">DON'T:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>No Ice:</strong> Ice can further damage the tissue.</li>
        <li><strong>No Butter or Toothpaste:</strong> These trap heat and invite infection.</li>
        <li><strong>Don't Pop Blisters:</strong> They are nature's protective bandage.</li>
      </ol>

      <p>Wesabi Pharmacy stocks high-quality burn Gels and sterile dressings for your first aid kit.</p>
    `,
    category: 'Immediate Help',
    date: 'Nov 12, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5909241/pexels-photo-5909241.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'stomach-ulcers-guide',
    title: 'Stomach Ulcers: More Than Just "Sour Stomach"',
    excerpt: 'Understanding the causes of ulcers and how modern pharmacy can provide lasting relief.',
    content: `
      <p>Stomach ulcers are sores that develop on the lining of your stomach or small intestine. They aren't just caused by spicy food—the real culprits are often surprisingly different.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Real Causes:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>H. pylori Bacteria:</strong> A common infection that weakens the stomach lining.</li>
        <li><strong>NSAID Use:</strong> Overusing painkillers like Aspirin or Ibuprofen.</li>
        <li><strong>Extreme Stress:</strong> Not the cause, but it can certainly worsen symptoms.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Treatment Path:</h3>
      <p>Luckily, ulcers are very treatable. Doctors often prescribe a combination of antibiotics (to kill H. pylori) and acid-reducers. We have the full range of antacids and prescription ulcer medications at Wesabi Pharmacy.</p>
    `,
    category: 'Immediate Help',
    date: 'Oct 25, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'child-fever-safety',
    title: 'Fever in Children: A Parent\'s Roadmap',
    excerpt: 'Don\'t panic when your child feels warm. Here is how to manage fever safely and when to call the doctor.',
    content: `
      <p>A child with a fever is a worry for any parent. But a fever is just a sign that their body is doing its job and fighting an infection.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Safe Management:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Keep them Cool:</strong> Light clothing and a comfortable room temperature.</li>
        <li><strong>Hydration:</strong> Small, frequent sips of water or ORS (Oral Rehydration Salts).</li>
        <li><strong>Right Meds:</strong> Use children-formulated paracetamol or ibuprofen. <em>Calculation is usually by weight, not just age—ask our pharmacist for help.</em></li>
      </ol>

      <h3 class="text-xl font-bold mt-6 mb-3">When is it a Medical Emergency?</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Infants under 3 months with <em>any</em> fever.</li>
        <li>Fever accompanied by a purple rash that doesn't fade under a glass.</li>
        <li>Difficulty breathing or extreme lethargy.</li>
      </ul>

      <p>We have child-friendly medications and professional thermometers at Wesabi to give you peace of mind.</p>
    `,
    category: 'Immediate Help',
    date: 'Oct 05, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3762953/pexels-photo-3762953.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'dangerous-cough',
    title: 'When a Cough is More Than a Cold',
    excerpt: 'Is that seasonal cough actually pneumonia? Learn the red flags you shouldn\'t ignore.',
    content: `
      <p>Most coughs clear up on their own within a week or two. However, some coughs are indicators of more serious respiratory issues.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">See a Professional IF:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Duration:</strong> The cough lasts longer than 3 weeks.</li>
        <li><strong>Blood:</strong> You see any blood or pink-tinged mucus.</li>
        <li><strong>Wheezing:</strong> High-pitched whistling sounds when breathing.</li>
        <li><strong>Chest Pain:</strong> Sharp pain when coughing or deep breathing.</li>
      </ul>

      <p>A persistent cough requires an expert eye. Visit Wesabi for a consultation, and we can guide you on whether you need a simple cough syrup or a specialist referral.</p>
    `,
    category: 'Immediate Help',
    date: 'Sept 15, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3807628/pexels-photo-3807628.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // 2. Medication Safety (Medication & Pharmacy Search Intent)
  {
    id: 'medication-mixing',
    title: 'The Dangerous Mix: Medications That Don\'t Get Along',
    excerpt: 'Mixing the wrong meds can lead to serious health issues. Learn which combinations to avoid.',
    content: `
      <p>Drug-drug interactions are one of the most common causes of preventable health issues. Even "natural" supplements can interfere with your prescriptions.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Common Danger Zones:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Blood Thinners & Painkillers:</strong> Can cause dangerous internal bleeding.</li>
        <li><strong>Antibiotics & The Pill:</strong> Some antibiotics can make birth control less effective.</li>
        <li><strong>Grapefruit & Cholesterol Meds:</strong> Believe it or not, grapefruit can wildly change how your body processes certain statins.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Your Safety Shield:</h3>
      <p>Always inform your pharmacist of <em>everything</em> you are taking, including herbal teas and over-the-counter vitamins. We keep record of your history at Wesabi to prevent these dangerous interactions.</p>
    `,
    category: 'Medication Safety',
    date: 'Feb 01, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'missed-dose-actions',
    title: 'Missed a Dose? Don\'t Pivot into Panic',
    excerpt: 'It happens to the best of us. Here is exactly what to do for different types of medications.',
    content: `
      <p>"Did I take my pill?" It's a question we've all asked. The rules for a missed dose depend heavily on the medication.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">The General Rule:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>If you just missed it:</strong> Take it as soon as you remember.</li>
        <li><strong>If it's nearly time for the next dose:</strong> Skip the missed one and take your next dose as scheduled.</li>
        <li><strong>NEVER:</strong> Take two doses at once to "catch up" unless specifically told by a professional.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Exceptions:</h3>
      <p>Birth control, diabetes medications, and blood thinners have very specific "window" rules. If you're unsure, call Wesabi Pharmacy immediately and we'll tell you exactly how to proceed.</p>
    `,
    category: 'Medication Safety',
    date: 'Jan 25, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'antibiotics-usage',
    title: 'Antibiotics: The Truth About When You Need Them',
    excerpt: 'Antibiotics are powerful, but only for certain fights. Learn the difference between viruses and bacteria.',
    content: `
      <p>Overusing antibiotics creates "superbugs" that medicines can't kill. It's essential to use them correctly.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Bacteria vs. Virus:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Bacteria:</strong> Tiny organisms that cause infections like strep throat or UTIs. Antibiotics kill these.</li>
        <li><strong>Viruses:</strong> Cause the common cold, most sore throats, and the flu. <strong>Antibiotics do NOTHING for viruses.</strong></li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Use them Right:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Only take antibiotics prescribed <em>for you</em>.</li>
        <li>Don't save "leftovers" for next time.</li>
        <li>Always complete the full course even if you feel 100% better.</li>
      </ul>

      <p>Talk to our pharmacists at Wesabi to understand if your symptoms actually require an antibiotic.</p>
    `,
    category: 'Medication Safety',
    date: 'Jan 15, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5910950/pexels-photo-5910950.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'painkiller-mistakes',
    title: 'Painkiller Pitfalls: Common Mistakes People Make',
    excerpt: 'Think twice before reaching for that pill. Learn the safe way to manage your pain.',
    content: `
      <p>Over-the-counter painkillers are generally safe, but common mistakes lead to gastric ulcers, liver issues, or kidney damage.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Stop These Mistakes:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Taking more than directed:</strong> Double the dose doesn't mean double the speed of relief.</li>
        <li><strong>Mixing Brands with same ingredients:</strong> Taking two different brands that both contain paracetamol can lead to dangerous overdose.</li>
        <li><strong>Using them for everything:</strong> Not every ache needs medication—sometimes stretching or hydration is the answer.</li>
        <li><strong>Ignoring Expiry Dates:</strong> Older medications can become less effective or even toxic.</li>
      </ol>

      <p>For the safest pain management tailored to your weight and history, consultation at Wesabi is always free.</p>
    `,
    category: 'Medication Safety',
    date: 'Dec 30, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'reading-prescriptions',
    title: 'Doctor Speak: Decoding Your Prescription',
    excerpt: 'What does "TID" or "PRN" mean? We translate the shorthand for you.',
    content: `
       <p>Ever looked at a prescription and felt like it was written in code? That's because it technically is—mostly using Latin abbreviations.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Quick Translation:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>QD:</strong> Every day.</li>
        <li><strong>BID:</strong> Twice a day.</li>
        <li><strong>TID:</strong> Three times a day.</li>
        <li><strong>PO:</strong> By mouth.</li>
        <li><strong>PRN:</strong> As needed (typically for pain).</li>
        <li><strong>PC:</strong> After meals.</li>
      </ul>

      <p>While we always provide clear, English instructions on your medicine pack at Wesabi, understanding these symbols helps you verify your own care.</p>
    `,
    category: 'Medication Safety',
    date: 'Dec 20, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/4047120/pexels-photo-4047120.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'finish-antibiotics',
    title: 'Complete the Course: Why Stopping Early is Dangerous',
    excerpt: 'Feeling better? That doesn\'t mean the bacteria are gone. Here\'s why you must finish every pill.',
    content: `
      <p>Stopping antibiotics as soon as you feel better is a recipe for disaster. It's the primary cause of antibiotic resistance.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">What Happens:</h3>
      <p>The strongest bacteria are often the last to die. If you stop early, these "survivors" multiply. They are now "aware" of the medicine and learn how to resist it. Next time you get sick, that same medicine won't work.</p>

      <p>Always follow the count. If you have 21 pills, take 21 pills. Need a hand with a schedule? Wesabi Pharmacy offers free medication organizers.</p>
    `,
    category: 'Medication Safety',
    date: 'Dec 10, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3683072/pexels-photo-3683072.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'side-effect-warnings',
    title: 'Side Effects: What\'s Normal and What\'s Not',
    excerpt: 'Nausea? Dizziness? Rash? Learn which side effects are expected and which are warnings.',
    content: `
      <p>All medications can cause side effects. Most are mild and go away as your body adjusts, but some are a sign that the medication isn't right for you.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Expect These (But Inform Us):</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Mild stomach upset.</li>
        <li>Slight drowsiness.</li>
        <li>Dry mouth.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Stop and Call Immediately IF:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Sudden Rash or Hives:</strong> Possible allergic reaction.</li>
        <li><strong>Swelling of face/tongue:</strong> Signs of anaphylaxis.</li>
        <li><strong>Severe Dizziness or Fainting.</strong></li>
        <li><strong>Yellowing of eyes/skin:</strong> Possible liver reaction.</li>
      </ul>

      <p>We provide a detailed patient information leaflet with every medication at Wesabi to keep you informed.</p>
    `,
    category: 'Medication Safety',
    date: 'Nov 20, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'medication-storage',
    title: 'Cool, Dry, Dark: Storing Meds in Hot Climates',
    excerpt: 'The heat isn\'t just hard on you—it can destroy your medication. Learn the best storage spots.',
    content: `
      <p>Nairobi can get warm, and that heat significantly degrades the effectiveness of many medications. Proper storage is about protecting your health investment.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Best Spots:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>A high shelf in a hallway or bedroom cupboard.</li>
        <li>Away from direct sunlight.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">WORST Spots:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>The Bathroom:</strong> Humidity from showers is the number one destroyer of pills.</li>
        <li><strong>The Kitchen:</strong> Heat from cooking and steam is a major issue.</li>
        <li><strong>Windowsills:</strong> Direct UV light breaks down chemical bonds.</li>
      </ul>

      <p>Not sure if a specific medication needs refrigeration? Just look for the storage instructions on our labels or ask us at Wesabi.</p>
    `,
    category: 'Medication Safety',
    date: 'Nov 05, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'self-medication-dangers',
    title: 'The Hidden Risks of Self-Medication',
    excerpt: 'Treating yourself without a diagnosis often masks the real problem. Let professionals lead the way.',
    content: `
      <p>It's tempting to reach for a pill based on advice from a friend or a quick Google search. But self-medication comes with serious risks.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">The Dangers:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Masking Symptoms:</strong> You might silence a headache that is actually a sign of high blood pressure.</li>
        <li><strong>Incorrect Diagnosis:</strong> Thinking you have an "infection" when it's actually an allergy.</li>
        <li><strong>Wasted Money:</strong> Buying expensive medicines you don't actually need.</li>
      </ul>

      <p>At Wesabi Pharmacy, we offer professional consultations for free. We'll help you understand your symptoms so you get the right treatment, not just <em>any</em> treatment.</p>
    `,
    category: 'Medication Safety',
    date: 'Oct 15, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5910955/pexels-photo-5910955.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'otc-overuse',
    title: 'Too Much of a Good Thing: OTC Meds to Not Overuse',
    excerpt: 'Even Over-the-counter meds can hurt you if used too long. Learn the limits.',
    content: `
      <p>"Over the counter" doesn't mean "Risk-free." Some medicines are only intended for very short-term use.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Watch Out For:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Nasal Sprays:</strong> Using decongestant sprays for more than 3-5 days can actually cause <em>more</em> congestion (rebound effect).</li>
        <li><strong>Laxatives:</strong> Long-term use can make your body dependent on them.</li>
        <li><strong>Acid Reducers:</strong> Taking them daily for months can hide serious stomach issues.</li>
      </ul>

      <p>If you find yourself needing an OTC medicine every single day, it's time to talk to us at Wesabi.</p>
    `,
    category: 'Medication Safety',
    date: 'Sept 30, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3683050/pexels-photo-3683050.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // 3. Chronic Care (Chronic Disease & Long-Term Care)
  {
    id: 'diabetes-control-habits',
    title: 'Diabetes Mastery: Daily Habits for a Better Life',
    excerpt: 'Living with diabetes is a marathon. These daily habits make the journey easier.',
    content: `
      <p>Managing diabetes is about more than just checking numbers. It's about small, consistent choices.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">The Daily Success Checklist:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Foot Checks:</strong> Look for any cuts or sores every single night.</li>
        <li><strong>Fiber First:</strong> Start every meal with high-fiber veggies to slow sugar absorption.</li>
        <li><strong>Timed Movement:</strong> A 10-minute walk after meals can significantly improve sugar processing.</li>
        <li><strong>Stay Hydrated:</strong> Water helps your kidneys flush out excess sugar.</li>
      </ol>

      <p>We offer full diabetic support at Wesabi, from specialized footwear advice to the latest insulin storage solutions.</p>
    `,
    category: 'Chronic Care',
    date: 'Feb 08, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5909477/pexels-photo-5909477.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'bp-diet-foods',
    title: 'Eat to Live: Foods That Lower High Blood Pressure',
    excerpt: 'Your kitchen is your first line of defense against hypertension. Add these to your plate.',
    content: `
      <p>Dietary changes are one of the most powerful ways to manage or prevent high blood pressure.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">The BP Power Foods:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Leafy Greens:</strong> Spinach and kale are high in potassium, which helps your heart.</li>
        <li><strong>Berries:</strong> Full of flavonoids that reduce inflammation.</li>
        <li><strong>Garlic:</strong> Contains allicin, which helps relax blood vessels.</li>
        <li><strong>Oats:</strong> High fiber reduces cholesterol and manages pressure.</li>
      </ul>

      <p>Pair a heart-healthy diet with regular monitoring. We offer full nutritional guidance for hypertension patients at Wesabi.</p>
    `,
    category: 'Chronic Care',
    date: 'Jan 28, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/1435737/pexels-photo-1435737.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'bp-check-frequency',
    title: 'The BP Schedule: How Often is Often Enough?',
    excerpt: 'Monitoring is key, but don\'t let it become an obsession. Here is the recommended frequency.',
    content: `
      <p>Knowledge is power, but overdrawing blood pressure can cause "monitor stress" which spikes the reading!</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Recommended Frequency:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Stability Phase:</strong> Once a week is usually enough if your readings are consistently in range.</li>
        <li><strong>Adjustment Phase:</strong> Twice a day (Morning and Evening) if you've recently changed medications or dosage.</li>
        <li><strong>Prevention:</strong> Once a month for healthy adults over 40.</li>
      </ul>

      <p>Stop by Wesabi for a professional check if you feel your home monitor is giving strange readings. We also provide free calibration services.</p>
    `,
    category: 'Chronic Care',
    date: 'Jan 05, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/6050516/pexels-photo-6050516.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'diabetes-warning-signs',
    title: 'Early Warnings: Diabetes Signs You Often Ignore',
    excerpt: 'Your body broadcasts signals for months before a diagnosis. Learn to spot the quiet ones.',
    content: `
      <p>Type 2 diabetes often develops slowly. Many people ignore the early signals because they seem like "normal aging" or "busy lifestyle."</p>

      <h3 class="text-xl font-bold mt-6 mb-3">The Quiet Warnings:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Slow Healing:</strong> That simple cut takes two weeks to close instead of two days.</li>
        <li><strong>Dark Patches:</strong> Darker skin on the neck or armpits (acanthosis nigricans).</li>
        <li><strong>Blurred Vision:</strong> That comes and goes during the day.</li>
        <li><strong>Extreme Hunger:</strong> Even after a full meal.</li>
      </ul>

      <p>Early detection can prevent long-term complications. Visit Wesabi for a quick, painless HBA1c test today.</p>
    `,
    category: 'Chronic Care',
    date: 'Dec 05, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5909477/pexels-photo-5909477.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'asthma-attack-management',
    title: 'Asthma Attack: Staying Calm When You Can\'t Breathe',
    excerpt: 'An asthma attack is terrifying. Having a clear, practiced plan saves lives.',
    content: `
      <p>Knowing exactly what to do when your chest tightens can prevent a hospital stay.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">5 Steps for Success:</h3>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Sit Up Straight:</strong> Don't lie down; it makes breathing harder.</li>
        <li><strong>Slow, Steady Breaths:</strong> Keep calm to prevent the airways from tightening further.</li>
        <li><strong>Use Your Inhaler:</strong> Take one puff of your reliever (blue) inhaler every 30–60 seconds, up to 10 puffs.</li>
        <li><strong>Distance the Trigger:</strong> Move away from smoke, pets, or dust.</li>
        <li><strong>Call for Help:</strong> If you don't feel better after 10 puffs, seek emergency care.</li>
      </ol>

      <p>Need a new inhaler or spacers? We stock all major brands at Wesabi and can show you the correct technique for the most effective delivery.</p>
    `,
    category: 'Chronic Care',
    date: 'Nov 15, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hypertension-lifestyle',
    title: 'Beyond the Pill: Lifestyle for Hypertension',
    excerpt: 'Medication is only half the battle. Here is how to win the rest with simple lifestyle shifts.',
    content: `
      <p>Living with high blood pressure doesn't mean life is over—it just means it's time for an upgrade.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">The Lifestyle Shift:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Salt Swap:</strong> Use herbs and spices instead of salt for flavor.</li>
        <li><strong>Stress Buster:</strong> Just 15 minutes of quiet time or prayer daily reduces stress hormones.</li>
        <li><strong>Sleep Well:</strong> Aim for 7–8 hours; poor sleep is a primary driver of high pressure.</li>
        <li><strong>Limit "Hidden" Salt:</strong> Most salt comes from processed bread and canned goods, not the salt shaker.</li>
      </ul>

      <p>We offer blood pressure management plans at Wesabi that include tracking journals and counseling.</p>
    `,
    category: 'Chronic Care',
    date: 'Oct 20, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/6050516/pexels-photo-6050516.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // 4. Pharmacy Services (Local Pharmacy Conversion Topics)
  {
    id: 'licensed-pharmacy-importance',
    title: 'Licensed vs. Legend: Why Where You Buy Matters',
    excerpt: 'Counterfeit medicines are a real risk. Buying from licensed pharmacies is your only guarantee of safety.',
    content: `
      <p>In the world of medicine, the source is everything. Licensed pharmacies aren't just shops; they are regulated healthcare institutions.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Why Choose a Licensed Pharmacy?</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Proven Source:</strong> Every pill is tracked from the manufacturer to ensure it's genuine.</li>
        <li><strong>Storage Control:</strong> We maintain strict temperature controls to prevent medicine degradation.</li>
        <li><strong>Expert Oversight:</strong> You are served by trained pharmaceutical technologists who catch errors.</li>
        <li><strong>Legal Recourse:</strong> We are accountable to the Pharmacy and Poisons Board.</li>
      </ul>

      <p>Wesabi Pharmacy is fully licensed and committed to the highest standards of safety for our community.</p>
    `,
    category: 'Pharmacy Services',
    date: 'Feb 10, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'benefits-of-regular-checks',
    title: 'The Hidden Benefit of Your Local Pharmacist',
    excerpt: 'We do more than just sell pills. Learn how checking in with us regularly keeps you healthier.',
    content: `
      <p>Think of your local pharmacist as the most accessible member of your healthcare team.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Why Check-in Weekly?</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Relationship-Based Care:</strong> We know your history and can spot subtle changes in your health.</li>
        <li><strong>Free Consultations:</strong> Get professional medical advice without the hospital queue.</li>
        <li><strong>Weight Monitoring:</strong> Track your BMI and heart health on your way home.</li>
        <li><strong>Medication Review:</strong> We can help simplify your regimen to make it easier to follow.</li>
      </ul>

      <p>Don't be a stranger! Stop by Wesabi for a quick health check-in today.</p>
    `,
    category: 'Pharmacy Services',
    date: 'Jan 02, 2026',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5910950/pexels-photo-5910950.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'save-hospital-visits',
    title: 'Avoid the Queue: How We Save You Hospital Visits',
    excerpt: 'Minor ailments don\'t always need a doctor. See us first for faster, cheaper care.',
    content: `
      <p>Did you know that up to 40% of emergency room visits could be safely handled in a pharmacy?</p>

      <h3 class="text-xl font-bold mt-6 mb-3">See Us First For:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Rashes and minor skin irritations.</li>
        <li>Coughs, colds, and seasonal flu.</li>
        <li>Minor aches and pains.</li>
        <li>Basic first aid for cuts and scrapes.</li>
        <li>Questions about your existing medications.</li>
      </ul>

      <p>We'll provide the right care and, more importantly, we'll tell you honestly if you <em>do</em> need to see a doctor. Save time and money at Wesabi.</p>
    `,
    category: 'Pharmacy Services',
    date: 'Dec 01, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'quick-health-tests',
    title: '5-Minute Health Checks at Wesabi',
    excerpt: 'You don\'t need a full day lab visit to know your numbers. Get your essentials checked in minutes.',
    content: `
      <p>Preventive health shouldn't be a chore. We offer rapid, professional testing right here in your neighborhood.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Available Rapid Tests:</h3>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Blood Pressure:</strong> Instant results to track your heart health.</li>
        <li><strong>Blood Sugar (Random/Fasting):</strong> Essential for diabetes monitoring.</li>
        <li><strong>BMI and Weight Analysis:</strong> Understand your body composition.</li>
        <li><strong>Malaria Testing:</strong> Get your results in 15 minutes.</li>
      </ul>

      <p>No appointment needed. Just walk in and walk out with peace of mind. Your health is our priority at Wesabi Pharmacy.</p>
    `,
    category: 'Pharmacy Services',
    date: 'Nov 01, 2025',
    author: 'Wesabi Pharmacy',
    image: 'https://images.pexels.com/photos/5909241/pexels-photo-5909241.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('about_text').del()
  await knex('about_images').del()

  // Inserts seed entries
  await knex('about_text').insert([
    {
      protein_type: 'spam',
      title: 'Chapter I: The Mysterious Origins',
      body: `In the days of yore, amidst the bustling marketplaces and rustic farms of 20th century America, a great culinary conundrum plagued the minds of the common folk: "How might we preserve the succulent essence of pork for times of scarcity and adventure?" Little did they know, the answer would come from the alchemical kitchens of the Hormel Food Corporation.
  
      It was the year 1937, when the winds of innovation swept through the humble town of Austin, Minnesota. There, amidst bubbling cauldrons and mystical spices, Jay C. Hormel, a visionary akin to Prometheus, birthed a creation that would transcend time and space. Thus, SPAM was born — a miraculous amalgamation of pork shoulder and ham, bound together by a secret concoction known only to the wisest of food wizards.`,
    },
    {
      protein_type: 'spam',
      title: 'Chapter II: The Rise to Glory',
      body: `SPAM's ascent to glory was swift and unchallenged. During the dark and tumultuous times of World War II, when rations were scarce and morale was low, SPAM emerged as a beacon of sustenance and hope. Soldiers carried tins of SPAM into battle, each can a veritable Excalibur of nourishment.
  
      Across the seven seas, from the deserts of North Africa to the jungles of the Pacific, SPAM was a constant companion. Its indomitable spirit fueled the Allied forces, earning it the reverent title of "The Meat That Won the War." Even Winston Churchill, in his infinite wisdom, extolled the virtues of SPAM, declaring it "a war-time delicacy of the highest order."`,
    },
    {
      protein_type: 'spam',
      title: 'Chapter III: The Global Conquest',
      body: `As the war drums fell silent and peace was restored, SPAM embarked on a grand tour of the globe. It became a culinary ambassador, introducing its unique flavor to lands far and wide. In the lush islands of Hawaii SPAM was embraced with open arms, finding its way into the hearts and dishes of the people.
  
      In South Korea, SPAM ascended to the status of a beloved delicacy, often exchanged as a token of goodwill and festivity. The Japanese, with their unparalleled artistry, transformed SPAM into onigiri and sushi, elevating it to new gastronomic heights. From the bustling streets of Manila to the quiet hamlets of the United Kingdom, SPAM's influence was omnipresent.`,
    },
    {
      protein_type: 'spam',
      title: 'Chapter IV: The Eternal Legacy',
      body: `As decades passed, SPAM cemented its legacy not merely as a food item, but as a cultural icon. It inspired songs, poems, and even a Monty Python sketch that would echo through the annals of comedic history. Festivals celebrating SPAM's magnificence sprang up around the world, where devotees would gather in joyous revelry to honor the timeless tin.
  
      In the hallowed halls of culinary academia, scholars and chefs alike pondered the alchemical magic of SPAM. They extolled its versatility, its resilience, and its unwavering ability to bring joy to the masses. SPAM became a symbol of ingenuity, a testament to the human spirit's capacity to innovate and adapt.`,
    },
    {
      protein_type: 'spam',
      title: 'Epilogue: A Timeless Treasure',
      body: `Today, as we stand on the shoulders of culinary giants, we pay homage to SPAM — that humble tin of porky perfection that defied the odds and captured the hearts of millions. In our pantries and on our plates, SPAM remains a cherished treasure, a reminder of simpler times and the indomitable spirit of human creativity.`,
    },
    {
      protein_type: 'tofu',
      title: 'Chapter I: The Ancient Beginnings',
      body: `Long before the bustling markets of today, in the tranquil villages of ancient China, a humble yet revolutionary food was born. Legend has it that over two thousand years ago, a scholar accidentally curdled soy milk while experimenting with various coagulants, unknowingly giving rise to one of history’s most enduring culinary treasures. 
    
      This serendipitous discovery, dating back to the Han Dynasty, was whispered about in village gatherings, as people marveled at this new, delicate creation — a block of "bean curd" with a texture unlike any other. Tofu, as it would come to be called, became a revered staple, a gift from the kitchens of antiquity.`,
    },
    {
      protein_type: 'tofu',
      title: 'Chapter II: The Spread Across Asia',
      body: `Tofu’s popularity spread beyond the borders of China, traversing cultural boundaries to become a cherished ingredient across Asia. In Japan, it was adopted as a staple by Buddhist monks, who revered it as a symbol of purity and simplicity. Tofu's journey continued, reaching Korea and Southeast Asia, where each culture would adapt it, weaving it into local recipes and traditions.
    
      From smooth silken tofu to the hearty texture of firm varieties, tofu transformed into an art form, celebrated by generations for its adaptability, nourishment, and cultural significance. As it made its way through new lands, tofu became a culinary canvas, a medium for flavors both subtle and bold.`,
    },
    {
      protein_type: 'tofu',
      title: 'Chapter III: The Enlightenment Era',
      body: `In the 20th century, as the world began to explore healthier lifestyles and plant-based diets, tofu stepped onto the global stage. Western cultures embraced tofu, recognizing it as a protein-rich alternative that could harmonize with an array of cuisines. 
    
      Tofu found its place in gourmet kitchens and family dinners alike, a symbol of nourishment and versatility. It became a core element of the vegetarian movement, embodying a spirit of sustainability and compassion that resonated across the world. As recipes evolved, tofu's limitless potential continued to inspire culinary creativity.`,
    },
    {
      protein_type: 'tofu',
      title: 'Chapter IV: A Global Legacy',
      body: `Today, tofu stands as more than just a food item — it is an ambassador of plant-based living, a bridge between cultures, and a testament to the beauty of simplicity. From traditional miso soup to modern stir-fries, tofu remains a beloved ingredient, celebrated by millions who cherish its wholesome qualities and endless adaptability.
    
      As chefs and home cooks worldwide explore tofu's potential, it transforms effortlessly, honoring the legacy of its ancient roots while embracing the flavors of the modern world. Tofu's journey continues, an unbroken legacy of nourishment and cultural harmony.`,
    },
    {
      protein_type: 'tofu',
      title: 'Epilogue: The Pillar of Plant-Based Living',
      body: `In an era that values sustainability, health, and inclusivity, tofu shines as a beacon of plant-based living. It connects people across continents and generations, a timeless treasure that brings a taste of ancient wisdom into modern life. 
    
      Tofu remains an enduring testament to the power of humble ingredients, a reminder of the ingenuity of our ancestors and their gift of sustenance that carries forward in every bite.`,
    },
  ])

  await knex('about_images').insert([
    {
      protein_type: 'spam',
      link: 'vintage_ham.jpeg',
      alt: 'a black and white etching of a ham hock',
      caption: 'Great grand-daddy SPAM, Sir Ham-Hock.',
    },
    {
      protein_type: 'spam',
      link: '1936_can_spam.jpg',
      alt: 'a can of hormel spiced ham',
      caption: 'SPAM the elder, Father Hormel.',
    },
    {
      protein_type: 'spam',
      link: 'ww2_spam.jpeg',
      alt: 'an early can of spam, with a different font from the modern version',
      caption: 'Fresh-faced SPAM in his childhood years.',
    },
    {
      protein_type: 'spam',
      link: 'spam_musubi.jpg',
      alt: 'spam musubi, spam stacked on rice wrapped in nori',
      caption: 'A Hawaiian favourite, SPAM musubi.',
    },
    {
      protein_type: 'spam',
      link: 'spam_world.jpeg',
      alt: 'A globe, with the globe itself replaced by a rectangle of SPAM',
      caption: 'SPAM is the well-travelled meat!',
    },
    {
      protein_type: 'tofu',
      link: 'tofu_making_edo_period.jpg',
      alt: 'Woodblock print of tofu making process',
      caption: 'Tofu making in the Edo period, Japan.',
    },
    {
      protein_type: 'tofu',
      link: 'traditional_tofu_making.jpg',
      alt: 'A man stirs a large pot of soybean paste',
      caption:
        'Traditional tofu production at the Pak Kailimi factory in central Java, Indonesia. Photograph by Tatas Hardo Panintingjati Brotosudarmo.',
    },
    {
      protein_type: 'tofu',
      link: 'mapo_doufu.JPG',
      alt: 'A large bowl of mapo tofu',
      caption: 'Mapo tofu, a traditional Chinese dish.',
    },
    {
      protein_type: 'tofu',
      link: 'agedashi_tofu.jpg',
      alt: 'A plate of agedashi tofu',
      caption: 'Agedashi tofu, from Japan.',
    },
    {
      protein_type: 'tofu',
      link: 'agedashi_tofu.jpg',
      alt: 'A plate of agedashi tofu',
      caption: 'Agedashi tofu, from Japan.',
    },
    {
      protein_type: 'tofu',
      link: 'sundubu_jjigae.jpg',
      alt: 'A plate of subdubu jjigae',
      caption: 'Korean subdubu jjigae.',
    },
  ])
}

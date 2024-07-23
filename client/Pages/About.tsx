function About() {
  const spamHistory = [
    {
      title: 'Chapter I: The Mysterious Origins',
      body: `In the days of yore, amidst the bustling marketplaces and rustic farms of 20th century America, a great culinary conundrum plagued the minds of the common folk: "How might we preserve the succulent essence of pork for times of scarcity and adventure?" Little did they know, the answer would come from the alchemical kitchens of the Hormel Food Corporation.
  
      It was the year 1937, when the winds of innovation swept through the humble town of Austin, Minnesota. There, amidst bubbling cauldrons and mystical spices, Jay C. Hormel, a visionary akin to Prometheus, birthed a creation that would transcend time and space. Thus, SPAM was born — a miraculous amalgamation of pork shoulder and ham, bound together by a secret concoction known only to the wisest of food wizards.`,
    },
    {
      title: 'Chapter II: The Rise to Glory',
      body: `SPAM's ascent to glory was swift and unchallenged. During the dark and tumultuous times of World War II, when rations were scarce and morale was low, SPAM emerged as a beacon of sustenance and hope. The soldiers, those valiant knights of the modern era, carried tins of SPAM into battle, each can a veritable Excalibur of nourishment.
  
      Across the seven seas, from the deserts of North Africa to the jungles of the Pacific, SPAM was a constant companion. Its indomitable spirit fueled the Allied forces, earning it the reverent title of "The Meat That Won the War." Even Winston Churchill, in his infinite wisdom, extolled the virtues of SPAM, declaring it "a war-time delicacy of the highest order."`,
    },
    {
      title: 'Chapter III: The Global Conquest',
      body: `As the war drums fell silent and peace was restored, SPAM embarked on a grand tour of the globe. It became a culinary ambassador, introducing its unique flavor to lands far and wide. In the lush islands of Hawaii, SPAM was embraced with open arms and aloha spirit, finding its way into the hearts and dishes of the people.
  
      In South Korea, SPAM ascended to the status of a beloved delicacy, often exchanged as a token of goodwill and festivity. The Japanese, with their unparalleled artistry, transformed SPAM into onigiri and sushi, elevating it to new gastronomic heights. From the bustling streets of Manila to the quiet hamlets of the United Kingdom, SPAM's influence was omnipresent.`,
    },
    {
      title: 'Chapter IV: The Eternal Legacy',
      body: `As decades passed, SPAM cemented its legacy not merely as a food item, but as a cultural icon. It inspired songs, poems, and even a Monty Python sketch that would echo through the annals of comedic history. Festivals celebrating SPAM's magnificence sprang up around the world, where devotees would gather in joyous revelry to honor the timeless tin.
  
      In the hallowed halls of culinary academia, scholars and chefs alike pondered the alchemical magic of SPAM. They extolled its versatility, its resilience, and its unwavering ability to bring joy to the masses. SPAM became a symbol of ingenuity, a testament to the human spirit's capacity to innovate and adapt.`,
    },
    {
      title: 'Epilogue: A Timeless Treasure',
      body: `Today, as we stand on the shoulders of culinary giants, we pay homage to SPAM — that humble tin of porky perfection that defied the odds and captured the hearts of millions. In our pantries and on our plates, SPAM remains a cherished treasure, a reminder of simpler times and the indomitable spirit of human creativity.`,
    },
  ]

  const images = [
    {
      link: 'vintage_ham.jpeg',
      alt: 'a black and white etching of a ham hock',
      caption: 'Great grand-daddy SPAM, Sir Ham-Hock.',
    },
  ]

  return (
    <>
      <div className="flex p-4">
        <section className="w-3/4 p-4">
          <article className="flex flex-col items-center justify-center">
            <h1>The history of SPAM</h1>
            {spamHistory.map((section) => (
              <>
                <section className="border-spamBlue m-2 rounded-lg border-2 p-4">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              </>
            ))}
          </article>
        </section>
        <section>
          {images.map((image) => (
            <>
              <img
                src={`./images/${image.link}`}
                alt={image.alt}
                className="border-spamBlue w-80 rounded-lg border-2"
              />
              <p>
                <em>{image.caption}</em>
              </p>
            </>
          ))}
        </section>
      </div>
    </>
  )
}

export default About

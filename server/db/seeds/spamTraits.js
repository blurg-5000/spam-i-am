export async function seed(knex) {
  await knex('spamTraits').insert([
    {
      spam_id: 1,
      spam_trait: 'chill and laid-back',
      What_does_your_spam_say_about_you:
        "You're someone who appreciates keeping things light and breezy. You embrace life with a laid-back attitude and know how to find the silver lining in any situation. Adventure may call, but you're content to take things one easy step at a time.",
    },
    {
      id: 2,
      spam_trait: 'cheesy and playful',
      What_does_your_spam_say_about_you:
        "You have a playful and cheesy side to your personality. You enjoy adding a bit of fun and flavor to life, and your friends likely see you as someone who brings joy to any gathering. While you appreciate comfort, you're not afraid to indulge in a little whimsy now and then.",
    },
    {
      id: 3,
      spam_trait: 'bold and adventurous',
      What_does_your_spam_say_about_you:
        "Hot n Spicy reveals your bold and adventurous spirit. You thrive on excitement and enjoy pushing boundaries, whether it's through trying new foods or seeking out thrilling experiences. Your zest for life is contagious, and you're always up for a fiery challenge.",
    },
    {
      id: 4,
      spam_trait: 'festive and vibrant',
      What_does_your_spam_say_about_you:
        "You're someone who loves to infuse life with vibrancy and festivity. You have a warm and welcoming personality, and your friends likely admire your ability to bring people together for a good time. You appreciate the richness of culture and enjoy exploring new flavors and experiences.",
    },
    {
      id: 5,
      spam_trait: 'zen and balanced',
      What_does_your_spam_say_about_you:
        "You're someone who appreciates balance and harmony in life. You have a Zen-like demeanor and strive to find peace amidst the chaos. While you enjoy trying new things, you prefer them to be in moderation and with a sense of tranquility.",
    },
    {
      id: 6,
      spam_trait: 'indulgent and extravagant',
      What_does_your_spam_say_about_you:
        "Real Hormel Bacon indicates you're someone who loves to indulge in life's pleasures. You have a taste for the finer things and aren't afraid to treat yourself every now and then. Your friends likely see you as someone who knows how to enjoy the good life, one savory bite at a time.",
    },
    {
      id: 7,
      spam_trait: 'warm and welcoming',
      What_does_your_spam_say_about_you:
        "You have a warm and inviting personality. You enjoy connecting with others and sharing in life's joys, much like the rich flavors of Portuguese cuisine. Your friends likely appreciate your comforting presence and the sense of home you bring wherever you go.",
    },
    {
      id: 8,
      spam_trait: 'timeless and reliable',
      What_does_your_spam_say_about_you:
        "You're someone who values tradition and reliability. You appreciate the simple pleasures in life and find comfort in the familiar. Your friends likely see you as someone who can always be counted on, much like the timeless appeal of SPAM Classic itself.",
    },
    {
      id: 9,
      spam_trait: 'sweet and comforting',
      What_does_your_spam_say_about_you:
        "You have a sweet and comforting disposition. You enjoy adding a touch of warmth to life's moments and find joy in the simple pleasures. Your friends likely appreciate your nurturing nature and the sense of coziness you bring to any gathering.",
    },
    {
      id: 10,
      spam_trait: 'bold and assertive',
      What_does_your_spam_say_about_you:
        "You have a bold and assertive personality. You're not afraid to make your presence known and leave a lasting impression. While some may find your intensity intimidating, your friends likely admire your unwavering confidence and willingness to stand out from the crowd.",
    },
    {
      id: 11,
      spam_trait: 'spicy and fiery',
      What_does_your_spam_say_about_you:
        "You're someone who enjoys living life with a spicy kick. You have a fiery spirit and aren't afraid to speak your mind or take risks. Your friends likely see you as someone who adds excitement to any situation and keeps them on their toes.",
    },
    {
      id: 12,
      spam_trait: 'energetic and lively',
      What_does_your_spam_say_about_you:
        'You have an energetic and lively personality. You enjoy embracing life with gusto and infusing every moment with passion. Your friends likely admire your zest for adventure and the way you bring a burst of flavor to their lives.',
    },
    {
      id: 13,
      spam_trait: 'shard and peppery',
      What_does_your_spam_say_about_you:
        "You have a sharp and peppery personality. You're someone who isn't afraid to add a little spice to life and keep things interesting. Your friends likely appreciate your wit and dynamic presence, knowing they'll always be entertained in your company.",
    },
    {
      id: 14,
      spam_trait: 'smoky and rugged',
      What_does_your_spam_say_about_you:
        "You're someone who enjoys the rugged charm of life's adventures. You have a smoky complexity to your personality and aren't afraid to embrace your rough edges. Your friends likely admire your authenticity and the way you infuse every experience with a hint of intrigue.",
    },
    {
      id: 15,
      spam_trait: 'traditional and family-orientated',
      What_does_your_spam_say_about_you:
        'You have a traditional and family-oriented personality. You value the comfort of home and cherish moments spent with loved ones. Your friends likely see you as someone who brings a sense of warmth and togetherness to every gathering.',
    },
    {
      id: 16,
      spam_trait: 'health-conscious ana mindful',
      What_does_your_spam_say_about_you:
        'You have a health-conscious and mindful approach to life. You strive to make choices that are good for both your body and mind, even when it comes to indulging in guilty pleasures. Your friends likely admire your commitment to balance and well-being.',
    },
  ])
}

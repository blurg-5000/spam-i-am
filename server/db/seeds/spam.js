export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('spam').del()

  // Inserts seed entries
  await knex('spam').insert([
    {
      id: 1,
      name: 'SPAM lite',
      description:
        "For those who want to lighten up their SPAM experience without lightening up their wallet. It's like regular SPAM but with fewer calories and more existential pondering.",
      flavour_profile:
        'Like regular SPAM, but with a hint of existential crisis.',
      image: './images/4-lite.png',
    },
    {
      id: 2,
      name: 'SPAM with cheese',
      description:
        "Cheese lovers, rejoice! Now you can enjoy the delightful combination of mystery meat and cheese in one convenient can. It's like a grilled cheese sandwich, but without the bread... or the grill.",
      flavour_profile:
        "For when you want your SPAM to say 'cheese' in every bite!",
      image: './images/4-cheese-2.png',
    },
    {
      id: 3,
      name: 'SPAM hot n spicy',
      description:
        'Warning: May cause spontaneous combustion... of flavor! Our SPAM Hot n Spicy is not for the faint of heart or weak of taste buds. Handle with caution and a side of milk.',
      flavour_profile: 'Warning: May cause unexpected dance moves.',
      image: './images/6-hot-n-spicy.png',
    },
    {
      id: 4,
      name: 'SPAM with Tocino',
      description:
        'Bringing a taste of the tropics to your pantry, one slice at a time. Our SPAM with Tocino seasoning will transport you to a sunny beach with each savory bite. Palm trees not included.',
      flavour_profile: 'Bringing a fiesta to your SPAM party!',
      image: './images/15-tocino.png',
    },
    {
      id: 5,
      name: 'SPAM Teriyaki',
      description:
        "Get ready to do the SPAM-urai dance with our SPAM Teriyaki! This fusion of Hawaiian and Japanese flavors will have you saying 'Mahalo' and 'Arigato' in the same breath.",
      flavour_profile: 'SPAMming up your sushi game!',
      image: './10-teriyaki.png',
    },
    {
      id: 6,
      name: 'SPAM with Real Hormel bacon',
      description:
        'Because why settle for just one processed meat when you can have two? Our SPAM with Real Hormel Bacon is like a bacon-wrapped surprise in every can. Breakfast just got weirder.',
      flavour_profile: "Because everything's better with bacon, even SPAM!",
      image: './images/1-bacon-2.png',
    },
    {
      id: 7,
      name: 'SPAM with Portuguese sausage',
      description:
        "Obrigado for choosing our SPAM with Portuguese Sausage seasoning! It's like a culinary journey to the streets of Lisbon, minus the jet lag and passport control.",
      flavour_profile: 'Olá! SPAM com sabor português!',
      image: './images/13-port-sausage.png',
    },
    {
      id: 8,
      name: 'SPAM classic',
      description:
        'Ah, the timeless classic. Our SPAM Classic is like the little black dress of canned meats – always in style, never out of place. Serve it up with a side of nostalgia.',
      flavour_profile:
        'The OG of canned meats, bringing nostalgia in every bite.',
      image: './images/14-classic2.png',
    },
    {
      id: 9,
      name: 'SPAM Maple flavoured',
      description:
        'For those who like their SPAM with a side of syrupy sweetness. Our SPAM Maple Flavored is the perfect blend of savory and sugary, like breakfast in a can... or a mid-life crisis.',
      flavour_profile: 'A taste of Canada in every slice, eh?',
      image: './images/16-maple.png',
    },
    {
      id: 10,
      name: 'SPAM Garlic',
      description:
        "For garlic enthusiasts who believe there's no such thing as too much garlic breath. Our SPAM Garlic is guaranteed to keep vampires AND dinner guests at bay. Just don't forget the mints.",
      flavour_profile: 'For those who want to keep vampires AND hunger at bay!',
      image: './images/12-garlic.png',
    },
    {
      id: 11,
      name: 'SPAM Jalapeno',
      description:
        "Brace yourself for a fiesta in your mouth with our SPAM Jalapeno! It's like a spicy salsa dance for your taste buds, leaving you caliente and craving more. Warning: May cause spontaneous salsa cravings.",
      flavour_profile: 'Spicing up your inbox with every can!',
      image: './images/8-jalapeno.png',
    },
    {
      id: 12,
      name: 'SPAM with Chorizo seasoning',
      description:
        "¡Olé! Our SPAM with Chorizo Seasoning brings the flavors of Spain straight to your pantry. It's like a flamenco dance party in a can, with each bite delivering a burst of fiesta-worthy flavor.",
      flavour_profile:
        '¡Ay, caramba! Bringing a bit of fiesta to your SPAM party!',
      image: './images/9-chorizo.png',
    },
    {
      id: 13,
      name: 'Black Pepper SPAM',
      description:
        "Get ready to spice up your life with our Black Pepper SPAM! It's like a pepper grinder went on a vacation to Flavortown and brought back souvenirs in the form of deliciously peppery canned meat. Just don't sneeze while opening the can.",
      flavour_profile: 'Adding a kick to your canned cuisine!',
      image: './images/5-black-pepper.png',
    },
    {
      id: 14,
      name: 'Hickory smoke flavoured SPAM',
      description:
        "Calling all barbecue enthusiasts! Our Hickory Smoke Flavored SPAM brings the smoky goodness of a backyard grill-out straight to your kitchen. It's like a campfire sing-along, but with more meat and fewer mosquitoes.",
      flavour_profile: 'Bringing the BBQ vibes to your pantry!',
      image: './images/3-hickory-2.png',
    },
    {
      id: 15,
      name: 'Oven roasted Turkey SPAM',
      description:
        "Gobble up the goodness with our Oven Roasted Turkey SPAM! It's like Thanksgiving dinner in a can, minus the family drama and awkward political discussions. Just carve, serve, and enjoy a slice of holiday cheer anytime of the year.",
      flavour_profile: 'Thanksgiving dinner in a can!',
      image: './images/7-turkey-2.png',
    },
    {
      id: 16,
      name: '25% less Sodium SPAM',
      description:
        "Introducing our guilt-free SPAM option: 25% Less Sodium SPAM! It's like regular SPAM, but with a side of self-satisfaction and slightly less impending heart failure. Because who says you can't be health-conscious and enjoy canned meat at the same time?",
      flavour_profile:
        'For when you want to be healthy but also want SPAM. A compromise!',
      image: './images/11-sodium.png',
    },
  ])
}

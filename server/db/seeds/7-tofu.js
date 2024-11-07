export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tofu').del()

  // Inserts seed entries
  await knex('tofu').insert([
    {
      id: 1,
      name: 'Tofu Classic',
      image: 'tofu_classic.png',
      description: 'beany',
      flavour_profile: 'a spongy canvas of possibilities',
    },
    {
      id: 2,
      name: 'Tofu Teriyaki',
      image: 'tofu_teriyaki.jpg',
      description: 'Sweet and savoury',
      flavour_profile: 'delicious',
    },
    {
      id: 3,
      name: 'Tofu Spicy',
      image: 'tofu_spicy.jpg',
      description: 'tingly and spicy',
      flavour_profile: 'not for the faint hearted',
    },
    {
      id: 4,
      name: 'Tofu Curry',
      image: 'tofu_curry.jpg',
      description: 'a warm blend of spices and aromatics',
      flavour_profile: 'flavourful',
    },
    {
      id: 5,
      name: 'Tofu Maple',
      image: 'tofu_maple.jpg',
      description: 'sweet and sticky',
      flavour_profile: 'sweeth tooth delight',
    },
    {
      id: 6,
      name: 'Tofu Silken',
      image: 'tofu_silken.jpg',
      description: 'amazing as a dessert',
      flavour_profile: 'smoooooooooth',
    },
    {
      id: 7,
      name: 'Tofu Inari',
      image: 'tofu_inari.jpg',
      description: 'a fun little pocket',
      flavour_profile: 'a surprise in every bite',
    },
    {
      id: 8,
      name: 'Tofu Fried',
      image: 'tofu_fried.webp',
      description: 'Crispy and crunchy',
      flavour_profile: 'satisfying',
    },
    {
      id: 9,
      name: 'Tofu Tempeh',
      image: 'tofu_tempeh.jpg',
      description: `Tofu's big sibling`,
      flavour_profile: 'extra beany',
    },
  ])
}

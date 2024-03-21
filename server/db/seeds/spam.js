export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('spam').del()

  // Inserts seed entries
  await knex('spam').insert([
    {
      id: 1,
      name: 'spam lite',
      description: 'spam but lighter',
      flavour_profile: 'I dunno',
    },
    {
      id: 2,
      name: 'spam cheese',
      description: 'spam but cheesier',
      flavour_profile: 'I dunno',
    },
    {
      id: 3,
      name: 'hot n spicy',
      description: 'spam but spicier',
      flavour_profile: 'I dunno',
    },
  ])
}

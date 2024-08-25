export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {id: 1, user_name: 'Roger'},
    {id: 2, user_name: 'Coolio'},
    {id: 3, user_name: 'Stacy'}
  ]);
}

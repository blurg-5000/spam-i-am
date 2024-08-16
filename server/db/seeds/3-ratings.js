export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ratings').del()
  await knex('ratings').insert([
    { id: 1, user_id: 1, spam_id: 1, rating: 5 },
    { id: 2, user_id: 2, spam_id: 2, rating: 1 },
    { id: 3, user_id: 3, spam_id: 3, rating: 2 },
    { id: 4, user_id: 1, spam_id: 4, rating: 5 },
    { id: 5, user_id: 2, spam_id: 5, rating: 1 },
    { id: 6, user_id: 3, spam_id: 6, rating: 2 },
    { id: 7, user_id: 1, spam_id: 7, rating: 5 },
    { id: 8, user_id: 2, spam_id: 8, rating: 1 },
    { id: 9, user_id: 3, spam_id: 9, rating: 2 },
    { id: 10, user_id: 1, spam_id: 10, rating: 5 },
    { id: 11, user_id: 2, spam_id: 11, rating: 1 },
    { id: 12, user_id: 3, spam_id: 12, rating: 2 },
    { id: 13, user_id: 3, spam_id: 13, rating: 2 },
  ])
}

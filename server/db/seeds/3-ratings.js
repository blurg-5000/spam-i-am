export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ratings').del()

  // Inserts seed entries
  await knex('ratings').insert([
    { id: 1, user_id: 'auth0|xxx123', spam_id: 1, rating: 5 }, // Roger's rating for SPAM Classic
    { id: 2, user_id: 'auth0|xxx456', spam_id: 2, rating: 3 }, // Coolio's rating for SPAM Lite
    { id: 3, user_id: 'auth0|xxx789', spam_id: 3, rating: 4 }, // Stacy's rating for SPAM Cheese
    { id: 4, user_id: 'auth0|66cbc884e7c0bdb35a8b976a', spam_id: 4, rating: 2 }, // fake-user's rating for SPAM Hot & Spicy
    { id: 5, user_id: 'auth0|xxx123', spam_id: 5, rating: 4 }, // Roger's rating for SPAM 25% Less Sodium
    { id: 6, user_id: 'auth0|xxx456', spam_id: 6, rating: 5 }, // Coolio's rating for SPAM with Real Hormel Bacon
    { id: 7, user_id: 'auth0|xxx789', spam_id: 7, rating: 3 }, // Stacy's rating for SPAM Jalapeno
    { id: 8, user_id: 'auth0|66cbc884e7c0bdb35a8b976a', spam_id: 8, rating: 5 }, // fake-user's rating for SPAM Korean BBQ
    { id: 9, user_id: 'auth0|xxx123', spam_id: 9, rating: 4 }, // Roger's rating for SPAM Maple
    { id: 10, user_id: 'auth0|xxx456', spam_id: 10, rating: 5 }, // Coolio's rating for SPAM with Hickory Smoke
    { id: 11, user_id: 'auth0|xxx789', spam_id: 11, rating: 3 }, // Stacy's rating for SPAM with Turkey
    {
      id: 12,
      user_id: 'auth0|66cbc884e7c0bdb35a8b976a',
      spam_id: 12,
      rating: 4,
    }, // fake-user's rating for SPAM with Teriyaki
    { id: 13, user_id: 'auth0|xxx123', spam_id: 13, rating: 5 }, // Roger's rating for SPAM with Tocino Seasoning
  ])
}

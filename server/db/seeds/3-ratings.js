export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ratings').del()

  // Inserts seed entries
  await knex('ratings').insert([
    { user_id: 'auth0|xxx123', spam_id: 1, rating: 5 }, // Roger's rating for SPAM Classic
    { user_id: 'auth0|xxx456', spam_id: 2, rating: 3 }, // Coolio's rating for SPAM Lite
    { user_id: 'auth0|xxx789', spam_id: 3, rating: 4 }, // Stacy's rating for SPAM Cheese
    { user_id: 'auth0|66cbc884e7c0bdb35a8b976a', spam_id: 4, rating: 2 }, // fake-user's rating for SPAM Hot & Spicy
    { user_id: 'auth0|xxx123', spam_id: 5, rating: 4 }, // Roger's rating for SPAM 25% Less Sodium
    { user_id: 'auth0|xxx456', spam_id: 6, rating: 5 }, // Coolio's rating for SPAM with Real Hormel Bacon
    { user_id: 'auth0|xxx789', spam_id: 7, rating: 3 }, // Stacy's rating for SPAM Jalapeno
    { user_id: 'auth0|66cbc884e7c0bdb35a8b976a', spam_id: 8, rating: 5 }, // fake-user's rating for SPAM Korean BBQ
    { user_id: 'auth0|xxx123', spam_id: 9, rating: 4 }, // Roger's rating for SPAM Maple
    { user_id: 'auth0|xxx456', spam_id: 10, rating: 5 }, // Coolio's rating for SPAM with Hickory Smoke
    { user_id: 'auth0|xxx789', spam_id: 11, rating: 3 }, // Stacy's rating for SPAM with Turkey
    {
      user_id: 'auth0|66cbc884e7c0bdb35a8b976a',
      spam_id: 12,
      rating: 4,
    }, // fake-user's rating for SPAM with Teriyaki
    { user_id: 'auth0|xxx123', spam_id: 13, rating: 5 }, // Roger's rating for SPAM with Tocino Seasoning
  ])
}

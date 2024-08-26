export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()

  // Inserts seed entries
  await knex('comments').insert([
    {
      id: 1,
      user_id: 'auth0|xxx123',
      spam_id: 1,
      comment_text:
        'The classic flavor brings back memories! Always a favorite.',
      created_date: 1625152800, // Example timestamp
    },
    {
      id: 2,
      user_id: 'auth0|xxx456',
      spam_id: 2,
      comment_text: 'A bit too salty for my taste, but still good in a pinch.',
      created_date: 1625249200, // Example timestamp
    },
    {
      id: 3,
      user_id: 'auth0|xxx789',
      spam_id: 3,
      comment_text: 'Surprisingly spicy! Loved it, but not for everyone.',
      created_date: 1625335600, // Example timestamp
    },
    {
      id: 4,
      user_id: 'auth0|xxx123',
      spam_id: 4,
      comment_text:
        'Didn’t expect to enjoy it, but it’s surprisingly versatile in recipes.',
      created_date: 1625422000, // Example timestamp
    },
    {
      id: 5,
      user_id: 'auth0|xxx456',
      spam_id: 5,
      comment_text: 'Great for sandwiches, but a little too oily.',
      created_date: 1625508400, // Example timestamp
    },
    {
      id: 6,
      user_id: 'auth0|xxx789',
      spam_id: 6,
      comment_text: 'My kids love this flavor! Perfect for quick meals.',
      created_date: 1625594800, // Example timestamp
    },
    {
      id: 7,
      user_id: 'auth0|xxx123',
      spam_id: 1,
      comment_text: 'Tastes great fried with eggs for breakfast!',
      created_date: 1625681200, // Example timestamp
    },
    {
      id: 8,
      user_id: 'auth0|xxx456',
      spam_id: 2,
      comment_text: 'Not my favorite flavor, but it’s okay.',
      created_date: 1625767600, // Example timestamp
    },
    {
      id: 9,
      user_id: 'auth0|xxx789',
      spam_id: 3,
      comment_text: 'I love the unique blend of spices in this one.',
      created_date: 1625854000, // Example timestamp
    },
    {
      id: 10,
      user_id: 'auth0|xxx123',
      spam_id: 4,
      comment_text: 'A bit bland for me, could use more seasoning.',
      created_date: 1625940400, // Example timestamp
    },
  ])
}

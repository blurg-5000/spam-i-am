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
      // created_date: 16251528,
    },
    {
      id: 2,
      user_id: 'auth0|xxx456',
      spam_id: 2,
      comment_text: 'A bit too salty for my taste, but still good in a pinch.',
      // created_date: 16252492,
    },
    {
      id: 3,
      user_id: 'auth0|xxx789',
      spam_id: 3,
      comment_text: 'Surprisingly spicy! Loved it, but not for everyone.',
      // created_date: 16253356,
    },
    {
      id: 4,
      user_id: 'auth0|xxx123',
      spam_id: 4,
      comment_text:
        'Didn’t expect to enjoy it, but it’s surprisingly versatile in recipes.',
      // created_date: 16254220,
    },
    {
      id: 5,
      user_id: 'auth0|xxx456',
      spam_id: 5,
      comment_text: 'Great for sandwiches, but a little too oily.',
      // created_date: 16255084,
    },
    {
      id: 6,
      user_id: 'auth0|xxx789',
      spam_id: 6,
      comment_text: 'My kids love this flavor! Perfect for quick meals.',
      // created_date: 16255948,
    },
    {
      id: 7,
      user_id: 'auth0|xxx123',
      spam_id: 1,
      comment_text: 'Tastes great fried with eggs for breakfast!',
      // created_date: 16256812,
    },
    {
      id: 8,
      user_id: 'auth0|xxx456',
      spam_id: 2,
      comment_text: 'Not my favorite flavor, but it’s okay.',
      // created_date: 16257676,
    },
    {
      id: 9,
      user_id: 'auth0|xxx789',
      spam_id: 3,
      comment_text: 'I love the unique blend of spices in this one.',
      // created_date: 16258540,
    },
    {
      id: 10,
      user_id: 'auth0|xxx123',
      spam_id: 4,
      comment_text: 'A bit bland for me, could use more seasoning.',
      // created_date: 16259404,
    },
  ])
}

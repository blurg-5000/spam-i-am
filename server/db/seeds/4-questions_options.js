export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('options').del()

  // Insert questions and get their IDs
  const questionIds = await knex('questions')
    .insert([
      { question: 'blah 1' },
      { question: 'blah 2' },
      { question: 'blah 3' },
      { question: 'blah 4' },
      { question: 'blah 5' },
    ])
    .returning('id')

  console.log(questionIds[0].id)

  // Insert options using the question IDs directly
  await knex('options').insert([
    // Assuming questionIds are returned in the same order
    { question_id: questionIds[0].id, image: 'img.png', text: 'blah 1' },
    { question_id: questionIds[0].id, image: 'img.png', text: 'blah 2' },
    { question_id: questionIds[0].id, image: 'img.png', text: 'blah 3' },
    { question_id: questionIds[0].id, image: 'img.png', text: 'blah 4' },

    { question_id: questionIds[1].id, image: 'img.png', text: 'blah 1' },
    { question_id: questionIds[1].id, image: 'img.png', text: 'blah 2' },
    { question_id: questionIds[1].id, image: 'img.png', text: 'blah 3' },
    { question_id: questionIds[1].id, image: 'img.png', text: 'blah 4' },

    { question_id: questionIds[2].id, image: 'img.png', text: 'blah 1' },
    { question_id: questionIds[2].id, image: 'img.png', text: 'blah 2' },
    { question_id: questionIds[2].id, image: 'img.png', text: 'blah 3' },
    { question_id: questionIds[2].id, image: 'img.png', text: 'blah 4' },

    { question_id: questionIds[3].id, image: 'img.png', text: 'blah 1' },
    { question_id: questionIds[3].id, image: 'img.png', text: 'blah 2' },
    { question_id: questionIds[3].id, image: 'img.png', text: 'blah 3' },
    { question_id: questionIds[3].id, image: 'img.png', text: 'blah 4' },

    { question_id: questionIds[4].id, image: 'img.png', text: 'blah 1' },
    { question_id: questionIds[4].id, image: 'img.png', text: 'blah 2' },
    { question_id: questionIds[4].id, image: 'img.png', text: 'blah 3' },
    { question_id: questionIds[4].id, image: 'img.png', text: 'blah 4' },
  ])
}

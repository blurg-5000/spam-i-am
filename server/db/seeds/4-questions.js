export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    {
      id: 1,
      question: 'blah 1',
      option_1: ['img.png', 'blah 1'],
      option_2: ['img.png', 'blah 2'],
      option_3: ['img.png', 'blah 3'],
      option_4: ['img.png', 'blah 4'],
    },
    {
      id: 2,
      question: 'blah 2',
      option_1: ['img.png', 'blah 1'],
      option_2: ['img.png', 'blah 2'],
      option_3: ['img.png', 'blah 3'],
      option_4: ['img.png', 'blah 4'],
    },
    {
      id: 3,
      question: 'blah 3',
      option_1: ['img.png', 'blah 1'],
      option_2: ['img.png', 'blah 2'],
      option_3: ['img.png', 'blah 3'],
      option_4: ['img.png', 'blah 4'],
    },
    {
      id: 4,
      question: 'blah 4',
      option_1: ['img.png', 'blah 1'],
      option_2: ['img.png', 'blah 2'],
      option_3: ['img.png', 'blah 3'],
      option_4: ['img.png', 'blah 4'],
    },
    {
      id: 5,
      question: 'blah 5',
      option_1: ['img.png', 'blah 1'],
      option_2: ['img.png', 'blah 2'],
      option_3: ['img.png', 'blah 3'],
      option_4: ['img.png', 'blah 4'],
    },
  ])
}

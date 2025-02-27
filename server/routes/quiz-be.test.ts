import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

import connection from '../db/connection.ts'
import server from '../server.ts'
import request from 'supertest'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('getting the quiz results, options and questions', () => {
  it('database query returns correct data', async () => {
    // ARRANGE
    const res = await request(server).get('/api/v1/quiz')
    //ACT

    expect(res.body).toHaveLength(5)
    expect(res.body[0]).toStrictEqual({
      id: 1,
      question: 'Pick your dream breakfast!',
      options: [
        {
          id: 1,
          question_id: 1,
          image: 'full_english.jpeg',
          text: 'Full English',
          category: 'a',
        },
        {
          id: 2,
          question_id: 1,
          image: 'handful_chillis.avif',
          text: 'A handful of chillis',
          category: 'b',
        },
        {
          id: 3,
          question_id: 1,
          image: 'pancakes.webp',
          text: 'Pancakes',
          category: 'c',
        },
        {
          id: 4,
          question_id: 1,
          image: 'leftover_pizza.jpg',
          text: 'Leftover pizza',
          category: 'd',
        },
      ],
    })

    // ASSERT
    expect(res.status).toBe(200)
  })
})
describe('quiz route', () => {
  it('quiz route returns correct categories', async () => {
    // ARRANGE
    const res = await request(server).get('/api/v1/quiz/a')

    //ACT
    expect(res.body).toStrictEqual({
      id: 1,
      category: 'a',
      name: 'SPAM Classic',
      image: 'spam_classic_text.png',
      info: "Just like the original SPAM, you're reliable, timeless, and beloved by many. You have a strong sense of tradition and a knack for keeping things simple and straightforward. People know they can count on you, and your steady nature makes you a comforting presence in any situation. You value consistency and aren't afraid to embrace the tried and true.",
    })
    // // ASSERT
    expect(res.status).toBe(200)
    // DAPH's CHANGES: The reason you kept getting id of 5, is besauce your seeds for the 'results' did not contain explicit id's. Knex will automatically incremement seed data if you don't explicityly say what they should be. This is why your second test - this one, was using 5 for the first result entry, because the last text created 1-4, anbd when it re-ran the seeds, it did the default knex behaviour for 'increment', and just used the next logical number.
  })

  it('returns 404 if category is not found', async () => {
    // ARR
    const res = await request(server).get('/api/v1/quiz/f')

    // ACT

    // ASSERT
    expect(res.status).toBe(404)
    // DAPH's CHANGES: I changed the status code to 404, and also made the gaurd for "Category" in your route to be more specific, as in, check that the category is not "a", or "b", or"c, or "d", because before you just had if it was truthy or not, and if it exists (is any kind of string) it will be truthy.
  })
})

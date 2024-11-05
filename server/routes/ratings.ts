import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

// All spam ratings:
// GET /api/v1/ratings
router.get('/', async (req, res) => {
  try {
    const ratings = await db.getAllRatings()
    res.json(ratings)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spams' })
  }
})

// Single spam rating:
// GET /api/v1/ratings/:spamId
router.get('/:spamId', async (req, res) => {
  try {
    const { spamId } = req.params
    const rating = await db.getAvgRatingBySpamId(Number(spamId))
    res.json({ rating })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// Add new spam rating:
// POST /api/v1/ratings/
router.post('/', async (req, res) => {
  try {
    const { rating, userId, spamId } = req.body
    console.log(req.body)
    const ratingResponse = await db.addRating(
      Number(spamId),
      Number(rating),
      userId,
    )

    res.status(201).json({ ratingResponse })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// How to test in Thunderclient:
// POST http://localhost:3000/api/v1/ratings/
// Send JSON Body:
// {
//   "userId": "auth0|xxx123",
//   "spamId": 6,
//   "rating": 5
// }

// TODO: At the moment, a user can only rate a spam once.
// Find a way to allow users to rate spams more than once?
// Do they update their original rating? So that it doesn't add more records and mess with the average.

export default router

import { Router } from 'express'

import * as db from '../db/spam.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

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

// Add a rating for authorized users
// POST /api/v1/ratings/
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const { spamId, rating } = req.body
  const userId = req.auth?.sub

  if (!userId) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }
  try {
    const newRating = await db.rateSpam(Number(rating), userId, Number(spamId))
    res.status(200).json({ newRating })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops could not create rating' })
  }
})

// How to test in Thunderclient:
// POST http://localhost:3000/api/v1/spams/ratings/
// Send JSON Body:
// {
//   "rating": 5,
//   "spamId": 1
// }

// TODO: At the moment, a user can only rate a spam once.
// Find a way to allow users to rate spams more than once?
// Do they update their original rating? So that it doesn't add more records and mess with the average.

export default router

import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

// GET: /api/v1/spams/ratings
router.get('/', async (req, res) => {
  try {
    const ratings = await db.getAllRatings()
    res.json(ratings)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spams' })
  }
})

// GET: /api/v1/spams/ratings/:spamId
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

// Get rating by ID WORKS! :)

// POST: /api/v1/spams/ratings/:spamId
router.post('/:spamId', async (req, res) => {
  try {
    const { rating, userId } = req.body
    const spamId = req.params.spamId
    const ratingResponse = await db.addRating(
      Number(spamId),
      Number(rating),
      Number(userId),
    )
    res.status(201).json({ ratingResponse })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// Add rating works! But can only add once....
// hit url: http://localhost:3000/api/v1/spams/ratings/1 (this is the spamId)
// Send JSON Body:
// {
//   "userId": 2,
//   "rating": 5
// }

export default router

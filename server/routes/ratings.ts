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

// Add new spam rating:
// POST /api/v1/ratings/
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const { rating, spamId } = req.body
    const userId = req.auth?.sub // this is coming from the header we set in the apiClient
    if (!userId) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }
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
//   "spamId": 6,
//   "rating": 5
// }
// AUTH BEARER TOKEN for using in Thunderclient:
// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxrMFcyTzFkWGNrVldvYllVZXlRWiJ9.eyJpc3MiOiJodHRwczovL3NwYW0tbWF0YWktMjAyNC5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjZjYmM4ODRlN2MwYmRiMzVhOGI5NzZhIiwiYXVkIjpbImh0dHBzOi8vc3BhbS9hcGkiLCJodHRwczovL3NwYW0tbWF0YWktMjAyNC5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzI0NzM1NDc4LCJleHAiOjE3MjQ4MjE4NzgsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhenAiOiJXcTROTTllYmJIVlBHVDZLSGQzbnE1RVZlV3dXSFQ1YyJ9.oz48gOmE4Iku8FNwpCKm9SHhszh37cQXypsfUDw0VAGxZ0T_cHgviHUdlSPNb_HFhxIOavWrCerXcBMbkA4cHunSDPzygcOkoKMq9WuqEHS1LiOjqWOEWWDi2IZGGKeQt1qxS80X4B-DWBTE_SLu2RY5i0L_rpD07Ru3EFAbLvGzUVE9pWWkvwGXJt15VajLWs8iRNQ6FmYku1mnLEuBnJ6DzHT2OSSvVmqRfxRmtRvoE9e8duzFs-2CbKGoz4myNX_h2jeD0oHaqJjLdP74ymMEgwFIZSqF81OPAZS6VLXdgvtm987FCu8WnSbgj714n88Dtyqv1JyOdKdJOa_EkA
// -------

// TODO: At the moment, a user can only rate a spam once.
// Find a way to allow users to rate spams more than once?
// Do they update their original rating? So that it doesn't add more records and mess with the average.

export default router

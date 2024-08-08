import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

// GET: /api/v1/spams
router.get('/', async (req, res) => {
  try {
    const spams = await db.getAllSpams()

    res.json({ spams })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spams' })
  }
})

// GET: /api/v1/spams/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const spam = await db.getSpam(Number(id))
    res.json({ spam })  
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// POST: /api/v1/spams
router.post('/', async (req, res) => {
  try {
    const spam = await db.createSpam(req.body)
    res.status(201).json({ spam })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// PUT: /api/v1/spams/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.updateSpam(Number(id), req.body)
    res.json({id})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// DELETE: /api/v1/spams/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deleteSpam(Number(id))
    res.json({ id })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})


// GET: /api/v1/spams/ratings
router.get('/ratings', async (req, res) => {
  try {
    const ratings = await db.getAllRatings()
    console.log(ratings);
    
    res.json(ratings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spams' })
  }
})
// Get ALL ratings DOES NOT work :( 

// GET: /api/v1/spams/ratings/:spamId
router.get('/ratings/:spamId', async (req, res) => {
  try {
    const { spamId } = req.params
    const rating = await db.getRating(Number(spamId))
    res.json({ rating })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// Get rating by ID WORKS! :) 

// POST: /api/v1/spams/ratings/:spamId
router.post('/ratings/:spamId', async (req, res) => {
  try {
    const { rating, userId } = req.body
    const spamId = req.params.spamId
    console.log(spamId, rating, userId);
    
    const ratingResponse = await db.addRating(Number(spamId), Number(rating), Number(userId))
    res.status(201).json({ ratingResponse })
  } catch (error) {
    console.log(error)
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

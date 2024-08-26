import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

// GET: /api/v1/comments/2 - Get all comments by spamId
router.get('/:spamId', async (req, res) => {
  try {
    const { spamId } = req.params
    const comments = await db.getCommentsBySpamId(Number(spamId))
    res.json({ comments })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no comments' })
  }
})

// POST: /api/v1/comments
router.post('/', async (req, res) => {
  try {
    // const spam = await db.createSpam(req.body)
    // res.status(201).json({ spam })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops could not create comment' })
  }
})

// PUT: /api/v1/comments/:id
router.patch('/:id', async (req, res) => {
  try {
    // const { id } = req.params
    // await db.updateSpam(Number(id), req.body)
    // res.json({ id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// DELETE: /api/v1/comments/:id
router.delete('/:id', async (req, res) => {
  try {
    // const { id } = req.params
    // await db.deleteSpam(Number(id))
    // res.json({ id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

export default router

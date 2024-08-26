import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

// This is a publicly visible route:
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

// This is a protected route - use checkJwt middleware:
// POST: /api/v1/comments
router.post('/', async (req, res) => {
  try {
    const { spamId, comment, userId } = req.body
    const newComment = await db.createComment(Number(spamId), comment, userId)
    res.status(201).json({ newComment })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops could not create comment' })
  }
})

// THUNDERCLIENT JSON BODY FOR POST Request:
// {
//   "userId": "auth0|xxx456",
//   "spamId": 2,
//   "comment": "Gross."
// }

// TODO:
// PATCH `/api/v1/comments/:id`
router.patch('/:id', async (req, res) => {})

// TODO:
// DELETE: /api/v1/comments/:id
router.delete('/:id', async (req, res) => {})

export default router

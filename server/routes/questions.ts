import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

// GET: /api/v1/questions/
router.get('/', async (req, res) => {
  try {
    const questions = await db.getAllQuestions()

    res.json(questions)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no questions' })
  }
})

export default router

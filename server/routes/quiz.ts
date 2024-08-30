import { Router } from 'express'
import * as db from '../db/spam.ts'
import { QuizQuestions } from '../../models/spam.ts'

const router = Router()

// GET: /api/v1/quiz/
router.get('/', async (req, res) => {
  try {
    const questions = await db.getAllQuestionsAndOptions()
    res.json(questions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no questions' })
  }
})

// TODO: Handle errors such as a non existent category being passed in as a param
router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category
    const result = await db.getQuizResultByCategory(category)
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Result could not be fetched' })
  }
})

export default router

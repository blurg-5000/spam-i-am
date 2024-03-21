import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const spams = await db.getAllSpams()

    res.json({ spams })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Oops no spams' })
  }
})

export default router

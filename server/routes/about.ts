import { Router } from 'express'

import * as db from '../db/spam.ts'

const router = Router()

// GET: /api/v1/about/text
router.get('/text/:protein', async (req, res) => {
  try {
    const protein = req.body.protein
    console.log(protein)
    const text = await db.getAllAboutTextByProtein(protein)
    res.json(text)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no text' })
  }
})

// GET: /api/v1/about/images
router.get('/images/:protein', async (req, res) => {
  try {
    const protein = req.body.protein
    console.log(protein)
    const images = await db.getAllAboutImagesByProtein(protein)
    res.json(images)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no images' })
  }
})

export default router

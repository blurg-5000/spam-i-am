import { Router } from 'express'

import * as db from '../db/tofu.ts'

const router = Router()

// GET: /api/v1/tofu
router.get('/', async (req, res) => {
  try {
    const tofu = await db.getAllTofu()

    res.json({ tofu })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no tofu' })
  }
})

// GET: /api/v1/tofu/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const tofu = await db.getTofu(Number(id))
    res.json({ tofu })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no tofu' })
  }
})

// POST: /api/v1/tofu
router.post('/', async (req, res) => {
  try {
    const tofu = await db.createTofu(req.body)
    res.status(201).json({ tofu })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no tofu' })
  }
})

// PUT: /api/v1/tofu/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.updateTofu(Number(id), req.body)
    res.json({ id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no tofu' })
  }
})

// DELETE: /api/v1/tofu/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deleteTofu(Number(id))
    res.json({ id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no tofu' })
  }
})

export default router

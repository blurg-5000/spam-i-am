import express from 'express'
import * as Path from 'node:path'

import spamRoutes from './routes/spams.ts'
import ratings from './routes/ratings.ts'
import questions from './routes/questions.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/spams', spamRoutes)
server.use('/api/v1/ratings', ratings)
server.use('/api/v1/questions', questions)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server

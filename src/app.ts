// express server setup

import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
// console.log(app.get('env'))

app.use('/api/v1/users/', usersRouter)

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully!')
})

export default app

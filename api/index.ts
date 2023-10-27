import express from 'express'
import contact from '../src/api/contact'

const app = express()
app.use(express.json())

// enable JSON body parsera
app.use(express.json())

contact(app)
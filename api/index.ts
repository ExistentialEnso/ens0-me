import express from 'express'
import contact from '../src/api/contact'

const app = express()

// enable JSON body parser
app.use(express.json())

contact(app)
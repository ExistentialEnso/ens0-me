import express from 'express'
import contact from '../src/api/contact'
import nfts from '../src/api/nfts'

const app = express()

// enable JSON body parser
app.use(express.json())

contact(app)
nfts(app)
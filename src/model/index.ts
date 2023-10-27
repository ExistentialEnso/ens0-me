import mongoose from 'mongoose'
import ContactMessage from './ContactMessage'
import NFT from './NFT'
import NFTCategory from './NFTCategory'

// Fallback URI using local MongoDB instance
const LOCAL_URI = 'mongodb://localhost/ens0-site'

// Use Mongoose to connect to the database
const MONGODB_URI = process.env.MONGODB_URI != null ? process.env.MONGODB_URI : LOCAL_URI
console.log(`Connecting to Mongo database.`)

mongoose.connect(MONGODB_URI)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error:'))

const model = {
    ContactMessage,
    NFT,
    NFTCategory
}

export default model
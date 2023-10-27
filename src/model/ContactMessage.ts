import { Schema, model } from 'mongoose'

const ContactMessageSchema = new Schema({
    createdAt: { type: Date, default: Date.now },

    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true }
})

export default model('ContactMessage', ContactMessageSchema)
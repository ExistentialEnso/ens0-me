import mongoose, { Schema, model } from 'mongoose'

const ContactMessageSchema = new Schema({
    createdAt: { type: Date, default: Date.now },

    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true }
})

const ContactMessageModel = mongoose.models.ContactMessage || model('ContactMessage', ContactMessageSchema)
export default ContactMessageModel
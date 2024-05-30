import type { NextApiRequest, NextApiResponse } from 'next'
import model from '../../model'
import sgMail from '@sendgrid/mail'

// Get our SendGrid API key from the environment variables
const sgKey = process.env["SENDGRID_API_KEY"] || ""

sgMail.setApiKey(sgKey)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Build an object to send to SendGrid
        const msg = {
            to: "existentialenso@gmail.com",
            from: "no-reply@smol.farm",
            subject: 'ens0.me Contact Form Inquiry',
            text: 'Someone contacted you by the contact form on your personal website:\n\n' +
                'Name: ' + req.body.name + '\n\n' +
                'Email: ' + req.body.email + '\n\n' +
                'Subject: ' + req.body.subject + '\n\n' +
            'Message: \n' + req.body.message
        }

        // Log the message to the database

        await model.ContactMessage.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })

        // Send the message to SendGrid
        sgMail.send(msg).then(() => {
            res.status(200).json({})
        })
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}
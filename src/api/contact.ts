/* eslint-disable import/no-anonymous-default-export */
import model from '../model'
import sgMail from '@sendgrid/mail'
import { Application, Request, Response } from 'express'

const sgKey = process.env["SENDGRID_API_KEY"] || ""
sgMail.setApiKey(sgKey)

export default (app: Application) => {
    app.post("/api/contact/message", async (req: Request, res: Response) => {
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
            res.json({})
        })
    })
}
"use client"
import React, { useState } from "react"
import axios from "axios"
import Button from "../components/Button"
import FormInput from "../components/FormInput"
import isEmail from 'validator/lib/isEmail'

type ContactFormErrors = {
    name?: string,
    email?: string,
    subject?: string,
    message?: string,
}

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [errors, setErrors] = useState<ContactFormErrors>({})

    const submit = async () => {
        if(sending) {
            return
        }
        setSending(true)

        // Validate the form
        const errors: ContactFormErrors = {}
        
        if(!name) {
            errors.name = "Please enter your name."
        }
        if(!email) {
            errors.email = "Please enter your email."
        } else if(!isEmail(email)) {
            errors.email = "Please enter a valid email."
        }
        if(!message) {
            errors.message = "Please enter a message."
        }

        if(errors.name || errors.email || errors.message || errors.subject) {
            setErrors(errors)
            setSending(false)
            return
        }

        const msgData = {
            name: name,
            email: email,
            message: message,
            subject: subject
        }

        await axios.post("/api/contact/", msgData)

        setSent(true)
    }

    // If the message was already sent, display a success message
    if(sent) {
        return (
            <div className="font-bold">
                Your message was sent! I will get back to you as soon as I can.
            </div>
        )
    }

    return(
        <React.Fragment>
            <FormInput
                id="name"
                label="your name"
                value={name}
                onChange={(e) => setName((e.target as HTMLInputElement).value)}
                error={errors.name}
                />

            <FormInput
                id="email"
                label="your email"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                error={errors.email}
                />

            <FormInput
                id="subject"
                label="subject of your inquiry"
                value={subject}
                onChange={(e) => setSubject((e.target as HTMLInputElement).value)}
                error={errors.subject}
                />

            <FormInput
                id="message"
                label="your message"
                value={message}
                onChange={(e) => setMessage((e.target as HTMLInputElement).value)}
                error={errors.message}
                multiline
                />

            <div className="my-3">
                <Button onClick={submit}>send message</Button>
            </div>
            
        </React.Fragment>
    )
}

export default ContactForm
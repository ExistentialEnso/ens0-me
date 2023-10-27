"use client"
import React, { useState } from "react"
import axios from "axios"
import Button from "../components/Button"
import FormInput from "../components/FormInput"

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    
    const [sent, setSent] = useState(false)

    const submit = () => {
        const msgData = {
            name: name,
            email: email,
            message: message,
            subject: subject
        }

        axios.post("/api/contact/message/", msgData)

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
                />

            <FormInput
                id="email"
                label="your email"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                />

            <FormInput
                id="subject"
                label="subject of your inquiry"
                value={subject}
                onChange={(e) => setSubject((e.target as HTMLInputElement).value)}
                />

            <FormInput
                id="message"
                label="your message"
                value={message}
                onChange={(e) => setMessage((e.target as HTMLInputElement).value)}
                multiline
                />

            <div className="my-3">
                <Button onClick={submit}>Submit</Button>
            </div>
            
        </React.Fragment>
    )
}

export default ContactForm
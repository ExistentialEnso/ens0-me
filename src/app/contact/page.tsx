import Heading from '../components/Heading'
import ContactForm from './ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Thorne | contact',
    description: 'Get in touch with Thorne!',
}

export default function Contact() {
  return (
    <main className="container mx-auto pt-12 px-8">
        <Heading size={1}>get in touch</Heading>

        <p className="my-6">
            Please fill out the form below if you want to contact me!
        </p>

        <ContactForm />
    </main>
  )
}

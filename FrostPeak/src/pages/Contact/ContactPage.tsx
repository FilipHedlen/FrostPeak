import ContactFAQ from '../../components/Contact/ContactFAQ/ContactFAQ'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import ContactSection from '../../components/Contact/ContactSection/ContactSection'

const ContactPage = () => {
  return (
    <div className="flex flex-row flex-wrap sm:justify-center lg:justify-around">
        <ContactSection />
        <ContactFAQ />
        <ContactForm />
    </div>
  )
}

export default ContactPage;
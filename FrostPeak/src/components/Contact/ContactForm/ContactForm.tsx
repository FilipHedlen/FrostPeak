import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [isMailSent, setIsMailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Env variables for EmailJS
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const form = e.currentTarget;

    if (form) {
        try {
          await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);
          console.log("Email sent successfully!");
          setIsMailSent(true); // Changes state when mail gets sent
        } catch (error) {
          console.error("Error sending email", error);
        }
    
        form.reset();
      }
    };

    return (
        <div className="w-full sm:w-[90%] max-w-lg mx-8 my-16 animate-slide-in-top">
          {isMailSent ? 
            <div className="bg-transparent mx-auto p-4 mb-4 width flex justify-center w-[50%]">
              <h3 className="text-2xl font-playfair text-white">
                Your mail has been sent successfully!
              </h3>
            </div>
           : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-3xl font-bold mb-4 font-playfair text-white underline">Contact Form</h3>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-lightgrey leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-lightgrey leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-lightgrey leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                />
              </div>
              <div className="flex justify-start">
                <button
                  className="bg-darkblue hover:bg-cherryred focus:outline-none text-white text-lg sm:text-xl font-bold shadow-md rounded-full p-3"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
    );
};
  
export default ContactForm;
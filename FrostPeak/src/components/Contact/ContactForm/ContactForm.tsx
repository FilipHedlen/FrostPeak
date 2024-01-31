import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (e.currentTarget) {
        try {
          await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);
          console.log("Email sent successfully!");
        } catch (error) {
          console.error("Error sending email", error);
        }
    
        e.currentTarget.reset();
      }
    };

    return (
      <form className="w-full max-w-lg mx-auto my-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 font-playfair text-white">Contact form</h2>
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
  
        <div className="mb-6">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-lightgrey leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
          >
          </textarea>
        </div>
  
        <div className="flex items-center justify-end">
          <button
            className="bg-white hover:bg-lightgrey text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-nunito"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    );
};
  
export default ContactForm;
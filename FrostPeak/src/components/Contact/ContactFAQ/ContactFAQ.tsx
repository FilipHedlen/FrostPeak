import { useState } from 'react';
import faqData from '../../../data/faqData';

export interface FAQItem {
  question: string;
  answer: string;
}

const ContactFAQ = () => {
  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const handleOpenAnswer = (answer: number) => {
    setOpenAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };


  return (
    <div className="w-full sm:w-[90%] max-w-lg mx-8 my-16 animate-slide-in-right">
      <h3 className="text-2xl sm:text-3xl text-white font-bold mb-4 font-playfair underline">FAQ</h3>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="cursor-pointer text-white hover:text-black font-poppins mb-2 font-bold"
            onClick={() => handleOpenAnswer(index)}
          >
            {faq.question}
          </div>
          {openAnswer === index && (
            <p className="ml-4 text-white font-poppins font-medium">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactFAQ;
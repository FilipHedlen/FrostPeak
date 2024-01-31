import React, { useState } from 'react';
import faqData from '../../../data/faqData';

export interface FAQItem {
  question: string;
  answer: string;
}

const ContactFAQ: React.FC = () => {
  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const handleOpenAnswer = (answer: number) => {
    setOpenAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };


  return (
    <div className="w-full max-w-lg ml-auto my-8">
      <h3 className="text-2xl text-white font-bold mb-2 font-playfair">FAQ</h3>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-3">
        <div
          className="cursor-pointer text-white hover:text-black font-poppins mb-1"
          onClick={() => handleOpenAnswer(index)}
        >
          {faq.question}
        </div>
        {openAnswer === index && (
            <p className="ml-4 text-white font-poppins">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactFAQ;
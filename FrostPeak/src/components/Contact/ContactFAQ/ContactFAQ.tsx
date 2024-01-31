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
    <div>
      <h3 className="text-2xl font-bold mb-2">FAQ</h3>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-3">
        <div
          className="cursor-pointer text-blue-500"
          onClick={() => handleOpenAnswer(index)}
        >
          {faq.question}
        </div>
        {openAnswer === index && (
            <p className="ml-4">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactFAQ;
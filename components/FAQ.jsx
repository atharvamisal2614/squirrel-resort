import React, { useState } from 'react';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is the check-in and check-out time?',
      answer: 'Check-in is from 2:00 PM onwards, and check-out is until 12:00 PM.',
    },
    {
      question: 'Do you offer airport shuttle services?',
      answer: 'Yes, we offer complimentary airport shuttle services for all our guests.',
    },
    {
      question: 'Are pets allowed at the resort?',
      answer: 'Yes, pets are allowed in designated pet-friendly areas of the resort.',
    },
    {
      question: 'Is there free Wi-Fi available?',
      answer: 'Yes, we provide high-speed Wi-Fi throughout the resort premises.',
    },
    {
      question: 'What recreational activities are available?',
      answer: 'We offer a variety of activities, including swimming, yoga sessions, and guided nature walks.',
    },
  ];

  return (
    <div className="w-full py-12 bg-orange-50">
      <div className="faq-header text-center mb-8">
 
        <h1 className="text-2xl md:text-4xl mb-2 text-customOrange font-serif tracking-wide">Got Questions?</h1>
        <h2 className="text-md md:text-lg font-medium text-gray-600 font-serif tracking-widest">
          Here are some answers to our most common questions
        </h2>
      </div>

      <div className="mx-auto w-11/12 md:w-8/12">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-customOrange">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-gray-800 focus:outline-none hover:text-customOrange"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="text-2xl font-bold">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="pl-4 pb-4 text-gray-800">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

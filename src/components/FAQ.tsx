import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have a variety of delicious vegetarian dishes on our menu, including our popular Sabzi Palak and vegetarian Bolani."
  },
  {
    question: "Is your meat Halal?",
    answer: "Yes, all meat served at Noshe Cambridge is 100% Halal certified."
  },
  {
    question: "Are you open on Mondays?",
    answer: "Yes, we are open seven days a week, including Mondays, from 11:30 AM to 10:00 PM."
  },
  {
    question: "Do I need to make a reservation?",
    answer: "While walk-ins are welcome, we recommend making a reservation, especially for dinner and weekends, to ensure you get a table."
  },
  {
    question: "Do you offer takeaway or delivery?",
    answer: "Yes, we offer both takeaway and delivery services. You can order directly through our website or popular food delivery platforms."
  },
  {
    question: "Do you serve alcohol?",
    answer: "We do not serve alcohol, but we offer a wide range of non-alcoholic beverages, including our house-roasted Kenza Coffee and traditional Afghan drinks."
  },
  {
    question: "Do you serve breakfast and lunch?",
    answer: "We serve lunch and dinner daily. On weekends, we also offer a special breakfast menu from 9:00 AM to 11:30 AM."
  },
  {
    question: "Can I purchase your Kenza coffee to brew at home?",
    answer: "Absolutely! We offer 250g bags of our freshly roasted Kenza coffee for purchase in-store and through our website."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif mb-8 text-center">
          <span className="text-primary">Frequently Asked </span>
          <span className="text-accent">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-primary" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
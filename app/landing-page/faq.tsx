"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need to provide personal details to join?",
      answer: (
        <>
          No, Open Place doesn&apos;t require any personal information. Just
          create a Code Name, user ID, and password, and you&apos;re ready to
          go.
        </>
      ),
    },
    {
      question: "Can I have private conversations?",
      answer:
        "Absolutely. You can create private Places and invite others for more secure, intimate discussions.",
    },
    {
      question: "Is my data being tracked or monitored?",
      answer:
        "Not at all. Open Place is built with privacy in mind—no analytics, no location tracking, and no surveillance of any kind.",
    },
    {
      question: "Can I share the link to my Place with others?",
      answer:
        "Yes! Each Place has a unique URL you can share, allowing others to easily join public discussions.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#195276] dark:text-gray-200">
          Frequently Asked Questions
        </h2>
        <div className="max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 bg-white dark:bg-gray-800 rounded border-b border-gray-600 hover:bg-[#F3AA1D]/10 dark:hover:bg-[#F3AA1D]/20 transition-colors duration-200"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-[#195276] dark:text-gray-200">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#195276] dark:text-gray-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#195276] dark:text-gray-200" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-5 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <p className="text-[#195276] dark:text-gray-200">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
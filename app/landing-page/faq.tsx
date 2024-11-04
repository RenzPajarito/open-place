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
      question: "What is Open Place?",
      answer:
        "Open Place is a secure online platform where individuals can connect with like-minded people, share experiences, and explore new avenues of personal and collective growth. It prioritizes user privacy and fosters meaningful conversations in a safe environment.",
    },
    {
      question: "How does Open Place ensure user privacy?",
      answer:
        "Open Place uses state-of-the-art encryption and security measures to protect user data. We implement strict privacy policies, allow anonymous interactions, and give users control over their personal information sharing preferences.",
    },
    {
      question: "Can I use Open Place for free?",
      answer:
        "Yes, Open Place offers a free tier that includes access to public rooms and limited private rooms. For additional features and unlimited private rooms, we offer a Pro subscription plan.",
    },
    {
      question: "What kind of communities can I find on Open Place?",
      answer:
        "Open Place hosts a wide variety of communities, ranging from support groups and hobby enthusiasts to professional networks and educational forums. You can explore existing communities or create your own based on your interests.",
    },
    {
      question: "How do I start my own community on Open Place?",
      answer: (
        <>
          To start a community, log into your account, navigate to the
          &apos;Create Community&apos; section, choose your privacy settings,
          and invite members. You can customize your community&apos;s rules and
          moderation preferences.
        </>
      ),
    },
    {
      question: "How does Open Place handle content moderation?",
      answer:
        "Open Place uses a combination of AI-powered tools and human moderators to ensure content adheres to our community guidelines. Users can also report inappropriate content, which our team reviews promptly.",
    },
    {
      question: "Can I delete my account and data from Open Place?",
      answer:
        "Yes, you have full control over your account. You can delete your account and all associated data at any time through your account settings. We comply with data protection regulations and ensure your right to be forgotten.",
    },
    {
      question: "What makes Open Place different from other social platforms?",
      answer:
        "Open Place stands out with its focus on privacy, meaningful connections, and personal growth. We prioritize quality interactions over quantity, offer robust privacy controls, and foster a supportive environment for diverse communities.",
    },
    {
      question: "How can I upgrade to a Pro account?",
      answer: (
        <>
          To upgrade to a Pro account, go to your account settings and select
          the &apos;Upgrade to Pro&apos; option. You can choose between monthly
          or annual billing cycles and enjoy additional features like unlimited
          private rooms and priority support.
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#195276]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 bg-white rounded border-b hover:bg-[#F3AA1D]/10 transition-colors duration-200"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-[#195276]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#195276]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#195276]" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-5 bg-white rounded-lg shadow">
                  <p className="text-[#195276]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
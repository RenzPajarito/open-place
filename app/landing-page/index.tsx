"use client";

import Footer from "../../components/ui/landing-page/footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lock,
  Users,
  Lightbulb,
  Smartphone,
  CheckCircle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Header from "../../components/ui/landing-page/header";

export default function LandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const testimonials = [
    { name: "Sarah T.", quote: "Open Place gave me a sense of belonging." },
    {
      name: "Mark P.",
      quote:
        "The privacy and anonymity let me share things I couldn't elsewhere.",
    },
    {
      name: "Alex R.",
      quote: "I've discovered so many new perspectives here!",
    },
  ];

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
      answer:
        "To start a community, log into your account, navigate to the 'Create Community' section, choose your privacy settings, and invite members. You can customize your community's rules and moderation preferences.",
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
      answer:
        "To upgrade to a Pro account, go to your account settings and select the 'Upgrade to Pro' option. You can choose between monthly or annual billing cycles and enjoy additional features like unlimited private rooms and priority support.",
    },
  ];

  const aboutLists = [
    { text: "A safe, private space for real connection." },
    { text: "Anonymity and security are prioritized." },
    { text: "Built for meaningful conversations and communities." },
  ];

  const features = [
    {
      title: "Secure & Private Connections",
      text: "Your data and privacy are our top priority. From encryption to user- anonymity features, our platform is tailored to keep your experiences safe and confidential.",
      icon: <Lock className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
    {
      title: "Supportive Communities",
      text: "Find people who share your experiences. Dive into groups built around empathy and understanding, designed to bring out the best in every interaction.",
      icon: <Users className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
    {
      title: "Explore New Possibilities",
      text: "Discover new perspectives through discussions. Each conversation opens doors to diverse ideas and insights that expand your worldview.",
      icon: <Lightbulb className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
    {
      title: "User-First Design",
      text: "Intuitive and simple to use. Our platform’s design is straightforward, letting you focus on the connections and content that matter most.",
      icon: <Smartphone className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
  ];

  const gettingStart = [
    {
      title: "Create Your Profile",
      text: "Sign up quickly without sharing personal details. Our streamlined onboarding gets you connected to your community while keeping your privacy top priority."
    },
    {
      title: "Connect with Others",
      text: "Discover and join communities that align with your interests. Connect meaningfully and securely with others through shared passions and goals."
    },
    {
      title: "Share and Discover",
      text: "Engage in supportive conversations, explore new ideas, and connect with diverse perspectives. Every interaction here is designed to inspire personal and community growth."
    },
  ];

  const pricing = [
    {
      plan: "FREE",
      price: "$0",
      cycle: "/month",
      access: [
        { text: "1 Public Room (Lobby)" },
        { text: "5 Private Rooms" },
        { text: "No Support Admin" },
      ],
      buttonText: "Get Started",
    },
    {
      plan: "PRO",
      price: "$25",
      cycle: "/month",
      access: [
        { text: "1 Public Room (Lobby)" },
        { text: "Unlimited Private Rooms" },
        { text: "Unlimited Support Admins" },
      ],
      buttonText: "Upgrade to Pro",
    },
  ];

  return (
    <div className="min-h-screen text-[#195276]">
      <Header />

      <main>
        <section className="container min-h-screen flex items-center justify-center gap-14 sm:flex-row flex-col-reverse mx-auto px-4 py-20 text-left">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-5xl">
              Connect Safely, Share Freely, Explore Limitlessly
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl">
              Open Place is your secure and supportive space to share
              experiences, connect with others, and explore new possibilities
              while keeping your privacy intact.{" "}
            </p>
            <Button
              size="lg"
              className="bg-[#F3AA1D] text-[#f7f7f7] hover:bg-[#F3AA1D]/90"
            >
              Get Started for Free
            </Button>
          </div>
          <div>
            <img src="/friendship.svg" width={600} alt="Friendship SVG" />
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What is Open Place?
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <p className="text-lg mb-4">
                  Open Place is a secure online platform where individuals can
                  connect with like-minded people, share experiences, and
                  explore new avenues of personal and collective growth. Built
                  with user safety and privacy in mind, Open Place provides the
                  freedom to connect authentically.
                </p>
                <ul className="space-y-2">
                  {aboutLists.map((list, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-2 text-[#f3aa1d]" />
                      {list.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/online_connection.svg"
                  width={400}
                  alt="online_connection"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Open Place?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center text-gray-700">
                    {feature.icon}
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p>{feature.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#195276] text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Hear from Our Users
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${activeTestimonial * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <blockquote className="text-center">
                        <p className="text-xl mb-4">"{testimonial.quote}"</p>
                        <cite className="text-lg font-semibold">
                          - {testimonial.name}
                        </cite>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === activeTestimonial
                        ? "bg-[#F3AA1D]"
                        : "bg-white/50"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Getting Started is Easy
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center border-">
              {gettingStart.map((start, index) => (
                <div key={index} className="md:w-1/4 text-center mb-8 md:mb-0">
                  <div className="bg-[#e6f0f7] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#195276]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{start.title}</h3>
                  <p>{start.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Choose Your Plan
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {pricing.map((price, index) => (
                <Card
                  key={index}
                  className={`w-full md:w-80 text-gray-700 ${
                    price.plan === "PRO" ? "border-[#f3aa1d]" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">
                      {price.plan}
                    </h3>
                    <p className="text-4xl font-bold text-center mb-6">
                      {price.price}
                      <span className="text-lg font-normal">{price.cycle}</span>
                    </p>
                    <ul className="space-y-2 mb-6">
                      {price.access.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle
                            className="mr-2 text-[#f3aa1d]"
                            size={16}
                          />{" "}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full bg-[#195276] text-white hover:bg-[195276]/90 ${
                        price.plan === "PRO"
                          ? "bg-[#f3aa1d] text-[#f7f7f7] hover:bg-[#F3AA1D]/90"
                          : ""
                      }`}
                    >
                      {price.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#195276] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Open Place Today
            </h2>
            <p className="text-xl mb-8">
              Experience real connection in a safe and private space. Join
              today! Unlock a world where you can connect, share, and grow in an
              environment designed to prioritize your well-being and privacy.
              Take the first step toward meaningful interactions, where every
              conversation helps you discover new perspectives and build genuine
              relationships.
            </p>
            <Button
              size="lg"
              className="bg-[#F3AA1D] text-[#f7f7f7] hover:bg-[#F3AA1D]/90"
            >
              Sign Up Now
            </Button>
          </div>
        </section>

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
      </main>

      <Footer showFooter={true} />
    </div>
  );
}
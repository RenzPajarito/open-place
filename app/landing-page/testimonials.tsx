"use client";

import { useState } from "react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: "Sarah T.", quote: "Open Place gave me a sense of belonging." },
    {
      name: "Mark P.",
      quote: (
        <>
          The privacy and anonymity let me share things I couldn&apos;t
          elsewhere.
        </>
      ),
    },
    {
      name: "Alex R.",
      quote: <>I&apos;ve discovered so many new perspectives here!</>,
    },
  ];

  return (
    <section className="bg-[#195276] dark:bg-gray-900 text-white dark:text-gray-300 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-gray-200">
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
                    <p className="text-xl mb-4 dark:text-gray-200">
                      &#34;{testimonial.quote}&#34;
                    </p>
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
                  index === activeTestimonial ? "bg-[#F3AA1D]" : "bg-white/50 dark:bg-gray-600"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  const aboutLists = [
    { text: "A safe, private space for real connection." },
    { text: "Anonymity and security are prioritized." },
    { text: "Built for meaningful conversations and communities." },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          What is Open Place?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              Open Place is a secure online platform where individuals can
              connect with like-minded people, share experiences, and explore
              new avenues of personal and collective growth. Built with user
              safety and privacy in mind, Open Place provides the freedom to
              connect authentically.
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
            <Image
              src="/online_connection.svg"
              height={400}
              width={400}
              alt="online_connection"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
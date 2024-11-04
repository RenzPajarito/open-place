export default function HowToStart() {
  const gettingStart = [
    {
      title: "Create Your Profile",
      text: "Sign up quickly without sharing personal details. Our streamlined onboarding gets you connected to your community while keeping your privacy top priority.",
    },
    {
      title: "Connect with Others",
      text: "Discover and join communities that align with your interests. Connect meaningfully and securely with others through shared passions and goals.",
    },
    {
      title: "Share and Discover",
      text: "Engage in supportive conversations, explore new ideas, and connect with diverse perspectives. Every interaction here is designed to inspire personal and community growth.",
    },
  ];

  return (
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
  );
}
export default function HowToStart() {
  const gettingStart = [
    {
      title: "Sign Up",
      text: "Choose a Code Name, user ID, and password to create your unique identity.",
    },
    {
      title: "Join or Create a Place",
      text: "Browse existing public Places or create your own. In public Places, engage in open discussions. In private Places, enjoy a more secure, personal chat experience.",
    },
    {
      title: "Connect Freely",
      text: (
        <>
          Dive into direct chats, participate in the Lobby &#40;a default public
          space for everyone&#41;, or create rooms for focused discussions.
        </>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-opb dark:text-gray-200">
          How to Get Started
        </h2>
        <p className="text-center mb-12 text-[#195276]/80 dark:text-gray-200">
          It&apos;s simple, safe, and anonymous!
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {gettingStart.map((start, index) => (
            <div key={index} className="md:w-1/4 text-center mb-8 md:mb-0">
              <div className="bg-[#e6f0f7] dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#195276] dark:text-gray-200">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-opb dark:text-gray-200">
                {start.title}
              </h3>
              <p className="text-sm text-opb/90 dark:text-gray-300">
                {start.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
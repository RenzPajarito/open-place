import { Card, CardContent } from "@/components/ui/card";
import { Lock, ShieldCheck, MessageCircle, UserCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Total Privacy Assurance",
      text: (
        <>
          We don&apos;t track personal data, location, or analytics. Open Place
          is designed to put you in control, ensuring your data stays private.
        </>
      ),
      icon: <ShieldCheck className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
    {
      title: "Unrestricted Conversations",
      text: "Engage in public discussions, private groups, or direct chats—whatever fits your style. Open Place offers flexible, unrestricted communication.",
      icon: <MessageCircle className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
    {
      title: "Safe, Secure Environment",
      text: "Your privacy is protected at every step, creating a safe space for genuine interaction without compromising security.",
      icon: <Lock className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
    {
      title: "Truly Be Yourself",
      text: (
        <>
          Open Place is built for authentic expression. Here, you&apos;re free
          to be yourself, confident that your privacy is respected.
        </>
      ),
      icon: <UserCheck className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-opb dark:text-gray-200">
          Why Open Place?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardContent className="p-6 text-center text-gray-700 dark:text-gray-300">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 text-opb dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-opb/90 dark:text-gray-400">
                  {feature.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
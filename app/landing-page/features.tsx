import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Smartphone, Users, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Secure & Private Connections",
      text: "Your data and privacy are our top priority. From encryption to user-anonymity features, our platform is tailored to keep your experiences safe and confidential.",
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
      text: (
        <>
          Intuitive and simple to use. Our platform&apos;s design is
          straightforward, letting you focus on the connections and content that
          matter most.
        </>
      ),
      icon: <Smartphone className="mx-auto mb-4 text-[#F3AA1D]" size={48} />,
    },
  ];

  return (
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
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
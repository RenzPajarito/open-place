import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function Pricing() {
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
                      <CheckCircle className="mr-2 text-[#f3aa1d]" size={16} />{" "}
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
  );
}
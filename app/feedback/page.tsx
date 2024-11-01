"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, ThumbsUp } from "lucide-react";
import Footer from "@/components/ui/landing-page/footer";
import Header from "@/components/ui/landing-page/header";

export default function FeedbackPage() {
  const [codeName, setCodeName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ codeName, message });
    setIsSubmitted(true);

    setCodeName("");
    setMessage("");
    // Show success message for 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div>
      <Header showHeader={true} headerType="newHeader" />
      <div className="min-h-screen sm:py-12 pb-12 pt-20 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#195276]">
            We Value Your Feedback
          </h1>
          <p className="text-center text-[#195276] mb-8 max-w-2xl mx-auto">
            Your insights and opinions are crucial in helping us improve Open
            Place. We appreciate your time in sharing your thoughts with us. Your
            feedback helps shape the future of our community and ensures we&apos;re
            meeting your needs.
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center">
                <ThumbsUp className="w-16 h-16 text-[#F3AA1D] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#195276] mb-2">
                  Thank You!
                </h2>
                <p className="text-[#195276]">
                  Your feedback has been submitted successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
                <div>
                  <Label htmlFor="codeName">Code Name</Label>
                  <Input
                    id="codeName"
                    value={codeName}
                    onChange={(e) => setCodeName(e.target.value)}
                    placeholder="Your code name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Your Feedback</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please share your thoughts..."
                    required
                    className="h-40"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#195276] hover:bg-[#195276]/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Feedback
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer showFooter={true} footerType="newFooter" />
    </div>
  );
}
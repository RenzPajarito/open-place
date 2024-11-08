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
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div>
      <Header showHeader={true} headerType="newHeader" />
      <div className="min-h-screen sm:py-12 pb-12 pt-20 flex items-center dark:bg-gray-900 dark:text-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#195276] dark:text-gray-200">
            We Value Your Feedback
          </h1>
          <p className="text-center text-sm text-[#195276] dark:text-gray-200 mb-8 max-w-72 mx-auto">
          Your feedback is essential to improving Open Place.
          </p>
          <div className="max-w-2xl mx-auto rounded-lg sm:shadow-md sm:p-8 p-4">
            {isSubmitted ? (
              <div className="text-center">
                <ThumbsUp className="w-16 h-16 text-[#F3AA1D] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#195276] dark:text-gray-200 mb-2">
                  Thank You!
                </h2>
                <p className="text-[#195276] dark:text-gray-200">
                  Your feedback has been submitted successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-gray-700 dark:text-gray-300">
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
                  className="w-full bg-[#195276] hover:bg-[#195276]/90 dark:bg-opy/90 dark:hover:bg-opy/70 dark:text-gray-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Feedback
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer quickLinks={false} footerType="newFooter" />
    </div>
  );
}
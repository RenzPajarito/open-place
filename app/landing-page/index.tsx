"use client";

import Footer from "../../components/ui/landing-page/footer";
import { Button } from "@/components/ui/button";
import Header from "../../components/ui/landing-page/header";
import Image from "next/image";
import FAQ from "./faq";
import Testimonials from "./testimonials";
import About from "./about";
import Features from "./features";
import Pricing from "./pricing";
import CallToAction from "./call-to-action";
import HowToStart from "./how-to-start";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen text-opb dark:text-white">
      <Header showHeader={true} headerType="default" />
      <main className="bg-white dark:bg-gray-900">
        <section className="container min-h-screen flex items-center justify-center gap-14 sm:flex-row flex-col-reverse mx-auto px-4 py-20 text-left">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-5xl dark:text-gray-200">
              Connect Safely, Share Freely, Explore Limitlessly
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl dark:text-gray-200">
              Open Place is your secure and supportive space to share
              experiences, connect with others, and explore new possibilities
              while keeping your privacy intact.{" "}
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-opy text-[#f7f7f7] hover:bg-opy/90 dark:bg-opy-dark dark:text-[#f7f7f7] dark:hover:bg-opy-dark/90"
              >
                Create an Open Place
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/friendship.svg"
              height={600}
              width={600}
              alt="Friendship SVG"
            />
          </div>
        </section>
        <About />
        <Features />
        <Testimonials />
        <HowToStart />
        <Pricing />
        <CallToAction />
        <FAQ />
      </main>
      <Footer quickLinks={true} footerType="default" />
    </div>
  );
}

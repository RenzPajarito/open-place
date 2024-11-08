import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#195276] dark:bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-200">
          Join Open Place Today
        </h2>
        <p className="text-xl mb-8 dark:text-gray-200">
          Ready to share and connect with zero strings attached? Join Open Place
          and experience freedom in conversation. Set your Code Name, create or
          join a Place, and let the discussions begin—knowing your privacy is
          fully respected.
        </p>
        <Link href="/signup">
          <Button
            size="lg"
            className="bg-[#F3AA1D] text-[#f7f7f7] hover:bg-[#F3AA1D]/90 dark:bg-[#d18e1a] dark:text-[#e6e6e6] dark:hover:bg-[#d18e1a]/90"
          >
            Sign Up Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
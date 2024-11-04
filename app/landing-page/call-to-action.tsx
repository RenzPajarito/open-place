import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-[#195276] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Open Place Today
        </h2>
        <p className="text-xl mb-8">
          Experience real connection in a safe and private space. Join today!
          Unlock a world where you can connect, share, and grow in an
          environment designed to prioritize your well-being and privacy. Take
          the first step toward meaningful interactions, where every
          conversation helps you discover new perspectives and build genuine
          relationships.
        </p>
        <Button
          size="lg"
          className="bg-[#F3AA1D] text-[#f7f7f7] hover:bg-[#F3AA1D]/90"
        >
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}
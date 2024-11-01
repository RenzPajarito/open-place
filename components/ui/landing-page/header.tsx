"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define the type for the props
interface HeaderProps {
  headerType: 'default' | 'newHeader'; // Adjust this according to your use cases
}

// Define the type for the links
interface LinkItem {
  title: string;
  href: string;
}

// Define the links
const links: LinkItem[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Header({ headerType }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderHeaderLinks = () => {
    if (headerType === "newHeader") {
      return <div className="hidden md:flex space-x-4 font-medium" />;
    }

    return (
      <div className="hidden md:flex space-x-4 font-medium">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hover:text-[#f3aa1d]"
          >
            {link.title}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <header className="fixed min-w-full bg-[#ffffff]/80 backdrop-blur-sm p-4 z-10">
      <nav className="container mx-auto flex justify-between items-center text-gray-800">
        <Link href="/">
          <img src="/logo.png" width={110} alt="Open Place Logo" />
        </Link>
        {renderHeaderLinks()}
        <Button className="hidden md:block bg-[#F3AA1D] text-[#f7f7f7] hover:bg-[#F3AA1D]/90">
          Join Now
        </Button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDown
            className={`transform transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-gray-800">
          {headerType !== "newHeader" ? (
            <>
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block hover:text-[#f3aa1d]"
                >
                  {link.title}
                </Link>
              ))}
            </>
          ) : null}
          <Button className="w-full mt-2 bg-[#F3AA1D] text-[#f7f7f7] hover:bg-[#F3AA1D]/90">
            Join Now
          </Button>
        </div>
      )}
    </header>
  );
}
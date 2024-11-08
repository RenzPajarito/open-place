"use client";

import Link from "next/link";
import {
  Lock,
  Shield,
  MessageCircle,
  Home,
  Users,
  DollarSign,
  Mail,
} from "lucide-react";
import Image from "next/image";

interface LinkItem {
  title: string;
  href: string;
  icon: JSX.Element;
}

interface FooterProps {
  quickLinks: boolean;
  footerType: "default" | "newFooter";
}

const links: LinkItem[] = [
  {
    title: "About",
    href: "#about",
    icon: <Home className="w-4 h-4 mr-2 group-hover:text-[#F3AA1D]" />,
  },
  {
    title: "Features",
    href: "#features",
    icon: <Users className="w-4 h-4 mr-2 group-hover:text-[#F3AA1D]" />,
  },
  {
    title: "Pricing",
    href: "#pricing",
    icon: <DollarSign className="w-4 h-4 mr-2 group-hover:text-[#F3AA1D]" />,
  },
  {
    title: "FAQ",
    href: "#faq",
    icon: <MessageCircle className="w-4 h-4 mr-2 group-hover:text-[#F3AA1D]" />,
  },
];

const legalLinks: LinkItem[] = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    icon: <Shield className="w-4 h-4 mr-2 group-hover:text-[#F3AA1D]" />,
  },
  {
    title: "Terms and Conditions",
    href: "/terms-and-conditions",
    icon: <Lock className="w-4 h-4 mr-2 group-hover:text-[#F3AA1D]" />,
  },
  {
    title: "Feedback",
    href: "/feedback",
    icon: <Mail className="w-4 h-4 mr-2 group-hover:text-[#F3AA1D]" />,
  },
];

export default function Footer({ quickLinks, footerType }: FooterProps) {
  const renderFooterLinks = () => {
    const currentLinks = footerType === "newFooter" ? legalLinks : links;

    return (
      <ul className="space-y-2">
        {currentLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-[#DCEFFB] transition-all duration-200 flex items-center group"
            >
              {link.icon}
              <span className="relative">
                {link.title}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DCEFFB] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="bg-gradient-to-l from-[#195276] to-[#3b799f] dark:from-gray-800 dark:to-gray-600 text-white relative pt-16 pb-6">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            className="dark:fill-gray-900"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 w-full justify-evenly">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Link href={"/"} className="flex items-center">
                <Image
                  src="/logo_icon.png"
                  alt="logo"
                  width={45}
                  height={45}
                  className="mr-4"
                />
                <span className="text-2xl font-bold text-[#F3AA1D]">
                  Welcome to Open Place
                </span>
              </Link>
            </div>
            <p className="text-sm text-gray-300 dark:text-gray-400 flex items-center">
              Where true privacy meets open conversation.
              <Lock className="w-4 h-4 ml-2" />
            </p>
          </div>

          {quickLinks && (
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              {renderFooterLinks()}
            </div>
          )}

          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-[#DCEFFB] dark:hover:text-[#A0C4FF] transition-all duration-200 flex items-center group"
                  >
                    {link.icon}
                    <span className="relative">
                      {link.title}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DCEFFB] dark:bg-[#A0C4FF] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8">
        <p className="text-center text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Open Place. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function FooterVariant() {
  return (
    <footer className="py-8 px-6 bg-white dark:bg-[#121212]">
      <div className="flex items-center justify-center flex-col">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo_icon.png"
            alt="logo"
            width={30}
            height={30}
            className="mr-4"
          />
          <span className="text-xl font-bold text-[#F3AA1D]">Open Place</span>
        </Link>
        <div className="my-4 flex sm:gap-6 gap-2 sm:text-md text-sm text-gray-500 dark:text-gray-400">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <p>|</p>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
        </div>
        <p className="text-center text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Open Place. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

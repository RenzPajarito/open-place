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
import { Button } from "@/components/ui/button";

interface LinkItem {
  title: string;
  href: string;
  icon: JSX.Element;
}

interface FooterProps {
  showFooter: boolean;
  footerType: 'default' | 'newFooter';
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

const newLinks: LinkItem[] = [
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

export default function Footer({ showFooter, footerType }: FooterProps) {
  const renderFooterLinks = () => {
    const currentLinks = footerType === 'newFooter' ? newLinks : links;

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
  }

  return (
    <footer className="bg-gradient-to-b from-[#195276] to-[#0E374D] text-white relative pt-16 pb-6">
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
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Link href={'/'} className="flex items-center">
                <svg
                  className="w-10 h-10 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#F3AA1D"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7V12L15 15"
                    stroke="#F3AA1D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-2xl font-bold text-[#F3AA1D]">
                  Open Place
                </span>
              </Link>
            </div>
            <p className="text-sm text-gray-300 flex items-center">
              Where privacy meets connection
              <Lock className="w-4 h-4 ml-2" />
            </p>
          </div>

          {showFooter && (
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            {renderFooterLinks()}
          </div>
          )}

          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <form className="mb-4">
              <div className="flex flex-col sm:flex-row sm:gap-0 gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 rounded-t-md sm:rounded-l-md sm:rounded-r-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#F3AA1D] focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#F3AA1D] text-[#195276] px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-l-none hover:bg-[#F3AA1D]/90 transition-colors duration-200"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#F3AA1D] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#F3AA1D] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#F3AA1D] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0  1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#F3AA1D] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-8 pt-8">
        <p className="text-center text-xs text-gray-400">
          © 2024 Open Place. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
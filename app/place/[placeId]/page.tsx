import { Button } from "@/components/ui/button";
import { FooterVariant } from "@/components/ui/landing-page/footer";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    // <div>
    //     <div className="min-h-screen w-full px-6 flex justify-center items-center">
    //         <div className="mx-auto max-w-6xl w-full rounded-md overflow-hidden shadow-md">
    //             <div className="bg-[#195276] w-full h-60 flex items-center">
    //                 <div className="mx-auto w-32 h-32 border-4 rounded-full">
    //                     <Image
    //                         src='/x_logo_isa.png'
    //                         alt="logo"
    //                         width={128}
    //                         height={128}
    //                         className="object-cover"
    //                     />
    //                 </div>
    //             </div>

    //             <div className="w-full">
    //                 <div className="text-center mt-16">
    //                     <h1 className="text-5xl font-semibold text-gray-700">DREAMS OF ISA</h1>
    //                 </div>
    //                 <div className="w-full mt-8 mb-16">
    //                     <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 px-4">Have you had dreams of a Man in White? Did He call you to follow Him? For centuries God (Allah) has spoken to people through dreams and visions.​ Contact us about your dream. We will help you.</p>
    //                 </div>
    //             </div>

    //             <div className="w-full px-10 my-10">
    //                 <Button className="w-full text-md text-gray-50 bg-[#195276] rounded-full">Enter Lobby</Button>
    //             </div>
    //         </div>
    //     </div>
    //     <FooterVariant/>
    // </div>

    <div className="min-h-screen w-full relative overflow-hidden">
      <div
        className="w-full h-96 bg-slate-700 flex justify-center items-center absolute"
        style={{
          maskImage: "linear-gradient(#000, rgba(0,0,0,0))",
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/default-pattern-3.png)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="w-full flex justify-center items-center px-4 sm:px-10 dark:bg-[#121212]">
        <div className="min-h-screen flex justify-center items-center flex-col max-w-4xl mx-auto">
        <div className="w-32 h-32 z-10">
            <Image
              src="/x_logo_isa.png"
              alt="Logo"
              width={128}
              height={128}
              className="w-full h-full border-4 rounded-full object-contain bg-gray-800"
            />
          </div>
          <h1 className="sm:text-5xl text-3xl font-semibold text-gray-800 text-center mt-20 dark:text-gray-200">
            DREAMS OF ISA
          </h1>

          <p className="sm:text-lg text-md text-center text-gray-700 my-14 max-h-40 overflow-y-auto dark:text-gray-300">
            Have you had dreams of a Man in White? Did He call you to follow
            Him? For centuries God (Allah) has spoken to people through dreams
            and visions. Contact us about your dream. We will help you.
          </p>

          <Link href="" style={{ width: "50%" }}>
            <Button
              style={{ width: "100%" }}
              className="bg-[#F3AA1D] text-md sm:w-auto px-8 rounded-full hover:bg-[#F3AA1D]/80 transition-colors duration-300 dark:bg-opy/80 dark:text-gray-200 hover:dark:bg-opy/70"
            >
              Enter Lobby
            </Button>
          </Link>
        </div>
      </div>
      <FooterVariant/>
    </div>
  );
}
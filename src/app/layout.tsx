"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { ImWhatsapp } from "react-icons/im";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <div className="fixed bottom-4 right-4 z-50">
            <a
              href="https://wa.me/+919510595121" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ImWhatsapp size={28} />
            </a>
          </div>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers"; import { useEffect } from "react";
import Head from "next/head";


import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/WelcomeSection";
import FineDining from "@/components/FineDining";
import AccommodationCarousel from "@/components/AccommodationCarousel";
import Footer from "@/components/Footer";
import Dining from "@/components/Dining";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
   <>
    <Navbar />
   <WelcomeSection />
   <Dining />
   <AccommodationCarousel />
   <FineDining />
    <Services />
    <FAQ />
 
   <Footer />
   </>
  );
}

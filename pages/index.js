import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/WelcomeSection";
import ImageGallery from "@/components/ImageGallery";
import FineDining from "@/components/FineDining";
import AccommodationCarousel from "@/components/AccommodationCarousel";
import ResortInfoSection from "@/components/ResortInfoSection";
import Footer from "@/components/Footer";

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
   <ImageGallery />
   <FineDining />
   <AccommodationCarousel />
   <ResortInfoSection />
   <Footer />
   </>
  );
}

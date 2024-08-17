import Navbar from "@/components/HomePage/Navbar/Navbar";
import { DotBackgroundDemo } from "@/components/HomePage/HeroSection/DotBackgroundDemo";
import Image from "next/image";
import { HeroScrollDemo } from "@/components/HomePage/Container-scroll/Heroscroll";
import { ThreeDCardDemo } from "@/components/HomePage/Threedcard/threedcard";
import Footer from "@/components/HomePage/Footer";

export default function Home() {
  return (
    <main>

      <div className="w-screen h-[20rem]">
      <DotBackgroundDemo />
      </div>
      <HeroScrollDemo />
      <div className="mb-20">

      <ThreeDCardDemo />
      </div>
      <Footer />

    </main>
  );
}

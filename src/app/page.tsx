import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Focus from "@/components/sections/Focus";
import HowWeWork from "@/components/sections/HowWeWork";
import OurWork from "@/components/sections/OurWork";
import Adoption from "@/components/sections/Adoption";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Focus />
        <HowWeWork />
        <OurWork />
        <Adoption />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

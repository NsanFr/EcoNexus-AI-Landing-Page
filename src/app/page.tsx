import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import TargetAudience from "@/components/target-audience";
import TechStack from "@/components/tech-stack";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <TechStack />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

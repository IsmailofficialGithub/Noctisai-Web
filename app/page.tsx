import Hero from "@/components/Hero";
import HintBanner from "@/components/HintBanner";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Download from "@/components/Download";
import Links from "@/components/Links";
import Privacy from "@/components/Privacy";

export default function Home() {
  return (
    <main>
      <Hero />
      <HintBanner />
      <Features />
      <HowItWorks />
      <Download />
      <Privacy />
      <Links />
    </main>
  );
}

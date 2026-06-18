import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import PackagesPreview from "@/components/PackagesPreview";
import WhyPlatr from "@/components/WhyPlatr";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import ComparisonTable from "@/components/ComparisonTable";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      {/* 1 · Conversion hero with Requirement Selector */}
      <Hero />
      {/* 2 · Built on Real Execution — credibility marquee */}
      <Marquee />
      {/* 3 · Explore by need */}
      <Categories />
      {/* 4 · How it works */}
      <HowItWorks />
      {/* 5 · Featured packages */}
      <PackagesPreview />
      {/* 6 · Why PLATR */}
      <WhyPlatr />
      {/* 7 · Social proof — testimonials */}
      <SocialProof />
      {/* 8 · Objection handling */}
      <FAQ />
      <ComparisonTable />
      {/* 9 · Final CTA */}
      <ContactCTA />
    </>
  );
}

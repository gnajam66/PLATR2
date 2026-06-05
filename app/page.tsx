import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import WhyPlatr from "@/components/WhyPlatr";
import PackagesPreview from "@/components/PackagesPreview";
import SocialProof from "@/components/SocialProof";
import EventTypes from "@/components/EventTypes";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problem />
      <HowItWorks />
      <Categories />
      <WhyPlatr />
      <PackagesPreview />
      <SocialProof />
      <EventTypes />
      <ComparisonTable />
      <FAQ />
      <ContactCTA />
    </>
  );
}

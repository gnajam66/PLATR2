import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Packages from "@/components/Packages";
import InquiryForm from "@/components/InquiryForm";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <StickyNav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Categories />
      <Packages />
      <InquiryForm />
      <ContactCTA />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

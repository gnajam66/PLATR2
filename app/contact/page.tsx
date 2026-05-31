import InquiryForm from "@/components/InquiryForm";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "Contact — PLATR" };

export default function ContactPage() {
  return (
    <>
      <ContactCTA />
      <InquiryForm />
    </>
  );
}

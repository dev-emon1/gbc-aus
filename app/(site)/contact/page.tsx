import { CTASection } from "@/components/shared/sections/cta";
import { PageHero } from "@/components/shared/sections/page-hero";

import ContactCards from "@/features/contact/components/ContactCards";
import ContactFormSection from "@/features/contact/components/ContactFormSection";
import ContactDepartments from "@/features/contact/components/ContactDepartments";

import {
  CONTACT_CTA,
  CONTACT_FAQS,
  CONTACT_HERO,
} from "@/features/contact/data/contact";

import FAQSection from "@/components/shared/faq/FAQSection";

export default function ContactPage() {
  return (
    <>
      <PageHero data={CONTACT_HERO} />

      <ContactCards />

      <ContactFormSection />

      <ContactDepartments />

      <FAQSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about contacting George Brown College."
        items={CONTACT_FAQS}
      />

      <CTASection data={CONTACT_CTA} />
    </>
  );
}

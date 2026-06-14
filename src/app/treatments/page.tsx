import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import {
  BookingCTA,
  FAQSection,
  PageShell,
  SectionIntro,
  SectionFrame,
  TreatmentAnchorNav,
  TreatmentGrid,
} from "@/components/sections";
import { Reveal } from "@/components/reveal";
import { SEOJsonLd } from "@/components/seo-json-ld";
import { clinic, treatmentGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Treatments | Foot Pain, Ingrown Toenails & Orthotics Ballymena",
  description:
    "Podiatry treatments in Ballymena including routine care, corn and callus removal, ingrown toenails, heel pain, plantar fasciitis, orthotics and diabetic foot care.",
};

export default function TreatmentsPage() {
  const jsonLd = treatmentGroups.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "MedicalClinic",
      name: clinic.name,
      telephone: clinic.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: clinic.address.street,
        addressLocality: clinic.address.locality,
        postalCode: clinic.address.postalCode,
        addressCountry: "GB",
      },
    },
    areaServed: "Ballymena",
  }));

  return (
    <>
      <SEOJsonLd data={jsonLd} />
      <SiteHeader />
      <PageShell>
        <SectionFrame className="py-20 lg:py-28">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <SectionIntro
                eyebrow="Treatments"
                title="Modern podiatry care for healthy, comfortable feet at every stage of life."
                text="Whether you need routine foot care, pain relief, nail treatment, minor surgery or cosmetic foot wellness, the team will help you find the right treatment."
                align="center"
              />
            </div>
          </Reveal>
        </SectionFrame>
        <TreatmentAnchorNav />
        <SectionFrame tone="stone" className="py-20">
          <TreatmentGrid detailed />
        </SectionFrame>
        <FAQSection />
        <BookingCTA title="Book the right foot health appointment." />
      </PageShell>
      <SiteFooter />
    </>
  );
}

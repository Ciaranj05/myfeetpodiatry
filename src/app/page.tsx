import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import { SEOJsonLd } from "@/components/seo-json-ld";
import {
  BallymenaSection,
  BookingCTA,
  CareJourneySection,
  ClinicExperience,
  FounderStory,
  Hero,
  OutcomeSection,
  PageShell,
  ReviewCarousel,
  TreatmentsPreview,
  TrustStrip,
} from "@/components/sections";
import { clinic, faqs, treatmentGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "My Feet Podiatry | Expert Podiatrist in Ballymena",
  description:
    "Expert podiatrist and chiropodist in Ballymena for foot pain, ingrown toenails, orthotics, diabetic foot care and routine podiatry.",
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "LocalBusiness"],
      name: clinic.name,
      url: "https://www.myfeetni.co.uk",
      telephone: clinic.phone,
      email: clinic.email,
      foundingDate: clinic.founded,
      address: {
        "@type": "PostalAddress",
        streetAddress: clinic.address.street,
        addressLocality: clinic.address.locality,
        addressRegion: clinic.address.region,
        postalCode: clinic.address.postalCode,
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: clinic.map.lat,
        longitude: clinic.map.lng,
      },
      sameAs: [clinic.instagram, clinic.facebook],
      medicalSpecialty: "Podiatry",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: treatmentGroups.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.summary,
        },
      })),
    },
  ];

  return (
    <>
      <SEOJsonLd data={jsonLd} />
      <SiteHeader />
      <PageShell>
        <Hero />
        <TrustStrip />
        <OutcomeSection />
        <CareJourneySection />
        <TreatmentsPreview />
        <FounderStory compact />
        <ClinicExperience />
        <ReviewCarousel />
        <BallymenaSection />
        <BookingCTA />
      </PageShell>
      <SiteFooter />
    </>
  );
}

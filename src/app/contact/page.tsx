import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import {
  BookingCTA,
  ContactCards,
  ContactForm,
  MapSection,
  PageShell,
  SectionIntro,
} from "@/components/sections";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact My Feet Podiatry | Book a Podiatrist in Ballymena",
  description:
    "Contact My Feet Podiatry in Ballymena. Book online, call 02825654625 or email admin@myfeetni.co.uk.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <PageShell>
        <section className="px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <SectionIntro
                eyebrow="Contact"
                title="Book online, call the clinic or send an enquiry."
                text="Every route is designed to make booking clear and easy, whether you know what you need or want guidance from the team."
                align="center"
              />
            </div>
          </Reveal>
          <div className="mx-auto mt-12 max-w-7xl">
            <ContactCards />
          </div>
        </section>
        <MapSection />
        <ContactForm />
        <BookingCTA title="Ready to book your visit?" />
      </PageShell>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import {
  BookingCTA,
  FounderStory,
  PageShell,
  SectionIntro,
  TeamGrid,
  TrustStrip,
} from "@/components/sections";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About My Feet Podiatry | Ballymena Foot Health Clinic",
  description:
    "Meet Maria Kearney and the My Feet Podiatry team, an experienced Ballymena clinic established in 2010.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <PageShell>
        <section className="px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <SectionIntro
                eyebrow="About"
                title="A Ballymena clinic built on professional care, local trust and long relationships."
                text="My Feet Podiatry was founded by Maria Kearney with a vision to provide professional, friendly and accessible foot care to patients throughout Ballymena and the surrounding areas."
                align="center"
              />
            </div>
          </Reveal>
        </section>
        <TrustStrip />
        <FounderStory />
        <section className="bg-[#efe9df] px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionIntro
                eyebrow="Philosophy"
                title="Expert without being cold. Clinical without feeling clinical."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="space-y-5 text-lg leading-9 text-muted-foreground">
                <p>
                  The team combines specialist clinical knowledge with a
                  patient-centred approach, tailoring care to each person and
                  helping them maintain healthy, comfortable feet.
                </p>
                <p>
                  Today the clinic cares for routine maintenance, specific
                  conditions and expert foot health advice, with the same warm
                  welcome that has shaped the practice since 2010.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        <TeamGrid />
        <BookingCTA title="Meet the team in clinic." />
      </PageShell>
      <SiteFooter />
    </>
  );
}

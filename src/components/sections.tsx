import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import {
  clinic,
  careJourney,
  faqs,
  imageLibrary,
  outcomes,
  reviews,
  team,
  treatmentGroups,
  trustItems,
  unconfirmedOperationalNotes,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import type { LucideIcon } from "lucide-react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
      {children}
    </p>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-heading text-4xl leading-[1.05] text-foreground sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="overflow-hidden" tabIndex={-1}>
      {children}
    </main>
  );
}

export function SectionFrame({
  children,
  tone = "ivory",
  className,
}: {
  children: React.ReactNode;
  tone?: "ivory" | "white" | "stone";
  className?: string;
}) {
  const tones = {
    ivory: "bg-background",
    white: "bg-white",
    stone: "bg-[#efe9df]",
  };

  return (
    <section className={cn("px-5 py-20 sm:px-8 lg:py-24", tones[tone], className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function BookingButton({
  children = "Book Appointment",
  variant = "primary",
  className,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
}) {
  const variants = {
    primary: "bg-primary text-white shadow-sm hover:bg-[#697866]",
    light: "bg-white text-primary hover:bg-[#faf8f5]",
    outline:
      "border border-primary/30 bg-white text-primary hover:bg-primary hover:text-white",
  };

  return (
    <a
      href={clinic.bookingUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] border-b border-border bg-background">
      <div className="absolute inset-0 subtle-texture opacity-45" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <Reveal className="relative z-10 flex flex-col justify-center">
          <Eyebrow>Foot health and movement clinic in Ballymena</Eyebrow>
          <h1 className="font-heading text-6xl leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
            Move With Confidence
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
            Expert foot and lower limb care in Ballymena, helping you stay active,
            comfortable and doing the things you love.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingButton />
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <Phone className="size-4" />
              Call Clinic
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="relative z-10">
          <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-[#d9d3c8] shadow-[0_28px_90px_rgba(38,38,38,0.13)]">
            <Image
              src={imageLibrary.hero}
              alt="Active older adult enjoying comfortable movement outdoors"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#262626]/55 to-transparent p-6 text-white">
              <p className="max-w-sm text-sm leading-6">
                Modern care with a personal touch, designed around your comfort,
                mobility and confidence.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-px border-x border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="bg-white p-6">
              <Icon className="mb-5 size-5 text-primary" />
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 font-heading text-2xl text-foreground">{item.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function OutcomeSection() {
  return (
    <SectionFrame>
        <Reveal>
          <SectionIntro
            eyebrow="Designed around real life"
            title="Care that helps you get back to the moments your feet make possible."
            text="Whether you are walking the town, keeping up with family, working long days or staying active, the goal is simple: comfortable movement and clear, expert care."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <Reveal key={outcome.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-border bg-white p-7 shadow-[0_18px_55px_rgba(38,38,38,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(38,38,38,0.1)]">
                  <Icon className="mb-8 size-7 text-primary" />
                  <h3 className="font-heading text-3xl">{outcome.title}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{outcome.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
    </SectionFrame>
  );
}

export function TreatmentGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {treatmentGroups.map((treatment, index) => {
        const Icon = treatment.icon;
        return (
          <Reveal key={treatment.slug} delay={index * 0.035}>
            <article
              id={treatment.slug}
              className="group h-full rounded-lg border border-border bg-white p-7 shadow-[0_18px_55px_rgba(38,38,38,0.05)] transition hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-lg bg-[#eff1ec] text-primary">
                  <Icon className="size-6" />
                </span>
                <a
                  href={`#${treatment.slug}`}
                  className="rounded-lg p-2 text-muted-foreground transition hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Jump to ${treatment.title}`}
                >
                  <ArrowRight className="size-5 transition group-hover:translate-x-1" />
                </a>
              </div>
              <h3 className="font-heading text-3xl leading-tight">{treatment.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{treatment.summary}</p>
              {detailed ? (
                <div className="mt-7 space-y-5 border-t border-border pt-6 text-sm leading-7">
                  <InfoBlock label="What it helps with" items={treatment.helpsWith} />
                  <InfoBlock label="Who it is for" text={treatment.whoFor} />
                  <InfoBlock label="How treatment works" text={treatment.howItWorks} />
                  <InfoBlock label="Expected outcome" text={treatment.outcome} />
                </div>
              ) : null}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

function InfoBlock({
  label,
  text,
  items,
}: {
  label: string;
  text?: string;
  items?: string[];
}) {
  return (
    <div>
      <p className="font-semibold text-foreground">{label}</p>
      {items ? (
        <ul className="mt-2 grid gap-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-muted-foreground">
              <Check className="mt-1 size-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-muted-foreground">{text}</p>
      )}
    </div>
  );
}

export function TreatmentsPreview() {
  return (
    <SectionFrame tone="stone">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionIntro
              eyebrow="Treatments"
              title="Focused care for skin, nails, pain and movement."
              text="From routine podiatry to nail surgery, verruca needling, gait analysis and cosmetic foot wellness."
            />
          </Reveal>
          <Link
            href="/treatments"
            className="inline-flex h-12 w-fit items-center justify-center rounded-lg border border-primary/30 bg-white px-5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View Treatments
          </Link>
        </div>
        <TreatmentGrid />
    </SectionFrame>
  );
}

export function CareJourneySection() {
  return (
    <SectionFrame tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionIntro
            eyebrow="Your visit"
            title="A calm route from first booking to clear next steps."
            text="Premium healthcare UX is not only visual. It means reducing uncertainty, making choices obvious and helping every patient feel oriented."
          />
        </Reveal>
        <div className="grid gap-4">
          {careJourney.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.06}>
              <article className="grid gap-5 rounded-lg border border-border bg-background p-6 sm:grid-cols-[4rem_1fr]">
                <div className="font-heading text-4xl text-primary">{item.step}</div>
                <div>
                  <h3 className="font-heading text-3xl">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

export function FounderStory({ compact = false }: { compact?: boolean }) {
  return (
    <SectionFrame>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#d9d3c8]">
            <Image
              src={imageLibrary.wellness}
              alt="Warm clinic consultation and wellness-led care"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <Eyebrow>Founder story</Eyebrow>
          <h2 className="font-heading text-4xl leading-[1.05] sm:text-5xl">
            Built in Ballymena by Maria Kearney, with care at the centre.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Maria founded My Feet Podiatry in 2010 at just 23, shortly after
              graduating from the University of Ulster, Jordanstown, with a First
              Class Honours degree in Podiatry.
            </p>
            <p>
              What began as a small clinic on Broughshane Street has grown into a
              team caring for people across Ballymena and the surrounding areas,
              with many long-standing patients still returning today.
            </p>
            {!compact ? (
              <p>
                The clinic remains rooted in Maria&apos;s original aim: helping people
                stay active, comfortable and confident on their feet while feeling
                warmly looked after from the moment they arrive.
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}

export function ClinicExperience() {
  return (
    <SectionFrame tone="white">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionIntro
            eyebrow="Clinic experience"
            title="Modern podiatry care in a calm, welcoming setting."
            text="The clinic combines specialist clinical knowledge with a patient-centred approach, so every appointment feels clear, considered and personal."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Professional care", "Clear advice", "Modern treatments", "Welcoming team"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-background p-4">
                  <Check className="size-5 text-primary" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ),
            )}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#d9d3c8]">
            <Image
              src={imageLibrary.treatments}
              alt="Podiatry assessment in a calm modern clinic setting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}

export function ReviewCarousel() {
  return (
    <SectionFrame>
        <Reveal>
          <SectionIntro
            eyebrow="Patient reviews"
            title="Trusted by patients who value professional, human care."
            text="Short excerpts from real patient reviews published on the source website."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <Reveal key={review.quote} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-border bg-white p-6 shadow-[0_18px_55px_rgba(38,38,38,0.05)]">
                <div className="mb-6 flex gap-1 text-[#a8865b]" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="leading-7 text-foreground">&quot;{review.quote}&quot;</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {review.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
    </SectionFrame>
  );
}

export function BallymenaSection() {
  return (
    <SectionFrame tone="stone">
        <Reveal>
          <div className="grid gap-10 rounded-lg border border-border bg-white p-8 shadow-[0_24px_70px_rgba(38,38,38,0.06)] lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <Eyebrow>Local to Ballymena</Eyebrow>
              <h2 className="font-heading text-4xl leading-[1.05] sm:text-5xl">
                Serving Ballymena and the surrounding communities.
              </h2>
              <p className="mt-6 leading-8 text-muted-foreground">
                My Feet Podiatry is rooted in the town, caring for generations of
                local families with trusted podiatry and chiropody services.
              </p>
            </div>
            <div className="grid gap-4 text-sm">
              <ContactLine icon={MapPin} text={`${clinic.address.street}, ${clinic.address.locality}, ${clinic.address.postalCode}`} />
              <ContactLine icon={Phone} text={clinic.phone} href={`tel:${clinic.phone}`} />
              <ContactLine icon={Mail} text={clinic.email} href={`mailto:${clinic.email}`} />
            </div>
          </div>
        </Reveal>
    </SectionFrame>
  );
}

export function BookingCTA({
  title = "Ready to move with confidence?",
  text = "Book online or call the clinic and the team will help you find the right appointment.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-primary px-5 py-20 text-white sm:px-8">
      <Reveal>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="font-heading text-5xl leading-[1.02] sm:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingButton variant="light" />
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-semibold transition hover:bg-white/10"
            >
              <Phone className="size-4" />
              Call Clinic
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function TeamGrid() {
  return (
    <SectionFrame tone="white">
        <Reveal>
          <SectionIntro
            eyebrow="Team"
            title="A small, experienced team with a personal approach."
            text="The source website describes a team of five, including three HCPC-registered podiatrists."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-border bg-background p-7">
                <div className="mb-7 flex size-14 items-center justify-center rounded-lg bg-white font-heading text-2xl text-primary shadow-sm">
                  {member.name.slice(0, 1)}
                </div>
                <h3 className="font-heading text-3xl">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold text-primary">{member.role}</p>
                <p className="mt-5 leading-7 text-muted-foreground">{member.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
    </SectionFrame>
  );
}

export function TreatmentAnchorNav() {
  return (
    <nav
      aria-label="Treatment sections"
      className="sticky top-20 z-30 border-y border-border bg-white/90 px-5 py-3 backdrop-blur sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
        {treatmentGroups.map((treatment) => (
          <a
            key={treatment.slug}
            href={`#${treatment.slug}`}
            className="shrink-0 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {treatment.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function ContactCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <ContactCard
        icon={Phone}
        label="Telephone"
        value={clinic.phone}
        href={`tel:${clinic.phone}`}
      />
      <ContactCard
        icon={Mail}
        label="Email"
        value={clinic.email}
        href={`mailto:${clinic.email}`}
      />
      <ContactCard
        icon={CalendarCheck}
        label="Online booking"
        value="Cliniko booking"
        href={clinic.bookingUrl}
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-lg border border-border bg-white p-6 shadow-[0_18px_55px_rgba(38,38,38,0.05)] transition hover:-translate-y-1 hover:border-primary/30"
    >
      <Icon className="mb-6 size-6 text-primary" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-heading text-2xl">{value}</p>
    </a>
  );
}

function ContactLine({
  icon: Icon,
  text,
  href,
}: {
  icon: LucideIcon;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="size-5 shrink-0 text-primary" />
      <span>{text}</span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 font-semibold transition hover:border-primary/30"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 font-semibold">
      {content}
    </div>
  );
}

export function MapSection() {
  return (
    <SectionFrame tone="white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Find us"
            title="31 Greenvale Street, Ballymena."
            text="A central local clinic for professional podiatry, chiropody and movement-focused foot care."
          />
          <div className="mt-8 space-y-4">
            <ContactLine icon={MapPin} text={`${clinic.address.street}, ${clinic.address.locality}, ${clinic.address.region}, ${clinic.address.postalCode}`} />
            <ContactLine icon={Clock} text={unconfirmedOperationalNotes.hours} />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border bg-[#d9d3c8] subtle-texture">
            <div className="absolute inset-6 rounded-lg border border-white/60 bg-white/72 p-8 shadow-[0_24px_70px_rgba(38,38,38,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Map placeholder
              </p>
              <p className="mt-4 font-heading text-4xl leading-tight">
                My Feet Podiatry
              </p>
              <p className="mt-5 max-w-md leading-8 text-muted-foreground">
                {clinic.address.street}, {clinic.address.locality}, {clinic.address.postalCode}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${clinic.name} ${clinic.address.street} ${clinic.address.locality}`,
                )}`}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}

export function ContactForm() {
  return (
    <SectionFrame>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Contact"
            title="Prefer a call back?"
            text="Send the clinic your details and the team can follow up. For the fastest route, use online booking."
          />
          <p className="mt-6 rounded-lg border border-border bg-white p-5 text-sm leading-7 text-muted-foreground">
            Parking/accessibility note: {unconfirmedOperationalNotes.parking}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <form
            action={`mailto:${clinic.email}`}
            className="grid gap-4 rounded-lg border border-border bg-white p-6 shadow-[0_24px_70px_rgba(38,38,38,0.06)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <label className="grid gap-2 text-sm font-semibold">
              How can we help?
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-describedby="message-help"
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <span id="message-help" className="text-xs font-normal text-muted-foreground">
                Please avoid sharing urgent medical information in this form.
              </span>
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition hover:bg-[#697866]"
            >
              Request Callback
            </button>
          </form>
        </Reveal>
      </div>
    </SectionFrame>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label htmlFor={name} className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={name === "email" ? "email" : name === "phone" ? "tel" : "name"}
        className="h-12 rounded-lg border border-border bg-background px-4 text-sm font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

export function FAQSection() {
  return (
    <SectionFrame tone="stone">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionIntro
            eyebrow="FAQ"
            title="Clear answers before you book."
            align="center"
          />
        </Reveal>
        <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-2xl">
                {faq.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-background text-base text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}

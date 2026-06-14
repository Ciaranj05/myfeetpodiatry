"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { clinic, navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

function BookingLink({
  className,
  children = "Book Appointment",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={clinic.bookingUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-[#697866] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-lg bg-white px-4 py-3 text-sm font-semibold text-foreground shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-[#faf8f5]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center">
            <Image
              src="/brand/myfeet-logo-color.svg"
              alt="My Feet Podiatry"
              className="h-12 w-auto sm:h-14"
              width={195}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-white px-4 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <Phone className="size-4" />
              {clinic.phone}
            </a>
            <BookingLink />
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-white text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-border bg-background px-5 py-5 shadow-sm lg:hidden">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={`tel:${clinic.phone}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-white text-sm font-semibold"
              >
                <Phone className="size-4" />
                Call Clinic
              </a>
              <BookingLink className="h-11" />
            </div>
          </div>
        ) : null}
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-white/95 p-3 shadow-[0_-18px_40px_rgba(38,38,38,0.08)] backdrop-blur lg:hidden">
        <a
          href={`tel:${clinic.phone}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border text-sm font-semibold text-foreground"
        >
          <Phone className="size-4" />
          Call Clinic
        </a>
        <BookingLink className="ml-2 h-11" />
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#262626] pb-24 text-white lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/brand/myfeet-logo-white.svg"
            alt="My Feet Podiatry"
            className="h-16 w-auto"
            width={195}
            height={60}
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Expert foot and lower limb care in Ballymena, helping you stay active,
            comfortable and doing the things you love.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9d3c8]">
            Visit
          </p>
          <address className="mt-4 not-italic text-sm leading-7 text-white/72">
            {clinic.address.street}
            <br />
            {clinic.address.locality}
            <br />
            {clinic.address.region}
            <br />
            {clinic.address.postalCode}
          </address>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9d3c8]">
            Book
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/72">
            <a href={`tel:${clinic.phone}`} className="hover:text-white">
              {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`} className="hover:text-white">
              {clinic.email}
            </a>
            <a
              href={clinic.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white hover:text-[#d9d3c8]"
            >
              Book online
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © 2026 My Feet Podiatry. Premium clinic website rebuild concept.
      </div>
    </footer>
  );
}

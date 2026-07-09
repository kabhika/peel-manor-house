import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { SITE } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact & Enquiry",
  description:
    "Get in touch with Peel Manor House to enquire about weddings, high tea, corporate events, markets, or accommodation in Karnup, WA.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's start planning"
          description="Send an enquiry below, or reach us directly by phone or email. We'll get back to you to discuss dates, packages, and a free private tour of the manor."
        />
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <address className="text-sm text-muted-foreground not-italic">
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </address>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <a href={SITE.phoneHref} className="text-sm text-muted-foreground hover:text-primary">
              {SITE.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <a href={SITE.emailHref} className="text-sm text-muted-foreground hover:text-primary">
              {SITE.email}
            </a>
          </div>

          <div className="border border-dashed border-border bg-muted p-4">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Map pending
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              An embedded map will go here once the site is ready for public
              hosting.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="border border-border bg-card p-8">
          <EnquiryForm />
        </Reveal>
      </div>
    </div>
  );
}

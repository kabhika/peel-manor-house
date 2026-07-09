import Link from "next/link";
import type { Metadata } from "next";
import { Cpu, MonitorPlay, Users, Utensils } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { PlaceholderImage } from "@/components/site/placeholder-image";

export const metadata: Metadata = {
  title: "Corporate Events",
  description:
    "Conferences, seminars, board meetings and functions for 150+ guests at Peel Manor House, 40 minutes south of Perth, with 10.5 acres of outdoor space and full AV.",
};

const MEETING_USES = [
  "Conferences",
  "Exhibitions",
  "Board meetings",
  "Seminars and workshops",
  "Cafe, cabaret and theatre setups",
];

const PACKAGES = [
  {
    title: "2-Day Conference Package",
    price: "$3,999",
  },
  {
    title: "Day Conference Package",
    price: "$695",
  },
];

const WHY_US = [
  { icon: MonitorPlay, title: "State-of-the-art AV", description: "Electronic whiteboards, LCD screens, projectors and full AV systems." },
  { icon: Utensils, title: "Superb food", description: "Restaurant-standard meals from an award-winning chef and culinary team." },
  { icon: Users, title: "150+ guest capacity", description: "Spacious enough for large events, indoors or across 10.5 acres of gardens." },
  { icon: Cpu, title: "Flexible room setups", description: "Air-conditioned rooms with natural light, configured to your event." },
];

export default function CorporateEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Events"
        title="Everything you need for your corporate event"
        subtitle="A laid-back yet sophisticated setting, 40 minutes from Perth and 20 minutes from Mandurah."
        imageSrc="/images/tagged/corporate/corporate-market-day-2.jpg"
      >
        <Button size="lg" render={<Link href="/contact" />}>
          Discuss Your Event
        </Button>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-heading text-2xl text-foreground sm:text-3xl">
            There&apos;s nothing quite like Peel Manor House.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            Whether it&apos;s a conference, seminar, fundraiser, team-building
            activity or charity ball, our Georgian-style manor is spacious
            enough for large events and the ideal setting for more than 150
            guests. Need outdoor function space? You&apos;ll have 10.5 acres
            of garden to play in.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="Why choose us" title="Why Choose Peel Manor House?" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10">
                  <item.icon className="size-6 text-accent" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Meeting room facilities"
            title="Set up however your event needs it"
            description="Large windows for natural light, air conditioning throughout, and rooms configured for:"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {MEETING_USES.map((use) => (
              <li key={use} className="border border-border bg-card px-4 py-3 text-sm text-foreground">
                {use}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-y border-border bg-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Conference packages"
              title="Conference packages now available"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.title} delay={i * 0.08} className="border border-border bg-card">
                <PlaceholderImage label={`${pkg.title} flyer`} className="aspect-3/4 w-full" />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-medium text-foreground">{pkg.title}</h3>
                  <p className="mt-1 font-heading text-2xl text-primary">{pkg.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What past organisers say" align="center" />
        </Reveal>
        <Reveal delay={0.08}>
          <blockquote className="mt-10 text-center">
            <p className="font-heading text-xl text-foreground">
              &ldquo;Peel Manor is breathtaking, all the staff are so
              friendly, they make you feel really welcome. The rooms are
              lovely and breakfast amazing. The secret garden is fab. Love
              visiting and will definitely go back.&rdquo;
            </p>
            <cite className="mt-4 block text-sm text-muted-foreground not-italic">
              Corporate guest (name withheld, attribution pending client sign-off)
            </cite>
          </blockquote>
        </Reveal>
      </section>

      <CtaBand
        title="Ready to book your venue?"
        description="Contact us today to discuss your upcoming corporate event."
      />
    </>
  );
}

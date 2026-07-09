import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin, TreePine, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { HighTeaBanner } from "@/components/site/high-tea-banner";
import { Reveal } from "@/components/site/reveal";
import { AiGeneratedImage } from "@/components/site/placeholder-image";

export const metadata: Metadata = {
  title: "Georgian Manor Wedding & Event Venue in Karnup, WA",
  description:
    "10.5 acres of gardens and lake, 14 luxury suites, and a Georgian-style manor 40 minutes south of Perth. Weddings, high tea, corporate events, markets, and accommodation at Peel Manor House.",
};

const OFFERINGS = [
  {
    title: "Weddings",
    href: "/weddings",
    description:
      "Indoor reception or outdoor gazebo ceremony, for an intimate 20 or up to 160 guests.",
  },
  {
    title: "High Tea",
    href: "/high-tea",
    description:
      "2016 Gold Plate Award-winning high tea, old-school charm for 2 to 100 guests.",
  },
  {
    title: "Corporate Events",
    href: "/corporate-events",
    description:
      "Conferences, seminars and functions for 150+ guests, with full AV and catering.",
  },
  {
    title: "Markets & Expos",
    href: "/markets-and-expos",
    description:
      "10.5 acres of garden space set up for stallholders, makers, and expo-goers.",
  },
  {
    title: "Accommodation",
    href: "/accommodation",
    description:
      "10 king suites and 4 spa suites overlooking the lake and gardens.",
  },
];

const FACTS = [
  { icon: MapPin, label: "40 minutes south of Perth, 20 minutes from Mandurah" },
  { icon: TreePine, label: "10.5 acres of gardens, lake, and Tuart trees" },
  { icon: Users, label: "14 luxury suites, up to 160 guests" },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Karnup, Western Australia"
        title="We become part of your event, we don't just host it."
        subtitle="A Georgian-style manor on 10.5 acres of gardens and lake, 40 minutes south of Perth."
        imageSrc="/images/tagged/hero/hero-manor-exterior-lake.jpg"
      >
        <Button size="lg" render={<Link href="/contact" />}>
          Enquire Now
        </Button>
        <Button variant="outline" size="lg" render={<Link href="/weddings" />}>
          Explore Weddings
        </Button>
      </PageHero>

      <HighTeaBanner />

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex items-center gap-3">
              <fact.icon className="size-5 shrink-0 text-accent" aria-hidden />
              <p className="text-sm text-muted-foreground">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Since 2000"
            title="One of Western Australia's premier function and accommodation venues"
            description="Peel Manor House opened as a luxury bed and breakfast getaway. As word spread, we opened our grounds to weddings and our rooms to conferences and functions. Today the manor is nestled among Tuart trees, superb gardens, and a peaceful lake, with its own secret garden of real Pinnacles over 60,000 years old."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((offering, i) => (
            <Reveal key={offering.href} delay={i * 0.05}>
              <Link
                href={offering.href}
                className="group flex h-full flex-col justify-between gap-4 border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div>
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {offering.description}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What guests say"
              title="An experience like no other"
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mx-auto mt-10 max-w-2xl text-center">
              <p className="font-heading text-2xl text-foreground sm:text-3xl">
                &ldquo;We had a lovely, relaxing time in this nice place. The
                meals are 5-star (better than most famous restaurants in
                Perth). Staff are friendly, great in hospitality, and have
                vast knowledge about the surrounding area.&rdquo;
              </p>
              <cite className="mt-4 block text-sm font-medium text-muted-foreground not-italic">
                Guest review, Tripadvisor
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <AiGeneratedImage
              src="/images/tagged/exterior-grounds/home-secret-garden-pinnacles.jpg"
              alt="Secret garden and 60,000-year-old Pinnacles"
              className="aspect-4/3 w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="A hidden corner of the manor"
              title="Our own secret garden, complete with real Pinnacles"
              description="Tucked among the Tuart trees is a secret garden with genuine Pinnacle formations over 60,000 years old. Guests can also stroll the grounds to local farms and six nearby wineries, all a short drive away."
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Book your free private tour of the manor"
        description="Browse the site to learn more, or call us today to book a free private tour and start planning your event or stay."
      />
    </>
  );
}

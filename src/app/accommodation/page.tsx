import Link from "next/link";
import type { Metadata } from "next";
import { Coffee, Crown, Gem, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "10 king suites and 4 spa suites at Peel Manor House — Deluxe, Executive, Residence and Presidential — 40 minutes south of Perth with lake and garden views.",
};

const SUITE_TIERS = [
  { icon: Sparkles, name: "Deluxe Spa Suite" },
  { icon: Gem, name: "Executive Spa Suite" },
  { icon: Crown, name: "Residence Spa Suite" },
  { icon: Crown, name: "Presidential Spa Suite" },
];

const AMENITIES = [
  "En-suite facilities",
  "42\" television",
  "Tea & coffee making facilities",
  "Ironing board and iron",
  "Hairdryer",
  "Complimentary toiletries",
  "Full English breakfast each morning",
];

const FEATURES = [
  { icon: Crown, title: "Luxurious", description: "Surroundings and service that will rejuvenate your body and soul." },
  { icon: Gem, title: "Spacious", description: "Rooms designed for your perfect weekend getaway." },
  { icon: Sparkles, title: "Relaxation", description: "Relaxation and romance. Need we say more?" },
  { icon: Coffee, title: "Delicious food", description: "Delicious food goes hand in hand with your luxury accommodation." },
];

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Looking for stunning accommodation outside of Perth?"
        subtitle="10 king suites and 4 spa suites, 40 minutes south of Perth."
        imageSrc="/images/tagged/accommodation/accommodation-hero-suite-interior.jpg"
      >
        <Button size="lg" render={<Link href="/contact" />}>
          Check Availability
        </Button>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-heading text-2xl text-foreground sm:text-3xl">
            A Georgian-style manor on semi-rural surrounds, 40 minutes south of Perth.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            The manor features 10 luxuriously appointed king suites and 4 spa
            suites — the Deluxe, Executive, Residence and Presidential Suite
            — each commanding breathtaking views of our idyllic lake and
            landscaped gardens. Stroll the 10.5 acres, visit our Manor Bar,
            play billiards or the baby grand piano, or explore nearby
            wineries and local produce.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="Spa suites" title="Four spa suite tiers" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SUITE_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.06} className="flex flex-col items-center gap-3 border border-border bg-background p-6 text-center">
                <tier.icon className="size-6 text-accent" aria-hidden />
                <p className="font-heading text-lg font-medium text-foreground">{tier.name}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Plus 10 king suites, with family configurations (king and two
            singles) and twin configurations (two queens) available.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Every suite includes"
              title="Comfort, taken care of"
            />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {AMENITIES.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  &bull; {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="grid grid-cols-2 gap-4">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="border border-border bg-card p-5">
                <feature.icon className="size-5 text-accent" aria-hidden />
                <p className="mt-3 font-heading text-base font-medium text-foreground">
                  {feature.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <p className="font-heading text-2xl text-foreground sm:text-3xl">
              &ldquo;We had a lovely, relaxing time in this nice place. The
              meals are 5-star, better than most famous restaurants in
              Perth. Staff are friendly, great in hospitality, and have vast
              knowledge about the surrounding area. Great place to escape
              city noise and connect with the environment.&rdquo;
            </p>
            <cite className="mt-4 block text-sm font-medium text-muted-foreground not-italic">
              Guest review, Tripadvisor
            </cite>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Thinking of a romantic weekend getaway?"
        description="Historic, beautiful grounds to walk and rediscover romance. Get in touch to check availability."
      />
    </>
  );
}

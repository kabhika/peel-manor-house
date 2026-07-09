import Link from "next/link";
import type { Metadata } from "next";
import { CloudRain, Car, LayoutGrid, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Markets & Expos",
  description:
    "Hire Peel Manor House's 10.5 acres of gardens and Georgian manor rooms for your next market or expo, 40 minutes south of Perth.",
};

const FEATURES = [
  {
    icon: LayoutGrid,
    title: "Space for stallholders",
    description:
      "10.5 acres of garden grounds for outdoor stalls, laid out to suit your event's scale.",
  },
  {
    icon: CloudRain,
    title: "Indoor wet-weather cover",
    description:
      "Our function rooms are available as indoor or overflow space if the weather turns.",
  },
  {
    icon: Car,
    title: "On-site parking",
    description: "Ample on-site parking for stallholders and visitors alike.",
  },
  {
    icon: Users,
    title: "Easy to reach",
    description: "Just 40 minutes south of Perth and under 20 minutes from Mandurah.",
  },
];

export default function MarketsAndExposPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets & Expos"
        title="Host your market or expo amongst the gardens"
        subtitle="10.5 acres of grounds and a Georgian manor as the backdrop for your next stallholder event."
        imageSrc="/images/tagged/corporate/markets-hero-stalls-grounds.jpg"
      >
        <Button size="lg" render={<Link href="/contact" />}>
          Enquire About Venue Hire
        </Button>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-heading text-2xl text-foreground sm:text-3xl">
            A setting that gives your market or expo room to breathe.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            Peel Manor House&apos;s gardens, lake outlook, and Georgian-style
            manor make an unusual and memorable setting for markets, expos,
            and stallholder events — whether you&apos;re organising a maker&apos;s
            market, a produce and wine showcase drawing on our local farms
            and six nearby wineries, or a trade expo that needs both indoor
            and outdoor space.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="What's on offer" title="Built for stallholders and visitors" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.06} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10">
                  <feature.icon className="size-6 text-accent" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Planning an event"
            title="Tell us about your market or expo"
            description="Every stallholder event is different. Let us know your expected stall count, indoor/outdoor mix, and dates in mind, and our team will put together a venue hire package to suit."
          />
        </Reveal>
      </section>

      <CtaBand
        title="Bring your market or expo to the manor"
        description="Get in touch to discuss dates, layout, and venue hire for your next stallholder event."
      />
    </>
  );
}

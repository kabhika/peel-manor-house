import Link from "next/link";
import type { Metadata } from "next";
import { Grape, Piano, Sparkles, Trees } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { AiGeneratedImage } from "@/components/site/placeholder-image";

export const metadata: Metadata = {
  title: "About & History",
  description:
    "From a boutique bed and breakfast opened in 2000 to one of WA's premier function and accommodation venues — the story of Peel Manor House.",
};

const GROUNDS = [
  { icon: Trees, text: "10.5 acres nestled among Tuart trees, gardens, and a peaceful lake" },
  { icon: Sparkles, text: "A secret garden with real Pinnacle formations over 60,000 years old" },
  { icon: Grape, text: "Local farms for fresh produce, and six wineries a short drive away" },
  { icon: Piano, text: "A sweeping staircase, billiards table, and baby grand piano inside the manor" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We become part of your event, we don't just host it."
        subtitle="Family owned and operated since 2000."
        imageSrc="/images/tagged/exterior-grounds/about-hero-sweeping-staircase.jpg"
      >
        <Button size="lg" render={<Link href="/contact" />}>
          Book a Free Private Tour
        </Button>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Our story" title="From a quiet retreat to a WA favourite" />
          <div className="mt-6 space-y-4 text-base text-muted-foreground">
            <p>
              Peel Manor House was specially built as a bed and breakfast to
              offer a luxury getaway for people wanting to escape the hustle
              and bustle of Perth. When we opened in 2000, word of this
              idyllic retreat quickly spread, and people began travelling a
              fair distance to host their events and special occasions here.
            </p>
            <p>
              As requests increased, we opened the grounds for weddings and
              the large rooms for conferences and functions. Today, Peel
              Manor House is widely regarded as one of Western Australia&apos;s
              premier function and accommodation venues, recommended by the
              many brides we&apos;ve helped turn their dream weddings into
              reality.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The grounds"
              title="10.5 acres, 40 minutes south of Perth"
              description="Under 20 minutes north of Mandurah, the Georgian-style mansion is owned and operated by a local family."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GROUNDS.map((item, i) => (
              <Reveal key={item.text} delay={i * 0.06} className="border border-border bg-background p-6 text-center">
                <item.icon className="mx-auto size-6 text-accent" aria-hidden />
                <p className="mt-4 text-sm text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <AiGeneratedImage
              src="/images/tagged/exterior-grounds/about-experience-facade-staircase.jpg"
              alt="Georgian mansion facade and sweeping staircase"
              className="aspect-4/3 w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="An experience like no other"
              title="Personal service, from every detail"
              description="Our commitment is to offer a personal service that pampers you and makes you feel like a VIP. Everything can be organised in-house, so there's no need to stress about your event — our coordinators assist with your professional DJ, centrepieces, flowers, photographers, and audio-visual equipment."
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Come see the manor for yourself"
        description="Browse the site to learn more about our services and accommodation, or call us today to book your free private tour."
      />
    </>
  );
}

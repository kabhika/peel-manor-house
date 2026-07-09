import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Weddings",
  description:
    "A luxury wedding venue 40 minutes south of Perth. Indoor reception or outdoor gazebo ceremony for 20 to 160 guests, with in-house coordinators for every detail.",
};

const HIGHLIGHTS = [
  {
    title: "Indoor Reception",
    description:
      "Spacious venue for your reception, complete with a sumptuous menu and dance floor.",
    image: "/images/tagged/weddings/wedding-reception-decor-fairylights-1.jpg",
  },
  {
    title: "Outdoor Gazebo Ceremony",
    description: "Take advantage of the sunny weather with a beautiful outdoor ceremony.",
    image: "/images/tagged/weddings/wedding-outdoor-gazebo.jpg",
  },
  {
    title: "The Complete Wedding Package",
    description: "From cars to cake, your dream wedding is just a phone call away.",
    image: "/images/tagged/weddings/wedding-helicopter-nye-manor.jpg",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Weddings"
        title="Wonderful Perth Wedding Venue at Peel Manor House"
        subtitle="One Love. One Moment. One Wedding at a Time."
        imageSrc="/images/tagged/weddings/wedding-ceremony-red-carpet-aisle-1.jpg"
      >
        <Button size="lg" render={<Link href="/contact" />}>
          Enquire About Your Date
        </Button>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-heading text-2xl text-foreground sm:text-3xl">
            Situated amidst acres of beautifully landscaped gardens, Peel
            Manor House is one of those luxury wedding venues brides and
            grooms can only dream of.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            A stunning Georgian-style mansion tucked away between giant trees
            and lush greenery, alongside the shimmering shores of a tranquil
            lake, just 40 minutes south of Perth. Our venue accommodates up to
            160 guests in complete privacy, giving you time and space to
            prepare for your exclusive ceremony.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Your complete wedding experience"
              title="Everything arranged, from cars to cake"
              description="As an all-in-one wedding venue, we provide the ideal location for your ceremony and reception, plus experienced wedding coordinators who can assist with hair, make-up, cake, florists, photographers, and transport — whether you arrive by horse-drawn carriage, limousine, or helicopter."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="text-center">
                <div className="relative mx-auto size-40 overflow-hidden rounded-full ring-1 ring-border">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-heading text-2xl font-medium text-foreground">
              Accommodation
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              When the day is over, your guests can enjoy exclusive use of
              Peel Manor House&apos;s suites, accommodating you and up to 45
              guests, followed by a full English breakfast. For unsurpassed
              luxury, book the Presidential honeymoon spa suite for your
              wedding night.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="font-heading text-2xl font-medium text-foreground">
              Catering
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Our chef has over 20 years&apos; experience and tailors a menu to
              suit your taste and budget — set menu, buffet, or finger
              food/cocktail style. Our fully licensed bar serves an extensive
              selection of beer, wine, champagne, cocktails and soft drinks to
              suit every budget.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Peel Manor House: your exclusive Perth wedding venue"
        description="Contact us to discuss your bespoke wedding plans, or call for a list of our unique wedding packages."
      />
    </>
  );
}

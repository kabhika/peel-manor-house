import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Award, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { getNextHighTeaEvent } from "@/lib/humanitix";

export const metadata: Metadata = {
  title: "High Tea",
  description:
    "2016 Catering Institute Gold Plate Award-winning high tea at Peel Manor House. Old-school charm for 2 to 100 guests, on 10.5 acres south of Perth.",
};

const PACKAGES = [
  {
    name: "3 Sweet, 4 Savoury",
    price: "$49.50",
    unit: "per person",
    features: ["Two flavours of loose leaf tea per person", "Choice of over 30 flavours"],
  },
  {
    name: "3 Sweet, 6 Savoury",
    price: "$59.50",
    unit: "per person",
    features: [
      "Two flavours of loose leaf tea per person",
      "Includes a glass of bubbles",
      "Choice of over 30 flavours",
    ],
  },
];

const NOTES = [
  "Minimum 2 people, up to a celebration of 100",
  "Dietary needs catered: gluten-free, dairy-free, lactose intolerant, vegetarian, vegan (surcharges apply for gluten-free, dairy-free, lactose intolerant and vegan)",
  "Children, tweens, and teen birthday celebrations welcome",
  "High chairs and pram space available on request",
  "Doggie High Teas welcome — bring your four-legged friend to the grounds",
  "Payment in full required; non-refundable but transferable to another date with 5+ days' notice",
];

export default async function HighTeaPage() {
  const event = await getNextHighTeaEvent();

  return (
    <>
      <PageHero
        eyebrow="High Tea"
        title="Would you like to experience some old-school charm?"
        subtitle="The iconic three-tier serving platter of sweet and savoury delights, in the gorgeous surrounds of an old English manor."
        imageSrc="/images/tagged/high-tea/high-tea-fruit-tea-table-spread.jpg"
      >
        {event ? (
          <Button
            size="lg"
            render={
              <a href={event.url} target="_blank" rel="noopener noreferrer" />
            }
          >
            Book Your High Tea
          </Button>
        ) : (
          <Button size="lg" render={<Link href="/contact" />}>
            Enquire About High Tea
          </Button>
        )}
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent/10">
            <Award className="size-7 text-accent" aria-hidden />
          </div>
          <p className="mt-5 font-heading text-2xl text-foreground sm:text-3xl">
            Winner of the 2016 Catering Institute Gold Plate Award for High Tea
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            High tea is an old-school oasis in the modern age. Come and enjoy
            it on 10.5 acres, just a short drive south of Perth.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Packages"
              title="Delicious gluten and dairy-free options available"
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.08}>
                <div className="flex h-full flex-col border border-border bg-background p-8">
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-2">
                    <span className="font-heading text-3xl text-primary">{pkg.price}</span>{" "}
                    <span className="text-sm text-muted-foreground">{pkg.unit}</span>
                  </p>
                  <ul className="mt-6 space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Additional teas $3.00. Not a tea drinker? We offer a range of coffees too.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Good to know"
              title="Booking details and dietary care"
            />
            <ul className="mt-6 space-y-3">
              {NOTES.map((note) => (
                <li key={note} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-4/3 overflow-hidden rounded-sm">
            <Image
              src="/images/tagged/high-tea/high-tea-doggie-high-tea.jpg"
              alt="Doggie high tea on the grounds"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Enjoy a perfect afternoon with us"
        description="Get in touch to book your high tea — and why not invite some friends along?"
      />
    </>
  );
}

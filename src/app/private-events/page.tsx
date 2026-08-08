import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Private Events & Celebrations",
  description:
    "School formals, charity events, family celebrations and more at Peel Manor House, 40 minutes south of Perth.",
};

const SCHOOL_FORMALS = [
  "Cater up to 160 guests",
  "Red or white carpet on arrival",
  "Hire of the manor, large dance floor, professional DJ",
  "A la carte dinner or buffet, unlimited soft drinks",
  "Function area decorated with tablecloths, chair covers and sashes to suit your theme, table centrepieces",
  "Professional photographer can be organised",
];

const FAMILY_CELEBRATIONS = [
  "On-site catering and accommodation",
  "Can source flowers, photographers, cake makers",
  "Full exclusive access to the manor and grounds available with luxury accommodation for multi-day celebrations",
];

const GALLERY = [
  {
    src: "/images/tagged/private-events/private-events-balloon-backdrop-30th.jpg",
    alt: "Black, white and rose gold balloon garland arch with a 'Hello Thirty' neon sign backdrop",
  },
  {
    src: "/images/tagged/private-events/private-events-50th-birthday.jpg",
    alt: "Milestone birthday cake table with light-up numbers and cupcakes, set up in the manor's entrance hall",
  },
  {
    src: "/images/tagged/private-events/private-events-boho-baby-shower.jpg",
    alt: "Boho-styled baby shower set-up in the manor's function room, with a fairy-light canopy, floor cushions and vintage tea table settings",
  },
  {
    src: "/images/tagged/private-events/private-events-unicorn-party-2.jpg",
    alt: "Two girls in pink gowns with two flower-adorned unicorn ponies on the manor lawn",
  },
];

export default function PrivateEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Events"
        title="Private Events & Celebrations"
        subtitle="School formals, charity events, family celebrations and more — 40 minutes south of Perth."
        imageSrc="/images/tagged/private-events/private-events-unicorn-party-1.jpg"
      >
        <Button size="lg" render={<Link href="/contact" />}>
          Enquire About Your Event
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Formals & Balls"
            title="School Formals, Balls and Dinners"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {SCHOOL_FORMALS.map((item) => (
              <li
                key={item}
                className="border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Charity Events"
              title="Charity Events"
              align="center"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 text-base text-muted-foreground">
              Function rooms and gardens tailored for charity events, sponsor
              and supporter-facing occasions, with packages tailored on
              request.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Family Celebrations"
            title="Christmas Parties, Family Fun Days & Milestone Celebrations"
            description="Christmas parties, family fun days, milestone birthdays and baby showers."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {FAMILY_CELEBRATIONS.map((item) => (
              <li
                key={item}
                className="border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {GALLERY.map((image, i) => (
            <Reveal
              key={image.src}
              delay={i * 0.06}
              className="relative aspect-4/3 overflow-hidden rounded-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Book your private celebration"
        description={`Call us on ${SITE.phone} today to book a free private tour of our function facilities.`}
      />
    </>
  );
}

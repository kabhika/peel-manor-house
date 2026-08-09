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

const WEDDING_PHOTO_GROUPS: {
  title: string;
  photos: { src: string; alt: string }[];
}[] = [
  {
    title: "Ceremony",
    photos: [
      {
        src: "/images/tagged/weddings/wedding-ceremony-red-carpet-chandelier.jpg",
        alt: "Grand foyer staircase and chandelier with a red carpet runner, flanked by round tables set with gold-sashed chair covers",
      },
      {
        src: "/images/tagged/weddings/wedding-ceremony-rustic-truck-haybale.jpg",
        alt: "Rustic ceremony set-up under shade trees with a vintage flatbed truck, hay bale seating and a white drape arch",
      },
      {
        src: "/images/tagged/weddings/wedding-ceremony-gazebo-amphitheater.jpg",
        alt: "Wide view of the stepped amphitheater seating and gazebo beside the pond, dressed with cream and gold chair sashes",
      },
      {
        src: "/images/tagged/weddings/wedding-ceremony-winter-entrance.jpg",
        alt: "White-draped winter entrance with fairy lights and frosted branch arrangements on plinths",
      },
      {
        src: "/images/tagged/weddings/wedding-ceremony-carriage-illustration.png",
        alt: "Reception stage backdrop with a gold carriage-crest design, a tall tiered wedding cake and candlelit floral arrangements",
      },
      {
        src: "/images/tagged/weddings/wedding-ceremony-carriage-arrival.jpg",
        alt: "Performers in Disney-princess-style costume gowns riding in a horse-drawn carriage with a costumed driver and footman",
      },
    ],
  },
  {
    title: "Reception & decor",
    photos: [
      {
        src: "/images/tagged/weddings/wedding-reception-head-table-fairylights.jpg",
        alt: "Head table with a fairy-light curtain backdrop, white swagged skirting and burgundy chair sashes",
      },
      {
        src: "/images/tagged/weddings/wedding-reception-marquee.jpg",
        alt: "Clear-roof marquee reception with long tables, gold chiavari chairs and floral centrepieces overlooking the grounds",
      },
      {
        src: "/images/tagged/weddings/wedding-reception-silver-centrepiece.jpg",
        alt: "Round table with a silver patterned tablecloth, silver chair sashes and a crystal candelabra centrepiece",
      },
      {
        src: "/images/tagged/weddings/wedding-reception-country-decor-1.jpg",
        alt: "Dried floral bunch tied to a lace curtain, with a white wrought-iron bistro table and chairs beside the rustic truck ceremony set-up",
      },
      {
        src: "/images/tagged/weddings/wedding-reception-country-decor-2.jpg",
        alt: "Celebrant leading a couple's vows under the trees, with guests seated on hay bale benches",
      },
      {
        src: "/images/tagged/weddings/wedding-reception-vintage-texture.jpg",
        alt: "Stock photo of a hanging white balloon installation in a marble, gold-columned hall — a decorative reference image, not Peel Manor House",
      },
    ],
  },
  {
    title: "Real weddings held here",
    photos: [
      {
        src: "/images/tagged/weddings/wedding-real-brides-together.jpg",
        alt: "Two brides embracing beside the garden pond, one in a white strapless gown and one in a blush shirt with a boutonniere",
      },
      {
        src: "/images/tagged/weddings/wedding-real-sam-and-dan.jpg",
        alt: "Groom kissing the bride's forehead on the lawn, bride holding a garden-style bouquet with trailing pink ribbon",
      },
      {
        src: "/images/tagged/weddings/wedding-real-lombardo-39.jpg",
        alt: "Bridal party posed on a large fallen log at sunset, the bride's veil blowing in the wind",
      },
      {
        src: "/images/tagged/weddings/wedding-real-lombardo-42.jpg",
        alt: "Bride and groom standing at the stone balustrade terrace under a dramatic orange-lit sunset sky",
      },
      {
        src: "/images/tagged/weddings/wedding-real-billiards-candid.jpg",
        alt: "Overhead view of the bride and groom playing pool together in the manor's billiards room",
      },
      {
        src: "/images/tagged/weddings/wedding-real-unicorn-pmh.jpg",
        alt: "Two children in costume beside two ponies decorated as unicorns on the lawn — not a wedding photo",
      },
    ],
  },
];

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

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="From our weddings"
              title="Real weddings at Peel Manor House"
              description="Ceremony setups, reception styling, and real weddings held at Peel Manor House."
              align="center"
            />
          </Reveal>

          <div className="mt-14 space-y-14">
            {WEDDING_PHOTO_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-heading text-xl font-medium text-foreground">
                  {group.title}
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {group.photos.map((photo, i) => (
                    <Reveal
                      key={photo.src}
                      delay={i * 0.05}
                      className="relative aspect-4/3 overflow-hidden border border-border"
                    >
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Peel Manor House: your exclusive Perth wedding venue"
        description="Contact us to discuss your bespoke wedding plans, or call for a list of our unique wedding packages."
      />
    </>
  );
}

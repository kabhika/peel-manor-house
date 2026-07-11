import Image from "next/image";
import type { Metadata } from "next";

import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { PlaceholderImage, AiGeneratedImage } from "@/components/site/placeholder-image";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Peel Manor House — weddings, high tea, accommodation, and the manor grounds in Karnup, WA.",
};

type GalleryItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "ai"; src: string; alt: string }
  | { kind: "placeholder"; label: string };

const CATEGORIES: { title: string; items: GalleryItem[] }[] = [
  {
    title: "The Manor & Grounds",
    items: [
      { kind: "ai", src: "/images/tagged/exterior-grounds/gallery-manor-front-facade.png", alt: "Manor exterior, front facade" },
      { kind: "ai", src: "/images/tagged/exterior-grounds/gallery-gardens-lake.png", alt: "Gardens and lake" },
      { kind: "ai", src: "/images/tagged/exterior-grounds/gallery-secret-garden-pinnacles.jpg", alt: "Secret garden and Pinnacles" },
    ],
  },
  {
    title: "Accommodation",
    items: [
      { kind: "ai", src: "/images/tagged/accommodation/gallery-luxury-suite.jpg", alt: "Luxury suite at Peel Manor House" },
      { kind: "ai", src: "/images/tagged/accommodation/gallery-presidential-spa-suite.jpg", alt: "Presidential spa suite" },
      { kind: "ai", src: "/images/tagged/accommodation/gallery-manor-bar-billiards.jpg", alt: "Manor Bar and billiards room" },
    ],
  },
  {
    title: "Weddings",
    items: [
      { kind: "ai", src: "/images/tagged/weddings/gallery-outdoor-gazebo-ceremony.jpg", alt: "Outdoor gazebo ceremony" },
      { kind: "ai", src: "/images/tagged/weddings/gallery-indoor-reception-dancefloor.jpg", alt: "Indoor reception, dance floor" },
      { kind: "ai", src: "/images/tagged/weddings/gallery-bridal-party-grounds.jpg", alt: "Bridal party on the grounds" },
    ],
  },
  {
    title: "High Tea",
    items: [
      { kind: "ai", src: "/images/tagged/high-tea/gallery-high-tea-spread.jpg", alt: "High tea spread at Peel Manor House" },
      { kind: "ai", src: "/images/tagged/high-tea/gallery-doggie-high-tea-grounds.jpg", alt: "Doggie high tea on the grounds" },
      { kind: "image", src: "/images/awards/GOLD-PLATE-50TH.jpg", alt: "2016 Catering Institute Gold Plate Award" },
    ],
  },
  {
    title: "Corporate & Markets",
    items: [
      { kind: "ai", src: "/images/tagged/corporate/gallery-conference-room-setup.jpg", alt: "Conference room setup" },
      { kind: "ai", src: "/images/tagged/corporate/gallery-outdoor-market-stalls.jpg", alt: "Outdoor market stalls" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Gallery"
          title="Peel Manor House, in pictures"
          description="A first look at the manor and grounds. A full professional shoot is planned — categories below marked as pending will be updated once those photos are tagged in."
          align="center"
        />
      </Reveal>

      <div className="mt-16 space-y-16">
        {CATEGORIES.map((category) => (
          <div key={category.title}>
            <h2 className="font-heading text-2xl font-medium text-foreground">
              {category.title}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.05} className="relative aspect-4/3 overflow-hidden border border-border">
                  {item.kind === "image" ? (
                    <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  ) : item.kind === "ai" ? (
                    <AiGeneratedImage src={item.src} alt={item.alt} className="h-full w-full" />
                  ) : (
                    <PlaceholderImage label={item.label} className="h-full w-full" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

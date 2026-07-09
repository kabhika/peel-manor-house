import Image from "next/image";
import Link from "next/link";
import { ALL_NAV_LINKS, SITE } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.domain,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine1,
      addressLocality: "Karnup",
      addressRegion: "WA",
      postalCode: "6176",
      addressCountry: "AU",
    },
  };

  return (
    <footer className="border-t border-border bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo/PeelManorHouseLogo-clean.png"
            alt={SITE.name}
            width={160}
            height={160}
            className="h-24 w-auto"
          />
          <p className="mt-3 text-sm text-muted-foreground">
            A Georgian-style manor on 10.5 acres in Karnup, WA — 40 minutes
            south of Perth, under 20 minutes north of Mandurah.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Visit</p>
          <address className="mt-3 text-sm text-muted-foreground not-italic">
            {SITE.addressLine1}
            <br />
            {SITE.addressLine2}
          </address>
          <a
            href={SITE.phoneHref}
            className="mt-3 block text-sm text-muted-foreground hover:text-primary"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.emailHref}
            className="mt-1 block text-sm text-muted-foreground hover:text-primary"
          >
            {SITE.email}
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Explore</p>
          <ul className="mt-3 space-y-2">
            {ALL_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Enquire</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Booking a wedding, event, or stay? Reach out and our team will
            help plan every detail.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
          >
            Enquire Now &rarr;
          </Link>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground">
        &copy; {year} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}

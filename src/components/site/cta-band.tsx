import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/nav";
import { Reveal } from "./reveal";

export function CtaBand({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-medium sm:text-4xl">{title}</h2>
        <p className="mt-4 text-primary-foreground/85">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            render={<Link href="/contact" />}
          >
            Enquire Now
          </Button>
          <a
            href={SITE.phoneHref}
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
          >
            or call {SITE.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

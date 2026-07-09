import Image from "next/image";
import { PlaceholderImage } from "./placeholder-image";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  placeholderLabel,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  placeholderLabel?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <PlaceholderImage label={placeholderLabel ?? title} className="absolute inset-0" />
        )}
        {imageSrc && (
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40">
        {eyebrow && (
          <p
            className={cn(
              "text-sm font-medium tracking-[0.2em] uppercase",
              imageSrc ? "text-white/80" : "text-primary"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "mt-3 max-w-2xl font-heading text-4xl font-medium sm:text-5xl lg:text-6xl",
            imageSrc ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "mt-4 max-w-xl text-base sm:text-lg",
              imageSrc ? "text-white/90" : "text-muted-foreground"
            )}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

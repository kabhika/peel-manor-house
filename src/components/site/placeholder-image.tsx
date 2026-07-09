import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Clearly-marked stand-in for the 78 photos still awaiting tagging into
 * public/images/ (see _assets-placeholder). Swap for a real <Image> once
 * tagged - do not delete this component's usages silently.
 */
export function PlaceholderImage({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border border-dashed border-border bg-muted text-center",
        className
      )}
    >
      <ImageOff className="size-6 text-muted-foreground/60" aria-hidden />
      <p className="max-w-[16rem] px-4 text-xs tracking-wide text-muted-foreground/80 uppercase">
        Photo pending &mdash; {label}
      </p>
    </div>
  );
}

/**
 * AI-generated stand-in photo, used only for the 19 filenames the client
 * confirmed are AI-generated (not tagged-in real venue photography).
 */
export function AiGeneratedImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
    </div>
  );
}

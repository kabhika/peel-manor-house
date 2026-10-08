import type { CSSProperties } from "react";

/**
 * Scroll reveal done in CSS (see .reveal in globals.css), not JavaScript.
 *
 * The content is always visible in the server HTML, so nothing waits on
 * hydration, crawlers see everything, and reduced motion users get no
 * animation. Browsers without scroll driven animations simply show the
 * content with no fade. `delay` shifts where the fade starts within the
 * scroll range, so staggered cards still enter one after another.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className ? `reveal ${className}` : "reveal"}
      style={{ "--reveal-delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}

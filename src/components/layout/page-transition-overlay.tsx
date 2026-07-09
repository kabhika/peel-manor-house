"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Full-screen wipe overlay on route change. Mirrors the MASTER.md motion spec
 * (400-600ms, power2.inOut-equivalent easing) using Framer Motion instead of
 * gsap, since that's this project's animation library.
 */
export function PageTransitionOverlay() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] origin-top bg-primary"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.4, delay: 0.1, ease: [0.45, 0, 0.15, 1] } }}
        exit={{ scaleY: 1, transition: { duration: 0.4, ease: [0.45, 0, 0.15, 1] } }}
      />
    </AnimatePresence>
  );
}

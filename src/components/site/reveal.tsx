"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  // Always render a motion.div so server and client markup match. Reduced
  // motion is handled by <MotionConfig reducedMotion="user"> in
  // SmoothScrollProvider (transforms are dropped, opacity still fades in).
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.45, 0, 0.15, 1] }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type ScrollIndicatorProps = {
  label: string;
  targetId: string;
};

export function ScrollIndicator({ label, targetId }: ScrollIndicatorProps) {
  const reducedMotion = useReducedMotion();

  return (
    <a
      href={`#${targetId}`}
      className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-paper/70 transition-colors duration-300 hover:text-paper"
    >
      <span className="text-[11px] uppercase tracking-widest2">{label}</span>
      <span className="flex h-9 w-6 items-start justify-center rounded-full border border-paper/40 p-1.5 transition-colors duration-300 group-hover:border-accent">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          animate={
            reducedMotion
              ? undefined
              : { y: [0, 12, 0], opacity: [1, 0.3, 1] }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </span>
    </a>
  );
}

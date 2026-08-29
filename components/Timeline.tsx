"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { palmares, type TimelineEntry } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { FadeInSection } from "./FadeInSection";
import { RevealText } from "./RevealText";

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <FadeInSection className="relative pl-10 md:pl-14">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 ${
          entry.highlight
            ? "border-accent bg-accent"
            : entry.isGoal
              ? "border-paper/70 bg-ink"
              : "border-paper/50 bg-ink"
        }`}
      />
      <p className="mb-1 font-serif text-2xl text-accent md:text-3xl">
        {entry.year}
      </p>
      <h3 className="mb-2 text-lg font-semibold text-paper md:text-xl">
        {entry.title}
      </h3>
      <p className="max-w-xl text-sm leading-relaxed text-paper/70 md:text-base">
        {entry.description}
      </p>
      {entry.isGoal && (
        <span className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-paper/50">
          Objectif
        </span>
      )}
    </FadeInSection>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="palmares" className="bg-ink py-24 md:py-32">
      <div className="section-shell">
        <FadeInSection>
          <p className="mb-4 text-xs uppercase tracking-widest2 text-accent">
            {palmares.kicker}
          </p>
        </FadeInSection>

        <RevealText
          text={palmares.title}
          as="h2"
          className="mb-6 max-w-2xl font-serif text-4xl font-semibold leading-tight text-paper md:text-5xl"
        />

        <FadeInSection delay={0.1}>
          <p className="mb-16 max-w-xl text-base leading-relaxed text-paper/70 md:mb-20 md:text-lg">
            {palmares.intro}
          </p>
        </FadeInSection>

        <div ref={containerRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-paper/15"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-0 top-0 w-px origin-top bg-accent"
            style={reducedMotion ? { height: "100%" } : { height: lineHeight }}
          />

          <div className="flex flex-col gap-14 md:gap-16">
            {palmares.timeline.map((entry) => (
              <TimelineItem key={`${entry.year}-${entry.title}`} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

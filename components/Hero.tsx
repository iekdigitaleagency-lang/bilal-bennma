"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ScrollIndicator } from "./ScrollIndicator";

function HeroTitle({ text }: { text: string }) {
  const reducedMotion = useReducedMotion();
  const letters = Array.from(text);

  if (reducedMotion) {
    return <>{text}</>;
  }

  return (
    <span aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.4 + index * 0.045,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0"
        style={reducedMotion ? undefined : { y: parallaxY }}
      >
        <motion.div
          className="absolute inset-0"
          animate={reducedMotion ? undefined : { scale: [1, 1.12, 1] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 42, repeat: Infinity, ease: "linear" }
          }
        >
          <Image
            src={hero.backgroundImage.src}
            alt={hero.backgroundImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* Dégradés noirs pour faire ressortir le texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/70" />
      <div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 220px 40px rgba(10,10,10,0.85)",
        }}
      />
      <div className="grain-overlay" />

      <motion.div
        className="section-shell relative z-10 flex flex-col items-center text-center"
        style={reducedMotion ? undefined : { opacity: contentOpacity }}
      >
        <p className="mb-6 text-xs uppercase tracking-widest2 text-accent md:text-sm">
          {hero.kicker}
        </p>
        <h1 className="font-serif text-[13vw] font-semibold uppercase leading-[0.95] tracking-widest2 text-paper sm:text-[10vw] md:text-[8rem] lg:text-[9rem]">
          <HeroTitle text={hero.title} />
        </h1>
        <p className="mt-8 text-sm uppercase tracking-[0.25em] text-paper/85 md:text-base">
          {hero.subtitle}
        </p>
      </motion.div>

      <ScrollIndicator label={hero.scrollLabel} targetId="parcours" />
    </section>
  );
}

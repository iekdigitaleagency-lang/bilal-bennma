import Image from "next/image";
import { hero, parcours } from "@/data/content";
import { FadeInSection } from "./FadeInSection";
import { RevealText } from "./RevealText";
import { PullQuote } from "./PullQuote";

export function Parcours() {
  return (
    <section id="parcours" className="bg-ink py-24 md:py-32">
      <div className="section-shell grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <FadeInSection className="relative order-2 aspect-[4/5] w-full overflow-hidden md:order-1">
          <Image
            src={hero.backgroundImage.src}
            alt={hero.backgroundImage.alt}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top grayscale"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 border border-paper/10" />
        </FadeInSection>

        <div className="order-1 md:order-2">
          <FadeInSection>
            <p className="mb-4 text-xs uppercase tracking-widest2 text-accent">
              {parcours.kicker}
            </p>
          </FadeInSection>

          <RevealText
            text={parcours.title}
            as="h2"
            className="mb-8 font-serif text-4xl font-semibold leading-tight text-paper md:text-5xl"
          />

          <div className="flex flex-col gap-5">
            {parcours.paragraphs.map((paragraph, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-paper/80 md:text-lg">
                  {paragraph}
                </p>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2} className="mt-10">
            <PullQuote>{parcours.quote}</PullQuote>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

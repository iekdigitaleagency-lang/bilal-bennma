import Image from "next/image";
import { partners } from "@/data/content";
import { FadeInSection } from "./FadeInSection";
import { RevealText } from "./RevealText";
import { PullQuote } from "./PullQuote";

const PLACEHOLDER_COUNT = 6;

export function Partners() {
  const hasLogos = partners.logos.length > 0;

  return (
    <section id="partenaires" className="bg-ink py-24 md:py-32">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <FadeInSection>
            <p className="mb-4 text-xs uppercase tracking-widest2 text-accent">
              {partners.kicker}
            </p>
          </FadeInSection>

          <RevealText
            text={partners.title}
            as="h2"
            className="mb-8 font-serif text-4xl font-semibold leading-tight text-paper md:text-5xl"
          />

          <div className="flex flex-col gap-5">
            {partners.paragraphs.map((paragraph, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-paper/80 md:text-lg">
                  {paragraph}
                </p>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2} className="mt-10">
            <PullQuote className="mx-auto max-w-md text-left">
              {partners.quote}
            </PullQuote>
          </FadeInSection>
        </div>

        <FadeInSection
          delay={0.1}
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-3 md:mt-24 md:grid-cols-6"
        >
          {hasLogos
            ? partners.logos.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target={partner.href ? "_blank" : undefined}
                  rel={partner.href ? "noopener noreferrer" : undefined}
                  className="flex aspect-[3/2] items-center justify-center border border-paper/10 p-6 grayscale transition duration-300 hover:grayscale-0"
                >
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="h-auto w-full object-contain"
                  />
                </a>
              ))
            : Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
                <div
                  key={index}
                  className="flex aspect-[3/2] items-center justify-center border border-dashed border-paper/15 px-4 text-center text-[11px] uppercase tracking-wide text-paper/30"
                >
                  Votre logo ici
                </div>
              ))}
        </FadeInSection>
      </div>
    </section>
  );
}

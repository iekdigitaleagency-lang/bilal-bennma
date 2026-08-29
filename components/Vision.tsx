import { vision } from "@/data/content";
import { FadeInSection } from "./FadeInSection";
import { RevealText } from "./RevealText";
import { PullQuote } from "./PullQuote";

export function Vision() {
  return (
    <section id="vision" className="bg-ink py-24 md:py-32">
      <div className="section-shell grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <FadeInSection>
            <p className="mb-4 text-xs uppercase tracking-widest2 text-accent">
              {vision.kicker}
            </p>
          </FadeInSection>
          <RevealText
            text={vision.title}
            as="h2"
            className="font-serif text-4xl font-semibold leading-tight text-paper md:text-5xl"
          />
        </div>

        <div>
          <div className="flex flex-col gap-5">
            {vision.paragraphs.map((paragraph, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-paper/80 md:text-lg">
                  {paragraph}
                </p>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.2} className="mt-10">
            <PullQuote>{vision.quote}</PullQuote>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

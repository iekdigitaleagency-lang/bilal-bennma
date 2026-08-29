import { stats } from "@/data/content";
import { AnimatedCounter } from "./AnimatedCounter";
import { FadeInSection } from "./FadeInSection";
import { RevealText } from "./RevealText";

export function Stats() {
  return (
    <section id="chiffres" className="border-y border-paper/10 bg-ink py-24 md:py-32">
      <div className="section-shell">
        <FadeInSection>
          <p className="mb-4 text-center text-xs uppercase tracking-widest2 text-accent">
            {stats.kicker}
          </p>
        </FadeInSection>

        <RevealText
          text={stats.title}
          as="h2"
          className="mb-16 text-center font-serif text-4xl font-semibold leading-tight text-paper md:mb-20 md:text-5xl"
        />

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {stats.items.map((item, index) => (
            <FadeInSection
              key={item.label}
              delay={index * 0.1}
              className="flex flex-col items-center gap-3 text-center"
            >
              <AnimatedCounter
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                className="font-serif text-5xl font-semibold text-paper md:text-6xl"
              />
              <p className="max-w-[14ch] text-xs uppercase tracking-wide text-paper/60 md:text-sm">
                {item.label}
              </p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import { contact } from "@/data/content";
import { FadeInSection } from "./FadeInSection";
import { RevealText } from "./RevealText";
import { PullQuote } from "./PullQuote";

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 md:py-36">
      <div className="section-shell flex flex-col items-center text-center">
        <FadeInSection>
          <p className="mb-4 text-xs uppercase tracking-widest2 text-accent">
            {contact.kicker}
          </p>
        </FadeInSection>

        <RevealText
          text={contact.title}
          as="h2"
          className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-paper md:text-6xl"
        />

        <FadeInSection delay={0.1} className="mt-10">
          <PullQuote className="mx-auto max-w-lg text-left">
            {contact.quote}
          </PullQuote>
        </FadeInSection>

        <FadeInSection
          delay={0.2}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
        >
          <a
            href={`mailto:${contact.email}`}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden border border-paper/30 px-10 py-4 text-sm uppercase tracking-wide text-paper transition-colors duration-300 hover:border-accent sm:w-auto"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-0"
            />
            <span className="relative z-10">{contact.email}</span>
          </a>

          <a
            href={`tel:${contact.phoneHref}`}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden border border-paper/30 px-10 py-4 text-sm uppercase tracking-wide text-paper transition-colors duration-300 hover:border-accent sm:w-auto"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-0"
            />
            <span className="relative z-10">{contact.phone}</span>
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}

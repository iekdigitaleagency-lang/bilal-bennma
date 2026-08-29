"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
};

/**
 * Titre "effet rideau" : chaque mot est masqué par un conteneur
 * `overflow-hidden` et glisse vers sa position finale au scroll, comme si
 * un rideau se levait progressivement sur le texte.
 */
export function RevealText({
  text,
  as = "h2",
  className,
  delay = 0,
}: RevealTextProps) {
  const reducedMotion = useReducedMotion();
  const Tag = as;
  const words = text.split(" ");

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    // Chaque mot est un bloc atomique : un espace en fin de contenu serait
    // rogné par les règles de collapse du texte au sein d'un inline-block,
    // donc l'espacement entre mots passe par `gap` plutôt que par un
    // caractère espace dans le texte.
    <Tag
      className={`${className ?? ""} flex flex-wrap items-baseline gap-x-[0.28em]`}
      aria-label={text}
    >
      {words.map((word, index) => (
        // Le conteneur observé (non transformé) doit être distinct du mot
        // animé : un IntersectionObserver ne peut pas détecter un élément
        // déjà translaté hors de son propre masque `overflow-hidden`, donc
        // whileInView porte sur le conteneur stable et l'enfant hérite de
        // son état via les variants.
        <motion.span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.1em]"
          aria-hidden="true"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: {
                  duration: 0.6,
                  delay: delay + index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}

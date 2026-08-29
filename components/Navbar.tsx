"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { CountdownTimer } from "./CountdownTimer";

const MID = Math.ceil(nav.length / 2);
const navLeft = nav.slice(0, MID);
const navRight = nav.slice(MID);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-450 ${
        scrolled ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Détail tricolore, discret et permanent en tête de chaque section */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-france-blue via-paper to-accent opacity-70"
      />

      <nav
        aria-label="Navigation principale"
        className="section-shell relative flex h-24 items-center justify-between md:h-28"
      >
        <ul className="hidden items-center gap-7 lg:flex">
          {navLeft.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm uppercase tracking-wide text-paper/80 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo — bouton d'accueil, présent et centré sur toutes les sections */}
        <a
          href="#top"
          aria-label={site.logo.alt}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
        >
          <Image
            src={site.logo.src}
            alt=""
            width={480}
            height={687}
            priority
            className="h-11 w-auto md:h-14"
          />
          <CountdownTimer />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navRight.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm uppercase tracking-wide text-paper/80 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-6 bg-paper transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navigation mobile"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink lg:hidden"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-paper transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

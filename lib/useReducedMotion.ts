"use client";

import { useEffect, useState } from "react";

/**
 * Reflète en direct la préférence système "prefers-reduced-motion".
 * Toutes les animations du site doivent se désactiver ou se simplifier
 * lorsque ce hook renvoie `true`.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReduced(event.matches);
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

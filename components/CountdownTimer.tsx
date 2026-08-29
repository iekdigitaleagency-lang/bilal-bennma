"use client";

import { useEffect, useState } from "react";
import { countdown } from "@/data/content";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
};

function getTimeLeft(targetTime: number): TimeLeft | null {
  const diff = targetTime - Date.now();
  if (diff <= 0) return null;

  const totalMinutes = Math.floor(diff / 60000);
  return {
    days: Math.floor(totalMinutes / 1440),
    hours: Math.floor((totalMinutes % 1440) / 60),
    minutes: totalMinutes % 60,
  };
}

/**
 * Compte à rebours jusqu'aux JO de Los Angeles 2028, affiché sous le
 * logo dans la navigation. Les trois unités reprennent, dans l'ordre,
 * les couleurs du drapeau français (bleu — blanc — rouge), un clin
 * d'œil discret à l'identité Team France.
 *
 * Rafraîchi toutes les 30s (suffisant pour une échéance à ~2 ans) afin
 * de rester un simple affichage de données, pas une animation qui
 * ignorerait la préférence prefers-reduced-motion.
 */
export function CountdownTimer() {
  const targetTime = new Date(countdown.targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetTime));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetTime));
    }, 30000);
    return () => clearInterval(interval);
  }, [targetTime]);

  // Rien côté serveur / avant montage : la valeur dépend de l'heure du
  // visiteur et ne doit pas provoquer de décalage d'hydratation.
  if (timeLeft === undefined) {
    return <p aria-hidden="true" className="h-[13px]" />;
  }

  if (timeLeft === null) {
    return (
      <p className="text-[10px] uppercase tracking-wide text-accent">
        {countdown.label}
      </p>
    );
  }

  return (
    <p
      className="flex items-baseline gap-2 whitespace-nowrap font-sans text-[11px] tabular-nums text-paper/70"
      aria-label={`${countdown.label} dans ${timeLeft.days} jours, ${timeLeft.hours} heures et ${timeLeft.minutes} minutes`}
    >
      <span aria-hidden="true">
        <span className="font-semibold text-france-blue">{timeLeft.days}</span>
        <span className="text-paper/40">j</span>
      </span>
      <span aria-hidden="true">
        <span className="font-semibold text-paper">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-paper/40">h</span>
      </span>
      <span aria-hidden="true">
        <span className="font-semibold text-accent">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-paper/40">m</span>
      </span>
    </p>
  );
}

"use client";

import { useSyncExternalStore } from "react";
import { WEDDING_DATE } from "@/lib/site-data";

type TimeValue = { days: string; hours: string; minutes: string; seconds: string };

const PLACEHOLDER: TimeValue = {
  days: "--",
  hours: "--",
  minutes: "--",
  seconds: "--",
};

const pad = (n: number) => String(n).padStart(2, "0");

function compute(): TimeValue {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }
  return {
    days: pad(Math.floor(diff / 86_400_000)),
    hours: pad(Math.floor(diff / 3_600_000) % 24),
    minutes: pad(Math.floor(diff / 60_000) % 60),
    seconds: pad(Math.floor(diff / 1000) % 60),
  };
}

let cached: TimeValue = PLACEHOLDER;
let subscribed = false;
const listeners = new Set<() => void>();

function startTicking() {
  if (subscribed) return;
  subscribed = true;
  cached = compute();
  window.setInterval(() => {
    cached = compute();
    listeners.forEach((l) => l());
  }, 1000);
}

function subscribe(onChange: () => void) {
  startTicking();
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getSnapshot(): TimeValue {
  if (!subscribed) startTicking();
  return cached;
}

function getServerSnapshot(): TimeValue {
  return PLACEHOLDER;
}

const units: { key: keyof TimeValue; label: string }[] = [
  { key: "days", label: "Hari" },
  { key: "hours", label: "Jam" },
  { key: "minutes", label: "Menit" },
  { key: "seconds", label: "Detik" },
];

export default function Countdown() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.key}
            className="rounded-2xl border border-gold/30 bg-card px-2 py-4 text-center shadow-sm sm:py-6"
          >
            <p className="font-heading text-2xl font-medium text-foreground sm:text-4xl">
              {time[unit.key]}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
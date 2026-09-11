import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Petal = {
  left: string;
  delay: string;
  duration: string;
  sway: string;
  size: string;
  opacity: string;
};

const PETALS: Petal[] = [
  { left: "4%", delay: "0s", duration: "10s", sway: "-30px", size: "size-4", opacity: "opacity-60" },
  { left: "16%", delay: "2.5s", duration: "13s", sway: "45px", size: "size-3", opacity: "opacity-80" },
  { left: "30%", delay: "5s", duration: "11s", sway: "-50px", size: "size-5", opacity: "opacity-50" },
  { left: "46%", delay: "1.2s", duration: "14s", sway: "35px", size: "size-3.5", opacity: "opacity-70" },
  { left: "62%", delay: "6.5s", duration: "9.5s", sway: "-35px", size: "size-4", opacity: "opacity-60" },
  { left: "76%", delay: "3s", duration: "12s", sway: "40px", size: "size-3", opacity: "opacity-80" },
  { left: "88%", delay: "7.5s", duration: "12.5s", sway: "-45px", size: "size-4.5", opacity: "opacity-55" },
  { left: "95%", delay: "4.5s", duration: "10.5s", sway: "30px", size: "size-3.5", opacity: "opacity-65" },
];

function PetalSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      aria-hidden
    >
      <path
        d="M12 3C16.5 8 16.5 16 12 21C7.5 16 7.5 8 12 3Z"
        fill="currentColor"
        stroke="none"
        opacity="0.25"
      />
      <path d="M12 3C16.5 8 16.5 16 12 21C7.5 16 7.5 8 12 3Z" fill="none" />
    </svg>
  );
}

export default function PetalRain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          style={
            {
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              "--sway": p.sway,
            } as CSSProperties
          }
          className={cn(
            "animate-petal absolute top-0 opacity-0 will-change-transform motion-reduce:hidden",
            p.size
          )}
        >
          <PetalSvg className={cn("size-full text-gold", p.opacity)} />
        </span>
      ))}
    </div>
  );
}
"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useInvitation } from "@/components/invitation/InvitationProvider";
import LottieFlower from "@/components/invitation/LottieFlower";
import { FlowerDivider } from "@/components/invitation/Ornaments";
import PetalRain from "@/components/invitation/PetalRain";
import { COUPLE, COVER_IMAGES, EVENT_DETAILS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const STAGGER = [
  { delay: 300 }, // eyebrow
  { delay: 700 }, // names
  { delay: 1300 }, // divider
  { delay: 1600 }, // date
  { delay: 1800 }, // location
  { delay: 2200 }, // guest input
  { delay: 2600 }, // button
];

export default function Cover() {
  const { opened, setGuestName, openInvitation } = useInvitation();
  const [name, setName] = useState("");
  const [leaving, setLeaving] = useState(false);

  const handleOpen = useCallback(() => {
    setGuestName(name.trim() || "");
    setLeaving(true);
    window.setTimeout(() => openInvitation(), 900);
  }, [name, setGuestName, openInvitation]);

  return (
    <div
      aria-hidden={opened}
      className={cn(
        "fixed inset-0 z-[100] transition-all duration-700 ease-in-out",
        leaving ? "opacity-0" : "opacity-100",
        opened && "pointer-events-none"
      )}
    >
      <Image
        src={COVER_IMAGES.background}
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-kenburns motion-reduce:animate-none object-cover"
      />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/70" />

      <div
        className="animate-ring-pulse pointer-events-none absolute left-1/2 top-1/2 z-10 h-80 w-80 rounded-full border border-gold/40 motion-reduce:animate-none sm:h-105 sm:w-105"
        aria-hidden
      />
      <div
        className="animate-ring-pulse pointer-events-none absolute left-1/2 top-1/2 z-10 h-72 w-72 rounded-full border border-gold/20 motion-reduce:animate-none sm:h-92 sm:w-92"
        style={{ animationDelay: "0.7s" }}
        aria-hidden
      />

      <PetalRain />

      <div className="animate-frame-in pointer-events-none absolute inset-5 rounded-3xl border border-gold/40 z-20 motion-reduce:animate-none sm:inset-8" />
      <div className="animate-frame-in pointer-events-none absolute inset-7 rounded-3xl border border-background/25 z-20 motion-reduce:animate-none sm:inset-10" />

      <div className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center">
        <LottieFlower className="w-48 opacity-85 sm:w-96" />
      </div>

      <div className="relative h-full overflow-y-auto">
        <div
          className={cn(
            "flex min-h-full flex-col items-center justify-center px-6 py-10 text-center text-background transition-all duration-700 sm:px-16 sm:py-16",
            leaving && "scale-95 translate-y-4 opacity-0"
          )}
        >
          <span
            style={{ animationDelay: `${STAGGER[0].delay}ms` }}
            className="animate-letter-space-in text-xs font-medium uppercase text-background/70 sm:text-sm motion-reduce:animate-none"
          >
            The Wedding Of
          </span>
          <h1
            style={{ animationDelay: `${STAGGER[1].delay}ms` }}
            className="animate-name-in animate-shimmer mt-4 bg-gradient-to-r from-background via-[#B5C3CB] to-background bg-clip-text font-heading text-3xl font-medium leading-tight text-transparent motion-reduce:animate-none sm:mt-5 sm:text-6xl"
          >
            {COUPLE.groom.name} <span className="text-gold">&amp;</span>{" "}
            {COUPLE.bride.name}
          </h1>
          <div
            style={{ animationDelay: `${STAGGER[2].delay}ms` }}
            className="animate-cover-fade-up mt-4 text-gold motion-reduce:animate-none sm:mt-6"
          >
            <FlowerDivider />
          </div>
          <p
            style={{ animationDelay: `${STAGGER[3].delay}ms` }}
            className="animate-cover-fade-up mt-4 text-sm uppercase tracking-[0.3em] text-background/80 sm:mt-5 sm:text-base motion-reduce:animate-none"
          >
            {EVENT_DETAILS.dateLabel}
          </p>
          <p
            style={{ animationDelay: `${STAGGER[4].delay}ms` }}
            className="animate-cover-fade-up mt-1 text-sm tracking-[0.2em] text-background/70 motion-reduce:animate-none"
          >
            {EVENT_DETAILS.location} · {EVENT_DETAILS.city}
          </p>

          <div
            style={{ animationDelay: `${STAGGER[5].delay}ms` }}
            className="animate-cover-fade-up mt-6 w-full max-w-sm motion-reduce:animate-none sm:mt-10"
          >
            <label
              htmlFor="guest-name"
              className="block text-xs uppercase tracking-[0.3em] text-background/70"
            >
              Kepada Yth. Bapak/Ibu/Saudara/i
            </label>
            <input
              id="guest-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="mt-3 w-full rounded-full border border-background/40 bg-background/10 px-5 py-3 text-center text-sm text-background placeholder:text-background/50 backdrop-blur-sm focus:border-gold focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleOpen}
            style={{ animationDelay: `${STAGGER[6].delay}ms` }}
            className="animate-cover-fade-up mt-4 rounded-full bg-primary px-10 py-3 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:animate-none sm:mt-6"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}
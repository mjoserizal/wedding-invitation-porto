"use client";

import { Music2, VolumeX } from "lucide-react";
import { useInvitation } from "@/components/invitation/InvitationProvider";
import { MUSIC_URL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function MusicToggle() {
  const { opened, musicPlaying, toggleMusic } = useInvitation();
  if (!MUSIC_URL || !opened) return null;

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-pressed={musicPlaying}
      aria-label={musicPlaying ? "Matikan musik" : "Nyalakan musik"}
      className={cn(
        "fixed bottom-5 left-5 z-[90] flex items-center gap-2 rounded-full border border-gold/60 bg-background/90 py-3 pl-4 pr-5 text-gold shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-gold",
        !musicPlaying && "opacity-80"
      )}
    >
      <span
        className={cn("flex size-4 items-center justify-center", musicPlaying && "animate-spin [animation-duration:4s]")}
      >
        {musicPlaying ? <Music2 className="size-4" /> : <VolumeX className="size-4" />}
      </span>
      <span className="text-[11px] font-medium uppercase tracking-widest">
        {musicPlaying ? "Musik: Nyala" : "Musik: Mati"}
      </span>
    </button>
  );
}
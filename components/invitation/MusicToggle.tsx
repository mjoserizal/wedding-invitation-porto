"use client";

import { Music, Music2 } from "lucide-react";
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
      aria-label={musicPlaying ? "Matikan musik" : "Nyalakan musik"}
      className={cn(
        "fixed bottom-5 left-5 z-[90] flex size-11 items-center justify-center rounded-full border border-gold/60 bg-background/90 text-gold shadow-lg backdrop-blur-sm transition-transform hover:scale-105",
        musicPlaying && "animate-spin [animation-duration:4s]"
      )}
    >
      {musicPlaying ? <Music2 className="size-5" /> : <Music className="size-5" />}
    </button>
  );
}
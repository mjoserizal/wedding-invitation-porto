"use client";

import { Pause, Play } from "lucide-react";
import { useInvitation } from "@/components/invitation/InvitationProvider";
import { cn } from "@/lib/utils";

export default function MusicToggle() {
  const { opened, musicPlaying, toggleMusic } = useInvitation();
  if (!opened) return null;

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-pressed={musicPlaying}
      aria-label={musicPlaying ? "Hentikan musik" : "Putar musik"}
      className={cn(
        "fixed bottom-5 left-5 z-[120] flex items-center gap-2 rounded-full border border-gold/60 bg-background/95 py-3 pl-4 pr-5 text-gold shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-gold",
        musicPlaying && "border-gold",
        !musicPlaying && "opacity-80"
      )}
    >
      <span className="flex size-4 items-center justify-center">
        {musicPlaying ? <Pause className="size-3.5" /> : <Play className="size-4" />}
      </span>
      <span className="text-[11px] font-medium uppercase tracking-widest">
        {musicPlaying ? "Musik: Nyala" : "Musik: Mati"}
      </span>
    </button>
  );
}
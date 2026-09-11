"use client";

import { PauseCircle, PlayCircle } from "lucide-react";
import { useInvitation } from "@/components/invitation/InvitationProvider";
import { cn } from "@/lib/utils";

const SPOTIFY_EMBED =
  "https://open.spotify.com/embed/playlist/7Kdg3bpDS3S7f3J9PsCL8r?utm_source=generator&theme=0&autoplay=1";

export default function MusicToggle() {
  const { opened, musicPlaying, toggleMusic } = useInvitation();
  if (!opened) return null;

  return (
    <div className="fixed bottom-5 left-5 z-[90] flex flex-col items-start gap-3">
      {musicPlaying && (
        <div className="w-56 overflow-hidden rounded-2xl border border-gold/25 bg-foreground shadow-xl sm:w-64">
          <iframe
            src={SPOTIFY_EMBED}
            title="Spotify playlist"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="pointer-events-auto"
          />
        </div>
      )}

      <button
        type="button"
        onClick={toggleMusic}
        aria-pressed={musicPlaying}
        aria-label={musicPlaying ? "Hentikan musik" : "Putar musik"}
        className={cn(
          "flex items-center gap-2 rounded-full border border-gold/60 bg-background/90 py-3 pl-4 pr-5 text-gold shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-gold",
          !musicPlaying && "opacity-80"
        )}
      >
        <span className="flex size-4 items-center justify-center">
          {musicPlaying ? (
            <PauseCircle className="size-4" />
          ) : (
            <PlayCircle className="size-4" />
          )}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-widest">
          {musicPlaying ? "Musik: Nyala" : "Musik: Mati"}
        </span>
      </button>
    </div>
  );
}
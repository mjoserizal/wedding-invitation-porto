import { MapPin } from "lucide-react";
import Reveal from "@/components/invitation/Reveal";
import { EVENT_AKAD, MAPS_EMBED_URL } from "@/lib/site-data";

export default function LocationMap() {
  return (
    <Reveal className="mt-16">
      <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-card shadow-md">
        <div className="flex items-center justify-between gap-4 px-6 py-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em]">
            Lokasi Acara
          </p>
          <a
            href={EVENT_AKAD.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            <MapPin className="size-4" />
            Buka di Google Maps
          </a>
        </div>
        <iframe
          title="Lokasi acara pernikahan"
          src={MAPS_EMBED_URL}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full border-0 sm:h-96"
        />
      </div>
    </Reveal>
  );
}
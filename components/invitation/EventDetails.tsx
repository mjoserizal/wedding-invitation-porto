import { CalendarHeart, Clock, MapPin } from "lucide-react";
import Countdown from "@/components/invitation/Countdown";
import LocationMap from "@/components/invitation/LocationMap";
import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import { EVENT_AKAD, EVENT_RESEPSI } from "@/lib/site-data";

function EventCard({
  event,
}: {
  event: typeof EVENT_AKAD;
}) {
  return (
    <div className="rounded-3xl border border-gold/25 bg-card p-8 text-center shadow-md sm:p-10">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
        <CalendarHeart className="size-6" />
      </div>
      <h3 className="mt-5 font-heading text-2xl font-medium sm:text-3xl">
        {event.title}
      </h3>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
        {event.date}
      </p>
      <div className="mx-auto my-5 h-px w-16 bg-gold/50" />
      <ul className="space-y-3 text-sm text-muted-foreground">
        <li className="flex items-start justify-center gap-2">
          <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
          <span>{event.time}</span>
        </li>
        <li className="flex items-start justify-center gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
          <span>
            {event.location}
            <br />
            {event.address}, {event.city}
          </span>
        </li>
      </ul>
      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full border border-primary px-8 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Lihat Lokasi
      </a>
    </div>
  );
}

export default function EventDetails() {
  return (
    <section id="acara" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Wedding Event"
          title="Rangkaian Acara"
          description="Kami menantikan kehadiran dan doa restu Bapak/Ibu/Saudara/i untuk menjadi saksi kebahagiaan kami."
        />

        <Reveal className="mt-14" delay={100}>
          <Countdown />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal direction="left">
            <EventCard event={EVENT_AKAD} />
          </Reveal>
          <Reveal direction="right" delay={150}>
            <EventCard event={EVENT_RESEPSI} />
          </Reveal>
        </div>

        <LocationMap />
      </div>
    </section>
  );
}
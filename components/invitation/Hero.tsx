"use client";

import { ChevronDown } from "lucide-react";
import { useInvitation } from "@/components/invitation/InvitationProvider";
import LottieFlower from "@/components/invitation/LottieFlower";
import { FlowerDivider } from "@/components/invitation/Ornaments";
import { COUPLE, EVENT_DETAILS, FLOWER_JSON_PATH } from "@/lib/site-data";

export default function Hero() {
  const { opened, guestName } = useInvitation();

  return (
    <section
      id="beranda"
      className={`relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center transition-opacity duration-1000 ${
        opened ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl animate-float [animation-delay:2s]" />

      <LottieFlower
        path={FLOWER_JSON_PATH}
        swayStart={160}
        swayEnd={270}
        className="absolute -bottom-2 left-0 z-0 w-20 -rotate-[35deg] opacity-90 sm:w-28 lg:left-0 lg:w-52"
      />
      <LottieFlower
        path={FLOWER_JSON_PATH}
        swayStart={160}
        swayEnd={270}
        className="absolute -bottom-2 right-0 z-0 w-20 rotate-[35deg] opacity-90 sm:w-28 lg:right-0 lg:w-52"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <p className="text-xs font-medium uppercase tracking-[0.5em] text-muted-foreground">
          Undangan Pernikahan
        </p>

        <div className="mt-8 min-h-8 text-base text-muted-foreground">
          {guestName ? (
            <>
              Kepada Yth. Bapak/Ibu/Saudara/i <span className="text-primary">{guestName}</span>
            </>
          ) : (
            "Kepada Yth. Bapak/Ibu/Saudara/i"
          )}
        </div>

        <h1 className="mt-6 font-heading text-3xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          {COUPLE.bride.name}
          <span className="mx-4 font-light text-gold">&amp;</span>
          {COUPLE.groom.name}
        </h1>

        <FlowerDivider className="mt-8 text-gold" />

        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-muted-foreground">
          {EVENT_DETAILS.dateLabel}
        </p>

        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
          menyelenggarakan acara pernikahan kami. Merupakan suatu kehormatan
          dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
          untuk memberikan doa restu.
        </p>

        <a
          href="#mempelai"
          className="mt-12 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Gulir ke section berikutnya"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="size-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
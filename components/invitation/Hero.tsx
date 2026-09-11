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
        className="absolute -bottom-6 left-0 z-0 w-16 -rotate-[35deg] opacity-90 sm:w-24 md:w-40 lg:left-0 lg:w-52"
      />
      <LottieFlower
        path={FLOWER_JSON_PATH}
        swayStart={160}
        swayEnd={270}
        className="absolute -bottom-6 right-0 z-0 w-16 rotate-[35deg] opacity-90 sm:w-24 md:w-40 lg:right-0 lg:w-52"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-muted-foreground sm:text-xs sm:tracking-[0.5em]">
          Undangan Pernikahan
        </p>

        <div className="mt-6 min-h-6 text-sm text-muted-foreground sm:mt-8 sm:text-base">
          {guestName ? (
            <>
              Kepada Yth. Bapak/Ibu/Saudara/i{" "}
              <span className="text-primary">{guestName}</span>
            </>
          ) : (
            "Kepada Yth. Bapak/Ibu/Saudara/i"
          )}
        </div>

        <h1 className="mt-5 font-heading text-2xl font-medium leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
          {COUPLE.bride.name}
          <span className="mx-3 font-light text-gold sm:mx-4">&amp;</span>
          {COUPLE.groom.name}
        </h1>

        <FlowerDivider className="mt-6 text-gold sm:mt-8" />

        <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:mt-6 sm:text-sm sm:tracking-[0.3em]">
          {EVENT_DETAILS.dateLabel}
        </p>

        <p className="mt-2 max-w-[28rem] px-2 text-center text-sm leading-relaxed text-muted-foreground">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
          menyelenggarakan acara pernikahan kami. Merupakan suatu kehormatan
          dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
          untuk memberikan doa restu.
        </p>

        <a
          href="#mempelai"
          className="mt-10 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary sm:mt-12"
          aria-label="Gulir ke section berikutnya"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] sm:text-[10px]">
            Scroll
          </span>
          <ChevronDown className="size-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
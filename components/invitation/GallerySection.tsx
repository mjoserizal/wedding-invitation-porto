"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import { WEDDING_GALLERY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4000;

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setIndex(
      (cur) => (cur + dir + WEDDING_GALLERY.length) % WEDDING_GALLERY.length
    );
  }, []);

  const close = useCallback(() => setLightbox(null), []);
  const lbNext = useCallback(
    () =>
      setLightbox((cur) =>
        cur === null ? null : (cur + 1) % WEDDING_GALLERY.length
      ),
    []
  );
  const lbPrev = useCallback(
    () =>
      setLightbox((cur) =>
        cur === null
          ? null
          : (cur - 1 + WEDDING_GALLERY.length) % WEDDING_GALLERY.length
      ),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") lbNext();
      if (e.key === "ArrowLeft") lbPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, lbNext, lbPrev]);

  return (
    <section
      id="galeri"
      className="border-y border-border/60 bg-card/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Momen Kami"
          description="Sekelumit kebahagiaan yang ingin kami bagi dengan kalian semua."
        />

        <Reveal>
          <div
            className="group relative mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Galeri foto"
              className="overflow-hidden rounded-3xl shadow-xl"
              onTouchStart={(e) => {
                touchX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
                touchX.current = null;
                if (dx > 40) go(-1);
                else if (dx < -40) go(1);
              }}
            >
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {WEDDING_GALLERY.map((src, i) => (
                  <div
                    key={src}
                    aria-hidden={index !== i}
                    className="relative h-[55vh] w-full shrink-0 sm:h-[65vh]"
                  >
                    <Image
                      src={src}
                      alt={`Galeri pernikahan ${i + 1}`}
                      fill
                      sizes="100vw"
                      priority={i === 0}
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-background/80 px-4 py-1 text-xs font-medium uppercase tracking-widest text-foreground backdrop-blur-sm">
                      {i + 1} / {WEDDING_GALLERY.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      aria-label={`Perbesar foto galeri ${i + 1}`}
                      className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground opacity-80 transition-all hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                    >
                      <Expand className="size-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-lg transition-all hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-5 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto berikutnya"
              className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-lg transition-all hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-5 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ChevronRight className="size-6" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-2">
              {WEDDING_GALLERY.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ke foto ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    i === index
                      ? "w-7 bg-primary"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {lightbox !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Tampilan galeri"
            className="fixed inset-0 z-[120] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Tutup"
              className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/25"
            >
              <X className="size-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                lbPrev();
              }}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/25 sm:left-6"
            >
              <ChevronLeft className="size-7" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                lbNext();
              }}
              aria-label="Foto berikutnya"
              className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/25 sm:right-6"
            >
              <ChevronRight className="size-7" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="animate-zoom-in max-h-[85vh] w-full max-w-4xl"
            >
              <Image
                key={lightbox}
                src={WEDDING_GALLERY[lightbox]}
                alt={`Galeri pernikahan ${lightbox + 1}`}
                width={1600}
                height={1200}
                sizes="100vw"
                className="mx-auto h-auto max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <p className="mt-4 text-center text-sm uppercase tracking-[0.3em] text-background/70">
                {lightbox + 1} / {WEDDING_GALLERY.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
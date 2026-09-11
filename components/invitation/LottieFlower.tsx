"use client";

import type { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";
import { LOTTIE_FLOWER_PATH } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const SWAY_START = 78;
const SWAY_END = 270;

type Mode = "sway" | "loop" | "once";

type Props = {
  className?: string;
  path?: string;
  swayStart?: number;
  swayEnd?: number;
  mode?: Mode;
};

export default function LottieFlower({
  className,
  path = LOTTIE_FLOWER_PATH,
  swayStart = SWAY_START,
  swayEnd = SWAY_END,
  mode = "sway",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: AnimationItem | undefined;
    let handler: (() => void) | undefined;
    let forward = true;
    let cancelled = false;

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled) return;
      const container = containerRef.current;
      if (!container) return;

      if (mode === "loop") {
        anim = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path,
        });
        return;
      }

      if (mode === "once") {
        anim = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path,
        });
        return;
      }

      anim = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path,
      });

      handler = () => {
        if (!anim) return;
        forward = !forward;
        anim.playSegments(
          forward ? [swayStart, swayEnd] : [swayEnd, swayStart],
          true
        );
      };
      anim.addEventListener("complete", handler);
      anim.playSegments([swayStart, swayEnd], true);
    });

    return () => {
      cancelled = true;
      if (anim && handler) anim.removeEventListener("complete", handler);
      anim?.destroy();
    };
  }, [path, swayStart, swayEnd, mode]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none", className)}
    />
  );
}
import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import LottieFlower from "@/components/invitation/LottieFlower";
import { STORY, UANDI_LOTTIE_PATH } from "@/lib/site-data";

export default function StorySection() {
  return (
    <section
      id="cerita"
      className="relative overflow-hidden border-y border-border/60 bg-card/50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <LottieFlower
          path={UANDI_LOTTIE_PATH}
          mode="once"
          className="h-full w-full opacity-30 sm:opacity-40"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Story" title="Perjalanan Cinta Kami" />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold/40 via-gold to-gold/40 md:left-1/2" />
          <div className="space-y-14">
            {STORY.map((item, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row ${
                    reversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 top-1 -translate-x-1/2 rounded-full border border-gold bg-background p-1 md:left-1/2">
                    <span className="block size-3 animate-pulse rounded-full bg-gold" />
                  </div>
                  <Reveal
                    direction={reversed ? "right" : "left"}
                    delay={i * 100}
                    className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                      reversed ? "md:pl-16" : "md:pr-16 md:text-right"
                    }`}
                  >
                    <p className="font-heading text-2xl text-gold">{item.year}</p>
                    <h3 className="mt-1 font-heading text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
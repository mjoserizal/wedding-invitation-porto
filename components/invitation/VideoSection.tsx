import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import { PREWED_YOUTUBE_URL } from "@/lib/site-data";

export default function VideoSection() {
  return (
    <section id="video" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prewedding"
          title="Video Prewedding"
          description="Sekilas perjalanan dan kebahagiaan kami, tertuang dalam satu video."
        />

        <Reveal className="mt-14">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-gold/25 bg-foreground/5 shadow-lg">
            <iframe
              src={PREWED_YOUTUBE_URL}
              title="Video prewedding Freakyjoo & Unknown"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
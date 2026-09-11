import { FlowerDivider } from "@/components/invitation/Ornaments";
import { COUPLE } from "@/lib/site-data";

export default function ClosingFooter() {
  return (
    <section className="flex min-h-[100svh] items-center bg-foreground text-background">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-background/60">
          Merupakan suatu kehormatan
        </p>
        <h2 className="mt-5 font-heading text-2xl font-medium leading-relaxed sm:text-3xl">
          dan kebahagiaan bagi kami apabila
          <br className="hidden sm:block" /> Bapak/Ibu/Saudara/i berkenan hadir
          dan memberikan doa restu
        </h2>

        <FlowerDivider className="mt-10 text-gold" />

        <p className="mt-6 text-sm text-background/60">
          Atas kehadiran serta doa restunya, kami ucapkan terima kasih.
        </p>

        <p className="mt-10 font-heading text-4xl font-medium text-gold sm:text-5xl">
          {COUPLE.bride.name} &amp; {COUPLE.groom.name}
        </p>

        <div className="mt-16 border-t border-background/15 pt-6 text-xs text-background/50">
          ©2027 · Undangan Pernikahan {COUPLE.bride.name} &amp;{" "}
          {COUPLE.groom.name}
        </div>
      </div>
    </section>
  );
}

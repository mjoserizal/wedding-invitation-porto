"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import { cn } from "@/lib/utils";

export default function RsvpSection() {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState<"hadir" | "tidak">("hadir");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="RSVP"
          title="Konfirmasi Kehadiran"
          description="Mohon konfirmasi kehadiran Anda melalui formulir di bawah ini sebelum 1 Juni 2027."
        />

        {submitted ? (
          <Reveal className="mt-14">
            <div className="flex flex-col items-center rounded-3xl border border-gold/25 bg-card p-10 text-center shadow-md">
              <CheckCircle2 className="size-12 text-primary" />
              <h3 className="mt-4 font-heading text-2xl font-medium">
                Terima Kasih!
              </h3>
              <p className="mt-3 text-muted-foreground">
                Konfirmasi kehadiran Anda telah kami terima. Kami tidak sabar
                untuk merayakan hari bahagia bersama Anda.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal className="mt-14" delay={100}>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
              type="text"
              required
              placeholder="Nama lengkap"
              className="w-full rounded-xl border border-border bg-card px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="tel"
                placeholder="No. HP / WhatsApp"
                className="w-full rounded-xl border border-border bg-card px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="number"
                min={1}
                max={20}
                placeholder="Jumlah tamu"
                className="w-full rounded-xl border border-border bg-card px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setAttendance("hadir")}
                aria-pressed={attendance === "hadir"}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                  attendance === "hadir"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50"
                )}
              >
                Hadir
              </button>
              <button
                type="button"
                onClick={() => setAttendance("tidak")}
                aria-pressed={attendance === "tidak"}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                  attendance === "tidak"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50"
                )}
              >
                Tidak Hadir
              </button>
            </div>
            <textarea
              rows={4}
              placeholder="Ucapan & doa (opsional)"
              className="w-full resize-none rounded-xl border border-border bg-card px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-primary py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Kirim Konfirmasi
            </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
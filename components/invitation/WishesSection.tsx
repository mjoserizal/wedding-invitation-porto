"use client";

import { useEffect, useState, type FormEvent } from "react";
import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import { DEFAULT_WISHES } from "@/lib/site-data";

type Wish = { name: string; message: string };

const STORAGE_KEY = "wedding-wishes";

export default function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>(DEFAULT_WISHES as unknown as Wish[]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw) as Wish[];
          if (Array.isArray(saved) && saved.length) {
            setWishes((prev) => [...saved, ...prev]);
          }
        }
      } catch {
        /* ignore */
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const wish: Wish = { name: name.trim(), message: message.trim() };
    const next = [wish, ...wishes];
    setWishes(next);
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([wish, ...wishes.slice(0, -3)])
      );
    } catch {
      /* ignore */
    }
    setName("");
    setMessage("");
  };

  return (
    <section
      id="ucapan"
      className="border-t border-border/60 bg-card/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Wishes"
          title="Ucapan & Doa"
          description="Sampaikan doa dan ucapan terbaik untuk kedua mempelai."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal className="md:col-span-2" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gold/25 bg-background p-6 shadow-md"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Tulis ucapan & doa..."
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-primary py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Kirim Ucapan
              </button>
            </form>
          </Reveal>

          {wishes.map((wish) => (
            <Reveal
              key={`${wish.name}-${wish.message.slice(0, 16)}`}
              delay={150}
            >
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <p className="font-heading text-base font-medium text-primary">
                  {wish.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  “{wish.message}”
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
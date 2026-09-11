"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { ChevronLeft, ChevronRight, Loader2, Send } from "lucide-react";
import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import { cn } from "@/lib/utils";

type Wish = { id: string; name: string; message: string };

const PER_PAGE = 4;

export default function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchPage = useCallback(async (pageNum: number) => {
    const res = await fetch(`/api/wishes?page=${pageNum}&limit=${PER_PAGE}`, {
      cache: "no-store",
    });
    return (await res.json()) as {
      wishes: Wish[];
      totalPages: number;
    };
  }, []);

  const loadPage = useCallback(
    async (pageNum: number) => {
      setLoading(true);
      try {
        const data = await fetchPage(pageNum);
        setWishes(data.wishes ?? []);
        setTotalPages(data.totalPages ?? 1);
        setPage(pageNum);
      } catch {
        /* keep current */
      } finally {
        setLoading(false);
      }
    },
    [fetchPage]
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchPage(1);
        if (cancelled) return;
        setWishes(data.wishes ?? []);
        setTotalPages(data.totalPages ?? 1);
        setPage(1);
      } catch {
        /* keep current */
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [fetchPage]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
      if (res.ok) {
        setName("");
        setMessage("");
        await loadPage(1);
      }
    } finally {
      setSending(false);
    }
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
                  maxLength={60}
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={500}
                  placeholder="Tulis ucapan & doa..."
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60"
              >
                {sending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                Kirim Ucapan
              </button>
            </form>
          </Reveal>

          {loading ? (
            Array.from({ length: PER_PAGE }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl border border-border bg-background p-5"
              >
                <div className="h-4 w-24 rounded bg-muted" />
                <div className="mt-3 h-3 w-full rounded bg-muted" />
                <div className="mt-2 h-3 w-3/4 rounded bg-muted" />
              </div>
            ))
          ) : wishes.length === 0 ? (
            <div className="rounded-2xl border border-border bg-background p-5 text-center text-sm text-muted-foreground md:col-span-2">
              Belum ada ucapan — jadilah yang pertama mengirim doa.
            </div>
          ) : (
            wishes.map((wish) => (
              <Reveal key={wish.id} delay={150}>
                <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                  <p className="font-heading text-base font-medium text-primary">
                    {wish.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    “{wish.message}”
                  </p>
                </div>
              </Reveal>
            ))
          )}
        </div>

        {!loading && totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => loadPage(page - 1)}
              disabled={page <= 1}
              aria-label="Halaman sebelumnya"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
            >
              <ChevronLeft className="size-5" />
            </button>
            <p className="text-sm text-muted-foreground">
              Halaman{" "}
              <span className="font-medium text-foreground">{page}</span> /{" "}
              {totalPages}
            </p>
            <button
              type="button"
              onClick={() => loadPage(page + 1)}
              disabled={page >= totalPages}
              aria-label="Halaman berikutnya"
              className={cn(
                "flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
              )}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
function LeafPair({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M4 12c8-8 20-8 28-4M60 12c-8-8-20-8-28-4" />
      <path d="M32 12c4-6 8-6 10-4M32 12c-4-6-8-6-10-4" />
    </svg>
  );
}

export function FlowerDivider({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold ${className ?? ""}`}
      aria-hidden
    >
      <span className="h-px w-12 bg-gold/50 sm:w-16" />
      <LeafPair className="size-6" />
      <span className="h-px w-12 bg-gold/50 sm:w-16" />
    </div>
  );
}

export function CornerFlower({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M4 36V16a12 12 0 0 1 12-12h20" />
      <path d="M10 30c5-6 8-8 12-8 4 0 6 2 6 5 0 4-5 5-12 5" />
      <path d="M18 22c-3-4-3-8 0-10" opacity=".6" />
      <circle cx="22" cy="18" r="2" fill="currentColor" stroke="none" opacity=".4" />
    </svg>
  );
}
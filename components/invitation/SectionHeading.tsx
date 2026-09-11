import Reveal from "@/components/invitation/Reveal";
import { FlowerDivider } from "@/components/invitation/Ornaments";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-heading text-3xl font-medium leading-tight sm:text-4xl">
        {title}
      </h2>
      <FlowerDivider className="mt-6" />
      {description && (
        <p className="mt-6 leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
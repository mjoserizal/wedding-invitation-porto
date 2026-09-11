import Image from "next/image";
import Reveal from "@/components/invitation/Reveal";
import SectionHeading from "@/components/invitation/SectionHeading";
import { FlowerDivider } from "@/components/invitation/Ornaments";
import { COUPLE } from "@/lib/site-data";

function PersonCard({
  person,
}: {
  person: (typeof COUPLE)["groom"];
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="absolute -inset-2 rounded-full border border-gold/40" />
        <Image
          src={person.photo}
          alt={person.name}
          width={280}
          height={280}
          className="aspect-square w-52 rounded-full object-cover shadow-lg sm:w-64"
        />
      </div>
      <p className="mt-4 font-heading text-3xl font-medium text-primary sm:text-4xl">
        {person.name}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{person.family}</p>
      <a
        href={`https://instagram.com/${person.instagram.slice(1)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-sm text-gold hover:underline"
      >
        {person.instagram}
      </a>
    </div>
  );
}

export default function CoupleSection() {
  return (
    <section id="mempelai" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pasal 1"
          title="Bismillahirrahmanirrahim"
          description="Dengan penuh rasa syukur kepada Allah SWT, kami bermaksud menyelenggarakan akad nikah dan resepsi pernikahan kami."
        />

        <FlowerDivider className="my-12 text-gold" />

        <div className="grid gap-14 md:grid-cols-2 md:gap-8">
          <Reveal direction="left">
            <PersonCard person={COUPLE.bride} />
          </Reveal>
          <Reveal direction="right" delay={150}>
            <PersonCard person={COUPLE.groom} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
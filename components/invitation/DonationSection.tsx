import SectionHeading from "@/components/invitation/SectionHeading";
import { SAWERIA_QR_URL, SAWERIA_WIDGET_URL } from "@/lib/site-data";

export default function DonationSection() {
  return (
    <section
      id="dukungan"
      className="border-t border-border/60 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Amplop Digital"
          title="Doa & Dukungan"
          description="Hadiah terbaik bagi kami adalah doa dan restu kalian. Namun jika ingin berbagi kebahagiaan dengan cara lain, dapat melalui Saweria di bawah ini."
        />

        <div className="mx-auto mt-14 flex max-w-sm flex-col items-center rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg sm:p-8">
          <div className="mt-5 flex w-full justify-center">
            <a
              href={SAWERIA_WIDGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka halaman donasi Saweria"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SAWERIA_QR_URL}
                alt="QR code donasi Saweria"
                className="h-64 w-64 transition-transform duration-500 hover:scale-105 sm:h-72 sm:w-72"
              />
            </a>
          </div>

          <p className="mt-5 text-center text-sm text-primary-foreground/85">
            Scan QR di atas untuk mengirim doa & dukungan, atau klik QR untuk
            membuka halaman Saweria.
          </p>
        </div>
      </div>
    </section>
  );
}

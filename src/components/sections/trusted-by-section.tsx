import { SectionHeading } from "@/components/shared/section-heading";
import { Marquee } from "@/components/ui/marquee";
import {
  INNER_RING,
  OUTER_RING,
  ALL_BRANDS,
  type Brand,
} from "@/data/trusted-brands";
import { ShieldCheck } from "lucide-react";

type PillSize = "sm" | "md" | "lg";

const PILL_SIZES: Record<PillSize, { wrap: string; img: number }> = {
  sm: { wrap: "h-14 w-14", img: 36 },
  md: { wrap: "h-[72px] w-[72px]", img: 48 },
  lg: { wrap: "h-20 w-20", img: 56 },
};

function LogoPill({
  brand,
  size = "md",
  counterRotateClass,
}: {
  brand: Brand;
  size?: PillSize;
  counterRotateClass?: string;
}) {
  const sz = PILL_SIZES[size];
  const inner = (
    <>
      <span
        className={`flex ${sz.wrap} items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(46,54,146,0.25)] ring-1 ring-forest/5 transition-transform duration-300 group-hover/pill:scale-110 group-hover/pill:shadow-[0_12px_28px_-8px_rgba(46,54,146,0.4)]`}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          width={sz.img}
          height={sz.img}
          loading="lazy"
          className="max-h-[70%] max-w-[70%] object-contain"
        />
      </span>
    </>
  );

  const wrapperClass = `group/pill block ${counterRotateClass ?? ""}`;

  if (brand.url) {
    return (
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${brand.name} website`}
        title={brand.name}
        className={wrapperClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={wrapperClass} title={brand.name} aria-label={brand.name}>
      {inner}
    </div>
  );
}

function OrbitRing({
  brands,
  radiusPercent,
  ringAnimationClass,
  counterRotateClass,
  pillSize,
}: {
  brands: Brand[];
  radiusPercent: number;
  ringAnimationClass: string;
  counterRotateClass: string;
  pillSize: PillSize;
}) {
  const total = brands.length;
  return (
    <div
      className={`group absolute inset-0 ${ringAnimationClass} [animation-play-state:running] hover:[animation-play-state:paused]`}
    >
      {brands.map((brand, i) => {
        const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
        const x = 50 + radiusPercent * Math.cos(angle);
        const y = 50 + radiusPercent * Math.sin(angle);
        return (
          <div
            key={brand.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <LogoPill
              brand={brand}
              size={pillSize}
              counterRotateClass={counterRotateClass}
            />
          </div>
        );
      })}
    </div>
  );
}

function DottedCircle({ sizePercent }: { sizePercent: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-dashed border-forest/15"
      style={{ width: `${sizePercent}%` }}
    />
  );
}

export function TrustedBySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-off-white via-white to-off-white py-24">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-forest/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-amber/5 blur-[120px]" />
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={`Trusted by ${ALL_BRANDS.length}+ leading companies`}
          title="Pakistan's most respected brands choose us"
          subtitle="From food giants and hospitals to packaging, sugar and dairy — protecting operations nationwide."
        />

        {/* Desktop: Orbital rings */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[820px] md:block">
          {/* Dotted rings */}
          <DottedCircle sizePercent={100} />
          <DottedCircle sizePercent={56} />

          {/* Outer ring of logos — rotates counter-clockwise (75s) */}
          <OrbitRing
            brands={OUTER_RING}
            radiusPercent={50}
            ringAnimationClass="animate-spin-slow-reverse"
            counterRotateClass="animate-spin-slow-reverse-counter"
            pillSize="md"
          />

          {/* Inner ring of logos — rotates clockwise (60s) */}
          <div className="absolute inset-[22%]">
            <OrbitRing
              brands={INNER_RING}
              radiusPercent={50}
              ringAnimationClass="animate-spin-slow"
              counterRotateClass="animate-spin-slow-counter"
              pillSize="md"
            />
          </div>

          {/* Center card */}
          <div className="absolute left-1/2 top-1/2 z-10 flex aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_20px_60px_-15px_rgba(46,54,146,0.35)] ring-1 ring-forest/10">
            <span className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-forest-light px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-forest">
              <ShieldCheck className="h-2.5 w-2.5" />
              {ALL_BRANDS.length}+ Clients
            </span>
            <p className="px-3 text-xs font-bold leading-tight text-charcoal lg:text-sm">
              Trusted pest management partner
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-amber-dark lg:text-[11px]">
              Urban Pest Solution
            </p>
          </div>
        </div>

        {/* Mobile: Marquee strips */}
        <div className="space-y-4 md:hidden">
          {/* Top strip: left-to-right */}
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:50s] [--gap:1.25rem]"
          >
            {ALL_BRANDS.slice(0, Math.ceil(ALL_BRANDS.length / 2)).map((b) => (
              <LogoPill key={b.name} brand={b} size="sm" />
            ))}
          </Marquee>
          {/* Bottom strip: right-to-left */}
          <Marquee
            pauseOnHover
            className="[--duration:60s] [--gap:1.25rem]"
          >
            {ALL_BRANDS.slice(Math.ceil(ALL_BRANDS.length / 2)).map((b) => (
              <LogoPill key={b.name} brand={b} size="sm" />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import { Bug } from "lucide-react";
import { getIcon } from "@/lib/icons";
import type { PestDetail } from "@/types";

/**
 * Lucide has no fly / mosquito / roach / ant / bee / spider / lizard / snake
 * icon, so every insect and reptile in the library collapsed to the same
 * generic Bug / Worm glyph. These hand-drawn monochrome glyphs give each pest
 * type a recognizable silhouette while keeping the white-on-gradient look.
 *
 * All glyphs use `currentColor` strokes so the parent's text color drives them,
 * exactly like the Lucide icons they sit next to.
 */

type GlyphProps = { className?: string };

const svgBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Fly({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <ellipse cx="12" cy="14" rx="2.8" ry="4.6" />
      <circle cx="12" cy="7" r="1.9" />
      <path d="M11 5.4 9.6 3.2M13 5.4l1.4-2.2" />
      <path d="M10.6 10.8C5.4 8.4 4.6 13 9 14" />
      <path d="M13.4 10.8c5.2-2.4 6 2.2 1.6 3.2" />
      <path d="M9.4 12.8 6 11.8M9.4 15 6 15M9.4 17 6.6 18.6" />
      <path d="M14.6 12.8 18 11.8M14.6 15 18 15M14.6 17 17.4 18.6" />
    </svg>
  );
}

function Mosquito({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <circle cx="7" cy="7" r="1.7" />
      <path d="M8 8 19 19" />
      <path d="M6 5.8 2.6 3M5.6 7 2.4 6.4" />
      <path d="M9 9.4C7 4.6 12.6 5.4 11.6 10" />
      <path d="M11.4 11.8c-2-4.8 3.6-4 2.6.6" />
      <path d="M10 10.4 6.4 16M13 13.4 9.6 20M16 16.4 13 21M16 16.4 20 20" />
    </svg>
  );
}

function Wasp({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <ellipse cx="12" cy="13" rx="3.2" ry="4.8" />
      <path d="M9 11.4H15M8.9 14H15.1" />
      <circle cx="12" cy="6.4" r="1.9" />
      <path d="M11 5 9.2 2.6M13 5l1.8-2.4" />
      <path d="M9.4 10C4.6 7.2 4.6 12.6 9.2 11.6" />
      <path d="M14.6 10c4.8-2.8 4.8 2.6.2 1.6" />
      <path d="M12 17.8V20" />
    </svg>
  );
}

function Bee({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <ellipse cx="12" cy="13.2" rx="3.6" ry="4.6" />
      <path d="M8.6 11.6h6.8M8.6 14.2h6.8" />
      <circle cx="12" cy="6.6" r="1.9" />
      <path d="M11 5.2 9.2 2.8M13 5.2l1.8-2.4" />
      <path d="M9.6 10.4C3.8 7.6 4.4 13.6 9.4 11.8" />
      <path d="M14.4 10.4c5.8-2.8 5.2 3.2.2 1.4" />
    </svg>
  );
}

function Roach({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <ellipse cx="12" cy="13" rx="3.6" ry="5.6" />
      <circle cx="12" cy="6.4" r="1.7" />
      <path d="M11 5.2C8 1.8 6 1.8 4 3.8M13 5.2c3-3.4 5-3.4 7-1.4" />
      <path d="M8.6 10.4 5 9.2M8.6 13 4.6 13M8.6 15.6 5.6 18" />
      <path d="M15.4 10.4 19 9.2M15.4 13 19.4 13M15.4 15.6 18.4 18" />
    </svg>
  );
}

function Ant({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <circle cx="12" cy="6" r="1.8" />
      <circle cx="12" cy="11" r="1.9" />
      <ellipse cx="12" cy="16.6" rx="2.6" ry="3" />
      <path d="M11 4.8 9.2 2.6M13 4.8l1.8-2.2" />
      <path d="M10.2 10 6.4 8M10.2 11.4 6.2 12M10.2 12.8 6.6 15.4" />
      <path d="M13.8 10 17.6 8M13.8 11.4 17.8 12M13.8 12.8 17.4 15.4" />
    </svg>
  );
}

function Bedbug({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <ellipse cx="12" cy="12.4" rx="4.6" ry="5.6" />
      <path d="M12 7.4V17.6M9 9.6h6M8.4 12.4h7.2M9 15.2h6" />
      <path d="M10.6 7 9.4 4.6M13.4 7l1.2-2.4" />
      <path d="M7.6 10.4 4.8 9.4M7.4 14 4.6 15M16.4 10.4 19.2 9.4M16.6 14 19.4 15" />
    </svg>
  );
}

function Termite({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <circle cx="6.6" cy="9" r="1.9" />
      <path d="M5.4 7.6 3 5.8M5.2 9.4 2.8 9.6" />
      <ellipse cx="14" cy="13" rx="5.2" ry="3" />
      <path d="M8.4 11 10.6 12.2" />
      <path d="M11.6 11V15M14.6 10.6V15.4M17.6 11V15" />
      <path d="M11.6 15.6 11 18.4M14.6 16 14.6 19M17.6 15.6 18.4 18.4" />
    </svg>
  );
}

function Spider({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <circle cx="12" cy="13.4" r="3.4" />
      <circle cx="12" cy="9" r="1.8" />
      <path d="M9.6 11.6C6 9.6 5 7.6 3 7.4M9.4 13.2C5.4 12.4 4.2 12.6 2.8 14.4M9.4 15C5.6 15 4.4 15.8 3.2 17.6M9.8 16.4C7 18 6 19.8 5.2 21.2" />
      <path d="M14.4 11.6C18 9.6 19 7.6 21 7.4M14.6 13.2c4-.8 5.2-.6 6.6 1.2M14.6 15c3.8 0 5 .8 6.2 2.6M14.2 16.4c2.8 1.6 3.8 3.4 4.6 4.8" />
    </svg>
  );
}

function Lizard({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <circle cx="5.6" cy="8" r="1.7" />
      <path d="M7.2 8.6C10 10 11.4 8.4 13.6 9.6 16 10.8 16.6 14 19 14.4c1.6.3 2.4 1.6 2 3.2" />
      <path d="M9.6 9.6 7.8 6.6M9.6 9.6 8.2 12.8" />
      <path d="M15 11 13.4 8M15 11l-1.2 3.2" />
    </svg>
  );
}

function Snake({ className }: GlyphProps) {
  return (
    <svg className={className} {...svgBase}>
      <path d="M4.6 18C4.6 14 8.8 14 8.8 16.8 8.8 20 13 20 13 15.6 13 11 18.4 11 19 7.6" />
      <path d="M19 7.6c.2-1.2 1.2-2 2.2-1.6" />
      <path d="M21.4 7 23 6.2M21.4 7l1.6.8" />
      <circle cx="19.6" cy="6.6" r="0.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

const glyphBySlug: Record<string, (p: GlyphProps) => React.ReactElement> = {
  "drain-fly": Fly,
  "house-fly": Fly,
  "fruit-fly": Fly,
  "phorid-fly": Fly,
  mosquitoes: Mosquito,
  "paper-wasp": Wasp,
  "honey-bees": Bee,
  "american-roach": Roach,
  "german-roach": Roach,
  "brown-banded-roach": Roach,
  ants: Ant,
  "bed-bugs": Bedbug,
  termites: Termite,
  spider: Spider,
  lizard: Lizard,
  "monitor-lizard": Lizard,
  snake: Snake,
};

/**
 * Renders the recognizable glyph for a pest. Insects and reptiles use the
 * hand-drawn glyphs above; rodents/birds/cats/dogs fall back to their already
 * distinct Lucide icon from the pest data.
 */
export function PestGlyph({
  pest,
  className,
}: {
  pest: Pick<PestDetail, "slug" | "icon">;
  className?: string;
}) {
  const Glyph = glyphBySlug[pest.slug];
  if (Glyph) return <Glyph className={className} />;
  const Icon: LucideIcon = getIcon(pest.icon, Bug);
  return <Icon className={className} />;
}
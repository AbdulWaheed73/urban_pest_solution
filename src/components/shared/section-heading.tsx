interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  badge?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  badge,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          light
            ? "bg-white/10 text-white/80"
            : "bg-forest-light text-forest"
        }`}>
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${
            light ? "text-white/60" : "text-slate-mid"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex ${centered ? "justify-center" : ""}`}>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-forest to-amber" />
      </div>
    </div>
  );
}

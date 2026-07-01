import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { trainingSessions } from "@/data/academy";
import { TrainingDetailHero } from "@/components/academy/training-detail-hero";
import { TrainingCard } from "@/components/academy/training-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import {
  ChevronLeft,
  Clock,
  MapPin,
  Users,
  Presentation,
  ListChecks,
  Target,
  CheckCircle2,
} from "lucide-react";

export async function generateStaticParams() {
  return trainingSessions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const session = trainingSessions.find((s) => s.slug === slug);
  if (!session) return { title: "Session Not Found" };
  return {
    title: `${session.title} — Urban Pest Academy | Urban Pest Solution`,
    description: session.summary,
    keywords: [
      session.title,
      session.category,
      "IPM training",
      "pest management course",
      "Urban Pest Academy",
      "pest control training Pakistan",
    ],
    alternates: { canonical: `/academy/${session.slug}` },
    openGraph: {
      title: session.title,
      description: session.summary,
      url: `/academy/${session.slug}`,
      type: "article",
      images: [{ url: session.image, alt: session.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: session.title,
      description: session.summary,
      images: [session.image],
    },
  };
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const session = trainingSessions.find((s) => s.slug === slug);
  if (!session) notFound();

  const related = trainingSessions
    .filter((s) => s.slug !== session.slug)
    .slice(0, 3);

  const meta = [
    { icon: Users, label: "Who Attends", value: session.host },
    { icon: MapPin, label: "Location", value: session.location },
    { icon: Clock, label: "Duration", value: session.duration },
    { icon: Presentation, label: "Format", value: session.format },
  ];

  return (
    <>
      <TrainingDetailHero session={session} />

      {/* Back nav */}
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/academy"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-mid hover:text-forest transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Urban Pest Academy
          </Link>
        </div>
      </div>

      {/* Overview + meta */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Overview — 2 cols */}
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-forest-light text-forest">
                About This Session
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                {session.title}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-forest to-amber" />
              <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
                {session.overview}
              </p>

              {/* What's covered */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest to-forest-dark shadow-md shadow-forest/20">
                    <ListChecks className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold text-charcoal">What This Session Covers</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {session.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-white border border-black/5 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-forest mt-0.5" />
                      <span className="text-sm text-charcoal leading-relaxed">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Meta sidebar — 1 col */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-white border border-black/5 p-7 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-forest mb-5">
                  Session Details
                </h3>
                <ul className="space-y-5">
                  {meta.map((m) => (
                    <li key={m.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-light">
                        <m.icon className="h-5 w-5 text-forest" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-mid mb-0.5">
                          {m.label}
                        </p>
                        <p className="text-sm font-medium text-charcoal">{m.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div
                className="relative overflow-hidden rounded-2xl p-7 text-white shadow-xl"
                style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2E3692 100%)" }}
              >
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-amber/20 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/20 backdrop-blur-sm border border-amber/30">
                      <Target className="h-5 w-5 text-amber" />
                    </div>
                    <h3 className="text-lg font-extrabold">What You&apos;ll Take Away</h3>
                  </div>
                  <ul className="space-y-3">
                    {session.outcomes.map((outcome, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {session.gallery && session.gallery.length > 0 && (
            <div className="mt-16">
              <h3 className="text-lg font-extrabold text-charcoal mb-6">From the Session</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[session.image, ...session.gallery].map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 bg-slate-100"
                  >
                    <img
                      src={src}
                      alt={`${session.title} — photo ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related sessions */}
      {related.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="More Training"
              title="Explore Other Sessions"
              subtitle="Continue building your team's pest-management expertise with our other activity-based trainings."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <TrainingCard key={s.slug} session={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Bring This Training to Your Team"
        subtitle="Book a session at the Urban Pest Academy or have our trainers come to your site. Get in touch to plan a programme that fits your facility."
      />
    </>
  );
}

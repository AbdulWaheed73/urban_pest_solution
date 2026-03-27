import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { getIcon } from "@/lib/icons";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #0e1240 0%, #1E293B 100%)",
    }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="Urban Pest Solution"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold leading-tight text-white">
                  Urban <span className="text-forest">Pest</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 -mt-0.5">
                  Solution
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Professional pest management services backed by science,
              technology, and years of industry experience.
            </p>
            <div className="flex gap-2">
              {siteConfig.socialLinks.map((social) => {
                const SocialIcon = getIcon(social.icon, Globe);
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    aria-label={social.platform}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-forest/50 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <SocialIcon className="h-4 w-4 text-white/60" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/25">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-white/50 hover:text-forest transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/25">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Pest Control",
                "Termite Treatment",
                "Fumigation",
                "Commercial IPM",
                "Residential IPM",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/50">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/25">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-forest" />
                </div>
                <span className="text-sm text-white/50 leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="h-4 w-4 text-forest" />
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-white/50 hover:text-forest transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-4 w-4 text-forest" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/50 hover:text-forest transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/25">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <p className="text-xs text-white/15 italic">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

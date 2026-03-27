import Link from "next/link";
import { Bug, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { getIcon } from "@/lib/icons";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest">
                <Bug className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                Urban <span className="text-forest">Pest Solution</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Professional pest management services backed by science,
              technology, and years of industry experience.
            </p>
            <div className="flex gap-3">
              {siteConfig.socialLinks.map((social) => {
                const SocialIcon = getIcon(social.icon, Globe);
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    aria-label={social.platform}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-forest transition-colors"
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-forest transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                "Pest Control",
                "Termite Treatment",
                "Fumigation",
                "Commercial IPM",
                "Residential IPM",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-forest shrink-0" />
                <span className="text-sm text-white/60">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-forest shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-white/60 hover:text-forest transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-forest shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/60 hover:text-forest transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All
            rights reserved. &mdash; {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

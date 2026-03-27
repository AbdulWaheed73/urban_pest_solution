"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Bug } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest">
            <Bug className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-charcoal">
            Urban <span className="text-forest">Pest Solution</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-forest bg-forest-light"
                  : "text-charcoal hover:text-forest hover:bg-forest-light/50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-mid hover:text-forest"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button
            render={<Link href="/contact" />}
            className="bg-forest hover:bg-forest-dark text-white"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-4 mt-8">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-base font-medium transition-colors",
                    pathname === link.href
                      ? "text-forest bg-forest-light"
                      : "text-charcoal hover:text-forest"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 px-3 text-sm text-slate-mid"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Button
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                className="mx-3 bg-forest hover:bg-forest-dark text-white"
              >
                Get a Quote
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

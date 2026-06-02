"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { CartDrawer } from "@/components/shop/cart-drawer";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-black/5"
        : "bg-white/80 backdrop-blur-md border-b border-transparent"
    )}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 group">
          <img
            src="/images/logo.png"
            alt="Urban Pest Solution"
            width={38}
            height={38}
            className="rounded-full shadow-md group-hover:shadow-lg transition-shadow"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-base font-extrabold text-charcoal whitespace-nowrap">
              Urban <span className="text-forest">Pest</span>
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-mid mt-0.5">
              Solution
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative whitespace-nowrap px-2.5 py-2 rounded-lg text-[13px] lg:text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-forest"
                  : "text-charcoal/70 hover:text-charcoal hover:bg-black/[0.03]"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-forest rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex shrink-0 items-center gap-1.5">
          <a
            href={`tel:${siteConfig.phone}`}
            aria-label={`Call ${siteConfig.phone}`}
            title={siteConfig.phone}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-mid hover:text-forest hover:bg-forest-light/60 transition-colors"
          >
            <Phone className="h-4 w-4" />
          </a>
          <CartDrawer />
          <Button
            render={<Link href="/contact" />}
            className="bg-forest hover:bg-forest-dark text-white font-semibold rounded-xl px-4 lg:px-5 shadow-md shadow-forest/20 hover:shadow-forest/30 transition-all whitespace-nowrap"
          >
            Get a Quote
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile — cart + menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <div className="flex xl:hidden items-center gap-1">
            <CartDrawer />
            <SheetTrigger className="inline-flex items-center justify-center rounded-xl p-2.5 hover:bg-black/5 transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-80 p-0">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-1 p-6 pt-12">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-all",
                      pathname === link.href
                        ? "text-forest bg-forest-light font-semibold"
                        : "text-charcoal hover:text-forest hover:bg-forest-light/50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-6 border-t border-black/5 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-sm text-slate-mid hover:text-forest transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
                <Button
                  render={<Link href="/contact" onClick={() => setOpen(false)} />}
                  className="w-full bg-forest hover:bg-forest-dark text-white font-semibold rounded-xl py-5 shadow-md"
                >
                  Get a Quote
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, MapPin } from "lucide-react";
import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site.config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav 
      className="sticky top-0 z-50 w-full bg-nav-bg shadow-sm" 
      aria-label="Main navigation"
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-nav-fg tracking-tight">
            {siteConfig.meta.siteName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-nav-fg/80 transition-colors hover:text-nav-fg rounded-lg hover:bg-nav-hover/30"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <Button 
              asChild 
              size="sm" 
              className="bg-nav-fg text-primary hover:bg-nav-fg/90 shadow-md"
            >
              <Link href="/contact">
                <MapPin className="mr-1.5 h-4 w-4" />
                Visit Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Trigger asChild>
            <button 
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-nav-fg/10 text-nav-fg transition-colors hover:bg-nav-fg/20 md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-50 bg-black/50" />
            <Drawer.Content 
              className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-auto max-h-[85vh] flex-col rounded-t-2xl bg-background"
              aria-label="Mobile navigation menu"
            >
              <div className="flex-1 overflow-y-auto p-6">
                <div className="mx-auto mb-6 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted" aria-hidden="true" />
                
                {/* Mobile logo */}
                <div className="mb-6 text-center">
                  <span className="text-xl font-bold text-primary">
                    {siteConfig.meta.siteName}
                  </span>
                </div>
                
                <nav className="flex flex-col gap-1" aria-label="Primary navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3.5 text-lg font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-6 space-y-3 border-t pt-6">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        <MapPin className="mr-2 h-5 w-5" />
                        Visit Our Shop
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                        onClick={() => setOpen(false)}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        {siteConfig.contact.phone}
                      </a>
                    </Button>
                  </div>
                </nav>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </Container>
    </nav>
  );
}

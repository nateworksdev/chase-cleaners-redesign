import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-footer-fg">
      <Container className="py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {siteConfig.meta.siteName}
            </h3>
            <p className="text-sm text-footer-muted">
              {siteConfig.meta.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-footer-muted transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-footer-muted transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-footer-muted transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-footer-muted transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-footer-muted">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.contact.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    {siteConfig.contact.address.street}
                    <br />
                    {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Hours</h3>
            {siteConfig.contact.hours && (
              <p className="mb-4 text-sm text-footer-muted">
                {siteConfig.contact.hours}
              </p>
            )}
            <p className="text-sm text-footer-muted">
              Walk-ins always welcome
            </p>
            {siteConfig.social && (
              <div className="mt-4 flex gap-3">
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-footer-muted transition-colors hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-footer-muted transition-colors hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-footer-border pt-6 text-center text-sm text-footer-muted">
          <p>
            &copy; {currentYear} {siteConfig.meta.siteName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

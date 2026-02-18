import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Clock, Sparkles, Check } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site.config";

// Service categories
const serviceCategories = [
  {
    title: "Tailoring & Alterations",
    description: "Expert alterations completed within 3–5 business days",
    items: [
      "Hemming (pants, dresses, skirts)",
      "Tapering pants and jeans",
      "Waist adjustments",
      "Sleeve shortening",
      "Taking in or letting out",
      "Zipper replacement",
      "Button replacement",
      "Patches and repairs",
    ],
  },
  {
    title: "Dry Cleaning",
    description: "Standard turnaround: 2–3 business days",
    items: [
      "Shirts and blouses",
      "Pants and trousers",
      "Suits (2 and 3-piece)",
      "Dresses (simple and formal)",
      "Coats and jackets",
      "Down jackets",
      "Comforters and bedding",
    ],
  },
  {
    title: "Specialty Services",
    description: "Special care for delicate and valuable items",
    items: [
      "Wedding gown alterations",
      "Wedding dress cleaning & preservation",
      "Leather and suede cleaning",
      "Household items (drapes, linens)",
      "Rush/same-day service available",
    ],
  },
];

export default function ServicesPage() {
  const { heading, subheading } = siteConfig.pages.services;

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section className="bg-surface py-14 md:py-18">
          <Container className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">What We Offer</span>
            </div>
            <h1 className="mb-4 text-balance">{heading}</h1>
            {subheading && (
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
                {subheading}
              </p>
            )}
          </Container>
        </section>

        {/* Service Categories */}
        <Section padding="lg">
          <div className="grid gap-8 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <div key={index} className="rounded-2xl border bg-card p-6">
                <h2 className="mb-2 text-xl font-semibold">{category.title}</h2>
                <p className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-10 rounded-xl bg-surface-2 p-6 text-center">
            <p className="text-muted-foreground">
              <strong>Pricing provided in-store.</strong> Bring your garment in for a free assessment and exact quote—no obligation.
            </p>
          </div>
        </Section>

        {/* Featured Services Grid */}
        <Section variant="surface2" padding="lg">
          <h2 className="mb-8 text-center text-2xl font-semibold">Our Services</h2>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => {
              const Icon = service.icon
                ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.FC<{ className?: string }>)
                : null;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                >
                  {service.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      {Icon && (
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="mt-1 text-xs text-primary font-medium">Quote on inspection</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* CTA */}
        <Section variant="brandBand" padding="md">
          <div className="text-center">
            <h2 className="mb-4 text-balance">Not sure what you need?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg opacity-90 text-balance">
              Bring your garment in and we&apos;ll assess it on the spot—no obligation, no charge.
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link href="/contact">
                Visit Our Shop
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

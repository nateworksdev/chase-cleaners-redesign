import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site.config";

// Pricing data for Chase Cleaners
const alterationsPricing = [
  { service: "Hem pants", price: "$12 – $18", notes: "Original or cuffed" },
  { service: "Taper pants/jeans", price: "$18 – $25", notes: "" },
  { service: "Waist adjustment (pants)", price: "$20 – $30", notes: "In or out" },
  { service: "Shorten sleeves (jacket)", price: "$25 – $40", notes: "With buttons" },
  { service: "Take in/let out jacket sides", price: "$30 – $50", notes: "" },
  { service: "Hem dress", price: "$18 – $35", notes: "Simple to lined" },
  { service: "Take in dress", price: "$25 – $45", notes: "" },
  { service: "Zipper replacement", price: "$15 – $35", notes: "Varies by garment" },
  { service: "Button replacement", price: "$3 – $5", notes: "Per button" },
  { service: "Patch/repair", price: "$10+", notes: "Priced by complexity" },
];

const dryCleaningPricing = [
  { item: "Shirt (laundered & pressed)", price: "$4.50", notes: "" },
  { item: "Pants", price: "$8", notes: "" },
  { item: "Suit (2-piece)", price: "$18", notes: "" },
  { item: "Suit (3-piece)", price: "$24", notes: "" },
  { item: "Sport coat/blazer", price: "$12", notes: "" },
  { item: "Dress (simple)", price: "$14", notes: "" },
  { item: "Dress (formal/beaded)", price: "$22+", notes: "" },
  { item: "Coat (wool/cashmere)", price: "$18 – $28", notes: "" },
  { item: "Down jacket", price: "$25", notes: "" },
  { item: "Comforter", price: "$35 – $50", notes: "Queen/King" },
];

const specialtyServices = [
  { name: "Wedding dress cleaning", price: "From $150", description: "Includes preservation box" },
  { name: "Leather/suede cleaning", price: "From $45", description: "" },
  { name: "Household items", price: "Call for quote", description: "Drapes, linens, etc." },
  { name: "Rush service", price: "+50%", description: "Same-day when possible" },
];

export default function ServicesPage() {
  const { heading, subheading } = siteConfig.pages.services;

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section className="bg-surface py-16 md:py-20">
          <Container className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Transparent Pricing</span>
            </div>
            <h1 className="mb-4 text-balance">{heading}</h1>
            {subheading && (
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
                {subheading}
              </p>
            )}
          </Container>
        </section>

        {/* Alterations Section */}
        <Section padding="lg">
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-semibold">Tailoring & Alterations</h2>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              Most alterations completed within 3–5 business days
            </p>
          </div>
          
          <div className="overflow-hidden rounded-xl border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {alterationsPricing.map((item, index) => (
                    <tr key={index} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-sm">{item.service}</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">{item.price}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.notes || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Custom tailoring and complex alterations priced individually. Bring your garment in for a free estimate.
          </p>
        </Section>

        {/* Dry Cleaning Section */}
        <Section variant="surface" padding="lg">
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-semibold">Dry Cleaning</h2>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              Standard turnaround: 2–3 business days
            </p>
          </div>
          
          <div className="overflow-hidden rounded-xl border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Item</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {dryCleaningPricing.map((item, index) => (
                    <tr key={index} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-sm">{item.item}</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">{item.price}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.notes || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* Specialty Services */}
        <Section padding="lg">
          <h2 className="mb-8 text-2xl font-semibold">Specialty Services</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialtyServices.map((service, index) => (
              <div key={index} className="rounded-xl border bg-card p-6">
                <h3 className="mb-1 font-semibold">{service.name}</h3>
                <p className="mb-2 text-xl font-bold text-primary">{service.price}</p>
                {service.description && (
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Services Grid */}
        <Section variant="surface2" padding="lg">
          <h2 className="mb-8 text-center text-2xl font-semibold">All Services</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => {
              const Icon = service.icon
                ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.FC<{ className?: string }>)
                : null;

              return (
                <div
                  key={service.id}
                  className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg"
                >
                  {service.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start gap-3">
                      {Icon && (
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-semibold">{service.name}</h3>
                        {service.pricing && (
                          <p className="text-sm font-medium text-primary">
                            {service.pricing.type === "starting" && `From $${service.pricing.value}`}
                            {service.pricing.type === "fixed" && `$${service.pricing.value}`}
                            {service.pricing.type === "quote" && "Quote"}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* CTA */}
        <Section variant="brandBand" padding="lg">
          <div className="text-center">
            <h2 className="mb-4 text-balance">Not sure what you need?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 text-balance">
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

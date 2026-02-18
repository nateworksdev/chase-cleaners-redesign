import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Phone } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceEstimator } from "@/components/service-estimator";
import { siteConfig } from "@/config/site.config";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon
    ? (LucideIcons[
        service.icon as keyof typeof LucideIcons
      ] as React.FC<{ className?: string }>)
    : null;

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero Image */}
        {service.image && (
          <section className="relative h-[35vh] min-h-[280px] overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
          </section>
        )}

        {/* Main Content */}
        <Section padding="lg">
          <div className="grid gap-10 lg:grid-cols-[1fr,360px] lg:gap-14">
            {/* Service Details */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                {Icon && (
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                )}
                <div>
                  <h1 className="text-3xl sm:text-4xl">{service.name}</h1>
                  {service.pricing && (
                    <p className="mt-1 text-lg font-medium text-primary">
                      {service.pricing.type === "starting" &&
                        `From $${service.pricing.value}`}
                      {service.pricing.type === "fixed" &&
                        `$${service.pricing.value}`}
                      {service.pricing.type === "quote" && "Quote on inspection"}
                    </p>
                  )}
                </div>
              </div>

              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {service.longDescription && (
                <div className="mb-8 text-muted-foreground leading-relaxed">
                  <p>{service.longDescription}</p>
                </div>
              )}

              {/* Mobile CTA */}
              <div className="flex flex-col gap-3 sm:flex-row lg:hidden mb-8">
                <Button asChild size="lg" className="flex-1">
                  <Link href="/contact">
                    Visit Our Shop
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>

              {/* Info Box */}
              <div className="rounded-xl border bg-surface p-6">
                <h3 className="mb-4 font-semibold">What to Expect</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Bring your garment in for a free assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    We&apos;ll give you an exact quote on the spot
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Standard turnaround is 3-5 business days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Rush service available when you need it fast
                  </li>
                </ul>
              </div>
            </div>

            {/* Estimator Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ServiceEstimator
                serviceId={service.id}
                serviceName={service.name}
                basePriceRange={
                  service.pricing?.type === "starting" && service.pricing.value
                    ? { min: service.pricing.value, max: service.pricing.value * 3 }
                    : service.pricing?.type === "quote"
                    ? { min: 50, max: 300 }
                    : undefined
                }
              />
            </div>
          </div>
        </Section>

        {/* Other Services */}
        <Section variant="surface" padding="lg">
          <h2 className="mb-8 text-center text-2xl font-semibold">Other Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((otherService) => {
                const OtherIcon = otherService.icon
                  ? (LucideIcons[
                      otherService.icon as keyof typeof LucideIcons
                    ] as React.FC<{ className?: string }>)
                  : null;

                return (
                  <Link
                    key={otherService.id}
                    href={`/services/${otherService.slug}`}
                    className="group rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/20"
                  >
                    <div className="flex items-start gap-3">
                      {OtherIcon && (
                        <div className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <OtherIcon className="h-5 w-5" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold">{otherService.name}</h3>
                        {otherService.pricing && (
                          <p className="text-sm text-primary">
                            {otherService.pricing.type === "starting" && `From $${otherService.pricing.value}`}
                            {otherService.pricing.type === "quote" && "Quote"}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                      {otherService.description}
                    </p>
                  </Link>
                );
              })}
          </div>
        </Section>

        {/* CTA */}
        <Section variant="brandBand" padding="md">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-semibold">Ready to Get Started?</h2>
              <p className="mt-1 opacity-90">
                Stop by our shop for a free assessment and exact quote.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="flex-shrink-0">
              <Link href="/contact">Visit Us</Link>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

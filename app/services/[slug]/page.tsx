import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Phone, Clock, Check } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
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
          <section className="relative h-[280px] md:h-[340px] overflow-hidden">
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
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr,380px] lg:gap-14">
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
                    <p className="mt-1 text-sm text-primary font-medium">Quote provided in-store</p>
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
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      Bring your garment in for a free assessment
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      We&apos;ll give you an exact quote on the spot
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      Standard turnaround is 3-5 business days
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      Rush service available when you need it fast
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote Sidebar */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">Get a Free Quote</h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Bring your garment in and we&apos;ll assess it on the spot—no obligation.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 rounded-lg bg-surface p-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div className="text-sm">
                        <p className="font-medium">Quick Assessment</p>
                        <p className="text-muted-foreground">Usually takes 5 minutes</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/contact">
                        Visit Our Shop
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.contact.phone}
                      </a>
                    </Button>
                  </div>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Walk-ins welcome · {siteConfig.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Other Services */}
        <Section variant="surface" padding="lg">
          <Container>
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
                      className="group rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                    >
                      <div className="flex items-start gap-3">
                        {OtherIcon && (
                          <div className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <OtherIcon className="h-5 w-5" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold">{otherService.name}</h3>
                          <p className="text-xs text-primary">Quote on inspection</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                        {otherService.description}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section variant="brandBand" padding="md">
          <Container>
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
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

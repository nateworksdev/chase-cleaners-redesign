"use client";

import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Star, MapPin, Clock, Scissors, BadgeCheck, Sparkles, ShieldCheck, Zap, Heart } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Hero,
  ImageBand,
} from "@/components/sections";
import { siteConfig } from "@/config/site.config";
import type { 
  HomeSection,
  ServicesGridData, 
  FeaturedServiceData, 
  GalleryData, 
  ReviewsData, 
  ProcessData, 
  FAQData, 
  CTAData,
  InstantEstimatorData 
} from "@/lib/types/config";

// Define surface pattern for alternating backgrounds
const sectionSurfaces: Record<string, "default" | "surface" | "surface2" | "surface3" | "brandBand"> = {
  hero: "default",
  process: "surface2",
  services: "default",
  "instant-estimator": "surface",
  "featured-service": "default",
  reviews: "surface",
  faq: "default",
  cta: "brandBand",
  gallery: "surface",
  "image-band": "default",
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {siteConfig.pages.home.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
      </main>
      <Footer />
    </>
  );
}

function SectionRenderer({ section }: { section: HomeSection }) {
  const variant = sectionSurfaces[section.type] || "default";
  
  if (section.type === "hero") {
    return <Hero variant={section.variant} data={section.data} />;
  }
  
  if (section.type === "image-band") {
    return <ImageBand data={section.data} />;
  }

  if (section.type === "cta") {
    return (
      <Section variant="brandBand" padding="md">
        <CTAContent data={section.data} />
      </Section>
    );
  }

  // Skip the instant-estimator since we're removing pricing
  if (section.type === "instant-estimator") {
    return <QuickQuoteSection data={section.data} />;
  }

  return (
    <Section variant={variant} padding="lg">
      {section.type === "services" && (
        <ServicesGridContent data={section.data} />
      )}
      {section.type === "featured-service" && (
        <FeaturedServiceContent data={section.data} />
      )}
      {section.type === "gallery" && (
        <GalleryContent data={section.data} />
      )}
      {section.type === "reviews" && (
        <ReviewsContent data={section.data} />
      )}
      {section.type === "process" && (
        <WhyChooseUsContent data={section.data} />
      )}
      {section.type === "faq" && (
        <FAQContent data={section.data} />
      )}
    </Section>
  );
}

// REDESIGNED: "Why Choose Us" with benefit cards
function WhyChooseUsContent({ data }: { data: ProcessData }) {
  const benefitIcons: Record<string, React.FC<{ className?: string }>> = {
    "map-pin": MapPin,
    "clock": Zap,
    "scissors": Scissors,
    "badge-check": ShieldCheck,
  };

  const benefitColors = [
    "from-primary/20 to-primary/5",
    "from-accent/30 to-accent/10",
    "from-primary/15 to-transparent",
    "from-accent/25 to-accent/5",
  ];

  return (
    <Section variant="surface2" padding="lg">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-balance">{data.heading}</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          A neighborhood shop with old-fashioned values and modern convenience.
        </p>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.steps.map((step, index) => {
          const IconComponent = step.icon ? benefitIcons[step.icon] : Heart;
          return (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30"
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefitColors[index % 4]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// Service images map (placeholders - can be replaced with real images)
const serviceImages: Record<string, string> = {
  alterations: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
  "dry-cleaning": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=400&fit=crop",
  "wedding-gowns": "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
  "suits-tuxedos": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop",
  "leather-suede": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop",
  household: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
};

// REDESIGNED: Services with images
function ServicesGridContent({ data }: { data: ServicesGridData }) {
  const services = data.showAll
    ? siteConfig.services
    : siteConfig.services.filter((s) => s.featured);

  return (
    <>
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-balance">{data.heading}</h2>
        {data.subheading && (
          <p className="mx-auto max-w-2xl text-muted-foreground text-balance">
            {data.subheading}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const IconComponent = service.icon
            ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.FC<{ className?: string }>)
            : null;
          
          const imageUrl = serviceImages[service.slug] || service.image;

          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
            >
              {/* Image */}
              {imageUrl && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={imageUrl} 
                    alt={service.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              )}
              
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  {IconComponent && (
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <IconComponent className="h-4 w-4" />
                    </div>
                  )}
                  <h3 className="font-semibold">{service.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>
                <div className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                  Learn More
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

function FeaturedServiceContent({ data }: { data: FeaturedServiceData }) {
  const service = siteConfig.services.find((s) => s.id === data.serviceId);
  if (!service) return null;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {service.image && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <Image src={service.image} alt={service.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      )}
      <div className="max-w-lg">
        <h2 className="mb-5 text-balance">{data.heading || service.name}</h2>
        <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
          {data.description || service.longDescription || service.description}
        </p>
        {data.cta && (
          <Button asChild size="lg">
            <Link href={data.cta.href}>{data.cta.text}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

function GalleryContent({ data }: { data: GalleryData }) {
  return (
    <>
      <h2 className="mb-4 text-center text-balance">{data.heading}</h2>
      {data.subheading && (
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground text-balance">
          {data.subheading}
        </p>
      )}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
            <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </>
  );
}

function ReviewsContent({ data }: { data: ReviewsData }) {
  return (
    <>
      <h2 className="mb-10 text-center text-balance">{data.heading}</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {data.reviews.map((review, index) => (
          <div key={index} className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="mb-5 text-muted-foreground leading-relaxed">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center justify-between text-sm">
              <p className="font-semibold">{review.author}</p>
              {review.source && <span className="capitalize text-muted-foreground text-xs">via {review.source}</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function FAQContent({ data }: { data: FAQData }) {
  return (
    <Container narrow>
      <h2 className="mb-12 text-center text-balance">{data.heading}</h2>
      <Accordion type="single" collapsible className="w-full">
        {data.items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60">
            <AccordionTrigger className="text-left text-base font-medium hover:text-primary py-5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

function CTAContent({ data }: { data: CTAData }) {
  return (
    <div className="text-center">
      <h2 className="mb-4 text-balance">{data.heading}</h2>
      {data.subheading && (
        <p className="mx-auto mb-6 max-w-2xl text-lg opacity-90 text-balance leading-relaxed">
          {data.subheading}
        </p>
      )}
      <Button asChild size="lg" variant="secondary" className="shadow-lg">
        <Link href={data.buttonHref}>{data.buttonText}</Link>
      </Button>
    </div>
  );
}

// REPLACED: No-pricing quick quote CTA instead of price estimator
function QuickQuoteSection({ data }: { data: InstantEstimatorData }) {
  return (
    <Section variant="surface" padding="lg">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" />
          Quick & Easy
        </div>
        <h2 className="mb-4 text-balance">Get Your Free Quote</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          Bring your garment in and we&apos;ll give you an exact quote on the spot—no obligation, no pressure. Most items ready in 3-5 days.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Visit Our Shop
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
              Call {siteConfig.contact.phone}
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Walk-ins welcome · {siteConfig.contact.hours}
        </p>
      </div>
    </Section>
  );
}

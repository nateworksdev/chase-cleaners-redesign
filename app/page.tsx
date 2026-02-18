"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Star, Check, DollarSign, MapPin, Clock, Scissors, BadgeCheck } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  services: "default",
  "instant-estimator": "surface",
  "featured-service": "default",
  process: "surface",
  reviews: "surface2",
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
      <Section variant="brandBand" padding="lg">
        <CTAContent data={section.data} />
      </Section>
    );
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
        <ProcessContent data={section.data} />
      )}
      {section.type === "faq" && (
        <FAQContent data={section.data} />
      )}
      {section.type === "instant-estimator" && (
        <InstantEstimatorContent data={section.data} />
      )}
    </Section>
  );
}

// Content components

function ServicesGridContent({ data }: { data: ServicesGridData }) {
  const services = data.showAll
    ? siteConfig.services
    : siteConfig.services.filter((s) => s.featured);

  return (
    <>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance">{data.heading}</h2>
        {data.subheading && (
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            {data.subheading}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const IconComponent = service.icon
            ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.FC<{ className?: string }>)
            : null;

          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
            >
              {IconComponent && (
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconComponent className="h-5 w-5" />
                </div>
              )}
              <h3 className="mb-2 text-lg font-semibold">{service.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Learn More
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
      <h2 className="mb-12 text-center text-balance">{data.heading}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {data.reviews.map((review, index) => (
          <div key={index} className="rounded-xl border bg-card p-6 shadow-sm">
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

function ProcessContent({ data }: { data: ProcessData }) {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    "map-pin": MapPin,
    "clock": Clock,
    "scissors": Scissors,
    "badge-check": BadgeCheck,
  };

  return (
    <>
      <h2 className="mb-12 text-center text-balance">{data.heading}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.steps.map((step, index) => {
          const IconComponent = step.icon ? iconMap[step.icon] : null;
          return (
            <div key={index} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {IconComponent ? <IconComponent className="h-6 w-6" /> : <span className="text-lg font-bold">{index + 1}</span>}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          );
        })}
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
      <h2 className="mb-5 text-balance">{data.heading}</h2>
      {data.subheading && (
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 text-balance leading-relaxed">
          {data.subheading}
        </p>
      )}
      <Button asChild size="lg" variant="secondary" className="shadow-lg">
        <Link href={data.buttonHref}>{data.buttonText}</Link>
      </Button>
    </div>
  );
}

// Chase Cleaners Price Estimator

const garmentTypes = [
  { id: "pants", label: "Pants/Jeans", alterationMin: 12, alterationMax: 30, cleaningPrice: 8 },
  { id: "shirt", label: "Shirt/Blouse", alterationMin: 10, alterationMax: 25, cleaningPrice: 4.5 },
  { id: "dress", label: "Dress", alterationMin: 18, alterationMax: 45, cleaningPrice: 14 },
  { id: "suit", label: "Suit (2-piece)", alterationMin: 40, alterationMax: 80, cleaningPrice: 18 },
  { id: "jacket", label: "Jacket/Blazer", alterationMin: 25, alterationMax: 50, cleaningPrice: 12 },
  { id: "coat", label: "Coat", alterationMin: 30, alterationMax: 60, cleaningPrice: 22 },
];

const serviceTypes = [
  { id: "alteration", label: "Alterations" },
  { id: "cleaning", label: "Dry Cleaning" },
  { id: "both", label: "Both" },
];

function InstantEstimatorContent({ data }: { data: InstantEstimatorData }) {
  return (
    <>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance">{data.heading}</h2>
        {data.subheading && (
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            {data.subheading}
          </p>
        )}
      </div>
      <PriceEstimatorWidget />
    </>
  );
}

function PriceEstimatorWidget() {
  const [garmentType, setGarmentType] = useState(garmentTypes[0].id);
  const [serviceType, setServiceType] = useState(serviceTypes[0].id);
  const [quantity, setQuantity] = useState([1]);
  const [complexity, setComplexity] = useState([50]);

  const garment = garmentTypes.find((g) => g.id === garmentType)!;
  
  const estimate = useMemo(() => {
    const qty = quantity[0];
    const complexityMultiplier = 0.7 + (complexity[0] / 100) * 0.6;
    
    let min = 0;
    let max = 0;
    
    if (serviceType === "alteration" || serviceType === "both") {
      min += Math.round(garment.alterationMin * complexityMultiplier * qty);
      max += Math.round(garment.alterationMax * complexityMultiplier * qty);
    }
    
    if (serviceType === "cleaning" || serviceType === "both") {
      min += Math.round(garment.cleaningPrice * qty);
      max += Math.round(garment.cleaningPrice * qty);
    }
    
    return { min, max };
  }, [garment, serviceType, quantity, complexity]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid gap-6 lg:grid-cols-[1fr,280px]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="space-y-6">
            <div>
              <Label className="mb-3 block text-sm font-semibold">Garment Type</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {garmentTypes.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setGarmentType(option.id)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                      garmentType === option.id
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="mb-3 block text-sm font-semibold">Service Needed</Label>
              <div className="flex gap-2">
                {serviceTypes.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setServiceType(option.id)}
                    className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                      serviceType === option.id
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="mb-3 flex items-center justify-between">
                <Label className="text-sm font-semibold">Quantity</Label>
                <span className="text-sm text-muted-foreground">{quantity[0]} {quantity[0] === 1 ? "item" : "items"}</span>
              </div>
              <Slider value={quantity} onValueChange={setQuantity} min={1} max={10} step={1} />
            </div>
            
            {(serviceType === "alteration" || serviceType === "both") && (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <Label className="text-sm font-semibold">Alteration Complexity</Label>
                  <span className="text-sm text-muted-foreground">
                    {complexity[0] < 33 ? "Simple" : complexity[0] < 66 ? "Standard" : "Complex"}
                  </span>
                </div>
                <Slider value={complexity} onValueChange={setComplexity} max={100} step={1} />
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex-1 rounded-2xl bg-primary p-6 text-primary-foreground">
            <div className="mb-3 flex items-center gap-2">
              <DollarSign className="h-4 w-4 opacity-80" />
              <span className="text-xs font-medium uppercase tracking-wide opacity-80">Estimated Range</span>
            </div>
            <div className="mb-1">
              {estimate.min === estimate.max ? (
                <span className="text-3xl font-bold">${estimate.min}</span>
              ) : (
                <>
                  <span className="text-3xl font-bold">${estimate.min}</span>
                  <span className="mx-1.5 text-xl opacity-60">–</span>
                  <span className="text-3xl font-bold">${estimate.max}</span>
                </>
              )}
            </div>
            <p className="mb-5 text-xs opacity-70">Exact price upon inspection</p>
            
            <div className="space-y-1.5 border-t border-primary-foreground/20 pt-4 text-xs">
              <div className="flex justify-between">
                <span className="opacity-70">Garment</span>
                <span className="font-medium">{garment.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Service</span>
                <span className="font-medium capitalize">{serviceType === "both" ? "Alter + Clean" : serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Quantity</span>
                <span className="font-medium">{quantity[0]}</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Walk in for a free exact quote
          </p>
        </div>
      </div>
    </div>
  );
}

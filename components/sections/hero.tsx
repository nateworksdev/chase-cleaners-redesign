import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site.config";
import type { HeroData } from "@/lib/types/config";

interface HeroProps {
  variant: "minimal" | "split" | "fullscreen";
  data: HeroData;
}

export function Hero({ variant, data }: HeroProps) {
  if (variant === "minimal") {
    return <HeroMinimal data={data} />;
  }
  if (variant === "split") {
    return <HeroSplit data={data} />;
  }
  return <HeroFullscreen data={data} />;
}

function HeroMinimal({ data }: { data: HeroData }) {
  return (
    <section className="relative overflow-hidden bg-mesh py-24 md:py-36">
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-balance">{data.heading}</h1>
          {data.subheading && (
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl text-balance">
              {data.subheading}
            </p>
          )}
          {data.cta && (
            <Button asChild size="lg">
              <Link href={data.cta.href}>{data.cta.text}</Link>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

function HeroSplit({ data }: { data: HeroData }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 bg-mesh opacity-60" />
      
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            {/* Location badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{siteConfig.contact.address?.city}, {siteConfig.contact.address?.state}</span>
              <span className="mx-1 text-border">·</span>
              <span>Since 2008</span>
            </div>
            
            <h1 className="mb-5 text-balance">{data.heading}</h1>
            {data.subheading && (
              <p className="mb-8 text-lg text-muted-foreground text-balance leading-relaxed">
                {data.subheading}
              </p>
            )}
            
            {data.cta && (
              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={data.cta.href}>{data.cta.text}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            )}
            
            {/* Hours pill */}
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Hours</span>
              <span>{siteConfig.contact.hours}</span>
            </div>
          </div>
          
          {data.image && (
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
                <Image
                  src={data.image}
                  alt={data.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function HeroFullscreen({ data }: { data: HeroData }) {
  return (
    <section className="relative flex min-h-[85vh] items-center">
      {data.image && (
        <>
          <Image
            src={data.image}
            alt={data.heading}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </>
      )}
      <Container className="relative z-10 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-balance drop-shadow-lg">{data.heading}</h1>
          {data.subheading && (
            <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-white/90 text-balance leading-relaxed">
              {data.subheading}
            </p>
          )}
          {data.cta && (
            <Button asChild size="xl" variant="secondary">
              <Link href={data.cta.href}>{data.cta.text}</Link>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

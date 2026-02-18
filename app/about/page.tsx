import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Clock, Heart } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "About",
};

// Values/approach data
const values = [
  {
    icon: Sparkles,
    title: "Precision in every stitch",
    description: "Details matter. We take the time to get the fit right—the first time.",
  },
  {
    icon: Heart,
    title: "Honest, fair pricing",
    description: "No surprises. We'll tell you exactly what the work involves before we start.",
  },
  {
    icon: Clock,
    title: "Quick when you need it",
    description: "In a rush? Let us know. We'll do our best to accommodate your timeline.",
  },
];

export default function AboutPage() {
  const { heading, story } = siteConfig.pages.about;

  // Split story into paragraphs
  const paragraphs = story.split("\n\n");

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section className="bg-surface py-14 md:py-18">
          <Container className="text-center">
            <h1 className="mb-4 text-balance">{heading}</h1>
          </Container>
        </section>

        {/* Story */}
        <Section padding="lg">
          <Container narrow>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </Section>

        {/* Image Band - SHORTER */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[360px] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=500&fit=crop"
              alt="Tailor at work"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            <Container className="relative z-10 flex h-full items-center">
              <div className="max-w-md text-white">
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Our Approach</h2>
                <p className="text-white/80 text-sm md:text-base">
                  Good tailoring is about more than measurements. It&apos;s about listening, being honest about what&apos;s possible, and doing work that holds up over time.
                </p>
              </div>
            </Container>
          </div>
        </section>

        {/* What Sets Us Apart - REDESIGNED */}
        <Section variant="surface" padding="lg">
          <Container>
            <h2 className="mb-10 text-center text-2xl font-semibold">What Sets Us Apart</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
                  >
                    {/* Subtle gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section padding="lg">
          <Container className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">Questions?</h2>
            <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
              We&apos;re always happy to discuss your needs, provide quotes, or just answer a quick question. Stop by or give us a call.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

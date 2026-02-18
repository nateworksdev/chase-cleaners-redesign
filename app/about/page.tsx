import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const { heading, story, certifications } = siteConfig.pages.about;

  // Split story into paragraphs
  const paragraphs = story.split("\n\n");

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section className="bg-surface py-16 md:py-20">
          <Container className="text-center">
            <h1 className="mb-4 text-balance">{heading}</h1>
          </Container>
        </section>

        {/* Story */}
        <Section padding="lg">
          <Container narrow>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </Section>

        {/* Values Image Band */}
        <section className="relative">
          <div className="relative aspect-[21/9] min-h-[300px] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=700&fit=crop"
              alt="Tailor at work"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <Container className="relative z-10 flex h-full items-center py-16">
              <div className="max-w-lg text-white">
                <h2 className="mb-6 text-3xl font-semibold">Our Approach</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Precision in every stitch</span>
                      <p className="text-sm text-white/70">Details matter. We take the time to get the fit right—the first time.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Honest, fair pricing</span>
                      <p className="text-sm text-white/70">No surprises. We&apos;ll tell you exactly what the work involves before we start.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Quick when you need it</span>
                      <p className="text-sm text-white/70">In a rush? Let us know. We&apos;ll do our best to accommodate your timeline.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </section>

        {/* Credentials */}
        {certifications && certifications.length > 0 && (
          <Section variant="surface" padding="lg">
            <Container narrow>
              <h2 className="mb-10 text-center text-2xl font-semibold">What Sets Us Apart</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border bg-card p-5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* CTA */}
        <Section padding="lg">
          <Container className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">Questions?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              We&apos;re always happy to discuss your needs, provide estimates, or just answer a quick question. Stop by or give us a call.
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

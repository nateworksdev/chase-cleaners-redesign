"use client";

import { MapPin, Phone, Clock, Star, Navigation, ExternalLink } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site.config";

// Detailed hours
const hours = [
  { day: "Monday", time: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
  { day: "Thursday", time: "8:00 AM – 6:00 PM" },
  { day: "Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

// Reviews from config
const reviews = [
  {
    text: "They altered my wedding dress perfectly. The attention to detail was incredible—couldn't have asked for better.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: "I've been coming here for years. Fast, reliable, and they always remember my preferences.",
    author: "Michael T.",
    rating: 5,
  },
  {
    text: "Finally found a tailor I can trust with my suits. Fair prices and excellent work every time.",
    author: "James L.",
    rating: 5,
  },
];

export default function ContactPage() {
  const { heading, subheading } = siteConfig.pages.contact;
  const address = siteConfig.contact.address;
  const mapsUrl = address
    ? `https://maps.google.com/?q=${encodeURIComponent(`${address.street} ${address.city} ${address.state} ${address.zip}`)}`
    : "#";

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section className="bg-surface py-16 md:py-20">
          <Container className="text-center">
            <h1 className="mb-4 text-balance">{heading}</h1>
            {subheading && (
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
                {subheading}
              </p>
            )}
          </Container>
        </section>

        {/* Main Content */}
        <Section padding="lg">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Hours & Location */}
              <div>
                {/* Hours Table */}
                <div className="mb-8 overflow-hidden rounded-xl border bg-card">
                  <div className="border-b bg-muted/50 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <h2 className="text-lg font-semibold">Hours</h2>
                    </div>
                  </div>
                  <div className="divide-y">
                    {hours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between px-6 py-3 text-sm"
                      >
                        <span className="font-medium">{item.day}</span>
                        <span className={item.time === "Closed" ? "text-muted-foreground" : ""}>
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  {/* Address */}
                  {address && (
                    <div className="flex items-start gap-4 rounded-xl border bg-card p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-sm font-semibold text-muted-foreground">Address</h3>
                        <p className="font-medium">
                          {address.street}
                          <br />
                          {address.city}, {address.state} {address.zip}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Phone */}
                  <div className="flex items-start gap-4 rounded-xl border bg-card p-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-sm font-semibold text-muted-foreground">Phone</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                        className="text-lg font-medium text-primary hover:underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Parking Note */}
                  <p className="text-sm text-muted-foreground">
                    <strong>Parking:</strong> Free street parking on East Main and side streets. Municipal lot nearby.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="flex-1">
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map + Reviews */}
              <div className="space-y-8">
                {/* Map Embed */}
                <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(`${address?.street || ''} ${address?.city || ''} ${address?.state || ''} ${address?.zip || ''}`)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chase Cleaners location"
                  />
                </div>

                {/* Reviews */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <h2 className="text-lg font-semibold">What Customers Say</h2>
                    <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span>4.9 on Google</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <div key={index} className="rounded-xl border bg-card p-5">
                        <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <p className="text-sm font-medium">{review.author}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://g.page/chase-cleaners/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Leave a review
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Banner */}
        <Section variant="brandBand" padding="md">
          <Container>
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div>
                <h2 className="text-xl font-semibold">Questions Before You Visit?</h2>
                <p className="mt-1 opacity-90">
                  Give us a call. We&apos;re happy to discuss your needs or check on an existing order.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="flex-shrink-0">
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
                  {siteConfig.contact.phone}
                </a>
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

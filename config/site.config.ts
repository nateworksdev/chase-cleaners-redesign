import { SiteConfig } from "@/lib/types/config";

/**
 * Chase Cleaners & Tailor - Site Configuration
 * Mount Kisco, NY — Since 2008
 */

export const siteConfig: SiteConfig = {
  meta: {
    siteName: "Chase Cleaners & Tailor",
    tagline: "Expert Care for Your Garments",
    description:
      "Professional alterations, tailoring, and dry cleaning in Mount Kisco, NY. Walk-ins welcome. Serving the community since 2008 with precision, fair pricing, and quick turnaround.",
    url: "https://chase-cleaners-redesign.vercel.app",
  },

  brand: {
    colors: {
      primary: "#6B8E7B", // sage green
      secondary: "#F5F3EF", // warm cream
      accent: "#D4C5A9", // soft gold
    },
  },

  contact: {
    phone: "(914) 966-9678",
    email: "info@chasecleaners.com",
    address: {
      street: "231 East Main Street",
      city: "Mount Kisco",
      state: "NY",
      zip: "10549",
    },
    hours: "Mon–Fri 8am–6pm, Sat 9am–4pm",
    serviceArea: "Mount Kisco & surrounding areas",
  },

  social: {
    google: "https://g.page/chase-cleaners",
  },

  pages: {
    home: {
      sections: [
        {
          type: "hero",
          variant: "split",
          data: {
            heading: "Expert Care for Your Garments",
            subheading:
              "Professional alterations, tailoring, and dry cleaning from a team that takes the time to get it right. Walk in anytime.",
            cta: {
              text: "Visit Our Shop",
              href: "/contact",
            },
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
          },
        },
        {
          type: "process",
          data: {
            heading: "Why Choose Us",
            steps: [
              {
                title: "16+ Years Local",
                description: "Serving Mount Kisco since 2008 with dedication and care.",
                icon: "map-pin",
              },
              {
                title: "Same-Day Service",
                description: "When you need it fast, we make it happen.",
                icon: "clock",
              },
              {
                title: "Expert Tailors",
                description: "Skilled craftsmanship in every stitch.",
                icon: "scissors",
              },
              {
                title: "Fair Pricing",
                description: "Honest quotes, no surprises—ever.",
                icon: "badge-check",
              },
            ],
          },
        },
        {
          type: "services",
          variant: "grid",
          data: {
            heading: "What We Do",
            subheading: "From quick repairs to custom tailoring, we handle garments with the care they deserve.",
            showAll: false,
          },
        },
        {
          type: "image-band",
          data: {
            image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&h=500&fit=crop",
            heading: "Trusted With Your Most Delicate Garments",
            subheading: "Wedding gowns, suits, leather, silk, cashmere—we handle it all with expert care.",
            height: "sm",
            overlay: "gradient",
          },
        },
        {
          type: "instant-estimator",
          data: {
            heading: "Get Your Free Quote",
            subheading: "Bring your garment in for an exact quote—no obligation, no pressure.",
          },
        },
        {
          type: "reviews",
          variant: "carousel",
          data: {
            heading: "What Our Customers Say",
            reviews: [
              {
                text: "They altered my wedding dress perfectly. The attention to detail was incredible—couldn't have asked for better.",
                author: "Sarah M.",
                rating: 5,
                source: "google",
              },
              {
                text: "I've been coming here for years. Fast, reliable, and they always remember my preferences.",
                author: "Michael T.",
                rating: 5,
                source: "google",
              },
              {
                text: "Finally found a tailor I can trust with my suits. Fair prices and excellent work every time.",
                author: "James L.",
                rating: 5,
                source: "google",
              },
            ],
          },
        },
        {
          type: "cta",
          data: {
            heading: "Stop By Anytime",
            subheading: "We're on East Main Street in Mount Kisco. Walk-ins always welcome—no appointment needed.",
            buttonText: "Get Directions",
            buttonHref: "/contact",
          },
        },
      ],
    },
    services: {
      heading: "Our Services",
      subheading: "From quick repairs to custom tailoring, we handle every garment with care. Bring it in for a free quote.",
    },
    about: {
      heading: "A Neighborhood Shop That Still Does Things Right",
      story:
        "When we opened in 2008, Mount Kisco already had places to get clothes cleaned. But we saw an opportunity to do something different: focus on the tailoring side of things, treat every garment with care, and build a shop where people felt comfortable walking in with questions.\n\nThat approach hasn't changed. We're still a small operation—small enough that we know many of our customers by name, and small enough to take pride in every piece of work that leaves here.\n\nGood tailoring is about more than measurements. It's about listening to what people actually need, being honest about what's possible, and doing work that holds up over time.",
      certifications: [
        "Precision in every stitch",
        "Honest, fair pricing",
        "Quick when you need it",
      ],
    },
    contact: {
      heading: "Visit Us",
      subheading: "We're on East Main Street in the heart of Mount Kisco. Walk-ins are always welcome—no appointment needed.",
    },
  },

  services: [
    {
      id: "alterations",
      name: "Tailoring & Alterations",
      slug: "alterations",
      description: "Expert alterations from simple hems to complex tailoring. Most completed within 3–5 business days.",
      longDescription: "Whether you need pants hemmed, a jacket taken in, or a complete garment transformation, our skilled tailors deliver precise, lasting results. We take the time to understand exactly what you need and get the fit right—the first time.",
      featured: true,
      icon: "scissors",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop",
    },
    {
      id: "dry-cleaning",
      name: "Dry Cleaning",
      slug: "dry-cleaning",
      description: "Professional dry cleaning with 2–3 business day turnaround. Shirts, suits, dresses, and more.",
      longDescription: "Our dry cleaning process is gentle yet thorough, preserving your garments while removing stains and odors. We inspect every item and treat spots individually for the best results.",
      featured: true,
      icon: "sparkles",
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=600&fit=crop",
    },
    {
      id: "wedding-gowns",
      name: "Wedding Gown Services",
      slug: "wedding-gowns",
      description: "Delicate alterations and preservation for your most important dress.",
      longDescription: "Your wedding gown deserves special attention. We offer expert alterations to ensure a perfect fit, plus professional cleaning and preservation to keep your dress beautiful for years to come.",
      featured: true,
      icon: "heart",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    },
    {
      id: "suits-tuxedos",
      name: "Suits & Tuxedos",
      slug: "suits-tuxedos",
      description: "Professional pressing, tailoring, and care for men's formal wear.",
      longDescription: "From minor adjustments to complete tailoring, we make sure your suits and tuxedos fit perfectly and look their best. We handle everything from lapel adjustments to complete restyling.",
      featured: true,
      icon: "briefcase",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=600&fit=crop",
    },
    {
      id: "leather-suede",
      name: "Leather & Suede",
      slug: "leather-suede",
      description: "Specialized cleaning and conditioning for leather and suede garments.",
      longDescription: "Leather and suede require special care. Our cleaning process removes dirt and stains while conditioning the material to keep it soft and supple.",
      featured: false,
      icon: "layers",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop",
    },
    {
      id: "household",
      name: "Household Items",
      slug: "household",
      description: "Drapes, linens, comforters, and more. Bring it in for a custom quote.",
      longDescription: "We clean and care for household textiles including drapes, curtains, bedding, tablecloths, and more. Each item is assessed individually to determine the best cleaning approach.",
      featured: false,
      icon: "home",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    },
  ],
};

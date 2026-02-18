/**
 * Smart Service Estimator types
 * Adapts questions based on service type
 */

export interface EstimatorQuestion {
  id: string;
  question: string;
  type: "select" | "radio" | "input" | "textarea";
  options?: { value: string; label: string; pricingImpact?: number }[];
  placeholder?: string;
  required?: boolean;
}

export interface EstimatorConfig {
  serviceId: string;
  questions: EstimatorQuestion[];
  basePriceRange?: {
    min: number;
    max: number;
  };
}

export interface EstimatorData {
  serviceId: string;
  answers: Record<string, string>;
  contactInfo?: {
    name: string;
    email: string;
    phone: string;
  };
}

// Default question sets for Chase Cleaners services
export const defaultEstimatorQuestions: Record<string, EstimatorQuestion[]> = {
  alterations: [
    {
      id: "garment-type",
      question: "What type of garment?",
      type: "radio",
      required: true,
      options: [
        { value: "pants", label: "Pants/Jeans", pricingImpact: 0 },
        { value: "shirt", label: "Shirt/Blouse", pricingImpact: 0 },
        { value: "dress", label: "Dress", pricingImpact: 0.3 },
        { value: "jacket", label: "Jacket/Blazer", pricingImpact: 0.5 },
        { value: "suit", label: "Full Suit", pricingImpact: 0.8 },
      ],
    },
    {
      id: "alteration-type",
      question: "What needs to be done?",
      type: "radio",
      required: true,
      options: [
        { value: "hem", label: "Hemming", pricingImpact: 0 },
        { value: "take-in", label: "Take in/Let out", pricingImpact: 0.3 },
        { value: "sleeves", label: "Shorten sleeves", pricingImpact: 0.2 },
        { value: "zipper", label: "Zipper replacement", pricingImpact: 0.1 },
        { value: "multiple", label: "Multiple alterations", pricingImpact: 0.6 },
      ],
    },
    {
      id: "timeline",
      question: "When do you need it?",
      type: "radio",
      required: true,
      options: [
        { value: "standard", label: "Standard (3-5 days)" },
        { value: "soon", label: "Soon (2-3 days)" },
        { value: "rush", label: "Rush/Same-day (+50%)", pricingImpact: 0.5 },
      ],
    },
  ],
  "dry-cleaning": [
    {
      id: "item-type",
      question: "What are you bringing in?",
      type: "radio",
      required: true,
      options: [
        { value: "shirts", label: "Shirts/Blouses", pricingImpact: 0 },
        { value: "pants", label: "Pants/Trousers", pricingImpact: 0.2 },
        { value: "suit", label: "Suit", pricingImpact: 0.5 },
        { value: "dress", label: "Dress", pricingImpact: 0.4 },
        { value: "coat", label: "Coat/Jacket", pricingImpact: 0.6 },
        { value: "other", label: "Other items", pricingImpact: 0.3 },
      ],
    },
    {
      id: "quantity",
      question: "How many items?",
      type: "select",
      required: true,
      options: [
        { value: "1-2", label: "1-2 items", pricingImpact: 0 },
        { value: "3-5", label: "3-5 items", pricingImpact: 1 },
        { value: "6-10", label: "6-10 items", pricingImpact: 2 },
        { value: "10+", label: "10+ items", pricingImpact: 3 },
      ],
    },
    {
      id: "timeline",
      question: "When do you need it?",
      type: "radio",
      required: true,
      options: [
        { value: "standard", label: "Standard (2-3 days)" },
        { value: "rush", label: "Rush/Same-day (+50%)", pricingImpact: 0.5 },
      ],
    },
  ],
  "wedding-gowns": [
    {
      id: "service-type",
      question: "What service do you need?",
      type: "radio",
      required: true,
      options: [
        { value: "cleaning", label: "Cleaning only", pricingImpact: 0 },
        { value: "alterations", label: "Alterations only", pricingImpact: 0.2 },
        { value: "both", label: "Cleaning + Alterations", pricingImpact: 0.5 },
        { value: "preservation", label: "Cleaning + Preservation", pricingImpact: 0.3 },
      ],
    },
    {
      id: "dress-style",
      question: "What style is the dress?",
      type: "radio",
      required: true,
      options: [
        { value: "simple", label: "Simple/A-line", pricingImpact: 0 },
        { value: "beaded", label: "Beaded/Embellished", pricingImpact: 0.3 },
        { value: "train", label: "Long train", pricingImpact: 0.2 },
        { value: "elaborate", label: "Elaborate (ballgown, heavy beading)", pricingImpact: 0.5 },
      ],
    },
    {
      id: "timeline",
      question: "When is the event?",
      type: "radio",
      required: true,
      options: [
        { value: "month+", label: "More than a month away" },
        { value: "2-4weeks", label: "2-4 weeks away" },
        { value: "soon", label: "Less than 2 weeks (rush fee may apply)", pricingImpact: 0.3 },
      ],
    },
  ],
  "suits-tuxedos": [
    {
      id: "service-type",
      question: "What do you need?",
      type: "radio",
      required: true,
      options: [
        { value: "cleaning", label: "Dry cleaning only", pricingImpact: 0 },
        { value: "pressing", label: "Pressing only", pricingImpact: -0.2 },
        { value: "alterations", label: "Alterations", pricingImpact: 0.5 },
        { value: "full-service", label: "Cleaning + Alterations", pricingImpact: 0.8 },
      ],
    },
    {
      id: "pieces",
      question: "How many pieces?",
      type: "radio",
      required: true,
      options: [
        { value: "jacket", label: "Jacket only", pricingImpact: 0 },
        { value: "2piece", label: "2-piece suit", pricingImpact: 0.3 },
        { value: "3piece", label: "3-piece suit", pricingImpact: 0.5 },
      ],
    },
    {
      id: "timeline",
      question: "When do you need it?",
      type: "radio",
      required: true,
      options: [
        { value: "standard", label: "Standard (3-5 days)" },
        { value: "rush", label: "Rush (+50%)", pricingImpact: 0.5 },
      ],
    },
  ],
  "leather-suede": [
    {
      id: "item-type",
      question: "What type of item?",
      type: "radio",
      required: true,
      options: [
        { value: "jacket", label: "Jacket/Coat", pricingImpact: 0 },
        { value: "pants", label: "Pants", pricingImpact: -0.1 },
        { value: "bag", label: "Bag/Purse", pricingImpact: -0.2 },
        { value: "shoes", label: "Shoes/Boots", pricingImpact: -0.3 },
        { value: "other", label: "Other", pricingImpact: 0 },
      ],
    },
    {
      id: "material",
      question: "What material?",
      type: "radio",
      required: true,
      options: [
        { value: "leather", label: "Leather", pricingImpact: 0 },
        { value: "suede", label: "Suede", pricingImpact: 0.2 },
        { value: "nubuck", label: "Nubuck", pricingImpact: 0.2 },
      ],
    },
    {
      id: "condition",
      question: "Current condition?",
      type: "radio",
      required: true,
      options: [
        { value: "good", label: "Good (regular cleaning)", pricingImpact: 0 },
        { value: "stained", label: "Stained/Spots", pricingImpact: 0.3 },
        { value: "worn", label: "Worn/Needs conditioning", pricingImpact: 0.4 },
      ],
    },
  ],
  household: [
    {
      id: "item-type",
      question: "What item?",
      type: "radio",
      required: true,
      options: [
        { value: "comforter", label: "Comforter/Duvet", pricingImpact: 0 },
        { value: "drapes", label: "Drapes/Curtains", pricingImpact: 0.5 },
        { value: "linens", label: "Table linens", pricingImpact: -0.2 },
        { value: "pillows", label: "Pillows", pricingImpact: -0.3 },
        { value: "other", label: "Other", pricingImpact: 0 },
      ],
    },
    {
      id: "size",
      question: "What size?",
      type: "radio",
      required: true,
      options: [
        { value: "small", label: "Small (Twin/Standard)", pricingImpact: 0 },
        { value: "medium", label: "Medium (Full/Queen)", pricingImpact: 0.3 },
        { value: "large", label: "Large (King/Oversized)", pricingImpact: 0.5 },
      ],
    },
  ],
  default: [
    {
      id: "description",
      question: "Tell us about your garment",
      type: "textarea",
      placeholder: "Describe what you need done...",
      required: true,
    },
    {
      id: "timeline",
      question: "When do you need it?",
      type: "radio",
      required: true,
      options: [
        { value: "standard", label: "Standard turnaround" },
        { value: "rush", label: "Rush (if possible)", pricingImpact: 0.5 },
      ],
    },
  ],
};

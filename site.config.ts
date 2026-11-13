import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "SNS Precision Detailing",
  tagline: "Premium mobile detailing for cars and commercial trucks.",
  category: "Mobile auto detailing",
  schemaType: "LocalBusiness",
  area: "Scarborough, Oshawa, Georgina and the GTA, ON",
  siteUrl: "https://sns-precision-detailing-ca.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#1a5fbf" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Mobile across Scarborough, Oshawa, Georgina and the GTA",
    headline: "Precision detailing for cars and trucks",
    subhead: "Basic cleaning, premium deep cleaning and commercial vehicle detailing. Send a message or call 416-770-2887 to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "An Audi S5 detailed by SNS Precision Detailing", width: 706, height: 1254 },
      { src: "/images/post-8.jpg", alt: "An Audi A5 S Line detailed by SNS Precision Detailing", width: 706, height: 1254 },
      { src: "/images/post-2.jpg", alt: "A Peterbilt dump truck detailed by SNS Precision Detailing", width: 706, height: 1254 },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/snsprecisiondetailing" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Premium mobile detailing",
    "Cars and commercial trucks",
    "Basic cleaning and premium deep clean packages",
    "Scarborough, Oshawa, Georgina and the GTA",
  ],

  about: {
    title: "Welcome to SNS Precision Detailing",
    body: [
      "SNS Precision Detailing is a mobile detailing service covering Scarborough, Oshawa, Georgina and the GTA. Work includes everyday vehicles and heavy duty commercial trucks, from a basic clean to a premium deep clean.",
      "Captions also describe a signature SNS Treatment as a full interior deep clean with a premium exterior wash. Send a message on Instagram or call 416-770-2887 to book.",
    ],
    image: { src: "/images/post-1.jpg", alt: "An Audi S5 detailed by SNS Precision Detailing", width: 706, height: 1254 },
  },

  menu: {
    label: "Services",
    title: "Detailing packages",
    intro: "Prices start at the amounts below. Final pricing depends on vehicle size and condition.",
    variant: "list",
    showPrices: true,
    priceNote: "Prices starting at. Final pricing depends on vehicle size and condition.",
    groups: [
      {
        title: "Basic cleaning",
        note: "Exterior wash, interior vacuum, mat wash, dashboard clean, wipe windows and cupholders",
        items: [
          { name: "Sedan or small SUV", price: "$75" },
          { name: "SUV, pickup or minivan", price: "$100" },
        ],
      },
      {
        title: "Premium deep clean",
        note: "Includes the basic clean, plus stain removal and steam wash for floors and seats, and a deep interior refresh",
        items: [
          { name: "Sedan or small SUV", price: "$200" },
          { name: "SUV, pickup or minivan", price: "$225" },
        ],
      },
      {
        title: "Commercial vehicle detailing",
        items: [
          { name: "Trucks with bed", price: "$275" },
          { name: "Dump trucks", price: "$195" },
          { name: "Cargo vans", price: "$210" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-1.jpg", width: 706, height: 1254, alt: "An Audi S5 detailed by SNS Precision Detailing", caption: "Audi S5", href: "https://www.instagram.com/reel/DfaT0s0vimR/" },
      { src: "/images/post-8.jpg", width: 706, height: 1254, alt: "An Audi A5 S Line detailed by SNS Precision Detailing", caption: "Audi A5 S Line", href: "https://www.instagram.com/reel/DfPoGN2B8CM/" },
      { src: "/images/post-7.jpg", width: 816, height: 1448, alt: "An Audi A4 S Line detailed by SNS Precision Detailing", caption: "Audi A4 S Line", href: "https://www.instagram.com/reel/DfPo18-BUfc/" },
      { src: "/images/post-6.jpg", width: 706, height: 1254, alt: "A 2014 Honda Accord after the SNS Treatment", caption: "Honda Accord", href: "https://www.instagram.com/reel/DfPpsXlhWRA/" },
      { src: "/images/post-2.jpg", width: 706, height: 1254, alt: "A Peterbilt dump truck detailed by SNS Precision Detailing", caption: "Peterbilt dump truck", href: "https://www.instagram.com/reel/DfXXtg9hyCQ/" },
      { src: "/images/post-5.jpg", width: 706, height: 1254, alt: "A Kenworth dump truck interior detailed by SNS Precision Detailing", caption: "Kenworth dump truck", href: "https://www.instagram.com/reel/DfPqqaShiWv/" },
      { src: "/images/post-9.jpg", width: 706, height: 1254, alt: "A Ford Transit interior detailed by SNS Precision Detailing", caption: "Ford Transit", href: "https://www.instagram.com/reel/DfPmsErhOvu/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "snsprecisiondetailing",
    embeds: ["https://www.instagram.com/reel/DfaT0s0vimR/", "https://www.instagram.com/p/DfXNalIhrBD/", "https://www.instagram.com/reel/DfPpsXlhWRA/"],
  },

  order: {
    label: "How to book",
    title: "Book with a DM or a call",
    intro: "Send a message on Instagram, or call 416-770-2887, with your vehicle, the package you want and your preferred date.",
    dmMessage: "Hi SNS Precision Detailing! I would like to book.\nVehicle:\nPackage (basic, premium deep clean or commercial):\nPreferred date:\nLocation in Scarborough, Oshawa, Georgina or the GTA:",
    headerCtaLabel: "DM to book",
    links: [
      { label: "DM to book", href: "https://ig.me/m/snsprecisiondetailing" },
      { label: "Call 416-770-2887", href: "tel:+14167702887" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram, or call 416-770-2887." },
    { q: "Where do you work?", a: "The service is mobile across Scarborough, Oshawa, Georgina and the GTA." },
    { q: "Do you detail trucks as well as cars?", a: "Yes. Packages cover sedans, SUVs, pickups and minivans, as well as commercial trucks with a bed, dump trucks and cargo vans." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough, Oshawa, Georgina and the GTA, Ontario",
    phone: "416-770-2887",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/snsprecisiondetailing/" }],
  },

  seo: {
    title: "SNS Precision Detailing | Mobile detailing in Scarborough and the GTA",
    description: "Mobile auto detailing in Scarborough, Oshawa, Georgina and the GTA, for cars and commercial trucks. DM or call 416-770-2887 to book a detail.",
    keywords: ["mobile detailing Scarborough", "truck detailing GTA", "SNS Precision Detailing"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

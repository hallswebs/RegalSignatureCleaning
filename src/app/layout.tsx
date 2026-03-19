import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://regalsignaturecleaning.co.uk"),
  title: {
    default: "Regal Signature Cleaning | Premium Residential Cleaning Services in Windsor & Berkshire",
    template: "%s | Regal Signature Cleaning",
  },
  description:
    "Professional residential cleaning services in Windsor, Berkshire & surrounding areas. Deep cleaning, regular home cleaning, move-in/move-out cleans. Fully insured, eco-friendly products. Get a free quote today!",
  keywords: [
    "cleaning",
    "cleaning service Windsor",
    "house cleaning Berkshire",
    "residential cleaning Windsor",
    "deep cleaning service",
    "home cleaners near me",
    "professional cleaners Windsor",
    "domestic cleaning Berkshire",
    "move in cleaning",
    "move out cleaning",
    "eco-friendly cleaning service",
    "regular home cleaning",
    "one-off deep clean",
  ],
  authors: [{ name: "Regal Signature Cleaning" }],
  creator: "Regal Signature Cleaning",
  publisher: "Regal Signature Cleaning",
  formatDetection: {
    email: false,
    telephone: true,
  },
  openGraph: {
    title: "Regal Signature Cleaning | Premium Residential Cleaning",
    description: "Professional home cleaning services in Windsor & Berkshire. Fully insured, eco-friendly, satisfaction guaranteed. Get your free quote!",
    url: "https://regalsignaturecleaning.co.uk",
    siteName: "Regal Signature Cleaning",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Regal Signature Cleaning Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regal Signature Cleaning | Premium Residential Cleaning",
    description: "Professional home cleaning services in Windsor & Berkshire. Get your free quote today!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  alternates: {
    canonical: "https://regalsignaturecleaning.co.uk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://regalsignaturecleaning.co.uk",
  name: "Regal Signature Cleaning",
  description: "Premium residential cleaning services in Windsor, Berkshire and surrounding areas. Professional deep cleaning, regular home cleaning, and move-in/move-out services.",
  url: "https://regalsignaturecleaning.co.uk",
  telephone: "+447544886142",
  email: "regalsignaturegroupltd@gmail.com",
  image: "https://regalsignaturecleaning.co.uk/logo.png",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windsor",
    addressRegion: "Berkshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4791,
    longitude: -0.6095,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Windsor",
    },
    {
      "@type": "AdministrativeArea",
      name: "Berkshire",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "22:00",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Essential Clean",
          description: "Regular maintenance cleaning for busy homes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Signature Clean",
          description: "Thorough, detailed cleaning throughout your home",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Clean",
          description: "Comprehensive top-to-bottom cleaning for complete refresh",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

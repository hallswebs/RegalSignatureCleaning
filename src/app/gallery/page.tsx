import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cleaning Results Gallery - Before & After",
  description:
    "See our professional cleaning results. Browse photos of spotless kitchens, bathrooms, and living spaces we've cleaned across Windsor & Berkshire homes.",
  keywords: ["cleaning before after", "professional cleaning results", "house cleaning photos", "deep clean results"],
  openGraph: {
    title: "Our Cleaning Results | Regal Signature Cleaning",
    description: "See the standard of cleanliness we deliver to homes across Windsor & Berkshire.",
  },
  alternates: {
    canonical: "https://regalsignaturecleaning.co.uk/gallery",
  },
};

const galleryItems = [
  {
    title: "Elegant Kitchen",
    category: "Kitchen",
    description: "Spotless surfaces, gleaming countertops, and immaculate appliances — the heart of the home deserves nothing less.",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
  },
  {
    title: "Luxury Bathroom",
    category: "Bathroom",
    description: "Pristine tiles, sparkling fixtures, and a fresh, hygienic space ready to impress.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    title: "Living Room Refresh",
    category: "Living Space",
    description: "Dust-free surfaces, plumped cushions, and a welcoming atmosphere for family and guests.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    title: "Contemporary Kitchen",
    category: "Kitchen",
    description: "Clean lines, polished surfaces, and attention to every detail in a modern family kitchen.",
    image: "/image2.jpeg",
  },
  {
    title: "Master Bedroom",
    category: "Bedroom",
    description: "Fresh linens, dust-free surfaces, and a serene space for restful sleep.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    title: "Spa-Like Bathroom",
    category: "Bathroom",
    description: "Immaculate marble, gleaming chrome, and that just-cleaned freshness.",
    image: "/image4.png",
  },
  {
    title: "Bright Open Plan",
    category: "Living Space",
    description: "Spotless floors, streak-free glass, and every surface shining throughout the space.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Guest Suite",
    category: "Bedroom",
    description: "Hotel-quality cleanliness for visiting family and friends — first impressions matter.",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
  },
  {
    title: "Premium Finishes",
    category: "Deep Clean",
    description: "Detailed cleaning that brings out the beauty in quality fixtures and finishes.",
    image: "/image5.jpeg",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Gallery Grid */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="card-hover group rounded-2xl overflow-hidden bg-white border border-gray-100"
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-navy/40 text-sm">
              Want to see your space transformed?{" "}
              <a href="/contact" className="text-gold font-semibold hover:underline">
                Get a free quote
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Regal Signature Cleaning",
  description:
    "See our work in action. Browse photos showcasing the standard of cleanliness we deliver to homes across Windsor and Berkshire.",
};

const galleryItems = [
  {
    title: "Elegant Kitchen",
    category: "Kitchen",
    description: "Spotless surfaces, gleaming countertops, and immaculate appliances — the heart of the home deserves nothing less.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Project <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse into the standard of cleanliness we deliver to homes
            across Windsor and Berkshire.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <span className="bg-navy text-white px-5 py-2 rounded-full text-sm font-medium">
              All Projects
            </span>
            <span className="bg-cream text-navy/70 px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-navy transition-colors cursor-pointer">
              Kitchen
            </span>
            <span className="bg-cream text-navy/70 px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-navy transition-colors cursor-pointer">
              Bathroom
            </span>
            <span className="bg-cream text-navy/70 px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-navy transition-colors cursor-pointer">
              Living Space
            </span>
            <span className="bg-cream text-navy/70 px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-navy transition-colors cursor-pointer">
              Bedroom
            </span>
          </div>

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

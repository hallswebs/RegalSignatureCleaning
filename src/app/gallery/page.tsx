import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Regal Signature Cleaning",
  description:
    "See our work in action. Browse before and after photos of our residential and commercial cleaning projects.",
};

const galleryItems = [
  {
    title: "Modern Kitchen Deep Clean",
    category: "Residential",
    description: "Complete kitchen transformation including appliance detailing, grout cleaning, and surface polish.",
    color: "from-gold/20 to-gold/5",
  },
  {
    title: "Executive Office Suite",
    category: "Commercial",
    description: "Daily upkeep of a 5,000 sq ft office space with conference rooms and open-plan workspace.",
    color: "from-navy/20 to-navy/5",
  },
  {
    title: "Master Bathroom Refresh",
    category: "Residential",
    description: "Tile scrubbing, fixture polishing, and glass shower restoration to a sparkling finish.",
    color: "from-gold/20 to-gold/5",
  },
  {
    title: "Retail Storefront",
    category: "Commercial",
    description: "Weekly cleaning of a high-traffic fashion retail space including display and stock areas.",
    color: "from-navy/20 to-navy/5",
  },
  {
    title: "Move-Out Deep Clean",
    category: "Residential",
    description: "Comprehensive cleaning of a 3-bedroom apartment for deposit return — every detail covered.",
    color: "from-gold/20 to-gold/5",
  },
  {
    title: "Post-Construction Cleanup",
    category: "Commercial",
    description: "Full debris removal, dust elimination, and final polish for a newly renovated office building.",
    color: "from-navy/20 to-navy/5",
  },
  {
    title: "Open-Plan Living Room",
    category: "Residential",
    description: "Carpet deep-cleaning, upholstery treatment, and full surface dusting in a family home.",
    color: "from-gold/20 to-gold/5",
  },
  {
    title: "Medical Office",
    category: "Commercial",
    description: "Sanitized cleaning meeting healthcare standards for a multi-room medical practice.",
    color: "from-navy/20 to-navy/5",
  },
  {
    title: "Luxury Condo Showcase",
    category: "Residential",
    description: "Premium staging-level clean for real estate showing — windows, floors, and every surface gleaming.",
    color: "from-gold/20 to-gold/5",
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
            Every space has a story. Here&apos;s a look at some of the homes and businesses
            we&apos;ve transformed with our signature cleaning service.
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
              Residential
            </span>
            <span className="bg-cream text-navy/70 px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-navy transition-colors cursor-pointer">
              Commercial
            </span>
          </div>

          {/* Gallery grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="card-hover group rounded-2xl overflow-hidden bg-white border border-gray-100"
              >
                {/* Placeholder image area */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="text-center px-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/50 flex items-center justify-center mb-4">
                      {item.category === "Residential" ? (
                        <svg className="w-8 h-8 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                    </div>
                    <p className="text-navy/30 text-sm font-medium">
                      Add your photo here
                    </p>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/80 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1 rounded-full">
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

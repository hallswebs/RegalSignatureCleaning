import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Regal Signature Cleaning",
  description:
    "Explore our residential cleaning packages — Essential Clean, Signature Clean, and Deep Clean. Tailored services for discerning homeowners across Windsor and Berkshire.",
};

const services = [
  {
    name: "Essential Clean",
    tagline: "Maintenance cleaning for busy homes",
    description: "Perfect for keeping your home fresh between deeper cleans. Ideal for busy households that need regular maintenance to stay on top of the day-to-day.",
    features: [
      "Kitchen surfaces & sink cleaned",
      "Bathroom sanitisation",
      "Vacuuming & mopping all floors",
      "Dusting accessible surfaces",
      "Emptying bins & replacing liners",
      "Bed making",
    ],
    popular: false,
  },
  {
    name: "Signature Clean",
    tagline: "Our standard service",
    description: "Our flagship service delivering a thorough, detailed clean throughout your home. The Regal Signature experience that leaves every room spotless.",
    features: [
      "Everything in Essential, plus:",
      "Full kitchen deep clean",
      "Detailed bathroom cleaning",
      "Dusting all surfaces & fixtures",
      "Skirting boards & door frames",
      "Interior door cleaning",
      "Light switches & handles sanitised",
    ],
    popular: true,
  },
  {
    name: "Deep Clean",
    tagline: "The ultimate clean",
    description: "A comprehensive top-to-bottom clean for when your home needs extra attention. Perfect for seasonal refreshes, move-ins, or a complete reset.",
    features: [
      "Everything in Signature, plus:",
      "Behind & under furniture",
      "Inside cabinets & wardrobes",
      "Light fixtures & vents",
      "Wall spot cleaning",
      "Window sills & tracks",
      "Thorough attention to every detail",
    ],
    popular: false,
  },
];

const addOns = [
  { 
    name: "Oven Clean", 
    description: "Full interior oven deep clean & degrease",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  { 
    name: "Fridge Clean", 
    description: "Interior shelves, drawers & exterior",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  { 
    name: "Interior Windows", 
    description: "Crystal clear windows throughout",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  { 
    name: "Ironing", 
    description: "Freshly pressed clothes ready to wear",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  { 
    name: "Laundry", 
    description: "Wash, dry & fold service",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  { 
    name: "Airbnb Turnover", 
    description: "Complete property reset for guests",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cleaning <span className="text-gradient-gold">Packages</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the service level that suits your home. From regular maintenance 
            to comprehensive deep cleans, we have you covered.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className={`card-hover rounded-2xl p-8 relative ${
                  service.popular
                    ? "bg-navy text-white ring-2 ring-gold"
                    : "bg-cream border border-gray-100"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold mb-2 ${
                    service.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {service.name}
                </h3>

                <p
                  className={`text-sm font-medium mb-4 ${
                    service.popular ? "text-gold" : "text-gold"
                  }`}
                >
                  {service.tagline}
                </p>

                <p
                  className={`text-sm mb-6 ${
                    service.popular ? "text-white/60" : "text-navy/60"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 shrink-0 mt-0.5 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          service.popular ? "text-white/70" : "text-navy/60"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                    service.popular
                      ? "btn-gold"
                      : "border-2 border-navy/20 text-navy hover:border-gold hover:text-gold"
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Customise Your Clean
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-4">
              Service Add-Ons
            </h2>
            <p className="text-navy/60 mt-4 max-w-xl mx-auto">
              Enhance any package with these additional services to meet your specific needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-white rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">
                  {addon.icon}
                </div>
                <h3 className="text-navy font-bold mb-1">{addon.name}</h3>
                <p className="text-navy/60 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get <span className="text-gradient-gold">Started</span>?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Every home is unique. Contact us today for a personalised quote 
            tailored to your requirements.
          </p>
          <Link
            href="/contact"
            className="btn-gold inline-block px-10 py-4 rounded-full text-base font-bold tracking-wide uppercase"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

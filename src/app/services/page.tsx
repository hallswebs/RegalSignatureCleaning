import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing | Regal Signature Cleaning",
  description:
    "Explore our residential and commercial cleaning packages. Transparent pricing, flexible scheduling, and guaranteed satisfaction.",
};

const services = [
  {
    category: "Residential",
    items: [
      {
        name: "Standard Home Cleaning",
        price: "From $120",
        frequency: "Weekly / Bi-weekly / Monthly",
        features: [
          "Kitchen & bathroom deep clean",
          "Vacuuming & mopping all floors",
          "Dusting all surfaces & fixtures",
          "Trash removal & liner replacement",
          "Bed making & linen change",
        ],
        popular: false,
      },
      {
        name: "Premium Home Cleaning",
        price: "From $200",
        frequency: "Weekly / Bi-weekly / Monthly",
        features: [
          "Everything in Standard, plus:",
          "Interior window cleaning",
          "Baseboard & door frame wiping",
          "Appliance exterior deep clean",
          "Closet & pantry organization",
          "Eco-friendly products included",
        ],
        popular: true,
      },
      {
        name: "Deep Cleaning",
        price: "From $300",
        frequency: "One-time / Seasonal",
        features: [
          "Complete top-to-bottom cleaning",
          "Behind & under all furniture",
          "Oven & refrigerator interior",
          "Light fixture & vent cleaning",
          "Wall spot cleaning",
          "Garage & patio sweep",
        ],
        popular: false,
      },
    ],
  },
  {
    category: "Commercial",
    items: [
      {
        name: "Office Cleaning",
        price: "Custom Quote",
        frequency: "Daily / Weekly / Monthly",
        features: [
          "Workspace & desk sanitization",
          "Break room & kitchen cleaning",
          "Restroom deep clean & restock",
          "Floor care (carpet & hard floors)",
          "Trash & recycling management",
        ],
        popular: false,
      },
      {
        name: "Retail & Showroom",
        price: "Custom Quote",
        frequency: "Flexible scheduling",
        features: [
          "Display & fixture dusting",
          "Storefront glass cleaning",
          "Floor polishing & maintenance",
          "Fitting room sanitization",
          "After-hours service available",
        ],
        popular: false,
      },
      {
        name: "Post-Construction",
        price: "Custom Quote",
        frequency: "One-time",
        features: [
          "Dust & debris removal",
          "Window & glass cleaning",
          "Paint overspray cleanup",
          "Fixture & surface polishing",
          "Final deep clean for occupancy",
        ],
        popular: false,
      },
    ],
  },
];

const addOns = [
  { name: "Interior Windows", price: "+$40" },
  { name: "Oven Deep Clean", price: "+$35" },
  { name: "Fridge Deep Clean", price: "+$30" },
  { name: "Laundry (wash, dry, fold)", price: "+$25" },
  { name: "Garage Cleaning", price: "+$50" },
  { name: "Organizing (per room)", price: "+$45" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Services & Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cleaning <span className="text-gradient-gold">Packages</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the package that fits your
            needs, or let us create a custom plan for you.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((category) => (
        <section
          key={category.category}
          className={`py-24 ${category.category === "Residential" ? "bg-white" : "bg-cream"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
                {category.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-4">
                {category.category} Cleaning
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((service) => (
                <div
                  key={service.name}
                  className={`card-hover rounded-2xl p-8 relative ${
                    service.popular
                      ? "bg-navy text-white ring-2 ring-gold"
                      : "bg-white border border-gray-100"
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
                    className={`text-xl font-bold mb-2 ${
                      service.popular ? "text-white" : "text-navy"
                    }`}
                  >
                    {service.name}
                  </h3>

                  <div className="mb-1">
                    <span
                      className={`text-3xl font-bold ${
                        service.popular ? "text-gold" : "text-gradient-gold"
                      }`}
                    >
                      {service.price}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-6 ${
                      service.popular ? "text-white/50" : "text-navy/50"
                    }`}
                  >
                    {service.frequency}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            service.popular ? "text-gold" : "text-gold"
                          }`}
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
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Add-Ons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Customize
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-4">
              Service Add-Ons
            </h2>
            <p className="text-navy/60 mt-4 max-w-xl mx-auto">
              Enhance any package with these additional services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between bg-cream rounded-xl px-6 py-4"
              >
                <span className="text-navy font-medium">{addon.name}</span>
                <span className="text-gold font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a <span className="text-gradient-gold">Custom Quote</span>?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Every space is unique. Contact us for a personalized cleaning plan
            and free estimate tailored to your needs.
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

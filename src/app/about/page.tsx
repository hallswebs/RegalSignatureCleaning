import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Regal Signature Cleaning",
  description:
    "Learn about Regal Signature Cleaning — our story, mission, and the dedicated team behind our premium cleaning services.",
};

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Integrity",
    description: "Every team member is background-checked and fully insured. Your home and property are in safe hands.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Excellence",
    description: "We don't just clean — we transform spaces. Our meticulous approach ensures nothing is overlooked.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Care & Respect",
    description: "We treat every space like it's our own, using eco-friendly products that are safe for your family and pets.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community",
    description: "We're proud to serve our local community and build lasting relationships with every client.",
  },
];

const team = [
  {
    name: "The Founders",
    role: "Owners & Operators",
    bio: "With a shared passion for service and detail, our founders built Regal Signature Cleaning on the belief that everyone deserves a spotless space.",
  },
  {
    name: "Our Cleaning Specialists",
    role: "Expert Technicians",
    bio: "Each specialist undergoes rigorous training to master our signature cleaning methods and exceed client expectations.",
  },
  {
    name: "Client Relations Team",
    role: "Scheduling & Support",
    bio: "Friendly and responsive, our support team ensures booking is seamless and your needs are always heard.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Founded on the principle that cleanliness elevates every environment,
            Regal Signature Cleaning has grown from a small local service to a trusted
            name in residential and commercial cleaning.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-6">
                Elevating Spaces, Enriching Lives
              </h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                At Regal Signature Cleaning, we believe a clean environment is the foundation
                for productivity, comfort, and wellbeing. Our mission is to deliver an
                exceptional standard of cleanliness that transforms how people feel in their
                homes and workplaces.
              </p>
              <p className="text-navy/60 leading-relaxed mb-8">
                What began as a commitment to helping neighbors maintain beautiful homes has
                grown into a comprehensive cleaning company serving both residential and
                commercial clients. Through it all, our core values have remained the same:
                quality, trust, and attention to every detail.
              </p>
              <Link
                href="/contact"
                className="btn-gold inline-block px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase"
              >
                Get in Touch
              </Link>
            </div>

            <div className="relative">
              <div className="bg-cream rounded-3xl p-10">
                <div className="space-y-8">
                  {[
                    { year: "Year 1", text: "Started with residential cleaning in the local community." },
                    { year: "Year 2", text: "Expanded to commercial spaces and hired our first team." },
                    { year: "Year 3", text: "Earned 100+ five-star reviews from satisfied clients." },
                    { year: "Today", text: "Serving 500+ clients with a growing team of specialists." },
                  ].map((milestone, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-gold" />
                        {i < 3 && <div className="w-0.5 h-full bg-gold/20 mt-2" />}
                      </div>
                      <div>
                        <div className="text-gold font-semibold text-sm">{milestone.year}</div>
                        <p className="text-navy/60 mt-1">{milestone.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="card-hover bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-4">
              The People Behind the Shine
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card-hover bg-cream rounded-2xl p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gold/20 flex items-center justify-center text-gold text-2xl font-bold mb-5">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-4">{member.role}</p>
                <p className="text-navy/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the <span className="text-gradient-gold">Regal Difference</span>?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their homes and businesses.
          </p>
          <Link
            href="/contact"
            className="btn-gold inline-block px-10 py-4 rounded-full text-base font-bold tracking-wide uppercase"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Regular Home Cleaning",
    description: "Thorough home cleaning tailored to your lifestyle. Weekly, bi-weekly, or monthly visits to keep your space spotless.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Deep Cleaning",
    description: "Intensive top-to-bottom cleaning for a fresh start. Ideal for seasonal refreshes and special occasions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Move-In / Move-Out",
    description: "Make your move stress-free with our comprehensive cleaning before you settle in or after you leave.",
  },
];

const testimonials = [
  {
    name: "Billy Richardson",
    role: "Google Review",
    text: "Brilliant service from the guys at Regal Signature Cleaning. Turned up on time, worked hard, and made the place look brand new. Won't use anyone else.",
    stars: 5,
  },
  {
    name: "Sean Kelleway",
    role: "Google Review",
    text: "Unbelievable service from the guys! They carried out a full deep clean throughout my property and I was amazed at how good of a job they done. Top team, super friendly and very professional. HIGHLY RECOMMEND, 10/10 service!!",
    stars: 5,
  },
  {
    name: "Andrew Hall",
    role: "Google Review",
    text: "Really reliable cleaning service in Windsor. The team did an excellent deep clean and paid great attention to detail. Highly recommend.",
    stars: 5,
  },
];

const highlights = [
  { icon: "sparkles", label: "Meticulous Attention to Detail" },
  { icon: "shield", label: "Fully Insured & Vetted" },
  { icon: "leaf", label: "Eco-Friendly Products" },
  { icon: "clock", label: "Flexible Scheduling" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/70" />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="animate-fade-in-up">
            <span className="inline-block text-gold text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6 border border-gold/30 px-6 py-2 rounded-full">
              Premium Cleaning Services
            </span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-200 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            A Spotless Space,{" "}
            <span className="text-gradient-gold">Signature Style</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-400 text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            The trusted choice for premium home cleaning across Windsor, Maidenhead, Eton, Ascot and surrounding areas.
          </p>

          <div className="animate-fade-in-up animate-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gold px-10 py-4 rounded-full text-base font-bold tracking-wide uppercase"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 rounded-full text-base font-medium tracking-wide uppercase text-white border-2 border-white/20 hover:border-gold hover:text-gold transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon === "sparkles" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
                    {item.icon === "shield" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {item.icon === "leaf" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
                    {item.icon === "clock" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>
                <div className="text-navy/70 text-sm font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-4 mb-6">
              Our Cleaning Services
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              From weekly maintenance to deep seasonal cleans, we provide tailored home cleaning
              solutions that exceed expectations every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-8 text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-navy/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8">
                The Regal{" "}
                <span className="text-gradient-gold">Difference</span>
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Trusted Professionals",
                    desc: "Background-checked, insured, and rigorously trained team members.",
                  },
                  {
                    title: "Eco-Friendly Products",
                    desc: "Safe for your family, pets, and the planet—without compromising results.",
                  },
                  {
                    title: "Flexible Scheduling",
                    desc: "One-time, weekly, bi-weekly, or monthly plans that fit your life.",
                  },
                  {
                    title: "Satisfaction Guaranteed",
                    desc: "Your happiness is our highest priority. We won't rest until your home shines.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-white/50 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-navy-light rounded-3xl p-10 border border-gold/10">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Fully Insured &amp; Bonded
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    Your peace of mind is our priority. We carry full liability insurance
                    and bonding so you can rest easy knowing your property is protected.
                  </p>
                </div>
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-gold rounded-bl-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-4 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover bg-white rounded-2xl p-8 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-navy/70 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-navy/50 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
            Ready for a{" "}
            <span className="text-gradient-gold">Spotless Space</span>?
          </h2>
          <p className="text-navy/60 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. Let us show you why
            Regal Signature Cleaning is the trusted choice for homeowners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gold px-10 py-4 rounded-full text-base font-bold tracking-wide uppercase"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+447544886142"
              className="flex items-center gap-2 px-10 py-4 rounded-full text-base font-medium text-navy border-2 border-navy/20 hover:border-gold hover:text-gold transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07544 886142
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

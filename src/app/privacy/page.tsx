import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Regal Signature Cleaning - how we collect, use, and protect your personal data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-16">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-navy/80">
            
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Introduction</h2>
            <p>
              Regal Signature Cleaning (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our cleaning services.
            </p>
            <p>
              We are registered and operate in the United Kingdom and comply with the UK General Data Protection 
              Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number</li>
              <li><strong>Property Information:</strong> Address and property details for service delivery</li>
              <li><strong>Communication Data:</strong> Messages you send us via our contact form, email, or WhatsApp</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information (collected automatically)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide quotes and respond to your enquiries</li>
              <li>Deliver our cleaning services</li>
              <li>Communicate with you about appointments and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> When you submit a contact form or subscribe to communications</li>
              <li><strong>Contract:</strong> To provide services you have requested</li>
              <li><strong>Legitimate Interests:</strong> To improve our services and respond to enquiries</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Such as Web3Forms (for form submissions) who process data on our behalf</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined 
              in this policy, typically for up to 6 years after our last interaction, unless a longer retention 
              period is required by law.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Restrict Processing:</strong> Request limitation of how we use your data</li>
              <li><strong>Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:regalsignaturegroupltd@gmail.com" className="text-gold hover:underline">
                regalsignaturegroupltd@gmail.com
              </a>
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Cookies</h2>
            <p>
              Our website uses essential cookies to ensure proper functionality. We may also use analytics 
              cookies to understand how visitors use our site. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data 
              against unauthorised access, alteration, disclosure, or destruction. However, no internet 
              transmission is completely secure.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, contact us:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> regalsignaturegroupltd@gmail.com</li>
              <li><strong>Phone:</strong> 07544 886142</li>
            </ul>
            <p className="mt-4">
              You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) 
              at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">ico.org.uk</a>
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/contact" className="text-gold font-semibold hover:underline">
                ← Back to Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

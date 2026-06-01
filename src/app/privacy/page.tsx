import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Lavendra Beauty Lounge",
  description: "Privacy Policy for Lavendra Beauty Lounge. Learn how we collect, protect, and handle your information in accordance with our luxury service standards.",
  alternates: {
    canonical: "https://www.lavendrabeauty.lk/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "June 2026";

  return (
    <main className="w-full bg-background min-h-screen text-foreground/80 pt-28 pb-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col">
        {/* Breadcrumb / Back Link */}
        <Link 
          href="/" 
          className="text-primary text-sm font-medium tracking-wider hover:underline mb-8 uppercase flex items-center gap-1.5"
        >
          ← Return to Lounge
        </Link>

        {/* Header */}
        <h1 className="font-serif text-3xl md:text-4xl text-primary font-bold tracking-wider mb-2 uppercase">
          Privacy Policy
        </h1>
        <p className="text-foreground/50 text-sm tracking-wide mb-12 font-light">
          Last Updated: {lastUpdated}
        </p>

        {/* Content */}
        <div className="flex flex-col gap-8 text-[0.95rem] font-light leading-relaxed text-foreground/75">
          
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              1. Introduction & Commitment
            </h2>
            <p>
              Welcome to Lavendra Beauty Lounge. We are deeply committed to respecting and protecting the privacy of our valued guests. This Privacy Policy details how we collect, use, store, and safeguard your personal information when you visit our luxury lounge, use our website, or interact with our booking systems.
            </p>
            <p>
              In alignment with our ISO 9001:2015 quality standards, we apply meticulous data handling practices to ensure your serene and therapeutic experience is fully supported by secure and respectful privacy standards.
            </p>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              2. Information We Collect
            </h2>
            <p>
              To offer you custom-crafted beauty transformations and specialized treatments, we collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong>Contact Information:</strong> Your name, phone number, email address, and messaging handle (e.g., WhatsApp details) for scheduling.
              </li>
              <li>
                <strong>Booking & Service History:</strong> Dates of appointments, preferred stylists, treatments received (hair, facials, waxing, nails, massages), and notes on customized formulas.
              </li>
              <li>
                <strong>Health & Sensitivities (Optional):</strong> Client declarations regarding skin sensitivities, allergies, or physical conditions to guarantee the safety of organic facials, waxing, and massage therapies.
              </li>
              <li>
                <strong>Technical Information:</strong> Standard analytics, IP address, and cookie details collected during website interactions to help optimize our online guest experience.
              </li>
            </ul>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              3. How We Use Your Information
            </h2>
            <p>
              Your data is processed strictly for the following purposes:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>To schedule, confirm, modify, or send reminders for your appointments via SMS or WhatsApp.</li>
              <li>To custom-tailor service treatments based on your styling records, skin compatibility, and personal preferences.</li>
              <li>To securely process payments and manage invoices.</li>
              <li>To evaluate and improve our luxury service offerings in alignment with customer feedback.</li>
              <li>To send occasional details on exclusive lounge events or bespoke seasonal packages (only if you opt-in to marketing).</li>
            </ul>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              4. Data Retention & Security
            </h2>
            <p>
              We prioritize the protection of your personal records. We employ secure electronic databases and administrative protocols to prevent unauthorized access, alteration, or disclosure.
            </p>
            <p>
              Client profiles, custom hair color formulas, and skin care profiles are kept only as long as necessary to maintain continuous styling service for your subsequent visits. Sensitive physical health declarations are securely handled and kept strictly confidential.
            </p>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              5. Sharing of Information
            </h2>
            <p>
              <strong>Lavendra Beauty Lounge will never sell, rent, or trade your personal information.</strong> We only share relevant details with trusted third-party service providers (such as digital booking systems and secure payment gateways) strictly necessary to carry out booking transactions and notify you of scheduled services.
            </p>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              6. Your Rights & Choice
            </h2>
            <p>
              You maintain full control over your personal records:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>You may opt-out of styling notifications, SMS reminders, or newsletter circulars at any point by contacting us directly.</li>
              <li>You can request a copy of the styling notes or details we maintain on your behalf, or request that your profile be permanently removed from our databases.</li>
            </ul>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3 mb-8">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              7. Contact Our Lounge
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy standards or how your details are managed, please reach out to us at our main location:
            </p>
            <p className="font-normal mt-2">
              <strong>Lavendra Beauty Lounge</strong><br />
              No. 59/1, Keppetipola Mawatha, Kolonnawa, Sri Lanka<br />
              Tel / WhatsApp: +94 775 201 201<br />
              Email: privacy@lavendrabeauty.lk
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

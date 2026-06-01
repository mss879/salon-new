import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Lavendra Beauty Lounge",
  description: "Terms of Service for Lavendra Beauty Lounge. Review our booking, cancellation, safety, and operational lounge policies to ensure a seamless luxury experience.",
  alternates: {
    canonical: "https://lavendrabeautylounge.com/terms",
  },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-foreground/50 text-sm tracking-wide mb-12 font-light">
          Last Updated: {lastUpdated}
        </p>

        {/* Content */}
        <div className="flex flex-col gap-8 text-[0.95rem] font-light leading-relaxed text-foreground/75">
          
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, booking appointments online, or receiving professional services at <strong>Lavendra Beauty Lounge</strong>, you agree to comply with and be bound by the following terms, conditions, and operational salon policies.
            </p>
            <p>
              These terms are established to preserve a serene, safe, and premium therapeutic atmosphere for all of our valued guests, ensuring the highest caliber of aesthetic and beauty treatments.
            </p>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              2. Booking & Cancellation Policies
            </h2>
            <p>
              To ensure all guests receive timely treatments, we manage styling schedules strictly:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong>Appointment Confirmation:</strong> Appointments can be secured online, via phone, or through WhatsApp. We recommend booking in advance, particularly for specialized premium facials, bridal curation, and complex hair color sessions.
              </li>
              <li>
                <strong>Cancellation Window:</strong> We respectfully request at least <strong>12 hours' notice</strong> for any cancellations or major modifications. This allows us to offer the opening to other guests on our waiting list.
              </li>
              <li>
                <strong>Late Arrivals:</strong> We hold appointments for a maximum of <strong>15 minutes</strong>. If you arrive later, we will make every effort to accommodate you, but your treatment may be shortened or rescheduled to avoid delaying subsequent guests.
              </li>
            </ul>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              3. Client Safety, Health, & Sensitivities
            </h2>
            <p>
              Your health and physical safety are paramount:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong>Consultations & Disclosures:</strong> Guests must inform their service therapist or stylist of any known skin conditions, allergies, chemical sensitivities, recent aesthetic procedures, or physical requirements prior to receiving any facial, waxing, or color service.
              </li>
              <li>
                <strong>Refusal of Service:</strong> In rare cases, if a chemical service or treatment poses a risk to your hair integrity or physical safety, our expert technicians reserve the right to advise against or refuse a service, suggesting safer wellness alternatives.
              </li>
            </ul>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              4. Pricing, Payments, & Services
            </h2>
            <p>
              Our pricing is designed to reflect the premier quality of certified treatments, top-tier organic products, and our stylists' elite craftsmanship:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>All service pricing listed on our menus or online platforms is transparent and subject to change without prior notice depending on length, volume, or custom requirements.</li>
              <li>Final payment is due immediately upon the completion of your treatments at our reception. We accept local and international credit cards, mobile payments, and cash.</li>
            </ul>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              5. Personal Belongings & Liability
            </h2>
            <p>
              Lavendra Beauty Lounge provides a peaceful environment designed for absolute relaxation. While we take pride in maintaining a safe environment, the lounge is not responsible for any loss, theft, or damage to personal items, garments, or jewelry brought into the salon or left unattended during treatments.
            </p>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              6. Professional Atmosphere & Conduct
            </h2>
            <p>
              We are dedicated to fostering a serene and therapeutic space for our community:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>We request that guests respect the quiet comfort of other patrons by keeping phone calls or audio to a polite minimum during their lounge treatments.</li>
              <li>Our team deserves a safe, professional, and courteous workspace. Disrespectful, inappropriate, or abusive conduct toward any staff member or fellow guest will result in immediate termination of the session and refusal of future booking access.</li>
            </ul>
          </section>

          <hr className="border-foreground/10 my-4" />

          <section className="flex flex-col gap-3 mb-8">
            <h2 className="font-serif text-xl text-primary font-semibold tracking-wide uppercase">
              7. Contact Information
            </h2>
            <p>
              For questions, clarifications, or detailed feedback regarding these Terms of Service or our operational lounge policies, please contact our management team:
            </p>
            <p className="font-normal mt-2">
              <strong>Lavendra Beauty Lounge</strong><br />
              No. 59/1, Keppetipola Mawatha, Kolonnawa, Sri Lanka<br />
              Tel / WhatsApp: +94 775 201 201<br />
              Email: guestrelations@lavendrabeautylounge.com
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

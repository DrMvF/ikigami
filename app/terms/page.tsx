export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-6 text-justify leading-relaxed font-cm">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

      <p>
        These terms and conditions apply to all coaching sessions, services, and digital products offered under the brand “Femilienz” by Dr. Miriam von Felbert, including but not limited to the Ikigami App, Ikigai Strategist, and the JERT system.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Scope and Application</h2>
      <p>
        The Ikigami App is distributed via Apple App Store and Google Play Store. By downloading, installing, or using the app, you agree to be bound by these Terms and the respective terms of Apple Inc. and Google LLC.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. In-App Purchases</h2>
      <p>
        Some features and content within the Ikigami App are available through In-App Purchases (IAP). These transactions are processed exclusively by Apple or Google, depending on your device. We do not store or process any payment data. All billing, refund, and cancellation policies for these purchases are governed by the App Store or Google Play Store terms and policies.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Coaching and Digital Services</h2>
      <p>
        Additional coaching sessions and digital services may be offered outside the app under the “Femilienz” brand. All bookings are binding once confirmed in writing. Payment is generally required in advance and may be processed via invoice or Stripe, depending on the agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. No Cancellation Policy</h2>
      <p>
        Coaching sessions and digital services are non-cancellable and non-refundable. Please consider your schedule and commitment carefully before making a purchase or booking.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Intellectual Property</h2>
      <p>
        All content, materials, and reflections provided during or after a session, or within the app, are protected by copyright. Reproduction, distribution, or commercial use without written permission is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Confidentiality</h2>
      <p>
        All personal information shared in the context of coaching or app use is handled with confidentiality. Exceptions apply only in cases of legal obligation.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Disclaimer</h2>
      <p>
        Coaching and in-app content support personal and professional development. They are not a substitute for psychotherapy or medical treatment.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">8. Governing Law</h2>
      <p>
        These terms are governed by the laws of the Federal Republic of Germany. Place of jurisdiction is Hamburg, Germany.
      </p>

      <p className="mt-12 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}

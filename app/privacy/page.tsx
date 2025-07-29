export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm leading-relaxed text-base text-justify">
      <h1 className="text-3xl sm:text-4xl mb-8 font-semibold text-left">Privacy Policy</h1>

      <p className="mb-4">
        We take your privacy seriously. This Privacy Policy describes how “Femilienz” (“we”, “us”, “our”) collects, uses, shares, and protects your personal data via this website, app, and related services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">1. Data Controller</h2>
      <p className="mb-4">
        Dr. Miriam von Felbert<br/>
        Schwanenweg 19, 24558 Henstedt‑Ulzburg, Germany<br/>
        Email: info@ikigami.de
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">2. Data Collected</h2>
      <p className="mb-4">
        • Contact information (name, email) when you subscribe, use the app, book coaching sessions, or send inquiries.<br/>
        • Technical data (IP address, browser, device type) collected anonymously for analytics purposes.<br/>
        • Payment data (via Stripe), and session-related notes (confidential) stored securely.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">3. Purpose & Legal Basis</h2>
      <p className="mb-4">
        We process personal data to provide our services, fulfill app functionality, process payments, communicate with you, and improve our platforms. The legal bases include consent (GDPR Art.6(1)(a)) and performance of contract (Art.6(1)(b)).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">4. Cookies & Analytics</h2>
      <p className="mb-4">
        We use minimal cookies for functionality. For anonymized traffic insights, we use Vercel Analytics. This tool does not use cookies and does not collect personally identifiable information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">5. Data Sharing</h2>
      <p className="mb-4">
        • Stripe (payment processing) – privacy-compliant.<br/>
        • Ghost and CAL – website and booking infrastructure.<br/>
        • You can request removal or export of your data at any time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">6. International Transfers</h2>
      <p className="mb-4">
        Personal data is processed within the EU and via providers like Stripe, whose servers may be located in Europe and the US. GDPR-compliant safeguards such as Standard Contractual Clauses (SCCs) are in place.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">7. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, delete, or restrict processing of your personal data. You may also object to processing or request data portability in accordance with the GDPR.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">8. Data Retention</h2>
      <p className="mb-4">
        We retain data only as long as necessary for contractual purposes, legal compliance, or internal analytics. Upon request, we will erase your data unless legally required to retain it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-left">9. Contact & Complaints</h2>
      <p className="mb-4">
        For questions, access requests, or complaints, contact us at info@ikigami.de.<br/>
        You also have the right to lodge a complaint with the appropriate data protection supervisory authority in Germany.
      </p>

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}

export default function Privacy() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-20">
      <a href="/" className="text-sm mb-8 inline-block hover:underline" style={{ color: 'var(--gold)' }}>← Back to Home</a>
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-10 text-sm" style={{ color: '#555' }}>Last updated: February 2026</p>

      <div className="space-y-8" style={{ color: '#ccc' }}>
        <section>
          <h2 className="text-xl font-bold mb-2 text-white">1. Information We Collect</h2>
          <p>We collect information you provide directly, including name, email, profile information, and payment details when you subscribe to premium features. We also collect usage data such as ride scores, ride times, event participation, location data (GPS), and app interactions.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">2. How We Use Your Information</h2>
          <p>We use your information to provide and improve our services, process transactions, send notifications about events and updates, personalize your experience, and provide location-based features such as weather and nearby events. We never sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">3. Location Data</h2>
          <p>Bullrider.pro collects GPS location data to provide weather information, nearby event discovery, and location-based services. You can disable location services at any time through your device settings, though some features may be limited.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">4. Calendar Integration</h2>
          <p>Bullrider.pro may integrate with Google Calendar to help you manage event schedules. Calendar data is used solely for scheduling purposes and is not shared with third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">5. Data Storage and Security</h2>
          <p>Your data is stored securely using industry-standard encryption. We use Supabase for database management and Stripe for payment processing, both of which maintain strict security standards.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data at any time. You can export your data or request account deletion by contacting support@bullrider.pro.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">7. Third-Party Services</h2>
          <p>We integrate with third-party services including payment processors (Stripe), mapping services (Google Maps), calendar services (Google Calendar), weather APIs, analytics providers, and cloud storage. These services have their own privacy policies governing their use of your data.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">8. International Data Transfers</h2>
          <p>Your data may be transferred to and processed in the United States. By using Bullrider.pro, you consent to this transfer. We ensure appropriate safeguards are in place for international data transfers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">9. Rights for EU/UK Users (GDPR)</h2>
          <p className="mb-2">If you are in the European Union or United Kingdom, you have additional rights:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Right to access, rectify, or erase your data</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent at any time</li>
            <li>Right to lodge a complaint with your local data protection authority</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">10. Rights for Australian Users</h2>
          <p>If you are in Australia, your data is handled in accordance with the Australian Privacy Principles under the Privacy Act 1988.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">11. Rights for Brazilian Users (LGPD)</h2>
          <p>If you are in Brazil, you have rights under the Lei Geral de Proteção de Dados, including access, correction, deletion, and data portability.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">12. Rights for Canadian Users (PIPEDA)</h2>
          <p className="mb-2">If you are in Canada, your data is handled in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA). You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal information</li>
            <li>Challenge the accuracy and completeness of your data</li>
            <li>Withdraw consent for data collection (subject to legal restrictions)</li>
            <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">13. Children&apos;s Privacy</h2>
          <p>Bullrider.pro is not intended for children under 13. We do not knowingly collect data from children under 13. If we discover we have collected such data, we will delete it immediately.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">14. Data Retention</h2>
          <p>We retain your data as long as your account is active. Upon account deletion, we will delete your personal data within 30 days, except where required by law.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">15. Contact Us</h2>
          <p>For privacy-related questions, contact us at: support@bullrider.pro</p>
        </section>
      </div>
    </main>
  );
}

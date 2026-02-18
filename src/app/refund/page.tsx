export default function Refund() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-20">
      <a href="/" className="text-sm mb-8 inline-block hover:underline" style={{ color: 'var(--gold)' }}>← Back to Home</a>
      <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
      <p className="mb-10 text-sm" style={{ color: '#555' }}>Last updated: February 2026</p>

      <div className="space-y-8" style={{ color: '#ccc' }}>
        <section>
          <h2 className="text-xl font-bold mb-2 text-white">Premium Subscriptions</h2>
          <p>Bullrider.pro Premium subscriptions are billed monthly ($4.99/month) or annually ($49.99/year). You may cancel your subscription at any time through your app store account settings.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">Refund Eligibility</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds for monthly subscriptions are available within 7 days of purchase if you have not used premium features.</li>
            <li>Annual subscription refunds are available within 14 days of purchase, prorated for any usage.</li>
            <li>Refunds are processed through the original payment method (Apple App Store or Google Play Store).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">Event Entry Fees</h2>
          <p>Entry fees paid through Bullrider.pro are subject to the refund policy of each individual event producer. Contact the event producer directly for entry fee refunds. Bullrider.pro does not retain entry fees and cannot process refunds for event entries.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">International Payments</h2>
          <p>Refunds are processed in the original currency of purchase. Exchange rate differences are not refundable.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">How to Request a Refund</h2>
          <p className="mb-3">To request a refund for a premium subscription:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>iOS:</strong> Go to Settings → Apple ID → Subscriptions → Bullrider.pro → Request Refund</li>
            <li><strong>Android:</strong> Go to Google Play Store → Menu → Subscriptions → Bullrider.pro → Cancel/Refund</li>
            <li>Or contact us at support@bullrider.pro</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-white">Contact Us</h2>
          <p>For refund-related questions, contact us at: support@bullrider.pro</p>
        </section>
      </div>
    </main>
  );
}

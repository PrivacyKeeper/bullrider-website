"use client";
import { useState } from "react";
import CrossQuote from "./components/CrossQuote";

const features = [
  {
    icon: "\u{1F920}",
    title: "Social & Community",
    desc: "Your Bull Riding Family, Connected",
    detail: [
      "Community feed with posts, likes, and comments",
      "Direct messaging and group chats with real-time updates",
      "Create and join group conversations",
      "Rider, contractor, trainer, and fan directory",
      "Build your profile with stats, bio, and achievements",
      "Search and discover riders, events, and content",
      "Push notifications so you never miss a moment",
    ],
  },
  {
    icon: "\u{1F4E1}",
    title: "Live Streaming",
    desc: "Go Live From Anywhere",
    detail: [
      "Stream live from any event or arena",
      "Watch active streams with real-time chat",
      "Live score ticker alongside streams",
      "Viewer count and engagement tracking",
      "Powered by Agora for crystal-clear video",
      "Go-live with one tap from your phone",
    ],
  },
  {
    icon: "\u{1F3C6}",
    title: "Competition & Events",
    desc: "Everything Competition, One Place",
    detail: [
      "Browse upcoming, live, and completed events",
      "Interactive map view with Google Maps integration",
      "Log rides with score, ride time, buck-off time, and bull",
      "Real-time leaderboards - all time, monthly, and weekly",
      "Live event scoring with instant updates",
      "Add events to your calendar",
      "Filter by date, distance, and event type",
    ],
  },
  {
    icon: "\u{1F402}",
    title: "Bull Database",
    desc: "Know Every Bull Before You Ride",
    detail: [
      "Detailed bull profiles with stats and buck patterns",
      "Buckoff rate and ride history for every bull",
      "Bull supplier directory and contact info",
      "Rider-bull matchup history",
      "Track spin rate, kick force, and difficulty rating",
      "Browse bulls by supplier or stock contractor",
    ],
  },
  {
    icon: "\u{1F3AF}",
    title: "Training & AI",
    desc: "Train Smarter, Not Harder",
    detail: [
      "AI-powered ride analysis with OpenAI integration",
      "Session recording to review your rides",
      "Training video library with pro techniques",
      "Find and book coaches for one-on-one sessions",
      "Track your coaching history and progress",
      "AR Bull Simulator with 6 difficulty levels",
      "Simulate rides on bulls from Gentle Giant to Bodacious 2.0",
      "Simulation history and performance tracking",
    ],
  },
  {
    icon: "\u{1FA79}",
    title: "Health & Safety",
    desc: "Ride Hard, Stay Safe",
    detail: [
      "Log injuries by body part and severity",
      "Track injury history and recovery timeline",
      "Health reminders and medication tracking",
      "Connect wearables - smartwatch, sensors, and vests",
      "Live biometric data during rides",
      "Wearable sync history and trends",
      "Weather integration for event-day conditions",
    ],
  },
  {
    icon: "\u{1F6D2}",
    title: "Marketplace",
    desc: "Buy & Sell With Confidence",
    detail: [
      "Browse listings for gear, bulls, services, and more",
      "Filter by category - gear, bulls, services, other",
      "Create listings with photos and descriptions",
      "Seller profiles with ratings and history",
      "Direct message sellers from any listing",
      "Mark items as sold or remove listings anytime",
    ],
  },
  {
    icon: "\u{1F91D}",
    title: "Sponsors & Pros",
    desc: "Grow Your Career",
    detail: [
      "Browse active sponsors looking for riders",
      "Apply for sponsorships directly in the app",
      "Track your sponsorship requests and status",
      "Producer dashboard for event management",
      "Sponsor profiles with company info and budgets",
      "Showcase your stats and audience to attract deals",
    ],
  },
  {
    icon: "\u2B50",
    title: "Youth & Achievements",
    desc: "The Next Generation of Bull Riding",
    detail: [
      "Youth challenges with leaderboards",
      "Browse and join active challenges",
      "Track your challenge entries and progress",
      "Earn badges for milestones and accomplishments",
      "Achievement system to gamify your journey",
      "Safe, age-appropriate community features",
    ],
  },
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1b2d] text-[#e8e8ec]">
      <header className="w-full border-b border-[#2a4a7a] bg-[#0c1524]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center"><img src="/buckle.png" alt="Bullrider.Pro" className="h-[72px] w-auto" /></a>
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider text-[#8a9bb5]">
            <a href="#features" className="hover:text-[#c9a84c] transition">Features</a>
            <a href="#pricing" className="hover:text-[#c9a84c] transition">Pricing</a>
            <a href="#waitlist" className="hover:text-[#c9a84c] transition">Waitlist</a>
            <a href="/blog" className="hover:text-[#c9a84c] transition">Blog</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <img src="/buckle.png" alt="Champion Bullrider.Pro Buckle" className="w-[416px] md:w-[546px] drop-shadow-2xl" />
        <p className="mt-8 text-2xl md:text-3xl font-bold italic text-[#c9a84c] tracking-wide">&ldquo;Pain is Temporary, Victory Lasts Forever&rdquo;</p>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-[#8a9bb5]">The ultimate mobile platform for bull riders, stock contractors, trainers, sponsors, and fans. Track scores, connect with the community, and take your rodeo career to the next level.</p>

        {/* App Store Buttons - Coming Soon */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative group">
            <div className="flex items-center gap-3 bg-[#162a4a] border border-[#2a4a7a] rounded-xl px-6 py-3 opacity-70 cursor-default">
              <svg viewBox="0 0 384 512" className="w-8 h-8 fill-[#e8e8ec]"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <div className="text-left">
                <p className="text-[10px] text-[#8a9bb5] uppercase leading-tight">Download on the</p>
                <p className="text-lg font-semibold text-[#e8e8ec] leading-tight">App Store</p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 bg-[#8b1a1a] text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full shadow-lg">Coming Soon</span>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-3 bg-[#162a4a] border border-[#2a4a7a] rounded-xl px-6 py-3 opacity-70 cursor-default">
              <svg viewBox="0 0 512 512" className="w-8 h-8 fill-[#e8e8ec]"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <div className="text-left">
                <p className="text-[10px] text-[#8a9bb5] uppercase leading-tight">Get it on</p>
                <p className="text-lg font-semibold text-[#e8e8ec] leading-tight">Google Play</p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 bg-[#8b1a1a] text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full shadow-lg">Coming Soon</span>
          </div>
        </div>

        <a href="#waitlist" className="mt-8 px-8 py-4 bg-[#8b1a1a] text-white font-bold rounded-lg text-lg uppercase tracking-wider hover:bg-[#a52222] transition shadow-lg shadow-[#8b1a1a]/30">Join the Waitlist</a>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#c9a84c] uppercase tracking-wider">What&#39;s Inside</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <button key={i} onClick={() => setOpenModal(i)} className="bg-[#162a4a] border border-[#2a4a7a] rounded-xl p-6 text-left hover:border-[#c9a84c] hover:shadow-lg hover:shadow-[#c9a84c]/10 transition-all group">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-[#c9a84c] group-hover:underline">{f.title}</h3>
              <p className="mt-2 text-sm text-[#8a9bb5]">{f.desc}</p>
              <p className="mt-3 text-xs text-[#c9a84c] font-semibold">Click to see all features &rarr;</p>
            </button>
          ))}
        </div>
      </section>

      {/* Feature Modal */}
      {openModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setOpenModal(null)}>
          <div className="bg-[#162a4a] border border-[#2a4a7a] rounded-2xl max-w-lg w-full mx-4 p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-5xl mb-4">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-[#c9a84c]">{features[openModal].title}</h3>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#c0c8d8]">
                  <span className="text-[#c9a84c] mt-0.5">&#10003;</span>{item}
                </li>
              ))}
            </ul>
            <button onClick={() => setOpenModal(null)} className="mt-6 px-6 py-2 bg-[#8b1a1a] text-white font-semibold rounded-lg hover:bg-[#a52222] transition">Close</button>
          </div>
        </div>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#c9a84c] uppercase tracking-wider">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Free", price: "$0", period: "/forever", perks: ["Basic rider profile","Event discovery","Community chat access","Weather updates","Marketplace access","Leaderboard access"] },
            { name: "Premium", price: "$4.99", period: "/mo", perks: ["Everything in Free","AI ride analysis","AR Bull Simulator","Video session recording","Training video library","1-on-1 coaching","Wearable integration","Sponsor matching","Priority support"], featured: true },
            { name: "Annual", price: "$49.99", period: "/yr", perks: ["Everything in Premium","Save $10 vs monthly","Early access to new features","Exclusive community badge"], best: true },
          ].map((plan, i) => (
            <div key={i} className={`rounded-xl p-8 border ${plan.featured ? "border-[#c9a84c] bg-[#1d3461] shadow-lg shadow-[#c9a84c]/15" : "border-[#2a4a7a] bg-[#162a4a]"}`}>
              {plan.featured && <p className="text-xs font-bold uppercase tracking-wider text-[#8b1a1a] mb-2">Most Popular</p>}
              {plan.best && <p className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] mb-2">Best Value</p>}
              <h3 className="text-xl font-bold text-[#c9a84c]">{plan.name}</h3>
              <div className="mt-4"><span className="text-4xl font-extrabold text-[#e8e8ec]">{plan.price}</span><span className="text-[#8a9bb5]">{plan.period}</span></div>
              <ul className="mt-6 space-y-3">{plan.perks.map((p, j) => (<li key={j} className="flex items-start gap-2 text-sm text-[#c0c8d8]"><span className="text-[#c9a84c] mt-0.5">&#10003;</span>{p}</li>))}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#c9a84c] uppercase tracking-wider">Get Early Access</h2>
        <p className="text-[#8a9bb5] mb-8">Drop your email and be the first to know when Bullrider.Pro launches.</p>
        {status === "success" ? (
          <p className="text-[#c9a84c] text-lg font-semibold">&#127881; You&apos;re on the list! Check your inbox.</p>
        ) : (
          <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-4">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-lg bg-[#162a4a] border border-[#2a4a7a] text-[#e8e8ec] placeholder-[#5a6a80] focus:outline-none focus:border-[#c9a84c]" />
            <button type="submit" disabled={status === "loading"} className="px-6 py-3 bg-[#8b1a1a] text-white font-bold rounded-lg uppercase tracking-wider hover:bg-[#a52222] transition shadow-lg shadow-[#8b1a1a]/30 disabled:opacity-50">{status === "loading" ? "Submitting..." : "Notify Me"}</button>
          </form>
        )}
        {status === "error" && <p className="mt-4 text-red-400 text-sm">{errorMsg}</p>}
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a4a7a] bg-[#0c1524]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <h4 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">Bullrider.Pro</h4>
              <p className="text-[#8a9bb5] text-sm max-w-xs">Pain is Temporary, Victory Lasts Forever.</p>
            </div>
            <div>
              <h4 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">Explore</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/events" className="text-[#8a9bb5] hover:text-[#c9a84c] transition">Events</a>
                <a href="/blog" className="text-[#8a9bb5] hover:text-[#c9a84c] transition">Blog</a>
              </div>
            </div>
            <div>
              <h4 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">Legal</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/privacy" className="text-[#8a9bb5] hover:text-[#c9a84c] transition">Privacy Policy</a>
                <a href="/terms" className="text-[#8a9bb5] hover:text-[#c9a84c] transition">Terms of Service</a>
                <a href="/refund" className="text-[#8a9bb5] hover:text-[#c9a84c] transition">Refund Policy</a>
              </div>
            </div>
            <div>
              <h4 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider mb-3">Contact</h4>
              <a href="mailto:support@bullrider.pro" className="text-[#8a9bb5] hover:text-[#c9a84c] transition text-sm">support@bullrider.pro</a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#2a4a7a] flex items-end justify-between text-sm text-[#5a6a80]">
            <span>&copy; 2026 Apps 1, LLC. All rights reserved.</span>
            <CrossQuote />
          </div>
        </div>
      </footer>
    </div>
  );
}

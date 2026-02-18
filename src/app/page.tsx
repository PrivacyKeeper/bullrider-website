"use client";
import { useState } from "react";

const features = [
  {
    icon: "🤠",
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
    icon: "📡",
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
    icon: "🏆",
    title: "Competition & Events",
    desc: "Everything Competition, One Place",
    detail: [
      "Browse upcoming, live, and completed events",
      "Interactive map view with Google Maps integration",
      "Log rides with score, ride time, buck-off time, and bull",
      "Real-time leaderboards — all time, monthly, and weekly",
      "Live event scoring with instant updates",
      "Add events to your calendar",
      "Filter by date, distance, and event type",
    ],
  },
  {
    icon: "🐂",
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
    icon: "🎯",
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
    icon: "🩹",
    title: "Health & Safety",
    desc: "Ride Hard, Stay Safe",
    detail: [
      "Log injuries by body part and severity",
      "Track injury history and recovery timeline",
      "Health reminders and medication tracking",
      "Connect wearables — smartwatch, sensors, and vests",
      "Live biometric data during rides",
      "Wearable sync history and trends",
      "Weather integration for event-day conditions",
    ],
  },
  {
    icon: "🛒",
    title: "Marketplace",
    desc: "Buy & Sell With Confidence",
    detail: [
      "Browse listings for gear, bulls, services, and more",
      "Filter by category — gear, bulls, services, other",
      "Create listings with photos and descriptions",
      "Seller profiles with ratings and history",
      "Direct message sellers from any listing",
      "Mark items as sold or remove listings anytime",
    ],
  },
  {
    icon: "🤝",
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
    icon: "⭐",
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
  return (
    <div className="min-h-screen bg-[#0f1b2d] text-[#e8e8ec]">
      <header className="w-full border-b border-[#2a4a7a] bg-[#0c1524]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center"><img src="/buckle.png" alt="Bullrider.Pro" className="h-14 w-auto" /></a>
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider text-[#8a9bb5]">
            <a href="#features" className="hover:text-[#c9a84c] transition">Features</a>
            <a href="#pricing" className="hover:text-[#c9a84c] transition">Pricing</a>
            <a href="#waitlist" className="hover:text-[#c9a84c] transition">Waitlist</a>
          </nav>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <img src="/buckle.png" alt="Champion Bullrider.Pro Buckle" className="w-80 md:w-[420px] drop-shadow-2xl" />
        <p className="mt-8 text-2xl md:text-3xl font-bold italic text-[#c9a84c] tracking-wide">&ldquo;Pain is Temporary, Victory Lasts Forever&rdquo;</p>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-[#8a9bb5]">The ultimate mobile platform for bull riders, stock contractors, trainers, sponsors, and fans. Track scores, connect with the community, and take your rodeo career to the next level.</p>
        <a href="#waitlist" className="mt-10 px-8 py-4 bg-[#8b1a1a] text-white font-bold rounded-lg text-lg uppercase tracking-wider hover:bg-[#a52222] transition shadow-lg shadow-[#8b1a1a]/30">Join the Waitlist</a>
      </section>
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#c9a84c] uppercase tracking-wider">What&#39;s Inside</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <button key={i} onClick={() => setOpenModal(i)} className="bg-[#162a4a] border border-[#2a4a7a] rounded-xl p-6 text-left hover:border-[#c9a84c] hover:shadow-lg hover:shadow-[#c9a84c]/10 transition-all group">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-[#c9a84c] group-hover:underline">{f.title}</h3>
              <p className="mt-2 text-sm text-[#8a9bb5]">{f.desc}</p>
              <p className="mt-3 text-xs text-[#c9a84c] font-semibold">Click to see all features →</p>
            </button>
          ))}
        </div>
      </section>
      {openModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setOpenModal(null)}>
          <div className="bg-[#162a4a] border border-[#2a4a7a] rounded-2xl max-w-lg w-full mx-4 p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-5xl mb-4">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-[#c9a84c]">{features[openModal].title}</h3>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#c0c8d8]">
                  <span className="text-[#c9a84c] mt-0.5">✓</span>{item}
                </li>
              ))}
            </ul>
            <button onClick={() => setOpenModal(null)} className="mt-6 px-6 py-2 bg-[#8b1a1a] text-white font-semibold rounded-lg hover:bg-[#a52222] transition">Close</button>
          </div>
        </div>
      )}
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
              <ul className="mt-6 space-y-3">{plan.perks.map((p, j) => (<li key={j} className="flex items-start gap-2 text-sm text-[#c0c8d8]"><span className="text-[#c9a84c] mt-0.5">✓</span>{p}</li>))}</ul>
            </div>
          ))}
        </div>
      </section>
      <section id="waitlist" className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#c9a84c] uppercase tracking-wider">Get Early Access</h2>
        <p className="text-[#8a9bb5] mb-8">Drop your email and be the first to know when Bullrider.Pro launches.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will be in touch."); }} className="flex flex-col sm:flex-row gap-4">
          <input type="email" required placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-lg bg-[#162a4a] border border-[#2a4a7a] text-[#e8e8ec] placeholder-[#5a6a80] focus:outline-none focus:border-[#c9a84c]" />
          <button type="submit" className="px-6 py-3 bg-[#8b1a1a] text-white font-bold rounded-lg uppercase tracking-wider hover:bg-[#a52222] transition shadow-lg shadow-[#8b1a1a]/30">Notify Me</button>
        </form>
      </section>
      <footer className="border-t border-[#2a4a7a] bg-[#0c1524]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#5a6a80]">
          <span>&copy; 2026 Bullrider.Pro &mdash; All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-[#c9a84c] transition">Terms of Service</a>
            <a href="/privacy" className="hover:text-[#c9a84c] transition">Privacy Policy</a>
            <a href="/refund" className="hover:text-[#c9a84c] transition">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

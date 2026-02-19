'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './components/footer';

const features = [
  {
    id: 'social',
    title: 'Social & Community',
    icon: '👥',
    description: 'Your Barrel Racing Family, Connected',
    details: [
      'Share stories that disappear in 24 hours',
      'Post photos & videos of your runs',
      'Like, comment, and bookmark posts',
      'Follow your favorite riders',
      'Create and manage fan pages',
      'Group chats for your barn, team, or friends',
      'Direct messaging with read receipts',
      'Community challenges with leaderboards',
      'Earn badges for achievements',
      'Search and discover new riders',
      'Block and report features for safety',
    ],
  },
  {
    id: 'livestream',
    title: 'Live Streaming',
    icon: '📺',
    description: 'Go Live From Anywhere',
    details: [
      'Broadcast your runs in real-time',
      'Host watch parties with friends',
      'Spectator mode for major events',
      'Live stream chat with viewers',
      'See who\'s watching your stream',
      'Watch party messaging',
      'Record and save your streams',
      'Share streams to your feed',
      'Multi-viewer support',
      'Real-time viewer counts',
    ],
  },
  {
    id: 'competition',
    title: 'Competition & Events',
    icon: '🏆',
    description: 'Everything Competition, One Place',
    details: [
      'Browse and register for events',
      'Live results as they happen',
      'Draw positions and notifications',
      'Time divisions and classes',
      'Season standings and points',
      'Leaderboards by association',
      'Producer dashboard for event managers',
      'Event payouts and prize tracking',
      'Entry fee payments through app',
      'Follow events for updates',
      'Association points tracking (NBHA, WPRA, etc.)',
      'Rodeo entries and scheduling',
    ],
  },
  {
    id: 'horse',
    title: 'Horse Management',
    icon: '🐴',
    description: "Your Horse\'s Complete Digital Life",
    details: [
      'Unlimited horse profiles with photos/videos',
      'Full pedigree and bloodline tracking',
      'Famous bloodlines database',
      'Breeding reports and records',
      'Horse resume for sales',
      'Performance history by arena',
      'Competition results and times',
      'Arena-specific stats',
      'Training logs and notes',
      'Link horses to your runs',
      'Share profiles to marketplace',
    ],
  },
  {
    id: 'training',
    title: 'Training & AI',
    icon: '🎯',
    description: 'Train Smarter, Not Harder',
    details: [
      'AI-powered run analysis',
      'Video analysis tools with slow-mo',
      'Side-by-side video comparisons',
      'Training video library from pros',
      'Book coaching sessions in-app',
      'Trainer availability calendar',
      'Training drills and exercises',
      'Predictive analytics for improvement',
      'Progress tracking over time',
      'AI consultations for technique',
      'Training insights and recommendations',
      'Workout logs for you and your horse',
    ],
  },
  {
    id: 'health',
    title: 'Equine Health & Care',
    icon: '❤️',
    description: 'Complete Health Management',
    details: [
      'Health dashboard at a glance',
      'Vet records and visit history',
      'Vaccination schedules and reminders',
      'Medication schedules with alerts',
      'Nutrition logs and feeding plans',
      'Care scheduler with templates',
      'Health metrics tracking',
      'Recovery metrics after events',
      'Vet contacts directory',
      'Upload and store vet documents',
      'Farrier visit tracking',
      'Wearable data integration',
    ],
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    icon: '🛒',
    description: 'Buy & Sell With Confidence',
    details: [
      'List horses, tack, trailers, services',
      'Multiple photos per listing',
      'Seller ratings and reviews',
      'Save listings for later',
      'Report suspicious listings',
      'Review helpful votes',
      'Direct message sellers',
      'Search and filter listings',
      'Price history and comparisons',
      'Secure payment processing',
      'Listing analytics for sellers',
    ],
  },
  {
    id: 'travel',
    title: 'Travel & Safety',
    icon: '🚗',
    description: 'Travel Safe, Arrive Ready',
    details: [
      'Route planner with stops',
      'Arena finder along your route',
      'Real-time weather forecasts',
      'Severe weather alerts',
      'Emergency alert system',
      'Emergency contacts with one-tap call',
      'Hauler directory with reviews',
      'Book transport trips',
      'Trip requests for haulers',
      'Travel plan sharing',
      'Gas station and rest stop finder',
      'Arena reviews from other riders',
    ],
  },
  {
    id: 'pro',
    title: 'For Professionals',
    icon: '💼',
    description: 'Grow Your Business',
    details: [
      'Trainer profiles and services',
      'Trainer availability calendar',
      'Coaching session bookings',
      'Vet contact listings',
      'Hauler profiles with reviews',
      'Sponsorship hub',
      'Sponsor opportunity matching',
      'Sponsorship contracts management',
      'Deliverable tracking and proofs',
      'Sponsorship analytics',
      'Payment processing for services',
      'Service provider directory',
    ],
  },
];

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const selectedFeatureData = features.find((f) => f.id === selectedFeature);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://cdn.abacus.ai/images/af8ad862-b83b-4bc2-bd83-d1f430f9ead0.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight"
            style={{ color: '#FF69B4' }}
          >
            BarrelConnect.Pro
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
            style={{ color: '#FFB6D9' }}
          >
            Your Passion. Your Community. One Place.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl" 
            style={{ color: "#FFC0CB" }}
          >
            Everything barrel racing, all in one place — connected by community.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative py-16 sm:py-20 md:py-24"
        style={{
          backgroundImage: 'url(https://cdn.abacus.ai/images/6ca42556-4d4c-4828-8016-e605d27837b0.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
            Everything You Need
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedFeature(feature.id)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-6 cursor-pointer hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
                <p className="text-cyan-400 mt-3 sm:mt-4 text-xs sm:text-sm font-medium">Click to see all features →</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Modal */}
      <AnimatePresence>
        {selectedFeature && selectedFeatureData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                  <span className="text-4xl sm:text-5xl">{selectedFeatureData.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white break-words">{selectedFeatureData.title}</h3>
                    <p className="text-sm sm:text-base text-cyan-400 break-words">{selectedFeatureData.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-400 hover:text-white text-2xl flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              <ul className="space-y-3">
                {selectedFeatureData.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pricing Section */}
      <section
        className="relative py-16 sm:py-20 md:py-24"
        style={{
          backgroundImage: 'url(https://cdn.abacus.ai/images/be413e14-4646-47ef-8084-71b5fd97b164.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
            Free vs Premium
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Free Tier */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Free</h3>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-6">$0<span className="text-base sm:text-lg font-normal text-gray-400">/forever</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-green-400 flex-shrink-0">✓</span> <span>Community feed & social features</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-green-400 flex-shrink-0">✓</span> <span>Direct messaging</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-green-400 flex-shrink-0">✓</span> <span>Event browsing & registration</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-green-400 flex-shrink-0">✓</span> <span>Basic horse profiles (2 horses)</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-green-400 flex-shrink-0">✓</span> <span>Marketplace access</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-green-400 flex-shrink-0">✓</span> <span>Emergency alerts</span></li>
              </ul>
            </div>
            {/* Premium Tier */}
            <div className="bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl p-6 sm:p-8 relative">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                MOST POPULAR
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Premium</h3>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-6">$4.99<span className="text-base sm:text-lg font-normal text-gray-400">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Everything in Free</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Unlimited horse profiles</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>AI run analysis & insights</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Video analysis tools</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Live streaming</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Advanced health tracking</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Pedigree & breeding database</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Predictive analytics</span></li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-300"><span className="text-cyan-400 flex-shrink-0">✓</span> <span>Priority support</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        className="relative py-16 sm:py-20 md:py-24"
        style={{
          backgroundImage: 'url(https://cdn.abacus.ai/images/69a6dabf-d049-4951-968e-09e86135efce.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Be First In The Arena
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Join the waitlist and be the first to know when BarrelConnect launches.
          </p>

          {submitStatus === 'success' ? (
            <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-white">
              <p className="text-lg sm:text-xl font-semibold">✓ You're on the list!</p>
              <p className="text-sm sm:text-base text-gray-300 mt-2">We'll notify you when BarrelConnect launches.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 sm:px-6 py-3 sm:py-4 rounded-full text-slate-900 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-500 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors whitespace-nowrap"
                >
                  {submitStatus === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {submitStatus === 'error' && (
                <p className="text-red-400 mt-4 text-sm sm:text-base">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

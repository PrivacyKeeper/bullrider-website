"use client";
import Link from "next/link";

const events = [
  { state: "Arkansas", items: [
    { date: "March 6–7", name: "Kubota PBR Little Rock / Unleash The Beast", location: "North Little Rock, AR (Simmons Bank Arena)" }
  ]},
  { state: "California", items: [
    { date: "March 14", name: "Pendleton Whisky Velocity Tour", location: "Bakersfield, CA (Dignity Health Arena)" },
    { date: "March 20–21", name: "Pendleton Whisky Velocity Tour", location: "Palm Springs / Thousand Palms, CA (Acrisure Arena)" },
    { date: "March 27–28", name: "Pendleton Whisky Velocity Tour", location: "Fresno, CA (Save Mart Center)" }
  ]},
  { state: "Florida", items: [
    { date: "March 13–14", name: "PBR Florida State / Unleash The Beast", location: "Tallahassee, FL (Doak Campbell Stadium)" }
  ]},
  { state: "Indiana", items: [
    { date: "March 21–22", name: "Ram Trucks PBR Indianapolis / Unleash The Beast", location: "Indianapolis, IN (Gainbridge Fieldhouse)" }
  ]},
  { state: "Missouri", items: [
    { date: "March 20–21", name: "Ozark Empire PRCA Pro Rodeo", location: "Springfield, MO (Wilson Logistics Arena)" }
  ]},
  { state: "New Mexico", items: [
    { date: "March 27–29", name: "PBR Albuquerque Ty Murray Invitational / Unleash The Beast", location: "Albuquerque, NM (The Pit)" }
  ]},
  { state: "Pennsylvania", items: [
    { date: "March 6–7", name: "Pendleton Whisky Velocity Tour", location: "Reading, PA (Santander Arena)" }
  ]},
  { state: "Texas", items: [
    { date: "March 2–22", name: "Houston Livestock Show and Rodeo (RodeoHouston)", location: "Houston, TX (NRG Stadium) – Bull riding nightly" },
    { date: "March 12", name: "PBR Stockyards Showcase", location: "Fort Worth, TX (Cowtown Coliseum)" },
    { date: "March 13–28", name: "Rodeo Austin", location: "Austin, TX – Bull riding nightly" },
    { date: "March 15", name: "Ultimate Bullfighters: Bull Games", location: "Fort Worth, TX (Cowtown Coliseum)" },
    { date: "March 19", name: "PBR Stockyards Showcase", location: "Fort Worth, TX (Cowtown Coliseum)" },
    { date: "March 26", name: "PBR Stockyards Showcase", location: "Fort Worth, TX (Cowtown Coliseum)" },
    { date: "March 29", name: "Ultimate Bullfighters: Bull Games", location: "Fort Worth, TX (Cowtown Coliseum)" }
  ]}
];

export default function EventsPage() {
  return (
    <div className="rodeo-page rodeo-bg-2 min-h-screen text-white">
      <header className="py-6 px-6 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-[#c9a84c] font-bold text-xl">Bullrider.Pro</Link>
        <Link href="/" className="text-sm text-[#8a9bb5] hover:text-[#c9a84c] transition">&larr; Back to Home</Link>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#c9a84c] mb-2">March 2026 Events</h1>
        <p className="text-[#8a9bb5] mb-10">Bull riding and rodeo events happening this month across the country.</p>
        {events.map((group) => (
          <div key={group.state} className="mb-10">
            <h2 className="text-2xl font-bold text-white border-b border-[#2a4a7a] pb-2 mb-4">{group.state}</h2>
            <div className="space-y-4">
              {group.items.map((event, i) => (
                <div key={i} className="bg-[#1a2a44]/60 border border-[#2a4a7a] rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-[#c9a84c]">{event.name}</h3>
                      <p className="text-sm text-[#8a9bb5]">{event.location}</p>
                    </div>
                    <span className="text-sm font-medium text-white bg-[#2a4a7a] px-3 py-1 rounded-full whitespace-nowrap">{event.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
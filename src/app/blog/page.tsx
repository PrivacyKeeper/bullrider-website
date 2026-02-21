import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BullRider Pro Blog - Bull Riding News, Tips & Updates",
  description:
    "Read the latest bull riding tips, rodeo event updates, and app features from BullRider Pro — the first app built for bull riders.",
  keywords: [
    "bull riding blog",
    "bull riding tips",
    "bull riding app news",
    "rodeo events",
    "BullRider Pro updates",
    "bull riding community",
  ],
};

const posts = [
  {
    slug: "best-bull-riding-app",
    title: "Best Bull Riding App in 2026",
    date: "February 20, 2026",
    excerpt:
      "Looking for the best bull riding app? BullRider Pro is the #1 app for bull riders with live scoring, event discovery, real-time messaging, career tracking, and more.",
  },
  {
    slug: "bull-riding-app-for-riders",
    title: "Is There an App for Bull Riding? Yes — It's Called BullRider Pro",
    date: "February 20, 2026",
    excerpt:
      "Yes, there is finally an app for bull riding. BullRider Pro is the first dedicated bull riding app with live scoring, event search, messaging, analytics, live streaming, and more.",
  },
  {
    slug: "best-app-for-rodeo-bull-riding",
    title: "Best App for Rodeo Events & Bull Riding in 2026",
    date: "February 20, 2026",
    excerpt:
      "BullRider Pro is the best app for finding, following, and managing rodeo and bull riding events. Live scoring, event discovery, streaming, payments, and community — all in one app.",
  },
  {
    slug: "introducing-bullrider-pro",
    title: "Introducing BullRider Pro: The First App Built for Bull Riders",
    date: "February 20, 2026",
    excerpt:
      "There has never been a dedicated app for the bull riding community — until now. BullRider Pro brings live scoring, event discovery, and a connected community to every rider, stock contractor, and fan.",
  },
  {
    slug: "track-scores-find-events-connect",
    title: "How Bull Riders Can Track Scores, Find Events & Connect in 2026",
    date: "February 20, 2026",
    excerpt:
      "From tracking your ride scores to finding the next rodeo, BullRider Pro gives bull riders the tools they need to manage their career and stay connected.",
  },
  {
    slug: "why-rodeo-needs-bull-riding-platform",
    title: "Why the Rodeo Community Needs a Dedicated Bull Riding Platform",
    date: "February 20, 2026",
    excerpt:
      "Bull riding is the most watched event in rodeo, yet riders have no dedicated technology platform. Here's why that needs to change.",
  },
];

export default function BlogIndex() {
  return (
    <div>
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          color: "#d4a017",
          marginBottom: "0.5rem",
        }}
      >
        BullRider Pro Blog
      </h1>
      <p style={{ color: "#aaa", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
        Bull riding tips, rodeo event updates, and everything you need to stay
        connected.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "block",
              padding: "1.5rem",
              border: "1px solid #1e3a5f",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#fff",
              transition: "border-color 0.2s",
            }}
          >
            <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
              {post.date}
            </p>
            <h2
              style={{
                fontSize: "1.35rem",
                fontWeight: "bold",
                color: "#d4a017",
                marginBottom: "0.5rem",
              }}
            >
              {post.title}
            </h2>
            <p style={{ color: "#ccc", lineHeight: "1.6" }}>{post.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

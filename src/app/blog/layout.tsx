import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | BullRider Pro Blog",
    default: "BullRider Pro Blog - Bull Riding News, Tips & Updates",
  },
  description:
    "The official BullRider Pro blog. Bull riding tips, rodeo event updates, app features, and everything the bull riding community needs to stay connected.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rodeo-page rodeo-bg-3 min-h-screen text-white">
      <header
        className="border-b border-[#1e3a5f] bg-[#0c1524]/80 backdrop-blur-sm"
        style={{
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            color: "#d4a017",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          ← BullRider Pro
        </a>
        <a
          href="/blog"
          style={{
            color: "#d4a017",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Blog
        </a>
      </header>
      <main
        className="rodeo-panel"
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "2rem 1.5rem",
        }}
      >
        {children}
      </main>
      <footer
        className="bg-[#0c1524]/85"
        style={{
          padding: "2rem",
          borderTop: "1px solid #1e3a5f",
          textAlign: "center",
          color: "#888",
          fontSize: "0.875rem",
        }}
      >
        <p>© 2026 BullRider Pro. All rights reserved.</p>
        <div style={{ marginTop: "0.5rem" }}>
          <a
            href="/terms"
            style={{ color: "#d4a017", marginRight: "1rem", textDecoration: "none" }}
          >
            Terms
          </a>
          <a
            href="/privacy"
            style={{ color: "#d4a017", marginRight: "1rem", textDecoration: "none" }}
          >
            Privacy
          </a>
          <a href="/refund" style={{ color: "#d4a017", textDecoration: "none" }}>
            Refund Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

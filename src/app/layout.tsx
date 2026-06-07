import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sentinels Docs",
  description: "Documentation for the Sentinels trust stack.",
};

const NAV = [
  { href: "/", label: "Overview" },
  { href: "/getting-started", label: "Getting started" },
  { href: "/identity", label: "Device identity" },
  { href: "/attestation", label: "Attestation" },
  { href: "/trust", label: "Trust scoring" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#0a0a0a",
          color: "#e5e5e5",
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            minHeight: "100vh",
          }}
        >
          <aside
            style={{
              borderRight: "1px solid #262626",
              padding: 24,
              background: "#0f0f0f",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 24, fontSize: 18 }}>
              Sentinels Docs
            </div>
            <nav style={{ display: "grid", gap: 6 }}>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ color: "#a3a3a3", textDecoration: "none", padding: "4px 0" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
          <main style={{ padding: "48px 64px", maxWidth: 760 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}

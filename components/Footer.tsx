import Link from "next/link";

const cols = [
  {
    heading: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "https://app.agencyflo.ai/signup", label: "Get early access" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { href: "/vs/clickup", label: "AgencyFlo vs ClickUp" },
      { href: "/vs/notion", label: "AgencyFlo vs Notion" },
      { href: "/vs/productive", label: "AgencyFlo vs Productive" },
      { href: "/vs/scoro", label: "AgencyFlo vs Scoro" },
      { href: "/vs/teamwork", label: "AgencyFlo vs Teamwork" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/legal", label: "Legal" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "var(--text)",
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Agency<span style={{ color: "var(--accent)" }}>Flo</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
              The AI-native operating system for growing agencies.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-subtle)",
                  marginBottom: 16,
                }}
              >
                {col.heading}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-subtle)", fontSize: "0.8rem", margin: 0 }}>
            &copy; {new Date().getFullYear()} AgencyFlo. All rights reserved.
          </p>
          <p style={{ color: "var(--text-subtle)", fontSize: "0.8rem", margin: 0 }}>
            Built for agencies who are serious about growth.
          </p>
        </div>
      </div>
    </footer>
  );
}

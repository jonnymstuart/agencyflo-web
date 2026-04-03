import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

interface ComparisonData {
  competitor: string;
  slug: string;
  tagline: string;
  intro: string;
  agencyFloDesc: string;
  competitorDesc: string;
  features: Array<{
    feature: string;
    agencyflo: boolean | string;
    competitor: boolean | string;
  }>;
  pricing: {
    agencyflo: string;
    competitor: string;
  };
  whoSuitsAgencyFlo: string;
  whoSuitsCompetitor: string;
  faqs: Array<{ question: string; answer: string }>;
}

const COMPARISONS_DIR = path.join(process.cwd(), "content/comparisons");

function getComparison(slug: string): ComparisonData | null {
  const filePath = path.join(COMPARISONS_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as ComparisonData;
}

export async function generateStaticParams() {
  if (!fs.existsSync(COMPARISONS_DIR)) return [];
  const files = fs.readdirSync(COMPARISONS_DIR).filter((f) => f.endsWith(".json"));
  return files.map((f) => ({ competitor: f.replace(".json", "") }));
}

interface Props {
  params: Promise<{ competitor: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor } = await params;
  const data = getComparison(competitor);
  if (!data) return {};

  return {
    title: `AgencyFlo vs ${data.competitor} — Which is right for your agency?`,
    description: data.tagline,
  };
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span style={{ color: "#22c55e", fontWeight: 700, fontSize: "0.9rem" }}>✓ Yes</span>
    );
  }
  if (value === false) {
    return (
      <span style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.9rem" }}>✗ No</span>
    );
  }
  return (
    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{value as string}</span>
  );
}

export default async function ComparisonPage({ params }: Props) {
  const { competitor } = await params;
  const data = getComparison(competitor);
  if (!data) notFound();

  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", url: "https://agencyflo.ai" },
          { name: `AgencyFlo vs ${data.competitor}`, url: `https://agencyflo.ai/vs/${data.slug}` },
        ])}
      />
      <SchemaOrg data={faqSchema(data.faqs)} />

      {/* Header */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "72px 24px 60px", textAlign: "center" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 20 }}>
            <Link href="/" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Home</Link>
            {" / "}
            <span>AgencyFlo vs {data.competitor}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
            AgencyFlo vs {data.competitor}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
            {data.tagline}
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Intro */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75 }}>{data.intro}</p>
        </div>

        {/* Quick comparison */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
          {[
            { name: "AgencyFlo", desc: data.agencyFloDesc, highlight: true },
            { name: data.competitor, desc: data.competitorDesc, highlight: false },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: item.highlight ? "var(--accent-muted)" : "var(--surface)",
                border: item.highlight ? "1px solid rgba(139,92,246,0.25)" : "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 10 }}>{item.name}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature comparison table */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 20 }}>Feature comparison</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", marginBottom: 48 }}>
          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: "var(--surface-2)", borderBottom: "1px solid var(--border)", padding: "12px 20px" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Feature</div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>AgencyFlo</div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>{data.competitor}</div>
          </div>
          {data.features.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                padding: "14px 20px",
                borderBottom: i < data.features.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "center",
              }}
            >
              <div style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{row.feature}</div>
              <div style={{ textAlign: "center" }}>
                <FeatureValue value={row.agencyflo} />
              </div>
              <div style={{ textAlign: "center" }}>
                <FeatureValue value={row.competitor} />
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 20 }}>Pricing</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
          {[
            { name: "AgencyFlo", pricing: data.pricing.agencyflo, highlight: true },
            { name: data.competitor, pricing: data.pricing.competitor, highlight: false },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: item.highlight ? "var(--accent-muted)" : "var(--surface)",
                border: item.highlight ? "1px solid rgba(139,92,246,0.25)" : "1px solid var(--border)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: 8 }}>{item.name}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>{item.pricing}</p>
            </div>
          ))}
        </div>

        {/* Who suits who */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 20 }}>Which is right for your agency?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: 10, color: "var(--accent)" }}>Choose AgencyFlo if...</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>{data.whoSuitsAgencyFlo}</p>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: 10, color: "var(--text-muted)" }}>Choose {data.competitor} if...</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>{data.whoSuitsCompetitor}</p>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 20 }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          {data.faqs.map((faq) => (
            <div key={faq.question} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
              <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8, color: "var(--text)" }}>{faq.question}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px 28px", textAlign: "center" }}>
          <h3 style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: 8 }}>Ready to see AgencyFlo for yourself?</h3>
          <p style={{ color: "var(--text-muted)", marginBottom: 24, fontSize: "0.9rem" }}>
            Join agencies already on the early access list.
          </p>
          <a
            href="https://app.agencyflo.ai/signup"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            Get early access
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: 2fr 1fr 1fr"] {
            grid-template-columns: auto 60px 60px !important;
          }
        }
      `}</style>
    </>
  );
}

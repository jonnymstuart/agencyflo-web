import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Features — What AgencyFlo does",
  description:
    "Six modules built for agencies: project management, resource planning, financial visibility, client management, reporting, and FloAI — in one platform.",
};

const modules = [
  {
    id: "projects",
    title: "Project Management",
    tagline: "Scope, deliver, and track — without switching tools",
    desc: "Build project plans, assign tasks, track progress, and catch scope creep before it eats into your margin. Everything from brief to invoice in one thread.",
    points: [
      "Template-based project setup from winning proposals",
      "Task boards, timelines, and milestone tracking",
      "Scope change logging — every addition is tracked",
      "Real-time budget vs actuals as work is logged",
    ],
  },
  {
    id: "resources",
    title: "Resource Planning",
    tagline: "Know who is available before you say yes",
    desc: "See team capacity at a glance. Plan ahead, avoid overloading your best people, and make informed decisions on new briefs before they hit the project board.",
    points: [
      "Weekly and monthly capacity views per person and team",
      "Skill-based allocation — assign the right person, not just any available",
      "Conflict alerts when a team member is double-booked",
      "Forward planning for pipeline work before it's confirmed",
    ],
  },
  {
    id: "finance",
    title: "Financial Visibility",
    tagline: "Know your margin before you need to",
    desc: "Track hours, costs, and profitability per project and per client — in real time. Stop finding out a project was unprofitable at invoice time.",
    points: [
      "Live margin tracking as hours are logged against budget",
      "Client profitability over time — not just per project",
      "Cost of rework and revisions tracked separately",
      "Billing report generation for accurate invoicing",
    ],
  },
  {
    id: "clients",
    title: "Client Management",
    tagline: "One record. The complete picture.",
    desc: "Every client contact, project, invoice, and conversation in one place. No more digging through email threads to find the brief or the last approval.",
    points: [
      "Full client history — projects, revenue, and relationship timeline",
      "Brief and approval management linked to project delivery",
      "Contact management with communication log",
      "Health score tracking to flag at-risk relationships early",
    ],
  },
  {
    id: "reporting",
    title: "Reporting",
    tagline: "Answers, not more spreadsheets",
    desc: "Agency-specific dashboards that answer the questions that matter — which clients are growing, which services make money, where the team's time actually goes.",
    points: [
      "Utilisation rates per person, team, and department",
      "Revenue and margin by client, project type, and service line",
      "Capacity forecasting based on confirmed pipeline",
      "Exportable reports for leadership and board reviews",
    ],
  },
  {
    id: "floai",
    title: "FloAI",
    tagline: "Your agency's AI operating layer",
    desc: "FloAI is not a chatbot bolted onto a project tool. It's an AI assistant with full context across your agency — projects, clients, team, and finances — that helps you act faster.",
    points: [
      "Natural language queries across all agency data",
      "Proactive risk alerts — over-budget, under-resourced, late deliverables",
      "Auto-drafted client updates, briefs, and status summaries",
      "Meeting prep: surfaces relevant project context before client calls",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", url: "https://agencyflo.ai" },
          { name: "Features", url: "https://agencyflo.ai/features" },
        ])}
      />

      {/* Header */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 60px", textAlign: "center" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 20 }}>
            <Link href="/" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Home</Link>
            {" / "}Features
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Built for agencies.
            <br />
            <span style={{ color: "var(--accent)" }}>Not adapted for them.</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
            Six modules that cover the full operating surface of a growing agency — connected in a single platform.
          </p>
        </div>
      </section>

      {/* Modules */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              id={mod.id}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "2fr 3fr" : "3fr 2fr",
                gap: 48,
                alignItems: "start",
                paddingBottom: 48,
                borderBottom: i < modules.length - 1 ? "1px solid var(--border)" : "none",
              }}
              className="feature-grid"
            >
              <div style={{ order: i % 2 === 0 ? 0 : 1 }} className="feature-text">
                <div style={{ display: "inline-block", background: "var(--accent-muted)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 6, padding: "3px 10px", fontSize: "0.7rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 6 }}>
                  {mod.title}
                </h2>
                <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 16 }}>
                  {mod.tagline}
                </p>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                  {mod.desc}
                </p>
              </div>

              <div style={{ order: i % 2 === 0 ? 1 : 0 }} className="feature-points">
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {mod.points.map((point) => (
                      <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
            See it in action
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 32 }}>
            Join agencies already on the early access list and get first access when we open.
          </p>
          <a
            href="https://app.agencyflo.ai/signup"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            Get early access
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .feature-grid { grid-template-columns: 1fr !important; }
          .feature-text, .feature-points { order: 0 !important; }
        }
      `}</style>
    </>
  );
}

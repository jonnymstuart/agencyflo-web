import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing — AgencyFlo",
  description:
    "AgencyFlo is in early access. Pricing is designed to scale with your agency — no per-seat traps. Join the waitlist for preferred early adopter pricing.",
};

const pricingFaqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Early access users get first access to the platform. We'll offer a trial period at launch so you can evaluate the platform before committing.",
  },
  {
    question: "Is pricing per seat?",
    answer:
      "No. AgencyFlo is not priced per seat. We've built a model designed to scale with your agency without penalising growth — more team members shouldn't cost you a fortune.",
  },
  {
    question: "When will pricing be announced?",
    answer:
      "Pricing will be confirmed at launch. Early access users will receive preferred pricing. Join the waitlist now to lock in your position.",
  },
  {
    question: "Do I need to enter payment details to join the waitlist?",
    answer:
      "No. Joining the early access list is free and requires no payment details. We'll contact you when access opens.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", url: "https://agencyflo.ai" },
          { name: "Pricing", url: "https://agencyflo.ai/pricing" },
        ])}
      />
      <SchemaOrg data={faqSchema(pricingFaqs)} />

      {/* Header */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px 60px", textAlign: "center" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 20 }}>
            <Link href="/" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Home</Link>
            {" / "}Pricing
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Pricing that grows with you.
            <br />
            <span style={{ color: "var(--accent)" }}>Not against you.</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
            No per-seat traps. No feature gating that forces you to upgrade just to do your job.
            AgencyFlo is priced to work for growing agencies.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>

        {/* Early access notice */}
        <div style={{
          background: "var(--accent-muted)",
          border: "1px solid rgba(139,92,246,0.25)",
          borderRadius: 12,
          padding: "20px 24px",
          marginBottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}>
          <span style={{ fontSize: "1.2rem" }}>🔒</span>
          <div>
            <p style={{ fontWeight: 700, color: "var(--text)", margin: "0 0 4px", fontSize: "0.9rem" }}>
              Pricing confirmed at launch
            </p>
            <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.85rem" }}>
              AgencyFlo is currently in early access. Early adopters receive preferred pricing — join the list now to lock in your position.
            </p>
          </div>
        </div>

        {/* Plan cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 60 }}>
          {[
            {
              name: "Agency",
              desc: "For studios and agencies running multiple client projects with a team.",
              highlight: false,
              features: [
                "Project management and tracking",
                "Resource planning and capacity views",
                "Financial visibility and margin tracking",
                "Client and contact management",
                "FloAI assistant — standard",
                "Reporting dashboards",
              ],
            },
            {
              name: "Agency Pro",
              desc: "For growing agencies that need advanced AI, deeper reporting, and priority support.",
              highlight: true,
              features: [
                "Everything in Agency",
                "FloAI — advanced (proactive alerts, auto-drafting)",
                "Custom reporting and exports",
                "Pipeline and capacity forecasting",
                "Priority onboarding and support",
                "Early access to new features",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight ? "var(--accent-muted)" : "var(--surface)",
                border: plan.highlight ? "1px solid rgba(139,92,246,0.3)" : "1px solid var(--border)",
                borderRadius: 12,
                padding: 28,
                position: "relative",
              }}
            >
              {plan.highlight && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#fff", borderRadius: 100, padding: "4px 16px", fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Most popular
                </div>
              )}
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>{plan.name}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 24, lineHeight: 1.6 }}>
                {plan.desc}
              </p>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)" }}>Early access</span>
                <br />
                <span style={{ color: "var(--text-subtle)", fontSize: "0.8rem" }}>Pricing confirmed at launch</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.agencyflo.ai/signup"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: plan.highlight ? "var(--accent)" : "transparent",
                  color: plan.highlight ? "#fff" : "var(--accent)",
                  border: plan.highlight ? "none" : "1px solid rgba(139,92,246,0.4)",
                  padding: "11px 20px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                Join early access
              </a>
            </div>
          ))}
        </div>

        {/* What you won't find */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px 28px", marginBottom: 60 }}>
          <h3 style={{ fontWeight: 800, marginBottom: 20, fontSize: "1.1rem" }}>What you won&apos;t find in AgencyFlo pricing</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { label: "Per-seat pricing", desc: "Adding team members shouldn't cost the earth." },
              { label: "Feature gating", desc: "Core agency features aren't locked behind tiers." },
              { label: "Hidden add-ons", desc: "What you see is what you pay for." },
              { label: "Lock-in contracts", desc: "Stay because it works, not because you're trapped." },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: 4, color: "var(--text)" }}>
                  ✗ {item.label}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 20 }}>Pricing questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {pricingFaqs.map((faq) => (
            <div key={faq.question} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
              <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8, color: "var(--text)" }}>
                {faq.question}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

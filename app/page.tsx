import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import { softwareApplicationSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AgencyFlo — AI-native operating system for agencies",
  description:
    "AgencyFlo replaces fragmented agency tools with one AI-native platform. Manage projects, resources, finances, and clients — with FloAI working alongside your team.",
};

const features = [
  {
    title: "Project Management",
    desc: "Scope, plan, and track every project in one place. Catch scope creep before it eats your margin.",
  },
  {
    title: "Resource Planning",
    desc: "See who is available, who is overloaded, and where the gap is before you take on the next brief.",
  },
  {
    title: "Financial Visibility",
    desc: "Track actual vs estimated hours, margin per project, and profitability by client — in real time.",
  },
  {
    title: "Client Management",
    desc: "One client record. Every project, invoice, and conversation in context — no switching tabs.",
  },
  {
    title: "Reporting",
    desc: "Agency-specific dashboards that tell you where money is made and lost, without building pivot tables.",
  },
  {
    title: "FloAI Assistant",
    desc: "An AI assistant that understands your agency data — answers questions, flags risks, and drafts updates.",
  },
];

const faqs = [
  {
    question: "What is AgencyFlo?",
    answer:
      "AgencyFlo is an AI-native operating system built specifically for creative and digital agencies. It combines project management, resource planning, financial tracking, client management, and an AI assistant (FloAI) in a single platform — replacing the 5–7 disconnected tools most agencies currently use.",
  },
  {
    question: "Who is AgencyFlo built for?",
    answer:
      "AgencyFlo is built for growing agencies — marketing agencies, design studios, digital agencies, and development shops — that have outgrown spreadsheets and basic project tools but find enterprise platforms too slow, too expensive, or too generic.",
  },
  {
    question: "How is AgencyFlo different from ClickUp or Notion?",
    answer:
      "ClickUp and Notion are general-purpose tools. They can be configured for agencies, but they don't understand agency economics — margin per project, utilisation, client profitability. AgencyFlo is built from the ground up for agency workflows and has those metrics built in, not bolted on.",
  },
  {
    question: "What does FloAI do?",
    answer:
      "FloAI is the AI layer embedded across AgencyFlo. It can answer questions about your data ('What's the margin on the Morrison account?'), flag projects trending over budget, draft client status updates, and surface risks before they become problems.",
  },
  {
    question: "How much does AgencyFlo cost?",
    answer:
      "AgencyFlo is currently in early access. Pricing will be announced at launch. Early adopters who join now will receive preferred pricing. There are no per-seat traps — pricing is designed to scale with your agency, not penalise growth.",
  },
  {
    question: "When does AgencyFlo launch?",
    answer:
      "AgencyFlo is in private early access. You can join the waitlist now at app.agencyflo.ai/signup. Early access users are onboarded on a rolling basis and receive direct access to the founding team.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg data={softwareApplicationSchema()} />
      <SchemaOrg data={faqSchema(faqs)} />

      {/* Hero */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.15) 0%, transparent 70%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "100px 24px 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 100,
              padding: "6px 16px",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            Now in early access — join agencies on the waitlist
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 24,
            }}
          >
            The AI-native operating system
            <br />
            <span style={{ color: "var(--accent)" }}>built for agencies</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--text-muted)",
              maxWidth: 600,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            AgencyFlo replaces the tools your team is juggling with one
            intelligent platform — so you can run projects, track margin, and
            plan resources without the chaos.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
            <Link
              href="/features"
              style={{
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                padding: "14px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                display: "inline-block",
              }}
            >
              See features
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: "var(--accent-muted)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 100, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
            The problem
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Most agencies run on a stack of tools
            <br />
            that don&apos;t talk to each other
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 560, margin: "0 auto" }}>
            Project management in one place. Finances in another. Resource
            planning in a spreadsheet. Client notes scattered across emails.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              scenario: "You win a new client.",
              detail:
                "Scope lives in a proposal PDF. The project gets created in ClickUp. Budget gets tracked in a spreadsheet. Three separate sources, none of them linked.",
            },
            {
              scenario: "A project runs over.",
              detail:
                "You find out at invoice time — when the damage is done. There was no early warning because no single tool had the full picture.",
            },
            {
              scenario: "You want to grow.",
              detail:
                "You can't answer which clients are profitable, which services margin well, or whether you have capacity to take on the next brief — without hours of admin.",
            },
          ].map((item) => (
            <div
              key={item.scenario}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 28,
              }}
            >
              <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10, color: "var(--text)" }}>
                {item.scenario}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: "var(--accent-muted)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 100, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
            Features
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Everything your agency needs.
            <br />
            Nothing it doesn&apos;t.
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto" }}>
            Six modules, one platform. Built around how agencies actually work.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 28,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "var(--accent-muted)",
                  border: "1px solid rgba(139,92,246,0.2)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  color: "var(--accent)",
                  fontSize: "0.75rem",
                }}
              >
                ◆
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8, color: "var(--text)" }}>
                {f.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/features" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>
            View all features →
          </Link>
        </div>
      </div>

      {/* FloAI */}
      <section style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-block", background: "var(--accent-muted)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 100, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
                FloAI
              </div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
                An AI assistant that actually
                knows your agency
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                FloAI is embedded across AgencyFlo. It understands your
                projects, your clients, your team, and your numbers — and uses
                that context to help you move faster.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Answer questions about your agency data in plain English",
                  "Flag projects trending over budget before invoicing",
                  "Draft client status updates and briefs",
                  "Surface resource conflicts before they become fires",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chat demo */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>FloAI</span>
              </div>
              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { role: "user", msg: "Which projects are at risk of going over budget this month?" },
                  { role: "ai", msg: "3 projects are trending over: Morrison Rebrand (112% of budget used, 3 weeks remaining), TechFlow Campaign (89%, deliverables pending), and Pulse App (scope has expanded but budget is locked). Want me to draft a budget alert for Morrison?" },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      maxWidth: "85%",
                      background: m.role === "user" ? "var(--accent)" : "var(--surface-2)",
                      border: m.role === "user" ? "none" : "1px solid var(--border)",
                      borderRadius: m.role === "user" ? "12px 12px 4px 12px" : "12px 12px 12px 4px",
                      padding: "10px 14px",
                      fontSize: "0.8rem",
                      lineHeight: 1.55,
                      color: m.role === "user" ? "#fff" : "var(--text-muted)",
                    }}>
                      {m.msg}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: "var(--accent-muted)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 100, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
            FAQ
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Common questions
          </h2>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq) => (
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

      {/* CTA */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.12) 0%, transparent 70%)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Ready to run a tighter agency?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: 36 }}>
            Join agencies already on the early access list. No commitment — just
            first access when we open the doors.
          </p>
          <a
            href="https://app.agencyflo.ai/signup"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "16px 40px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: "1.05rem",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Get early access — it&apos;s free
          </a>
        </div>
      </section>
    </>
  );
}

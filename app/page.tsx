import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import { softwareApplicationSchema, faqSchema } from "@/lib/schema";
import RotatingWord from "@/components/RotatingWord";

export const metadata: Metadata = {
  title: "AgencyFlo — The AI-native operating system built for modern agencies",
  description:
    "Replace your current tech stack with a complete agency workflow. Time tracking, proposals, projects, invoicing, and AI — in one platform.",
};

const faqs = [
  {
    question: "What is AgencyFlo?",
    answer:
      "AgencyFlo is an AI-native operating system built specifically for agencies. It replaces your current tech stack — combining time tracking, proposals, project management, invoicing, client management, and FloAI in a single platform.",
  },
  {
    question: "Who is AgencyFlo built for?",
    answer:
      "Growing agencies of 5–50 people — marketing agencies, design studios, digital agencies, development shops — who are tired of context switching between disconnected tools and losing hours to admin.",
  },
  {
    question: "What does FloAI do?",
    answer:
      "FloAI is your agency's AI operating layer. It spots project risks, sends invoices, generates weekly reports, adds meeting transcripts, and works through your to-do list — while you focus on the work that matters.",
  },
  {
    question: "How does AgencyFlo pricing work?",
    answer:
      "No per-seat pricing, ever. AgencyFlo offers a flat monthly rate locked for life, or a one-time lifetime access option. Early adopter pricing is available to the first 1,000 agencies.",
  },
  {
    question: "Can I replace my existing tools with AgencyFlo?",
    answer:
      "Yes. AgencyFlo covers time tracking, proposals, project management, reporting, team management, client CRM, and invoicing. Most agencies replace 5–7 tools when they switch.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "There's a money-back guarantee within 3 months of use — so you can get started and evaluate with zero risk.",
  },
];

const features = [
  {
    id: "projects",
    label: "Projects",
    heading: ["Your agency's", "cockpit."],
    body: "Seamlessly convert accepted bids into active projects. Keep all data in one unified operating system.",
    flip: false,
  },
  {
    id: "profitability",
    label: "Profitability",
    heading: ["Stop flying blind", "on margins."],
    body: "No more silos or manual spreadsheets. Total visibility into profits across your entire agency.",
    flip: true,
  },
  {
    id: "proposals",
    label: "Proposals",
    heading: ["From proposal to", "project, instantly."],
    body: "Seamlessly convert accepted bids into active projects. Keep all data in one unified operating system.",
    flip: false,
  },
  {
    id: "reports",
    label: "Reports",
    heading: ["Total agency", "transparency."],
    body: "Ditch the guesswork. Get powerful reports on project health and team productivity in real-time.",
    flip: true,
  },
  {
    id: "team",
    label: "Team Management",
    heading: ["Smart scaling for", "modern teams."],
    body: "Add everyone, set custom rates, and manage access. No hidden user costs.",
    flip: false,
  },
  {
    id: "time",
    label: "Time Tracking",
    heading: ["All costs in one", "intelligent home."],
    body: "Use native timers or log hours manually. Keep every cent of project cost in your single source of truth.",
    flip: true,
  },
  {
    id: "crm",
    label: "Client Management",
    heading: ["Intelligent client", "lifecycle CRM."],
    body: "A centralised CRM for all prospects, active, and inactive clients. Your complete history in one place.",
    flip: false,
  },
];

// CSS UI mockup colours
const CARD = "#161616";
const CARD_BORDER = "#242424";
const ACCENT = "#8b5cf6";

function DashboardMockup() {
  return (
    <div style={{
      background: "#111",
      border: `1px solid ${CARD_BORDER}`,
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      fontFamily: "var(--font-body)",
    }}>
      {/* Titlebar */}
      <div style={{ background: "#0d0d0d", borderBottom: `1px solid ${CARD_BORDER}`, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#ff5f57","#ffbd2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: "0.72rem", color: "#555" }}>agencyflo.ai — Dashboard</div>
      </div>
      <div style={{ display: "flex", height: 280 }}>
        {/* Sidebar */}
        <div style={{ width: 160, background: "#0d0d0d", borderRight: `1px solid ${CARD_BORDER}`, padding: "16px 12px", flexShrink: 0 }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginBottom: 20, letterSpacing: "-0.01em" }}>
            Agency<span style={{ color: ACCENT }}>Flo</span>
          </div>
          {["Dashboard","Projects","Time","Proposals","Reports","Clients","Team","Invoicing"].map((item, i) => (
            <div key={item} style={{
              padding: "6px 8px",
              marginBottom: 2,
              borderRadius: 6,
              fontSize: "0.72rem",
              color: i === 0 ? "#fff" : "#555",
              background: i === 0 ? "#1a1a1a" : "transparent",
              fontWeight: i === 0 ? 600 : 400,
            }}>
              {item}
            </div>
          ))}
        </div>
        {/* Main */}
        <div style={{ flex: 1, padding: "16px 20px", overflow: "hidden" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginBottom: 14 }}>Dashboard</div>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 14 }}>
            {[
              { label: "Active Projects", val: "21" },
              { label: "Revenue", val: "£15,463" },
              { label: "Pipeline", val: "£485,302" },
              { label: "Total Billed", val: "£1,956,873" },
            ].map(stat => (
              <div key={stat.label} style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ fontSize: "0.6rem", color: "#555", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff" }}>{stat.val}</div>
              </div>
            ))}
          </div>
          {/* Table */}
          <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, overflow: "hidden" }}>
            <div style={{ padding: "8px 12px", borderBottom: `1px solid ${CARD_BORDER}`, fontSize: "0.65rem", fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
              <span>Project</span><span>Status</span><span>Margin</span><span>Due</span>
            </div>
            {[
              { name: "Morrison Rebrand", status: "Active", margin: "68%", due: "Apr 12" },
              { name: "TechFlow Campaign", status: "Review", margin: "41%", due: "Apr 18" },
              { name: "Pulse App", status: "Active", margin: "72%", due: "May 1" },
            ].map(row => (
              <div key={row.name} style={{ padding: "7px 12px", borderBottom: `1px solid ${CARD_BORDER}`, fontSize: "0.65rem", color: "#888", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", alignItems: "center" }}>
                <span style={{ color: "#ccc" }}>{row.name}</span>
                <span style={{ background: row.status === "Review" ? "rgba(234,179,8,0.15)" : "rgba(34,197,94,0.12)", color: row.status === "Review" ? "#ca8a04" : "#22c55e", borderRadius: 4, padding: "2px 6px", fontSize: "0.6rem", fontWeight: 600, display: "inline-block" }}>{row.status}</span>
                <span>{row.margin}</span>
                <span>{row.due}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureMockup({ id }: { id: string }) {
  const mockups: Record<string, React.ReactNode> = {
    projects: (
      <div style={{ background: "#111", border: `1px solid ${CARD_BORDER}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ background: "#0d0d0d", padding: "10px 16px", borderBottom: `1px solid ${CARD_BORDER}`, fontSize: "0.72rem", fontWeight: 600, color: "#fff" }}>Morrison Rebrand</div>
        <div style={{ padding: 16 }}>
          {[
            { task: "Brand strategy workshop", done: true, time: "8h" },
            { task: "Logo concepts (x3)", done: true, time: "12h" },
            { task: "Brand guidelines doc", done: false, time: "6h" },
            { task: "Client presentation", done: false, time: "3h" },
          ].map(t => (
            <div key={t.task} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: `1px solid ${CARD_BORDER}` }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: t.done ? ACCENT : "transparent", border: `1px solid ${t.done ? ACCENT : CARD_BORDER}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {t.done && <span style={{ color: "#fff", fontSize: "0.55rem" }}>✓</span>}
              </div>
              <span style={{ flex: 1, fontSize: "0.72rem", color: t.done ? "#555" : "#bbb", textDecoration: t.done ? "line-through" : "none" }}>{t.task}</span>
              <span style={{ fontSize: "0.65rem", color: "#555" }}>{t.time}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.6rem", color: "#555", marginBottom: 2 }}>Budget</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff" }}>£8,400</div>
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", color: "#555", marginBottom: 2 }}>Logged</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#22c55e" }}>£5,712</div>
            </div>
            <div>
              <div style={{ fontSize: "0.6rem", color: "#555", marginBottom: 2 }}>Margin</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#22c55e" }}>68%</div>
            </div>
          </div>
        </div>
      </div>
    ),
    profitability: (
      <div style={{ background: "#111", border: `1px solid ${CARD_BORDER}`, borderRadius: 12, overflow: "hidden", padding: 20 }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Profitability Overview</div>
        {[
          { client: "Morrison & Co", revenue: "£78,400", margin: 68, color: "#22c55e" },
          { client: "TechFlow Ltd", revenue: "£41,200", margin: 41, color: "#eab308" },
          { client: "Pulse Digital", revenue: "£92,100", margin: 72, color: "#22c55e" },
        ].map(row => (
          <div key={row.client} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: "0.72rem", color: "#bbb" }}>{row.client}</span>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff" }}>{row.revenue}</span>
            </div>
            <div style={{ background: CARD_BORDER, borderRadius: 3, height: 4, overflow: "hidden" }}>
              <div style={{ background: row.color, width: `${row.margin}%`, height: "100%", borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: "0.6rem", color: row.color, marginTop: 3 }}>{row.margin}% margin</div>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${CARD_BORDER}`, paddingTop: 14, display: "flex", gap: 16 }}>
          {[{ l: "Total Revenue", v: "£211,700" }, { l: "Avg Margin", v: "60%" }, { l: "Target", v: "65%" }].map(s => (
            <div key={s.l}>
              <div style={{ fontSize: "0.6rem", color: "#555" }}>{s.l}</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff" }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    proposals: (
      <div style={{ background: "#111", border: `1px solid ${CARD_BORDER}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ background: "#0d0d0d", padding: "10px 16px", borderBottom: `1px solid ${CARD_BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#fff" }}>Website Redesign — Proposal</span>
          <span style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", borderRadius: 100, padding: "2px 10px", fontSize: "0.6rem", fontWeight: 700 }}>Accepted</span>
        </div>
        <div style={{ padding: 16 }}>
          {[{ item: "Discovery & Strategy", hrs: "12h", val: "£1,800" }, { item: "UX Design", hrs: "24h", val: "£3,600" }, { item: "Development", hrs: "40h", val: "£6,000" }, { item: "QA & Launch", hrs: "8h", val: "£1,200" }].map(line => (
            <div key={line.item} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${CARD_BORDER}`, fontSize: "0.72rem" }}>
              <span style={{ color: "#bbb" }}>{line.item}</span>
              <span style={{ color: "#666" }}>{line.hrs}</span>
              <span style={{ color: "#fff", fontWeight: 600 }}>{line.val}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.72rem", color: "#555" }}>Total</span>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: "#fff" }}>£12,600</span>
          </div>
          <div style={{ marginTop: 12, background: ACCENT, color: "#fff", borderRadius: 7, padding: "8px 0", textAlign: "center", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
            Convert to Project →
          </div>
        </div>
      </div>
    ),
    reports: (
      <div style={{ background: "#111", border: `1px solid ${CARD_BORDER}`, borderRadius: 12, overflow: "hidden", padding: 20 }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Weekly Agency Report</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[{ l: "Utilisation", v: "78%", good: true }, { l: "Billable hrs", v: "312h", good: true }, { l: "Overdue tasks", v: "4", good: false }, { l: "Unbilled", v: "£3,200", good: false }].map(s => (
            <div key={s.l} style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: "10px 12px" }}>
              <div style={{ fontSize: "0.6rem", color: "#555", marginBottom: 3 }}>{s.l}</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 800, color: s.good ? "#22c55e" : "#f87171" }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, padding: 12 }}>
          <div style={{ fontSize: "0.6rem", color: "#555", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Revenue this month</div>
          <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 40 }}>
            {[60, 45, 80, 55, 90, 70, 85, 95].map((h, i) => (
              <div key={i} style={{ flex: 1, background: i === 7 ? ACCENT : "#2a2a2a", borderRadius: "2px 2px 0 0", height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
    team: (
      <div style={{ background: "#111", border: `1px solid ${CARD_BORDER}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ background: "#0d0d0d", padding: "10px 16px", borderBottom: `1px solid ${CARD_BORDER}`, fontSize: "0.72rem", fontWeight: 600, color: "#fff" }}>Team — This Week</div>
        <div style={{ padding: 16 }}>
          {[
            { name: "Alex R.", role: "Designer", util: 82, rate: "£95/hr" },
            { name: "Sam K.", role: "Developer", util: 94, rate: "£115/hr" },
            { name: "Priya M.", role: "PM", util: 61, rate: "£85/hr" },
            { name: "Tom B.", role: "Strategist", util: 78, rate: "£100/hr" },
          ].map(p => (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: `hsl(${p.name.charCodeAt(0) * 12},60%,35%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#fff", fontWeight: 700, flexShrink: 0 }}>
                {p.name[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.72rem", color: "#bbb", marginBottom: 3 }}>{p.name} <span style={{ color: "#555" }}>· {p.role}</span></div>
                <div style={{ background: CARD_BORDER, borderRadius: 2, height: 3 }}>
                  <div style={{ background: p.util > 85 ? "#f87171" : p.util > 70 ? ACCENT : "#22c55e", width: `${p.util}%`, height: "100%", borderRadius: 2 }} />
                </div>
              </div>
              <span style={{ fontSize: "0.65rem", color: "#555", flexShrink: 0 }}>{p.util}%</span>
            </div>
          ))}
        </div>
      </div>
    ),
    time: (
      <div style={{ background: "#111", border: `1px solid ${CARD_BORDER}`, borderRadius: 12, overflow: "hidden", padding: 20 }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Time Tracking</div>
        <div style={{ background: ACCENT, borderRadius: 10, padding: "14px 16px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>Running — Morrison Rebrand</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", fontFamily: "monospace" }}>02:34:18</div>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 8, height: 8, background: "#fff", borderRadius: 2 }} />
          </div>
        </div>
        {[{ proj: "TechFlow Campaign", time: "6h 20m", cost: "£760" }, { proj: "Pulse App", time: "4h 45m", cost: "£570" }, { proj: "Internal", time: "1h 10m", cost: "—" }].map(r => (
          <div key={r.proj} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${CARD_BORDER}`, fontSize: "0.72rem" }}>
            <span style={{ color: "#999" }}>{r.proj}</span>
            <span style={{ color: "#666" }}>{r.time}</span>
            <span style={{ color: "#fff", fontWeight: 600 }}>{r.cost}</span>
          </div>
        ))}
      </div>
    ),
    crm: (
      <div style={{ background: "#111", border: `1px solid ${CARD_BORDER}`, borderRadius: 12, overflow: "hidden" }}>
        <div style={{ background: "#0d0d0d", padding: "10px 16px", borderBottom: `1px solid ${CARD_BORDER}`, fontSize: "0.72rem", fontWeight: 600, color: "#fff" }}>Clients</div>
        <div style={{ padding: 16 }}>
          {[
            { name: "Morrison & Co", status: "Active", value: "£78,400", stage: "Retained" },
            { name: "TechFlow Ltd", status: "Active", value: "£41,200", stage: "Project" },
            { name: "Apex Media", status: "Prospect", value: "£24,000", stage: "Proposal sent" },
            { name: "Bright Studio", status: "Inactive", value: "£15,600", stage: "Completed" },
          ].map(c => (
            <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${CARD_BORDER}` }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: `hsl(${c.name.charCodeAt(0) * 15},50%,25%)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#fff", fontWeight: 700, flexShrink: 0 }}>
                {c.name[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.72rem", color: "#bbb", fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: "0.6rem", color: "#555" }}>{c.stage}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.72rem", color: "#fff", fontWeight: 600 }}>{c.value}</div>
                <div style={{ fontSize: "0.6rem", color: c.status === "Active" ? "#22c55e" : c.status === "Prospect" ? "#eab308" : "#555" }}>{c.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  };
  return <>{mockups[id] ?? null}</>;
}

export default function HomePage() {
  return (
    <>
      <SchemaOrg data={softwareApplicationSchema()} />
      <SchemaOrg data={faqSchema(faqs)} />

      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border)", paddingBottom: 100 }}>
        {/* Ambient glow */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: -100, left: "30%", width: 600, height: 500, background: "radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 60%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", top: 50, right: "20%", width: 400, height: 300, background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 60%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: 0, left: "10%", width: 300, height: 200, background: "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 60%)", filter: "blur(40px)" }} />
        </div>

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px 0", position: "relative", textAlign: "center" }}>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.035em",
            color: "var(--text)",
            marginBottom: 24,
          }}>
            <em style={{ fontStyle: "italic" }}>Accelerate</em>{" "}
            <RotatingWord />
          </h1>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "var(--text-muted)", maxWidth: 500, margin: "0 auto 44px", lineHeight: 1.65 }}>
            The AI-native operating system built for modern agencies.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
            <a href="https://app.agencyflo.ai/signup" style={{ background: "#fff", color: "#000", padding: "12px 28px", borderRadius: 100, fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
              Start for free
            </a>
            <a href="https://app.agencyflo.ai/signup" style={{ background: "transparent", color: "var(--text-muted)", padding: "12px 28px", borderRadius: 100, border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", display: "inline-block" }}>
              Book a 15-min demo
            </a>
          </div>

          {/* Dashboard */}
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ── SYSTEM INTRO ── */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ maxWidth: 640, marginBottom: 40 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>The world&apos;s first complete agency OS</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.15, marginBottom: 20 }}>
              Your agencies AI-native<br />operating system.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75 }}>
              AgencyFlo gives you the power to operate from one place. No context switching. No siloed data.
              The tool built to operate and scale with ease.
            </p>
          </div>

          {/* Module pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
            {["Time Tracking","Proposals","Reports","Team Management","RevOps","Projects","Client Management"].map(m => (
              <div key={m} style={{ background: "var(--bg)", border: "1px solid var(--border-light)", borderRadius: 100, padding: "7px 16px", fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOAI ── */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="feature-grid">
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>FloAI</div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: 20, lineHeight: 1.1 }}>
                AI that works,<br />
                while you <em style={{ fontStyle: "italic" }}>sleep</em>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1.0125rem", lineHeight: 1.75 }}>
                Not another tool to manage, not a chat bot. FloAI operates so you can focus on what you do best.
              </p>
            </div>
            {/* FloAI chat */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border-light)", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>FloAI</span>
              </div>
              <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { role: "ai", msg: "Good morning. I've spotted 2 projects trending over budget and sent this week's invoices. 3 items need your attention today." },
                  { role: "user", msg: "Let's crush this today" },
                  { role: "ai", msg: "Morrison Rebrand is at 112% budget with 3 weeks left. I've drafted a scope change notice — want me to send it to the client?" },
                  { role: "user", msg: "Yes, send it" },
                  { role: "ai", msg: "Sent. I've also flagged the Pulse App risk in your project timeline and added it to Friday's weekly report." },
                ].map((m, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      maxWidth: "80%",
                      background: m.role === "user" ? "var(--accent)" : "var(--bg)",
                      border: m.role === "user" ? "none" : "1px solid var(--border-light)",
                      borderRadius: m.role === "user" ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
                      padding: "9px 13px",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      lineHeight: 1.5,
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

      {/* ── SINGLE SOURCE BREAK ── */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Your single source of truth,<br />
            that <em style={{ fontStyle: "italic", color: "var(--accent)" }}>operates.</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1rem", marginTop: 20, maxWidth: 480, margin: "20px auto 0" }}>
            Design thinking. Client comms. Team coordination. All in one place.
          </p>
        </div>
      </section>

      {/* ── FEATURE SECTIONS ── */}
      {features.map((f, i) => (
        <section key={f.id} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "var(--bg)" : "var(--surface)" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="feature-grid">
              <div style={{ order: f.flip ? 1 : 0 }} className={f.flip ? "feature-text-right" : ""}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>{f.label}</div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.1, marginBottom: 20 }}>
                  {f.heading[0]}<br /><em style={{ fontStyle: "italic" }}>{f.heading[1]}</em>
                </h2>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1.0125rem", lineHeight: 1.75 }}>{f.body}</p>
              </div>
              <div style={{ order: f.flip ? 0 : 1 }}>
                <FeatureMockup id={f.id} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── PRICING ── */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Pricing</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: 16 }}>
              Pricing that doesn&apos;t scale<br /><em style={{ fontStyle: "italic" }}>with your agency.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
              No per seat pricing. Early adopter pricing ends at 1,000 agencies.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="pricing-grid">
            {[
              {
                name: "Monthly",
                price: "$20",
                period: "/month",
                note: "Reduced rate. Locked for life.",
                cta: "Get started",
                highlight: false,
              },
              {
                name: "Lifetime",
                price: "$20",
                period: "/lifetime",
                note: "Lifetime access.",
                cta: "Get started",
                highlight: true,
              },
            ].map(plan => (
              <div key={plan.name} style={{
                background: plan.highlight ? "var(--surface)" : "var(--bg)",
                border: plan.highlight ? "1px solid var(--border-light)" : "1px solid var(--border)",
                borderRadius: 14,
                padding: "32px 28px",
                position: "relative",
              }}>
                {plan.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#fff", borderRadius: 100, padding: "4px 16px", fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Best value
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800, color: "var(--text)", lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.9rem" }}>{plan.period}</span>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 28 }}>{plan.note}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Unlimited users","Unlimited projects","Unlimited clients","500 AI calls/month","Money back guarantee"].map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="https://app.agencyflo.ai/signup" style={{
                  display: "block",
                  textAlign: "center",
                  background: plan.highlight ? "var(--accent)" : "transparent",
                  color: plan.highlight ? "#fff" : "var(--text)",
                  border: plan.highlight ? "none" : "1px solid var(--border-light)",
                  padding: "12px",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-subtle)", textAlign: "center", marginTop: 20 }}>
            † Top up AI calls at cost price. *Money-back within 3 months of use.
          </p>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 28 }}>Trusted by agencies</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            {["Kollo","R/GA","Accenture","ARQA"].map(logo => (
              <div key={logo} style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 800, color: "var(--text-subtle)", letterSpacing: "-0.02em" }}>{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontStyle: "italic", lineHeight: 1.4, color: "var(--text)", marginBottom: 32 }}>
            &ldquo;Using AgencyFlo can save a small agency thousands of hours per year — focusing on delivering real value for clients.&rdquo;
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--accent-muted)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--accent)", fontSize: "0.9rem" }}>JS</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem", color: "var(--text)" }}>Jonny Stuart</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-subtle)" }}>CEO, AgencyFlo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Questions, <em style={{ fontStyle: "italic" }}>answered.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", borderRadius: 14, overflow: "hidden" }}>
            {faqs.map(faq => (
              <div key={faq.question} style={{ background: "var(--bg)", padding: "22px 24px" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.975rem", marginBottom: 8, letterSpacing: "-0.01em", color: "var(--text)" }}>{faq.question}</p>
                <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-50%", left: "20%", width: 600, height: 600, background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 60%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "10%", width: 500, height: 400, background: "radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 60%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", top: "20%", right: "30%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 60%)", filter: "blur(40px)" }} />
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "120px 24px", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: 20 }}>
            Find your<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>flo state</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: 44, maxWidth: 400, margin: "0 auto 44px" }}>
            Limited lifetime offer, exclusive to the first 1,000 agencies.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.agencyflo.ai/signup" style={{ background: "#fff", color: "#000", padding: "14px 36px", borderRadius: 100, fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
              Get started
            </a>
            <a href="https://app.agencyflo.ai/signup" style={{ background: "transparent", color: "var(--text-muted)", padding: "14px 36px", borderRadius: 100, border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none", display: "inline-block" }}>
              Book a 15-min demo
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .feature-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .feature-text-right { order: 0 !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

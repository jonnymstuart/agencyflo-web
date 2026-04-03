import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About — Why we built AgencyFlo",
  description:
    "AgencyFlo was built by agency founders who experienced the tool sprawl problem first-hand. Here's why we built it and what we're working towards.",
};

export default function AboutPage() {
  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", url: "https://agencyflo.ai" },
          { name: "About", url: "https://agencyflo.ai/about" },
        ])}
      />

      {/* Header */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px 60px" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Home</Link>
            {" / "}About
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20 }}>
            We built what we couldn&apos;t find
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.75 }}>
            AgencyFlo started as an internal problem. We were running an agency — doing good work, winning clients, building a team — and we couldn&apos;t get a straight answer to simple questions.
          </p>
        </div>
      </section>

      {/* Story */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 12 }}>The problem</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
              Questions like &ldquo;are we making money on this account?&rdquo; or &ldquo;do we have capacity to take on another project next month?&rdquo; took half a day to answer. We had project management in one tool, time tracking in another, finances in a spreadsheet, client notes in email, and resource planning that lived in someone&apos;s head.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
              Every tool did its specific job reasonably well. None of them talked to each other. The result was a version of the truth that was always slightly out of date and always took too long to produce.
            </p>
          </div>

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: "0 8px 8px 0", padding: "20px 24px" }}>
            <p style={{ color: "var(--text-muted)", fontStyle: "normal", margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>
              &ldquo;We tried ClickUp, Notion, Productive, Scoro. Each one solved part of the problem. None of them solved the whole thing — and agency-specific economics, like real-time margin per project, were always an afterthought.&rdquo;
            </p>
            <p style={{ color: "var(--text-subtle)", fontSize: "0.8rem", margin: "12px 0 0", fontWeight: 600 }}>
              — Jonny Stuart, Founder
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 12 }}>What we built</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
              AgencyFlo is the operating system we wished existed. It connects every part of the agency — projects, resources, finances, clients — in a single system, so the truth is always current and always accessible.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
              We added FloAI — an AI assistant with full context across the agency — because we believed AI could change how agencies operate, not just how they write emails. FloAI can answer questions about your data, flag risks before they become problems, and draft the updates your team spends hours writing manually.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 12 }}>Who it&apos;s for</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
              AgencyFlo is built for agencies that are serious about growth — marketing agencies, design studios, digital agencies, development shops — who have outgrown basic tools and don&apos;t want to configure a generic platform to half-work for their context.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
              If you&apos;re still running your agency on a combination of ClickUp, spreadsheets, and hope, AgencyFlo is probably what you&apos;ve been looking for.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 12 }}>Where we are</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>
              AgencyFlo is in private early access. We&apos;re onboarding agencies now, working closely with them to refine the product, and building towards a full launch. Early access users get direct access to the founding team and preferred pricing at launch.
            </p>
          </div>

          <div style={{ marginTop: 16 }}>
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
              Join early access
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

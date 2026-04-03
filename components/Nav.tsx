"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      borderBottom: "1px solid var(--border)",
      background: "rgba(10,10,10,0.88)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: "1.2rem",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.03em",
        }}>
          Agency<span style={{ color: "var(--accent)" }}>Flo</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--text)"}
            onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--text-muted)"}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="https://app.agencyflo.ai/signup" className="btn-primary nav-desktop" style={{ padding: "8px 20px", fontSize: "0.8375rem" }}>
            Get early access
          </a>
          <button onClick={() => setOpen(!open)} className="nav-mobile" style={{
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: 4,
            display: "none",
          }} aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {open
                ? <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                : <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: "1px solid var(--border)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 500,
            }}>
              {l.label}
            </Link>
          ))}
          <a href="https://app.agencyflo.ai/signup" className="btn-primary" style={{ textAlign: "center", marginTop: 4 }}>
            Get early access
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

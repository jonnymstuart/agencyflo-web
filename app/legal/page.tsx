import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — AgencyFlo",
  description: "Privacy policy and terms of service for AgencyFlo.",
};

export default function LegalPage() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 80px" }}>
      <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 24 }}>
        <Link href="/" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Home</Link>
        {" / "}Legal
      </div>

      <h1 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>Legal</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: 48 }}>Last updated: April 2026</p>

      <div className="prose">
        <h2>Privacy Policy</h2>
        <p>
          AgencyFlo (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) takes your privacy seriously. This policy explains what data we
          collect, how we use it, and your rights.
        </p>

        <h3>Data we collect</h3>
        <ul>
          <li>Account information (name, email address, company name)</li>
          <li>Usage data to improve the platform and support your account</li>
          <li>Data you enter into AgencyFlo (projects, clients, team members, financials)</li>
        </ul>

        <h3>How we use your data</h3>
        <ul>
          <li>To provide and improve the AgencyFlo platform</li>
          <li>To communicate with you about your account, updates, and early access</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h3>Data storage</h3>
        <p>
          Your data is stored securely. We do not sell your data to third parties. We do not use your
          agency data to train AI models without explicit consent.
        </p>

        <h3>Your rights</h3>
        <p>
          You have the right to access, correct, or delete your data at any time. To exercise these
          rights, contact us at{" "}
          <a href="mailto:hello@agencyflo.ai">hello@agencyflo.ai</a>.
        </p>

        <hr />

        <h2>Terms of Service</h2>
        <p>
          By using AgencyFlo, you agree to these terms. If you do not agree, please do not use the
          platform.
        </p>

        <h3>Use of service</h3>
        <p>
          AgencyFlo is provided for legitimate business use by agencies. You may not use the platform
          for unlawful purposes or in ways that could harm other users or AgencyFlo.
        </p>

        <h3>Early access</h3>
        <p>
          During early access, features may change, and we may update these terms. We will notify
          early access users of material changes.
        </p>

        <h3>Liability</h3>
        <p>
          AgencyFlo is provided &ldquo;as is&rdquo; during early access. We are not liable for any loss or
          damage arising from your use of the platform beyond what is required by law.
        </p>

        <h3>Contact</h3>
        <p>
          For any legal enquiries, contact us at{" "}
          <a href="mailto:hello@agencyflo.ai">hello@agencyflo.ai</a>.
        </p>
      </div>
    </div>
  );
}

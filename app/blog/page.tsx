import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import SchemaOrg from "@/components/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog — Agency management, growth, and AI",
  description:
    "Practical articles on agency management, profitability, tooling, and how AI is changing the way agencies operate.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", url: "https://agencyflo.ai" },
          { name: "Blog", url: "https://agencyflo.ai/blog" },
        ])}
      />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 12 }}>
            <Link href="/" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Home</Link>
            {" / "}Blog
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
            The AgencyFlo Blog
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 560 }}>
            Practical thinking on agency management, profitability, and how AI is
            changing the way agencies operate.
          </p>
        </div>

        {posts.length === 0 ? (
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "48px 32px",
              textAlign: "center",
              color: "var(--text-muted)",
            }}
          >
            Articles coming soon.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "28px 32px",
                    transition: "border-color 0.15s",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 8, lineHeight: 1.35 }}>
                        {post.title}
                      </h2>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", margin: "0 0 12px", lineHeight: 1.6 }}>
                        {post.meta_description}
                      </p>
                      <span style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 600 }}>
                        Read article →
                      </span>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: "right" }}>
                      <time
                        dateTime={post.published_at}
                        style={{ color: "var(--text-subtle)", fontSize: "0.8rem" }}
                      >
                        {new Date(post.published_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

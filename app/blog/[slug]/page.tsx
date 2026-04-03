import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getPost, getAllSlugs } from "@/lib/posts";
import SchemaOrg from "@/components/SchemaOrg";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.meta_description,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.published_at,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const htmlContent = marked.parse(post.content) as string;

  return (
    <>
      <SchemaOrg
        data={articleSchema({
          title: post.title,
          description: post.meta_description,
          slug: post.slug,
          publishedAt: post.published_at,
        })}
      />
      <SchemaOrg
        data={breadcrumbSchema([
          { name: "Home", url: "https://agencyflo.ai" },
          { name: "Blog", url: "https://agencyflo.ai/blog" },
          { name: post.title, url: `https://agencyflo.ai/blog/${post.slug}` },
        ])}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: 32 }}>
          <Link href="/" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Home</Link>
          {" / "}
          <Link href="/blog" style={{ color: "var(--text-subtle)", textDecoration: "none" }}>Blog</Link>
          {" / "}
          <span style={{ color: "var(--text-muted)" }}>{post.title}</span>
        </div>

        {/* Hero image */}
        {post.hero_image && (
          <div style={{ marginBottom: 40, borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.hero_image}
              alt={post.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        )}

        {/* Article header */}
        <header style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: 16,
            }}
          >
            {post.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--accent-muted)", border: "1px solid rgba(139,92,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "var(--accent)", fontWeight: 700 }}>
                JS
              </div>
              <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>Jonny Stuart</span>
            </div>
            <span style={{ color: "var(--text-subtle)", fontSize: "0.8rem" }}>·</span>
            <time dateTime={post.published_at} style={{ color: "var(--text-subtle)", fontSize: "0.8rem" }}>
              {new Date(post.published_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Article body */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* CTA */}
        <div
          style={{
            marginTop: 64,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "32px 28px",
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 8, color: "var(--text)" }}>
            Ready to see AgencyFlo in action?
          </p>
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
    </>
  );
}

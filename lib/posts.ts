import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  meta_description: string;
  published_at: string;
  tags: string;
  hero_image?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function stripFramerHeader(raw: string): string {
  // Remove the FRAMER CMS STAGING comment block at the top
  return raw.replace(/^# FRAMER CMS STAGING.*?\n\n/s, "");
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const cleaned = stripFramerHeader(raw);
      const { data } = matter(cleaned);
      const slug = data.slug || file.replace(".md", "");

      return {
        slug,
        title: data.title || slug,
        meta_description: data.meta_description || "",
        published_at: data.published_at
          ? String(data.published_at)
          : new Date().toISOString().split("T")[0],
        tags: data.tags || "",
        hero_image: data.hero_image || undefined,
      } as PostMeta;
    })
    .sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

  return posts;
}

export function getPost(slug: string): Post | null {
  if (!fs.existsSync(POSTS_DIR)) return null;

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const cleaned = stripFramerHeader(raw);
    const { data, content } = matter(cleaned);
    const fileSlug = data.slug || file.replace(".md", "");

    if (fileSlug === slug) {
      return {
        slug: fileSlug,
        title: data.title || slug,
        meta_description: data.meta_description || "",
        published_at: data.published_at
          ? String(data.published_at)
          : new Date().toISOString().split("T")[0],
        tags: data.tags || "",
        hero_image: data.hero_image || undefined,
        content,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

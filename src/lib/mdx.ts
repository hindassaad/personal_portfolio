import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function getContentDir(type: "blog") {
  return path.join(process.cwd(), "content", type);
}

function parseMdxFile(filePath: string, slug: string): Post {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    description: data.description,
    tags: data.tags,
    readingTime: stats.text,
    content,
  };
}

function omitContent(post: Post): PostMeta {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { content, ...meta } = post;
  return meta;
}

export function getAllPosts(): PostMeta[] {
  const dir = getContentDir("blog");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      return omitContent(parseMdxFile(path.join(dir, f), slug));
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(getContentDir("blog"), `${slug}.mdx`);
  return parseMdxFile(filePath, slug);
}


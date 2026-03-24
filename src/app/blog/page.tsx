import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = { title: "blog" };

export default function BlogIndex() {
  const posts = getAllPosts();

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.slice(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-8">blog</h1>

      {posts.length === 0 ? (
        <p className="text-[#6e6e6e] text-sm">no posts yet.</p>
      ) : (
        <div className="space-y-10">
          {years.map((year) => (
            <div key={year}>
              <h2 className="text-xs uppercase tracking-widest text-[#6e6e6e] mb-4">{year}</h2>
              <div className="space-y-5">
                {byYear[year].map((post) => (
                  <div key={post.slug}>
                    <div className="flex items-baseline justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium"
                      >
                        {post.title}
                      </Link>
                      <span className="text-xs text-[#6e6e6e] shrink-0 ml-4">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    {post.description && (
                      <p className="text-sm text-[#6e6e6e] mt-0.5 leading-relaxed">
                        {post.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

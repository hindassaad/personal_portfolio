import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-semibold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mt-8 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-base">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="hover:text-black"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-[#444] text-base">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-[#444] text-base">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed text-base">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#6e6e6e] pl-4 my-4 text-[#6e6e6e] italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-[#ebeced] rounded px-1 py-0.5 text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[#ebeced] rounded p-4 my-4 overflow-x-auto text-sm font-mono">
      {children}
    </pre>
  ),
  hr: () => (
    <div
      className="my-8 h-px"
      style={{ background: "linear-gradient(to right, #89c4e1, #e88fa0, #e8c76a, #7ec89a, #b088e0, #e8a87c)" }}
    />
  ),
};

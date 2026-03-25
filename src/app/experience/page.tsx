import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { experience } from "@/data/experience";

const tagColors = [
  "bg-[#c8e6f5]",
  "bg-[#f5c8d0]",
  "bg-[#f5e4a0]",
  "bg-[#b8e8c8]",
  "bg-[#d8c0f0]",
  "bg-[#f5d0a8]",
];

export const metadata: Metadata = { title: "experience" };

export default function Experience() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold mb-8">experience</h1>

      <div className="space-y-10">
        {experience.map((entry) => (
          <div key={`${entry.company}-${entry.dates}`}>
            <div className="flex items-baseline justify-between mb-1">
              <h2 className="font-semibold text-base">
                {entry.url ? (
                  <a href={entry.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity">
                    {entry.company}
                    <ExternalLink size={13} className="text-[#6e6e6e]" />
                  </a>
                ) : (
                  entry.company
                )}
              </h2>
              <span className="text-sm text-[#6e6e6e] shrink-0 ml-4">{entry.dates}</span>
            </div>
            <p className="text-sm text-[#6e6e6e] mb-2">
              {entry.role} &middot; {entry.location}
            </p>
            {entry.description && (
              <p className="text-sm text-[#6e6e6e] leading-relaxed mb-3">{entry.description}</p>
            )}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {entry.tech.map((t, i) => (
                <span key={t} className={`text-xs px-2 py-0.5 rounded text-[#6e6e6e] ${tagColors[i % tagColors.length]}`}>
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-1.5">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-2">
                  <span className="text-[#6e6e6e] shrink-0">—</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

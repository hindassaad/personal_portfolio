import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";


const tagColors = [
  "bg-[#c8e6f5]",
  "bg-[#f5c8d0]",
  "bg-[#f5e4a0]",
  "bg-[#b8e8c8]",
  "bg-[#d8c0f0]",
  "bg-[#f5d0a8]",
];

export const metadata: Metadata = { title: "projects" };

export default function Projects() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-2">projects</h1>
      <p className="text-sm text-[#6e6e6e] mb-8">more projects in the works... </p>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="font-semibold text-base">{project.title}</h2>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#6e6e6e] hover:text-[#444] transition-colors"
                  >
                    repo
                    <ExternalLink size={13} />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#6e6e6e] hover:text-[#444] transition-colors"
                  >
                    demo
                    <ExternalLink size={13} />
                  </a>
                )}
                {project.softwareDemo && (
                  <a
                    href={project.softwareDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#6e6e6e] hover:text-[#444] transition-colors"
                  >
                    software
                    <ExternalLink size={13} />
                  </a>
                )}
                {project.hardwareDemo && (
                  <a
                    href={project.hardwareDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#6e6e6e] hover:text-[#444] transition-colors"
                  >
                    hardware
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
            {project.bullets ? (
              <ul className="space-y-1.5 mb-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed flex gap-2">
                    <span className="text-[#6e6e6e] shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed mb-2">{project.description}</p>
            )}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span
                  key={t}
                  className={`text-xs px-2 py-0.5 rounded text-[#6e6e6e] ${tagColors[i % tagColors.length]}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { education } from "@/data/experience";

export const metadata: Metadata = { title: "education" };

export default function Education() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold mb-8">education</h1>

      <div className="mb-10">
        <div className="flex items-baseline justify-between mb-1">
          <span className="font-semibold text-base">{education.school}</span>
          <span className="text-sm text-[#6e6e6e] shrink-0 ml-4">{education.dates}</span>
        </div>
        <p className="text-sm text-[#6e6e6e] mb-3">{education.degree}</p>
        <ul className="space-y-1">
          {education.awards.map((award) => (
            <li key={award} className="text-sm leading-relaxed flex gap-2">
              <span className="text-[#6e6e6e] shrink-0">—</span>
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-1">Relevant Courses</h2>
        <p className="text-sm text-[#6e6e6e] mb-3">what i&apos;ve studied</p>
        <ul className="space-y-2">
          {education.coursework.map((course) => (
            <li key={course.label} className="text-sm leading-relaxed flex gap-2">
              <span className="text-[#6e6e6e] shrink-0">—</span>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
              >
                {course.label}
                <ExternalLink size={12} className="text-[#6e6e6e]" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-base font-semibold mb-1">What is Mechatronics Engineering?</h2>
        <p className="text-sm text-[#6e6e6e] mb-3">
          the coolest discipline ever -{" "}
          <Link href="/blog/what-is-mechatronics" className="hover:opacity-70 transition-opacity">
            i wrote about it
          </Link>
        </p>
        <div className="space-y-3 text-sm leading-relaxed">
          <p>
            Mechatronics is a field combining software, electrical, and mechanical engineering.
          </p>
          <p>
            It grew out of robotics in 1960s Japan: arms that were rigid and blind became fluid once
            sensors, controls, and code evolved in tandem. The old design model was sequential: mechanical engineers design it, electrical engineers wire it together, then software engineers
            figure out how to control it. Mechatronics rejects that handoff. The real discipline is
            learning to hold all three domains in your head at once - and knowing which one is
            actually constraining the design.
          </p>
        </div>
      </div>
    </div>
  );
}

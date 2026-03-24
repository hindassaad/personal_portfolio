export type Project = {
  title: string;
  description?: string;
  bullets?: string[];
  tech: string[];
  url?: string;
  github?: string;
  hardwareDemo?: string;
  softwareDemo?: string;
};

export const projects: Project[] = [
  {
    title: "SnapReport - AI Report Generation Platform",
    bullets: [
      "An end-to-end platform that lets engineers document construction sites in the field and automatically generate structured inspection reports using AI - replacing a manual, hours-long process",
      "Hardware component (Raspberry Pi + camera + microphone) captures site photos in the field and uploads them to a backend via authenticated API",
      "Orchestrates a three-agent LangGraph pipeline - an Architect agent plans the report structure, a Writer agent generates section content using RAG over project specs and uploaded documents via Pinecone vector search, and a ReportBuilder assembles and persists the final output",
      "Human-in-the-loop checkpointing lets users review and edit the AI-generated plan before content generation begins",
      "Reports stored as JSONB in Supabase (PostgreSQL) and streamed to the frontend in real time via Trigger.dev background jobs",
      "LLM calls monitored and tracked via Helicone",
    ],
    tech: ["Next.js", "TypeScript", "LangGraph", "LangChain", "Supabase", "PostgreSQL", "Pinecone", "Trigger.dev", "Helicone", "Raspberry Pi", "Python"],
    github: "https://github.com/evan-placenis/DeskHQCapstone/tree/main",
    hardwareDemo: "https://drive.google.com/file/d/1K5DelvGvGw9c-whRpeGsLmQF98n4tl7B/view?resourcekey",
    softwareDemo: "https://drive.google.com/file/d/1yRWzRqrwmCvPgqGJIn1oJBKhYCGeDseb/view?resourcekey",
  },
  {
    title: "Contactless Computer Control",
    bullets: [
      "Contactless AI-powered real-time user interface for users with limited mobility to control a computer's cursor and keyboard using strictly facial movements and finger taps",
      "Embedded system component built with Arduino and C++ to detect finger taps as click inputs",
      "Computer vision pipeline using OpenCV to track facial landmarks and translate head movement to cursor position in real time",
    ],
    tech: ["Python", "OpenCV", "PyGame", "C++", "Arduino"],
    url: "https://drive.google.com/file/d/1DxGlSE2owFZOJs22tX6H_FMDAvO_0IXD/view?usp=sharing",
  },
];

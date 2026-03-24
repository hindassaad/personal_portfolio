export type ExperienceEntry = {
  company: string;
  url?: string;
  role: string;
  dates: string;
  location: string;
  tech: string[];
  description?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Shopify Inc",
    url: "https://www.shopify.com/ca",
    role: "Software Engineering Intern, Backend",
    dates: "Sep 2025 – Dec 2025",
    location: "Toronto, ON",
    tech: ["Ruby", "GraphQL", "React", "TypeScript", "GCP", "SQL", "Sidekiq", "BigQuery"],
    bullets: [
      "Software Engineer on the Retail - Inventory, Search & Fulfillment team",
      "Architected backend job processing for e-commerce app to bound execution times for 11.2M+ jobs, stabilizing job service times from a variable 2 hrs to a max of 1.1 mins & enabling meaningful alerts with low latency (<20ms)",
      "Reduced job wait times by 90% by provisioning GCP worker pods & weighted job queues to optimize server usage",
      "Eliminated $34.7M erroneous charges by developing row-level SQL filters to prevent duplicate items during checkout",
      "Led team's first API migration & moved pagination from frontend to backend to restore visibility to $1.75M+ GMV",
      "Led implementation of feature flag infrastructure with low error rate (<0.1%) to support phased feature rollouts and rollbacks to 8.2k+ merchant stores & enable peer engineers to safely deploy hundreds of PRs",
    ],
  },
  {
    company: "Ciena Corp",
    url: "https://www.ciena.com/",
    role: "Software Engineering Intern, Backend + Infra",
    dates: "Sep 2024 – Sep 2025",
    location: "Remote, CAN",
    tech: ["Python", "FastAPI", "PostgreSQL", "AWS", "SQLAlchemy", "Terraform", "DataDog"],
    bullets: [
      "Software Engineer on the Productivity Engineering Tools team",
      "Designed REST API integrating Rapid7, Armis & ServiceNow to automate vulnerability management with network blocking for non-compliant devices across 4000+ Ciena devices scanned weekly, for use by security team",
      "Reduced query times to database from 2,000 ms to 12 ms by using aggregator functions and indexing foreign keys",
      "Shipped Atlassian token expiration mail service to preempt authentication failures for 150+ Ciena engineers",
      "Wrote 410+ unit tests to increase test coverage from 50% to 88% using unittest and PyTest frameworks",
      "Reduced API response latency by 94% by parallelizing queries using Pythonic multi-threading",
      "Implemented full system observability with logs, metrics, monitors, and dashboards using Datadog",
      "Mentored peer engineers on back-end development and best practices",
    ],
  },
  {
    company: "Jetson Infinity",
    url: "https://www.jetsoninfinity.com/",
    role: "Software Engineering Intern",
    dates: "May 2024 – Aug 2024",
    location: "Hamilton, ON",
    tech: ["Python", "C++", "OpenCV", "Llama3", "YOLOv5", "Selenium"],
    bullets: [
      "Implemented chatbot for use in Zoom pitches with clients leading to a 75% close rate and generated $60K in revenue",
      "Developed 9 AI-based modules for robotic arm to teach OOP concepts to students across high schools in California",
      "Developed real-time robotic arm module that accepts user input via natural language processing to perform physical actions (i.e. fold your laundry), using machine learning for object detection",
    ],
  },
  {
    company: "Noze Inc",
    url: "https://www.noze.ca/",
    role: "Software Engineering Intern",
    dates: "May 2023 – Aug 2023",
    location: "Montreal, QC",
    tech: ["Python", "C++", "React", "TypeScript"],
    bullets: [
      "Presented intern project to Bill & Melinda Gates Foundation to secure $1M grant for the company",
      "Spearheaded creation of embedded system to automate quality checks of PCBs, halving time spent on QA",
      "Designed PCB selection UI to eliminate manual QA-related errors for 12+ lab technicians, saving $600 daily",
      "Developed Standard Operating Procedure and maintained software documentation in an agile environment",
    ],
  },
  {
    company: "McMaster Baja Racing",
    url: "https://mcmasterbaja.ca/",
    role: "Data Acquisitions Subteam Member",
    dates: "Sep 2023 – Apr 2024",
    location: "Hamilton, ON",
    tech: ["C++", "PCBs", "Soldering", "Electrical Wiring"],
    description: "Student engineering team that designs and builds a single-seater off-road vehicle from scratch to compete in the SAE Baja intercollegiate series.",
    bullets: [
      "Designed custom Throttle Position Sensor and enclosure, providing real-time max-acceleration feedback to the driver and achieving <50ms response time during extreme terrain weather conditions",
    ],
  },
  {
    company: "McMaster Middle Eastern Students' Association",
    url: "https://msumcmaster.ca/initiative/middle-eastern-students-association-mesa/",
    role: "President",
    dates: "Sep 2022 – Apr 2025",
    location: "Hamilton, ON",
    tech: ["Agile", "Project Management", "Team Leadership", "Event Planning"],
    bullets: [
      "Led a 22 member team in the planning, marketing and execution of on-campus events and fundraisers",
      "Spearheaded initiatives to introduce AI-based tools, resulting in a 30% reduction in time spent on routine tasks",
      "Used agile methodologies for project management, leading projects from concept to final implementation",
    ],
  },
];

export const education = {
  school: "McMaster University",
  degree: "Bachelor of Engineering, Mechatronics Engineering",
  dates: "Sep 2021 – Dec 2026 (Expected)",
  awards: [
    "Dean's Honour List (2021–2025)",
    "Engineering Award of Excellence (95%+ Admissions Average)",
  ],
  coursework: [
    { label: "Data Structures & Algorithms", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=267958" },
    { label: "Networks & Security", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=265626" },
    { label: "Operating Systems", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=56&coid=279719" },
    { label: "Compilers", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=56&coid=281005" },
    { label: "AI", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=267550" },
    { label: "Software Design", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=267778" },
    { label: "Real Time Systems", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=265850" },
    { label: "Robotics", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=265836" },
    { label: "Scientific Computation", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=53&coid=268142#:~:text=MECHTRON%203X03%20%2D%20Scientific%20Computation&text=Computer%20arithmetic%20and%20roundoff%20error,methods%20for%20ordinary%20differential%20equations." },
    { label: "Probability and Statistics", url: "https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=56&coid=279748" },
  ],
};

export const skills = {
  languages: ["Python", "C/C++", "SQL", "Ruby", "TypeScript"],
  frameworks: ["React", "Ruby on Rails", "GraphQL", "FastAPI", "SQLAlchemy", "PyTest", "Jest"],
  tools: ["AWS", "GCP", "PostgreSQL", "Datadog", "Redis", "Terraform", "Postman", "Git", "Bash", "Graphite", "npm"],
};

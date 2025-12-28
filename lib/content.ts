import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  contact: {
    name: "Rashi Agrawal",
    phone: "+91-81075 98176",
    location: "New Delhi, India",
    email: "rashiagrawal2099@gmail.com",
  },
  summary:
    "Customer‑focused operations professional with 5+ years of experience across enterprise consulting and services‑driven startup environments. Strong at managing client communication, content quality, and internal coordination in remote, fast‑paced teams. Known for attention to detail, structured problem‑solving, and dependable execution.",
  skills: [
    {
      title: "Customer & Operations Support",
      skills: [
        "Customer communication",
        "Issue triaging",
        "Ticket handling",
        "Escalation management",
        "SLA awareness",
        "Service coordination",
      ],
    },
    {
      title: "Content & Quality Review",
      skills: [
        "Video and content quality checks",
        "Guideline compliance",
        "Audio/video validation",
        "Detail audits",
        "Review checklists",
      ],
    },
    {
      title: "Tools & Systems",
      skills: [
        "JIRA",
        "Trello",
        "HubSpot-style ticketing workflows",
        "Google Workspace",
        "MS Excel",
        "Internal dashboards",
      ],
    },
    {
      title: "Process & Collaboration",
      skills: [
        "SOP documentation",
        "Workflow optimization",
        "Cross-functional coordination",
        "Remote team collaboration",
      ],
    },
    {
      title: "Communication & Work Style",
      skills: [
        "Clear written English",
        "Professional stakeholder handling",
        "Independent execution",
        "Time management",
      ],
    },
  ],
  experience: [
    {
      title: "Customer Operations & Content Support Analyst",
      company: "BlinkLaunch",
      location: "Remote / India",
      startDate: "July 2023",
      endDate: "Present",
      description:
        "BlinkLaunch is a services-focused startup working with international clients across the US, Canada, and Europe to support digital products built using modern web and emerging technologies.",
      responsibilities: [
        "Served as a key communication and operations bridge between clients and internal delivery teams.",
        "Managed customer requests, feedback, and issues using structured tracking and follow-up workflows.",
        "Reviewed client-facing content, recorded demos, walkthroughs, and media assets for clarity, completeness, and quality standards.",
        "Flagged and documented quality issues such as incomplete recordings, poor audio/video alignment, or guideline deviations.",
        "Coordinated timelines, task hand-offs, and role assignments across multiple parallel client engagements.",
        "Documented recurring issues and process gaps, contributing to improved internal SOPs and smoother operations.",
      ],
      impact: [
        {
          description:
            "Improved turnaround time and consistency across client deliverables.",
        },
        {
          description:
            "Reduced rework through clearer review standards and documentation.",
        },
        {
          description:
            "Strengthened client trust through reliable communication and predictable execution.",
        },
      ],
    },
    {
      title: "Business Technology Analyst",
      company: "Deloitte USI",
      location: "Bengaluru, India",
      startDate: "September 2020",
      endDate: "June 2023",
      responsibilities: [
        "Designed and executed 250+ functional and regression test cases for enterprise applications.",
        "Validated Oracle ERP and EPM Cloud releases to ensure data accuracy and system reliability.",
        "Logged, tracked, and coordinated defect resolution with cross-functional teams.",
        "Maintained detailed documentation for test outcomes, issues, and release readiness.",
        "Led daily status syncs for a QA team of 8 in agile delivery environments.",
      ],
      awards: [
        {
          title: "Applause Award",
          date: "January 2022",
        },
        {
          title: "Spot Award",
          date: "March 2021",
        },
      ],
    },
  ],
  education: {
    degree: "B.Tech – Electrical & Electronics Engineering",
    institution: "Banasthali University",
    period: "2016 – 2020",
    cgpa: "8.0",
  },
  additionalInfo: {
    highlights: [
      "Former Radio Jockey, Radio Banasthali — strong communication and voice clarity",
      "Comfortable working independently in fully remote, deadline-driven roles",
    ],
  },
};

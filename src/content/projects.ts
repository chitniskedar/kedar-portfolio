// src/content/projects.ts
import { projectAssets } from "../assets";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  detailIntro?: string;
  detailGallery?: {
    src: string;
    alt: string;
  }[];
  detailSections?: {
    title: string;
    body: string;
  }[];
  tech: string[];
  github: string;
  live?: string;
  image: string;
  featured: boolean;
  status: "Completed" | "In Progress";
  year: string;
}

// Add future projects here.
// Minimum fields to add: `id`, `title`, `description`, `tech`, `github`, `image`, `featured`, `status`, `year`.
// Optional detail-page fields:
// - `longDescription`: short summary used in the carousel card
// - `detailIntro`: lead paragraph shown on the project page
// - `detailGallery`: screenshots or visuals for the project detail page
// - `detailSections`: 2-4 sections for problem, approach, outcome, etc.
// Keep `id` URL-safe because it becomes the project page path: `/projects/<id>`.
export const projects: Project[] = [
  {
    id: "pesuflow",
    title: "PESUflow",
    description:
      "A smart Android application that filters and categorizes PES University notifications, helping students focus only on updates that are relevant.",

    longDescription:
      "PESUflow parses university notification data and applies customizable filtering, categorization, and organization rules to deliver a cleaner and more relevant notification experience.",
    detailIntro:
      "PESUflow is an Android utility built to cut through notification overload for students by reshaping raw university updates into something far more readable and personal.",
    detailGallery: [
      {
        src: projectAssets.pesuflowOverview,
        alt: "PESUflow mobile screens overview",
      },
    ],
    detailSections: [
      {
        title: "Problem",
        body: "University notifications often arrive in a noise un-sorted stream, mixing important academic updates with irrelavant messages. The goal was to help students quickly focus on what actually matters to them.",
      },
      {
        title: "Approach",
        body: "The app parses incoming notification data, applies filtering rules, and lets users organize updates through categories that match their own priorities rather than the platform's default feed.",
      },
      {
        title: "Current Direction",
        body: "The project is still in progress, with the current focus on improving rule customization, polishing the Android experience, and making the filtering system feel effortless in daily use.",
      },
    ],

    tech: [
      "Kotlin",
      "Android",
      "Material Design",
      "Notifications"
    ],

    github: "https://github.com/chitniskedar/PESUflow",

    image: "/projects/pesuflow.png",

    featured: false,

    status: "In Progress",

    year: "2026",
  },

  {
    id: "examino",
    title: "Examino",

    description:
      "A local-first AI-powered learning platform that transforms PDFs into adaptive MCQ question banks.",

    longDescription:
      "Examino combines PDF parsing, LLM-assisted question generation, and structured datasets to create a personalized learning experience with adaptive difficulty.",
    detailIntro:
      "Examino explores how local-first study tools can become more adaptive by turning static study material into dynamic MCQ practice sessions.",
    detailGallery: [
      {
        src: projectAssets.examinoUpload,
        alt: "Examino upload workflow",
      },
      {
        src: projectAssets.examinoHome,
        alt: "Examino home dashboard",
      },
    ],
    detailSections: [
      {
        title: "Problem",
        body: "Students often revise from static PDFs that do not naturally translate into interactive practice. That gap makes revision slower and less tailored to weak areas.",
      },
      {
        title: "Approach",
        body: "Examino parses documents, extracts useful learning structure, and uses LLM-assisted question generation to build MCQ banks that can respond to the learner's level over time.",
      },
      {
        title: "Why It Matters",
        body: "The project brings together AI tooling and classic study workflows, aiming for a system that feels practical and focused rather than flashy.",
      },
    ],

    tech: [
      "Python",
      "LLMs",
      "PDF Parsing",
      "HTML"
    ],

    github: "https://github.com/chitniskedar/examino",

    live: "https://examino.onrender.com/",

    image: "/projects/examino.png",

    featured: false,

    status: "Completed",

    year: "2026",
  },

  {
    id: "netpay",
    title: "NetPay",

    description:
      "A peer-to-peer expense management application built for seamless shared financial tracking.",

    longDescription:
      "NetPay leverages Firebase Authentication and Firestore to securely manage shared expenses with real-time synchronization and intuitive group management.",
    detailIntro:
      "NetPay is a shared-expense app focused on making day-to-day group tracking feel lightweight, fast, and dependable.",
    detailGallery: [
      {
        src: projectAssets.netpayOverview,
        alt: "NetPay mobile screens overview",
      },
    ],
    detailSections: [
      {
        title: "Problem",
        body: "Group spending quickly becomes messy when balances, reimbursements, and shared entries are tracked manually across chats or notes.",
      },
      {
        title: "Approach",
        body: "Using Firebase Authentication and Firestore, NetPay keeps accounts secure while syncing shared expenses in real time so every group member sees an up-to-date state.",
      },
      {
        title: "Outcome",
        body: "The result is a cleaner mobile workflow for tracking, splitting, and reviewing expenses without the overhead of spreadsheets or delayed updates.",
      },
    ],

    tech: [
      "Kotlin",
      "Firebase",
      "Firestore", 
      "Android"
    ],

    github: "https://github.com/chitniskedar/NetPay",

    image: "/projects/netpay.png",

    featured: false,

    status: "Completed",

    year: "2026",
  },

  {
    id: "portfolio",
    title: "Interactive Portfolio",

    description:
      "A handcrafted developer portfolio built with a strong focus on typography, motion, and reusable component architecture.",

    longDescription:
      "Designed from scratch using React, Tailwind CSS, and Framer Motion to create a fast, accessible, and premium browsing experience.",
    detailIntro:
      "This portfolio was both a personal site and a design-and-engineering sandbox where layout, motion, and component systems come together.",
    detailGallery: [
      {
        src: projectAssets.portfolioRoom,
        alt: "Interactive portfolio hero artwork",
      },
    ],
    detailSections: [
      {
        title: "Intent",
        body: "The goal was to avoid a generic developer portfolio and instead create something with stronger visual rhythm, cleaner motion, and more deliberate storytelling.",
      },
      {
        title: "Build",
        body: "The site uses React, TypeScript, Tailwind CSS, and motion-driven interactions, with reusable UI primitives that keep the visual system consistent as sections evolve.",
      },
      {
        title: "Evolution",
        body: "Because the portfolio is an active project, it doubles as a living space for experimenting with themes, layouts, galleries, and richer project presentation patterns.",
      },
    ],

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],

    github: "https://github.com/chitniskedar/interactive-portfolio",

    live: "https://kedar-chitnis.vercel.app",

    image: "/projects/portfolio.png",

    featured: false,

    status: "Completed",

    year: "2026",

    
  },
];

export type TechCategory = "frontend" | "backend" | "mobile" | "others";

export type TechStack = Record<TechCategory, readonly string[]>;

export const TECH_STACK: TechStack = {
  frontend: [
    "HTML",
    "CSS",
    "React",
    "Vue.js",
    "Next.js",
    "Javascript",
    "Typescript",
    "Recoil",
    "Redux",
    "React-Query",
    "Bootstrap",
    "Styled-Components",
    "Tailwind CSS",
  ],
  backend: ["Python", "Django", "Node.js", "Express", "REST API"],
  mobile: ["Kotlin", "Jetpack Compose"],
  others: [
    "Git",
    "Docker",
    "Jenkins",
    "Visual Studio Code",
    "Jira",
    "Notion",
    "Figma",
    "Gitlab",
    "Github",
    "Mock Service Worker",
    "PWA",
  ],
} as const;

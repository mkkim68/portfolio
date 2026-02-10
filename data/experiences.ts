type Experience = {
  name: string;
  institute: string;
  descriptions: readonly string[];
  period: {
    start: string;
    end: string;
  };
};

type Experiences = readonly Experience[];

export const EXPERIENCES: Experiences = [
  {
    name: "Bachelor's Degree in Electronic Engineering",
    institute: "KyungHee Univ.",
    descriptions: [
      "Learned fundamentals of programming through courses in Python, web programming (HTML), object-oriented programming, and C++.",
      "Implemented a simple game using Pygame as a term project in a web-Python course.",
      "Ranked 2nd in class for the 'Adventure Design' course by designing a complete Arduino-based project, including 3D modeling, circuit design, and C programming for hardware control.",
    ],
    period: {
      start: "Mar 2019",
      end: "Aug 2023",
    },
  },
  {
    name: "Software Engineering Bootcamp",
    institute: "SSAFY(Samsung Software Academy For Youth)",
    descriptions: [
      "Strengthened problem-solving skills by learning Python, JavaScript, and core computer science fundamentals, including algorithms and data structures.",
      "Participated in multiple team projects in an industry-like development environment.",
      "Gained experience in collaboration, communication, and development workflows beyond purely technical skills.",
    ],
    period: {
      start: "Jan 2024",
      end: "Dec 2024",
    },
  },
  {
    name: "Full-stack Web Development Bootcamp",
    institute: "Goorm",
    descriptions: [
      "Currently training as a full-stack web developer with a focus on TypeScript, React, Java, and Spring.",
      "Building team projects to gain hands-on experience across both frontend and backend development.",
    ],
    period: {
      start: "Dec 2025",
      end: "",
    },
  },
];

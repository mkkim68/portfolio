type Lang = "en" | "ko";

export type ExperienceId = "electronic" | "ssafy" | "goorm";

type Experience = {
  id: ExperienceId;
  name: string;
  institute: string;
  descriptions: readonly string[];
  period: {
    start: string;
    end: string;
  };
};

type ExperiencesByLang = Record<Lang, readonly Experience[]>;

export const EXPERIENCES: ExperiencesByLang = {
  en: [
    {
      id: "electronic",
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
      id: "ssafy",
      name: "Software Engineering Bootcamp",
      institute: "SSAFY (Samsung Software Academy For Youth)",
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
      id: "goorm",
      name: "Full-stack Web Development Bootcamp",
      institute: "Goorm",
      descriptions: [
        "Currently training as a full-stack web developer with a focus on TypeScript, React, Java, and Spring.",
        "Building team projects to gain hands-on experience across both frontend and backend development.",
      ],
      period: {
        start: "Dec 2025",
        end: "Present",
      },
    },
  ],
  ko: [
    {
      id: "electronic",
      name: "전자공학 학사",
      institute: "경희대학교",
      descriptions: [
        "전공 기초 과목을 통해 Python, 웹 프로그래밍(HTML), 객체지향 프로그래밍, C++ 등 프로그래밍 기초를 학습했습니다.",
        "웹·파이썬 수업의 텀프로젝트로 Pygame 기반의 간단한 게임을 구현한 경험이 있습니다.",
        "'Adventure Design' 과목에서 3D 모델링, 회로 설계, C 기반 동작 구현까지 포함한 아두이노 프로젝트를 완성해 분반 2등을 기록했습니다.",
      ],
      period: {
        start: "2019.03",
        end: "2023.08",
      },
    },
    {
      id: "ssafy",
      name: "소프트웨어 엔지니어링 부트캠프",
      institute: "SSAFY (삼성 청년 SW 아카데미)",
      descriptions: [
        "Python, JavaScript 및 알고리즘/자료구조 등 CS 기초를 학습하며 문제 해결 역량을 강화했습니다.",
        "현업과 유사한 협업 환경에서 여러 팀 프로젝트를 수행했습니다.",
        "기술 성장뿐 아니라 협업/커뮤니케이션/개발 프로세스 등 소프트 스킬의 중요성을 체감했습니다.",
      ],
      period: {
        start: "2024.01",
        end: "2024.12",
      },
    },
    {
      id: "goorm",
      name: "풀스택 웹 개발 부트캠프",
      institute: "구름(goorm)",
      descriptions: [
        "TypeScript, React, Java, Spring을 중심으로 풀스택 개발 역량을 학습하고 있습니다.",
        "팀 프로젝트를 통해 프론트엔드/백엔드 전반의 실무형 경험을 쌓고 있습니다.",
      ],
      period: {
        start: "2025.12",
        end: "현재",
      },
    },
  ],
};

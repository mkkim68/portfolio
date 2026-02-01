type Project = {
  title: string;
  summary: string;
  description: string;
  techs: readonly string[];
  github: string;
  image: string;
};

type Projects = readonly Project[];

export const PROJECTS: Projects = [
  {
    title: "Coin Forest",
    summary: "// _data-driven.finance.platform",
    description:
      "A data-driven financial platform that allows users to explore savings and deposit products, manage personalized profiles, and receive personalized financial product recommendations based on data analysis.",
    techs: ["Vue.js", "Javascript", "Bootstrap", "Django", "Pandas"],
    github: "https://github.com/mkkim68/CoinForest",
    image: "/imgs/coinforest.jpeg",
  },
  {
    title: "JamJam",
    summary: "// _location-based.meeting.game",
    description:
      "A real-time meeting service that enables voice communication and interaction between participants using WebRTC and WebSocket, featuring live audio streaming, participant state synchronization, and interactive UI feedback.",
    techs: [
      "React",
      "Javascript",
      "Recoil",
      "Styled-Components",
      "WebRTC(OpenVidu)",
      "WebSocket(STOMP)",
    ],
    github: "https://github.com/mkkim68/jamjam",
    image: "/imgs/jamjam.jpeg",
  },
  {
    title: "뉴쓱(Newsseug)",
    summary: "// _shortform.news.platform",
    description:
      "A short-form news platform designed to improve news consumption by presenting articles in video-style short-form content, supported by simple interaction features for user engagement.",
    techs: [
      "React",
      "Typescript",
      "Redux",
      "React-Query",
      "Styled-Components",
      "Docker",
      "Jenkins",
      "Mock Service Worker",
      "PWA",
    ],
    github: "https://github.com/mkkim68/newsseug",
    image: "/imgs/newsseug.jpeg",
  },
  {
    title: "C-LASSIK",
    summary: "// _multisensory.music.streaming",
    description:
      "A multisensory music streaming application designed to enhance classical music appreciation by combining audio playback with visual and tactile feedback, built as an Android app with optional VR device support.",
    techs: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/mkkim68/C-LASSIK",
    image: "/imgs/classik.png",
  },
  {
    title: "Portfolio",
    summary: "// _interactive-portfolio",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    techs: ["Next.js", "React", "Typescript", "Tailwind CSS"],
    github: "https://github.com/mkkim68/portfolio",
    image: "/imgs/dd.png",
  },
] as const;

type Lang = "en" | "ko";

type Project = {
  title: string;
  summary: string;
  description: string;
  techs: readonly string[];
  github: string;
  image: string;
};

type ProjectsByLang = Record<Lang, readonly Project[]>;

export const PROJECTS: ProjectsByLang = {
  en: [
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
      title: "Newsseug",
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
      description:
        "An interactive portfolio website built to showcase projects, skills, and design sensibility, focusing on smooth UI interactions, theming, and frontend architecture.",
      techs: ["Next.js", "React", "Typescript", "Tailwind CSS"],
      github: "https://github.com/mkkim68/portfolio",
      image: "/imgs/portfolio.png",
    },
  ],
  ko: [
    {
      title: "Coin Forest",
      summary: "// _데이터_기반_금융_플랫폼",
      description:
        "사용자가 예·적금 상품을 탐색하고 개인화된 프로필을 관리하며, 데이터 분석을 기반으로 맞춤형 금융 상품 추천을 받을 수 있도록 설계된 데이터 중심 금융 플랫폼입니다.",
      techs: ["Vue.js", "Javascript", "Bootstrap", "Django", "Pandas"],
      github: "https://github.com/mkkim68/CoinForest",
      image: "/imgs/coinforest.jpeg",
    },
    {
      title: "JamJam",
      summary: "// _위치_기반_실시간_미팅_게임",
      description:
        "WebRTC, WebSocket을 활용해 참가자 간 음성 통신과 상호작용을 지원하는 실시간 미팅 서비스로, 모임 참가자들의 위치를 기반으로 최적의 중심 장소를 찾고 게임 요소를 통해 모임 장소를 변경하는 기능을 제공합니다. 중심 장소 찾기와 게임을 통한 장소 변경으로 모임의 편의성과 재미를 모두 제공합니다.",
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
      summary: "// _숏폼_뉴스_플랫폼",
      description:
        "뉴스 소비 경험을 개선하기 위해 영상형 숏폼 콘텐츠로 기사를 제공하는 뉴스 플랫폼입니다. 사용자들은 간단한 숏폼 영상으로 최신 뉴스를 빠르게 확인하고, 접근성을 높인 인터페이스를 통해 다양한 뉴스를 소비할 수 있습니다.",
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
      summary: "// _유니버셜_디자인_음악_스트리밍",
      description:
        "C-LASSIK은 공감각적 클래식 음악 감상을 위한 안드로이드 기반 음악 스트리밍 애플리케이션으로, 선택적으로 VR 기기 연동을 지원합니다. 청각, 시각, 촉각을 사용하여 비장애인뿐만 아니라 청각장애인도 음악을 즐길 수 있도록 유니버셜 컨텐츠를 제공합니다.",
      techs: ["Kotlin", "Jetpack Compose"],
      github: "https://github.com/mkkim68/C-LASSIK",
      image: "/imgs/classik.png",
    },
    {
      title: "Portfolio",
      summary: "// _반응형_포트폴리오",
      description:
        "프로젝트와 기술 스택, 디자인 감각을 효과적으로 보여주기 위해 제작한 반응형 포트폴리오 웹사이트로, 부드러운 UI 인터랙션과 테마 전환, 프론트엔드 아키텍처에 중점을 두었습니다.",
      techs: ["Next.js", "React", "Typescript", "Tailwind CSS"],
      github: "https://github.com/mkkim68/portfolio",
      image: "/imgs/portfolio.png",
    },
  ],
} as const;

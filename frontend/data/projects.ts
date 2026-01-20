export const PROJECTS = [
  {
    title: "JamJam",
    summary: "// _location-based.meeting.game",
    description:
      "모임 참가자들의 위치를 기반으로 최적의 중심 장소를 찾고, 게임 요소를 통해 모임 장소를 변경하는 서비스입니다. 중심 장소 찾기와 게임을 통한 장소 변경으로 모임의 편의성과 재미를 모두 제공합니다.",
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
      "뉴쓱은 사람들이 뉴스를 더 쉽고 재밌게 소비할 수 있도록 뉴스 기사를 숏폼 형태로 제공하는 커뮤니티 플랫폼입니다. 사용자들은 간단한 숏폼 영상으로 최신 뉴스를 빠르게 확인하고, 접근성을 높인 인터페이스를 통해 다양한 뉴스를 소비할 수 있습니다.",
    techs: [
      "React",
      "Typescript",
      "Redux",
      "React-Query",
      "Styled-Components",
      "Docker",
      "Jenkins",
      "Mock Service Worker",
    ],
    github: "https://github.com/mkkim68/newsseug",
    image: "/imgs/newsseug.jpeg",
  },
  {
    title: "C-LASSIK",
    summary: "// _multisensory.music.vr",
    description:
      "C-LASSIK은 공감각적 클래식 음악 감상을 위한 VR 음악 스트리밍 서비스입니다. 청각, 시각, 촉각을 사용하여 비장애인뿐만 아니라 청각장애인도 음악을 즐길 수 있도록 유니버셜 컨텐츠를 제공합니다.",
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

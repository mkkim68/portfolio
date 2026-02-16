// data/i18n/ko.ts
export const ko = {
  home: {
    gameHint: "// 게임을 완료하면 다음으로 진행할 수 있습니다",
    githubHint: "// GitHub 페이지에서도 확인할 수 있습니다",
    githubHintMobile: "// GitHub 프로필:",
  },
  game: {
    title: "타이핑 챌린지",
    descriptionParts: {
      before: "",
      highlight: "Start ",
      after:
        "버튼을 누르면 시작합니다. 카운트다운이 끝나면 문장을 정확히 입력하세요.",
    },
    hint: "// 최대한 빠르게 코드를 입력하세요",
    form: {
      placeholder: "여기에 입력하세요...",
      finished: "기록: ",
    },
    info: {
      acc: "정확도",
      err: "오류",
      pos: "진행도",
    },
  },
  contact: {
    sendEmail: "이메일 보내기",
    social: {
      linkedin: "LinkedIn 프로필",
      github: "GitHub 프로필",
      velog: "Velog 글",
      instagram: "Instagram 계정",
    },
  },
  bio: {
    introduction: {
      p1Lines: [
        "안녕하세요, 한국을 기반으로 활동하는 프론트엔드 개발자 김민경입니다.",
        "전자공학을 전공하며 처음 프로그래밍을 접했고, 전공 기초 과목을 통해",
        "코드로 문제를 해결하는 경험을 쌓기 시작했습니다. 커리큘럼은 주로",
        "하드웨어 중심이었지만, 저는 점점 회로보다 소프트웨어의 논리와",
        "문제 해결 과정에 더 큰 흥미를 느끼게 되었습니다.",
        "어느 순간 신호나 회로 설계보다, 사용자가 직접 상호작용할 수 있는",
        "무언가를 코드로 만들어내는 일이 훨씬 즐겁다는 걸 깨달았고,",
        "그 계기를 통해 소프트웨어 개발자로 진로를 전향하게 되었습니다.",
      ],
      p2Lines: [
        "이후 개발자로서의 전문성을 키우기 위해 집중적인 학습과",
        "개발자 부트캠프 과정을 거치며 웹 개발과 프론트엔드 엔지니어링에 대한",
        "실무 경험을 쌓았습니다. 아이디어를 실제로 동작하는 인터랙션과",
        "구조화된 UI로 구현하는 과정을 즐기며,",
        "유지보수성과 확장성을 고려한 인터페이스를 만들기 위해",
        "지속적으로 더 나은 방법을 탐구하고 있습니다.",
      ],
    },
    titles: {
      experience: "주요 경험",
      exploring: "현재 학습 중",
    },
  },
  education: {
    ssafy: {
      title: "SSAFY 11기",
      subtitle: "삼성 주관 소프트웨어 개발 교육 프로그램",
      code: {
        header: "# SSAFY 11기",
        programLine: "- 삼성 주관 집중 소프트웨어 개발 교육 프로그램",
        studiedBefore: "",
        studiedTech: "**Python, JavaScript, Django, Vue.js**",
        studiedAfter:
          " 등을 학습하고 알고리즘 및 팀 프로젝트를 통해 문제 해결 역량을 강화함",
        projectsHeader: "## 프로젝트",
        jamjam: {
          title: "### JamJam",
          description: "- 실시간 회의 서비스",
          builtWithLabel: "- 기술: ",
          tech: "_JavaScript, React, Styled-components, Recoil_",
          award: "- 🏆 수상 프로젝트",
        },
        newsseug: {
          title: "### Newsseug",
          description: "- 숏폼 뉴스 플랫폼",
          builtWithLabel: "- 기술: ",
          tech: "_TypeScript, React, Redux, React-Query, Styled-components_",
          award: "- 🏆 수상 프로젝트",
        },
        classik: {
          title: "### C-LASSIK",
          description: "- 멀티센서리 음악 스트리밍 앱",
          builtWithLabel: "- 기술: ",
          tech: "_Kotlin, Android Studio, Jetpack Compose_",
        },
      },
      card: {
        subtitle: "삼성 주관 소프트웨어 개발 교육 프로그램",
        bullets: {
          b1Before: "",
          b1Tech: ["Python", "JavaScript", "Django", "Vue.js"],
          b1After: " 기반 웹 서비스 개발 경험",
          b2Before: "알고리즘 실습과 팀 프로젝트를 통해 ",
          b2Highlight: "문제 해결 역량",
          b2After: " 및 협업 경험을 강화함",
        },
        highlightsTitle: "하이라이트",
        highlights: {
          jamjam: "JamJam 🏆",
          newsseug: "Newsseug 🏆",
          classik: "C-LASSIK",
        },
      },
    },
  },
  contact_me: {
    submits: {
      sending: "전송 중...",
      submit: "메시지 전송",
    },
    success: {
      h3: "감사합니다! 👽",
      p: "메시지 전송이 완료되었습니다. 곧 답장을 보내드릴게요!",
      button: "새 메시지 보내기",
    },
  },
} as const;

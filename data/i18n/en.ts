export const en = {
  home: {
    gameHint: "// complete the game to continue",
    githubHint: "// you can also see it on my Github page",
    githubHintMobile: "// find my profile on Github:",
  },
  game: {
    title: "Typing Challenge",
    descriptionParts: {
      before: "Hit ",
      highlight: "Start",
      after: ", wait for the countdown, then type the line exactly.",
    },
    hint: "// type the code as fast as you can",
    form: {
      placeholder: "type here...",
      finished: "Completed in ",
    },
    info: {
      acc: "ACC",
      err: "ERR",
      pos: "POS",
    },
  },
  contact: {
    sendEmail: "Send E-mail",
    social: {
      linkedin: "LinkedIn profile",
      github: "GitHub profile",
      velog: "Velog posts",
      instagram: "Instagram account",
    },
  },
  bio: {
    introduction: {
      p1Lines: [
        "Hi, I’m Minkyoung Kim, a frontend developer based in Korea. I was",
        "originally an Electronic Engineering major, and my first encounter",
        "with programming came through basic major courses. While the",
        "curriculum focused heavily on hardware, I found myself far more",
        "interested in the logic and problem-solving aspects of software. At",
        "some point, I realized that what truly excited me wasn’t circuits or",
        "signals, but building things through code — especially things users",
        "could directly interact with. That realization led me to shift my",
        "career path toward software development.",
      ],
      p2Lines: [
        "Since then, I’ve been focusing on strengthening my skills through",
        "intensive study and a developer bootcamp, where I gained hands-on",
        "experience in web development and frontend engineering. I enjoy",
        "turning ideas into interactive, well-structured user experiences,",
        "and I’m constantly exploring better ways to build maintainable and",
        "scalable interfaces.",
      ],
    },
    titles: {
      experience: "Experiences",
      exploring: "Currently exploring",
    },
  },
  education: {
    ssafy: {
      title: "SSAFY 11th",
      subtitle: "Samsung-backed software development program",
      code: {
        header: "# SSAFY 11th",
        programLine:
          "- Intensive software development program backed by Samsung",
        studiedBefore: "- studied ",
        studiedTech: "**Python, JavaScript, Django, Vue.js**",
        studiedAfter:
          " and core problem-solving skills through algorithms and team-based projects",
        projectsHeader: "## Projects",
        jamjam: {
          title: "### JamJam",
          description: "- A real-time meeting service",
          builtWithLabel: "- built with ",
          tech: "_JavaScript, React, Styled-components, Recoil_",
          award: "- 🏆 Award-winning project",
        },
        newsseug: {
          title: "### Newsseug",
          description: "- A short-form news platform",
          builtWithLabel: "- built with ",
          tech: "_TypeScript, React, Redux, React-Query, Styled-components_",
          award: "- 🏆 Award-winning project",
        },
        classik: {
          title: "### C-LASSIK",
          description: "- A multisensory music streaming application",
          builtWithLabel: "- built with ",
          tech: "_Kotlin, Android Studio, Jetpack Compose_",
        },
      },
      card: {
        subtitle: "Samsung-backed software development program",
        bullets: {
          b1Before: "Built web services with ",
          b1Tech: ["Python", "JavaScript", "Django", "Vue.js"],
          b1After: ".",
          b2Before: "Strengthened problem-solving through ",
          b2Highlight: "algorithm practice",
          b2After: " and collaboration in an industry-like environment.",
        },
        highlightsTitle: "Highlights",
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
      sending: "sending...",
      submit: "submit-message",
    },
    success: {
      h3: "Thank you! 👽",
      p: "Your message has been accepted. You will receive answer really soon!",
      button: "send-new-message",
    },
  },
} as const;

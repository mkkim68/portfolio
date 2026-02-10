type SocialMediaInfo = "name" | "description" | "url";

type SocialMedia = Record<SocialMediaInfo, string>;

type SocialMedias = readonly SocialMedia[];

export const SOCIAL_MEDIA: SocialMedias = [
  {
    name: "LinkedIn",
    description: "Linked-In account",
    url: "https://www.linkedin.com/in/%EB%AF%BC%EA%B2%BD-%EA%B9%80-b36195373/",
  },
  {
    name: "Github",
    description: "Github profile",
    url: "https://github.com/mkkim68",
  },
  {
    name: "Velog",
    description: "Velog posts",
    url: "https://velog.io/@mkkim7375/posts",
  },
  {
    name: "Instagram",
    description: "Instagram account",
    url: "https://www.instagram.com/mmkkkkkim?igsh=YXB1OTYxcDhxdmR0&utm_source=qr",
  },
];

type SocialMediaInfo = "id" | "url";

type SocialMedia = Record<SocialMediaInfo, string>;

type SocialMedias = readonly SocialMedia[];

export const SOCIAL_MEDIA: SocialMedias = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/%EB%AF%BC%EA%B2%BD-%EA%B9%80-b36195373/",
  },
  {
    id: "github",
    url: "https://github.com/mkkim68",
  },
  {
    id: "velog",
    url: "https://velog.io/@mkkim7375/posts",
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/mmkkkkkim?igsh=YXB1OTYxcDhxdmR0&utm_source=qr",
  },
];

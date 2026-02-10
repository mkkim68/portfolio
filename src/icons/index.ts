import { commonIcons } from "./common";
import { socialIcons } from "./social";
import { techIcons } from "./tech";

export const Icons = {
  ...socialIcons,
  ...commonIcons,
  ...techIcons,
} as const;

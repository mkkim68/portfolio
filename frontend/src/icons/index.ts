import { commonIcons } from "./common";
import { socialIcons } from "./social";

export const Icons = {
  ...socialIcons,
  ...commonIcons,
} as const;

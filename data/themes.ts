export type ThemeId = "default" | "red" | "ice" | "neon";

type ThemeOption = {
  id: ThemeId;
};

export const THEME_OPTIONS: ThemeOption[] = [
  { id: "default" },
  { id: "red" },
  { id: "ice" },
  { id: "neon" },
];

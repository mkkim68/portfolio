import { THEME_OPTIONS } from "../data/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeButtons({
  swatchClass = "w-4 h-4",
}: {
  swatchClass?: string;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {THEME_OPTIONS.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setTheme(t.id)}
          className={`px-1 py-1 rounded-md !transition-all !duration-200 !ease-in-out ${
            mounted && theme === t.id
              ? "bg-white/20"
              : "hover:-translate-y-0.5 active:translate-y-0.5"
          }`}
        >
          <div
            data-theme={t.id}
            className={`${swatchClass} rounded-sm`}
            style={{
              background: `
                linear-gradient(
                217deg,
                rgb(var(--blur-first-rgb) / 0.8),
                rgb(var(--blur-first-rgb) / 0)
                ),
                linear-gradient(
                127deg,
                rgb(var(--blur-second-rgb) / 0.8),
                rgb(var(--blur-second-rgb) / 0)
                )
            `,
            }}
          />
        </button>
      ))}
    </>
  );
}

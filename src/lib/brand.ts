/**
 * Brand colour constants used in non-CSS contexts (e.g. the OG-image
 * runtime, which can't read CSS variables). Keep in sync with the
 * `:root` tokens in `src/app/globals.css`.
 */
export const brand = {
  navy: "#0a2540",
  navyMid: "#163558",
  ocean: "#1e6f8a",
  teal: "#1e9e80",
  tealLight: "#2ec4a0",
  sand: "#f5ead7",
  sandLight: "#fdf8f0",
  cream: "#fbf5e8",
  coral: "#e85a35",
  danger: "#c9532f",
  gold: "#c9a84c",
} as const;

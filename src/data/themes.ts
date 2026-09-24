export type ThemeId =
  | "emerald"
  | "amber"
  | "cyan"
  | "violet"
  | "rose"
  | "blue"
  | "light-teal"
  | "light-slate";

export type ThemeDef = {
  id: ThemeId;
  label: string;
  /** Applies the `.dark` class on <html> */
  dark: boolean;
  /** Swatch color shown in the theme picker */
  swatch: string;
  /** Meta theme-color for the browser chrome */
  browser: string;
};

/**
 * All selectable themes. The actual color tokens live in `index.css` under
 * `html[data-theme="<id>"]`, so switching only flips one attribute.
 */
export const themes: ThemeDef[] = [
  { id: "emerald", label: "Emerald", dark: true, swatch: "#10b981", browser: "#022c22" },
  { id: "amber", label: "Amber", dark: true, swatch: "#f59e0b", browser: "#140a00" },
  { id: "cyan", label: "Cyan", dark: true, swatch: "#06b6d4", browser: "#04141b" },
  { id: "violet", label: "Violet", dark: true, swatch: "#8b5cf6", browser: "#0f0720" },
  { id: "rose", label: "Rose", dark: true, swatch: "#f43f5e", browser: "#170610" },
  { id: "blue", label: "Blue", dark: true, swatch: "#3b82f6", browser: "#050d1c" },
  { id: "light-teal", label: "Light Teal", dark: false, swatch: "#0d9488", browser: "#ffffff" },
  { id: "light-slate", label: "Light Slate", dark: false, swatch: "#475569", browser: "#ffffff" },
];

export const DEFAULT_THEME: ThemeId = "emerald";
export const THEME_STORAGE_KEY = "harisudhan-theme";

export function getTheme(id: string | null | undefined): ThemeDef {
  return themes.find((t) => t.id === id) ?? themes[0];
}

import { useCallback, useEffect, useState } from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  getTheme,
  type ThemeId,
} from "../data/themes";

function getInitialTheme(): ThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) return getTheme(stored).id;
  } catch {
    /* storage unavailable */
  }
  return DEFAULT_THEME;
}

/**
 * Multi-theme controller. Sets `data-theme` on <html>, toggles the `.dark`
 * class for the dark palettes and persists the choice to localStorage.
 * An inline script in index.html applies the same values before first paint.
 */
export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeId>(getInitialTheme);
  const theme = getTheme(themeId);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme.id;
    root.classList.toggle("dark", theme.dark);
    root.style.colorScheme = theme.dark ? "dark" : "light";

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme.browser);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme.id);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const setTheme = useCallback((id: ThemeId) => setThemeId(id), []);

  return { theme, themeId: theme.id, setTheme };
}

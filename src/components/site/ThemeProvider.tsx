import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function getSystemPreference(): "light" | "dark" {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

function getStoredTheme(): Theme | null {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("simply-feminine-theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored as Theme;
    }
  }
  return null;
}

function applyTheme(theme: Theme) {
  if (typeof window === "undefined") return;

  const html = window.document.documentElement;

  // Remove all theme classes first
  html.classList.remove("light", "dark");

  let actualTheme: "light" | "dark" = theme;

  if (theme === "system") {
    actualTheme = getSystemPreference();
  }

  // Apply the actual theme class to the html element
  html.classList.add(actualTheme);

  // Also set a data attribute for potential CSS selectors
  html.setAttribute("data-theme", actualTheme);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>("light"); // Default to light

  React.useEffect(() => {
    const stored = getStoredTheme();
    if (stored !== null) {
      setTheme(stored);
    } else {
      // No stored theme, default to light
      setTheme("light");
    }
  }, []);

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Listen for system preference changes if theme is system
  React.useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        applyTheme(theme);
      };
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    window.localStorage.setItem("simply-feminine-theme", newTheme);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

const ThemeProviderContext = React.createContext({
  theme: "light" as Theme,
  toggleTheme: (_: Theme) => void 0,
});

export const useTheme = () => React.useContext(ThemeProviderContext);
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export function ThemeSelector() {
  const { theme, toggleTheme } = useTheme();

  // Define the order of themes for cycling
  const themeOrder: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
  const currentIndex = themeOrder.indexOf(theme);
  const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];

  // Get the icon for the current theme
  const getIcon = (theme: "light" | "dark" | "system") => {
    switch (theme) {
      case "light":
        return <Sun className="size-5" aria-hidden="true" />;
      case "dark":
        return <Moon className="size-5" aria-hidden="true" />;
      case "system":
        return <Monitor className="size-5" aria-hidden="true" />;
    }
  };

  const Icon = getIcon(theme);

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className={cn("hidden sm:inline-flex", "flex items-center justify-center p-1")}
      onClick={() => toggleTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      {Icon}
    </Button>
  );
}
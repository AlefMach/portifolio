import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";

import { useThemeContext } from "../../../contexts/ThemeContext";

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme}>
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

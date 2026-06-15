import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useThemeMode } from "../../../hooks/useThemeMode";
import { useTranslation } from "../../../hooks/useTranslation";

export function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();
  const { t } = useTranslation();
  const nextMode = mode === "dark" ? "light" : "dark";
  const label =
    nextMode === "dark" ? t.theme.activateDark : t.theme.activateLight;

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        onClick={toggleTheme}
        sx={{
          border: 1,
          borderColor: "divider",
          color: "text.primary",
          height: 40,
          width: 40,
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

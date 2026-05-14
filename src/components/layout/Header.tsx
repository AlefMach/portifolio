import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useThemeMode from "../../hooks/useThemeMode";

export default function Header() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        background: "transparent"
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />

        <IconButton onClick={toggleTheme}>
          {mode === "light" ? (
            <DarkModeIcon sx={{ color: "#0f172a" }} />
          ) : (
            <LightModeIcon sx={{ color: "#f1cf46" }} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

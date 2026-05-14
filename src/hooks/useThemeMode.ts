import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside AppThemeProvider");
  }

  return context;
}

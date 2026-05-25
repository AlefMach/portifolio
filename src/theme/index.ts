import { createTheme } from "@mui/material/styles";

import { darkPalette, lightPalette } from "./palette";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,

    typography: {
      fontFamily: "Inter, sans-serif",
    },

    shape: {
      borderRadius: 12,
    },
  });

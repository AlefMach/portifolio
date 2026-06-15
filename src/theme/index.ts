import { createTheme } from "@mui/material/styles";

import { darkPalette, lightPalette } from "./palette";

export const getTheme = (mode: "light" | "dark") => {
  const palette = mode === "light" ? lightPalette : darkPalette;

  return createTheme({
    palette,

    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontWeight: 800,
      },
      h2: {
        fontWeight: 750,
      },
      button: {
        fontWeight: 700,
        textTransform: "none",
      },
    },

    shape: {
      borderRadius: 10,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "html, body, #root": {
            minHeight: "100%",
          },
          body: {
            background:
              mode === "light"
                ? palette.background.paper
                : palette.background.paper,
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
      },
    },
  });
};

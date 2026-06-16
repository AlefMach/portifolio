export const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#5B5BD6",
    light: "#60a5fa",
    dark: "#1d4ed8",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#0f766e",
    contrastText: "#ffffff",
  },
  background: {
    default: "#ffffff",
    paper: "#f4f7f8",
  },
  text: {
    primary: "#111827",
    secondary: "#4b5563",
  },
  divider: "rgba(15, 23, 42, 0.12)",
  action: {
    hover: "rgba(37, 99, 235, 0.08)",
    selected: "rgba(37, 99, 235, 0.14)",
  },
};

export const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#00FFC2",
    light: "#7dd3fc",
    dark: "#00FFC2",
    contrastText: "#082f49",
  },
  secondary: {
    main: "#2dd4bf",
    contrastText: "#042f2e",
  },
  background: {
    default: "#0A0A0F",
    paper: "#15151a",
  },
  text: {
    primary: "#f8fafc",
    secondary: "#cbd5e1",
  },
  divider: "rgba(148, 163, 184, 0.18)",
  action: {
    hover: "rgba(56, 189, 248, 0.1)",
    selected: "rgba(56, 189, 248, 0.16)",
  },
};

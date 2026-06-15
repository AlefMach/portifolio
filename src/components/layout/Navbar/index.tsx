import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { darkPalette, lightPalette } from "../../../theme/palette";
import { LanguageToggle } from "../../common/LanguageToggle";
import { ThemeToggle } from "../../common/ThemeToggle";

export default function Navbar() {
  const { t } = useTranslation();
  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.contact, href: "#contato" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(16px)",
        bgcolor: (theme) =>
          theme.palette.mode === "light"
            ? lightPalette.background.default
            : darkPalette.background.default,
        borderBottom: 1,
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Toolbar
        component={Container}
        maxWidth="lg"
        disableGutters
        sx={{
          gap: 2,
          minHeight: { xs: 64, md: 72 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          component="a"
          href="#inicio"
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: 800,
            letterSpacing: 0,
            whiteSpace: "nowrap",
          }}
        >
          {t.nav.brand}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          component="nav"
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 0.5,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              color="inherit"
              sx={{
                borderRadius: 2,
                color: "text.secondary",
                minWidth: "auto",
                px: 1.5,
                "&:hover": {
                  bgcolor: "action.hover",
                  color: "text.primary",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <LanguageToggle />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

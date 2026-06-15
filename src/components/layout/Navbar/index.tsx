import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useTranslation } from "../../../hooks/useTranslation";
import { darkPalette, lightPalette } from "../../../theme/palette";
import { LanguageToggle } from "../../common/LanguageToggle";
import { ThemeToggle } from "../../common/ThemeToggle";

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.contact, href: "#contato" },
  ];

  const brand = "{ Alef /} ";

  return (
    <>
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
            gap: { xs: 1, sm: 1.5, md: 2 },
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
              fontSize: { xs: "1rem", sm: "2.25rem" },
              fontWeight: 800,
              letterSpacing: 0,
              whiteSpace: "nowrap",
            }}
          >
            {brand}
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
                  px: { sm: 1.4, md: 1.8 },
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

          <Box sx={{ display: { xs: "none", sm: "contents" } }}>
            <LanguageToggle />
          </Box>
          <ThemeToggle />
          <IconButton
            aria-label={t.nav.menu}
            onClick={() => setMobileMenuOpen(true)}
            sx={{
              border: 1,
              borderColor: "divider",
              color: "text.primary",
              display: { xs: "inline-flex", sm: "none" },
              height: 40,
              width: 40,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "background.paper",
              p: 2,
              width: "min(82vw, 320px)",
            },
          },
        }}
      >
        <Stack spacing={1.5}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, letterSpacing: 0, mb: 1 }}
          >
            {brand}
          </Typography>
          {navItems.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              color="inherit"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                justifyContent: "flex-start",
                minHeight: 44,
                px: 1.5,
              }}
            >
              {item.label}
            </Button>
          ))}
          <Box sx={{ pt: 1 }}>
            <LanguageToggle />
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}

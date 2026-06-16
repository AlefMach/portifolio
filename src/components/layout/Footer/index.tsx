import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { profileLinks } from "../../../utils/profileLinks";

export function Footer() {
  const { t } = useTranslation();
  const footerLinks = [
    {
      href: profileLinks.linkedin,
      icon: LinkedInIcon,
      label: t.footer.linkedin,
    },
    {
      href: profileLinks.github,
      icon: GitHubIcon,
      label: t.footer.github,
    },
    {
      href: profileLinks.email,
      icon: MailOutlineIcon,
      label: t.footer.email,
    },
  ] as const;

  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            {t.footer.title}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {footerLinks.map((link) => {
              const Icon = link.icon;
              const isEmail = link.href.startsWith("mailto:");

              return (
                <Button
                  key={link.label}
                  href={link.href}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  size="small"
                  startIcon={<Icon fontSize="small" />}
                  target={isEmail ? undefined : "_blank"}
                  variant="outlined"
                  sx={{
                    borderColor: "divider",
                    color: "text.primary",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

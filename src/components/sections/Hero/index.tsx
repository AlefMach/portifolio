import { Box, Container } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { HeroContent } from "./components/HeroContent";
import { HeroProfile } from "./components/HeroProfile";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        alignItems: "center",
        display: "flex",
        minHeight: { xs: "calc(100svh - 64px)", md: "calc(100vh - 72px)" },
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1.1fr .9fr",
              lg: "1.15fr .85fr",
            },
            alignItems: "center",
            minHeight: {
              xs: "auto",
              sm: "70vh",
              md: "calc(100vh - 72px)",
            },
          }}
        >
          <HeroContent
            description={t.hero.description}
            eyebrow={t.hero.eyebrow}
            primaryAction={t.hero.primaryAction}
            secondaryAction={t.hero.secondaryAction}
            skills={t.hero.skills}
            title={t.hero.title}
          />

          <HeroProfile />
        </Box>
      </Container>
    </Box>
  );
}

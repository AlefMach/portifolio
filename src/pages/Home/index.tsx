import { Box, Container, Typography } from "@mui/material";

import { Hero } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { useTranslation } from "../../hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Box component="main" sx={{ flex: 1 }}>
      <Hero />
      <Projects />

      <Box
        component="section"
        id="contato"
        sx={{ py: { xs: 6, sm: 8, md: 10 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 800,
                letterSpacing: 0,
                lineHeight: 1.1,
                mb: 1.5,
              }}
            >
              {t.home.contactTitle}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.7,
              }}
            >
              {t.home.contactDescription}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

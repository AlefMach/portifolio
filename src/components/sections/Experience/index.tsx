import { Box, Container, Stack, Typography } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";

export function Experience() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={4}>
          <SectionHeading
            title={t.home.experienceTitle}
            description={t.home.experienceDescription}
          />

          <Stack spacing={2}>
            {t.home.experienceItems.map((item) => (
              <Box
                key={`${item.company}-${item.period}`}
                sx={{
                  border: 1,
                  borderColor: "divider",
                  bgcolor: "background.default",
                  borderRadius: 2,
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  sx={{
                    alignItems: { xs: "flex-start", sm: "baseline" },
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        letterSpacing: 0,
                        mb: 0.5,
                      }}
                    >
                      {item.company}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{ fontSize: "1.125rem", fontWeight: 800 }}
                    >
                      {item.role}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.period}
                  </Typography>
                </Stack>

                <Box
                  component="ul"
                  sx={{
                    color: "text.secondary",
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, minmax(0, 1fr))",
                    },
                    lineHeight: 1.7,
                    listStylePosition: "outside",
                    m: 0,
                    pl: 2.5,
                  }}
                >
                  {item.highlights.map((highlight) => (
                    <Typography
                      key={highlight}
                      component="li"
                      sx={{ color: "text.secondary", lineHeight: 1.7 }}
                    >
                      {highlight}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

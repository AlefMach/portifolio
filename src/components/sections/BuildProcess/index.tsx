import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";

export function BuildProcess() {
  const { t } = useTranslation();
  const icons = [
    AccountTreeOutlinedIcon,
    QueryStatsOutlinedIcon,
    HubOutlinedIcon,
    AutoAwesomeOutlinedIcon,
  ];

  return (
    <Box
      component="section"
      id="build-process"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.default",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={4}>
          <SectionHeading
            title={t.home.buildTitle}
            description={t.home.buildDescription}
          />

          <Box
            sx={{
              display: "grid",
              gap: { xs: 2, md: 3 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
            }}
          >
            {t.home.buildPrinciples.map((principle, index) => {
              const Icon = icons[index % icons.length];

              return (
                <Box
                  key={principle.title}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    p: { xs: 2.5, md: 3 },
                    minHeight: "100%",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
                    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
                    transition:
                      "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      backgroundImage:
                        "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                      maskImage:
                        "linear-gradient(135deg, rgba(0,0,0,0.42), transparent 60%)",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "primary.main",
                      boxShadow: "0 22px 56px rgba(15, 23, 42, 0.1)",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      transition: "none",
                      "&:hover": {
                        transform: "none",
                      },
                    },
                  }}
                >
                  <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                    <Box
                      sx={{
                        alignItems: "center",
                        bgcolor: "action.hover",
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 2,
                        color: "primary.main",
                        display: "flex",
                        height: 48,
                        justifyContent: "center",
                        transform: "rotateX(12deg) rotateY(-14deg)",
                        width: 48,
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        fontSize: "1.05rem",
                        fontWeight: 800,
                        lineHeight: 1.25,
                      }}
                    >
                      {principle.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {principle.description}
                    </Typography>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

import { Box, Container, Link, Stack, Typography } from "@mui/material";

import { useTranslation } from "../../../hooks/useTranslation";

export function Projects() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="projetos"
      sx={{
        bgcolor: "background.default",
        borderTop: 1,
        borderColor: "divider",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={4}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 1.5,
              }}
            >
              {t.home.projectsTitle}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.7,
              }}
            >
              {t.home.projectsDescription}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: { xs: 2, md: 3 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            {t.home.projectCards.map((project) => {
              const hasLink = "link" in project && Boolean(project.link);
              const buttonLabel = "button" in project ? project.button : undefined;

              return (
                <Box
                  key={project.title}
                  component={hasLink ? "a" : "div"}
                  href={hasLink ? project.link : undefined}
                  target={hasLink ? "_blank" : undefined}
                  rel={hasLink ? "noopener noreferrer" : undefined}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    "&:hover": hasLink
                      ? {
                          transform: "translateY(-4px)",
                          borderColor: "primary.main",
                        }
                      : {},
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    sx={{
                      aspectRatio: "16 / 9",
                      width: "100%",
                      objectFit: "cover",
                      bgcolor: "action.hover",
                    }}
                  />

                  <Stack spacing={2} sx={{ flex: 1, p: { xs: 2.5, md: 3 } }}>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 800,
                          mb: 1,
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.7,
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: "auto",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <Box
                          key={tag}
                          component="span"
                          sx={{
                            border: 1,
                            borderColor: "divider",
                            borderRadius: 999,
                            color: "text.secondary",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            lineHeight: 1,
                            px: 1.25,
                            py: 0.75,
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>

                    {hasLink && buttonLabel && (
                      <Link component="span" underline="hover" sx={{ fontWeight: 700 }}>
                        {buttonLabel} →
                      </Link>
                    )}
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

import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

import { useTranslation } from "../../../hooks/useTranslation";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

type CardMotionCustom = {
  direction: "left" | "right";
  offset: number;
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: ({ direction, offset }: CardMotionCustom) => ({
    opacity: 0,
    x: direction === "left" ? -offset : offset,
    scale: 0.985,
  }),
  visible: (_custom: CardMotionCustom) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Projects() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const shouldReduceMotion = useReducedMotion();
  const activeSectionVariants = shouldReduceMotion
    ? undefined
    : sectionVariants;
  const activeHeadingVariants = shouldReduceMotion
    ? undefined
    : headingVariants;
  const activeCardVariants = shouldReduceMotion ? undefined : cardVariants;
  const cardOffset = isXs ? 42 : isSm ? 64 : isMd ? 92 : 128;

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
      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ amount: 0.18, margin: "0px 0px -12% 0px", once: false }}
        variants={activeSectionVariants}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <motion.div variants={activeHeadingVariants}>
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
            </motion.div>

            <motion.div variants={activeSectionVariants}>
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
                {t.home.projectCards.map((project, index) => {
                  const hasLink = "link" in project && Boolean(project.link);
                  const buttonLabel =
                    "button" in project ? project.button : undefined;

                  return (
                    <motion.div
                      key={project.title}
                      custom={
                        {
                          direction: index % 2 === 0 ? "left" : "right",
                          offset: cardOffset,
                        } satisfies CardMotionCustom
                      }
                      variants={activeCardVariants}
                      style={{ display: "flex", minHeight: "100%" }}
                    >
                      <Box
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
                          transition:
                            "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                          display: "flex",
                          flexDirection: "column",
                          minHeight: "100%",
                          width: "100%",
                          "&:hover": hasLink
                            ? {
                                transform: "translateY(-4px)",
                                borderColor: "primary.main",
                                boxShadow: 2,
                              }
                            : {},
                          "&:hover .project-card-image": hasLink
                            ? {
                                transform: "scale(1.025)",
                              }
                            : {},
                          "@media (prefers-reduced-motion: reduce)": {
                            opacity: 1,
                            transform: "none",
                            transition: "none",
                            "&:hover": {
                              transform: "none",
                            },
                          },
                        }}
                      >
                        <Box
                          className="project-card-image"
                          component="img"
                          src={project.image}
                          alt={project.alt}
                          loading="lazy"
                          sx={{
                            aspectRatio: "16 / 9",
                            width: "100%",
                            objectFit: "cover",
                            bgcolor: "action.hover",
                            transition: "transform 0.35s ease",
                          }}
                        />

                        <Stack
                          spacing={2}
                          sx={{ flex: 1, p: { xs: 2.5, md: 3 } }}
                        >
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
                            <Link
                              component="span"
                              underline="hover"
                              sx={{ fontWeight: 700 }}
                            >
                              {buttonLabel} →
                            </Link>
                          )}
                        </Stack>
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>
            </motion.div>
          </Stack>
        </Container>
      </motion.div>
    </Box>
  );
}

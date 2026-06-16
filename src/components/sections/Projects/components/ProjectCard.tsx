import { Box, Link, Stack, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "../types";
import { getProjectCaseFields } from "../utils";
import { ProjectCaseFields } from "./ProjectCaseFields";
import { ProjectTags } from "./ProjectTags";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const hasLink = "link" in project && Boolean(project.link);
  const buttonLabel = "button" in project ? project.button : undefined;
  const caseFields = getProjectCaseFields(project);

  return (
    <Box
      component={hasLink ? "a" : "div"}
      href={hasLink ? project.link : undefined}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        overflow: "hidden",
        position: "relative",
        textDecoration: "none",
        transition:
          "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        width: "100%",
        "&::before": {
          background:
            "linear-gradient(90deg, transparent, rgba(0, 255, 194, 0.85), transparent)",
          content: '""',
          height: 2,
          left: 0,
          opacity: 0,
          position: "absolute",
          right: 0,
          top: 0,
          transform: "scaleX(0.28)",
          transformOrigin: "left",
          transition: "opacity 0.2s ease, transform 0.35s ease",
          zIndex: 2,
        },
        "&:hover": hasLink
          ? {
              borderColor: "primary.main",
              boxShadow: "0 18px 48px rgba(15, 23, 42, 0.12)",
              transform: "translateY(-5px) scale(1.005)",
              "&::before": {
                opacity: 1,
                transform: "scaleX(1)",
              },
            }
          : {},
        "&:hover .project-card-image": hasLink
          ? {
              transform: "scale(1.035)",
            }
          : {},
        "&:hover .project-card-sheen": hasLink
          ? {
              opacity: 0.9,
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
        sx={{
          aspectRatio: "16 / 9",
          bgcolor: "action.hover",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          className="project-card-image"
          component="img"
          src={project.image}
          alt={project.alt}
          loading="lazy"
          sx={{
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.45s ease",
            width: "100%",
          }}
        />
        <Box
          aria-hidden="true"
          className="project-card-sheen"
          component={motion.span}
          animate={shouldReduceMotion ? undefined : { x: ["-140%", "190%"] }}
          transition={{
            duration: 3.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.7,
          }}
          sx={{
            background:
              "linear-gradient(105deg, transparent 28%, rgba(255, 255, 255, 0.5), transparent 72%)",
            display: "block",
            height: "120%",
            left: 0,
            opacity: 0.45,
            pointerEvents: "none",
            position: "absolute",
            top: "-10%",
            transform: "skewX(-16deg)",
            width: "34%",
          }}
        />
      </Box>

      <Stack
        spacing={2}
        sx={{
          flex: 1,
          p: { xs: 2.5, md: 3 },
          position: "relative",
        }}
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

        <ProjectTags
          hasCaseFields={caseFields.length > 0}
          tags={project.tags}
        />

        <ProjectCaseFields fields={caseFields} />

        {hasLink && buttonLabel && (
          <Link component="span" underline="hover" sx={{ fontWeight: 700 }}>
            {buttonLabel} →
          </Link>
        )}
      </Stack>
    </Box>
  );
}

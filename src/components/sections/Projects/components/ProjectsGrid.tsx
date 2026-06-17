import { Box } from "@mui/material";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";

type CardMotionCustom = {
  delay: number;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: ({ delay }: CardMotionCustom = { delay: 0 }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type ProjectsGridProps = {
  isMobile: boolean;
  projects: readonly Project[];
  shouldAnimate: boolean;
};

export function ProjectsGrid({
  isMobile,
  projects,
  shouldAnimate,
}: ProjectsGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: { xs: 2, md: 3 },
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
        },
      }}
    >
      {projects.map((project, index) => (
        <ProjectMotionItem
          key={`${project.image}-${index}`}
          index={index}
          isMobile={isMobile}
          project={project}
          shouldAnimate={shouldAnimate}
        />
      ))}
    </Box>
  );
}

type ProjectMotionItemProps = {
  index: number;
  isMobile: boolean;
  project: Project;
  shouldAnimate: boolean;
};

function ProjectMotionItem({
  index,
  isMobile,
  project,
  shouldAnimate,
}: ProjectMotionItemProps) {
  return (
    <motion.div
      initial={shouldAnimate ? "hidden" : false}
      custom={{ delay: isMobile ? 0 : index * 0.04 }}
      style={{
        display: "flex",
        minHeight: "100%",
      }}
      variants={shouldAnimate ? cardVariants : undefined}
      viewport={{
        amount: isMobile ? 0.18 : 0.32,
        margin: "0px 0px -8% 0px",
        once: !isMobile,
      }}
      whileInView={shouldAnimate ? "visible" : undefined}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}

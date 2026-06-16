import { Box } from "@mui/material";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useTransform } from "framer-motion";

import type { Project } from "../types";
import { getProjectMotionCustom } from "../utils";
import { ProjectCard } from "./ProjectCard";

const mobileCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: 28,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

type ProjectsGridProps = {
  cardOffset: number;
  isMobile: boolean;
  projects: readonly Project[];
  scrollProgress?: MotionValue<number>;
};

export function ProjectsGrid({
  cardOffset,
  isMobile,
  projects,
  scrollProgress,
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
          cardOffset={cardOffset}
          index={index}
          isMobile={isMobile}
          project={project}
          scrollProgress={scrollProgress}
        />
      ))}
    </Box>
  );
}

type ProjectMotionItemProps = {
  cardOffset: number;
  index: number;
  isMobile: boolean;
  project: Project;
  scrollProgress?: MotionValue<number>;
};

function ProjectMotionItem({
  cardOffset,
  index,
  isMobile,
  project,
  scrollProgress,
}: ProjectMotionItemProps) {
  const fallbackProgress = useMotionValue(1);
  const progress = scrollProgress ?? fallbackProgress;
  const { direction, offset } = getProjectMotionCustom(index, cardOffset);
  const start = index * 0.08;
  const end = Math.min(start + 0.3, 0.92);
  const sideOffset = direction === "left" ? -offset : offset;
  const sideRotate = direction === "left" ? -1.25 : 1.25;
  const x = useTransform(
    progress,
    [0, start, end, 1],
    [sideOffset, sideOffset, 0, 0],
  );
  const opacity = useTransform(progress, [0, start, end, 1], [0, 0, 1, 1]);
  const scale = useTransform(progress, [0, start, end, 1], [0.96, 0.96, 1, 1]);
  const rotate = useTransform(
    progress,
    [0, start, end, 1],
    [sideRotate, sideRotate, 0, 0],
  );
  const shouldAnimate = Boolean(scrollProgress);
  const useScrollMotion = shouldAnimate && !isMobile;
  const useMobileMotion = shouldAnimate && isMobile;

  return (
    <motion.div
      initial={useMobileMotion ? "hidden" : false}
      style={{
        display: "flex",
        minHeight: "100%",
        opacity: useScrollMotion ? opacity : 1,
        rotate: useScrollMotion ? rotate : 0,
        scale: useScrollMotion ? scale : 1,
        x: useScrollMotion ? x : 0,
      }}
      variants={useMobileMotion ? mobileCardVariants : undefined}
      viewport={{ amount: 0.24, margin: "0px 0px -8% 0px", once: false }}
      whileInView={useMobileMotion ? "visible" : undefined}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}

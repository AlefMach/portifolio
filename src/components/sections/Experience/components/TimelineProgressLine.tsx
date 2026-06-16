import { Box } from "@mui/material";
import { motion } from "framer-motion";

import type { TimelineProgress } from "../types";

type TimelineProgressLineProps = {
  progress: TimelineProgress;
  shouldReduceMotion: boolean;
};

export function TimelineProgressLine({
  progress,
  shouldReduceMotion,
}: TimelineProgressLineProps) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        bgcolor: "divider",
        bottom: 0,
        left: { xs: 16, md: "50%" },
        overflow: "hidden",
        position: "absolute",
        top: 0,
        transform: { md: "translateX(-50%)" },
        width: 3,
      }}
    >
      <Box
        component={motion.span}
        style={shouldReduceMotion ? undefined : { scaleY: progress }}
        sx={{
          bgcolor: "primary.main",
          display: "block",
          height: "100%",
          transformOrigin: "top",
          width: "100%",
        }}
      />
    </Box>
  );
}

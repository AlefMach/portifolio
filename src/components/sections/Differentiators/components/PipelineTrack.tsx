import { Box } from "@mui/material";
import { motion } from "framer-motion";

import { lineVariants } from "../motion";
import { PipelineRunner } from "./PipelineRunner";

type PipelineTrackProps = {
  shouldReduceMotion: boolean;
};

export function PipelineTrack({ shouldReduceMotion }: PipelineTrackProps) {
  const activeLineVariants = shouldReduceMotion ? undefined : lineVariants;

  return (
    <>
      <Box
        sx={{
          bgcolor: "divider",
          display: { xs: "block", md: "none" },
          height: "calc(100% - 96px)",
          left: 23,
          position: "absolute",
          top: 48,
          width: 2,
        }}
      />

      <Box
        sx={{
          bgcolor: "divider",
          display: { xs: "none", md: "block" },
          height: 2,
          left: "7%",
          position: "absolute",
          right: "7%",
          top: 34,
        }}
      />

      <Box
        component={motion.div}
        variants={activeLineVariants}
        sx={{
          bgcolor: "primary.main",
          borderRadius: 999,
          display: { xs: "none", md: "block" },
          height: 2,
          left: "7%",
          position: "absolute",
          right: "7%",
          top: 34,
          transformOrigin: "left center",
          zIndex: 1,
        }}
      />

      <Box
        component={motion.div}
        variants={activeLineVariants}
        sx={{
          bgcolor: "primary.main",
          borderRadius: 999,
          display: { xs: "block", md: "none" },
          height: "calc(100% - 96px)",
          left: 23,
          position: "absolute",
          top: 48,
          transformOrigin: "top center",
          width: 2,
          zIndex: 1,
        }}
      />

      {!shouldReduceMotion && <PipelineRunner />}
    </>
  );
}

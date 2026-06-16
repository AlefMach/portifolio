import { Box } from "@mui/material";
import { motion } from "framer-motion";

import { sectionVariants } from "../motion";
import type { PipelineStep } from "../types";
import { DeployBadge } from "./DeployBadge";
import { PipelineStepCard } from "./PipelineStepCard";
import { PipelineTrack } from "./PipelineTrack";

type PipelineProps = {
  shouldReduceMotion: boolean;
  steps: PipelineStep[];
};

export function Pipeline({ shouldReduceMotion, steps }: PipelineProps) {
  return (
    <Box sx={{ overflow: "hidden", position: "relative" }}>
      <motion.div variants={shouldReduceMotion ? undefined : sectionVariants}>
        <Box
          sx={{
            alignItems: "stretch",
            display: "grid",
            gap: { xs: 2.75, md: 3 },
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            position: "relative",
          }}
        >
          <PipelineTrack shouldReduceMotion={shouldReduceMotion} />

          {steps.map((step, index) => (
            <PipelineStepCard
              key={`build-step-${index}`}
              index={index}
              step={step}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </Box>
      </motion.div>

      <DeployBadge shouldReduceMotion={shouldReduceMotion} />
    </Box>
  );
}

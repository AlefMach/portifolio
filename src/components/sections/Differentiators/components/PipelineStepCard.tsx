import { Stack } from "@mui/material";
import { motion } from "framer-motion";

import { stepVariants } from "../motion";
import type { PipelineStep } from "../types";
import { StepContent } from "./StepContent";
import { StepNode } from "./StepNode";

type PipelineStepCardProps = {
  index: number;
  shouldReduceMotion: boolean;
  step: PipelineStep;
};

export function PipelineStepCard({
  index,
  shouldReduceMotion,
  step,
}: PipelineStepCardProps) {
  const Icon = step.icon;

  return (
    <motion.div variants={shouldReduceMotion ? undefined : stepVariants}>
      <Stack
        spacing={2}
        sx={{
          height: "100%",
          minWidth: 0,
          pl: { xs: 7, md: 0 },
          position: "relative",
          pt: { xs: 0, md: 8 },
        }}
      >
        <StepNode Icon={Icon} />
        <StepContent index={index} step={step} />
      </Stack>
    </motion.div>
  );
}

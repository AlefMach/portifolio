import { Box, Stack, Typography } from "@mui/material";

import type { PipelineStep } from "../types";

type StepContentProps = {
  index: number;
  step: PipelineStep;
};

export function StepContent({ index, step }: StepContentProps) {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        minHeight: "100%",
        overflow: "hidden",
        p: { xs: 2.25, md: 2.5 },
        position: "relative",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
        transition:
          "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        "&::before": {
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.13) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          content: '""',
          inset: 0,
          maskImage:
            "linear-gradient(135deg, rgba(0,0,0,0.5), transparent 62%)",
          pointerEvents: "none",
          position: "absolute",
        },
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 22px 56px rgba(15, 23, 42, 0.12)",
          transform: "translateY(-4px)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": {
            transform: "none",
          },
        },
      }}
    >
      <Stack spacing={1.5} sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            {step.label}
          </Typography>

          <Typography
            component="span"
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 999,
              color: "text.secondary",
              fontFamily: "monospace",
              fontSize: "0.72rem",
              fontWeight: 800,
              lineHeight: 1,
              px: 1,
              py: 0.65,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </Typography>
        </Stack>

        <Typography
          component="h3"
          sx={{
            fontSize: "1.05rem",
            fontWeight: 800,
            lineHeight: 1.25,
          }}
        >
          {step.principle.title}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          {step.principle.description}
        </Typography>
      </Stack>
    </Box>
  );
}

import { Box, Stack, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import type { ExploringCardData } from "../types";
import { AiSignalSketch } from "./AiSignalSketch";
import { SystemDesignSketch } from "./SystemDesignSketch";

type ExploringCardProps = {
  card: ExploringCardData;
  index: number;
};

const visualByCard = {
  ai: AiSignalSketch,
  system: SystemDesignSketch,
};

const signalDelays = [0.2, 0.8] as const;

export function ExploringCard({ card, index }: ExploringCardProps) {
  const Visual =
    card.visual === "system" ? visualByCard.system : visualByCard.ai;
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <Stack
      spacing={2.5}
      sx={{
        bgcolor: "background.default",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        minHeight: "100%",
        overflow: "hidden",
        p: { xs: 2.5, md: 3 },
        position: "relative",
        transition:
          "transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
        "&::before": {
          background:
            card.visual === "system"
              ? "linear-gradient(135deg, rgba(96, 165, 250, 0.16), rgba(45, 212, 191, 0))"
              : "linear-gradient(135deg, rgba(0, 255, 194, 0.16), rgba(96, 165, 250, 0))",
          content: '""',
          height: 132,
          pointerEvents: "none",
          position: "absolute",
          right: -56,
          top: -64,
          width: 176,
        },
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 22px 56px rgba(15, 23, 42, 0.12)",
          transform: "perspective(900px) translateY(-4px) rotateX(1.2deg)",
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": {
            transform: "none",
          },
        },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          bgcolor: "divider",
          height: 2,
          left: 0,
          overflow: "hidden",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        <Box
          component={motion.span}
          animate={shouldReduceMotion ? undefined : { x: ["-30%", "104%"] }}
          transition={{
            delay: signalDelays[index % signalDelays.length],
            duration: 4.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
          sx={{
            background:
              "linear-gradient(90deg, transparent, primary.main, transparent)",
            display: "block",
            height: "100%",
            opacity: shouldReduceMotion ? 0 : 0.8,
            width: "46%",
          }}
        />
      </Box>

      <Visual />

      <Stack spacing={1.5} sx={{ position: "relative" }}>
        <Typography
          component="h3"
          sx={{ fontSize: "1.15rem", fontWeight: 900 }}
        >
          {card.title}
        </Typography>

        <Typography sx={{ color: "text.secondary", lineHeight: 1.75 }}>
          {card.description}
        </Typography>
      </Stack>

      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: 1, position: "relative" }}
      >
        {card.items.map((item) => (
          <Box
            key={item}
            component="span"
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 999,
              color: "text.secondary",
              fontSize: "0.8rem",
              fontWeight: 800,
              lineHeight: 1,
              px: 1.25,
              py: 0.85,
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Stack>
  );
}

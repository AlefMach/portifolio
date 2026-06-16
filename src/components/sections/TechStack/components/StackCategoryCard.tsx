import { Box, Stack, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { categoryIcons, fallbackStackIcon } from "../icons";
import type { StackCategory } from "../types";
import { StackToolChip } from "./StackToolChip";

type StackCategoryCardProps = {
  category: StackCategory;
  index: number;
  toolsLabel: string;
};

const accentBackgrounds = [
  "linear-gradient(135deg, rgba(0, 255, 194, 0.2), rgba(91, 91, 214, 0))",
  "linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(45, 212, 191, 0))",
  "linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(91, 91, 214, 0))",
];

const signalDelays = [0.15, 0.55, 0.95, 0.35, 0.75, 1.15] as const;

export function StackCategoryCard({
  category,
  index,
  toolsLabel,
}: StackCategoryCardProps) {
  const CategoryIcon = categoryIcons[category.title] ?? fallbackStackIcon;
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <Stack
      spacing={2.5}
      sx={{
        border: 1,
        bgcolor: "background.default",
        borderColor: "divider",
        borderRadius: 2,
        minHeight: "100%",
        overflow: "hidden",
        p: { xs: 2.5, md: 3 },
        position: "relative",
        transition:
          "transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
        "&::before": {
          background: accentBackgrounds[index % accentBackgrounds.length],
          content: '""',
          height: 120,
          pointerEvents: "none",
          position: "absolute",
          right: -48,
          top: -48,
          width: 160,
        },
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 22px 56px rgba(15, 23, 42, 0.12)",
          transform: "perspective(900px) translateY(-4px) rotateX(1.4deg)",
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

      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: "center", position: "relative" }}
      >
        <Box
          sx={{
            alignItems: "center",
            bgcolor: "action.hover",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            color: "primary.main",
            display: "flex",
            height: 48,
            justifyContent: "center",
            width: 48,
          }}
        >
          <CategoryIcon fontSize="small" />
        </Box>

        <Box>
          <Typography
            component="h3"
            sx={{ fontSize: "1.125rem", fontWeight: 900 }}
          >
            {category.title}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.8rem",
              fontWeight: 700,
              mt: 0.25,
            }}
          >
            {category.items.length} {toolsLabel}
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "1fr",
            lg: "repeat(2, minmax(0, 1fr))",
          },
          position: "relative",
        }}
      >
        {category.items.map((item) => (
          <StackToolChip key={item} item={item} />
        ))}
      </Box>
    </Stack>
  );
}

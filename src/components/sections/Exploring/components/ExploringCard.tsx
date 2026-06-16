import { Box, Stack, Typography } from "@mui/material";

import type { ExploringCardData } from "../types";
import { AiSignalSketch } from "./AiSignalSketch";
import { SystemDesignSketch } from "./SystemDesignSketch";

type ExploringCardProps = {
  card: ExploringCardData;
};

const visualByCard = {
  ai: AiSignalSketch,
  system: SystemDesignSketch,
};

export function ExploringCard({ card }: ExploringCardProps) {
  const Visual =
    card.visual === "system" ? visualByCard.system : visualByCard.ai;

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
      }}
    >
      <Visual />

      <Stack spacing={1.5}>
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

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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

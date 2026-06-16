import { Box } from "@mui/material";

import type { ExploringCardData } from "../types";
import { ExploringCard } from "./ExploringCard";

type ExploringGridProps = {
  cards: readonly ExploringCardData[];
};

export function ExploringGrid({ cards }: ExploringGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
      }}
    >
      {cards.map((card, index) => (
        <ExploringCard key={card.title} card={card} index={index} />
      ))}
    </Box>
  );
}

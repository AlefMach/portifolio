import { Box, Stack } from "@mui/material";

import type { ExperienceItem, TimelineProgress } from "../types";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";
import { TimelineProgressLine } from "./TimelineProgressLine";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  progress: TimelineProgress;
  shouldReduceMotion: boolean;
};

export function ExperienceTimeline({
  items,
  progress,
  shouldReduceMotion,
}: ExperienceTimelineProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <TimelineProgressLine
        progress={progress}
        shouldReduceMotion={shouldReduceMotion}
      />

      <Stack
        component="ol"
        spacing={{ xs: 3, md: 4 }}
        sx={{ m: 0, p: 0, position: "relative" }}
      >
        {items.map((item, index) => (
          <ExperienceTimelineItem
            key={`${item.company}-${item.period}`}
            index={index}
            item={item}
            progress={progress}
            shouldReduceMotion={shouldReduceMotion}
            totalItems={items.length}
          />
        ))}
      </Stack>
    </Box>
  );
}

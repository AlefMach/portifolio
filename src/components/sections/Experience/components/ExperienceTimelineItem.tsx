import { Box, Stack, Typography } from "@mui/material";
import { motion, useTransform } from "framer-motion";

import { getTimelineItemRange } from "../motion";
import type { ExperienceItem, TimelineProgress } from "../types";
import { ExperienceHighlights } from "./ExperienceHighlights";

type ExperienceTimelineItemProps = {
  index: number;
  item: ExperienceItem;
  progress: TimelineProgress;
  shouldReduceMotion: boolean;
  totalItems: number;
};

export function ExperienceTimelineItem({
  index,
  item,
  progress,
  shouldReduceMotion,
  totalItems,
}: ExperienceTimelineItemProps) {
  const [start, end] = getTimelineItemRange(index, totalItems);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [34, 0]);
  const scale = useTransform(progress, [start, end], [0.97, 1]);
  const nodeScale = useTransform(progress, [start, end], [0.74, 1]);
  const nodeOpacity = useTransform(progress, [start, end], [0.34, 1]);
  const isRightSide = index % 2 === 0;

  return (
    <Box
      component="li"
      sx={{
        display: "grid",
        gap: { xs: 2, md: 3 },
        gridTemplateColumns: {
          xs: "32px minmax(0, 1fr)",
          md: "minmax(0, 1fr) 56px minmax(0, 1fr)",
        },
        listStyle: "none",
        position: "relative",
      }}
    >
      <Box
        component={motion.article}
        style={shouldReduceMotion ? undefined : { opacity, scale, y }}
        sx={{
          bgcolor: "background.default",
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          gridColumn: {
            xs: "2",
            md: isRightSide ? "3" : "1",
          },
          gridRow: 1,
          p: { xs: 2.5, md: 3 },
          transition:
            "border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease",
          "&:hover": {
            borderColor: "primary.main",
            boxShadow: "0 18px 48px rgba(15, 23, 42, 0.1)",
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
          },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{
            alignItems: { xs: "flex-start", sm: "baseline" },
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.95rem",
                fontWeight: 800,
                letterSpacing: 0,
                mb: 0.5,
              }}
            >
              {item.company}
            </Typography>
            <Typography
              component="h3"
              sx={{ fontSize: "1.125rem", fontWeight: 800 }}
            >
              {item.role}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {item.period}
          </Typography>
        </Stack>

        <ExperienceHighlights highlights={item.highlights} />
      </Box>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          gridColumn: { xs: "1", md: "2" },
          gridRow: 1,
          justifyContent: "center",
          pt: { xs: 2.5, md: 3 },
          zIndex: 1,
        }}
      >
        <Box
          component={motion.span}
          style={
            shouldReduceMotion
              ? undefined
              : { opacity: nodeOpacity, scale: nodeScale }
          }
          sx={{
            bgcolor: "background.paper",
            border: 3,
            borderColor: "primary.main",
            borderRadius: "50%",
            boxShadow: "0 0 0 8px rgba(0, 255, 194, 0.12)",
            height: 18,
            width: 18,
          }}
        />
      </Box>
    </Box>
  );
}

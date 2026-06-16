import { Box, Typography } from "@mui/material";

type ExperienceHighlightsProps = {
  highlights: string[];
};

export function ExperienceHighlights({
  highlights,
}: ExperienceHighlightsProps) {
  return (
    <Box
      component="ul"
      sx={{
        color: "text.secondary",
        display: "grid",
        gap: 1,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
        },
        lineHeight: 1.7,
        listStylePosition: "outside",
        m: 0,
        pl: 2.5,
      }}
    >
      {highlights.map((highlight) => (
        <Typography
          key={highlight}
          component="li"
          sx={{ color: "text.secondary", lineHeight: 1.7 }}
        >
          {highlight}
        </Typography>
      ))}
    </Box>
  );
}

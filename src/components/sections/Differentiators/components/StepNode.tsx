import { Box } from "@mui/material";

import type { StageIcon } from "../types";

type StepNodeProps = {
  Icon: StageIcon;
};

export function StepNode({ Icon }: StepNodeProps) {
  return (
    <Box
      sx={{
        alignItems: "center",
        bgcolor: "background.paper",
        border: 1,
        borderColor: "primary.main",
        borderRadius: "50%",
        boxShadow: "0 0 0 8px rgba(99, 102, 241, 0.08)",
        color: "primary.contrastText",
        display: "flex",
        height: 48,
        justifyContent: "center",
        left: { xs: 0, md: "50%" },
        position: "absolute",
        top: { xs: 0, md: 10 },
        transform: { xs: "none", md: "translateX(-50%)" },
        width: 48,
        zIndex: 3,
        "&::before": {
          bgcolor: "primary.main",
          borderRadius: "50%",
          content: '""',
          inset: 5,
          position: "absolute",
        },
      }}
    >
      <Icon fontSize="small" sx={{ position: "relative" }} />
    </Box>
  );
}

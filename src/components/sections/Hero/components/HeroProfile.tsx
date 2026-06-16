import { Box } from "@mui/material";

import { HeroProfilePhoto } from "./HeroProfilePhoto";

export function HeroProfile() {
  return (
    <Box
      sx={{
        order: {
          xs: -1,
          sm: 0,
        },
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "flex-end",
        },
      }}
    >
      <HeroProfilePhoto />
    </Box>
  );
}

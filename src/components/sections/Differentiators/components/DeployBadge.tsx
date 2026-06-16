import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { deployVariants } from "../motion";

type DeployBadgeProps = {
  shouldReduceMotion: boolean;
};

export function DeployBadge({ shouldReduceMotion }: DeployBadgeProps) {
  return (
    <motion.div variants={shouldReduceMotion ? undefined : deployVariants}>
      <Stack
        direction="row"
        spacing={1.25}
        sx={{
          alignItems: "center",
          border: 1,
          borderColor: "divider",
          borderRadius: 999,
          color: "text.secondary",
          display: "inline-flex",
          fontWeight: 800,
          mt: { xs: 3, md: 4 },
          px: 1.5,
          py: 1,
        }}
      >
        <RocketLaunchOutlinedIcon color="primary" fontSize="small" />
        <Typography
          component="span"
          sx={{
            fontFamily: "monospace",
            fontSize: "0.8rem",
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          build --from-zero --ship
        </Typography>
      </Stack>
    </motion.div>
  );
}

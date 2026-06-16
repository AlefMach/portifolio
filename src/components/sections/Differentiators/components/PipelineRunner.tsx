import { Box } from "@mui/material";
import { motion } from "framer-motion";

export function PipelineRunner() {
  return (
    <>
      <Box
        component={motion.div}
        animate={{ left: ["7%", "93%"] }}
        transition={{
          duration: 2.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.35,
        }}
        sx={{
          bgcolor: "primary.main",
          borderRadius: "50%",
          boxShadow: "0 0 0 6px rgba(99, 102, 241, 0.12)",
          display: { xs: "none", md: "block" },
          height: 9,
          position: "absolute",
          top: 30.5,
          width: 9,
          zIndex: 2,
        }}
      />

      <Box
        component={motion.div}
        animate={{ top: ["48px", "calc(100% - 48px)"] }}
        transition={{
          duration: 2.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.35,
        }}
        sx={{
          bgcolor: "primary.main",
          borderRadius: "50%",
          boxShadow: "0 0 0 6px rgba(99, 102, 241, 0.12)",
          display: { xs: "block", md: "none" },
          height: 9,
          left: 19.5,
          position: "absolute",
          width: 9,
          zIndex: 2,
        }}
      />
    </>
  );
}

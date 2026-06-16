import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { useTranslation } from "../../../hooks/useTranslation";
import { BuildProcessHeading } from "./components/BuildProcessHeading";
import { sectionVariants } from "./motion";

const differentialIcons = [
  QueryStatsOutlinedIcon,
  HubOutlinedIcon,
  PaymentsOutlinedIcon,
  AccountTreeOutlinedIcon,
  StorageOutlinedIcon,
  AutoAwesomeOutlinedIcon,
] as const;

const signalDelays = [0, 0.35, 0.7, 0.2, 0.55, 0.9] as const;

export function Differentiators() {
  const { t } = useTranslation();
  const shouldReduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.25,
    margin: "0px 0px -12% 0px",
    once: true,
  });

  return (
    <Box
      component="section"
      id="build-process"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <motion.div
        ref={sectionRef}
        animate={shouldReduceMotion || isInView ? "visible" : "hidden"}
        initial={shouldReduceMotion ? false : "hidden"}
        variants={shouldReduceMotion ? undefined : sectionVariants}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={4}>
            <BuildProcessHeading
              title={t.home.buildTitle}
              description={t.home.buildDescription}
              shouldReduceMotion={shouldReduceMotion}
            />

            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
              }}
            >
              {t.home.buildPrinciples.map((principle, index) => {
                const Icon =
                  differentialIcons[index % differentialIcons.length];

                return (
                  <Box
                    key={principle.title}
                    component={motion.article}
                    variants={shouldReduceMotion ? undefined : sectionVariants}
                    sx={{
                      bgcolor: "background.default",
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      minHeight: 220,
                      overflow: "hidden",
                      p: { xs: 2.5, md: 3 },
                      position: "relative",
                      transition:
                        "transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
                      "&::before": {
                        background:
                          "linear-gradient(135deg, rgba(0, 255, 194, 0.14), rgba(96, 165, 250, 0))",
                        content: '""',
                        height: 128,
                        pointerEvents: "none",
                        position: "absolute",
                        right: -56,
                        top: -64,
                        width: 168,
                      },
                      "&:hover": {
                        borderColor: "primary.main",
                        boxShadow: "0 18px 48px rgba(15, 23, 42, 0.1)",
                        transform: "translateY(-3px)",
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
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : { x: ["-30%", "104%"] }
                        }
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

                    <Box
                      sx={{
                        alignItems: "center",
                        bgcolor: "primary.main",
                        borderRadius: 2,
                        color: "primary.contrastText",
                        display: "inline-flex",
                        height: 44,
                        justifyContent: "center",
                        position: "relative",
                        width: 44,
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>

                    <Stack spacing={1} sx={{ position: "relative" }}>
                      <Typography
                        component="h3"
                        sx={{ fontSize: "1.05rem", fontWeight: 800 }}
                      >
                        {principle.title}
                      </Typography>
                      <Typography
                        sx={{ color: "text.secondary", lineHeight: 1.7 }}
                      >
                        {principle.description}
                      </Typography>
                    </Stack>
                  </Box>
                );
              })}
            </Box>
          </Stack>
        </Container>
      </motion.div>
    </Box>
  );
}

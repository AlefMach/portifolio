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
                      p: { xs: 2.5, md: 3 },
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        bgcolor: "primary.main",
                        borderRadius: 2,
                        color: "primary.contrastText",
                        display: "inline-flex",
                        height: 44,
                        justifyContent: "center",
                        width: 44,
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>

                    <Stack spacing={1}>
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

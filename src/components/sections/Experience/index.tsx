import { Box, Container, Stack } from "@mui/material";
import { useReducedMotion, useScroll } from "framer-motion";
import { useRef } from "react";

import { useTranslation } from "../../../hooks/useTranslation";
import { SectionHeading } from "../SectionHeading";
import { ExperienceTimeline } from "./components/ExperienceTimeline";

export function Experience() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    offset: ["start 62%", "end 62%"],
    target: sectionRef,
  });

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="experience"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={4}>
          <SectionHeading
            title={t.home.experienceTitle}
            description={t.home.experienceDescription}
          />

          <ExperienceTimeline
            items={t.home.experienceItems}
            progress={scrollYProgress}
            shouldReduceMotion={shouldReduceMotion}
          />
        </Stack>
      </Container>
    </Box>
  );
}

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import { useTranslation } from "../../../hooks/useTranslation";

type TypewriterState = {
  displayedSkill: string;
  isDeleting: boolean;
  skillIndex: number;
  skillSignature: string;
};

const getInitialTypewriterState = (
  skillSignature: string,
  displayedSkill = "",
): TypewriterState => ({
  displayedSkill,
  isDeleting: false,
  skillIndex: 0,
  skillSignature,
});

export function Hero() {
  const { t } = useTranslation();
  const skills = useMemo(() => t.hero.skills, [t.hero.skills]);
  const skillSignature = skills.join("|");
  const [typewriter, setTypewriter] = useState(() =>
    getInitialTypewriterState(skillSignature, ""),
  );
  const currentTypewriter =
    typewriter.skillSignature === skillSignature
      ? typewriter
      : getInitialTypewriterState(skillSignature, skills[0] ?? "");
  const currentSkill = skills[currentTypewriter.skillIndex] ?? skills[0] ?? "";
  const displayedSkill = currentTypewriter.displayedSkill;
  const isDeleting = currentTypewriter.isDeleting;

  useEffect(() => {
    if (skills.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const isComplete = displayedSkill === currentSkill;
    const isEmpty = displayedSkill.length === 0;

    const timeBeforeStartWriting = 1800;
    const timeBeforeTheNextSkill = 350;

    const delay =
      isComplete && !isDeleting
        ? timeBeforeStartWriting
        : isEmpty && isDeleting
          ? timeBeforeTheNextSkill
          : 70;

    const timeout = window.setTimeout(() => {
      setTypewriter((prev) => {
        if (isComplete && !isDeleting) {
          return {
            ...prev,
            isDeleting: true,
            skillSignature,
          };
        }

        if (isEmpty && isDeleting) {
          return {
            ...prev,
            displayedSkill: "",
            isDeleting: false,
            skillIndex: (prev.skillIndex + 1) % skills.length,
            skillSignature,
          };
        }

        return {
          ...prev,
          displayedSkill: isDeleting
            ? currentSkill.slice(0, displayedSkill.length - 1)
            : currentSkill.slice(0, displayedSkill.length + 1),
          skillSignature,
        };
      });
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentSkill, displayedSkill, isDeleting, skillSignature, skills.length]);

  return (
    <Box
      component="section"
      id="inicio"
      sx={{
        alignItems: "center",
        display: "flex",
        minHeight: { xs: "calc(100svh - 64px)", md: "calc(100vh - 72px)" },
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.1fr) 0.9fr" },
            alignItems: "center",
          }}
        >
          <Stack spacing={{ xs: 2.5, md: 3 }}>
            <Typography
              component="p"
              sx={{
                color: "primary.main",
                fontSize: { xs: "0.875rem", md: "1rem" },
                fontWeight: 800,
              }}
            >
              {t.hero.eyebrow}
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.75rem" },
                fontWeight: 850,
                letterSpacing: 0,
                lineHeight: { xs: 1.05, md: 1 },
                maxWidth: 760,
              }}
            >
              {t.hero.title}
              <Typography
                component="span"
                sx={{
                  color: "primary.main",
                  display: "block",
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  fontWeight: 800,
                  minHeight: "1.35em",
                  "&::after": {
                    animation: "cursorBlink 900ms steps(2, start) infinite",
                    content: '"|"',
                    display: "inline-block",
                    ml: 0.5,
                  },
                  "@keyframes cursorBlink": {
                    "0%, 45%": { opacity: 1 },
                    "46%, 100%": { opacity: 0 },
                  },
                }}
              >
                {displayedSkill || "\u00A0"}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              {t.hero.description}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                href="#projetos"
                size="large"
                variant="contained"
                sx={{ minHeight: 48, px: 3 }}
              >
                {t.hero.primaryAction}
              </Button>
              <Button
                href="#contato"
                size="large"
                variant="outlined"
                sx={{ minHeight: 48, px: 3 }}
              >
                {t.hero.secondaryAction}
              </Button>
            </Stack>
          </Stack>

          <Box
            aria-hidden="true"
            sx={{
              aspectRatio: "1 / 1",
              border: 1,
              borderColor: "divider",
              borderRadius: 3,
              display: { xs: "none", sm: "block" },
              maxWidth: { sm: 420, md: "none" },
              mx: { sm: "auto", md: 0 },
              overflow: "hidden",
              position: "relative",
              width: "100%",
              "&::before": {
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.9), rgba(15,118,110,0.8))",
                content: '""',
                inset: 0,
                position: "absolute",
              },
              "&::after": {
                border: "1px solid rgba(255,255,255,0.5)",
                content: '""',
                inset: "18%",
                position: "absolute",
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

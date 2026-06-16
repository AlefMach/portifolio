import { Stack, Typography } from "@mui/material";

import { useTypewriterSkill } from "../hooks/useTypewriterSkill";
import { HeroActions } from "./HeroActions";

type HeroContentProps = {
  description: string;
  eyebrow: string;
  primaryAction: string;
  secondaryAction: string;
  skills: readonly string[];
  title: string;
};

export function HeroContent({
  description,
  eyebrow,
  primaryAction,
  secondaryAction,
  skills,
  title,
}: HeroContentProps) {
  const displayedSkill = useTypewriterSkill(skills);

  return (
    <Stack spacing={{ xs: 2.5, md: 3 }}>
      <Typography
        component="p"
        sx={{
          color: "primary.main",
          fontSize: { xs: "1rem", md: "1.6rem" },
          fontWeight: 800,
        }}
      >
        {eyebrow}
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
        {title}

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
        {description}
      </Typography>

      <HeroActions
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
    </Stack>
  );
}

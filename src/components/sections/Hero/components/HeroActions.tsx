import { Button, Stack } from "@mui/material";

type HeroActionsProps = {
  primaryAction: string;
  secondaryAction: string;
};

export function HeroActions({
  primaryAction,
  secondaryAction,
}: HeroActionsProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1.5}
      sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
    >
      <Button
        href="#projects"
        size="large"
        variant="contained"
        sx={{ minHeight: 48, px: 3 }}
      >
        {primaryAction}
      </Button>

      <Button
        href="#contact"
        size="large"
        variant="outlined"
        sx={{ minHeight: 48, px: 3 }}
      >
        {secondaryAction}
      </Button>
    </Stack>
  );
}

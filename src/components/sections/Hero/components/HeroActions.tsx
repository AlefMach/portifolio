import DownloadIcon from "@mui/icons-material/Download";
import { Button, Stack } from "@mui/material";

type HeroActionsProps = {
  onDownloadResume: () => void;
  primaryAction: string;
  resumeAction: string;
  secondaryAction: string;
};

export function HeroActions({
  onDownloadResume,
  primaryAction,
  resumeAction,
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

      <Button
        onClick={onDownloadResume}
        size="large"
        startIcon={<DownloadIcon />}
        variant="outlined"
        sx={{ minHeight: 48, px: 3 }}
      >
        {resumeAction}
      </Button>
    </Stack>
  );
}

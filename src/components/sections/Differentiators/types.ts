import type AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

export type BuildPrinciple = {
  description: string;
  title: string;
};

export type StageIcon = typeof AccountTreeOutlinedIcon;

export type PipelineStep = {
  icon: StageIcon;
  label: string;
  principle: BuildPrinciple;
};

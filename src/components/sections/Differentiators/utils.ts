import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";

import type { BuildPrinciple, PipelineStep, StageIcon } from "./types";

const stageIcons: StageIcon[] = [
  AccountTreeOutlinedIcon,
  QueryStatsOutlinedIcon,
  HubOutlinedIcon,
  AutoAwesomeOutlinedIcon,
];

export function getStageLabels(language: string) {
  return language === "pt"
    ? ["Início", "Requisitos", "Decisão", "Entrega"]
    : ["Start", "Requirements", "Decision", "Delivery"];
}

export function getPipelineSteps(
  principles: BuildPrinciple[],
  stageLabels: string[],
): PipelineStep[] {
  return principles.map((principle, index) => ({
    icon: stageIcons[index % stageIcons.length],
    label: stageLabels[index] ?? `Stage ${index + 1}`,
    principle,
  }));
}

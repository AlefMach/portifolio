import type { Project, ProjectCaseField } from "./types";

export function getProjectCaseFields(project: Project): ProjectCaseField[] {
  const fields = [
    {
      label: "problemLabel" in project ? project.problemLabel : undefined,
      text: "problem" in project ? project.problem : undefined,
    },
    {
      label: "solutionLabel" in project ? project.solutionLabel : undefined,
      text: "solution" in project ? project.solution : undefined,
    },
    {
      label: "impactLabel" in project ? project.impactLabel : undefined,
      text: "impact" in project ? project.impact : undefined,
    },
    {
      label: "roleLabel" in project ? project.roleLabel : undefined,
      text: "role" in project ? project.role : undefined,
    },
  ];

  return fields.filter((field): field is ProjectCaseField =>
    Boolean(field.label && field.text),
  );
}

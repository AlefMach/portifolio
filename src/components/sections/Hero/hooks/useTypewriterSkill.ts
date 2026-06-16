import { useEffect, useMemo, useState } from "react";

type TypewriterState = {
  displayedSkill: string;
  isDeleting: boolean;
  skillIndex: number;
  skillSignature: string;
};

const WRITING_DELAY = 70;
const TIME_BEFORE_START_WRITING = 1800;
const TIME_BEFORE_NEXT_SKILL = 350;

const getInitialTypewriterState = (
  skillSignature: string,
  displayedSkill = "",
): TypewriterState => ({
  displayedSkill,
  isDeleting: false,
  skillIndex: 0,
  skillSignature,
});

export function useTypewriterSkill(skills: readonly string[]) {
  const skillSignature = useMemo(() => skills.join("|"), [skills]);
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

    const delay =
      isComplete && !isDeleting
        ? TIME_BEFORE_START_WRITING
        : isEmpty && isDeleting
          ? TIME_BEFORE_NEXT_SKILL
          : WRITING_DELAY;

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

  return displayedSkill;
}

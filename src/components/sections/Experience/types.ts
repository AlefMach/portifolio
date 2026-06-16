import type { MotionValue } from "framer-motion";

import type { TranslationDictionary } from "../../../i18n/translations";

export type ExperienceItem =
  TranslationDictionary["home"]["experienceItems"][number];

export type TimelineProgress = MotionValue<number>;

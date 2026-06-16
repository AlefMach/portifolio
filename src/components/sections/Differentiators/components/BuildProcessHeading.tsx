import { motion } from "framer-motion";

import { SectionHeading } from "../../SectionHeading";
import { headingVariants } from "../motion";

type BuildProcessHeadingProps = {
  description: string;
  shouldReduceMotion: boolean;
  title: string;
};

export function BuildProcessHeading({
  description,
  shouldReduceMotion,
  title,
}: BuildProcessHeadingProps) {
  return (
    <motion.div variants={shouldReduceMotion ? undefined : headingVariants}>
      <SectionHeading title={title} description={description} />
    </motion.div>
  );
}

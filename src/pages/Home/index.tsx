import { Box } from "@mui/material";

import { About } from "../../components/sections/About";
import { Contact } from "../../components/sections/Contact";
import { Differentiators } from "../../components/sections/Differentiators";
import { Experience } from "../../components/sections/Experience";
import { Exploring } from "../../components/sections/Exploring";
import { Hero } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { TechStack } from "../../components/sections/TechStack";

export default function Home() {
  return (
    <Box component="main" sx={{ flex: 1 }}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Differentiators />
      <TechStack />
      <Exploring />
      <Contact />
    </Box>
  );
}

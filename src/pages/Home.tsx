import { useEffect, useState } from "react";
import Cloud from "../components/three/models/Cloud";
import Airplane from "../components/three/models/Airplane";
import Scene from "../components/three/Scene";
import StarsBackground from "../components/ui/StarsBackground";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "dark");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const clouds = [
    { startX: 4.4, speed: 0.4 },
    { startX: 6.7, speed: 0.2 },
    { startX: 10.9, speed: 0.5 },
    { startX: 15.5, speed: 0.1 },
    { startX: 18.8, speed: 0.6 },
    { startX: 20.8, speed: 0.5 },
    { startX: 25.8, speed: 0.3 },
  ];

  const banner = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        color: "#111", // cor padrão fixa
      }}
    >
      <Typography
        sx={{
          fontSize: "0.9rem",
          letterSpacing: "0.35em",
          fontWeight: 500,
          color: "#444",
        }}
      >
        HI, I'M
      </Typography>

      <Typography
        sx={{
          fontSize: "4rem",
          fontWeight: 800,
          lineHeight: 1,
          color: "#000",
        }}
      >
        ALEF
      </Typography>

      <Typography
        sx={{
          fontSize: "1.2rem",
          color: "#666",
        }}
      >
        Developer · Designer · Creator
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 1,
          borderRadius: "999px",
          px: 4,
          py: 1.2,
          backgroundColor: "#000",
          color: "#fff",
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#111",
            boxShadow: "none",
          },
        }}
      >
        See my projects →
      </Button>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      {isDark && <StarsBackground />}

      <Box
        sx={{
          width: "100%",
          height: "50%",
          mt: "1.6rem",
          position: "relative",
        }}
      >
        <Scene cameraPosition={[0, 0, 3.6]} cameraFov={30}>
          {clouds.map((cloud, index) => (
            <Cloud key={index} y={0} z={0} scale={4.2} {...cloud} />
          ))}
        </Scene>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "50%",
          marginTop: "-5%",
        }}
      >
        <Scene cameraPosition={[0, 1, 6]} cameraFov={35}>
          <Airplane startX={0} y={0} z={0} scale={0.01}>
            {banner}
          </Airplane>
        </Scene>
      </Box>
    </Box>
  );
}

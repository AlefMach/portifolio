import { Box } from "@mui/material";
import Cloud from "../components/three/models/Cloud";
import Scene from "../components/three/Scene";

const clouds = [
  { startX: 4.4, speed: 0.4 },
  { startX: 6.7, speed: 0.2 },
  { startX: 10.9, speed: 0.5 },
  { startX: 15.5, speed: 0.1 },
  { startX: 18.8, speed: 0.6 },
  { startX: 20.8, speed: 0.5 },
  { startX: 25.8, speed: 0.3 },
];

export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ width: "100%", height: "60%", mt: "1.6rem" }}>
        <Scene cameraPosition={[0, 0, 3.6]} cameraFov={30}>
          {clouds.map((cloud, index) => (
            <Cloud
              key={index}
              startX={cloud.startX}
              y={0}
              z={0}
              scale={4}
              speed={cloud.speed}
            />
          ))}
        </Scene>
      </Box>
    </Box>
  );
}

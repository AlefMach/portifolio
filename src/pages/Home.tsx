import { Box } from "@mui/material";
import Cloud from "../components/three/models/Cloud";
import Scene from "../components/three/Scene";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Scene>
        <Cloud startX={0} y={2} z={0} scale={2} speed={0.8} />
      </Scene>
    </Box>
  );
}

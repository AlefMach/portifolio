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
      <Box
        sx={{
          width: "100%",
          height: "60%",
          marginTop: "1.6rem",
        }}
      >
        <Scene>
          <Cloud startX={4.4} y={0} z={0} scale={4} speed={0.4} />
          <Cloud startX={6.7} y={0} z={0} scale={4} speed={0.2} />
          <Cloud startX={10.9} y={0} z={0} scale={4} speed={0.5} />
          <Cloud startX={15.5} y={0} z={0} scale={4} speed={0.1} />
          <Cloud startX={18.8} y={0} z={0} scale={4} speed={0.6} />
          <Cloud startX={20.8} y={0} z={0} scale={4} speed={0.5} />
          <Cloud startX={25.8} y={0} z={0} scale={4} speed={0.3} />
        </Scene>
      </Box>
    </Box>
  );
}

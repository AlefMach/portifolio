import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";
import Lights from "./Lights";
import Camera from "./Camera";

type SceneProps = {
  children: ReactNode;
};

export default function Scene({ children }: SceneProps) {
  return (
    <Canvas>
      <Camera />
      <Lights />
      {children}
    </Canvas>
  );
}

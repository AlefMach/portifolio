import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Lights from "./Lights";
import type { ReactNode } from "react";

type SceneProps = {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
};

export default function Scene({
  children,
  cameraPosition,
  cameraFov,
}: SceneProps) {
  return (
    <Canvas>
      <Camera position={cameraPosition} fov={cameraFov} />
      <Lights />
      {children}
    </Canvas>
  );
}

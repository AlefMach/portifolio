import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

type CloudProps = ThreeElements["group"] & {
  startX: number;
  y: number;
  z: number;
  speed: number;
};

export default function Cloud({ startX, y, z, speed, scale }: CloudProps) {
  const { scene } = useGLTF("/models/Clouds.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.position.x -= speed * delta;

    if (ref.current.position.x < -10) {
      ref.current.position.x = startX;
    }
  });

  return (
    <group ref={ref} position={[startX, y, z]} scale={scale}>
      <primitive object={scene.clone()} />
    </group>
  );
}

import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import * as THREE from "three";
import AirplaneBanner from "../../ui/AirplaneBanner";

type AirplaneProps = ThreeElements["group"] & {
  startX: number;
  y: number;
  z: number;
};

export default function Airplane({ startX, y, z, scale }: AirplaneProps) {
  const { scene } = useGLTF("/models/Airplane.glb");
  const ref = useRef<THREE.Group>(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const clickTime = useRef(0);
  const totalTime = useRef(0);

  const baseRotationY = Math.PI;

  useFrame((_, delta) => {
    if (!ref.current) return;

    totalTime.current += delta;
    const t = totalTime.current;

    // animação contínua (idle)
    const idleFloat = Math.sin(t * 1.2) * 0.1;
    const idleTilt = Math.sin(t * 1.4) * 0.08;
    const idlePitch = Math.cos(t * 1.1) * 0.04;

    let extraRoll = 0;
    let extraPitch = 0;
    let extraLift = 0;

    // animação do clique
    if (isAnimating) {
      clickTime.current += delta * 2.5;
      const ct = clickTime.current;

      extraRoll = Math.sin(ct * 3) * 0.1;
      extraPitch = Math.sin(ct * 2) * 0.1;
      extraLift = Math.sin(ct * 2) * 0.25;

      if (ct > Math.PI) {
        setIsAnimating(false);
        clickTime.current = 0;
      }
    }

    ref.current.position.set(startX, y + idleFloat + extraLift, z);

    ref.current.rotation.set(
      idlePitch + extraPitch,
      baseRotationY,
      idleTilt + extraRoll,
    );
  });

  return (
    <>
      <group
        ref={ref}
        position={[startX, y, z]}
        scale={scale}
        onClick={() => {
          if (!isAnimating) setIsAnimating(true);
        }}
      >
        <primitive object={scene.clone()} />
      </group>

      <AirplaneBanner position={[startX - 1, y, z]}>TESTE</AirplaneBanner>
    </>
  );
}

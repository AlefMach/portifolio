import { Text } from "@react-three/drei";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type BannerProps = ThreeElements["group"] & {
  children: string;
};

export default function AirplaneBanner({ children, ...props }: BannerProps) {
  const ref = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    if (!ref.current) return;

    time.current += delta;
    const t = time.current;

    ref.current.rotation.z = Math.sin(t * 2) * 0.03;
    ref.current.position.y = 0.5 + Math.sin(t * 1.5) * 0.03;
  });

  return (
    <group ref={ref} {...props}>
      {/* cabo atrás do avião */}
      <mesh position={[-1.1, 0, 0]}>
        <boxGeometry args={[1.2, 0.02, 0.02]} />
        <meshStandardMaterial color="#666" />
      </mesh>

      {/* bandeira */}
      <mesh position={[-2.8, 0, 0]}>
        <planeGeometry args={[3.2, 0.9]} />
        <meshStandardMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

      {/* texto */}
      <Text
        position={[-2.8, 0, 0.02]}
        fontSize={0.22}
        color="black"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.7}
      >
        {children}
      </Text>
    </group>
  );
}

import { Html } from "@react-three/drei";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

type BannerProps = ThreeElements["group"] & {
  children: ReactNode;
};

export default function AirplaneBanner({ children, ...props }: BannerProps) {
  const groupRef = useRef<THREE.Group>(null);
  const flagRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  const flagGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(3.8, 2.5, 30, 10);
  }, []);

  useFrame((_, delta) => {
    time.current += delta;
    const t = time.current;

    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 1.8) * 0.02;
      groupRef.current.position.y = 0.5 + Math.sin(t * 1.5) * 0.03;
    }

    if (flagRef.current) {
      const pos = flagRef.current.geometry.attributes.position;
      const arr = pos.array as Float32Array;

      for (let i = 0; i < arr.length; i += 3) {
        const x = arr[i];
        arr[i + 2] = Math.sin(x * 2.5 + t * 4) * 0.08;
      }

      pos.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* cabo */}
      <mesh position={[-1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
        <meshStandardMaterial color="#777" />
      </mesh>

      {/* bandeira */}
      <mesh ref={flagRef} geometry={flagGeometry} position={[-2.8, 0, 0]}>
        <meshStandardMaterial color="#e9fff7" side={THREE.DoubleSide} />
      </mesh>

      <Html
        transform
        position={[-2.8, 0, 0.08]}
        distanceFactor={4.2}
        center
        style={{
          width: "clamp(180px, 70vw, 320px)",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {children}
        </div>
      </Html>
    </group>
  );
}

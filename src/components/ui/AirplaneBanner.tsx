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
  const ropeRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  // Higher resolution geometry for smoother waves
  const flagGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(4.2, 2.6, 48, 16);
  }, []);

  // Pre-store original x positions for wave reference
  const origX = useMemo(() => {
    const geo = new THREE.PlaneGeometry(4.2, 2.6, 48, 16);
    const pos = geo.attributes.position.array as Float32Array;
    const xs = new Float32Array(pos.length / 3);
    for (let i = 0; i < xs.length; i++) xs[i] = pos[i * 3];
    geo.dispose();
    return xs;
  }, []);

  useFrame((_, delta) => {
    time.current += delta * 0.9; // slightly slower for elegance
    const t = time.current;

    // Gentle body float + micro-tilt
    if (groupRef.current) {
      groupRef.current.rotation.z =
        Math.sin(t * 1.4) * 0.018 + Math.sin(t * 3.1) * 0.005;
      groupRef.current.position.y =
        0.5 + Math.sin(t * 1.2) * 0.035 + Math.sin(t * 2.6) * 0.01;
    }

    if (flagRef.current) {
      const pos = flagRef.current.geometry.attributes.position;
      const arr = pos.array as Float32Array;
      const count = arr.length / 3;

      for (let i = 0; i < count; i++) {
        const ox = origX[i];
        const y = arr[i * 3 + 1];

        // Normalize x: left edge (~-2.1) = 0, right edge (~2.1) = 1
        const nx = (ox + 2.1) / 4.2; // 0..1, left to right

        // Wave amplitude grows toward the free (right) end
        const amp = nx * nx * 0.22;

        // Two overlapping wave frequencies for organic, non-repeating feel
        const wave1 = Math.sin(ox * 2.2 + t * 3.8) * amp;
        const wave2 = Math.sin(ox * 1.1 + t * 2.3 + 0.8) * amp * 0.45;

        // Slight vertical sag toward free end
        const sag = nx * Math.sin(t * 1.2) * 0.04;

        // Vertical ripple — subtle cross-wave
        const vRipple = Math.sin(y * 2.5 + t * 2.1) * nx * 0.025;

        arr[i * 3 + 2] = wave1 + wave2 + sag + vRipple;
      }

      pos.needsUpdate = true;
      flagRef.current.geometry.computeVertexNormals();
    }

    // Subtle rope sway
    if (ropeRef.current) {
      ropeRef.current.rotation.z = Math.sin(t * 1.4) * 0.03;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Rope attachment */}
      <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.008, 0.008, 1.6, 8]} />
        <meshStandardMaterial color="#aaa" roughness={0.6} metalness={0.3} />
      </mesh>

      {/* Flag cloth */}
      <mesh ref={flagRef} geometry={flagGeometry} position={[-3.0, 0, 0]}>
        <meshStandardMaterial
          color="#f0faf6"
          side={THREE.DoubleSide}
          roughness={0.85}
          metalness={0.0}
          envMapIntensity={0.4}
        />
      </mesh>

      {/* HTML content */}
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
            padding: "18px 22px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: "0.01em",
          }}
        >
          {children}
        </div>
      </Html>
    </group>
  );
}

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type WindProps = {
  count?: number;
  darkMode?: boolean;
};

export default function Wind({ count = 30, darkMode = false }: WindProps) {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const offsetY = ((i * 37) % 30) / 2 - 7.5;
      const offsetX = ((i * 53) % 40) / 2 - 10;
      const speed = 0.006 + ((i * 29) % 10) * 0.0008;

      const points: THREE.Vector3[] = [];

      for (let j = 0; j < 50; j++) {
        points.push(
          new THREE.Vector3(j * 0.3, Math.sin(j * 0.25 + i) * 0.15, 0),
        );
      }

      return {
        geometry: new THREE.BufferGeometry().setFromPoints(points),
        speed,
        position: [offsetX, offsetY, -2] as [number, number, number],
      };
    });
  }, [count]);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    group.children.forEach((child, index) => {
      child.position.x -= lines[index].speed;

      if (child.position.x < -15) {
        child.position.x = 15;
      }
    });
  });

  const color = darkMode ? "#dbeafe" : "#565c68";

  return (
    <group ref={groupRef}>
      {lines.map((lineData, index) => (
        <primitive
          key={index}
          object={
            new THREE.Line(
              lineData.geometry,
              new THREE.LineBasicMaterial({
                color,
                transparent: true,
                opacity: darkMode ? 0.4 : 0.6,
              }),
            )
          }
          position={lineData.position}
        />
      ))}
    </group>
  );
}

import { PerspectiveCamera } from "@react-three/drei";

type CameraProps = {
  position?: [number, number, number];
  fov?: number;
};

export default function Camera({
  position,
  fov,
}: CameraProps) {
  return <PerspectiveCamera makeDefault position={position} fov={fov} />;
}

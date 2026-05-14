import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={35} />;
}

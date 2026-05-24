import { Text3D } from "@react-three/drei";

export const SectionTitle = ({ children, color = "white", ...props }) => (
  <Text3D font="/fonts/Inter_Bold.json" size={0.3} {...props}>
    {children}
    <meshStandardMaterial color={color} />
  </Text3D>
);

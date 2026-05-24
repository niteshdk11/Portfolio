import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import PhysicsCube from "./PhysicsCube";
import { MeshDistortMaterial } from "@react-three/drei";
import { useMobile } from "../../Helpers/useMobile";

const Skills = () => {
  const { SECTIONS_DISTANCE } = useApp();
  const { isMobile } = useMobile();

  return (
    <group
      position={
        isMobile
          ? [1.4, -0.1, SECTIONS_DISTANCE + 2.5]
          : [0.4, -0.1, SECTIONS_DISTANCE]
      }
      rotation={isMobile ? [0, -1.5, 0] : [0, 0, 0]}
    >
      <mesh visible={!isMobile} position-y={1.3} position-x={0.8}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <MeshDistortMaterial
          opacity={0.2}
          transparent
          distort={0.5}
          speed={1}
          color="red"
          metalness={0.2}
          roughness={0}
          transmission={0.95}
          ior={1.5}
        />
      </mesh>

      <SectionTitle
        position-y={isMobile ? 0.1 : 1.1}
        position-x={isMobile ? -3 : 0.4}
        position-z={isMobile ? 1.7 : -0.5}
        rotation-y={isMobile ? -0.6 : -0.5}
        scale={isMobile ? 0.7 : 1}
      >
        Skills
      </SectionTitle>

      <group
        position={[-2.2, 1, 0]}
        rotation-y={isMobile ? 0 : 0.6}
        scale={isMobile ? 1 : 0.8}
      >
        <PhysicsCube />
      </group>
    </group>
  );
};

export default Skills;

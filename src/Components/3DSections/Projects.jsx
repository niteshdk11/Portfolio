import { SectionTitle } from "../../Helpers/SectionTitle";
import { useApp } from "../../Context/context";
import { RoundedBox, useTexture } from "@react-three/drei";
import { useMobile } from "../../Helpers/useMobile";
import * as THREE from "three";

const Projects = () => {
  const { SECTIONS_DISTANCE } = useApp();
  const { isMobile } = useMobile();

  const oakTexture = useTexture("/Textures/oak_veneer_01_diff_4k.jpg");
  const oakDisp = useTexture("/Textures/oak_veneer_01_disp_4k.png");
  oakTexture.wrapS = THREE.RepeatWrapping;
  oakTexture.wrapT = THREE.RepeatWrapping;
  oakTexture.repeat.set(2, 2);
  oakDisp.wrapS = THREE.RepeatWrapping;
  oakDisp.wrapT = THREE.RepeatWrapping;
  oakDisp.repeat.set(2, 2);

  return (
    <group
      {...(isMobile
        ? {
            position: [-1.5, -0.1, SECTIONS_DISTANCE * 2 + 0.3],
            rotation: [0, -1.6, 0],
          }
        : {
            position: [0.4, 0, SECTIONS_DISTANCE * 2],
            rotation: [0, 0, 0],
          })}
    >
      <group
        position-x={0.5}
        position-z={0}
        position-y={-0.1}
        rotation-y={-Math.PI / 5}
        scale={0.8}
      >
        <SectionTitle position-x={-0.8} position-y={1.05} position-z={-0.7} color="#e4d6c6">
          Projects
        </SectionTitle>
        <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
          <meshStandardMaterial map={oakTexture} displacementMap={oakDisp} displacementScale={0.05} />
        </RoundedBox>
      </group>
    </group>
  );
};

export default Projects;

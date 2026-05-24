import { useApp } from "../../Context/context";
import { Social } from "../3D/Social";
import { Float } from "@react-three/drei";
import { Mailbox } from "../3D/Mailbox";
import { ParkBench } from "../3D/ParkBench";
import { useMobile } from "../../Helpers/useMobile";

const Contact = () => {
  const { SECTIONS_DISTANCE } = useApp();
  const { isMobile } = useMobile();

  return (
    <group
      position={
        isMobile
          ? [1.4, -0.1, SECTIONS_DISTANCE * 3]
          : [0.4, 0, SECTIONS_DISTANCE * 3]
      }
      rotation={isMobile ? [0, -1.5, 0] : [0, 0, 0]}
    >
      <Float
        speed={1.34}
        rotationIntensity={isMobile ? 0.2 : 0.5}
        floatIntensity={isMobile ? 0.2 : 1}
        floatingRange={isMobile ? [-0.01, 0.01] : [-0.04, 0.04]}
      >
        <Social
          position-x={isMobile ? -0.7 : -1.5}
          position-y={isMobile ? 0.7 : 1.2}
          position-z={isMobile ? 1.9 : 0}
          rotation-y={isMobile ? 0 : 0.4}
          scale={isMobile ? 0.17 : 0.17}
        />
      </Float>

      <Mailbox
        scale={isMobile ? 0.18 : 0.25}
        rotation-y={1.25 * Math.PI}
        position-x={isMobile ? 0.1 : 0.5}
        position-y={isMobile ? 0.5 : 0.3}
        position-z={isMobile ? 2.7 : -0.5}
      />

      <ParkBench
        scale={0.5}
        position-x={isMobile ? 1 : 1}
        position-z={isMobile ? 1 : -2}
        rotation-y={-2.3}
      />
    </group>
  );
};

export default Contact;

import {
  ContactShadows,
  Environment,
  OrbitControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { Avatar } from "./3D/Avatar";
import { useEffect, useRef } from "react";
import Home from "./3DSections/Home.jsx";
import Skills from "./3DSections/Skills.jsx";
import Projects from "./3DSections/Projects.jsx";
import Contact from "./3DSections/Contact.jsx";
import { useFrame } from "@react-three/fiber";
import { useApp } from "../Context/context";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { config } from "../config";
import { useMobile } from "../Helpers/useMobile";
import { MeshReflectorMaterial } from "@react-three/drei";

const Experience = () => {
  const sectionContainer = useRef();
  const scrollData = useScroll();
  const { isMobile } = useMobile();
  const { SECTIONS_DISTANCE, setCurrentSection } = useApp();
  const { camera } = useThree();
  const brickTexture = useTexture("/Textures/herringbone_brick_03_diff_4k.jpg");
  const brickDisp = useTexture("/Textures/herringbone_brick_03_disp_4k.png");
  brickTexture.wrapS = THREE.RepeatWrapping;
  brickTexture.wrapT = THREE.RepeatWrapping;
  brickTexture.repeat.set(20, 20);
  brickDisp.wrapS = THREE.RepeatWrapping;
  brickDisp.wrapT = THREE.RepeatWrapping;
  brickDisp.repeat.set(20, 20);

  function updateCameraPosition() {
    if (isMobile) {
      if (scrollData.offset === 0) {
        camera.position.set(1.3, 2.9, 3.4);
        camera.rotation.set(-0.5, 0.16, 0);
        camera.fov = 42;
        camera.updateProjectionMatrix();
      } else if (scrollData.offset > 0) {
        camera.position.set(-4.0, 0.2, -0.5);
        camera.rotation.set(0, -1.78, 0);
        camera.fov = 62;
        camera.updateProjectionMatrix();
      }
    } else {
      let targetPosition, targetRotation;

      if (scrollData.offset === 0) {
        targetPosition = new THREE.Vector3(0.08, 1.53, 2.5);
        targetRotation = new THREE.Euler(-0.58, 0.09, 0);
      } else {
        targetPosition = new THREE.Vector3(0.7, 0.3, 4);
        targetRotation = new THREE.Euler(0, 0, 0);
      }

      camera.position.lerp(targetPosition, 0.07);
      camera.rotation.x = THREE.MathUtils.lerp(
        camera.rotation.x,
        targetRotation.x,
        0.07
      );
      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        targetRotation.y,
        0.07
      );
      camera.rotation.z = THREE.MathUtils.lerp(
        camera.rotation.z,
        targetRotation.z,
        0.07
      );
    }
  }

  // for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const sectionIndex = config.sections.findIndex(
        (section) => section.toLowerCase() === hash
      );

      if (sectionIndex !== -1) {
        if (scrollData.el) {
          scrollData.el.scrollTo({
            top:
              (sectionIndex / (config.sections.length - 1)) *
              (scrollData.el.scrollHeight - scrollData.el.clientHeight),
            behavior: "smooth",
          });
        } else {
          console.error("scrollData.el is not defined");
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollData.el]);

  useFrame(() => {
    sectionContainer.current.position.z = THREE.MathUtils.lerp(
      sectionContainer.current.position.z,
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1),
      1
    );
    setCurrentSection(
      config.sections[Math.floor(scrollData.offset * (scrollData.pages - 1))]
    );
    updateCameraPosition();
  });

  return (
    <group className="mainContainer" position={[0.6, 0, 0]}>
      <Environment preset="warehouse" background={false} />
      <Avatar />
      {/* <OrbitControls /
      > */}
      <ambientLight intensity={0.3} />
      <mesh position-y={0.08} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial map={brickTexture} displacementMap={brickDisp} displacementScale={0.1} />
      </mesh>
      <mesh scale={300}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={brickTexture} displacementMap={brickDisp} displacementScale={0.1} side={THREE.BackSide} />
      </mesh>

      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />
      <group ref={sectionContainer}>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </group>
    </group>
  );
};

export default Experience;

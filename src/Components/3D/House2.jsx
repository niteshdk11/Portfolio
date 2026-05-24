import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Resume } from "./Resume";

export function House2(props) {
  const { nodes, materials } = useGLTF("/models/house2.glb");
  const [laptopTexture, monitorTexture] = useTexture([
    "Textures/monitro-2.png",
    "Textures/laptop-Texture.png",
  ]);

  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.3, 0]} className="objects-ontable">
        <group className="monitor-1">
          <group
            name="Monitor_-_1"
            position={[-0.519, 1.53, -0.989]}
            scale={1.199}
          >
            <mesh
              name="Plane088"
              geometry={nodes.Plane088.geometry}
              material={materials["9"]}
            />
            <mesh
              name="Plane088_1"
              geometry={nodes.Plane088_1.geometry}
              material={materials["7"]}
            >
              <meshBasicMaterial map={laptopTexture} />
            </mesh>
          </group>
          <mesh
            name="Monitor_Stand_-_1"
            geometry={nodes["Monitor_Stand_-_1"].geometry}
            material={materials["9"]}
            position={[-0.519, 1.119, -1.036]}
            scale={[0.155, 0.155, 0.092]}
          />
        </group>

        <group className="monitor-2">
          <group
            name="Monitor_-_2"
            position={[0.257, 1.58, -0.882]}
            rotation={[0, -0.355, -Math.PI / 2]}
            scale={[0.988, 1.199, 1.199]}
          >
            <mesh
              name="Plane051"
              geometry={nodes.Plane051.geometry}
              material={materials["9"]}
            />
            <mesh
              name="Plane051_1"
              geometry={nodes.Plane051_1.geometry}
              material={materials["7"]}
            />
          </group>
          <mesh
            name="Monitor_Stand_-_2"
            geometry={nodes["Monitor_Stand_-_2"].geometry}
            material={materials["9"]}
            position={[0.274, 1.119, -0.926]}
            rotation={[0, -0.355, 0]}
            scale={[0.155, 0.155, 0.092]}
          />
        </group>

        <group
          name="Mouse"
          position={[-0.083, 1.162, -0.714]}
          rotation={[0, 0.185, 0]}
          scale={0.028}
        >
          <mesh
            name="Cylinder018"
            geometry={nodes.Cylinder018.geometry}
            material={materials["9"]}
          />
          <mesh
            name="Cylinder018_1"
            geometry={nodes.Cylinder018_1.geometry}
            material={materials["4"]}
          />
        </group>

        <group
          name="Keyboard001"
          position={[-0.469, 1.132, -0.645]}
          scale={0.039}
        >
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={materials["9"]}
          />
          <mesh
            name="Plane001_1"
            geometry={nodes.Plane001_1.geometry}
            material={materials["6"]}
          />
        </group>

        <Resume
          position={[0.75, 1.12, -0.6]}
          rotation={[-1.15, -0.6, 0]}
          scale={0.05}
        />
      </group>

      <mesh className="vs-code-screen" position={[-0.52, 1.23, -0.99]}>
        <planeGeometry args={[0.85, 0.58]} />
        <meshBasicMaterial map={laptopTexture} />
      </mesh>

      <mesh
        className="threejs-screen"
        rotation={[0, -0.355, 0]}
        position={[0.26, 1.28, -0.87]}
      >
        <planeGeometry args={[0.59, 0.68]} />
        <meshBasicMaterial map={monitorTexture} />
      </mesh>

      <mesh
        name="Chair"
        geometry={nodes.Chair.geometry}
        material={materials["4"]}
        position={[-0.04, 0.107, -0.44]}
        rotation={[0.138, 0, 0.136]}
        scale={[0.53, 0.437, 0.53]}
      />

      <group name="Table" position={[-1.077, 0.254, -0.801]} scale={1.199}>
        <mesh
          name="Cube020"
          geometry={nodes.Cube020.geometry}
          material={materials["5"]}
        />
        <mesh
          name="Cube020_1"
          geometry={nodes.Cube020_1.geometry}
          material={materials["2"]}
        />
      </group>

      <mesh
        name="Floor_-_1_"
        geometry={nodes["Floor_-_1_"].geometry}
        material={materials["1"]}
        position={[-0.013, 1.259, -0.018]}
      />
      <mesh
        name="Floor_-_2"
        geometry={nodes["Floor_-_2"].geometry}
        material={materials["2"]}
        position={[0.245, 0.001, -0.046]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.974}
      />
    </group>
  );
}

useGLTF.preload("/models/house2.glb");

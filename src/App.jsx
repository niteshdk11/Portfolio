import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience.jsx";
import { Scroll, ScrollControls } from "@react-three/drei";
import { config } from "./config.js";
import { Leva } from "leva";
import Interface from "./Components/Interface";
import { LoadingScreen } from "./Components/Sections/LoadingScreen";
import { Suspense } from "react";
import Navbar from "./Components/Sections/Navbar";
import { useProgress } from "@react-three/drei";
import { AppProvider } from "./Context/context";

const App = () => {
  const { progress, active } = useProgress();

  return (
    <div className="h-screen w-screen">
      <Leva />
      <LoadingScreen />
      <Canvas
        camera={{
          position: [0.08, 4.63, 3.98],
          fov: 42,
          rotation: [-0.58, 0.09, 0],
        }}
      >
        <ScrollControls
          pages={config.sections.length}
          damping={0.1}
          maxSpeed={0.3}
        >
          <group position-y={-1}>
            <Suspense>
              <Experience />
            </Suspense>
          </group>
          <Scroll html>
            <AppProvider>
              <Interface />
            </AppProvider>
          </Scroll>
        </ScrollControls>
      </Canvas>

      {progress === 100 && !active && <Navbar />}
    </div>
  );
};

export default App;

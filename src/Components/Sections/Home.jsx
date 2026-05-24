import { useScroll } from "@react-three/drei";
import { config } from "../../config";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

const Home = () => {
  const scrollData = useScroll();
  const [offset, setOffset] = useState(0);

  useFrame(() => {
    setOffset(scrollData.offset);
  });

  return (
    <div
      className={`h-screen text-white py-24 px-4 sm:flex sm:flex-col sm:px-10 sm:justify-center relative sm:-top-20 transition-all duration-700 ease-in-out ${
        offset >= 0.04 ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="max-w-4xl">
        <h1 className="poppins block text-[44px] leading-none text-zinc-800 font-bold sm:text-white sm:text-8xl tracking-tight">
          Hi, I'm
          <span className="block mt-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            {config.name}
          </span>
        </h1>
        <p className="mt-6 text-2xl text-gray-800 w-[90%] sm:text-white/90 sm:text-xl leading-relaxed">
          Developer crafting beautiful, performant web experiences <br />   with modern <span className="text-orange-500 bg-white/90 p-1 rounded-full my-1">technologies</span>.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-block px-8 py-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-white/10 backdrop-blur-sm"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

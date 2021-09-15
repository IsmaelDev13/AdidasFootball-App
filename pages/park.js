import React, { Suspense } from "react";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Effects,
  Loader,
  useTexture,
} from "@react-three/drei";
import { LUTPass } from "three/examples/jsm/postprocessing/LUTPass";
import { LUTCubeLoader } from "three/examples/jsm/loaders/LUTCubeLoader";
import { useRouter } from "next/dist/client/router";

extend({ LUTPass });

function Grading() {
  const { texture3D } = useLoader(LUTCubeLoader, "/cubicle-99.CUBE");
  return (
    <Effects children={<lUTPass attachArray="passes" lut={texture3D} />} />
  );
}

function Sphere(props) {
  const texture = useTexture("/texture.jpg");
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        envMapIntensity={0.4}
        map={texture}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={0.2}
        metalness={0.2}
      />
    </mesh>
  );
}

export default function App() {
  const router = useRouter();

  return (
    <div className="App relative">
      <h1
        onClick={() => router.push("/")}
        className="text-2xl p-5 cursor-pointer absolute top-0 bg-black hover:bg-gray-600 text-white m-2 rounded-lg shadow-lg z-50"
      >
        Football App
      </h1>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        {/* <spotLight
          intensity={0.5}
          angle={0.2}
          penumbra={1}
          position={[5, 15, 10]}
        /> */}
        {/* <pointLight position={[-20, -5, -10]} color="red" intensity={0.8} /> */}
        <Suspense fallback={null}>
          <Sphere />
          <Grading />
          <Environment preset="park" background />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader />
    </div>
  );
}

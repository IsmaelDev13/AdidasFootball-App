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
import Head from "next/head";

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
      <Head>
        <title>Adidas | Football Match</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        onClick={() => router.push("/")}
        className="absolute top-0 z-50 cursor-pointer h-28 w-28 object-contain left-4"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
        alt=""
        loading="lazy"
      />
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
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

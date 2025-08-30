import React, { useEffect, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import { PerspectiveCamera } from "three";

const ModelLoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

function ModelWithCamera({ url }: { url: string }) {
  const { scene, cameras } = useGLTF(url) as GLTF;
  const { set } = useThree();

  useEffect(() => {
    if (cameras && cameras[0]) {
      set({ camera: cameras[0] as PerspectiveCamera});
    }
  }, [cameras, set]);

  return <primitive object={scene} />;
}

export default function Product3D({ modelUrl = "/models/your-model.glb" }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <Suspense fallback={<ModelLoadingSpinner />}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 3]} />
          <ModelWithCamera url={modelUrl} />
        <OrbitControls enablePan={false} />
      </Canvas>
       </Suspense>
    </div>
  );
}
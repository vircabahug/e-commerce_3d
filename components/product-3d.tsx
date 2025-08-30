import React, { useEffect, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ModelWithCamera({ url }: { url: string }) {
  // useGLTF will throw a promise here until the model is loaded,
  // which Suspense catches and shows the fallback.
  const { scene, cameras } = useGLTF(url) as any;
  const { set } = useThree();

  useEffect(() => {
    // This effect now only runs after the useGLTF hook has successfully loaded the model.
    if (cameras && cameras[0]) {
      set({ camera: cameras[0] });
    }
  }, [cameras, set]);

  return <primitive object={scene} />;
}

export default function Product3D({ modelUrl = "/models/your-model.glb" }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 3]} />
        <Suspense fallback={null}>
          <ModelWithCamera url={modelUrl} />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
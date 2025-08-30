import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";

function ModelWithCamera({ url }: { url: string }) {
  const { scene, cameras } = useGLTF(url) as any;
  const { set } = useThree();

  useEffect(() => {
    if (cameras && cameras[0]) {
      set({ camera: cameras[0] });
    }
  }, [cameras, set]);

  return <primitive object={scene} />;
}

export default function Product3D({ modelUrl = "/models/your-model.glb" }) {
  
  return (
    <div style={{ width: "100%", height: 300 }}>
          <Canvas> // Move camera farther back to zoom out more
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ModelWithCamera url={modelUrl} />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
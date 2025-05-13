"use client";

import * as THREE from "three";
import { Box } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TextBox = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01;
    }
  });
  return <Box ref={boxRef}>
    <meshStandardMaterial color={"red"} />
  </Box>;
};
export const Scene = () => {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <directionalLight intensity={2} position={[1, 2, 3]} />
        <TextBox />
      </Canvas>
    </div>
  );
};

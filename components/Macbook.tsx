import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import * as THREE from "three";
gsap.registerPlugin(ScrollTrigger);
export const Macbook = () => {
  const topModel = useGLTF("/assets/Macbook_Top.glb");
  const bottomModel = useGLTF("/assets/Macbook_Bottom.glb");

  const groupRef = useRef<THREE.Group>(null);
  const topRef = useRef<THREE.Mesh>(null);
  const bottomRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current || !topRef.current || !bottomRef.current) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        x: 0,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.rotation,
        {
          y: Math.PI,
          ease: "power2.inOut",
        },
        ">",
      )
      .to(topRef.current.rotation, {
        x: Math.PI / 2,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: 1,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        groupRef.current.scale,
        {
          x: 0.8,
          y: 0.8,
          z: 0.8,
          ease: "power2.inOut",
        },
        ">",
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        y: Math.PI + 0.4,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: -1.3,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(groupRef.current.rotation, {
        y: Math.PI / 4,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <group
      ref={groupRef}
      position={[0, -0.4, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.8}>
      <mesh ref={topRef}>
        <primitive object={topModel.nodes.Top} />
      </mesh>
      <mesh ref={bottomRef}>
        <primitive object={bottomModel.nodes.Bottom} />
      </mesh>
    </group>
  );
};

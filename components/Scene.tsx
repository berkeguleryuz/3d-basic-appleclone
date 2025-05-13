"use client";

import { Canvas } from "@react-three/fiber";
import { Macbook } from "./Macbook";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";
import { ContactShadows } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export const Scene = () => {
  useEffect(() => {
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    const text3 = document.getElementById("text-3");

    if (!text1 || !text2 || !text3) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "10% bottom",
          scrub: true,
        },
      })
      .to(text1, {
        opacity: 0,
        ease: "power2.inOut",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text2, {
        opacity: 1,
        ease: "power2.inOut",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
      })
      .to(text3, {
        opacity: 1,
        ease: "power2.inOut",
      });
  });

  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <directionalLight intensity={2} position={[1, 2, 3]} />
        <Macbook />
        <ContactShadows
          position={[0, -0.9, 0]}
          opacity={0.85}
          width={10}
          height={10}
          
        />
        {/* <axesHelper scale={20} /> */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Sphere,
  MeshDistortMaterial,
  PointMaterial,
  Point,
  Points,
} from "@react-three/drei";
import { MathUtils } from "three";

import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { COLORS } from "@/constants/colors";

export default function Box(props) {
  const boxRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    setLimit(document.body.scrollHeight - window.innerHeight);

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, limit]);

  return (
    <mesh scale={1} ref={boxRef}>
      <sphereGeometry
        args={[
          1,
          //   scrollY / limit < 0.3 ? 50 : scrollY / limit < 0.6 ? 75 : 100,
          //   scrollY / limit < 0.3 ? 50 : scrollY / limit < 0.6 ? 75 : 100,
          40,

          40,
          3,
          Math.PI,
        ]}
      />
      <MeshDistortMaterial
        roughness={0.5}
        distort={0.4}
        speed={5}
        wireframe
        color={COLORS.primary.green_dark}
      />
    </mesh>
  );
}

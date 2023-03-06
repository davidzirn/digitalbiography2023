import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Box } from "@chakra-ui/react";
import { COLORS } from "@/constants/colors";
import Blob from "../3dobjects/Blob";

export default function Background() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <Box
      width="100%"
      height="100vh"
      position="fixed"
      z-zIndex={0}
      top="0"
      left="0"
    >
      {domLoaded ? (
        <Box
          width="100%"
          h="100vh"
          // backgroundColor={COLORS.theme.primary_light}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Canvas
            style={{
              height: "100%",
              width: "100%",
              // backgroundColor: COLORS.theme.primary_light,
            }}
          >
            {/* <OrbitControls enableZoom={false} /> */}
            <ambientLight />
            {/* <spotLight color="white" intensity={0.3} position={[-10, 10, 2]} /> */}
            {/* <spotLight color="white" intensity={0.3} position={[10, -10, 2]} /> */}

            <Suspense fallback={null}>
              <Blob />
            </Suspense>
          </Canvas>
        </Box>
      ) : null}
    </Box>
  );
}

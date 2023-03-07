import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

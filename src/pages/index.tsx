import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/main/Hero";
import Background from "@/components/Background";
import Header from "@/components/Header";
import SocialsWidget from "@/components/main/SocialsWidget";
import ScrollWidget from "@/components/main/ScrollWidget";
import AboutMe from "@/components/main/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <AboutMe />
      <SocialsWidget />
      <ScrollWidget />
    </>
  );
}

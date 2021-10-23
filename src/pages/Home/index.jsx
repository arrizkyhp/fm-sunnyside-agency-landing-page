import About from "layouts/About";
import Hero from "layouts/Hero";
import Nav from "layouts/Nav";
import { useRef } from "react";

export default function Home() {
  const refAbout = useRef()

  return (
    <>
      <Nav refAbout={refAbout} />
      <Hero refAbout={refAbout} />
      <About refAbout={refAbout} />
    </>
  );
}

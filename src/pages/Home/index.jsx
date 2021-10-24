import About from "layouts/About";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import Nav from "layouts/Nav";
import Projects from "layouts/Projects";
import Services from "layouts/Services";
import Testimonials from "layouts/Testimonials";
import { useRef } from "react";

export default function Home() {
  const refAbout = useRef()
  const refServices = useRef()
  const refProjects = useRef()

  return (
    <>
      <Nav
        refAbout={refAbout}
        refServices={refServices}
        refProjects={refProjects}
      />
      <Hero refAbout={refAbout} />
      <About refAbout={refAbout} />
      <Services refServices={refServices} />
      <Testimonials />
      <Projects refProjects={refProjects} />
      <Footer
        refAbout={refAbout}
        refServices={refServices}
        refProjects={refProjects}
      />
    </>
  );
}

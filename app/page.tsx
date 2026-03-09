import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import WhatWeOffer from "./components/WhatWeOffer";
import Team from "./components/Team";
import Students from "./components/Students";
import Admissions from "./components/Admissions";
import HowToHelp from "./components/HowToHelp";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <WhatWeOffer />
      <Team />
      <Students />
      <Admissions />
      <HowToHelp />
      <Contact />
    </>
  );
}

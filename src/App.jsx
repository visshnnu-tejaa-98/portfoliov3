import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("vt-theme");
    if (saved) return saved === "dark";
    return false;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("vt-theme", dark ? "dark" : "light");
    // re-mount decorations after theme change so gradients get new IDs
    if (window.mountDeco) window.mountDeco();
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <>
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;

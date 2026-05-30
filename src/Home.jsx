import { Navbar } from "./components/Navbar.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import {BackToTop} from "./components/BackToTop.jsx";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Navbar />
      <hr className="divider" />

      <HeroSection />
      <hr className="divider" />

      <About />
      <hr className="divider" />

      <Skills />
      <hr className="divider" />

      <Projects />
      <hr className="divider" />

      <Contact />
      <BackToTop />
      <hr className="divider" />
    </>
  );
}

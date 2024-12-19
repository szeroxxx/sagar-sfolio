import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SkillGrid from "@/components/Skills";

const componentsList = [
  <About key="about" />,
  <WorkExperience key="work-experience" />,
  <Projects key="projects" />,
  <SkillGrid key="skills" />,
  <Contact key="contact" />,
];

export default function Home() {
  const [components, setComponents] = useState([...componentsList, ...componentsList]); // Start with two copies for smooth looping
  const scrollContainer = useRef(null);

  const handleScroll = () => {
    const container = scrollContainer.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;

    // Detect when the user scrolls to the bottom
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setComponents((prev) => [...prev, ...componentsList]); // Append more components
    }

    // Detect when the user scrolls to the top (if needed)
    if (scrollTop <= 100) {
      setComponents((prev) => [...componentsList, ...prev]); // Prepend more components
      container.scrollTop = scrollHeight / 2; // Reset scroll position for smoothness
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      ref={scrollContainer}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollBehavior: "smooth",
      }}
    >
      <Layout>{components.map((component, index) => component)}</Layout>
    </div>
  );
}

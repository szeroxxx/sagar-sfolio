import Layout from "../components/Layout";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SkillGrid from "@/components/Skills";

export default function Home() {
  return (
    <Layout>
      <About />
      <WorkExperience />
      <Projects />
      <SkillGrid/>
      <Contact/>
    </Layout>
  );
}

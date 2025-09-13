import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />

      <EducationSection />
      <ContactSection />
      <Footer />
      {/* Scroll-to-Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

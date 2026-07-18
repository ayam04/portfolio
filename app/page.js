import HeroSection from "./components/redesign/HeroSection";
import MarqueeSection from "./components/redesign/MarqueeSection";
import AboutSection from "./components/redesign/AboutSection";
import ServicesSection from "./components/redesign/ServicesSection";
import ProjectsSection from "./components/redesign/ProjectsSection";
import ContactSection from "./components/redesign/ContactSection";

export default function Home() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

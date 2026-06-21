"use client";
import { Suspense, lazy, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LoadingBar from "./components/LoadingBar";

const AchievementsSection = lazy(() => import("./components/AchievementsSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const CapabilitiesSection = lazy(() => import("./components/CapabilitiesSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const EmailSection = lazy(() => import("./components/EmailSection"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const CustomCursor = lazy(() => import("./components/CustomCursor"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingBar onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="grain relative bg-paper text-ink overflow-hidden">
      <Navbar />
      <HeroSection />

      <Suspense fallback={null}>
        <AchievementsSection />
      </Suspense>

      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={null}>
        <CapabilitiesSection />
      </Suspense>

      <Suspense fallback={null}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={null}>
        <EmailSection />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>

      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
    </main>
  );
}

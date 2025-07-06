"use client";
import { Suspense, lazy, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LoadingBar from "./components/LoadingBar";

const AboutSection = lazy(() => import("./components/AboutSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const EmailSection = lazy(() => import("./components/EmailSection"));
const Footer = lazy(() => import("./components/Footer"));
const AchievementsSection = lazy(() => import("./components/AchievementsSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const SplashCursor = lazy(() => import("../src/blocks/Animations/SplashCursor/SplashCursor"));

// Component loading fallback
const ComponentLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingBar onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="flex min-h-screen flex-col bg-white relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pointer-events-none"></div>
      
      <Navbar />
      <div className="relative z-10 container mt-7 mx-auto px-6 md:px-20 py-4 space-y-8">
        <HeroSection />
        
        <Suspense fallback={<ComponentLoader />}>
          <AchievementsSection />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<ComponentLoader />}>
          <EmailSection />
        </Suspense>
        
        <Suspense fallback={<ComponentLoader />}>
          <Footer />
        </Suspense>
      </div>
      
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
      
      <Suspense fallback={null}>
        <SplashCursor />
      </Suspense>
    </main>
  );
}

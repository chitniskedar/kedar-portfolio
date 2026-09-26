import { useEffect, useState } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import ProjectDetail from "./components/sections/ProjectDetail";
import ExperienceStack from "./components/sections/ExperienceStack";
import Photography from "./components/sections/Photography";
import Contact from "./components/sections/Contact";
import StructuredData from "./components/StructuredData";
import { projects } from "./content/projects";

function getProjectIdFromLocation() {
  if (typeof window === "undefined") {
    return null;
  }

  const queryProjectId = new URLSearchParams(window.location.search).get("project");
  if (queryProjectId) {
    return queryProjectId;
  }

  const match = window.location.pathname.match(/^\/projects\/([^/]+)$/);
  return match?.[1] ?? null;
}

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(
    getProjectIdFromLocation()
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveProjectId(getProjectIdFromLocation());
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? null;

  const handleBackToProjects = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-bg-base text-text-primary selection:bg-[#ff8c21] selection:text-white">
        <StructuredData project={activeProject} />
        {/* Ambient Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#ff8c21]/[0.04] blur-[180px]" />

          <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#ff8c21]/[0.025] blur-[160px]" />

          <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-[140px]" />
        </div>

        <Navbar />

        <main>
          {activeProject ? (
            <ProjectDetail
              project={activeProject}
              onBack={handleBackToProjects}
            />
          ) : (
            <>
              <Hero />
              <ExperienceStack />
              <Projects />
              <Photography />
              <Contact />
              <Footer />
            </>
          )}
        </main>

       
      </div>
    </ThemeProvider>
  );
}

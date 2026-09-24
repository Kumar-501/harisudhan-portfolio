import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Skills } from "./components/Skills";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { LearningJourney } from "./components/LearningJourney";
import { Interests } from "./components/Interests";
import { WhatIBring } from "./components/WhatIBring";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { CustomCursor } from "./components/ui/CustomCursor";

export default function App() {
  const { themeId, setTheme } = useTheme();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <CustomCursor />

      <Navbar themeId={themeId} onSelectTheme={setTheme} />

      <main id="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <TechStack />
        <Projects />
        <Education />
        <LearningJourney />
        <Interests />
        <WhatIBring />
        <Resume />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}

// import FrontParticles from "@/components/portfolio/section/front-particles";
// import Education from "@/components/section/education";
// import Work from "@/components/section/work";
// import { WavesManualTest } from "@/components/ui/graphics/waves";
// import { ThemeDebug } from "@/components/theme-debug";
import PreHeroTitle from "@/components/portfolio/section/pre-hero";
import Hero from "@/components/portfolio/section/hero";
import About from "@/components/portfolio/section/about";
import Skills from "@/components/portfolio/section/skills";
import Projects from "@/components/portfolio/section/projects";
import Contact from "@/components/portfolio/section/contact";
import { MyLinkedTree } from "@/components/tree/profile-root";
import { Toaster } from "@/components/ui/toaster";
import FullscreenWaves from "@/components/portfolio/section/bg-waves";

export default function Page() {
  return (
    <main className="w-full min-h-screen relative overflow-auto flex md:items-center md:justify-center md:py-0 md:px-0 md:w-screen md:h-screen md:overflow-hidden md:fixed md:inset-0"> 
      {/* <main className="w-screen h-screen overflow-hidden fixed inset-0 flex items-center justify-center"> */}
      <FullscreenWaves />
      <MyLinkedTree />
      {/* <ThemeDebug /> */}
      {/* <WavesManualTest /> */}
      {/* <FrontParticles /> */}
      {/* <PreHeroTitle /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Education /> */}
      {/* <Work /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Hackathons /> */}
      {/* <Contact /> */}
      <Toaster />
    </main>
  );
}

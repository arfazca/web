import PreHeroTitle from "@/components/portfolio/section/pre-hero";
// import FrontParticles from "@/components/portfolio/section/front-particles";
import Hero from "@/components/portfolio/section/hero";
import About from "@/components/portfolio/section/about";
// import Education from "@/components/section/education";
// import Work from "@/components/section/work";
import Skills from "@/components/portfolio/section/skills";
import Projects from "@/components/portfolio/section/projects";
import Contact from "@/components/portfolio/section/contact";
import { MyLinkedTree } from "@/components/tree/profile-root";
import { Toaster } from "@/components/ui/toaster";
import FullscreenWaves from "@/components/portfolio/section/bg-waves";

export default function Page() {
  return (
    <main className="w-screen h-screen overflow-hidden fixed inset-0 flex items-center justify-center"> 
      <FullscreenWaves />
      <MyLinkedTree />
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
      {/* <Toaster /> */}
    </main>
  );
}

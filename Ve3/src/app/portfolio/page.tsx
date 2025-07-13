import PreHeroTitle from "@/components/portfolio/section/pre-hero";
import FrontParticles from "@/components/portfolio/section/front-particles";
import Hero from "@/components/portfolio/section/hero";
import About from "@/components/portfolio/section/about";
// import Education from "@/components/section/education";
// import Work from "@/components/section/work";
import Skills from "@/components/portfolio/section/skills";
import Projects from "@/components/portfolio/section/projects";
// import Hackathons from "@/components/section/hackathons";
import Contact from "@/components/portfolio/section/contact";
// import Timeline from "@/components/section/timeline";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <FrontParticles />
      {/* <PreHeroTitle /> */}
      <Hero />
      <About />
      {/* <Timeline /> */}
      {/* <Education /> */}
      {/* <Work /> */}
      <Skills />
      <Projects />
      {/* <Hackathons /> */}
      <Contact />
      <Toaster />
    </main >
  );
}
import PreHeroTitle from "@/components/portfolio/section/pre-hero";
import FrontParticles from "@/components/portfolio/section/front-particles";
import Hero from "@/components/portfolio/section/hero";
import About from "@/components/portfolio/section/about";
import Skills from "@/components/portfolio/section/skills";
import Projects from "@/components/portfolio/section/projects";
import Contact from "@/components/portfolio/section/contact";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <FrontParticles />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Toaster />
    </main >
  );
}
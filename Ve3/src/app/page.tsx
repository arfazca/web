import { MyLinkedTree } from "@/components/tree/profile-root";
import { Toaster } from "@/components/ui/toaster";
import FullscreenWaves from "@/components/portfolio/section/bg-waves";

export default function Page() {
  return (
    <main className="tree-page w-full h-screen overflow-auto flex items-center 
      justify-center md:flex md:items-center md:justify-center md:w-screen 
      md:fixed md:inset-0"> 
      
      <FullscreenWaves />
      
      {/* Hide waves everywhere except behind the card on desktop only */}
      <div className="hidden sm:block fixed inset-0 -z-20">
        {/* Top overlay - covers everything above the card */}
        <div className="absolute top-0 left-0 w-full h-[calc(43vh-18rem)] bg-background"></div>
        {/* Bottom overlay - covers everything below the card */}
        <div className="absolute bottom-0 left-0 w-full h-[calc(43vh-18rem)] bg-background"></div>
        {/* Left overlay - covers everything to the left of the card (384px = 24rem max-width) */}
        <div className="absolute top-0 left-0 w-[calc(49vw-12rem)] h-full bg-background"></div>
        {/* Right overlay - covers everything to the right of the card */}
        <div className="absolute top-0 right-0 w-[calc(49vw-12rem)] h-full bg-background"></div>
      </div>
      
      <MyLinkedTree />
      <Toaster />
    </main>
  );
}
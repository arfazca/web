import { MyLinkedTree } from "@/components/tree/profile-root";
import { Toaster } from "@/components/ui/toaster";
import FullscreenWaves from "@/components/portfolio/section/bg-waves";

export default function Page() {
  return (
    <main className="tree-page w-full h-screen overflow-auto flex items-center 
      justify-center md:flex md:items-center md:justify-center md:w-screen 
      md:fixed md:inset-0"> 
      {/* <main className="w-full min-h-screen relative overflow-auto flex 
      md:items-center md:justify-center md:py-0 md:px-0 md:w-screen md:h-screen 
      md:overflow-hidden md:fixed md:inset-0"> */}
      <FullscreenWaves />
      <MyLinkedTree />
      <Toaster />
    </main>
  );
}

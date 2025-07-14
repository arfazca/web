import Particles from "@/components/ui/graphics/particles";

export default function FrontParticles() {
    return (
        <Particles
            className="animate-fade-in"
            quantity={1500}
            fullPage={true}
        />
    );
}
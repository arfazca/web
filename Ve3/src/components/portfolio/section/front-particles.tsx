import Particles from "@/components/ui/graphics/particles";

export default function FrontParticles() {
    return (
        <Particles
            className="absolute inset-0 -z-50 animate-fade-in"
            quantity={1000}
        />
    );
}
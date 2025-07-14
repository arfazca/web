"use client";

import { DATA } from "@/data/data";
import { HackathonCard } from "@/components/hackathon-card";
import { useBlurFadeDelay } from "@/components/context/blur-fade-context";
import BlurFade from "@/components/ui/blur-fade";

export default function Hackathons() {
    const blurFadeDelay = useBlurFadeDelay();
    return (
        <section id="hackathons">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={blurFadeDelay * 27}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Hackathons
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                I like building things
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                During my time in university, I participated in many hackathons
                                where students from different universities and across campuses
                                came together to build amazing projects within 8-24 hours or over
                                2-3 days!
                            </p>
                            {/* <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                During my time in university, I participated in over{" "}
                                {DATA.hackathons.length}+ hackathons where students from
                                different universities and across campuses came together
                                to build amazing projects within 8-24 hours or over 2-3 days!
                            </p> */}
                        </div>
                    </div>
                </BlurFade>
                <BlurFade delay={blurFadeDelay * 29}>
                    <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                        {DATA.hackathons.map((project, id) => (
                            <BlurFade
                                key={project.title + project.dates}
                                delay={blurFadeDelay * 31 + id * 0.05}
                            >
                                <HackathonCard
                                    title={project.title}
                                    description={project.description}
                                    location={project.location}
                                    dates={project.dates}
                                    image={project.image}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </ul>
                </BlurFade>
            </div>
        </section>
    );
}
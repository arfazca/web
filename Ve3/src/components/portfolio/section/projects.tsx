"use client";

import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import { useBlurFadeDelay } from "@/components/context/blur-fade-context";

export default function Projects() {
    const blurFadeDelay = useBlurFadeDelay();
    return (
        <section id="projects">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={blurFadeDelay * 23}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                My Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Some of my latest projects
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I&apos;ve worked on a variety of projects, from simple
                                console scripted applications to complex GUI and web
                                applications. Here are some of my most recent projects:
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={blurFadeDelay * 25 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
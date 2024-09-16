"use client";

import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { useBlurFadeDelay } from "@/components/context/BlurFadeContext";

export default function Skills() {
    const blurFadeDelay = useBlurFadeDelay();
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={blurFadeDelay * 19}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                    {DATA.skills.map((skill, id) => (
                        <BlurFade key={skill} delay={blurFadeDelay * 21 + id * 0.05}>
                            <Badge key={skill}>{skill}</Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
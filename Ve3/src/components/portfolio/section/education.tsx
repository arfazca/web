"use client";

import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";
import BlurFade from "@/components/ui/blur-fade";
import { useBlurFadeDelay } from "@/components/context/blur-fade-context";

export default function Education() {
    const blurFadeDelay = useBlurFadeDelay();
    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={blurFadeDelay * 11}>
                    <h2 className="text-xl font-bold">Education</h2>
                </BlurFade>
                {DATA.education.map((education, id) => (
                    <BlurFade
                        key={education.school}
                        delay={blurFadeDelay * 13 + id * 0.05}
                    >
                        <ResumeCard
                            key={education.school}
                            href={education.href}
                            logoUrl={education.logoUrl}
                            altText={education.school}
                            title={education.school}
                            subtitle={education.degree}
                            period={`${education.start} - ${education.end}`}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
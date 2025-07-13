"use client";
import BlurFade from "@/components/ui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { useBlurFadeDelay } from "@/components/context/blur-fade-context";

export default function Work() {
    const blurFadeDelay = useBlurFadeDelay();
    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={blurFadeDelay * 15}>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </BlurFade>
                {DATA.work.map((work, id) => (
                    <BlurFade
                        key={work.company}
                        delay={blurFadeDelay * 17 + id * 0.05}
                    >
                        <ResumeCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            altText={work.company}
                            title={work.company}
                            subtitle={work.title}
                            href={work.href}
                            badges={work.badges}
                            period={`${work.start} - ${work.end ?? "Present"}`}
                            description={work.description}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
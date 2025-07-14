"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useBlurFadeDelay } from "@/components/context/blur-fade-context";
import { DATA } from "@/data/data";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";

export default function Hero() {
    const blurFadeDelay = useBlurFadeDelay();
    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-1xl space-y-8">
                <div className="gap-8 flex">
                    <div className="flex-col flex flex-1 space-y-1">
                        <BlurFadeText
                            delay={blurFadeDelay}
                            className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                            yOffset={8}
                            text={`Moi c'est ${DATA.name.split(" ")[0]}!`}
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-x font-light text-lg/relaxed"
                            delay={blurFadeDelay * 5}
                            text={DATA.description}
                        />
                    </div>
                    <BlurFade delay={blurFadeDelay * 5}>
                        <Avatar className="size-28 border">
                            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
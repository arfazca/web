'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useBlurFadeDelay } from "@/components/context/BlurFadeContext"
import { DATA } from "@/data/resume"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { motion, AnimatePresence } from 'framer-motion'

const NameCycler = ({ names }: { names: readonly string[] }) => {
    const [currentNameIndex, setCurrentNameIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [names])

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    }

    const splitName = (name: string) => {
        const specialCombinations = ['ফা'];
        let result = [];
        let i = 0;
        while (i < name.length) {
            let found = false;
            for (let combo of specialCombinations) {
                if (name.startsWith(combo, i)) {
                    result.push(combo);
                    i += combo.length;
                    found = true;
                    break;
                }
            }
            if (!found) {
                result.push(name[i]);
                i++;
            }
        }
        return result;
    }

    return (
        <div className="relative h-[1.25em] pb-10 xs:pb-12 sm:pb-14 md:pb-14 lg:pb-16 xl:pb-20 mt-[-800px] xs:mt-[-90px] sm:mt-[-100px] md:mt-[-110px] lg:mt-[-120px] xl:mt-[-130px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={names[currentNameIndex]}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none absolute inset-0 pb-10 flex"
                >
                    {splitName(names[currentNameIndex]).map((char, index) => (
                        <motion.span key={index} variants={child}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default function Hero() {
    const blurFadeDelay = useBlurFadeDelay()

    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-1xl space-y-8">
                <div className="gap-8 flex">
                    <div className="flex-col flex flex-1 space-y-1">
                        <BlurFadeText
                            delay={blurFadeDelay}
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            yOffset={8}
                            text="I usually go by"
                        />
                        <NameCycler names={DATA.nameVar} />
                        <BlurFadeText
                            className="max-w-[600px] text-lg/relaxed text-muted-foreground"
                            delay={blurFadeDelay * 2}
                            text={DATA.description}
                        />
                    </div>
                    <BlurFade delay={blurFadeDelay * 3}>
                        <Avatar className="w-32 h-32 border-4 border-primary shadow-xl">
                            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}
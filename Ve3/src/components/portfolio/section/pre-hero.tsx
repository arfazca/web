"use client";

import Link from "next/link";
import EmailButton from "@/components/ui/email-button";
import ScrollDownArrow from "@/components/ui/scroll-down-arrow";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from 'lucide-react';

export default function PreHeroTitle() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!mounted) { return null; }

    return (
        <section id="pre-hero">
            <div className="relative flex flex-col items-center justify-center min-h-screen">
                <div className="absolute 
                        top-[calc(10%+1px)]         /* Default */
                        sm:top-[calc(10%-100px)]      /* Small screens */
                        md:top-[calc(10%-100px)]      /* Medium screens */
                        lg:top-[calc(10%-100px)]     /* Large screens */
                        flex flex-row slide-out-to-left-1/2 items-center pr-8 animate-fade-in delay-[10s] z-10">
                    <div className="blob green"></div>
                    <p className="font-medium 
                        text-sm 
                        xs:text-xs 
                        sm:text-sm 
                        md:text-md
                        lg:text-lg">Seeking Spring 2025 Co-op roles!</p>
                </div>
                <h1
                    className={`absolute 
                        top-[calc(30%+1px)]         /* Default */
                        sm:top-[calc(25%+1px)]      /* Small screens */
                        md:top-[calc(25%+5px)]      /* Medium screens */
                        lg:top-[calc(25%+10px)]     /* Large screens */
                        text-5xl                    /* Default font size */
                        sm:text-6xl                 /* Small screens font size */
                        md:text-7xl                 /* Medium screens font size */
                        lg:text-8xl                 /* Large screens font size */
                        left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
                        ${currentTheme === "dark" ? "text-white" : "text-black"
                        } cursor-default text-edge-outline animate-title font-display 
                        whitespace-nowrap opacity-80`}
                > Arfaz Hussain
                </h1>
                <div className="
                        absolute 
                        top-[calc(30%+30px)]        /* Default */
                        sm:top-[calc(25%+35px)]     /* Small screens */
                        md:top-[calc(25%+47px)]     /* Medium screens */
                        lg:top-[calc(25%+65px)]     /* Large screens */
                        animate-fade-in 
                        delay-[10s] 
                        flex 
                        gap-2">
                    <p className="flex
                        xs:text-xs 
                        sm:text-sm 
                        md:text-lg 
                        lg:text-2xl
                        font-medium text-xs text-center text-muted-foreground">
                        Software Developer based in British Columbia 🇨🇦
                    </p>
                </div>
                <div className="absolute 
                        top-[calc(30%+70px)] 
                        sm:top-[calc(25%+70px)]     /* Small screens */
                        md:top-[calc(25%+90px)]     /* Medium screens */
                        lg:top-[calc(25%+115px)]    /* Large screens */
                        animate-fade-in delay-[10s] flex gap-2">
                    <Button asChild variant={'outline'} size="sm">
                        <Link href="/resume">
                            View Resume <ArrowUpRightIcon className="ml-2 size-4" />
                        </Link>
                    </Button>
                    <EmailButton />
                </div>
                <div className="absolute 
                        top-[calc(49%+100px)] 
                        sm:top-[calc(43%+100px)]     /* Small screens */
                        md:top-[calc(43%+100px)]    /* Medium screens */
                        lg:top-[calc(43%+150px)]    /* Large screens */
                        right-1/2 left-1/2 transform -translate-x-1/2 z-10">
                    <ScrollDownArrow />
                </div>
            </div>
        </section >
    );
}

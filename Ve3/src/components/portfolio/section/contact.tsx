"use client";

import BlurFade from "@/components/ui/blur-fade";
import ContactForm from "@/components/contact-form";
import { useBlurFadeDelay } from "@/components/context/blur-fade-context";

export default function Contact() {
    const blurFadeDelay = useBlurFadeDelay();
    return (
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                <BlurFade delay={blurFadeDelay * 33}>
                    <div className="space-y-3 w-full">
                        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                            Contact
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground sm:text-l/relaxed md:text-base/relaxed lg:text-l/relaxed xl:text-l/relaxed">
                            Send me an email
                            and I&apos;ll respond as soon as I can!
                        </p>
                        <ContactForm />
                    </div>
                </BlurFade>
            </div>
        </section >
    );
}
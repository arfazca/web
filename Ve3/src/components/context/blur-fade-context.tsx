"use client";

import React, { createContext, useContext } from "react";

const BlurFadeContext = createContext<number>(0.01);
export const useBlurFadeDelay = () => useContext(BlurFadeContext);
export const BlurFadeProvider = ({ children }: { children: React.ReactNode }) => {
    const BLUR_FADE_DELAY = 0.01;
    return (
        <BlurFadeContext.Provider value={BLUR_FADE_DELAY}>
            {children}
        </BlurFadeContext.Provider>
    );
};

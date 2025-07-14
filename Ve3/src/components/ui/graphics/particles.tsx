"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useMousePosition } from "@/lib/mouse";
import { useTheme } from "next-themes";

interface ParticlesProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
    fullPage?: boolean;
    speed?: number;
}

export default function Particles({
    className = "",
    quantity = 30,
    staticity = 50,
    ease = 50,
    refresh = false,
    fullPage = false,
    speed = 0.6,
}: ParticlesProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);	
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const circles = useRef<any[]>([]);
    const mousePosition = useMousePosition();
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    // console.log('Particles render - theme:', 
    //     theme, 'resolvedTheme:', 
    //     resolvedTheme, 'circles count:', 
    //     circles.current.length
    // );

    useEffect(() => {
        setMounted(true);
    }, []);

    const clearContext = useCallback(() => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h,
            );
        }
    }, []);

    const resizeCanvas = useCallback(() => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0;
            
            const width = window.innerWidth;
            const height = fullPage ? Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            ) : window.innerHeight;
            
            canvasSize.current.w = width;
            canvasSize.current.h = height;
            
            canvasRef.current.width = width * dpr;
            canvasRef.current.height = height * dpr;
            canvasRef.current.style.width = `${width}px`;
            canvasRef.current.style.height = `${height}px`;
            context.current.scale(dpr, dpr);
        }
    }, [fullPage, dpr]);

    const circleParams = useCallback((): Circle => {
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const translateX = 0;
        const translateY = 0;
        const size = Math.floor(Math.random() * 2) + 0.1;
        const alpha = parseFloat((Math.random() * 0.3 + 0.1).toFixed(1));
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.2;
        const dy = (Math.random() - 0.5) * 0.2;
        const magnetism = 0.1 + Math.random() * 4;
        return {
            x,
            y,
            translateX,
            translateY,
            size,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism,
        };
    }, []);

    const drawCircle = useCallback((circle: Circle, update = false) => {
        if (context.current && mounted) {
            const { x, y, translateX, translateY, size, alpha } = circle;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size, 0, 2 * Math.PI);
            const currentTheme = resolvedTheme || theme;
            const color = currentTheme === "dark" ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;

            context.current.fillStyle = color;
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!update) {
                circles.current.push(circle);
            }
        }
    }, [theme, resolvedTheme, mounted, dpr]);

    const drawParticles = useCallback(() => {
        if (!mounted) return;
        
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams();
            drawCircle(circle);
        }
    }, [quantity, mounted, clearContext, circleParams, drawCircle]);

    const initCanvas = useCallback(() => {
        resizeCanvas();
        drawParticles();
    }, [resizeCanvas, drawParticles]);

    const onMouseMove = useCallback(() => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const { w, h } = canvasSize.current;
            const x = mousePosition.x - rect.left - w / 2;
            const y = mousePosition.y - rect.top - h / 2;
            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
            }
        }
    }, [mousePosition.x, mousePosition.y]);

    const animate = useCallback(() => {
        clearContext();
        // if (circles.current.length === 0) { console.log('Animation frame - no circles to draw'); }
        circles.current.forEach((circle: Circle, i: number) => {
            const edge = [
                circle.x + circle.translateX - circle.size,
                canvasSize.current.w - circle.x - circle.translateX - circle.size,
                circle.y + circle.translateY - circle.size,
                canvasSize.current.h - circle.y - circle.translateY - circle.size,
            ];
            const closestEdge = edge.reduce((a, b) => Math.min(a, b));
            const remapClosestEdge = parseFloat(
                remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
            );
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx * speed;
            circle.y += circle.dy * speed;
            circle.translateX +=
                (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
                ease;
            circle.translateY +=
                (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
                ease;
            if (
                circle.x < -circle.size ||
                circle.x > canvasSize.current.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.current.h + circle.size
            ) {
                circles.current.splice(i, 1);
                const newCircle = circleParams();
                drawCircle(newCircle);
            } else {
                drawCircle(
                    {
                        ...circle,
                        x: circle.x,
                        y: circle.y,
                        translateX: circle.translateX,
                        translateY: circle.translateY,
                        alpha: circle.alpha,
                    },
                    true,
                );
            }
        });
        window.requestAnimationFrame(animate);
    }, [clearContext, staticity, ease, speed, circleParams, drawCircle]);

    useEffect(() => {
        if (!mounted) return;
        
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        const handleResize = () => initCanvas();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [mounted, fullPage, initCanvas, animate]);

    useEffect(() => {
        onMouseMove();
    }, [onMouseMove]);
	
    useEffect(() => {
        if (!mounted) return;
        // console.log('Theme effect triggered - theme:', theme, 'resolvedTheme:', resolvedTheme);
        circles.current.length = 0;
        drawParticles();
    }, [theme, resolvedTheme, mounted, drawParticles]);

    useEffect(() => {
        if (!mounted) return;
        initCanvas();
    }, [refresh, mounted, initCanvas]);

	type Circle = {
		x: number;
		y: number;
		translateX: number;
		translateY: number;
		size: number;
		alpha: number;
		targetAlpha: number;
		dx: number;
		dy: number;
		magnetism: number;
	};

	const remapValue = (
		value: number,
		start1: number,
		end1: number,
		start2: number,
		end2: number,
	): number => {
		const remapped =
			((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
		return remapped > 0 ? remapped : 0;
	};

    return (
        <div
            className={`${fullPage ? 'fixed top-0 left-0 w-full pointer-events-none' : ''} ${className}`}
            ref={canvasContainerRef}
            aria-hidden="true"
            style={fullPage ? { height: '100vh', zIndex: -50 } : {}}
        >
            <canvas ref={canvasRef} />
        </div>
    );
}

"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

/** Low-chroma strokes — reads as texture, not saturated color */
export const DEFAULT_WAVE_COLORS = ["#3d3a52", "#2a2838", "#4a4758"];

export const DEFAULT_WAVY_BACKGROUND = "#0a0a0f";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = DEFAULT_WAVE_COLORS,
  waveWidth,
  backgroundFill = DEFAULT_WAVY_BACKGROUND,
  blur = 14,
  speed = "fast",
  waveOpacity = 0.35,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise = createNoise3D();
    let w = 0;
    let h = 0;
    let nt = 0;
    let i: number;
    let x: number;
    const waveColors = colors;
    const lineWidth = waveWidth ?? 48;
    const speedStep = speed === "slow" ? 0.001 : speed === "fast" ? 0.002 : 0.001;

    const drawWave = (n: number) => {
      nt += speedStep;
      for (i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(4);
      animationRef.current = requestAnimationFrame(render);
    };

    const resize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    resize();
    nt = 0;
    render();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion, backgroundFill, blur, speed, waveOpacity, waveWidth, colors]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome"),
    );
  }, []);

  const reducedMotionStyle: React.CSSProperties = {
    backgroundColor: backgroundFill,
  };

  return (
    <div
      className={cn(
        "relative h-screen flex flex-col items-center justify-center overflow-hidden",
        containerClassName,
      )}
    >
      {reduceMotion ? (
        <div className="absolute inset-0 z-0" style={reducedMotionStyle} aria-hidden />
      ) : (
        <canvas
          className="absolute inset-0 z-0 size-full"
          ref={canvasRef}
          id="canvas"
          style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
        />
      )}
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

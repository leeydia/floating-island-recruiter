"use client";

import { useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import styles from "./InteractiveDotField.module.css";

interface Dot {
  baseX: number;
  baseY: number;
  phase: number;
  amplitude: number;
  radius: number;
}

interface InteractiveDotFieldProps {
  interactive?: boolean;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  strength: number;
  lastTriggeredAt: number;
}

const DOT_SPACING = 16;
const IDLE_SPEED = 0.001;
const CURSOR_RADIUS = 108;
const CURSOR_STRENGTH = 9;
const RIPPLE_SPEED_PX_PER_MS = 0.13;
const RIPPLE_DECAY_PER_MS = 0.0017;
const MAX_DEVICE_PIXEL_RATIO = 2;

function seededRandom(seed: number): number {
  const value = Math.sin(seed) * 43758.5453;
  return value - Math.floor(value);
}

function generateDots(width: number, height: number): Dot[] {
  const dots: Dot[] = [];
  const cols = Math.ceil(width / DOT_SPACING) + 2;
  const rows = Math.ceil(height / DOT_SPACING) + 2;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const seed = row * 1000 + col;
      const densityWave =
        (Math.sin(col * 0.27) + Math.cos(row * 0.39) + 2) / 4;
      const presenceThreshold = 0.82 + densityWave * 0.13;

      if (seededRandom(seed + 850) > presenceThreshold) continue;

      const rowOffset =
        (row % 2) * DOT_SPACING * 0.28 + Math.sin(row * 0.71) * 1.8;
      const jitterX = (seededRandom(seed) - 0.5) * DOT_SPACING * 0.84;
      const jitterY = (seededRandom(seed + 500) - 0.5) * DOT_SPACING * 0.84;

      dots.push({
        baseX: col * DOT_SPACING + rowOffset + jitterX,
        baseY: row * DOT_SPACING + jitterY,
        phase: seededRandom(seed + 100) * Math.PI * 2,
        amplitude: 0.35 + seededRandom(seed + 200) * 0.75,
        radius: 0.78 + seededRandom(seed + 300) * 0.58,
      });
    }
  }

  return dots;
}

export function InteractiveDotField({
  interactive = true,
}: InteractiveDotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const dotColorRef = useRef("#5b96d2");
  const cursorRef = useRef({ x: -1000, y: -1000, active: false });
  const rippleRef = useRef<Ripple>({
    x: -1000,
    y: -1000,
    radius: 0,
    strength: 0,
    lastTriggeredAt: 0,
  });
  const frameRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const draw = useCallback(
    (timestamp: number, deltaMs: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColorRef.current;
      ctx.globalAlpha = 0.78;

      const motionScale = reducedMotion ? 0.12 : 1;
      const cursor = cursorRef.current;
      const ripple = rippleRef.current;

      for (const dot of dotsRef.current) {
        const idleX =
          Math.sin(timestamp * IDLE_SPEED + dot.phase) * dot.amplitude * motionScale;
        const idleY =
          Math.cos(timestamp * IDLE_SPEED * 0.86 + dot.phase) *
          dot.amplitude *
          0.55 *
          motionScale;

        let offsetX = idleX;
        let offsetY = idleY;

        if (interactive && cursor.active && !reducedMotion) {
          const dx = dot.baseX - cursor.x;
          const dy = dot.baseY - cursor.y;
          const distance = Math.hypot(dx, dy);

          if (distance < CURSOR_RADIUS && distance > 0) {
            const influence = (1 - distance / CURSOR_RADIUS) ** 2;
            offsetX += (dx / distance) * influence * CURSOR_STRENGTH;
            offsetY += (dy / distance) * influence * CURSOR_STRENGTH;
          }
        }

        if (interactive && ripple.strength > 0 && !reducedMotion) {
          const dx = dot.baseX - ripple.x;
          const dy = dot.baseY - ripple.y;
          const distanceFromWave = Math.abs(Math.hypot(dx, dy) - ripple.radius);

          if (distanceFromWave < 22) {
            const wave = (1 - distanceFromWave / 22) * ripple.strength;
            const angle = Math.atan2(dy, dx);
            offsetX += Math.cos(angle) * wave * 3.8;
            offsetY += Math.sin(angle) * wave * 3.8;
          }
        }

        ctx.beginPath();
        ctx.arc(
          dot.baseX + offsetX,
          dot.baseY + offsetY,
          dot.radius,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }

      if (ripple.strength > 0) {
        ripple.radius += RIPPLE_SPEED_PX_PER_MS * deltaMs;
        ripple.strength = Math.max(
          0,
          ripple.strength - RIPPLE_DECAY_PER_MS * deltaMs,
        );
      }
    },
    [interactive, reducedMotion],
  );

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      sizeRef.current = { width: rect.width, height: rect.height };
      dotsRef.current = generateDots(rect.width, rect.height);
      dotColorRef.current =
        window.getComputedStyle(container).getPropertyValue("--color-dot").trim() ||
        "#5b96d2";
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    let previousTimestamp = performance.now();

    function animate(timestamp: number) {
      const deltaMs = Math.min(32, Math.max(0, timestamp - previousTimestamp));
      previousTimestamp = timestamp;
      draw(timestamp, deltaMs);
      frameRef.current = window.requestAnimationFrame(animate);
    }

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [draw]);

  useEffect(() => {
    if (!interactive || reducedMotion) {
      cursorRef.current.active = false;
      rippleRef.current.strength = 0;
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const previousCursor = cursorRef.current;
      const moved = Math.hypot(x - previousCursor.x, y - previousCursor.y);
      const now = performance.now();

      cursorRef.current = { x, y, active: true };

      if (moved > 28 && now - rippleRef.current.lastTriggeredAt > 320) {
        rippleRef.current = {
          x,
          y,
          radius: 0,
          strength: 1,
          lastTriggeredAt: now,
        };
      }
    };

    const handlePointerLeave = () => {
      cursorRef.current = { x: -1000, y: -1000, active: false };
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, [interactive, reducedMotion]);

  return (
    <div ref={containerRef} className={styles.field} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

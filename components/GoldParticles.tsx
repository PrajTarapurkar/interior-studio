
"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
  pulseSpeed: number;
  glow: number;
  dust: boolean;
};

export default function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    let lastTime = 0;
    let elapsed = 0;
    let running = false;

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const makeParticle = (dust = false): Particle => ({
      x: random(0, width),
      y: random(0, height),
      vx: random(-9, 9),
      vy: random(-15, -3),
      radius: dust ? random(0.3, 0.8) : random(0.6, 1.7),
      opacity: dust ? random(0.08, 0.35) : random(0.3, 0.85),
      phase: random(0, Math.PI * 2),
      pulseSpeed: random(0.6, 1.8),
      glow: dust ? random(2, 5) : random(5, 16),
      dust,
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mobile = width < 640;
      const area = (width * height) / 12000;
      const count = Math.min(
        mobile ? 60 : 140,
        Math.max(mobile ? 24 : 45, Math.floor(area))
      );

      const dustCount = Math.floor(count * 0.65);
      const total = count + dustCount;

      particles = particles.slice(0, total);

      while (particles.length < total) {
        particles.push(makeParticle(particles.length >= count));
      }

      if (reducedMotion.matches) draw(false);
    };

    const drawAmbientGlow = () => {
      const spots = [
        { x: 0.1, y: 0.23, r: 0.32 },
        { x: 0.72, y: 0.56, r: 0.4 },
        { x: 0.96, y: 0.82, r: 0.27 },
      ];

      for (const spot of spots) {
        const x = width * spot.x;
        const y = height * spot.y;
        const radius = Math.max(width, height) * spot.r;

        const gradient = ctx.createRadialGradient(
          x, y, 0, x, y, radius
        );

        gradient.addColorStop(0, "rgba(160, 100, 20, 0.065)");
        gradient.addColorStop(0.45, "rgba(120, 75, 15, 0.025)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const drawTrails = (animate: boolean) => {
      const trails = [
        {
          start: [-0.08, 0.7],
          c1: [0.2, 0.18],
          c2: [0.32, 0.82],
          end: [0.59, 0.55],
          speed: 0.055,
          phase: 0.12,
        },
        {
          start: [0.43, 0.38],
          c1: [0.68, 0.12],
          c2: [0.75, 0.9],
          end: [1.08, 0.48],
          speed: 0.04,
          phase: 0.58,
        },
      ];

      for (const trail of trails) {
        const point = (p: number[]) => ({
          x: p[0] * width,
          y: p[1] * height,
        });

        const start = point(trail.start);
        const c1 = point(trail.c1);
        const c2 = point(trail.c2);
        const end = point(trail.end);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(
          c1.x, c1.y, c2.x, c2.y, end.x, end.y
        );

        ctx.strokeStyle = "rgba(222, 171, 68, 0.045)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const t = animate
          ? (elapsed * trail.speed + trail.phase) % 1
          : trail.phase;

        const mt = 1 - t;
        const x =
          mt ** 3 * start.x +
          3 * mt ** 2 * t * c1.x +
          3 * mt * t ** 2 * c2.x +
          t ** 3 * end.x;

        const y =
          mt ** 3 * start.y +
          3 * mt ** 2 * t * c1.y +
          3 * mt * t ** 2 * c2.y +
          t ** 3 * end.y;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 32);
        glow.addColorStop(0, "rgba(255, 208, 100, 0.32)");
        glow.addColorStop(0.15, "rgba(255, 183, 60, 0.12)");
        glow.addColorStop(1, "rgba(255, 183, 60, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 32, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    };

    const drawParticle = (p: Particle, animate: boolean) => {
      const pulse = animate
        ? (1 + Math.sin(elapsed * p.pulseSpeed + p.phase)) / 2
        : 0.5;

      const brightness = 0.4 + pulse * 0.6;
      const alpha = p.opacity * brightness;
      const glowRadius = p.glow * brightness;

      const glow = ctx.createRadialGradient(
        p.x, p.y, 0, p.x, p.y, glowRadius
      );

      glow.addColorStop(
        0,
        `rgba(255, 204, 100, ${alpha * (p.dust ? 0.1 : 0.32)})`
      );
      glow.addColorStop(
        0.3,
        `rgba(221, 156, 45, ${alpha * 0.1})`
      );
      glow.addColorStop(1, "rgba(200, 140, 30, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 221, 150, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * brightness, 0, Math.PI * 2);
      ctx.fill();

      if (!p.dust && brightness > 0.86 && p.radius > 1.2) {
        ctx.strokeStyle = `rgba(255, 204, 100, ${alpha * 0.18})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(p.x - 4, p.y);
        ctx.lineTo(p.x + 4, p.y);
        ctx.moveTo(p.x, p.y - 4);
        ctx.lineTo(p.x, p.y + 4);
        ctx.stroke();
      }
    };

    const draw = (animate: boolean, dt = 0) => {
      ctx.clearRect(0, 0, width, height);

      drawAmbientGlow();
      drawTrails(animate);

      for (const p of particles) {
        drawParticle(p, animate);

        if (animate) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
      }
    };

    const tick = (time: number) => {
      if (!running) return;

      if (!lastTime) lastTime = time;

      const dt = Math.min((time - lastTime) / 1000, 0.04);
      lastTime = time;
      elapsed += dt;

      draw(true, dt);
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      lastTime = 0;
    };

    const start = () => {
      if (running || document.hidden || reducedMotion.matches) return;

      running = true;
      lastTime = 0;
      raf = requestAnimationFrame(tick);
    };

    const updateMotion = () => {
      stop();

      if (reducedMotion.matches) {
        draw(false);
      } else {
        start();
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else updateMotion();
    };

    resize();
    updateMotion();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", updateMotion);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <canvas
  ref={canvasRef}
  aria-hidden="true"
 className="pointer-events-none fixed inset-0 z-[9999] h-screen w-screen"
/>
  );
}

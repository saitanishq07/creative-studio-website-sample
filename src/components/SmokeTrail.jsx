import React, { useEffect, useRef } from 'react';

export default function SmokeTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const maxParticles = 170;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let prevPos = null;

    const createSlightlyThickerParticle = (x, y) => {
      particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.7,
        vy: -Math.random() * 0.5 - 0.25,
        size: Math.random() * 8 + 18,    // Initial core 18px - 26px
        maxSize: Math.random() * 20 + 55, // Max size 55px - 75px
        alpha: 0.52,
        decay: Math.random() * 0.01 + 0.008, // Richer lingering tail
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.03,
        age: 0
      });
    };

    const handleMouseMove = (e) => {
      const currPos = { x: e.clientX, y: e.clientY };

      if (!prevPos) {
        prevPos = currPos;
        createSlightlyThickerParticle(currPos.x, currPos.y);
        return;
      }

      const dx = currPos.x - prevPos.x;
      const dy = currPos.y - prevPos.y;
      const dist = Math.hypot(dx, dy);

      // Tight gapless interpolation step
      const stepSize = 2.5;
      const steps = Math.max(1, Math.ceil(dist / stepSize));

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const interpX = prevPos.x + dx * t;
        const interpY = prevPos.y + dy * t;
        createSlightlyThickerParticle(interpX, interpY);
      }

      prevPos = currPos;

      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.age += 1;
        p.x += p.vx;
        p.y += p.vy;

        p.size += (p.maxSize - p.size) * 0.05;
        p.alpha -= p.decay;
        p.rotation += p.vRot;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
        gradient.addColorStop(0, `rgba(255, 59, 0, ${p.alpha * 0.95})`);
        gradient.addColorStop(0.35, `rgba(255, 30, 0, ${p.alpha * 0.7})`);
        gradient.addColorStop(0.7, `rgba(200, 15, 0, ${p.alpha * 0.25})`);
        gradient.addColorStop(1, 'rgba(255, 59, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-90"
      style={{ pointerEvents: 'none' }}
    />
  );
}

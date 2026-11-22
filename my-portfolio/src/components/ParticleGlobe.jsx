import { useEffect, useRef } from 'react';

/**
 * Interactive 3D Fibonacci Particle Globe (Canvas 2D projection).
 * - Mouse-reactive rotation with smooth damping
 * - Disciplined Cyan + Silver monochrome palette
 * - Automatic static render when prefers-reduced-motion is enabled
 */
export default function ParticleGlobe() {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = 210;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const points = Array.from({ length: count }, (_, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return {
        x: Math.cos(theta) * radiusAtY,
        y,
        z: Math.sin(theta) * radiusAtY,
        accent: i % 9 === 0,
      };
    });

    let rotY = 0.4;
    let rotX = 0.22;
    let targetRotX = 0.22;
    let animId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.37;

      ctx.clearRect(0, 0, w, h);

      // Subtle atmospheric cyan core halo
      const halo = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r * 1.15);
      halo.addColorStop(0, 'rgba(34, 211, 238, 0.08)');
      halo.addColorStop(0.65, 'rgba(34, 211, 238, 0.02)');
      halo.addColorStop(1, 'rgba(7, 9, 14, 0)');
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      // Subtle equatorial orbital ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, r * 1.14, r * 0.34, -0.22, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.14)';
      ctx.lineWidth = 1;
      ctx.stroke();

      if (!reducedMotion) {
        const speed = pointerRef.current.active ? 0.002 + pointerRef.current.x * 0.006 : 0.0032;
        rotY += speed;
        targetRotX = pointerRef.current.active ? 0.22 + pointerRef.current.y * 0.45 : 0.22;
        rotX += (targetRotX - rotX) * 0.06;
      }

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected = points.map((p) => {
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;
        const scale = 2.4 / (2.4 - z2);
        return {
          sx: cx + x1 * r * scale * 0.72,
          sy: cy + y2 * r * scale * 0.72,
          z: z2,
          scale,
          accent: p.accent,
        };
      });

      projected.sort((a, b) => a.z - b.z);

      // Subtle wireframe connections between nearby front-hemisphere accent nodes
      const frontAccents = projected.filter((p) => p.accent && p.z > 0.1);
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.18)';
      ctx.lineWidth = 0.75;
      for (let i = 0; i < frontAccents.length; i++) {
        for (let j = i + 1; j < frontAccents.length; j++) {
          const dx = frontAccents[i].sx - frontAccents[j].sx;
          const dy = frontAccents[i].sy - frontAccents[j].sy;
          if (dx * dx + dy * dy < 3600) {
            ctx.beginPath();
            ctx.moveTo(frontAccents[i].sx, frontAccents[i].sy);
            ctx.lineTo(frontAccents[j].sx, frontAccents[j].sy);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of projected) {
        const depth = (p.z + 1) / 2;
        const alpha = 0.14 + depth * 0.82;
        const size = p.accent ? 1.5 + depth * 1.4 : 0.9 + depth * 1.05;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fillStyle = p.accent
          ? `rgba(34, 211, 238, ${Math.min(1, alpha + 0.15).toFixed(3)})`
          : `rgba(226, 232, 240, ${(alpha * 0.75).toFixed(3)})`;
        ctx.fill();
      }

      if (!reducedMotion) {
        animId = window.requestAnimationFrame(render);
      }
    };

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animId) window.cancelAnimationFrame(animId);
    };
  }, []);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    pointerRef.current.active = false;
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative h-[220px] w-full cursor-crosshair overflow-hidden sm:h-[240px]"
    >
      <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
      <div className="pointer-events-none absolute right-3 bottom-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        <span>DA NANG · 16.05°N 108.20°E</span>
      </div>
    </div>
  );
}

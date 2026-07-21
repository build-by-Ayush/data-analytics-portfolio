import { useEffect, useRef } from 'react';

const COLORS = [
  { r: 34, g: 211, b: 238 },   // cyan
  { r: 139, g: 92, b: 246 },   // violet
  { r: 99, g: 102, b: 241 },   // indigo
  { r: 212, g: 168, b: 83 },   // gold
  { r: 236, g: 130, b: 100 },  // coral
];

export default function ConstellationCanvas() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function initParticles() {
      const count = Math.floor((w * h) / 12000);
      particles.current = Array.from({ length: count }, () => {
        const c = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 1,
          color: c,
          alpha: Math.random() * 0.5 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.008 + 0.003,
        };
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const pts = particles.current;
      const connectDist = 140;

      // Draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const opacity = (1 - dist / connectDist) * 0.15;
            const c1 = pts[i].color;
            const c2 = pts[j].color;
            const mr = (c1.r + c2.r) >> 1;
            const mg = (c1.g + c2.g) >> 1;
            const mb = (c1.b + c2.b) >> 1;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${mr},${mg},${mb},${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of pts) {
        p.pulse += p.pulseSpeed;
        const glow = Math.sin(p.pulse) * 0.2 + 0.8;
        const a = p.alpha * glow;

        // Outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `rgba(${p.color.r},${p.color.g},${p.color.b},${a * 0.4})`);
        grad.addColorStop(0.4, `rgba(${p.color.r},${p.color.g},${p.color.b},${a * 0.1})`);
        grad.addColorStop(1, `rgba(${p.color.r},${p.color.g},${p.color.b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();
    window.addEventListener('resize', () => { resize(); initParticles(); });

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

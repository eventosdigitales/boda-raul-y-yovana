import React, { useEffect, useRef } from 'react';

const PALETTES = [
  ['#e8c97a', '#fff5cc', '#ffd700', '#fffbe6'],
  ['#ffffff', '#e8c97a', '#c9a84c', '#fff8dc'],
  ['#ffb3c6', '#e8c97a', '#ffffff', '#ffd6e0'],
  ['#c9a84c', '#ffe066', '#fff5cc', '#ffffff'],
];

const rand = (a, b) => a + Math.random() * (b - a);
const randInt = (a, b) => Math.floor(rand(a, b));
const pick = arr => arr[randInt(0, arr.length)];

/* ── Particle ── */
class Particle {
  constructor(x, y, color, angle, speed, type = 'spark') {
    this.x = x; this.y = y;
    this.color = color;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.alpha = 1;
    this.type = type;
    this.radius = type === 'glitter' ? rand(1.5, 3.5) : rand(2, 4.5);
    this.gravity = type === 'glitter' ? rand(0.02, 0.06) : rand(0.06, 0.14);
    this.decay = type === 'glitter' ? rand(0.008, 0.014) : rand(0.014, 0.026);
    this.drag = type === 'trail' ? 0.92 : 0.97;
    this.spin = rand(-0.12, 0.12);
    this.angle = angle;
    this.twinkle = Math.random() > 0.5;
    this.twinkleSpeed = rand(0.08, 0.18);
    this.twinklePhase = rand(0, Math.PI * 2);
  }

  update() {
    this.vx *= this.drag;
    this.vy = this.vy * this.drag + this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
    this.angle += this.spin;
  }

  draw(ctx, t) {
    if (this.alpha <= 0) return;
    const alpha = this.twinkle
      ? this.alpha * (0.6 + 0.4 * Math.sin(t * this.twinkleSpeed + this.twinklePhase))
      : this.alpha;

    ctx.save();
    ctx.globalAlpha = Math.max(0, alpha);

    if (this.type === 'star') {
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      drawStar(ctx, 0, 0, this.radius * 1.5, this.radius * 0.6, 4, this.color);
    } else if (this.type === 'glitter') {
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.radius * 0.6, -this.radius * 0.6, this.radius * 1.2, this.radius * 1.2);
    } else {
      // glow spark
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 1.8);
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
    ctx.restore();
  }

  get dead() { return this.alpha <= 0; }
}

function drawStar(ctx, x, y, outerR, innerR, points, color) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = (i * Math.PI) / points - Math.PI / 2;
    i === 0 ? ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a))
             : ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

/* ── Rocket ── */
class Rocket {
  constructor(canvasW, canvasH) {
    this.x = rand(canvasW * 0.1, canvasW * 0.9);
    this.y = canvasH;
    this.targetY = rand(canvasH * 0.08, canvasH * 0.42);
    this.speed = rand(7, 13);
    this.vy = -this.speed;
    this.vy_accel = rand(0.08, 0.18);
    this.palette = pick(PALETTES);
    this.trail = [];
    this.exploded = false;
  }

  update() {
    this.trail.push({ x: this.x, y: this.y, alpha: 1 });
    if (this.trail.length > 14) this.trail.shift();
    this.trail.forEach(t => { t.alpha *= 0.85; });
    this.y += this.vy;
    this.vy += this.vy_accel;
  }

  drawTrail(ctx) {
    this.trail.forEach((p, i) => {
      const r = (i / this.trail.length) * 3;
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r + 1);
      gradient.addColorStop(0, `rgba(255,240,180,${p.alpha * 0.9})`);
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, r + 1, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });
    // head glow
    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 5);
    g.addColorStop(0, 'rgba(255,255,220,1)');
    g.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  }

  shouldExplode() { return this.y <= this.targetY; }

  explode() {
    const particles = [];
    const count = randInt(120, 200);
    const type = pick(['radial', 'ring', 'star_burst', 'double']);
    const palette = this.palette;

    if (type === 'ring') {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = rand(3.5, 5.5);
        const color = pick(palette);
        particles.push(new Particle(this.x, this.y, color, angle, speed, 'spark'));
      }
    } else if (type === 'star_burst') {
      const arms = randInt(5, 8);
      for (let a = 0; a < arms; a++) {
        const baseAngle = (Math.PI * 2 * a) / arms;
        for (let i = 0; i < count / arms; i++) {
          const angle = baseAngle + rand(-0.25, 0.25);
          const speed = rand(1.5, 6);
          particles.push(new Particle(this.x, this.y, pick(palette), angle, speed, i % 3 === 0 ? 'star' : 'spark'));
        }
      }
    } else if (type === 'double') {
      // inner ring + outer burst
      for (let i = 0; i < 60; i++) {
        const angle = (Math.PI * 2 * i) / 60;
        particles.push(new Particle(this.x, this.y, pick(palette), angle, rand(2, 3.5), 'spark'));
      }
      for (let i = 0; i < count; i++) {
        const angle = rand(0, Math.PI * 2);
        particles.push(new Particle(this.x, this.y, pick(palette), angle, rand(4, 8), i % 4 === 0 ? 'glitter' : 'spark'));
      }
    } else {
      // radial with mixed types
      for (let i = 0; i < count; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(1.5, 7);
        const t = i % 5 === 0 ? 'star' : i % 7 === 0 ? 'glitter' : 'spark';
        particles.push(new Particle(this.x, this.y, pick(palette), angle, speed, t));
      }
    }

    // always add some glitter drifters
    for (let i = 0; i < 30; i++) {
      const angle = rand(0, Math.PI * 2);
      particles.push(new Particle(this.x, this.y, pick(palette), angle, rand(0.5, 2.5), 'glitter'));
    }

    return particles;
  }
}

/* ── Component ── */
function Fireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let particles = [];
    let rockets = [];
    let animId;
    let t = 0;
    let nextLaunch = 0;

    const loop = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // schedule launches
      if (t >= nextLaunch) {
        rockets.push(new Rocket(canvas.width, canvas.height));
        nextLaunch = t + randInt(40, 90);
      }

      // rockets
      rockets = rockets.filter(r => {
        r.update();
        r.drawTrail(ctx);
        if (r.shouldExplode()) {
          particles.push(...r.explode());
          return false;
        }
        return true;
      });

      // particles
      particles = particles.filter(p => {
        p.update();
        p.draw(ctx, t);
        return !p.dead;
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

export default Fireworks;

/* ==========================================================
   CONSTELLATION BACKGROUND (canvas #bg-canvas, styled in style.css)
   Inspired by the Lasallian eight-pointed "star of faith" (a generic geometric
   star, not an official logo). Green stars drift slowly and link with thin lines.
     - Move the cursor: nearby stars brighten, spin and connect to it
     - Click / tap: a ripple pushes the stars outward
   ========================================================== */
(() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    // SETTINGS - star count, link distance, cursor reach, colours (edit here)
    const DENSITY = 15000;            // pixels of screen per star (lower = more stars)
    const MAX_STARS = 130;
    const LINK_DIST = 140;            // stars closer than this are joined by a line
    const CURSOR_RADIUS = 190;
    const GREEN = '10, 122, 75';
    const GOLD = '224, 150, 0';       // rare accent star
    const STAR_ALPHA = 0.26;
    const LINE_ALPHA = 0.16;

    const pointer = { x: -9999, y: -9999, active: false };
    let w = 0, h = 0, dpr = 1, stars = [], ripples = [], raf = 0, last = 0;

    function makeStar() {
        const big = Math.random() < 0.18;
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            r: big ? 6 + Math.random() * 3 : 2.5 + Math.random() * 2.5,
            rot: Math.random() * Math.PI,
            spin: (Math.random() - 0.5) * 0.004,
            phase: Math.random() * Math.PI * 2,
            gold: Math.random() < 0.08
        };
    }

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        const target = Math.min(MAX_STARS, Math.round((w * h) / DENSITY));
        while (stars.length < target) stars.push(makeStar());
        stars.length = target;
        stars.forEach(s => { s.x = Math.min(s.x, w); s.y = Math.min(s.y, h); });
        draw(performance.now());
    }

    // Eight-pointed star: 16 vertices alternating outer / inner radius
    function starPath(x, y, r, rot) {
        ctx.beginPath();
        for (let i = 0; i < 16; i++) {
            const rad = i % 2 === 0 ? r : r * 0.42;
            const a = rot + (i * Math.PI) / 8;
            const px = x + Math.cos(a) * rad, py = y + Math.sin(a) * rad;
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
    }

    function update(dt) {
        const f = dt / 16.67;
        for (const s of stars) {
            s.x += s.vx * f;
            s.y += s.vy * f;
            s.rot += s.spin * f;
            if (s.x < -10) s.x = w + 10; else if (s.x > w + 10) s.x = -10;
            if (s.y < -10) s.y = h + 10; else if (s.y > h + 10) s.y = -10;

            if (pointer.active) {
                const dx = pointer.x - s.x, dy = pointer.y - s.y;
                const d = Math.hypot(dx, dy);
                if (d < CURSOR_RADIUS && d > 1) {
                    const k = 1 - d / CURSOR_RADIUS;
                    s.x += (dx / d) * k * 0.35 * f;
                    s.y += (dy / d) * k * 0.35 * f;
                    s.rot += k * 0.03 * f;
                }
            }
        }
        for (const rp of ripples) {
            rp.r += 5 * f;
            rp.life -= 0.018 * f;
            for (const s of stars) {
                const dx = s.x - rp.x, dy = s.y - rp.y;
                const d = Math.hypot(dx, dy);
                if (Math.abs(d - rp.r) < 26 && d > 1) {
                    s.x += (dx / d) * 2.2 * f;
                    s.y += (dy / d) * 2.2 * f;
                    s.rot += 0.05 * f;
                }
            }
        }
        ripples = ripples.filter(rp => rp.life > 0);
    }

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
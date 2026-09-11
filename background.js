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

/* ==========================================================
   FEEDBACK SYSTEM
   Wording : script.js -> MESSAGES
   Look    : style.css -> sections 12, 16, 17 and 21 (inputs, alerts, toasts, confirm dialog, spinner)
   Parts   : 1 icons & titles | 2 toasts | 3 field errors & form alerts
             4 loading buttons | 5 confirm dialog | 6 inputs & dialog accessibility
   Public API (global): showToast, validateForm, failForm, clearFormErrors,
                        setButtonLoading, confirmDialog
   ========================================================== */
(() => {
    /* ---------- 1. ICONS & TITLES (Lucide paths, edit heading text here) ---------- */
    const ICONS = {
        success: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
        error: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
        warning: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
        info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
        close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
        trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
        logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
        eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
        eyeOff: '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
        spinner: '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>'
    };
    const TITLES = { success: 'Success', error: 'Something went wrong', warning: 'Heads up', info: 'Notice' };
    const DURATIONS = { success: 3800, info: 3800, warning: 5000, error: 5500 };

    const svg = (name, cls = '') =>
        `<svg class="${cls}" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`;

    /* Toast type is guessed from the wording when not passed explicitly */
    const WARN_RE = /\b(cannot|can't|please sign in)\b/i;
    const ERROR_RE = /\b(please|invalid|failed|could not|required|must|error|not found|wrong)\b/i;
    const INFO_RE = /\b(removed|opened|marked|added to|conversation)\b/i;
    const inferType = msg => WARN_RE.test(msg) ? 'warning' : ERROR_RE.test(msg) ? 'error' : INFO_RE.test(msg) ? 'info' : 'success';

    /* ---------- 2. TOASTS ---------- */
    function dismiss(el) {
        if (el.dataset.closing) return;
        el.dataset.closing = '1';
        el.classList.add('leaving');
        el.addEventListener('animationend', e => { if (e.target === el) el.remove(); });
        setTimeout(() => el.remove(), 600);
    }

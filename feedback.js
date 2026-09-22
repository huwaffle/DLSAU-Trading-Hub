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

    window.showToast = function (message, type, title) {
        const stack = document.getElementById('toast-stack');
        if (!stack) return;
        type = ICONS[type] && TITLES[type] ? type : inferType(String(message));
        const duration = DURATIONS[type];

        const el = document.createElement('div');
        el.className = `toast-item toast-${type}`;
        el.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
        el.style.setProperty('--duration', duration + 'ms');
        el.innerHTML = `
            <span class="toast-icon">${svg(type)}</span>
            <div class="toast-body"><strong class="toast-title"></strong><span class="toast-text"></span></div>
            <button type="button" class="toast-close" aria-label="Dismiss notification">${svg('close')}</button>
            <span class="toast-progress"></span>`;
        el.querySelector('.toast-title').textContent = title || TITLES[type];
        el.querySelector('.toast-text').textContent = message;
        el.querySelector('.toast-close').addEventListener('click', () => dismiss(el));

        let timer = setTimeout(() => dismiss(el), duration);
        const pause = () => { clearTimeout(timer); el.classList.add('paused'); };
        const resume = () => { el.classList.remove('paused'); timer = setTimeout(() => dismiss(el), 1500); };
        el.addEventListener('mouseenter', pause);
        el.addEventListener('mouseleave', resume);
        el.addEventListener('focusin', pause);
        el.addEventListener('focusout', resume);

        stack.appendChild(el);
        while (stack.children.length > 4) dismiss(stack.firstElementChild);
    };

    /* ---------- 3. FIELD ERRORS & FORM ALERTS ---------- */
    function shake(el) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        el.animate(
            [0, -8, 8, -8, 8, -5, 5, -2, 0].map(x => ({ transform: `translateX(${x}px)` })),
            { duration: 480, easing: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)' }
        );
    }

    function clearField(input) {
        input.classList.remove('invalid', 'valid');
        input.removeAttribute('aria-invalid');
        const group = input.closest('.input-group');
        group?.classList.remove('has-error');
        const err = group?.querySelector('.field-error');
        if (err) {
            input.removeAttribute('aria-describedby');
            err.remove();
        }
    }

    function clearErrors(form) {
        form.querySelectorAll('.invalid, .valid').forEach(clearField);
        form.querySelector('.form-alert')?.remove();
    }

    let uid = 0;
    function setFieldError(input, message) {
        clearField(input);
        const group = input.closest('.input-group');
        input.classList.add('invalid');
        input.setAttribute('aria-invalid', 'true');
        if (!group) return;
        group.classList.add('has-error');
        const p = document.createElement('p');
        p.className = 'field-error';
        p.id = `field-error-${++uid}`;
        p.setAttribute('role', 'alert');
        p.innerHTML = svg('error');
        p.appendChild(document.createTextNode(message));
        group.appendChild(p);
        input.setAttribute('aria-describedby', p.id);
    }

    /* Reusable inline alert: type = error | warning | info | success */
    function formAlert(form, message, type = 'error') {
        form.querySelector('.form-alert')?.remove();
        const box = document.createElement('div');
        box.className = `form-alert form-alert-${type}`;
        box.setAttribute('role', 'alert');
        box.innerHTML = svg(type);
        const span = document.createElement('span');
        span.textContent = message;
        box.appendChild(span);
        form.prepend(box);
    }

    /* checks: [[inputId, (value, el) => 'error message' | ''], ...] */
    window.validateForm = function (form, checks) {
        clearErrors(form);
        const failed = [];
        const passed = [];
        checks.forEach(([id, test]) => {
            const el = document.getElementById(id);
            if (!el) return;
            const msg = test(el.type === 'file' ? el.files[0] : el.value.trim(), el);
            if (msg) { setFieldError(el, msg); failed.push(el); } else passed.push(el);
        });
        if (!failed.length) return true;
        passed.forEach(el => { if (el.value) el.classList.add('valid'); });
        formAlert(form, failed.length === 1 ? 'Please fix the highlighted field.' : `Please fix the ${failed.length} highlighted fields.`);
        shake(form.closest('.auth-card, .modal-card') || form);
        failed[0].focus();
        return false;
    };

    window.failForm = function (form, inputId, message) {
        clearErrors(form);
        const el = document.getElementById(inputId);
        if (el) setFieldError(el, message);
        formAlert(form, message);
        shake(form.closest('.auth-card, .modal-card') || form);
        el?.focus();
    };

    window.clearFormErrors = clearErrors;
    window.formAlert = formAlert;

    document.addEventListener('input', e => { if (e.target.classList?.contains('invalid') || e.target.classList?.contains('valid')) clearField(e.target); });
    document.addEventListener('change', e => { if (e.target.classList?.contains('invalid') || e.target.classList?.contains('valid')) clearField(e.target); });

    /* ---------- 4. LOADING BUTTONS ---------- */
    window.setButtonLoading = function (btn, loading, label) {
        if (!btn) return;
        if (loading) {
            if (btn.classList.contains('is-loading')) return;
            btn.dataset.label = btn.innerHTML;
            btn.classList.add('is-loading');
            btn.disabled = true;
            btn.setAttribute('aria-busy', 'true');
            btn.innerHTML = `${svg('spinner', 'spinner')}<span></span>`;
            btn.lastElementChild.textContent = label || 'Please wait...';
        } else if (btn.classList.contains('is-loading')) {
            btn.innerHTML = btn.dataset.label;
            btn.classList.remove('is-loading');
            btn.disabled = false;
            btn.removeAttribute('aria-busy');
            delete btn.dataset.label;
            window.lucide?.createIcons();
        }
    };

    /* ---------- 5. CONFIRM DIALOG ----------
       const ok = await confirmDialog({ title, message, confirmText, cancelText, tone, icon, warnings, requireText })
       tone: 'danger' | 'warning' | 'info'   icon: 'trash' | 'logout' | 'warning' | 'info'
       warnings:    optional list of short warning lines shown in a highlighted box
       requireText: optional text the user must type exactly before the confirm button unlocks */
    window.confirmDialog = function ({ title, message, confirmText = 'Confirm', cancelText = 'Cancel', tone = 'danger', icon = 'warning', warnings = [], requireText = '' } = {}) {
        return new Promise(resolve => {
            const previous = document.activeElement;
            const id = ++uid;
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay confirm-overlay';
            overlay.innerHTML = `
                <div class="glass-card modal-card confirm-card confirm-${tone} ${warnings.length || requireText ? 'has-extras' : ''}" role="alertdialog" aria-modal="true"
                     aria-labelledby="confirm-title-${id}" aria-describedby="confirm-desc-${id}">
                    <span class="confirm-icon">${svg(icon)}</span>
                    <h3 id="confirm-title-${id}"></h3>
                    <p id="confirm-desc-${id}"></p>
                    ${warnings.length ? `<div class="confirm-warnbox" role="note"><span class="confirm-warn-icon">${svg('warning')}</span><ul></ul></div>` : ''}
                    ${requireText ? `<div class="confirm-verify">
                        <label for="confirm-input-${id}">Type <strong></strong> to confirm</label>
                        <input id="confirm-input-${id}" type="text" autocomplete="off" autocapitalize="none" spellcheck="false">
                        <p class="confirm-verify-hint" aria-live="polite"></p>
                    </div>` : ''}
                    <div class="confirm-actions">
                        <button type="button" class="glass-btn confirm-cancel"></button>
                        <button type="button" class="glass-btn confirm-ok"></button>
                    </div>
                </div>`;
            overlay.querySelector('h3').textContent = title;
            overlay.querySelector('p').textContent = message;
            const cancelBtn = overlay.querySelector('.confirm-cancel');
            const okBtn = overlay.querySelector('.confirm-ok');
            cancelBtn.textContent = cancelText;
            okBtn.textContent = confirmText;

            const list = overlay.querySelector('.confirm-warnbox ul');
            if (list) warnings.forEach(line => { const li = document.createElement('li'); li.textContent = line; list.appendChild(li); });

            // Type-to-confirm: the confirm button stays locked until the text matches exactly
            const input = overlay.querySelector('.confirm-verify input');
            if (input) {
                const hint = overlay.querySelector('.confirm-verify-hint');
                overlay.querySelector('.confirm-verify strong').textContent = requireText;
                okBtn.disabled = true;
                input.addEventListener('input', () => {
                    const typed = input.value.trim();
                    const match = typed === requireText.trim();
                    okBtn.disabled = !match;
                    input.classList.toggle('match', match);
                    input.classList.toggle('mismatch', !!typed && !match);
                    hint.textContent = !typed ? '' : match ? 'Name matches.' : 'The name does not match yet.';
                });
                input.addEventListener('keydown', e => {
                    if (e.key === 'Enter') { e.preventDefault(); if (!okBtn.disabled) close(true); }
                });
            }

            const close = result => {
                document.removeEventListener('keydown', onKey, true);
                overlay.remove();
                if (previous && document.contains(previous)) previous.focus();
                resolve(result);
            };
            const onKey = e => {
                if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(false); }
                else if (e.key === 'Tab') {
                    const items = (input ? [input, cancelBtn, okBtn] : [cancelBtn, okBtn]).filter(el => !el.disabled);
                    const i = items.indexOf(document.activeElement);
                    e.preventDefault();
                    items[(i + (e.shiftKey ? -1 : 1) + items.length) % items.length].focus();
                }
            };
            cancelBtn.addEventListener('click', () => close(false));
            okBtn.addEventListener('click', () => close(true));
            overlay.addEventListener('mousedown', e => { if (e.target === overlay) close(false); });
            document.addEventListener('keydown', onKey, true);
            document.body.appendChild(overlay);
            (input || cancelBtn).focus();
        });
    };

    /* ---------- 6. INPUTS & DIALOG ACCESSIBILITY ---------- */
    function enhancePasswordFields() {
        document.querySelectorAll('input[type="password"]').forEach(input => {
            if (input.closest('.input-wrap')) return;
            const wrap = document.createElement('div');
            wrap.className = 'input-wrap';
            input.parentNode.insertBefore(wrap, input);
            wrap.appendChild(input);
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'toggle-visibility';
            btn.setAttribute('aria-label', 'Show password');
            btn.innerHTML = svg('eye');
            btn.addEventListener('click', () => {
                const show = input.type === 'password';
                input.type = show ? 'text' : 'password';
                btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
                btn.innerHTML = svg(show ? 'eyeOff' : 'eye');
            });
            wrap.appendChild(btn);
        });
    }

    function enhanceDialogs() {
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            const card = overlay.querySelector('.modal-card');
            const heading = overlay.querySelector('h3, h4');
            if (!card) return;
            card.setAttribute('role', 'dialog');
            card.setAttribute('aria-modal', 'true');
            if (heading) {
                heading.id = heading.id || `dialog-title-${++uid}`;
                card.setAttribute('aria-labelledby', heading.id);
            }
        });
        document.querySelectorAll('.input-group').forEach(group => {
            const label = group.querySelector('label');
            const field = group.querySelector('input, select, textarea');
            if (label && field) {
                field.id = field.id || `field-${++uid}`;
                label.setAttribute('for', field.id);
            }
        });
    }

    function closeTopDialog() {
        const open = [...document.querySelectorAll('.modal-overlay:not(.hidden):not(.confirm-overlay)')].pop();
        if (!open) return;
        if (open.id === 'not-found-view') window.closeNotFound?.();
        else window.closeModal?.(open.id);
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTopDialog(); });
    document.addEventListener('mousedown', e => {
        if (e.target.classList?.contains('modal-overlay') && !e.target.classList.contains('confirm-overlay')) closeTopDialog();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { enhancePasswordFields(); enhanceDialogs(); });
    } else {
        enhancePasswordFields();
        enhanceDialogs();
    }
})();

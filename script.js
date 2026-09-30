// Initialize Lucide Icons
lucide.createIcons();

// ==========================================================
// TABLE OF CONTENTS (search for the number-less titles below)
//   1. MESSAGES ............ all alert / toast / validation text
//   2. SUPABASE ............ cloud database client, loading, live updates
//   3. STATE ............... app-wide variables
//   4. STARTUP & ROUTING ... page load, 404 view
//   5. STORAGE SETUP ....... one-time cleanup of old local data
//   6. NAVIGATION .......... tabs, categories, search
//   7. AUTHENTICATION ...... login, register, forgot, logout
//   8. RATINGS & PROFILES .. seller profile, star ratings
//   9. PRODUCTS ............ grid, wishlist, sell (step-by-step), edit, delete
//  10. CHAT ................ conversations and messages
//  11. MODALS .............. open / close dialogs
//  12. TEAM ................ developers popup (edit names here)
// ==========================================================

// ==========================================================
// 1. MESSAGES - EDIT ALERT / TOAST / ERROR TEXT HERE
//    (functions take values like names and return the text)
// ==========================================================
const MESSAGES = {
    // --- Success toasts ---
    accountCreated: 'Account successfully created!',
    resetSent: 'Password reset.',
    welcome: name => `Welcome back, ${name}!`,
    listingPublished: 'Listing published successfully!',
    listingUpdated: title => `"${title}" was updated.`,
    messageEdited: 'Message updated.',
    rated: (seller, score) => `You rated ${seller} ${score} ${score === 1 ? 'star' : 'stars'}.`,
    ratingUpdated: (seller, score) => `Updated your rating for ${seller} to ${score} ${score === 1 ? 'star' : 'stars'}.`,
    ratingRemoved: seller => `Removed your rating for ${seller}.`,

    listingSubmitted: 'Listing submitted! It will appear on the marketplace once an admin approves it.',
    reportSent: name => `Your report about ${name} was sent to the admins.`,
    listingApproved: title => `"${title}" was approved.`,
    listingRejected: title => `"${title}" was rejected.`,
    accountUpdated: name => `Account "${name}" was updated.`,
    accountDeleted: name => `Account "${name}" was deleted.`,

    emailVerified: 'Email verified! You can now sign in.',
    passwordChanged: 'Password changed. Sign in with your new password.',

    verifySent: email => `Account created! We sent a verification link to ${email}. Verify your email, then sign in.`,
    verifyFirst: email => `Please verify your email first. We sent a new verification link to ${email}.`,
    accountUpgraded: email => `We upgraded your account security. Verify your email using the link sent to ${email}, then sign in with the same password.`,
    resetLinkSent: email => `Password reset link sent to ${email}.`,

    // --- Info toasts ---
    wishlistAdded: 'Added to Wishlist',
    wishlistRemoved: 'Removed from Wishlist',
    statusChanged: status => `Item marked as ${status}`,
    listingRemoved: title => `"${title}" was removed.`,
    chatOpened: owner => `Conversation opened with ${owner}`,
    newMessage: name => `New message from ${name}`,
    unreadSummary: count => `You have ${count} unread ${count === 1 ? 'message' : 'messages'}.`,
    messageDeleted: 'Message deleted.',
    chatDeleted: name => `Conversation with ${name} deleted.`,

    // --- Error toasts ---
    loginFailed: 'Login failed. Check your username, email and password.',
    loadFailed: reason => 'Could not load data: ' + reason,
    saveFailed: reason => 'Could not save data: ' + reason,
    cannotRateSelf: 'You cannot rate yourself!',
    cannotBuyOwn: 'You cannot buy or message your own listing!',
    cannotEditOthers: 'You can only edit listings that you posted.',
    notApproved: 'This listing has not been approved yet.',
    accountSuspended: 'This account has been suspended. Contact an admin.',
    noChanges: 'No changes to save.',
    signInToPublish: 'Please sign in to publish a listing.',
    imageProcessFailed: 'Failed to process selected image.',
    imageReadFailed: 'Failed to read image file.',

    // --- Ratings ---
    noRatings: 'No ratings yet',
    noReviews: 'No written reviews yet.',

    // --- Empty listing messages ---
    emptyMarket: 'No items have been posted yet. Be the first to sell something!',
    emptyFilter: 'No products found under your filter criteria.',

    // --- Loading button labels ---
    loading: {
        publishing: 'Publishing...',
        sending: 'Sending...',
        saving: 'Saving...',
        signingIn: 'Signing in...',
        creating: 'Creating account...'
    },

    // --- Confirmation dialogs (delete, sign out) ---
    confirm: {
        deleteTitle: 'Permanently delete this listing?',
        deleteBody: title => `You are about to delete "${title}".`,
        deleteWarnings: [
            'This cannot be undone. The listing can never be restored.',
        ],
        deleteYes: 'Delete forever',
        logoutTitle: 'Sign out?',
        logoutBody: 'You will need to sign in again to buy, sell or chat.',
        logoutYes: 'Sign out',
        deleteMessageTitle: 'Delete this message?',
        deleteMessageBody: 'This message will be removed from the conversation for both of you.',
        deleteMessageYes: 'Delete message',
        deleteChatTitle: 'Delete this conversation?',
        deleteChatBody: name => `The conversation with ${name} will be removed from your Messages. ${name} keeps their own copy.`,
        deleteChatYes: 'Delete conversation',
        removeRatingTitle: 'Remove your rating?',
        removeRatingBody: name => `Your rating and review for ${name} will be deleted.`,
        removeRatingYes: 'Remove rating',
        cancel: 'Cancel'
    },

    // --- Form field errors (shown in red under each input) ---
    val: {
        loginEmail: 'Enter your username or email.',
        loginPassword: 'Enter your password.',
        loginInvalid: 'Incorrect password. Please try again.',
        loginNoAccount: 'No account found with this username or email. Create an account first.',
        regName: 'Username is required.',
        regNameInvalid: 'Use 3-20 letters, numbers, dots or underscores (no spaces).',
        regEmailEmpty: 'Email is required.',
        regEmailInvalid: 'Enter a valid email address.',
        regEmailTaken: 'An account with this email already exists. Try logging in.',
        regNameTaken: 'This username is already taken. Please choose another.',
        regPasswordEmpty: 'Password is required.',
        regPasswordShort: 'Password must be at least 6 characters.',
        recoveryEmpty: 'Enter the recovery code you received when you created your account.',
        recoveryWrong: 'Username/email and recovery code do not match. Ask an admin to reset your password if you lost your code.',
        passwordMismatch: 'Passwords do not match.',
        forgotEmail: 'Enter your email or username.',
        prodName: 'Item name is required.',
        prodCategory: 'Please choose a category.',
        prodFileEmpty: 'Please select an image.',
        prodFileType: 'File must be an image.',
        prodDesc: 'Add a short description.',
        chatEmpty: 'A message cannot be empty.',
        ratingEmpty: 'Choose a star rating from 1 to 5.',
        reportReason: 'Please choose a reason.',
        accNameTaken: 'Another account already uses this username.',
        accEmailTaken: 'Another account already uses this email.',
        accPasswordNeeded: 'Set a new password when changing the email (min. 6 characters).'
    }
};

// ==========================================
// 2. SUPABASE - cloud database (products, chats, ratings)
//    Table structure lives in supabase.sql - run it once in the
//    Supabase SQL editor before using the app.
// ==========================================
const SUPABASE_URL = 'https://ccddwcttkggrrdpeuukc.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_6gPwDTyYs28u1jvnB1UQ_w_R7o9wOMs';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Only the signed-in user and the wishlist stay in this browser;
// everything else is shared through Supabase.
const STORAGE_KEYS = {
    user: 'dlsau_user',
    wishlist: 'dlsau_wishlist'
};

// Database rows use snake_case, the rest of the app uses camelCase
const rowToProduct = r => ({
    id: r.id,
    title: r.title,
    category: r.category,
    desc: r.description,
    owner: r.owner,
    status: r.status,
    img: r.image,
    approval: r.approval || 'approved',
    rejectReason: r.reject_reason || '',
    createdAt: r.created_at
});

const rowToAccount = r => ({
    id: r.id,
    name: r.name,
    email: r.email,
    passHash: r.pass_hash,
    recoveryHash: r.recovery_hash,
    suspended: !!r.suspended,
    createdAt: r.created_at
});

const rowToNotification = r => ({
    id: r.id,
    recipient: r.recipient,
    type: r.type,
    title: r.title,
    body: r.body || '',
    read: !!r.read,
    createdAt: r.created_at
});

const rowToReport = r => ({
    id: r.id,
    reporter: r.reporter,
    reportedUser: r.reported_user,
    itemTitle: r.item_title || '',
    reason: r.reason,
    details: r.details || '',
    transcript: r.transcript || [],
    status: r.status,
    createdAt: r.created_at
});

const rowToChat = r => ({
    id: r.id,
    buyerName: r.buyer_name,
    sellerName: r.seller_name,
    itemTitle: r.item_title,
    messages: r.messages || [],
    deletedBy: r.deleted_by || {},
    seen: r.seen || {}
});

const rowToRating = r => ({
    id: r.id,
    targetUser: r.target_user,
    ratedBy: r.rated_by,
    rating: r.rating,
    comment: r.comment,
    updatedAt: r.updated_at
});

// Temporary local id (the database assigns the real one on insert)
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

async function loadProducts() {
    const { data, error } = await db.from('products').select('*').order('created_at', { ascending: false });
    if (error) {
        console.error('Supabase products error:', error);
        showToast(MESSAGES.loadFailed(error.message), 'error');
        return;
    }
    products = (data || []).map(rowToProduct);
    renderProducts();
    renderWishlist();
    if (currentUser && currentUser.role === 'Admin') renderAdmin();
    if (activeChatId) renderChatMessages();
}

async function loadChats() {
    // Don't wipe the bubble a person is currently editing
    if (editingMsgIndex !== null) return;

    const { data, error } = await db.from('chats').select('*').order('created_at', { ascending: true });
    if (error) {
        console.error('Supabase chats error:', error);
        showToast(MESSAGES.loadFailed(error.message), 'error');
        return;
    }
    globalChats = (data || []).map(rowToChat);

    if (currentUser) {
        renderChatThreads();
        if (activeChatId) renderChatMessages();
    }
}

async function loadRatings() {
    const { data, error } = await db.from('ratings').select('*');
    if (error) {
        console.error('Supabase ratings error:', error);
        showToast(MESSAGES.loadFailed(error.message), 'error');
        return;
    }
    allRatings = (data || []).map(rowToRating);
    refreshChatRatePanel();
    updateMyProfileRatingDisplay();
    if (currentTargetSeller) renderSellerModalRating(currentTargetSeller);
    renderProducts();
    renderWishlist();
}

async function loadNotifications() {
    if (!currentUser || currentUser.role === 'Admin') return;
    const { data, error } = await db.from('notifications').select('*').eq('recipient', currentUser.name).order('created_at', { ascending: false }).limit(50);
    if (error) { console.error('Supabase notifications error:', error); return; }
    const fresh = (data || []).map(rowToNotification);
    if (notifications !== null) {
        const known = new Set(notifications.map(n => n.id));
        fresh.filter(n => !known.has(n.id) && !n.read).forEach(n => showToast(n.body ? `${n.title} ${n.body}` : n.title, n.type === 'rejected' ? 'warning' : 'success', 'Listing review'));
    } else {
        const unread = fresh.filter(n => !n.read).length;
        if (unread) showToast(`You have ${unread} unread ${unread === 1 ? 'notification' : 'notifications'}.`, 'info');
    }
    notifications = fresh;
    renderNotifications();
}

async function loadAdminData() {
    if (!currentUser || currentUser.role !== 'Admin') return;
    const [acc, rep] = await Promise.all([
        db.from('accounts').select('*').order('created_at', { ascending: false }),
        db.from('reports').select('*').order('created_at', { ascending: false })
    ]);
    if (acc.error) console.error('Supabase accounts error:', acc.error);
    else adminAccounts = (acc.data || []).map(rowToAccount);
    if (rep.error) console.error('Supabase reports error:', rep.error);
    else adminReports = (rep.data || []).map(rowToReport);
    renderAdmin();
}

// Push a single chat row back to the database (messages + hidden markers)
async function saveChatToDb(chat) {
    const { error } = await db.from('chats')
        .update({ messages: chat.messages, deleted_by: chat.deletedBy || {} })
        .eq('id', chat.id);
    return error ? error.message : null;
}

function showLoadingState() {
    const grid = document.getElementById('product-grid');
    if (grid) grid.innerHTML = skeletonCards(6);
    const stats = document.getElementById('admin-stats');
    if (stats) stats.innerHTML = Array.from({ length: 3 }, () => '<div class="admin-stat skeleton-stat" aria-hidden="true"><div class="skeleton sk-icon"></div><div class="sk-col"><div class="skeleton sk-line w50"></div><div class="skeleton sk-line"></div></div></div>').join('');
    const panel = document.getElementById('admin-panel');
    if (panel) { panel.dataset.tab = ''; panel.innerHTML = '<div class="skeleton sk-line"></div><div class="skeleton sk-row"></div><div class="skeleton sk-row"></div><div class="skeleton sk-row"></div>'; }
}


// Live updates: any insert/update/delete refreshes that part of the screen
let realtimeChannel = null;

function subscribeToRealtime() {
    if (realtimeChannel) return;
    realtimeChannel = db.channel('marketplace-live')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, () => loadProducts())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'chats' }, () => loadChats())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'ratings' }, () => loadRatings())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'notifications' }, () => loadNotifications())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'accounts' }, () => loadAdminData())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'reports' }, () => loadAdminData())
        .subscribe(status => {
            if (status === 'CHANNEL_ERROR') {
                console.warn('Live updates unavailable - the app still works, refresh to see new data.');
            }
        });
}

// ==========================================================
// 3. STATE - app-wide variables
// ==========================================================
let currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.user)) || null;

let products = [];
let globalChats = [];
let allRatings = [];
let activeChatId = null;
let selectedCategory = 'All';
let searchQuery = '';
let currentTargetSeller = null;
let notifications = null;
let adminAccounts = [];
let adminReports = [];
let adminTab = 'pending';
let adminSearch = '';
let wishlist = [];

function wishlistKey() {
    return `${STORAGE_KEYS.wishlist}:${currentUser ? currentUser.name.toLowerCase() : ''}`;
}

function loadWishlist() {
    if (!currentUser) return [];
    try { return JSON.parse(localStorage.getItem(wishlistKey())) || []; } catch (err) { return []; }
}

function saveWishlist() {
    if (currentUser) localStorage.setItem(wishlistKey(), JSON.stringify(wishlist));
}

// ==========================================================
// 4. STARTUP - runs when the page loads
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    initStorage();
    if (currentUser) {
        initUserSession();
    }
    setupCategoryListeners();
    setupSearchListener();
    setupRouting();
    renderTeam();
    setupUploadWizard();
    setupEditListing();
});

// ==========================================================
// 4. ROUTING - page address and 404 view
// ==========================================================
const KNOWN_VIEWS = ['home', 'chat', 'wishlist', 'admin'];

function setupRouting() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

function handleRoute() {
    const overlay = document.getElementById('not-found-view');
    if (!overlay) return;

    const route = location.hash.replace(/^#\/?/, '').toLowerCase();

    if (!route || route.includes('=')) {
        overlay.classList.add('hidden');
        return;
    }

    if (KNOWN_VIEWS.includes(route)) {
        overlay.classList.add('hidden');
        if (currentUser && (route !== 'admin' || currentUser.role === 'Admin')) switchMainTab(route);
    } else {
        overlay.classList.remove('hidden');
    }
}

function closeNotFound() {
    history.replaceState(null, '', location.pathname + location.search);
    document.getElementById('not-found-view').classList.add('hidden');
}

// UI FEEDBACK: showToast, validateForm and failForm live in feedback.js

// ==========================================================
// 5. STORAGE SETUP - one-time cleanup of the old local data
//    (products, chats and ratings now live in Supabase)
// ==========================================================
const LEGACY_LOCAL_KEYS = [
    'dlsau_products', 'dlsau_chats', 'dlsau_ratings',
    'dlsau_categories_v2', 'dlsau_samples_removed', 'dlsau_wishlist'
];

function initStorage() {
    LEGACY_LOCAL_KEYS.forEach(key => localStorage.removeItem(key));
}

// ==========================================================
// 4. STARTUP - load saved data from Supabase
// ==========================================================
// Green progress bar at the very top of the page while data loads after sign-in
let progressTimer = null;
function startTopProgress() {
    const bar = document.getElementById('top-progress');
    const fill = document.getElementById('top-progress-fill');
    clearInterval(progressTimer);
    bar.classList.remove('hidden', 'done');
    let pct = 8;
    fill.style.width = pct + '%';
    progressTimer = setInterval(() => {
        pct += (90 - pct) * 0.12;
        fill.style.width = pct + '%';
    }, 180);
}

function finishTopProgress() {
    const bar = document.getElementById('top-progress');
    clearInterval(progressTimer);
    document.getElementById('top-progress-fill').style.width = '100%';
    bar.classList.add('done');
    setTimeout(() => { bar.classList.add('hidden'); bar.classList.remove('done'); }, 450);
}

function skeletonCards(n) {
    return Array.from({ length: n }, () => `
        <div class="glass-card card skeleton-card" aria-hidden="true">
            <div class="skeleton sk-img"></div>
            <div class="skeleton sk-line w70"></div>
            <div class="skeleton sk-line"></div>
            <div class="skeleton sk-line w50"></div>
            <div class="skeleton sk-btn"></div>
        </div>`).join('');
}

async function startDataListeners() {
    showLoadingState();
    startTopProgress();
    subscribeToRealtime();
    try {
        await Promise.all([loadProducts(), loadChats(), loadRatings(), loadNotifications(), loadAdminData()]);
    } finally {
        finishTopProgress();
    }
}


// ==========================================================
// 6. NAVIGATION - Home / Messages / Wishlist tabs
// ==========================================================
function switchMainTab(tabName) {
    const homeView = document.getElementById('tab-home-view');
    const chatView = document.getElementById('tab-chat-view');
    const wishlistView = document.getElementById('tab-wishlist-view');
    const adminView = document.getElementById('tab-admin-view');
    
    const navHome = document.getElementById('nav-home');
    const navChat = document.getElementById('nav-chat');
    const navWishlist = document.getElementById('nav-wishlist');
    
    const mobNavHome = document.getElementById('mob-nav-home');
    const mobNavChat = document.getElementById('mob-nav-chat');
    const mobNavWishlist = document.getElementById('mob-nav-wishlist');

    homeView.classList.add('hidden');
    chatView.classList.add('hidden');
    wishlistView.classList.add('hidden');
    adminView.classList.add('hidden');
    document.getElementById('mob-nav-admin')?.classList.remove('active');
    document.getElementById('admin-badge-btn')?.classList.remove('active-tab');
    if (tabName === 'admin' && (!currentUser || currentUser.role !== 'Admin')) tabName = 'home';
    else if (isAdminUser()) tabName = 'admin';
    
    navHome.classList.remove('active');
    navChat.classList.remove('active');
    navWishlist.classList.remove('active');
    
    mobNavHome?.classList.remove('active');
    mobNavChat?.classList.remove('active');
    mobNavWishlist?.classList.remove('active');

    if (tabName === 'home') {
        homeView.classList.remove('hidden');
        navHome.classList.add('active');
        mobNavHome?.classList.add('active');
    } else if (tabName === 'chat') {
        chatView.classList.remove('hidden');
        navChat.classList.add('active');
        mobNavChat?.classList.add('active');
        
        const userChats = getUserChats();
        const activeExists = userChats.some(c => c.id === activeChatId);
        
        if (!activeExists && userChats.length > 0) {
            activeChatId = userChats[0].id;
        } else if (userChats.length === 0) {
            activeChatId = null;
        }

        renderChatThreads();
        if (activeChatId) {
            selectChatThread(activeChatId);
        } else {
            document.getElementById('chat-empty-view').classList.remove('hidden');
            document.getElementById('chat-active-view').classList.add('hidden');
        }
    } else if (tabName === 'admin') {
        adminView.classList.remove('hidden');
        document.getElementById('mob-nav-admin')?.classList.add('active');
        document.getElementById('admin-badge-btn')?.classList.add('active-tab');
        loadAdminData();
        renderAdmin();
    } else if (tabName === 'wishlist') {
        wishlistView.classList.remove('hidden');
        navWishlist.classList.add('active');
        mobNavWishlist?.classList.add('active');
        renderWishlist();
    }
}

// ==========================================================
// 6. NAVIGATION - categories and search
// ==========================================================
function setupCategoryListeners() {
    const items = document.querySelectorAll('#category-filter-list .category-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            selectedCategory = item.getAttribute('data-category');
            document.getElementById('current-category-title').innerText = selectedCategory === 'All' ? 'Market Listings' : `${selectedCategory} Listings`;
            renderProducts();
        });
    });
}

function setupSearchListener() {
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
    });
}

// ==========================================================
// 7. AUTHENTICATION - login, register, forgot, logout
// ==========================================================
const AUTH_ORDER = ['login', 'register', 'forgot'];

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-card form').forEach(clearFormErrors);
    const forms = {
        login: document.getElementById('login-form'),
        register: document.getElementById('register-form'),
        forgot: document.getElementById('forgot-form')
    };
    const tabsContainer = document.getElementById('auth-tabs-container');
    const tabs = document.querySelectorAll('.tab-btn');
    const card = document.querySelector('.auth-card');

    const current = AUTH_ORDER.find(name => !forms[name].classList.contains('hidden'));
    const next = forms[tab] ? tab : 'login';
    card.dataset.view = next;

    // Tab buttons and the sliding pill
    tabsContainer.style.display = next === 'forgot' ? 'none' : 'flex';
    tabsContainer.dataset.tab = next;
    tabs[0].classList.toggle('active', next === 'login');
    tabs[1].classList.toggle('active', next === 'register');

    const showOnly = name => AUTH_ORDER.forEach(n => forms[n].classList.toggle('hidden', n !== name));

    const animate = current && current !== next
        && !document.getElementById('auth-overlay').classList.contains('hidden')
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!animate) {
        showOnly(next);
        return;
    }

    // Slide direction: forward (login -> create account) moves left, backward moves right
    const dir = AUTH_ORDER.indexOf(next) > AUTH_ORDER.indexOf(current) ? 1 : -1;
    const ease = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
    const oldForm = forms[current];
    const newForm = forms[next];
    const startHeight = card.offsetHeight;

    authSwitchToken = (authSwitchToken || 0) + 1;
    const token = authSwitchToken;
    card.style.pointerEvents = 'none';

    oldForm.animate(
        [{ opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: `translateX(${-24 * dir}px)` }],
        { duration: 160, easing: 'ease-in', fill: 'forwards' }
    ).finished.then(() => {
        if (token !== authSwitchToken) return;
        showOnly(next);
        oldForm.getAnimations().forEach(a => a.cancel());
        const endHeight = card.offsetHeight;

        card.style.overflow = 'hidden';
        card.animate([{ height: startHeight + 'px' }, { height: endHeight + 'px' }], { duration: 280, easing: ease })
            .finished.finally(() => { card.style.overflow = ''; card.style.pointerEvents = ''; });
        newForm.animate(
            [{ opacity: 0, transform: `translateX(${24 * dir}px)` }, { opacity: 1, transform: 'translateX(0)' }],
            { duration: 280, easing: ease }
        );
    }).catch(() => { showOnly(next); card.style.pointerEvents = ''; });
}
let authSwitchToken = 0;

// Accounts created with "Create Account" (username, email, password) are remembered in
// this browser so the same person can log in with their username or their email.
// Passwords are stored as a salted SHA-256 hash, never as plain text.
// Note: account.name holds the username, which is the name shown across the app.
const ACCOUNTS_KEY = 'dlsau_accounts';
const ADMIN_LOGIN = { username: 'admin', password: 'admin' };

function loadAccounts() {
    try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) || []; } catch (err) { return []; }
}

function saveAccounts(accounts) {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

async function hashPassword(password, salt) {
    const text = `${salt.toLowerCase()}::${password}`;
    if (!window.crypto || !crypto.subtle) return 'plain:' + btoa(unescape(encodeURIComponent(text)));
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(bytes)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Accounts live in Supabase (so the admin can manage them). Accounts that were created
// earlier in this browser are copied up the first time they are seen. If the table is
// not available the app falls back to this browser's local list.
async function getAccounts() {
    const local = loadAccounts();
    const { data, error } = await db.from('accounts').select('*');
    if (error) {
        console.error('Supabase accounts error:', error);
        return { list: local, remote: false };
    }
    const list = (data || []).map(rowToAccount);
    const missing = local.filter(a => !list.some(r => r.email.toLowerCase() === a.email.toLowerCase() || r.name.toLowerCase() === a.name.toLowerCase()));
    if (missing.length) {
        const { data: added } = await db.from('accounts').insert(missing.map(a => ({ name: a.name, email: a.email, pass_hash: a.passHash, recovery_hash: a.recoveryHash || null }))).select();
        (added || []).forEach(r => list.push(rowToAccount(r)));
    }
    return { list, remote: true };
}

function findAccount(list, identifier) {
    const id = identifier.trim().toLowerCase();
    return list.find(a =>
        a.email.toLowerCase() === id ||
        a.name.toLowerCase() === id
    );
}

function initialsOf(name) {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    const letters = parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : name.trim().substring(0, 2);
    return (letters || 'US').toUpperCase();
}

function startSession(user) {
    currentUser = user;
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(currentUser));
    initUserSession();
}

async function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const identifier = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value.trim();

    if (!validateForm(form, [
        ['login-email', v => v ? '' : MESSAGES.val.loginEmail],
        ['login-password', v => v ? '' : MESSAGES.val.loginPassword]
    ])) return;

    const btn = form.querySelector('button[type="submit"]');
    setButtonLoading(btn, true, MESSAGES.loading.signingIn);

    // Only the built-in admin and accounts created with "Create Account" can sign in
    const { list } = await getAccounts();
    const account = findAccount(list, identifier);
    let user = null;
    let failField = 'login-password';
    let failMessage = MESSAGES.val.loginInvalid;

    if (account) {
        const hash = await hashPassword(pass, account.email);
        if (hash === account.passHash && account.suspended) {
            setButtonLoading(btn, false);
            failForm(form, 'login-email', MESSAGES.accountSuspended);
            showToast(MESSAGES.accountSuspended, 'error');
            return;
        }
        if (hash === account.passHash) {
            user = { name: account.name, email: account.email, role: 'Member', initials: initialsOf(account.name) };
        }
    } else if (identifier.toLowerCase() === ADMIN_LOGIN.username && pass === ADMIN_LOGIN.password) {
        user = { name: 'Admin', email: identifier, role: 'Admin', initials: 'AD' };
    } else {
        failField = 'login-email';
        failMessage = MESSAGES.val.loginNoAccount;
    }

    setButtonLoading(btn, false);
    if (!user) {
        failForm(form, failField, failMessage);
        showToast(MESSAGES.loginFailed, 'error');
        return;
    }
    startSession(user);
}

let pendingRegistration = null;
let pendingSessionUser = null;

async function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    if (!validateForm(form, [
        ['reg-name', v => !v ? MESSAGES.val.regName : /^[A-Za-z0-9._]{3,20}$/.test(v) ? '' : MESSAGES.val.regNameInvalid],
        ['reg-email', v => !v ? MESSAGES.val.regEmailEmpty : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : MESSAGES.val.regEmailInvalid],
        ['reg-password', v => !v ? MESSAGES.val.regPasswordEmpty : v.length < 6 ? MESSAGES.val.regPasswordShort : '']
    ])) return;

    pendingRegistration = { form, name, email, password };
    openLegal('terms', true);
}

// Random recovery code, shown once when the account is created (used to reset a forgotten password)
function makeRecoveryCode() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const bytes = crypto.getRandomValues(new Uint8Array(10));
    const code = Array.from(bytes, b => alphabet[b % alphabet.length]).join('');
    return `${code.slice(0, 5)}-${code.slice(5)}`;
}

const recoveryHashOf = (code, email) => hashPassword(code.replace(/[\s-]/g, '').toUpperCase(), `recovery:${email}`);

async function createAccount({ form, name, email, password }) {
    const btn = form.querySelector('button[type="submit"]');
    setButtonLoading(btn, true, MESSAGES.loading.creating);

    const { list: accounts, remote } = await getAccounts();
    if (accounts.some(a => a.email.toLowerCase() === email.toLowerCase())) {
        setButtonLoading(btn, false);
        failForm(form, 'reg-email', MESSAGES.val.regEmailTaken);
        return;
    }
    if (accounts.some(a => a.name.toLowerCase() === name.toLowerCase()) || name.toLowerCase() === 'admin') {
        setButtonLoading(btn, false);
        failForm(form, 'reg-name', MESSAGES.val.regNameTaken);
        return;
    }

    const passHash = await hashPassword(password, email);
    const code = makeRecoveryCode();
    const recoveryHash = await recoveryHashOf(code, email);

    if (remote) {
        const { error } = await db.from('accounts').insert({ name, email, pass_hash: passHash, recovery_hash: recoveryHash });
        if (error) {
            setButtonLoading(btn, false);
            showToast(MESSAGES.saveFailed(error.message), 'error');
            return;
        }
    } else {
        const local = loadAccounts();
        local.push({ name, email, passHash, recoveryHash });
        saveAccounts(local);
    }
    setButtonLoading(btn, false);

    form.reset();
    pendingSessionUser = { name, email, role: 'Member', initials: initialsOf(name) };
    document.getElementById('recovery-code').textContent = code;
    openModal('recovery-modal');
}

function copyRecoveryCode() {
    const code = document.getElementById('recovery-code').textContent;
    navigator.clipboard?.writeText(code).then(() => showToast('Recovery code copied.', 'success'), () => {});
}

function continueAfterRecovery() {
    closeModal('recovery-modal');
    document.getElementById('recovery-code').textContent = '';
    if (!pendingSessionUser) return;
    const user = pendingSessionUser;
    pendingSessionUser = null;
    startSession(user);
    showToast(MESSAGES.accountCreated);
}

// Forgot password: username/email + recovery code + new password (no email needed)
async function handleForgotPassword(e) {
    e.preventDefault();
    const form = e.target;
    const identifier = document.getElementById('forgot-email').value.trim();
    const code = document.getElementById('forgot-code').value.trim();
    const pass = document.getElementById('forgot-password').value.trim();

    if (!validateForm(form, [
        ['forgot-email', v => v ? '' : MESSAGES.val.forgotEmail],
        ['forgot-code', v => v ? '' : MESSAGES.val.recoveryEmpty],
        ['forgot-password', v => !v ? MESSAGES.val.regPasswordEmpty : v.length < 6 ? MESSAGES.val.regPasswordShort : ''],
        ['forgot-confirm', v => v === pass ? '' : MESSAGES.val.passwordMismatch]
    ])) return;

    const btn = form.querySelector('button[type="submit"]');
    setButtonLoading(btn, true, MESSAGES.loading.saving);
    const { list, remote } = await getAccounts();
    const account = findAccount(list, identifier);
    const valid = account && account.recoveryHash && await recoveryHashOf(code, account.email) === account.recoveryHash;
    if (!valid) {
        setButtonLoading(btn, false);
        failForm(form, 'forgot-code', MESSAGES.val.recoveryWrong);
        return;
    }

    const passHash = await hashPassword(pass, account.email);
    if (remote) {
        const { error } = await db.from('accounts').update({ pass_hash: passHash }).eq('id', account.id);
        if (error) {
            setButtonLoading(btn, false);
            showToast(MESSAGES.saveFailed(error.message), 'error');
            return;
        }
    } else {
        saveAccounts(loadAccounts().map(a => a.email.toLowerCase() === account.email.toLowerCase() ? { ...a, passHash } : a));
    }
    setButtonLoading(btn, false);
    form.reset();
    switchAuthTab('login');
    showToast(MESSAGES.passwordChanged, 'success');
}

function initUserSession() {
    wishlist = loadWishlist();
    document.getElementById('auth-overlay').classList.add('hidden');
    document.getElementById('app-layout').classList.remove('hidden');

    document.getElementById('user-avatar').innerText = currentUser.initials;
    document.getElementById('prof-avatar').innerText = currentUser.initials;
    document.getElementById('user-display-name').innerText = currentUser.name;
    document.getElementById('prof-name').innerText = currentUser.name;
    document.getElementById('prof-email').innerText = currentUser.email;
    document.getElementById('user-role-label').innerText = currentUser.role;

    const admin = currentUser.role === 'Admin';
    document.getElementById('admin-badge-btn').style.display = admin ? 'inline-flex' : 'none';
    document.getElementById('mob-nav-admin')?.classList.toggle('hidden', !admin);
    document.getElementById('notif-btn').classList.toggle('hidden', admin);
    notifications = null;
    renderNotifications();
    document.getElementById('app-layout').classList.toggle('admin-mode', admin);
    if (admin) switchMainTab('admin');

    activeChatId = null;
    showToast(MESSAGES.welcome(currentUser.name));
    startDataListeners();
}

async function handleLogout() {
    const ok = await confirmDialog({
        title: MESSAGES.confirm.logoutTitle,
        message: MESSAGES.confirm.logoutBody,
        confirmText: MESSAGES.confirm.logoutYes,
        cancelText: MESSAGES.confirm.cancel,
        tone: 'warning',
        icon: 'logout'
    });
    if (!ok) return;
    currentUser = null;
    wishlist = [];
    activeChatId = null;
    prevUnread = null;
    paintUnreadBadges(0);
    document.getElementById('app-layout').classList.remove('admin-mode');
    currentTargetSeller = null;
    notifications = null;
    adminAccounts = [];
    adminReports = [];
    localStorage.removeItem(STORAGE_KEYS.user);

    document.getElementById('auth-overlay').classList.remove('hidden');
    document.getElementById('app-layout').classList.add('hidden');
    
    document.getElementById('login-form').reset();
    document.getElementById('register-form').reset();
    document.getElementById('forgot-form').reset();
    switchAuthTab('login');

    switchMainTab('home');
    closeModal('profile-modal');
    closeModal('seller-profile-modal');
}

// ==========================================================
// 8. RATINGS & PROFILES - account ratings and reviews
//    Ratings are stored per account name: { targetUser, ratedBy, rating 1-5, comment, updatedAt }
//    Each account can rate another account once (and edit or remove it later).
// ==========================================================
const STAR_PATH = '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>';

function starSVG(filled, size = 16) {
    return `<svg class="star ${filled ? 'filled' : ''}" viewBox="0 0 24 24" width="${size}" height="${size}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${STAR_PATH}</svg>`;
}

function starRowHTML(value, size = 16) {
    return Array.from({ length: 5 }, (_, i) => starSVG(i < Math.round(value), size)).join('');
}

function getUserRatingStats(username) {
    const list = allRatings.filter(r => r.targetUser === username);
    const counts = [0, 0, 0, 0, 0];
    list.forEach(r => { counts[r.rating - 1]++; });
    const sum = list.reduce((acc, r) => acc + r.rating, 0);
    return {
        average: list.length ? parseFloat((sum / list.length).toFixed(1)) : 0,
        count: list.length,
        counts,
        list: [...list].sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''))
    };
}

function renderRatingSummary(container, stats) {
    const bars = [5, 4, 3, 2, 1].map(n => {
        const pct = stats.count ? Math.round((stats.counts[n - 1] / stats.count) * 100) : 0;
        return `<div class="bar-row"><span>${n}</span>${starSVG(true, 11)}<div class="bar" role="img" aria-label="${stats.counts[n - 1]} ratings with ${n} stars"><span style="width:${pct}%"></span></div><em>${stats.counts[n - 1]}</em></div>`;
    }).join('');
    container.innerHTML = `
        <div class="summary-score">
            <strong>${stats.count ? stats.average.toFixed(1) : '--'}</strong>
            <div class="summary-stars" aria-hidden="true">${starRowHTML(stats.average, 16)}</div>
            <span class="summary-count">${stats.count ? `${stats.count} ${stats.count === 1 ? 'rating' : 'ratings'}` : MESSAGES.noRatings}</span>
        </div>
        <div class="summary-bars">${bars}</div>`;
    container.setAttribute('aria-label', stats.count ? `Average ${stats.average.toFixed(1)} out of 5 from ${stats.count} ratings` : MESSAGES.noRatings);
}

function renderReviewList(listEl, stats, highlightUser) {
    listEl.innerHTML = '';
    const reviews = stats.list.filter(r => r.comment).slice(0, 5);
    if (!reviews.length) {
        const li = document.createElement('li');
        li.className = 'review-empty';
        li.textContent = MESSAGES.noReviews;
        listEl.appendChild(li);
        return;
    }
    reviews.forEach(r => {
        const li = document.createElement('li');
        li.className = 'review-item';
        li.innerHTML = '<div class="review-top"><strong class="review-name"></strong><span class="review-stars" aria-hidden="true"></span><time class="review-date"></time></div><p class="review-text"></p>';
        li.querySelector('.review-name').textContent = r.ratedBy === highlightUser ? `${r.ratedBy} (You)` : r.ratedBy;
        li.querySelector('.review-stars').innerHTML = starRowHTML(r.rating, 12);
        const time = li.querySelector('.review-date');
        time.textContent = r.updatedAt ? new Date(r.updatedAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : '';
        if (r.updatedAt) time.dateTime = r.updatedAt;
        li.querySelector('.review-text').textContent = r.comment;
        listEl.appendChild(li);
    });
}

function updateMyProfileRatingDisplay() {
    if (!currentUser) return;
    const stats = getUserRatingStats(currentUser.name);
    renderRatingSummary(document.getElementById('my-rating-summary'), stats);
    renderReviewList(document.getElementById('my-reviews'), stats, currentUser.name);
    const roleLabel = document.getElementById('user-role-label');
    if (roleLabel) roleLabel.textContent = stats.count ? `${currentUser.role} \u00b7 ${stats.average.toFixed(1)} \u2605` : currentUser.role;
}

// ==========================================================
// 8. RATINGS & PROFILES - seller profile window and rating form
// ==========================================================
let pendingScore = 0;

function openSellerProfile(sellerName) {
    if (isAdminUser()) return;
    if (currentUser && sellerName === currentUser.name) {
        openModal('profile-modal');
        return;
    }

    currentTargetSeller = sellerName;
    const initials = sellerName ? sellerName.substring(0, 2).toUpperCase() : "SL";

    document.getElementById('seller-prof-avatar').innerText = initials;
    document.getElementById('seller-prof-name').innerText = sellerName;
    clearFormErrors(document.getElementById('rate-form'));

    renderSellerModalRating(sellerName);
    openModal('seller-profile-modal');
}

function openSellerProfileFromChat() {
    if (!activeChatId) return;
    const chat = globalChats.find(c => c.id === activeChatId);
    if (!chat) return;

    const isBuyer = chat.buyerName === currentUser.name;
    const partnerName = isBuyer ? chat.sellerName : chat.buyerName;
    openSellerProfile(partnerName);
}

function buildStarInput() {
    const group = document.getElementById('star-input');
    if (!group || group.children.length) return;
    for (let n = 1; n <= 5; n++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'star-btn';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-label', `${n} ${n === 1 ? 'star' : 'stars'}`);
        btn.dataset.value = n;
        btn.innerHTML = starSVG(false, 28);
        btn.addEventListener('click', () => setPendingScore(n));
        btn.addEventListener('mouseenter', () => paintStarInput(n));
        btn.addEventListener('focus', () => paintStarInput(n));
        btn.addEventListener('keydown', e => {
            const move = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[e.key];
            if (!move) return;
            e.preventDefault();
            const next = Math.min(5, Math.max(1, (pendingScore || n) + move));
            setPendingScore(next);
            group.children[next - 1].focus();
        });
        group.appendChild(btn);
    }
    group.addEventListener('mouseleave', () => paintStarInput(pendingScore));
    group.addEventListener('focusout', () => paintStarInput(pendingScore));
}

function paintStarInput(upTo) {
    [...document.getElementById('star-input').children].forEach((btn, i) => {
        btn.firstElementChild.classList.toggle('filled', i < upTo);
    });
}

function setPendingScore(score) {
    pendingScore = score;
    const group = document.getElementById('star-input');
    clearFormErrors(document.getElementById('rate-form'));
    [...group.children].forEach((btn, i) => {
        btn.setAttribute('aria-checked', String(i + 1 === score));
        btn.tabIndex = (score ? i + 1 === score : i === 0) ? 0 : -1;
    });
    paintStarInput(score);
}

function renderSellerModalRating(sellerName) {
    buildStarInput();
    const stats = getUserRatingStats(sellerName);
    renderRatingSummary(document.getElementById('seller-rating-summary'), stats);
    renderReviewList(document.getElementById('seller-reviews'), stats, currentUser && currentUser.name);

    const mine = currentUser && allRatings.find(r => r.targetUser === sellerName && r.ratedBy === currentUser.name);
    setPendingScore(mine ? mine.rating : 0);
    const comment = document.getElementById('rate-comment');
    comment.value = mine && mine.comment ? mine.comment : '';
    document.getElementById('rate-comment-count').textContent = comment.value.length;
    document.getElementById('rate-submit-btn').textContent = mine ? 'Update rating' : 'Submit rating';
    document.getElementById('rate-remove-btn').classList.toggle('hidden', !mine);
}

// Saves (or updates) the current user's rating of another account. Returns true on success.
async function saveRating(target, score, comment) {
    if (isAdminUser()) return false;
    const existing = allRatings.find(r => r.targetUser === target && r.ratedBy === currentUser.name);
    const now = new Date().toISOString();

    // One rating per account pair - the unique key in the database enforces it
    const { error } = await db.from('ratings').upsert({
        target_user: target,
        rated_by: currentUser.name,
        rating: score,
        comment: comment || null,
        updated_at: now
    }, { onConflict: 'target_user,rated_by' });

    if (error) {
        showToast(MESSAGES.saveFailed(error.message), 'error');
        return false;
    }

    if (existing) {
        existing.rating = score;
        existing.comment = comment;
        existing.updatedAt = now;
    } else {
        allRatings.push({
            id: generateId(),
            targetUser: target,
            ratedBy: currentUser.name,
            rating: score,
            comment: comment,
            updatedAt: now
        });
    }

    showToast(existing ? MESSAGES.ratingUpdated(target, score) : MESSAGES.rated(target, score), 'success');
    if (target === currentTargetSeller) renderSellerModalRating(target);
    updateMyProfileRatingDisplay();
    renderProducts();
    renderWishlist();
    refreshChatRatePanel();
    return true;
}

// ==========================================================
// 10. CHAT - quick rating of the person you are chatting with
//     Button + popover in the chat header. Uses the same saveRating() as the profile popup.
// ==========================================================
let pendingChatScore = 0;

function getChatPartnerName() {
    const chat = globalChats.find(c => c.id === activeChatId);
    if (!chat || !currentUser) return null;
    return chat.buyerName === currentUser.name ? chat.sellerName : chat.buyerName;
}

function getChatPartnerRole() {
    const chat = globalChats.find(c => c.id === activeChatId);
    if (!chat || !currentUser) return 'user';
    return chat.buyerName === currentUser.name ? 'seller' : 'buyer';
}

function paintChatStars(upTo) {
    [...document.getElementById('chat-star-input').children].forEach((btn, i) => {
        btn.firstElementChild.classList.toggle('filled', i < upTo);
    });
}

function setChatScore(score) {
    pendingChatScore = score;
    document.getElementById('chat-rate-error').classList.add('hidden');
    [...document.getElementById('chat-star-input').children].forEach((btn, i) => {
        btn.setAttribute('aria-checked', String(i + 1 === score));
        btn.tabIndex = (score ? i + 1 === score : i === 0) ? 0 : -1;
    });
    paintChatStars(score);
}

function buildChatStarInput() {
    const group = document.getElementById('chat-star-input');
    if (!group || group.children.length) return;
    for (let n = 1; n <= 5; n++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'star-btn';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-label', `${n} ${n === 1 ? 'star' : 'stars'}`);
        btn.innerHTML = starSVG(false, 28);
        btn.addEventListener('click', () => setChatScore(n));
        btn.addEventListener('mouseenter', () => paintChatStars(n));
        btn.addEventListener('focus', () => paintChatStars(n));
        btn.addEventListener('keydown', e => {
            const move = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[e.key];
            if (!move) return;
            e.preventDefault();
            const next = Math.min(5, Math.max(1, (pendingChatScore || n) + move));
            setChatScore(next);
            group.children[next - 1].focus();
        });
        group.appendChild(btn);
    }
    group.addEventListener('mouseleave', () => paintChatStars(pendingChatScore));
    group.addEventListener('focusout', () => paintChatStars(pendingChatScore));
}

// Keeps the header button label and the popover text in sync with the ratings data
function refreshChatRatePanel() {
    const btn = document.getElementById('chat-rate-btn');
    const partner = getChatPartnerName();
    if (!btn || !partner) return;

    const stats = getUserRatingStats(partner);
    const mine = allRatings.find(r => r.targetUser === partner && r.ratedBy === currentUser.name);

    btn.classList.toggle('rated', !!mine);
    document.getElementById('chat-rate-label').textContent = mine ? `Rated ${mine.rating}/5` : `Rate ${getChatPartnerRole()}`;
    btn.title = stats.count ? `${partner}: ${stats.average.toFixed(1)} average from ${stats.count} ${stats.count === 1 ? 'rating' : 'ratings'}` : `${partner} has no ratings yet`;

    document.getElementById('chat-rate-title').textContent = mine ? `Your rating for ${partner}` : `Rate ${partner}`;
    document.getElementById('chat-rate-sub').textContent = stats.count
        ? `${stats.average.toFixed(1)} average from ${stats.count} ${stats.count === 1 ? 'rating' : 'ratings'}`
        : MESSAGES.noRatings;
    document.getElementById('chat-rate-submit').textContent = mine ? 'Update rating' : 'Submit rating';
}

function toggleChatRate(force) {
    const panel = document.getElementById('chat-rate-panel');
    const btn = document.getElementById('chat-rate-btn');
    const open = force !== undefined ? force : panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    if (!open) return;

    buildChatStarInput();
    refreshChatRatePanel();
    const partner = getChatPartnerName();
    const mine = partner && allRatings.find(r => r.targetUser === partner && r.ratedBy === currentUser.name);
    setChatScore(mine ? mine.rating : 0);
    document.getElementById('chat-rate-comment').value = mine && mine.comment ? mine.comment : '';
    requestAnimationFrame(() => document.getElementById('chat-star-input').children[(pendingChatScore || 1) - 1].focus());
}

async function submitChatRating() {
    const partner = getChatPartnerName();
    if (!partner) return;

    if (!pendingChatScore) {
        const error = document.getElementById('chat-rate-error');
        error.classList.remove('hidden');
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.getElementById('chat-rate-panel').animate(
                [0, -6, 6, -6, 6, -3, 3, 0].map(x => ({ transform: `translateX(${x}px)` })),
                { duration: 420, easing: 'ease-in-out' }
            );
        }
        document.getElementById('chat-star-input').children[0].focus();
        return;
    }

    const btn = document.getElementById('chat-rate-submit');
    setButtonLoading(btn, true, MESSAGES.loading.sending);
    const ok = await saveRating(partner, pendingChatScore, document.getElementById('chat-rate-comment').value.trim());
    setButtonLoading(btn, false);
    if (ok) toggleChatRate(false);
}

function viewChatPartnerProfile() {
    toggleChatRate(false);
    openSellerProfileFromChat();
}

document.addEventListener('mousedown', e => {
    const panel = document.getElementById('chat-rate-panel');
    if (!panel || panel.classList.contains('hidden')) return;
    if (!panel.contains(e.target) && !e.target.closest('#chat-rate-btn')) toggleChatRate(false);
});
document.addEventListener('keydown', e => {
    const panel = document.getElementById('chat-rate-panel');
    if (e.key === 'Escape' && panel && !panel.classList.contains('hidden')) {
        toggleChatRate(false);
        document.getElementById('chat-rate-btn').focus();
    }
});

async function handleSubmitRating(e) {
    e.preventDefault();
    if (!currentUser || !currentTargetSeller) return;

    if (currentTargetSeller === currentUser.name) {
        showToast(MESSAGES.cannotRateSelf);
        return;
    }

    if (!pendingScore) {
        failForm(e.target, 'star-input', MESSAGES.val.ratingEmpty);
        document.getElementById('star-input').children[0].focus();
        return;
    }

    clearFormErrors(e.target);
    const comment = document.getElementById('rate-comment').value.trim();
    const submitBtn = document.getElementById('rate-submit-btn');
    setButtonLoading(submitBtn, true, MESSAGES.loading.sending);
    await saveRating(currentTargetSeller, pendingScore, comment);
    setButtonLoading(submitBtn, false);
}

async function removeMyRating() {
    if (!currentUser || !currentTargetSeller) return;
    const find = () => allRatings.findIndex(r => r.targetUser === currentTargetSeller && r.ratedBy === currentUser.name);
    if (find() === -1) return;

    const ok = await confirmDialog({
        title: MESSAGES.confirm.removeRatingTitle,
        message: MESSAGES.confirm.removeRatingBody(currentTargetSeller),
        confirmText: MESSAGES.confirm.removeRatingYes,
        cancelText: MESSAGES.confirm.cancel,
        tone: 'warning',
        icon: 'warning'
    });
    const index = find();
    if (!ok || index === -1) return;

    const { error } = await db.from('ratings')
        .delete()
        .eq('target_user', currentTargetSeller)
        .eq('rated_by', currentUser.name);

    if (error) {
        showToast(MESSAGES.saveFailed(error.message), 'error');
        return;
    }

    allRatings.splice(index, 1);
    showToast(MESSAGES.ratingRemoved(currentTargetSeller), 'info');
    refreshChatRatePanel();
    renderSellerModalRating(currentTargetSeller);
    updateMyProfileRatingDisplay();
    renderProducts();
    renderWishlist();
}

document.addEventListener('input', e => {
    if (e.target.id === 'rate-comment') document.getElementById('rate-comment-count').textContent = e.target.value.length;
});

// ==========================================================
// 9. PRODUCTS - listing cards on the Home tab
// ==========================================================
const isAdminUser = () => !!currentUser && currentUser.role === 'Admin';
const isApproved = p => p.approval === 'approved';

// Everyone sees approved listings. Sellers also see their own pending / rejected ones.
function visibleProducts() {
    return products.filter(p => isApproved(p) || (currentUser && p.owner === currentUser.name && !isAdminUser()));
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const listed = visibleProducts();
    const filtered = listed.filter(p => {
        if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
        if (searchQuery && !p.title.toLowerCase().includes(searchQuery) && !p.owner.toLowerCase().includes(searchQuery)) return false;
        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="glass-card empty-state">
                <i data-lucide="package-open"></i>
                <h4>No Listings Available</h4>
                <p>${listed.length === 0 ? MESSAGES.emptyMarket : MESSAGES.emptyFilter}</p>
            </div>
        `;
    } else {
        filtered.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'glass-card card';
            card.dataset.category = prod.category || '';
            
            const isAdmin = currentUser && currentUser.role === 'Admin';
            const isOwnProduct = currentUser && prod.owner === currentUser.name;
            
            const canDelete = isAdmin || isOwnProduct;
            const deleteBtn = canDelete 
                ? `<button class="glass-btn danger-btn" onclick="deleteProduct('${prod.id}')" style="padding: 4px 8px; font-size: 11px;" title="Delete listing"><i data-lucide="trash"></i></button>` 
                : '';

            const isSold = prod.status === 'Sold';
            const isWishlisted = wishlist.includes(prod.id);
            const sellerStats = getUserRatingStats(prod.owner);

            const editBtn = isOwnProduct
                ? `<button class="glass-btn" onclick="openEditListing('${prod.id}')" style="padding: 4px 8px; font-size: 11px;" title="Edit listing" aria-label="Edit listing"><i data-lucide="pencil"></i></button>`
                : '';

            const approved = isApproved(prod);
            const statusToggleBtn = isOwnProduct && approved
                ? `<button class="glass-btn" onclick="toggleProductStatus('${prod.id}', '${prod.status || 'Available'}')" style="font-size: 11px; padding: 4px 8px; background: ${isSold ? '#C8E6C9' : '#FFF'};">
                        ${isSold ? 'Sold' : 'Active'}
                   </button>`
                : '';

            const buyButton = isOwnProduct && !approved
                ? `<button class="glass-btn disabled-btn" disabled>${prod.approval === 'rejected' ? 'Rejected' : 'Pending review'}</button>`
                : isOwnProduct 
                ? `<button class="glass-btn primary-btn disabled-btn" disabled title="You cannot buy your own product">
                        <i data-lucide="tag"></i> Your Item
                   </button>` 
                : isSold 
                ? `<button class="glass-btn disabled-btn" disabled>Sold Out</button>`
                : `<button class="glass-btn primary-btn" onclick="buyItemAndStartChat('${prod.id}')">
                        <i data-lucide="message-square"></i> Chat
                   </button>`;

            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${prod.img}" alt="${escapeHTML(prod.title)}" class="card-img">
                    ${approved ? `<button class="wishlist-btn ${isWishlisted ? 'active' : ''}" aria-label="Toggle wishlist" onclick="toggleWishlist('${prod.id}')">
                        <i data-lucide="heart"></i>
                    </button>` : `<span class="approval-badge ${prod.approval}">${prod.approval === 'rejected' ? 'Rejected' : 'Pending review'}</span>`}
                </div>
                <div class="card-title">${escapeHTML(prod.title)}</div>
                <div class="card-desc">${escapeHTML(prod.desc || '')}</div>
                ${prod.approval === 'rejected' && prod.rejectReason ? `<div class="reject-note">Reason: ${escapeHTML(prod.rejectReason)}. Edit the listing to resubmit it.</div>` : ''}
                <div class="card-owner" onclick="openSellerProfile('${prod.owner}')">
                    <i data-lucide="user" style="width: 12px; height: 12px;"></i>
                    Seller: ${prod.owner}${isOwnProduct ? ' (You)' : ''} <i data-lucide="star" class="inline-star"></i> ${sellerStats.count ? sellerStats.average.toFixed(1) : 'New'} ${isSold ? ' • [SOLD]' : ''}
                </div>
                <div class="card-footer">
                    <div class="card-actions">
                        ${statusToggleBtn}
                        ${editBtn}
                        ${deleteBtn}
                        ${buyButton}
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    document.getElementById('item-count').innerText = `${filtered.length} Products Available`;
    lucide.createIcons();
}

// ==========================================================
// 9. PRODUCTS - wishlist
// ==========================================================
// ==========================================================
// 9. PRODUCTS - wishlist badge (number on the Wishlist tab = items you saved)
// ==========================================================
function updateWishlistBadge(pop = false) {
    // Count only saved items that still exist (deleted listings drop out)
    const total = products.filter(p => isApproved(p) && wishlist.includes(p.id)).length;
    const label = total === 1 ? '1 saved item' : `${total} saved items`;
    ['wishlist-badge', 'mob-wishlist-badge'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = total > 99 ? '99+' : String(total);
        el.dataset.count = total;
        el.classList.toggle('hidden', total === 0);
        el.setAttribute('aria-label', label);
        if (pop && total > 0) {
            el.classList.remove('pop');
            void el.offsetWidth;
            el.classList.add('pop');
        }
    });
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(MESSAGES.wishlistRemoved);
    } else {
        wishlist.push(productId);
        showToast(MESSAGES.wishlistAdded);
    }
    saveWishlist();
    renderProducts();
    renderWishlist();
    updateWishlistBadge(index === -1);
}

function renderWishlist() {
    updateWishlistBadge();
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const wishlistedProds = products.filter(p => isApproved(p) && wishlist.includes(p.id));

    if (wishlistedProds.length === 0) {
        grid.innerHTML = `
            <div class="glass-card empty-state">
                <i data-lucide="heart"></i>
                <h4>Your Wishlist is Empty</h4>
                <p>Click the heart icon on any product card to save items for later.</p>
            </div>
        `;
    } else {
        wishlistedProds.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'glass-card card';
            card.dataset.category = prod.category || '';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${prod.img}" alt="${escapeHTML(prod.title)}" class="card-img">
                    <button class="wishlist-btn active" aria-label="Remove from wishlist" onclick="toggleWishlist('${prod.id}')">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="card-title">${escapeHTML(prod.title)}</div>
                <div class="card-desc">${escapeHTML(prod.desc || '')}</div>
                <div class="card-owner" onclick="openSellerProfile('${prod.owner}')">Seller: ${prod.owner}</div>
                <div class="card-footer">
                    <button class="glass-btn primary-btn" onclick="buyItemAndStartChat('${prod.id}')">
                        <i data-lucide="message-square"></i> Chat
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    document.getElementById('wishlist-count').innerText = `${wishlistedProds.length} Saved Items`;
    lucide.createIcons();
}

// ==========================================================
// 9. PRODUCTS - edit your own listing
//    Only the seller who posted a listing sees the pencil button and can save changes.
// ==========================================================
let editingProductId = null;
let editPreviewUrl = null;

// Resize a chosen photo to max 800px and return it as a compressed data URL
function compressImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error(MESSAGES.imageReadFailed));
        reader.onload = event => {
            const img = new Image();
            img.onerror = () => reject(new Error(MESSAGES.imageProcessFailed));
            img.onload = () => {
                try {
                    const MAX = 800;
                    let { width, height } = img;
                    if (width > height && width > MAX) { height *= MAX / width; width = MAX; }
                    else if (height >= width && height > MAX) { width *= MAX / height; height = MAX; }
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL('image/jpeg', 0.8));
                } catch (err) {
                    resolve(event.target.result);
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function setEditPhotoPreview(src, title, note) {
    document.getElementById('edit-preview-img').src = src;
    document.getElementById('edit-photo-title').textContent = title;
    document.getElementById('edit-photo-note').textContent = note;
}

function openEditListing(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod || !currentUser || (prod.owner !== currentUser.name && !isAdminUser())) {
        showToast(MESSAGES.cannotEditOthers, 'warning');
        return;
    }
    editingProductId = productId;
    clearFormErrors(document.getElementById('edit-form'));

    document.getElementById('edit-name').value = prod.title;
    document.getElementById('edit-category').value = prod.category;
    document.getElementById('edit-desc').value = prod.desc || '';
    document.getElementById('edit-desc-count').textContent = (prod.desc || '').length;
    document.getElementById('edit-file').value = '';
    if (editPreviewUrl) { URL.revokeObjectURL(editPreviewUrl); editPreviewUrl = null; }
    setEditPhotoPreview(prod.img, 'Current photo', 'Choose a file below to replace it.');

    openModal('edit-modal');
}

function setupEditListing() {
    const file = document.getElementById('edit-file');
    if (!file) return;
    file.addEventListener('change', () => {
        const picked = file.files[0];
        if (editPreviewUrl) { URL.revokeObjectURL(editPreviewUrl); editPreviewUrl = null; }
        if (picked && picked.type.startsWith('image/')) {
            editPreviewUrl = URL.createObjectURL(picked);
            setEditPhotoPreview(editPreviewUrl, 'New photo', picked.name);
        } else {
            const prod = products.find(p => p.id === editingProductId);
            if (prod) setEditPhotoPreview(prod.img, 'Current photo', 'Choose a file below to replace it.');
        }
    });
    document.getElementById('edit-desc').addEventListener('input', e => {
        document.getElementById('edit-desc-count').textContent = e.target.value.length;
    });
}

async function handleEditProduct(e) {
    e.preventDefault();
    const form = e.target;
    const prod = products.find(p => p.id === editingProductId);
    if (!prod || !currentUser || (prod.owner !== currentUser.name && !isAdminUser())) {
        showToast(MESSAGES.cannotEditOthers, 'warning');
        closeModal('edit-modal');
        return;
    }

    if (!validateForm(form, [
        ['edit-name', v => v ? '' : MESSAGES.val.prodName],
        ['edit-category', v => v ? '' : MESSAGES.val.prodCategory],
        ['edit-desc', v => v ? '' : MESSAGES.val.prodDesc],
        ['edit-file', f => f && !f.type.startsWith('image/') ? MESSAGES.val.prodFileType : '']
    ])) return;

    const title = document.getElementById('edit-name').value.trim();
    const category = document.getElementById('edit-category').value;
    const desc = document.getElementById('edit-desc').value.trim();
    const newFile = document.getElementById('edit-file').files[0];

    if (!newFile && title === prod.title && category === prod.category && desc === (prod.desc || '')) {
        showToast(MESSAGES.noChanges, 'info');
        closeModal('edit-modal');
        return;
    }

    const btn = document.getElementById('edit-save-btn');
    setButtonLoading(btn, true, MESSAGES.loading.saving);

    const changes = { title, category, description: desc };
    const resubmit = !isAdminUser() && prod.approval !== 'pending';
    if (resubmit) { changes.approval = 'pending'; changes.reject_reason = null; }
    try {
        if (newFile) changes.image = await compressImage(newFile);
    } catch (err) {
        setButtonLoading(btn, false);
        showToast(err.message, 'error');
        return;
    }

    const { error } = await db.from('products').update(changes).eq('id', prod.id);
    if (error) {
        setButtonLoading(btn, false);
        showToast(MESSAGES.saveFailed(error.message), 'error');
        return;
    }

    // Conversations about this item are matched by its title, so keep them in sync
    if (title !== prod.title) {
        await db.from('chats').update({ item_title: title }).eq('seller_name', prod.owner).eq('item_title', prod.title);
        globalChats.forEach(c => { if (c.sellerName === prod.owner && c.itemTitle === prod.title) c.itemTitle = title; });
    }

    prod.title = title;
    prod.category = category;
    prod.desc = desc;
    if (changes.image) prod.img = changes.image;
    if (resubmit) { prod.approval = 'pending'; prod.rejectReason = ''; }

    setButtonLoading(btn, false);
    closeModal('edit-modal');
    editingProductId = null;
    showToast(resubmit ? MESSAGES.listingSubmitted : MESSAGES.listingUpdated(title), 'success');
    if (isAdminUser()) renderAdmin();
    renderProducts();
    renderWishlist();
    if (currentUser) renderChatThreads();
}

// ==========================================================
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
const postedLabel = iso => {
    if (!iso) return '';
    const days = Math.floor((Date.now() - new Date(iso)) / 864e5);
    const when = days < 1 ? 'Today' : days === 1 ? 'Yesterday' : days < 7 ? `${days} days ago` : new Date(iso).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    return `Posted ${when}`;
};
const postedHTML = prod => prod.createdAt ? `<div class="card-date" title="${new Date(prod.createdAt).toLocaleString()}"><i data-lucide="calendar"></i> ${postedLabel(prod.createdAt)}</div>` : '';

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
    const items = document.querySelectorAll('#category-filter-list .category-item, .category-chips .category-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            selectedCategory = item.getAttribute('data-category');
            if (document.getElementById('tab-home-view').classList.contains('hidden')) switchMainTab('home');
            items.forEach(i => i.classList.toggle('active', i.getAttribute('data-category') === selectedCategory));
            item.scrollIntoView?.({ block: 'nearest', inline: 'center' });
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
                ${postedHTML(prod)}
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
                ${postedHTML(prod)}
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
    if (!prod || !currentUser || prod.owner !== currentUser.name) {
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
    if (!prod || !currentUser || prod.owner !== currentUser.name) {
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
// 9. PRODUCTS - mark Available / Sold
// ==========================================================
async function toggleProductStatus(productId, currentStatus) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    const newStatus = currentStatus === 'Sold' ? 'Available' : 'Sold';

    const { error } = await db.from('products').update({ status: newStatus }).eq('id', productId);
    if (error) {
        showToast(MESSAGES.saveFailed(error.message), 'error');
        return;
    }

    prod.status = newStatus;
    showToast(MESSAGES.statusChanged(prod.status));
    renderProducts();
    renderWishlist();
}

// ==========================================================
// 9. PRODUCTS - sell form (step-by-step wizard with progress)
//    Edit step names, titles and button labels in UPLOAD_STEPS below.
// ==========================================================
const UPLOAD_STEPS = [
    { name: 'Basics', next: 'Next', checks: () => [
        ['prod-name', v => v ? '' : MESSAGES.val.prodName],
        ['prod-category', v => v ? '' : MESSAGES.val.prodCategory]
    ] },
    { name: 'Photo', next: 'Next', checks: () => [
        ['prod-file', f => !f ? MESSAGES.val.prodFileEmpty : !f.type.startsWith('image/') ? MESSAGES.val.prodFileType : '']
    ] },
    { name: 'Details', next: 'Review', checks: () => [
        ['prod-desc', v => v ? '' : MESSAGES.val.prodDesc]
    ] },
    { name: 'Review', next: 'Publish listing', checks: () => [] }
];
let uploadStep = 0;
let uploadPreviewUrl = null;

const CHECK_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';

function setupUploadWizard() {
    const stepper = document.getElementById('upload-stepper');
    if (!stepper) return;
    stepper.innerHTML = UPLOAD_STEPS.map((step, i) =>
        `<li class="step-dot" data-step="${i}"><span class="step-circle"></span><span class="step-name">${escapeHTML(step.name)}</span></li>`
    ).join('');

    document.getElementById('prod-file').addEventListener('change', updateUploadPreview);
    document.getElementById('prod-desc').addEventListener('input', e => {
        document.getElementById('prod-desc-count').textContent = e.target.value.length;
    });
    showUploadStep(0, false);
}

function showUploadStep(n, focus = true) {
    uploadStep = Math.max(0, Math.min(UPLOAD_STEPS.length - 1, n));
    const total = UPLOAD_STEPS.length;

    document.querySelectorAll('#upload-form .wizard-step').forEach(sec => {
        sec.classList.toggle('hidden', Number(sec.dataset.step) !== uploadStep);
    });

    document.querySelectorAll('#upload-stepper .step-dot').forEach(dot => {
        const i = Number(dot.dataset.step);
        dot.classList.toggle('done', i < uploadStep);
        dot.classList.toggle('current', i === uploadStep);
        dot.setAttribute('aria-current', i === uploadStep ? 'step' : 'false');
        dot.querySelector('.step-circle').innerHTML = i < uploadStep ? CHECK_SVG : String(i + 1);
    });

    const pct = Math.round(((uploadStep + 1) / total) * 100);
    document.getElementById('upload-progress-fill').style.width = pct + '%';
    document.getElementById('upload-progress').setAttribute('aria-valuenow', pct);
    document.getElementById('upload-step-count').textContent = `Step ${uploadStep + 1} of ${total} \u00b7 ${UPLOAD_STEPS[uploadStep].name}`;

    document.getElementById('upload-back-btn').classList.toggle('hidden', uploadStep === 0);
    const nextBtn = document.getElementById('upload-next-btn');
    if (!nextBtn.classList.contains('is-loading')) nextBtn.textContent = UPLOAD_STEPS[uploadStep].next;

    if (uploadStep === total - 1) renderUploadReview();
    clearFormErrors(document.getElementById('upload-form'));

    if (focus) {
        requestAnimationFrame(() => {
            document.querySelector(`#upload-form .wizard-step[data-step="${uploadStep}"] input, #upload-form .wizard-step[data-step="${uploadStep}"] select, #upload-form .wizard-step[data-step="${uploadStep}"] textarea`)?.focus();
        });
    }
}

function nextUploadStep() {
    const form = document.getElementById('upload-form');
    if (!validateForm(form, UPLOAD_STEPS[uploadStep].checks())) return;
    showUploadStep(uploadStep + 1);
}

function prevUploadStep() {
    showUploadStep(uploadStep - 1);
}

function updateUploadPreview() {
    const file = document.getElementById('prod-file').files[0];
    const box = document.getElementById('upload-preview');
    if (uploadPreviewUrl) { URL.revokeObjectURL(uploadPreviewUrl); uploadPreviewUrl = null; }
    if (!file || !file.type.startsWith('image/')) {
        box.classList.add('hidden');
        return;
    }
    uploadPreviewUrl = URL.createObjectURL(file);
    document.getElementById('upload-preview-img').src = uploadPreviewUrl;
    document.getElementById('upload-file-name').textContent = file.name;
    document.getElementById('upload-file-size').textContent = file.size >= 1048576 ? `${(file.size / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(file.size / 1024))} KB`;
    box.classList.remove('hidden');
}

function clearUploadFile() {
    const input = document.getElementById('prod-file');
    input.value = '';
    updateUploadPreview();
    input.focus();
}

function renderUploadReview() {
    const box = document.getElementById('upload-review');
    const file = document.getElementById('prod-file').files[0];
    const rows = [
        ['Item', document.getElementById('prod-name').value.trim()],
        ['Category', document.getElementById('prod-category').value],
        ['Description', document.getElementById('prod-desc').value.trim()]
    ];
    box.innerHTML = '';
    if (file && uploadPreviewUrl) {
        const img = document.createElement('img');
        img.className = 'review-photo';
        img.src = uploadPreviewUrl;
        img.alt = 'Photo of your item';
        box.appendChild(img);
    }
    const dl = document.createElement('dl');
    rows.forEach(([label, value]) => {
        const dt = document.createElement('dt');
        dt.textContent = label;
        const dd = document.createElement('dd');
        dd.textContent = value;
        dl.append(dt, dd);
    });
    box.appendChild(dl);
}

function resetUploadWizard() {
    if (uploadPreviewUrl) { URL.revokeObjectURL(uploadPreviewUrl); uploadPreviewUrl = null; }
    document.getElementById('upload-preview').classList.add('hidden');
    document.getElementById('prod-desc-count').textContent = '0';
    showUploadStep(0, false);
}

function handleUploadProduct(e) {
    e.preventDefault();
    if (uploadStep < UPLOAD_STEPS.length - 1) {
        nextUploadStep();
        return;
    }
    const form = e.target;
    const title = document.getElementById('prod-name').value.trim();
    const category = document.getElementById('prod-category').value;
    const fileInput = document.getElementById('prod-file');
    const desc = document.getElementById('prod-desc').value.trim();

    if (!currentUser) {
        showToast(MESSAGES.signInToPublish);
        return;
    }

    const allChecks = UPLOAD_STEPS.flatMap(step => step.checks());
    if (!validateForm(form, allChecks)) {
        // Jump back to the first step that has a problem and show its errors there
        const bad = form.querySelector('.invalid');
        const section = bad && bad.closest('.wizard-step');
        if (section) {
            showUploadStep(Number(section.dataset.step), false);
            validateForm(form, allChecks);
        }
        return;
    }

    const file = fileInput.files[0];
    const submitBtn = form.querySelector('button[type="submit"]');
    setButtonLoading(submitBtn, true, MESSAGES.loading.publishing);

    const publishListing = async (imageDataUrl) => {
        const { data, error } = await db.from('products').insert({
            title: title,
            category: category,
            description: desc,
            owner: currentUser.name,
            status: 'Available',
            approval: 'pending',
            image: imageDataUrl
        }).select().single();

        if (error) {
            console.error('Supabase publish error:', error);
            showToast(MESSAGES.saveFailed(error.message), 'error');
            setButtonLoading(submitBtn, false);
            return;
        }

        products.unshift(rowToProduct(data));
        closeModal('upload-modal'); // Automatically closes modal upon successful publication
        showToast(MESSAGES.listingSubmitted, 'info');
        setButtonLoading(submitBtn, false);
        form.reset();
        resetUploadWizard();
        renderProducts();
        renderWishlist();
    };

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        
        img.onload = function() {
            try {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800;
                const MAX_HEIGHT = 800;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
                publishListing(compressedBase64);
            } catch (err) {
                console.error("Canvas compression error, using raw image data:", err);
                publishListing(event.target.result);
            }
        };

        img.onerror = function() {
            setButtonLoading(submitBtn, false);
            showToast(MESSAGES.imageProcessFailed, 'error');
        };

        img.src = event.target.result;
    };

    reader.onerror = function() {
        setButtonLoading(submitBtn, false);
        showToast(MESSAGES.imageReadFailed, 'error');
    };

    reader.readAsDataURL(file);
}

async function deleteProduct(id) {
    const removedIndex = products.findIndex(p => p.id === id);
    if (removedIndex === -1) return;

    const ok = await confirmDialog({
        title: MESSAGES.confirm.deleteTitle,
        message: MESSAGES.confirm.deleteBody(products[removedIndex].title),
        warnings: MESSAGES.confirm.deleteWarnings,
        requireText: products[removedIndex].title,
        confirmText: MESSAGES.confirm.deleteYes,
        cancelText: MESSAGES.confirm.cancel,
        tone: 'danger',
        icon: 'trash'
    });
    if (!ok) return;
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return;

    const removedProd = products[index];

    const { error } = await db.from('products').delete().eq('id', id);
    if (error) {
        showToast(MESSAGES.saveFailed(error.message), 'error');
        return;
    }

    if (isAdminUser()) await animateOut([adminRow(id)], 'admin-removed');
    else await animateOut([document.querySelector(`[onclick="deleteProduct('${id}')"]`)?.closest('.product-card, .glass-card')], 'admin-removed');
    products.splice(index, 1);
    wishlist = wishlist.filter(wid => wid !== id);
    saveWishlist();

    showToast(MESSAGES.listingRemoved(removedProd.title));
    if (isAdminUser()) renderAdmin();
    renderProducts();
    renderWishlist();
}

// ==========================================================
// 10. CHAT - conversations and messages
// ==========================================================
async function buyItemAndStartChat(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    if (currentUser && prod.owner === currentUser.name) {
        showToast(MESSAGES.cannotBuyOwn);
        return;
    }
    if (!isApproved(prod)) {
        showToast(MESSAGES.notApproved, 'warning');
        return;
    }

    let chatThread = globalChats.find(c => 
        c.buyerName === currentUser.name && 
        c.sellerName === prod.owner && 
        c.itemTitle === prod.title
    );

    if (!chatThread) {
        const openingMessage = {
            sender: currentUser.name,
            text: `Hi! I'm interested in buying your "${prod.title}". Is it still available?`,
            productId: prod.id,
            productTitle: prod.title,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const { data, error } = await db.from('chats').insert({
            buyer_name: currentUser.name,
            seller_name: prod.owner,
            item_title: prod.title,
            messages: [openingMessage],
            deleted_by: {},
            seen: { [currentUser.name]: 1 }
        }).select().single();

        if (error) {
            showToast(MESSAGES.saveFailed(error.message), 'error');
            return;
        }

        chatThread = rowToChat(data);
        globalChats.push(chatThread);
    } else if (isChatHiddenFor(chatThread)) {
        // Re-opening a conversation the user deleted: greet again and un-hide it
        chatThread.messages.push({
            sender: currentUser.name,
            text: `Hi! I'm interested in buying your "${prod.title}". Is it still available?`,
            productId: prod.id,
            productTitle: prod.title,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        delete chatThread.deletedBy[currentUser.name];

        const failure = await saveChatToDb(chatThread);
        if (failure) {
            chatThread.messages.pop();
            chatThread.deletedBy[currentUser.name] = chatThread.messages.length - 1;
            showToast(MESSAGES.saveFailed(failure), 'error');
            return;
        }
    }

    activeChatId = chatThread.id;
    switchMainTab('chat');
    selectChatThread(chatThread.id);
    openChatPanel();
    showToast(MESSAGES.chatOpened(prod.owner));
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// Deleting a conversation only hides it for the person who deleted it.
// chat.deletedBy = { username: number of messages that were hidden }
function chatOffset(chat, username = currentUser && currentUser.name) {
    return (chat.deletedBy && chat.deletedBy[username]) || 0;
}

function isChatHiddenFor(chat, username = currentUser && currentUser.name) {
    return chat.deletedBy && chat.deletedBy[username] !== undefined && chat.messages.length <= chat.deletedBy[username];
}

function visibleMessages(chat) {
    const offset = chatOffset(chat);
    return chat.messages.map((msg, index) => ({ msg, index })).slice(offset);
}

let editingMsgIndex = null;
let chatAlertTimer = null;

// Empty message: the box turns red and shakes, like the login / create account fields
function flagEmptyChatInput(input) {
    if (!input) return;
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
    input.focus();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        input.animate(
            [0, -8, 8, -8, 8, -5, 5, -2, 0].map(x => ({ transform: `translateX(${x}px)` })),
            { duration: 480, easing: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)' }
        );
    }
}

// Alerts inside Messages use the same inline style as the login / create account forms
function chatAlert(message, type = 'error') {
    const editForm = document.querySelector('#chat-messages-area .msg-edit');
    const slot = document.getElementById('chat-alert-slot');
    clearTimeout(chatAlertTimer);
    if (slot) slot.innerHTML = '';
    if (editForm) {
        formAlert(editForm, message, type);
        return;
    }
    if (!slot) return;
    const box = document.createElement('div');
    box.className = `form-alert form-alert-${type}`;
    box.setAttribute('role', 'alert');
    const span = document.createElement('span');
    span.textContent = message;
    box.append(span);
    slot.appendChild(box);
    chatAlertTimer = setTimeout(() => { slot.innerHTML = ''; }, type === 'error' ? 5500 : 3500);
}

function getUserChats() {
    if (!currentUser) return [];
    return globalChats.filter(c => (c.buyerName === currentUser.name || c.sellerName === currentUser.name) && !isChatHiddenFor(c));
}

// ==========================================================
// 10. CHAT - unread message counter (badge on the Messages tab)
//     "Seen" markers are kept in this browser, per account and per conversation.
//     Unread = messages from the other person that you have not opened yet.
// ==========================================================
const SEEN_KEY = 'dlsau_chat_seen';
let prevUnread = null;

function readSeenStore() {
    try { return JSON.parse(localStorage.getItem(SEEN_KEY)) || {}; } catch (err) { return {}; }
}

function otherMessageCount(chat) {
    return visibleMessages(chat).filter(({ msg }) => msg.sender !== currentUser.name).length;
}

function markChatRead(chat) {
    const store = readSeenStore();
    const mine = store[currentUser.name] = store[currentUser.name] || {};
    const count = otherMessageCount(chat);
    if (mine[chat.id] !== count) {
        mine[chat.id] = count;
        localStorage.setItem(SEEN_KEY, JSON.stringify(store));
    }
}

// "Seen" is shared through the database: chat.seen[username] = how many messages that person has opened
function markChatSeen(chat) {
    const me = currentUser.name;
    const total = chat.messages.length;
    if ((chat.seen[me] || 0) >= total) return;
    chat.seen[me] = total;
    db.from('chats').update({ seen: chat.seen }).eq('id', chat.id).then(({ error }) => {
        if (error) console.warn('Could not save seen state:', error.message);
    });
}

function unreadCount(chat) {
    const store = readSeenStore();
    const total = otherMessageCount(chat);
    let seen = (store[currentUser.name] && store[currentUser.name][chat.id]) || 0;
    if (seen > total) {
        // Messages were deleted: keep the marker from running ahead of reality
        seen = total;
        store[currentUser.name][chat.id] = seen;
        localStorage.setItem(SEEN_KEY, JSON.stringify(store));
    }
    return total - seen;
}

function isChatTabVisible() {
    const view = document.getElementById('tab-chat-view');
    return !!view && !view.classList.contains('hidden') && !document.hidden;
}

function paintUnreadBadges(total) {
    const label = total === 1 ? '1 unread message' : `${total} unread messages`;
    ['unread-badge', 'mob-unread-badge'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const previous = Number(el.dataset.count || 0);
        el.textContent = total > 99 ? '99+' : String(total);
        el.dataset.count = total;
        el.classList.toggle('hidden', total === 0);
        el.setAttribute('aria-label', label);
        if (total > previous) {
            el.classList.remove('pop');
            void el.offsetWidth;
            el.classList.add('pop');
        }
    });
    document.title = total > 0 ? `(${total > 99 ? '99+' : total}) ${BRAND_TITLE}` : BRAND_TITLE;
}
const BRAND_TITLE = 'DLSAU Trading Hub';

// Counts unread messages, updates every badge and announces new ones with a toast
function refreshUnread(chats) {
    if (!currentUser) {
        prevUnread = null;
        paintUnreadBadges(0);
        return {};
    }

    if (isChatTabVisible() && activeChatId) {
        const active = chats.find(c => c.id === activeChatId);
        if (active) { markChatRead(active); markChatSeen(active); }
    }

    const byChat = {};
    let total = 0;
    chats.forEach(chat => {
        byChat[chat.id] = unreadCount(chat);
        total += byChat[chat.id];
    });
    paintUnreadBadges(total);

    if (prevUnread === null) {
        if (total > 0) showToast(MESSAGES.unreadSummary(total), 'info');
    } else {
        const fresh = chats.filter(chat => byChat[chat.id] > (prevUnread[chat.id] || 0));
        if (fresh.length === 1) {
            const chat = fresh[0];
            showToast(MESSAGES.newMessage(chat.buyerName === currentUser.name ? chat.sellerName : chat.buyerName), 'info');
        } else if (fresh.length > 1) {
            showToast(MESSAGES.unreadSummary(total), 'info');
        }
    }
    prevUnread = byChat;
    return byChat;
}

document.addEventListener('visibilitychange', () => {
    if (!document.hidden && currentUser) renderChatThreads();
});

function renderChatThreads() {
    const list = document.getElementById('chat-threads-list');
    if (!list) return;

    const userChats = getUserChats();
    const unreadByChat = refreshUnread(userChats);

    if (userChats.length === 0) {
        list.innerHTML = `<div class="p-3 text-muted" style="padding: 16px; font-size: 12px; text-align: center;">No active chats yet.</div>`;
        return;
    }

    list.innerHTML = '';
    userChats.forEach(chat => {
        const isBuyer = chat.buyerName === currentUser.name;
        const partnerName = isBuyer ? chat.sellerName : chat.buyerName;
        const partnerInitials = partnerName ? partnerName.substring(0, 2).toUpperCase() : "NA";

        const shown = visibleMessages(chat);
        const lastMsg = shown.length ? shown[shown.length - 1].msg : null;
        const item = document.createElement('div');
        const unread = unreadByChat[chat.id] || 0;
        item.className = `chat-thread-item ${chat.id === activeChatId ? 'active' : ''} ${unread ? 'unread' : ''}`;
        item.onclick = () => { selectChatThread(chat.id); openChatPanel(); };

        item.innerHTML = `
            <div class="avatar">${escapeHTML(partnerInitials)}</div>
            <div class="thread-info">
                <div class="thread-title">
                    <span>${escapeHTML(partnerName)}</span>
                    <span class="thread-time">${lastMsg ? escapeHTML(lastMsg.timestamp) : ''}</span>
                    ${unread ? `<span class="thread-unread" aria-label="${unread} unread">${unread > 99 ? '99+' : unread}</span>` : ''}
                </div>
                <div class="thread-item-name">${escapeHTML(chat.itemTitle)}</div>
                <div class="thread-last-msg">${lastMsg ? `${lastMsg.sender === currentUser.name ? 'You: ' : ''}${escapeHTML(lastMsg.text)}` : ''}</div>
            </div>
        `;
        list.appendChild(item);
    });
}

function selectChatThread(chatId) {
    if (activeChatId !== chatId) editingMsgIndex = null;
    activeChatId = chatId;

    const chat = globalChats.find(c => c.id === chatId);
    if (!chat) return;

    const isBuyer = chat.buyerName === currentUser.name;
    const partnerName = isBuyer ? chat.sellerName : chat.buyerName;
    const partnerInitials = partnerName ? partnerName.substring(0, 2).toUpperCase() : "NA";

    document.getElementById('chat-empty-view').classList.add('hidden');
    document.getElementById('chat-active-view').classList.remove('hidden');

    document.getElementById('chat-recipient-avatar').innerText = partnerInitials;
    document.getElementById('chat-recipient-name').innerText = partnerName;
    document.getElementById('chat-item-context').innerText = `Item: ${chat.itemTitle} (${isBuyer ? 'Seller' : 'Buyer'}: ${partnerName})`;

    toggleChatRate(false);
    refreshChatRatePanel();
    renderChatThreads();
    renderChatMessages();
}

// ----- animation helpers
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateOut(els, cls = 'anim-out', stagger = 0) {
    els = Array.from(els || []).filter(Boolean);
    if (!els.length || prefersReducedMotion()) return Promise.resolve();
    return Promise.all(els.map((el, i) => new Promise(resolve => {
        el.style.animationDelay = `${i * stagger}ms`;
        el.classList.add(cls);
        const done = () => resolve();
        el.addEventListener('animationend', done, { once: true });
        setTimeout(done, 700 + i * stagger);
    })));
}

function flashEl(el, cls = 'anim-flash') {
    if (!el || prefersReducedMotion()) return;
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), 1400);
}

const adminRow = id => document.querySelector(`#admin-body [data-id="${id}"]`);

function renderChatMessages() {
    const area = document.getElementById('chat-messages-area');
    if (!area) return;

    const chat = globalChats.find(c => c.id === activeChatId);
    if (!chat) return;

    const keepScroll = editingMsgIndex !== null ? area.scrollTop : null;
    area.innerHTML = '';
    visibleMessages(chat).forEach(({ msg, index }) => {
        const isMine = msg.sender === currentUser.name;
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${isMine ? 'mine' : 'theirs'}`;
        bubble.dataset.index = index;

        if (isMine && editingMsgIndex === index) {
            bubble.classList.add('editing');
            const form = document.createElement('form');
            form.className = 'msg-edit';
            form.innerHTML = `
                <label class="sr-only" for="msg-edit-input">Edit message</label>
                <input id="msg-edit-input" type="text" maxlength="500" autocomplete="off">
                <div class="msg-edit-actions">
                    <button type="button" class="msg-edit-cancel">Cancel</button>
                    <button type="submit" class="msg-edit-save">Save</button>
                </div>`;
            const input = form.querySelector('input');
            input.value = msg.text;
            form.addEventListener('submit', e => { e.preventDefault(); saveMessageEdit(index, input.value); });
            form.querySelector('.msg-edit-cancel').addEventListener('click', cancelMessageEdit);
            input.addEventListener('keydown', e => { if (e.key === 'Escape') { e.stopPropagation(); cancelMessageEdit(); } });
            bubble.appendChild(form);
            area.appendChild(bubble);
            setTimeout(() => { input.focus(); input.select(); }, 0);
            return;
        }

        const partner = chat.buyerName === currentUser.name ? chat.sellerName : chat.buyerName;
        const isLast = index === chat.messages.length - 1;
        const receipt = isMine && isLast
            ? ((chat.seen[partner] || 0) >= chat.messages.length
                ? ' &middot; <span class="msg-seen"><i data-lucide="check-check"></i> Seen</span>'
                : ' &middot; <span class="msg-sent"><i data-lucide="check"></i> Sent</span>')
            : '';

        bubble.innerHTML = `
            <div class="msg-sender">${isMine ? 'You' : escapeHTML(msg.sender)}</div>
            ${msg.productId ? listingPreviewHTML(msg) : ''}
            <div class="msg-text">${escapeHTML(msg.text)}</div>
            <div class="msg-time">${escapeHTML(msg.timestamp)}${msg.edited ? ' &middot; edited' : ''}${receipt}</div>
        `;

        if (isMine) {
            const actions = document.createElement('div');
            actions.className = 'msg-actions';
            actions.innerHTML = `
                <button type="button" class="msg-action-edit" aria-label="Edit message" title="Edit message"><i data-lucide="pencil"></i></button>
                <button type="button" class="msg-action-delete" aria-label="Delete message" title="Delete message"><i data-lucide="trash-2"></i></button>`;
            actions.querySelector('.msg-action-edit').addEventListener('click', () => startMessageEdit(index));
            actions.querySelector('.msg-action-delete').addEventListener('click', () => deleteMessage(index));
            bubble.appendChild(actions);
        }
        area.appendChild(bubble);
    });

    area.scrollTop = keepScroll !== null ? keepScroll : area.scrollHeight;
    lucide.createIcons();
}

// Small card with the item's photo, shown inside a chat message that was sent from the Buy button
function listingPreviewHTML(msg) {
    const prod = products.find(p => p.id === msg.productId);
    if (!prod) {
        return `<div class="chat-listing gone"><div class="chat-listing-info"><strong>${escapeHTML(msg.productTitle || 'Listing')}</strong><span>This listing is no longer available.</span></div></div>`;
    }
    return `<div class="chat-listing">
        <img src="${prod.img}" alt="${escapeHTML(prod.title)}">
        <div class="chat-listing-info">
            <strong>${escapeHTML(prod.title)}</strong>
            <span>${escapeHTML(prod.category)} &middot; ${escapeHTML(prod.status || 'Available')}</span>
            <span>Seller: ${escapeHTML(prod.owner)}</span>
            ${prod.createdAt ? `<span>${postedLabel(prod.createdAt)}</span>` : ''}
        </div>
    </div>`;
}

function startMessageEdit(index) {
    editingMsgIndex = index;
    renderChatMessages();
}

function cancelMessageEdit() {
    editingMsgIndex = null;
    renderChatMessages();
}

async function saveMessageEdit(index, newText) {
    const chat = globalChats.find(c => c.id === activeChatId);
    const msg = chat && chat.messages[index];
    if (!msg || msg.sender !== currentUser.name) return;

    const text = newText.trim();
    if (!text) {
        flagEmptyChatInput(document.getElementById('msg-edit-input'));
        return;
    }
    if (text === msg.text) {
        cancelMessageEdit();
        return;
    }

    const previous = { text: msg.text, edited: msg.edited };
    msg.text = text;
    msg.edited = true;

    const failure = await saveChatToDb(chat);
    if (failure) {
        msg.text = previous.text;
        msg.edited = previous.edited;
        chatAlert(MESSAGES.saveFailed(failure), 'error');
        return;
    }

    editingMsgIndex = null;
    renderChatMessages();
    renderChatThreads();
    chatAlert(MESSAGES.messageEdited, 'success');
}

async function deleteMessage(index) {
    const chat = globalChats.find(c => c.id === activeChatId);
    const msg = chat && chat.messages[index];
    if (!msg || msg.sender !== currentUser.name) return;

    const ok = await confirmDialog({
        title: MESSAGES.confirm.deleteMessageTitle,
        message: MESSAGES.confirm.deleteMessageBody,
        confirmText: MESSAGES.confirm.deleteMessageYes,
        cancelText: MESSAGES.confirm.cancel,
        tone: 'danger',
        icon: 'trash'
    });
    const current = chat.messages.indexOf(msg);
    if (!ok || current === -1) return;

    const bubbleEl = document.querySelector(`#chat-messages-area .chat-bubble[data-index="${current}"]`);
    const previousDeletedBy = { ...(chat.deletedBy || {}) };
    const exit = animateOut([bubbleEl], 'msg-out');
    chat.messages.splice(current, 1);
    // Keep each person's "hidden up to here" marker pointing at the same place
    Object.keys(chat.deletedBy || {}).forEach(name => { if (current < chat.deletedBy[name]) chat.deletedBy[name]--; });
    Object.keys(chat.seen || {}).forEach(name => { if (current < chat.seen[name]) chat.seen[name]--; });

    const failure = await saveChatToDb(chat);
    db.from('chats').update({ seen: chat.seen }).eq('id', chat.id).then(() => {});
    await exit;
    if (failure) {
        bubbleEl?.classList.remove('msg-out');
        chat.messages.splice(current, 0, msg);
        chat.deletedBy = previousDeletedBy;
        chatAlert(MESSAGES.saveFailed(failure), 'error');
        return;
    }

    editingMsgIndex = null;
    renderChatMessages();
    renderChatThreads();
    chatAlert(MESSAGES.messageDeleted, 'info');
}

async function deleteConversation() {
    const chat = globalChats.find(c => c.id === activeChatId);
    if (!chat) return;
    const partnerName = chat.buyerName === currentUser.name ? chat.sellerName : chat.buyerName;

    const ok = await confirmDialog({
        title: MESSAGES.confirm.deleteChatTitle,
        message: MESSAGES.confirm.deleteChatBody(partnerName),
        confirmText: MESSAGES.confirm.deleteChatYes,
        cancelText: MESSAGES.confirm.cancel,
        tone: 'danger',
        icon: 'trash'
    });
    if (!ok) return;

    const before = { ...(chat.deletedBy || {}) };
    chat.deletedBy = { ...(chat.deletedBy || {}), [currentUser.name]: chat.messages.length };

    // When both people have deleted everything, remove the conversation completely
    const removeCompletely = [chat.buyerName, chat.sellerName].every(name => chat.deletedBy[name] !== undefined && chat.deletedBy[name] >= chat.messages.length);

    let failure = null;
    if (removeCompletely) {
        const { error } = await db.from('chats').delete().eq('id', chat.id);
        failure = error ? error.message : null;
    } else {
        failure = await saveChatToDb(chat);
    }

    if (failure) {
        chat.deletedBy = before;
        chatAlert(MESSAGES.saveFailed(failure), 'error');
        return;
    }

    await animateOut([document.getElementById('chat-active-view'), document.querySelector('#chat-threads-list .chat-thread-item.active')], 'msg-out');
    document.getElementById('chat-active-view').classList.remove('msg-out');

    if (removeCompletely) globalChats = globalChats.filter(c => c.id !== chat.id);

    activeChatId = null;
    editingMsgIndex = null;
    document.getElementById('chat-active-view').classList.add('hidden');
    document.getElementById('chat-empty-view').classList.remove('hidden');
    renderChatThreads();
    chatAlert(MESSAGES.chatDeleted(partnerName), 'info');
}

async function handleSendChatMessage(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input-field');
    const text = input.value.trim();
    if (!activeChatId) return;
    if (!text) {
        flagEmptyChatInput(input);
        return;
    }

    const chat = globalChats.find(c => c.id === activeChatId);
    if (!chat) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    chat.messages.push({
        sender: currentUser.name,
        text: text,
        timestamp: timeStr
    });

    const failure = await saveChatToDb(chat);
    if (failure) {
        chat.messages.pop();
        chatAlert(MESSAGES.saveFailed(failure), 'error');
        return;
    }

    input.value = '';
    document.getElementById('chat-alert-slot').innerHTML = '';
    renderChatMessages();
    renderChatThreads();
    const area = document.getElementById('chat-messages-area');
    flashEl(area.lastElementChild, 'msg-in');
    flashEl(document.querySelector('.chat-input-area button[type="submit"]'), 'send-pop');
    flashEl(document.querySelector('#chat-threads-list .chat-thread-item.active'), 'anim-flash');
}

// ==========================================================
// 11. MODALS - open / close dialogs
// ==========================================================
let modalReturnFocus = null;

function openModal(id) {
    const modal = document.getElementById(id);
    modalReturnFocus = document.activeElement;
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        const first = modal.querySelector('input:not([type="hidden"]), select, textarea') || modal.querySelector('button');
        first?.focus();
    });
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('hidden');
    modal.querySelectorAll('form').forEach(clearFormErrors);
    if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus();
    modalReturnFocus = null;
}
// ==========================================================
// 12. TEAM - developers popup (opens from the leaf logo)
//     Add or remove names here. The list is written as "Last, First" and sorted A-Z automatically.
// ==========================================================
const TEAM = [
    'Alcantara, Carlos',
    'Garma, Justine',
    'Rodriguez, Cyril',
    'Gabo, Jose',
    'Encarnado, Justin',
    'Santos, Kyler'
];

function renderTeam() {
    const list = document.getElementById('team-list');
    if (!list) return;
    list.innerHTML = '';
    [...TEAM].sort((a, b) => a.localeCompare(b)).forEach((name, i) => {
        const li = document.createElement('li');
        li.className = 'team-item';
        li.style.setProperty('--i', i);
        li.textContent = name;
        list.appendChild(li);
    });
}

// ==========================================================
// 13. NOTIFICATIONS - bell in the top bar (listing approved / rejected)
// ==========================================================
async function notify(recipient, type, title, body) {
    const { error } = await db.from('notifications').insert({ recipient, type, title, body: body || null });
    if (error) console.warn('Could not send notification:', error.message);
}

function renderNotifications() {
    const badge = document.getElementById('notif-badge');
    if (!badge) return;
    const unread = (notifications || []).filter(n => !n.read).length;
    badge.textContent = unread > 99 ? '99+' : String(unread);
    badge.classList.toggle('hidden', unread === 0);
    badge.setAttribute('aria-label', `${unread} unread notifications`);

    const list = document.getElementById('notif-list');
    if (!list) return;
    const items = notifications || [];
    if (!items.length) {
        list.innerHTML = '<li class="review-empty">No notifications yet.</li>';
        return;
    }
    list.innerHTML = items.map(n => `
        <li data-id="${escapeHTML(String(n.id))}" class="notif-item ${n.read ? '' : 'unread'} ${escapeHTML(n.type)}">
            <i data-lucide="${n.type === 'approved' ? 'circle-check' : n.type === 'rejected' ? 'circle-x' : 'bell'}"></i>
            <div>
                <strong>${escapeHTML(n.title)}</strong>
                ${n.body ? `<p>${escapeHTML(n.body)}</p>` : ''}
                <time>${new Date(n.createdAt).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</time>
            </div>
            <button type="button" class="notif-delete" onclick="deleteNotification('${n.id}')" aria-label="Delete notification" title="Delete">&times;</button>
        </li>`).join('');
    lucide.createIcons();
}

async function deleteNotification(id) {
    const { error } = await db.from('notifications').delete().eq('id', id);
    if (error) { showToast(MESSAGES.saveFailed(error.message), 'error'); return; }
    await animateOut([document.querySelector(`#notif-list [data-id="${id}"]`)], 'notif-out');
    notifications = (notifications || []).filter(n => n.id !== id);
    renderNotifications();
}

async function clearNotifications() {
    if (!(notifications || []).length) return;
    const { error } = await db.from('notifications').delete().eq('recipient', currentUser.name);
    if (error) { showToast(MESSAGES.saveFailed(error.message), 'error'); return; }
    await animateOut(document.querySelectorAll('#notif-list .notif-item'), 'notif-out', 60);
    notifications = [];
    renderNotifications();
}

async function openNotifications() {
    renderNotifications();
    openModal('notif-modal');
    const unread = (notifications || []).filter(n => !n.read);
    if (!unread.length) return;
    const { error } = await db.from('notifications').update({ read: true }).eq('recipient', currentUser.name).eq('read', false);
    if (error) return;
    unread.forEach(n => { n.read = true; });
    const badge = document.getElementById('notif-badge');
    badge.classList.add('hidden');
}

// ==========================================================
// 14. REPORTS - report the person you are chatting with
// ==========================================================
function openReportModal() {
    const partner = getChatPartnerName();
    if (!partner) return;
    const chat = globalChats.find(c => c.id === activeChatId);
    document.getElementById('report-target-text').textContent = `You are reporting ${partner} about "${chat.itemTitle}".`;
    document.getElementById('report-form').reset();
    openModal('report-modal');
}

async function handleSubmitReport(e) {
    e.preventDefault();
    const form = e.target;
    const partner = getChatPartnerName();
    const chat = globalChats.find(c => c.id === activeChatId);
    if (!partner || !chat) return;
    if (!validateForm(form, [['report-reason', v => v ? '' : MESSAGES.val.reportReason]])) return;

    const btn = document.getElementById('report-submit-btn');
    setButtonLoading(btn, true, MESSAGES.loading.sending);
    const { error } = await db.from('reports').insert({
        reporter: currentUser.name,
        reported_user: partner,
        item_title: chat.itemTitle,
        reason: document.getElementById('report-reason').value,
        details: document.getElementById('report-details').value.trim() || null,
        transcript: visibleMessages(chat).slice(-15).map(({ msg }) => ({ sender: msg.sender, text: msg.text, timestamp: msg.timestamp }))
    });
    setButtonLoading(btn, false);
    if (error) {
        showToast(MESSAGES.saveFailed(error.message), 'error');
        return;
    }
    closeModal('report-modal');
    showToast(MESSAGES.reportSent(partner), 'success');
}

// ==========================================================
// 15. ADMIN DASHBOARD - verify listings, manage listings, accounts and reports
// ==========================================================
let adminFilter = 'all';
let rejectingProductId = null;
let editingAccountId = null;

const fmtDate = iso => iso ? new Date(iso).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) : '';

function setAdminTab(tab) {
    adminTab = tab;
    adminSearch = '';
    renderAdmin();
}

function renderAdmin() {
    if (!isAdminUser()) return;
    const pending = products.filter(p => p.approval === 'pending');
    const openReports = adminReports.filter(r => r.status === 'open');
    [['admin-pending-badge', pending.length], ['admin-tab-pending', pending.length], ['admin-tab-reports', openReports.length]].forEach(([id, n]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = String(n);
        el.classList.toggle('hidden', n === 0);
    });
    const stat = (icon, tone, value, label, tab, note) => `
        <button type="button" class="admin-stat ${tone}" onclick="setAdminTab('${tab}')">
            <span class="admin-stat-icon"><i data-lucide="${icon}"></i></span>
            <span class="admin-stat-text"><strong>${value}</strong><span>${label}</span>${note ? `<em>${note}</em>` : ''}</span>
        </button>`;
    document.getElementById('admin-stats').innerHTML =
        stat('package', 'green', products.length, 'Listings', 'listings', `${products.filter(p => p.approval === 'approved').length} approved \u00b7 ${pending.length} pending`) +
        stat('users', 'blue', adminAccounts.length, 'Accounts', 'accounts', `${adminAccounts.filter(a => a.suspended).length} suspended`) +
        stat('flag', 'coral', openReports.length, 'Open reports', 'reports', `${adminReports.length} total`);
    lucide.createIcons();
    document.querySelectorAll('#admin-tabs .admin-tab').forEach(b => b.classList.toggle('active', b.dataset.adminTab === adminTab));

    const panel = document.getElementById('admin-panel');
    if (!panel || document.getElementById('tab-admin-view').classList.contains('hidden')) return;

    if (panel.dataset.tab !== adminTab) {
        panel.dataset.tab = adminTab;
        const search = `<div class="admin-search-wrap"><i data-lucide="search"></i><input type="search" class="glass-input admin-search" id="admin-search" placeholder="Search ${adminTab === 'pending' ? 'pending listings' : adminTab}..." aria-label="Search ${adminTab}" value="${escapeHTML(adminSearch)}" oninput="adminSearch = this.value.toLowerCase().trim(); renderAdminBody()"></div>`;
        const filter = adminTab === 'listings'
            ? `<select class="glass-input select-field admin-filter" onchange="adminFilter = this.value; renderAdminBody()">
                ${['all', 'pending', 'approved', 'rejected'].map(v => `<option value="${v}" ${adminFilter === v ? 'selected' : ''}>${v === 'all' ? 'All statuses' : v[0].toUpperCase() + v.slice(1)}</option>`).join('')}
               </select>` : '';
        panel.innerHTML = `<div class="admin-toolbar">${search}${filter}</div><div id="admin-body"></div>`;
    }
    renderAdminBody();
}

function approvalPill(approval) {
    return `<span class="pill ${approval}">${approval[0].toUpperCase() + approval.slice(1)}</span>`;
}

function renderAdminBody() {
    const body = document.getElementById('admin-body');
    if (!body) return;
    const empty = text => `<p class="admin-empty">${text}</p>`;

    if (adminTab === 'pending') {
        const list = products.filter(p => p.approval === 'pending' && (!adminSearch || p.title.toLowerCase().includes(adminSearch) || p.owner.toLowerCase().includes(adminSearch) || p.category.toLowerCase().includes(adminSearch))).reverse();
        body.innerHTML = list.length ? `<div class="admin-review-list">${list.map(p => `
            <article class="admin-review" data-id="${p.id}">
                <img src="${p.img}" alt="${escapeHTML(p.title)}">
                <div class="admin-review-info">
                    <h4>${escapeHTML(p.title)}</h4>
                    <p class="text-muted">${escapeHTML(p.category)} &middot; by ${escapeHTML(p.owner)} &middot; ${fmtDate(p.createdAt)}</p>
                    <p>${escapeHTML(p.desc || '')}</p>
                    <div class="admin-actions">
                        <button class="glass-btn primary-btn" onclick="approveProduct('${p.id}')"><i data-lucide="check"></i> Approve</button>
                        <button class="glass-btn danger-btn" onclick="openRejectModal('${p.id}')"><i data-lucide="x"></i> Reject</button>
                    </div>
                </div>
            </article>`).join('')}</div>` : empty(adminSearch ? 'No pending listings match.' : 'No listings are waiting for review.');
    } else if (adminTab === 'listings') {
        const list = products.filter(p =>
            (adminFilter === 'all' || p.approval === adminFilter) &&
            (!adminSearch || p.title.toLowerCase().includes(adminSearch) || p.owner.toLowerCase().includes(adminSearch) || p.category.toLowerCase().includes(adminSearch)));
        body.innerHTML = list.length ? `<div class="admin-table-wrap"><table class="admin-table">
            <thead><tr><th></th><th>Item</th><th>Seller</th><th>Category</th><th>Review</th><th>Sale</th><th>Actions</th></tr></thead>
            <tbody>${list.map(p => `
                <tr data-id="${p.id}">
                    <td><img class="admin-thumb" src="${p.img}" alt=""></td>
                    <td><strong>${escapeHTML(p.title)}</strong><br><span class="text-muted">${fmtDate(p.createdAt)}</span></td>
                    <td>${escapeHTML(p.owner)}</td>
                    <td>${escapeHTML(p.category)}</td>
                    <td>${approvalPill(p.approval)}</td>
                    <td>${escapeHTML(p.status || 'Available')}</td>
                    <td><div class="admin-actions">
                        ${p.approval !== 'approved' ? `<button class="glass-btn" onclick="approveProduct('${p.id}')" title="Approve"><i data-lucide="check"></i></button>` : ''}
                        ${p.approval !== 'rejected' ? `<button class="glass-btn" onclick="openRejectModal('${p.id}')" title="Reject"><i data-lucide="x"></i></button>` : ''}
                        <button class="glass-btn danger-btn" onclick="deleteProduct('${p.id}')" title="Delete"><i data-lucide="trash"></i></button>
                    </div></td>
                </tr>`).join('')}</tbody></table></div>` : empty('No listings match.');
    } else if (adminTab === 'accounts') {
        const list = adminAccounts.filter(a => !adminSearch || a.name.toLowerCase().includes(adminSearch) || a.email.toLowerCase().includes(adminSearch));
        body.innerHTML = list.length ? `<div class="admin-table-wrap"><table class="admin-table">
            <thead><tr><th>Username</th><th>Email</th><th>Listings</th><th>Joined</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>${list.map(a => `
                <tr data-id="${a.id}">
                    <td><strong>${escapeHTML(a.name)}</strong></td>
                    <td>${escapeHTML(a.email)}</td>
                    <td>${products.filter(p => p.owner === a.name).length}</td>
                    <td>${fmtDate(a.createdAt)}</td>
                    <td>${a.suspended ? '<span class="pill rejected">Suspended</span>' : '<span class="pill approved">Active</span>'}</td>
                    <td><div class="admin-actions">
                        <button class="glass-btn" onclick="toggleSuspendAccount('${a.id}')" title="${a.suspended ? 'Unsuspend' : 'Suspend'}"><i data-lucide="${a.suspended ? 'user-check' : 'user-x'}"></i></button>
                        <button class="glass-btn danger-btn" onclick="deleteAccount('${a.id}')" title="Delete"><i data-lucide="trash"></i></button>
                    </div></td>
                </tr>`).join('')}</tbody></table></div>` : empty('No accounts found.');
    } else {
        const reports = adminReports.filter(r => !adminSearch || [r.reporter, r.reportedUser, r.reason, r.itemTitle, r.details, r.status].some(v => (v || '').toLowerCase().includes(adminSearch)));
        body.innerHTML = reports.length ? `<div class="admin-review-list">${reports.map(r => {
            const target = adminAccounts.find(a => a.name === r.reportedUser);
            return `
            <article class="admin-report ${r.status}" data-id="${r.id}">
                <div class="admin-report-head">
                    <strong>${escapeHTML(r.reporter)} reported ${escapeHTML(r.reportedUser)}</strong>
                    <span class="pill ${r.status === 'open' ? 'pending' : 'approved'}">${escapeHTML(r.status)}</span>
                </div>
                <p class="text-muted">${escapeHTML(r.reason)}${r.itemTitle ? ` &middot; item: ${escapeHTML(r.itemTitle)}` : ''} &middot; ${fmtDate(r.createdAt)}</p>
                ${r.details ? `<p>${escapeHTML(r.details)}</p>` : ''}
                ${r.transcript.length ? `<details class="report-transcript"><summary>Conversation (${r.transcript.length} messages)</summary>${r.transcript.map(m => `<p><strong>${escapeHTML(m.sender)}:</strong> ${escapeHTML(m.text)} <em>${escapeHTML(m.timestamp || '')}</em></p>`).join('')}</details>` : ''}
                <div class="admin-actions">
                    ${r.status === 'open'
                        ? `<button class="glass-btn primary-btn" onclick="setReportStatus('${r.id}', 'resolved')">Mark resolved</button>
                           <button class="glass-btn" onclick="setReportStatus('${r.id}', 'dismissed')">Dismiss</button>`
                        : `<button class="glass-btn" onclick="setReportStatus('${r.id}', 'open')">Reopen</button>`}
                    ${target ? `<button class="glass-btn danger-btn" onclick="toggleSuspendAccount('${target.id}')">${target.suspended ? 'Unsuspend user' : 'Suspend user'}</button>` : ''}
                </div>
            </article>`;
        }).join('')}</div>` : empty(adminSearch ? 'No reports match.' : 'No reports have been submitted.');
    }
    lucide.createIcons();
}

// ----- listing review
// Pending list: row animates away. Other views: row re-renders and flashes.
async function adminResolveListing(id, cls) {
    const row = adminRow(id);
    if (row && adminTab === 'pending') await animateOut([row], cls);
    renderAdmin();
    if (adminTab !== 'pending') flashEl(adminRow(id), cls === 'admin-approved' ? 'flash-good' : 'flash-bad');
}

async function approveProduct(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    const { error } = await db.from('products').update({ approval: 'approved', reject_reason: null }).eq('id', id);
    if (error) { showToast(MESSAGES.saveFailed(error.message), 'error'); return; }
    prod.approval = 'approved';
    prod.rejectReason = '';
    notify(prod.owner, 'approved', `Your listing "${prod.title}" was approved.`, 'It is now visible on the marketplace.');
    showToast(MESSAGES.listingApproved(prod.title), 'success');
    await adminResolveListing(id, 'admin-approved');
    renderProducts();
}

function openRejectModal(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    rejectingProductId = id;
    document.getElementById('reject-form').reset();
    document.getElementById('reject-target-text').textContent = `"${prod.title}" by ${prod.owner}`;
    openModal('reject-modal');
}

async function handleRejectListing(e) {
    e.preventDefault();
    const prod = products.find(p => p.id === rejectingProductId);
    if (!prod) return;
    const reason = document.getElementById('reject-reason').value.trim();
    if (!reason) { showToast('Please leave a note explaining why this listing is rejected.', 'warning'); document.getElementById('reject-reason').focus(); return; }
    const { error } = await db.from('products').update({ approval: 'rejected', reject_reason: reason || null }).eq('id', prod.id);
    if (error) { showToast(MESSAGES.saveFailed(error.message), 'error'); return; }
    prod.approval = 'rejected';
    prod.rejectReason = reason;
    notify(prod.owner, 'rejected', `Your listing "${prod.title}" was not approved.`, `Reason: ${reason}`);
    closeModal('reject-modal');
    showToast(MESSAGES.listingRejected(prod.title), 'info');
    await adminResolveListing(prod.id, 'admin-rejected');
    renderProducts();
}

// ----- accounts
async function toggleSuspendAccount(id) {
    const acc = adminAccounts.find(a => a.id === id);
    if (!acc) return;
    const suspended = !acc.suspended;
    if (suspended) {
        const ok = await confirmDialog({
            title: `Suspend ${acc.name}?`,
            message: 'They will no longer be able to sign in until you unsuspend the account.',
            confirmText: 'Suspend', cancelText: MESSAGES.confirm.cancel, tone: 'warning', icon: 'warning'
        });
        if (!ok) return;
    }
    const { error } = await db.from('accounts').update({ suspended }).eq('id', id);
    if (error) { showToast(MESSAGES.saveFailed(error.message), 'error'); return; }
    acc.suspended = suspended;
    showToast(MESSAGES.accountUpdated(acc.name), 'success');
    renderAdmin();
    flashEl(adminRow(id), suspended ? 'flash-bad' : 'flash-good');
    adminReports.filter(r => r.reportedUser === acc.name).forEach(r => flashEl(adminRow(r.id), suspended ? 'flash-bad' : 'flash-good'));
}

async function deleteAccount(id) {
    const acc = adminAccounts.find(a => a.id === id);
    if (!acc) return;
    const ok = await confirmDialog({
        title: 'Permanently delete this account?',
        message: `You are about to delete "${acc.name}" and all of their listings.`,
        warnings: ['This cannot be undone.'],
        requireText: acc.name,
        confirmText: 'Delete account', cancelText: MESSAGES.confirm.cancel, tone: 'danger', icon: 'trash'
    });
    if (!ok) return;
    await db.from('products').delete().eq('owner', acc.name);
    const { error } = await db.from('accounts').delete().eq('id', id);
    if (error) { showToast(MESSAGES.saveFailed(error.message), 'error'); return; }
    await animateOut([adminRow(id)], 'admin-removed');
    adminAccounts = adminAccounts.filter(a => a.id !== id);
    products = products.filter(p => p.owner !== acc.name);
    showToast(MESSAGES.accountDeleted(acc.name), 'info');
    renderAdmin();
    renderProducts();
    renderWishlist();
}

function openAccountEdit(id) {
    const acc = adminAccounts.find(a => a.id === id);
    if (!acc) return;
    editingAccountId = id;
    clearFormErrors(document.getElementById('account-form'));
    document.getElementById('acc-name').value = acc.name;
    document.getElementById('acc-email').value = acc.email;
    document.getElementById('acc-password').value = '';
    openModal('account-modal');
}

// Renames a user everywhere their name is stored
async function renameUserEverywhere(oldName, newName) {
    const jobs = [
        db.from('products').update({ owner: newName }).eq('owner', oldName),
        db.from('ratings').update({ target_user: newName }).eq('target_user', oldName),
        db.from('ratings').update({ rated_by: newName }).eq('rated_by', oldName),
        db.from('notifications').update({ recipient: newName }).eq('recipient', oldName),
        db.from('reports').update({ reporter: newName }).eq('reporter', oldName),
        db.from('reports').update({ reported_user: newName }).eq('reported_user', oldName)
    ];
    const swapKey = obj => {
        const out = { ...(obj || {}) };
        if (oldName in out) { out[newName] = out[oldName]; delete out[oldName]; }
        return out;
    };
    globalChats.filter(c => c.buyerName === oldName || c.sellerName === oldName).forEach(c => {
        jobs.push(db.from('chats').update({
            buyer_name: c.buyerName === oldName ? newName : c.buyerName,
            seller_name: c.sellerName === oldName ? newName : c.sellerName,
            messages: c.messages.map(m => m.sender === oldName ? { ...m, sender: newName } : m),
            deleted_by: swapKey(c.deletedBy),
            seen: swapKey(c.seen)
        }).eq('id', c.id));
    });
    const results = await Promise.all(jobs);
    const failed = results.find(r => r.error);
    return failed ? failed.error.message : null;
}

async function handleEditAccount(e) {
    e.preventDefault();
    const form = e.target;
    const acc = adminAccounts.find(a => a.id === editingAccountId);
    if (!acc) return;

    const name = document.getElementById('acc-name').value.trim();
    const email = document.getElementById('acc-email').value.trim();
    const password = document.getElementById('acc-password').value.trim();
    const emailChanged = email.toLowerCase() !== acc.email.toLowerCase();

    if (!validateForm(form, [
        ['acc-name', v => !v ? MESSAGES.val.regName : /^[A-Za-z0-9._]{3,20}$/.test(v) ? '' : MESSAGES.val.regNameInvalid],
        ['acc-email', v => !v ? MESSAGES.val.regEmailEmpty : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : MESSAGES.val.regEmailInvalid],
        ['acc-password', v => (v || emailChanged) && v.length < 6 ? (emailChanged ? MESSAGES.val.accPasswordNeeded : MESSAGES.val.regPasswordShort) : '']
    ])) return;

    if (adminAccounts.some(a => a.id !== acc.id && a.name.toLowerCase() === name.toLowerCase()) || name.toLowerCase() === 'admin') {
        failForm(form, 'acc-name', MESSAGES.val.accNameTaken);
        return;
    }
    if (adminAccounts.some(a => a.id !== acc.id && a.email.toLowerCase() === email.toLowerCase())) {
        failForm(form, 'acc-email', MESSAGES.val.accEmailTaken);
        return;
    }

    const btn = document.getElementById('account-save-btn');
    setButtonLoading(btn, true, MESSAGES.loading.saving);
    const changes = { name, email };
    if (password) changes.pass_hash = await hashPassword(password, email);
    if (emailChanged) changes.recovery_hash = null;

    const { error } = await db.from('accounts').update(changes).eq('id', acc.id);
    if (error) {
        setButtonLoading(btn, false);
        showToast(MESSAGES.saveFailed(error.message), 'error');
        return;
    }
    const oldName = acc.name;
    if (name !== oldName) {
        const failure = await renameUserEverywhere(oldName, name);
        if (failure) showToast(MESSAGES.saveFailed(failure), 'error');
        await Promise.all([loadProducts(), loadChats(), loadRatings()]);
    }
    setButtonLoading(btn, false);
    acc.name = name;
    acc.email = email;
    if (changes.pass_hash) acc.passHash = changes.pass_hash;
    closeModal('account-modal');
    showToast(MESSAGES.accountUpdated(name), 'success');
    renderAdmin();
}

// ----- reports
async function setReportStatus(id, status) {
    const report = adminReports.find(r => r.id === id);
    if (!report) return;
    const { error } = await db.from('reports').update({ status }).eq('id', id);
    if (error) { showToast(MESSAGES.saveFailed(error.message), 'error'); return; }
    const row = adminRow(id);
    if (row) await animateOut([row], 'admin-removed');
    report.status = status;
    renderAdmin();
    flashEl(adminRow(id), status === 'dismissed' ? 'flash-bad' : 'flash-good');
}

// ==========================================================
// 16. MOBILE - conversation panel and on-screen keyboard handling
// ==========================================================
function openChatPanel() {
    document.querySelector('.chat-container')?.classList.add('chat-open');
}

function closeChatPanel() {
    document.querySelector('.chat-container')?.classList.remove('chat-open');
}

// Keeps layouts sized to the visible area so the keyboard never covers inputs
function syncViewport() {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--vvh', h + 'px');
    const keyboard = vv ? window.innerHeight - vv.height - vv.offsetTop > 120 : false;
    document.body.classList.toggle('kb-open', keyboard);
}

if (window.visualViewport) {
    visualViewport.addEventListener('resize', syncViewport);
    visualViewport.addEventListener('scroll', syncViewport);
}
window.addEventListener('resize', syncViewport);
syncViewport();

document.addEventListener('focusin', e => {
    if (!e.target.matches('input, textarea, select')) return;
    setTimeout(() => e.target.scrollIntoView({ block: 'center', behavior: 'smooth' }), 300);
});

// ==========================================================
// 17. LEGAL - Terms of Service, Privacy Policy and the create-account agreement
// ==========================================================
const LEGAL_UPDATED = 'Last updated: October 14, 2026';
const LEGAL_DOCS = {
    terms: {
        heading: 'Terms of Service and Conditions',
        html: `
            <p class="legal-updated">${LEGAL_UPDATED}</p>
            <p>Welcome to DLSAU Trading Hub, a community marketplace for everyone inside De La Salle Araneta University, including students, faculty, professors, staff, guests and other members of the campus community. By creating an account or using the site you agree to these terms.</p>
            <h4>1. Who can use the Hub</h4>
            <p>The Hub is for members of the DLSAU community, including students, faculty, professors, staff and guests. You must give a real email address you control and keep your password private. You are responsible for everything done through your account.</p>
            <h4>2. Listings</h4>
            <ul>
                <li>Post only items you own and are allowed to sell or trade, with honest photos and descriptions.</li>
                <li>Every listing is reviewed by an admin before it is shown. Listings may be rejected, edited or removed if they break these terms.</li>
                <li>Prohibited items include weapons, drugs, alcohol, vapes, stolen goods, counterfeit goods, exam papers and anything illegal or against school policy.</li>
            </ul>
            <h4>3. Our role: a listing and chat platform only</h4>
            <p>DLSAU Trading Hub is only a listing and chatting app. We provide a place to post items and message other members. We are not a party to any sale, trade or agreement, and we do not buy, sell, hold, inspect, deliver or guarantee any item. We do not handle payments, delivery, refunds, returns or disputes.</p>
            <p>All transactions happen entirely between you and the other member, at your own risk. Inspect items before paying, and meet in safe, public campus areas.</p>
            <h4>4. Behavior</h4>
            <p>Be respectful. Harassment, spam, scams, impersonation and misleading other users are not allowed. You can report a user from any chat, and admins may review the reported conversation.</p>
            <h4>5. Ratings</h4>
            <p>Ratings and reviews must be honest and based on a real interaction. Abusive or fake reviews may be removed.</p>
            <h4>6. Suspension and removal</h4>
            <p>Admins may suspend accounts or delete listings that break these terms or put other members at risk, with or without notice.</p>
            <h4>7. No liability for scams or transactions</h4>
            <p>The Hub is provided "as is" and "as available". Although admins review listings and reports, we cannot verify every user or item. To the fullest extent permitted by law, DLSAU Trading Hub, its developers and administrators are <strong>not liable</strong> for any scam, fraud, misrepresentation, theft, loss, damage, injury or dispute arising from any listing, chat, meetup or transaction, whether or not it began on the Hub.</p>
            <p>We do not guarantee the quality, safety, authenticity or legality of items, or the identity or conduct of other users. You are solely responsible for your decisions and transactions. If you suspect a scam, stop the transaction and report the user from the chat.</p>
            <h4>8. Changes</h4>
            <p>We may update these terms. Continuing to use the Hub after a change means you accept the new terms.</p>`
    },
    privacy: {
        heading: 'Privacy Policy',
        html: `
            <p class="legal-updated">${LEGAL_UPDATED}</p>
            <p>We respect your privacy and handle personal information in line with the Data Privacy Act of 2012 (Republic Act No. 10173) of the Philippines.</p>
            <h4>1. What we collect</h4>
            <ul>
                <li><strong>Account:</strong> username, email address and a securely hashed version of your password and recovery code (never the plain text).</li>
                <li><strong>Content you post:</strong> listings, photos, descriptions, wishlist activity, ratings and reviews.</li>
                <li><strong>Messages:</strong> chats you send to other members, including read ("seen") status.</li>
                <li><strong>Reports and notifications:</strong> reports you file and the notices we send about your listings.</li>
            </ul>
            <h4>2. Why we use it</h4>
            <p>To run your account, show approved listings, let members chat and rate each other, keep the community safe, and notify you about listing reviews and let you reset a forgotten password.</p>
            <h4>3. Who can see it</h4>
            <ul>
                <li>Your username, listings and ratings are visible to other signed-in members.</li>
                <li>Your chats are visible to you and the other person. If a chat is reported, the admins can read the reported messages.</li>
                <li>Your email is visible only to admins.</li>
                <li>We do not sell your information or use it for advertising.</li>
            </ul>
            <h4>4. Where it is stored</h4>
            <p>Data is stored with our hosting and database provider, Supabase. We keep it while your account is active and delete it when an admin removes the account.</p>
            <h4>5. Your rights</h4>
            <p>You may ask to see, correct or delete your information, or withdraw your consent, by contacting the admins. Deleting your account removes your listings.</p>
            <h4>6. Security</h4>
            <p>We store passwords and recovery codes only as hashes, but no system is perfectly secure. Never share your password or recovery code, and do not put sensitive information in chats or listings.</p>
            <h4>7. Changes</h4>
            <p>We may update this policy and will show the latest version here.</p>`
    }
};

let legalConsentMode = false;

function showLegalTab(tab) {
    const doc = LEGAL_DOCS[tab] || LEGAL_DOCS.terms;
    document.querySelectorAll('.legal-tab').forEach(b => b.classList.toggle('active', b.dataset.legal === tab));
    document.getElementById('legal-heading').textContent = doc.heading;
    const body = document.getElementById('legal-body');
    body.innerHTML = doc.html;
    body.scrollTop = 0;
}

function openLegal(tab = 'terms', consent = false) {
    legalConsentMode = consent;
    document.getElementById('legal-consent').classList.toggle('hidden', !consent);
    document.getElementById('legal-agree').checked = false;
    document.getElementById('legal-accept-btn').disabled = true;
    if (consent) document.getElementById('legal-heading').textContent = 'Before you join';
    showLegalTab(tab);
    if (consent) document.getElementById('legal-heading').textContent = 'Before you join';
    openModal('legal-modal');
}

function closeLegal() {
    closeModal('legal-modal');
    if (legalConsentMode) pendingRegistration = null;
    legalConsentMode = false;
}

function acceptLegalAndRegister() {
    if (!document.getElementById('legal-agree').checked || !pendingRegistration) return;
    const data = pendingRegistration;
    pendingRegistration = null;
    legalConsentMode = false;
    closeModal('legal-modal');
    createAccount(data);
}

document.getElementById('auth-year').textContent = new Date().getFullYear();

function openHelp() { openModal('help-modal'); }

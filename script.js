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
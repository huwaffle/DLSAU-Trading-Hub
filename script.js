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
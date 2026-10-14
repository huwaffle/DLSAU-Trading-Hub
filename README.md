# DLSAU Trading Hub

Welcome to the DLSAU Trading Hub, a friendly marketplace where students of De La
Salle Araneta University can buy, sell, and trade things with each other. Got a spare
calculator you never use? Notes from last semester? A hoodie that's a little too
small? Post it here and let a classmate take it off your hands.

Think of it as a campus garage sale that never closes.

## What you can do

- Browse and search listings by category (School Supplies, Electronics, Clothing, Sports, and more)
- Post an item in a quick 4-step wizard (name, photo, details, publish)
- Chat directly with buyers and sellers, right inside the app
- Rate and review the people you trade with
- Save your favorites to a wishlist
- Stay safe, since every listing is reviewed by an admin before it goes live
- Get notified when your listing is approved, rejected, or someone messages you
- Report anyone who breaks the rules
- Use the admin dashboard to approve listings and manage accounts

---

## Try it as a guest (tester account)

If you just want to look around, sign in with the shared tester account:

| Username | Password |
| -------- | -------- |
| `tester` | `tester` |

This account is meant for guests and demos, so feel free to post, chat, and explore
with it.

> Heads up: if `tester` doesn't work yet, it just needs to be created once. See the
> "Create the tester account" note below.

---

## Getting it running (it's easy, promise)

This is a plain website. No installing, no compiling, no "npm install" headaches.
It's just HTML, CSS, and JavaScript.

### Option 1: Just open it (fastest)

1. Download or clone this folder.
2. Double-click `index.html`.

That's it. The app opens in your browser. You'll need an internet connection, since
the data lives in the cloud.

### Option 2: Use VS Code Live Server (nicer for editing)

1. Open the folder in VS Code.
2. Install the Live Server extension (by Ritwick Dey).
3. Right-click `index.html` and choose "Open with Live Server".
4. It opens at `http://127.0.0.1:5501` and reloads automatically when you save changes.

---

## The database part (one-time setup)

All the shared data (listings, chats, ratings) lives in Supabase, a free cloud
database. The project already points to one, so you can skip this entirely if you
just want to try it out.

But if you want your own copy with your own database:

1. Make a free account at supabase.com and create a new project.
2. In your project, open SQL Editor, then New query.
3. Paste the entire contents of `supabase.sql` and click Run.
   (It's safe to run more than once, and it even adds some demo listings and reviews.)
4. Grab your project's URL and publishable (anon) key from Settings, then API.
5. Open `script.js` and find this near the top (around line 153):

   ```js
   const SUPABASE_URL = 'https://your-project.supabase.co';
   const SUPABASE_PUBLISHABLE_KEY = 'your-key-here';
   ```

   Replace them with your own values and save. Done.

Note: the current database keys are wide open on purpose (this is a class project).
Don't put real, private, or sensitive info in here, and if you ever go live for real,
tighten the security rules in `supabase.sql`.

### Create the tester account

Accounts are stored in the database, so the `tester` account has to exist before it
can be used. If it isn't there yet, just open the app, click "Create Account", and
register a user named `tester` with the password `tester`. You only need to do this
once, and then anyone can sign in with it.

---

## Try the admin side

Want to peek at the admin dashboard? Sign in with:

| Username | Password |
| -------- | -------- |
| `admin`  | `admin`  |

You'll get a shield icon in the top bar where you can approve or reject listings,
manage accounts, and read reports. Change this login in `script.js` under
`ADMIN_LOGIN` before showing it to the world.

---

## What's in the box?

| File | What it does |
| ---- | ------------ |
| `index.html` | The whole page structure: screens, tabs, and popups |
| `style.css`  | All the looks (colors, layout, animations) |
| `script.js`  | The brains: login, listings, chat, ratings, admin, and all the text |
| `feedback.js` | Pop-up toasts and confirmation dialogs |
| `background.js` | The animated green constellation of stars in the background |
| `supabase.sql` | One-time database setup (run this in Supabase) |

Want to change wording? Almost all messages live in the `MESSAGES` object at the top
of `script.js`. The developer names show up in the `TEAM` list, and plain text in
`index.html` can be edited directly. There are handy comment guides throughout.

---

## Built with

- Plain HTML, CSS, and JavaScript (no frameworks)
- Supabase for the cloud database and live updates
- Lucide for the icons
- Google Fonts (Instrument Serif, Manrope, Space Grotesk)

---

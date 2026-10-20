# DLSAU Trading Hub Guide 

Welcome to the **DLSAU Trading Hub** - a friendly, student-to-student marketplace built for De La Salle Araneta University! 

Think of it as a campus garage sale that never closes. Buy, sell, and trade with your fellow DLSAU students all in one place! 


---


## 📝 System Description 

The DLSAU Trading Hub is a web-based marketplace that allows DLSAU students to trade items they no longer need. It provides a safe and convenient way to connect with classmates to buy, sell, or swap goods right on campus. 

### Key Features: 

- **Browse & Search** - Find items by category (School Supplies, Electronics, Clothing & Accessories, Sports & Hobbies, and more)
- **Easy Listing** - Post items in a quick 4-step wizard with photos and descriptions
- **In-App Chat** - Message buyers and sellers directly to arrange trades
- **Ratings & Reviews** - Rate and review fellow students after a trade
- **Wishlist** - Save items you're interested in for later
- **Admin Moderation** - All listings are reviewed by admins before going live for extra safety
- **Notifications** - Get alerted when your listing is approved/rejected or when you receive messages
- **Reporting System** - Flag suspicious users or listings to keep the community safe


---


## 👨‍💻 Developers 

This project was built by:

Carlos Alcantara  & Justin Garma

*You can see the full team list by clicking the leaf logo in the top bar of the app!*


---


## 🚀 How to Set Up 

This is a simple web app built with plain HTML, CSS, and JavaScript. No complex installations needed! 

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)
- An internet connection (data is stored in the cloud via Supabase)

### Option 1: Open Directly (Fastest)
1. Download or clone this repository to your device
2. Open the folder and double-click `index.html`
3. The app will open in your browser and you're ready to go!

### Option 2: Use VS Code Live Server (Best for Development)
1. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/)
2. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) by Ritwick Dey
3. Right-click `index.html` and select "Open with Live Server"
4. The app will launch at `http://127.0.0.1:5501` with auto-reload on save


### Database Setup (For Your Own Copy)

The app comes pre-configured with a Supabase database, so you can skip this if you just want to try it out! 

If you'd like to use your own database: 

1. Create a free account at [supabase.com](https://supabase.com/) and make a new project
2. Go to the SQL Editor in your Supabase project and create a new query
3. Copy and paste the entire contents of `supabase.sql` from this project and click "Run"
4. Go to Settings > API in Supabase and grab your Project URL and `anon` (publishable) key
5. Open `script.js` and find these lines near the top: 

```js
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'your-key-here';
```

6. Replace them with your own values and save! 

> ⚠️ **Note:** The current database keys are open for this class project. Don't put sensitive data here and tighten security rules if you ever go live publicly! 


---


## 🧪 Test Accounts 

Want to try it out before creating your own account? Use these test logins: 

| Account Type | Username | Password | Purpose |
| ------------ | -------- | -------- | ------- |
| Guest/Tester | `tester` | `tester` | Browse, post, chat, and explore the app |
| Admin | `admin` | `admin` | Access the admin dashboard to approve listings and manage users |

*If the `tester` account doesn't exist yet, just create it through the registration page once - then it'll be available for everyone to use!*


---


## 🛠️ Tech Stack 

- **Frontend:** Plain HTML, CSS, and JavaScript (No frameworks!)
- **Backend/Database:** [Supabase](https://supabase.com/) for cloud database and real-time updates
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Fonts:** Google Fonts (Instrument Serif, Manrope, Space Grotesk)


---


## 💚 Happy Trading! 

Have something to trade or looking for something? Get started and connect with your campus community. If you have any questions, check out the Help section in the app or reach out to the admins! 

# 🍀 Good Luck Chuck

An ADHD-friendly productivity app featuring Chuck, your supportive mascot companion!

![Chuck](public/favicon.svg)

## Features

- **🎯 Task Management** - Non-negotiables, focus tasks, joy tasks with spin wheels
- **🧠 Learn Mode** - 6 quiz categories (Pop Culture, Design, Remote Work, DIY, Business English, Logic)
- **✨ Chuck Customization** - 6 colors, 4 backgrounds, 9 accessories, feed him snacks!
- **📅 Schedule** - Classes, trips, birthdays tracking
- **💰 Money** - Trip savings goals, 48hr purchase pause
- **📝 Quick Notes** - Floating capture button with categories
- **🔮 Daily Guidance** - Real horoscopes (Pisces/Gemini/Capricorn) + tarot cards
- **🌙 Moon Phase** - Accurate lunar phase display
- **🎮 Gamification** - Coins, streaks, rewards

## Tech Stack

- React 18
- Vite
- localStorage for persistence
- External APIs: Open-Meteo (weather), Aztro (horoscopes)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy! (auto-detects Vite)

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## PWA Setup

The app includes:
- `manifest.json` for "Add to Home Screen"
- Mobile-optimized viewport
- App icons (generate PNGs from `public/generate-icons.html`)

### Generate App Icons

1. Open `public/generate-icons.html` in a browser
2. Right-click each canvas → "Save image as..."
3. Save as `icon-192.png` and `icon-512.png` in `/public`
4. For `apple-touch-icon.png`, use the 192px version

## Customization

Edit `src/GoodLuckChuck.jsx`:
- **Colors**: `const C = { ... }` at top
- **Your birth chart**: `const birthChart = { ... }`
- **Classes**: `const classSchedule = [ ... ]`
- **Default trips/birthdays**: Update the `DEFAULT_*` constants

## Credits

Made with 💚 for ADHD brains everywhere.

Chuck says: "You've got this!" 🍀

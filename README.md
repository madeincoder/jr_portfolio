# 🕹️ Jahangir Alom — Retro Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com)

A pixel-perfect, retro-themed portfolio website showcasing creative full-stack development work with CRT effects, neon aesthetics, and chiptune vibes.

<p align="center">
  <img src="assets/images/preview.png" alt="Portfolio Preview" width="600">
</p>

## ✨ Features

- **CRT Monitor Effects** — Scanlines, screen vignette, turn-on animation, and noise overlay
- **Glitch Typography** — Cyberpunk-inspired glitch effect on headings
- **Typewriter Animation** — Dynamic phrases cycling with a retro terminal cursor
- **Terminal Window UI** — Interactive about section styled as a classic terminal
- **Animated Counters** — Stats that count up when scrolled into view
- **FAQ Accordion** — Collapsible FAQ items with smooth transitions
- **Contact Form** — Terminal-styled form with validation and success feedback
- **Particle Effects** — Floating retro dust particles on the hero section
- **Mouse Glow** — Dynamic cursor glow that follows mouse movement
- **Tilt Cards** — 3D parallax tilt effect on project and service cards
- **Scroll Reveal** — Staggered entry animations for all sections
- **Floppy Disk Decor** — Pixel-floppy decorations on project cards
- **Mobile Responsive** — Fully responsive with hamburger menu navigation

## 🎨 Sections

1. **Home** — Hero section with animated typing and glitch title
2. **About** — Terminal-styled bio with animated stats
3. **Services** — Web Dev, UI/UX Design, and Retro Consulting cards
4. **Projects** — 6 project cards with tech tags and floppy decorations
5. **Testimonials** — Client quotes with ribbon badges
6. **FAQ** — Accordion-style frequently asked questions
7. **Contact** — Terminal-themed contact form with social links

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, animations, grid, flexbox, media queries
- **Vanilla JavaScript** — DOM manipulation, Intersection Observer, form validation
- **Google Fonts** — Press Start 2P + VT323 (retro monospace)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0

### Development

```bash
# Install dependencies
npm install

# Start the dev server at http://localhost:3000
npm run dev
```

### Build

```bash
# This is a static site — no build step required
# Just copy all files to your hosting provider
npm run build
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. Push this repo to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Netlify auto-detects the static site config from `netlify.toml`
6. Click "Deploy"

Or use the Netlify CLI:

```bash
npx netlify-cli deploy --prod --dir=.
```

### Deploy to Vercel

```bash
npx vercel --prod
```

### Deploy to GitHub Pages

1. Go to your repo → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, root folder `/`
4. Save — your site will be live at `https://<username>.github.io/<repo>/`

### Deploy to any Static Hosting

Simply copy all files and folders to your hosting provider's public directory.

## 📁 Project Structure

```
jr_portfolio/
├── index.html              # Main portfolio page (entry point)
├── styles.css              # All CSS styles
├── script.js               # All JavaScript interactivity
├── package.json            # Project metadata & dependencies
├── netlify.toml            # Netlify deployment config
├── robots.txt              # Search engine crawler rules
├── sitemap.xml             # XML sitemap for SEO
├── README.md               # This file
├── .gitignore              # Git ignore rules
├── assets/                 # Static assets
│   ├── images/             # Image files
│   ├── icons/              # Favicon and icon files
│   └── fonts/              # Custom fonts (if any)
├── byteforge/              # Project detail page
│   └── index.html
├── cyberdash/              # Project detail page
│   └── index.html
├── holovault/              # Project detail page
│   └── index.html
├── pixelquest/             # Project detail page
│   └── index.html
├── retro/                  # Service detail page
│   └── index.html
├── retrochat/              # Project detail page
│   └── index.html
├── synthwave/              # Project detail page
│   └── index.html
├── uiux/                   # Service detail page
│   └── index.html
└── webdev/                 # Service detail page
    └── index.html
```

## 🧩 Customization

### Colors

Edit the CSS variables in `:root` in `styles.css`:

```css
:root {
  --neon-green: #33ff33;
  --neon-cyan: #00ffff;
  --neon-magenta: #ff00ff;
  --neon-amber: #ffb000;
  /* ... */
}
```

### Content

Update the HTML in `index.html` to personalize:
- Name, tagline, bio text
- Service descriptions
- Project details and links
- Testimonials quotes
- Social media links
- Contact form email endpoint

### Typing Animation

Edit the `phrases` array in `script.js`:

```javascript
const phrases = [
  'Full-Stack Developer',
  'Pixel Art Enthusiast',
  // ... add your own
];
```

## 📄 License

MIT © 2024 Jahangir Alom

---

<p align="center">
  <code>> Built with 💖 and pixel dust</code>
</p>

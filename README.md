# Vine Social Tokyo - Restaurant Website

A modern, elegant website for Vine Social Tokyo restaurant featuring Indian flavours with a modern tapas experience. Built with React (Create React App) and a small **FastAPI** service on Vercel that **emails contact form submissions**. Menu, gallery, and site contact details live in **`frontend/src/data/siteContent.js`** (no database).

**Source:** host this repo on **GitHub**, then connect the same repo to **Vercel** for automatic deploys on push to your production branch (usually `main`).

---

## ☁️ Architecture (production)

| Layer | Service | Notes |
|--------|---------|--------|
| Frontend + API host | [Vercel](https://vercel.com) | Static React build + Python function for `/api/contact`. [Hobby limits](https://vercel.com/docs/plans/hobby) apply. |
| Contact delivery | **SMTP (e.g. Gmail)** | Form posts hit your API, which sends mail to **`ssvinesocial@gmail.com`** (override with `CONTACT_TO_EMAIL`). |
| Static content | **Repo (`siteContent.js`)** | Edit menu, gallery images, hours, and displayed email/phone there — no CMS without adding one. |

There is **no database** and **no admin panel**. The API is only for sending email; you may still see **brief cold starts** on the serverless function after idle time.

---

## 🐙 GitHub

### First-time publish (from this folder)

You need a GitHub account. **`backend/.env` is never committed** (copy from `.env.example` locally only).

**Option A — GitHub CLI** (install [GitHub CLI](https://cli.github.com/) if needed):

```bash
gh auth login
gh repo create vine-social-tokyo --public --source=. --remote=origin --push
```

Use another repo name if `vine-social-tokyo` is already taken.

**Option B — github.com**

1. Create a **new empty repository** (no README/license) on GitHub.
2. In this project folder:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

### Clone (for you or teammates)

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

1. **Never commit secrets.** `backend/.env` is gitignored. Copy `.env.example` to `backend/.env` locally and add Gmail **App Password** values (see [Email](#email-gmail-smtp)).
2. **Deploy:** In [Vercel](https://vercel.com) → *Add New Project* → *Import Git Repository* → pick this GitHub repo. Root directory stays the **repository root** (where `vercel.json` lives). Add the same SMTP-related variables in Vercel *Environment Variables*.
3. **Optional:** protect `main`, use pull requests for changes, and align Vercel’s *Production Branch* with the branch you deploy from.

---

## 📁 Project Structure

```
repository-root/
├── backend/
│   ├── server.py           # FastAPI app (Vercel entrypoint + local uvicorn)
│   ├── requirements.txt    # Delegates to root requirements.txt
│   └── .env                # Local backend env (gitignored — create from .env.example)
├── frontend/               # React (CRACO + Tailwind)
│   ├── public/             # Static assets (e.g. logo.png, gallery/*.png)
│   ├── .npmrc              # legacy-peer-deps=true (used by Vercel install + local npm)
│   ├── src/
│   │   ├── lib/apiBase.js       # API base for /api/contact
│   │   ├── data/siteContent.js  # Menu, gallery, settings (edit in repo)
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js          # BrowserRouter + routes
│   │   └── …
│   ├── package.json
│   └── …
├── requirements.txt        # Python deps for Vercel + local API
├── pyproject.toml            # [tool.vercel] entrypoint → backend.server:app
├── vercel.json               # CRA build + SPA rewrites (excludes /api/*)
├── .env.example              # Copy to backend/.env for local dev
├── design_guidelines.json
└── README.md
```

---

## 🎨 Design Theme

**Dark Luxury + Warm + Elegant**

- **Colors:**
  - Background: `#0F0F0F` (Deep black)
  - Surface: `#1B1C1A` (Charcoal)
  - Primary/Gold: `#CBA052`
  - Secondary/Deep Green: `#1B3B36`
  - Text Primary: `#F5F2E9` (Warm beige)
  - Text Secondary: `#A3A199` (Muted gray)

- **Typography:**
  - Headings: `Cormorant Garamond` (Elegant serif)
  - Body: `Outfit` (Clean modern sans-serif)

- **Special Effects:**
  - Glassmorphism on header (backdrop blur + transparency)
  - Bento grid layout for gallery (asymmetrical, varying sizes)
  - Hover animations on images (scale + zoom)
  - Smooth scrolling and transitions

---

## 🚀 Features

### Phase 1 (Completed)

1. **Main Section (Hero)**
   - Full-screen hero image with overlay
   - Restaurant name, tagline, and CTA buttons
   - Smooth scroll animations

2. **About Us Section**
   - Who we are, concept, why different
   - Image-text grid layout
   - Warm, inviting copy

3. **Menu Page**
   - Six categories with items defined in `frontend/src/data/siteContent.js`
   - Card layout with optional images

4. **Gallery Page**
   - Bento-style grid from `siteContent.js`

5. **Party/Catering Page**
   - Birthday parties, corporate events, private gatherings
   - Feature cards with icons
   - Custom package CTA

6. **Contact Page**
   - Contact form (name, phone, email, message)
   - Google Maps integration
   - Address, phone, email, Instagram, WhatsApp links
   - **Submissions emailed** to `ssvinesocial@gmail.com` (configurable) via SMTP — not stored in a database

7. **Social Media Integration**
   - Instagram, email, phone links in header and footer
   - WhatsApp direct chat button

8. **Footer**
   - Address, opening hours, social links (from `siteContent.js`)
   - Quick navigation links
   - Copyright information

### Phase 2 (Future Enhancements)

- Online reservations system
- Online party booking
- Payment integration
- Event calendar
- Newsletter subscription

---

## 📂 File Purposes

### Backend Files

| File | Purpose |
|------|---------|
| `backend/server.py` | FastAPI: **POST `/api/contact`** only — sends email via SMTP |
| Root `requirements.txt` | Python dependencies installed by Vercel and recommended for local `pip install` |
| `backend/requirements.txt` | Thin file: `-r ../requirements.txt` |
| `backend/.env` | Local env (see `.env.example` at repo root) |

### Frontend Files

| File | Purpose |
|------|---------|
| **Components** | |
| `Header.js` | Top navigation bar with logo, menu links, social icons, mobile menu |
| `Footer.js` | Footer with brand, contact info, hours, social links |
| **Pages** | |
| `Home.js` | Homepage: Hero section, about preview, menu highlights, CTA sections |
| `About.js` | About page: Story, concept, why different sections |
| `Menu.js` | Menu page: category tabs, items from `data/siteContent.js` |
| `Gallery.js` | Gallery page: images from `data/siteContent.js` |
| `Parties.js` | Parties & events page: Packages, catering info |
| `Contact.js` | Contact page: form → `/api/contact` (email); copy from `siteContent.js` |
| **Styles** | |
| `index.css` | Global styles, custom CSS variables, utility classes |
| `App.css` | Component-specific styles (hero overlay, bento grid, hover effects) |
| **Config** | |
| `App.js` | `BrowserRouter`, routes, layout |
| `src/lib/apiBase.js` | API base URL for `POST /api/contact` |
| `src/data/siteContent.js` | **Edit here:** menu, gallery, hours, phone, `ssvinesocial@gmail.com`, etc. |
| `package.json` | Node.js dependencies and scripts |
| `.env` / `.env.production` | Optional `REACT_APP_BACKEND_URL` (omit on Vercel for same-origin API) |

---

## 🗂️ Static content (no database)

Menu, gallery, and displayed contact details are in **`frontend/src/data/siteContent.js`**. Edit that file and redeploy to update the site.

---

## 🔑 API

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/contact` | Body: `{ name, phone, email, message }` → email to **`CONTACT_TO_EMAIL`** (default `ssvinesocial@gmail.com`). Needs `SMTP_USER` and `SMTP_PASSWORD`. |

---

## ✉️ Email (Gmail SMTP)

1. On the **sending** Gmail account, use an **[App Password](https://support.google.com/accounts/answer/185833)**.
2. Set `SMTP_USER`, `SMTP_PASSWORD`, and optionally `CONTACT_TO_EMAIL`, `SMTP_HOST`, `SMTP_PORT` in Vercel or `backend/.env`.

The message uses **`Reply-To: <visitor email>`** so you can reply directly.

---

## 🛠️ Tech Stack

### Frontend
- React, React Router, Tailwind, Framer Motion, Lucide, Axios (contact POST only)

### Backend
- FastAPI, Pydantic, stdlib `smtplib` (SSL)

### Database
- None

---

## 📦 Installation & Setup

### Prerequisites
- Python 3.11+
- Node.js 18+

### Backend (local)

```bash
pip install -r requirements.txt
copy .env.example backend\.env   # then add SMTP_USER / SMTP_PASSWORD
uvicorn backend.server:app --reload --host 127.0.0.1 --port 8000
```

### Frontend (local)

```bash
cd frontend
npm install
npm start
```

`frontend/.npmrc` sets `legacy-peer-deps=true`, so a plain `npm install` matches CI/Vercel. If the dev server errors on **Windows** with file watcher **`EBUSY`** (often on files under `public/`), try:

```bash
# PowerShell example
$env:CHOKIDAR_USEPOLLING = "true"
npm start
```

Leave `REACT_APP_BACKEND_URL` unset so `/api` is proxied to port 8000 (`craco.config.js`).

### Environment variables

See **`.env.example`** at the repo root. You need **`SMTP_USER`** and **`SMTP_PASSWORD`** for contact email to work.

---

## 🎯 How to Use

### Visitors
Browse the site; use **Contact** to email inquiries to **`ssvinesocial@gmail.com`** (or `CONTACT_TO_EMAIL`).

### Owners
1. Edit **`frontend/src/data/siteContent.js`** for menu, gallery, hours, and displayed contact info.
2. Configure **SMTP** on the server (Vercel env or `backend/.env`).

---

## 📸 Images (menu & gallery)

Put **HTTPS image URLs** or paths under **`frontend/public/`** (e.g. `/gallery/photo.png`) in `frontend/src/data/siteContent.js`. There is no upload API; add files to `public/` and reference them in code, then commit and deploy.

---

## 🎨 Customization Guide

### Changing Colors
Edit `frontend/src/index.css`:
```css
:root {
  --background: 15 15 15;        /* Background color */
  --primary: 203 160 82;         /* Gold accent */
  --secondary: 27 59 54;         /* Deep green */
  /* ... */
}
```

### Changing Fonts
Edit `frontend/src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Adding Menu Categories
Update the `CATEGORIES` array in **`frontend/src/pages/Menu.js`** and add matching items in **`frontend/src/data/siteContent.js`**.

---

## 🚨 Important notes

1. Never commit **`SMTP_PASSWORD`** or real `.env` files.
2. **Gmail** has daily send limits on consumer accounts; heavy traffic may need Google Workspace or another SMTP provider.
3. **Vercel Hobby** has [usage limits](https://vercel.com/docs/plans/hobby).

---

## 🧪 Testing

- [ ] Contact form succeeds when SMTP is set in `backend/.env`
- [ ] Inbox receives the message with correct **Reply-To**
- [ ] Menu/gallery reflect edits in `siteContent.js`

```bash
curl -X POST "http://127.0.0.1:8000/api/contact" -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"phone\":\"0\",\"email\":\"you@example.com\",\"message\":\"Hi\"}"
```

---

## 🔄 Deployment (Vercel + GitHub)

1. Push this repository to **GitHub** (empty repo → add `origin` → `git push -u origin main`).
2. In Vercel: **Add New Project** → **Import** the GitHub repo. Project **Root Directory** = repo root (leave default so `vercel.json` and `pyproject.toml` are used).
3. Under **Environment Variables**, add **`SMTP_USER`**, **`SMTP_PASSWORD`**, and optionally **`CONTACT_TO_EMAIL`**, **`SMTP_HOST`**, **`SMTP_PORT`**, **`CORS_ORIGINS`** (use your real site URL(s) instead of `*` in production).
4. Deploy. Leave **`REACT_APP_BACKEND_URL`** unset in the frontend build so the SPA posts to **`/api/contact`** on the same host.

**Free tier:** Vercel Hobby is often enough for a small brochure site; SMTP is usually free within Gmail limits.

---

## 📝 License

Proprietary — Vine Social Tokyo © 2024–2026

---

## 👨‍💻 Development

Built with ❤️ for Vine Social Tokyo

For questions or support, contact the development team.

---

## 🎉 What's Next?

After testing Phase 1, consider implementing Phase 2 features:
- Online reservation system
- Payment gateway (Stripe/PayPal)
- Event calendar with booking
- Email newsletter integration
- Customer loyalty program
- Multi-language support (English/Japanese)

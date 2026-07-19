# Sharath Pillai — Modern Portfolio

A modern, recruiter-focused portfolio built with **React (Vite + Tailwind CSS)** and a **C# ASP.NET Core** contact API.

## Features

- No profile photo — clean, professional layout for HR & recruiters
- Hero with "Open to Work" badge and CV download
- About, skills, experience timeline, and education
- Featured full-stack projects with thumbnails + mini learning projects
- Project filter (All / Full Stack / Frontend)
- Contact form that sends email to **spillai.developer@gmail.com**
- Social links: LinkedIn, GitHub, LeetCode
- Fully responsive mobile navigation
- SEO meta tags

## Quick Start

### Frontend (React)

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Contact API (C#)

```bash
cd api
dotnet run
```

API runs at [http://localhost:5219](http://localhost:5219)

### Enable Email (Gmail)

1. Enable 2-Step Verification on your Google account
2. Create an [App Password](https://myaccount.google.com/apppasswords) for "Mail"
3. Set credentials in `api/appsettings.Development.json`:

```json
{
  "Email": {
    "SenderEmail": "spillai.developer@gmail.com",
    "SenderPassword": "your-16-char-app-password"
  }
}
```

> **Never commit real passwords.** Use User Secrets in production:
> `dotnet user-secrets set "Email:SenderPassword" "your-app-password"`

### Run Both Together

1. Terminal 1: `cd api && dotnet run`
2. Terminal 2: `cd client && npm run dev`

The Vite dev server proxies `/api/*` to the C# backend.

## Deploy

### Frontend (Netlify / Vercel)

```bash
cd client
npm run build
```

Deploy the `client/dist` folder. The included `netlify.toml` handles SPA routing.

### API (Azure / Railway / Render)

Deploy the `api/` folder as an ASP.NET Core app. Set environment variables:

- `Email__SenderEmail`
- `Email__SenderPassword`
- `Email__RecipientEmail`

Update CORS origins in `api/Program.cs` with your live domain.

## Update Your Info

Edit `client/src/data/portfolio.js` to update:

- Social links (GitHub, LeetCode URLs)
- Project URLs and descriptions
- Experience and skills

Replace `client/public/images/my-cv.pdf` with your latest CV.

## Project Structure

```
├── client/          React frontend
├── api/             C# contact API
├── images/          Original assets (also copied to client/public/images)
├── index.html       Legacy portfolio (kept for reference)
└── netlify.toml     Netlify deploy config
```

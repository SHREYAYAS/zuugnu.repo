# Static Export Deployment Guide

Your Next.js site is now configured to export as **static HTML** instead of running a Node.js server.

## ✅ What's Been Done

1. **next.config.ts updated**: Added `output: 'export'` and `images: { unoptimized: true }`
2. **package.json updated**: Added `export` script that runs `next build`
3. **Static HTML generated**: All pages exported to `/out` folder locally and `/home/saubhtech/zuugnu-platform/out` on server
4. **Copied to `/home/saubhtech/public_html`**: User-owned directory with full static files

## 📁 Generated Pages

- `/index.html` — Home page
- `/login.html` — Login page with Register/Sign In tabs (v2)
- `/login/` — Directory for login route
- `/_next/` — Next.js static assets (CSS, JS)

## 🚀 Deployment Workflow

### Local Development
```bash
npm run dev      # Run dev server
npm run export   # Generate static HTML to /out
```

### Push to GitHub
```bash
git add .
git commit -m "your message"
git push origin main
```

### Deploy to Server (Manual)
```bash
ssh -i github-deploy-key saubhtech@88.222.241.228

cd /home/saubhtech/zuugnu-platform
git fetch origin main
git reset --hard origin/main
npm install --legacy-peer-deps
npm run export

# Copy to web root (currently /home/saubhtech/public_html)
cp -r out/* ~/public_html/
```

## ⚠️ Server Configuration Required

Your domain (`zuugnu.com`) currently serves from `/home/saubhtech/web/zuugnu.com/public_html` (root-owned).

**To show the static site live, ask your hosting provider to:**

1. **Update nginx vhost for zuugnu.com** to serve from:
   ```
   /home/saubhtech/public_html
   ```
   
   OR copy the static files to the root-owned directory:
   ```bash
   sudo cp -r /home/saubhtech/zuugnu-platform/out/* /home/saubhtech/web/zuugnu.com/public_html/
   sudo chown -R root:root /home/saubhtech/web/zuugnu.com/public_html/
   ```

2. **Verify** by visiting:
   - `https://www.zuugnu.com` (should show new static site with login page)
   - `https://www.zuugnu.com/login` (should show login UI with v2)

## ✨ Benefits of Static Export

- ✅ **Faster load times** (no Node.js processing)
- ✅ **Lower server resource usage** (no running processes)
- ✅ **Can be served from CDN**
- ✅ **Works on cheaper hosting** (static-only hosting plans)
- ✅ **Better SEO** (pure HTML)

## 🔄 Automated Deployment (Future)

Once nginx is reconfigured, you can automate the deployment:

```bash
# On server, create /home/saubhtech/deploy-static.sh
#!/bin/bash
cd /home/saubhtech/zuugnu-platform
git fetch origin main
git reset --hard origin/main
npm install --legacy-peer-deps
npm run export
cp -r out/* /home/saubhtech/public_html/
chmod -R 755 /home/saubhtech/public_html/
```

Then update GitHub Actions to run this script after deploying.

## 📊 Current Status

| Component | Status | Location |
|-----------|--------|----------|
| Static HTML Built | ✅ | `/home/saubhtech/zuugnu-platform/out/` |
| Copied to Server | ✅ | `/home/saubhtech/public_html/` |
| Domain Configured | ⏳ Pending | Needs nginx/host config update |
| Live on www.zuugnu.com | ⏳ Pending | After nginx update |

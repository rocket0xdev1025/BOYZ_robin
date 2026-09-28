# BOYZ N THE HOOD — Offline Clone

Full frontend clone of https://www.boyzrobinhood.com with all assets stored locally.

## Customizations
- **Contract address:** `0xb76f97af3d35b698e1cac4916fd9e4b306b17384`
- **Twitter / X:** [@boyz_n_rhood](https://x.com/Boyz_N_TheHood)
- **Telegram:** [@boyz_n_rhood](https://t.me)

## Pages
| Route | Page |
|-------|------|
| `/` | Home |
| `/characters` | The Boyz |
| `/places` | The Hood |
| `/explore` | Explore |
| `/media` | Media |
| `/gang` | The Gang |

## Run offline (recommended)

Requires [Node.js](https://nodejs.org) (you already have it if `node -v` works).

```powershell
cd C:\Users\Steiner\boyz-robinhood-clone
node serve.js
```

Or:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Opens **http://127.0.0.1:8080/** automatically.

Optional port: `node serve.js 5500`

> Do not open `index.html` via `file://` — client routing and ES modules need a local server.

## Assets layout
```
boyz-robinhood-clone/
  index.html
  fonts.css          # offline Google Fonts
  fonts/             # .woff2 font files
  assets/            # JS, CSS, images (hashed Vite build)
  media/
    posters/         # video posters
    videos/          # short clips
  trailer-1.mp4
  boyz-logo.png
  favicon.png
  serve.ps1 / serve.py
```

## Notes
- Frontend-only. Dexscreener live price API and the bandana image generator backend need the internet (they fail gracefully offline).
- Buy / Uniswap links use the configured contract address externally.
- All images, videos, fonts, JS, and CSS load from this local folder — no Google Fonts or CDN required for the UI itself.
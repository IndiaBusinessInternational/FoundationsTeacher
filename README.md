# IBI Skilled Foundations Teacher

**Live:** https://teacher.indiabusinessinternational.online

Your friendly AI teacher — every NCERT concept from **Class 1 to Class 12**, explained
simply, taught as an animated lesson in her own voice, and checked with a quick quiz.
Meet **Sastika Miss** 🌸.

## What the app does (v5.0)

- **Ask** — type, speak (🎤) or photograph a question. The answer cites the real textbook
  page, comes with an **animated lesson** that draws itself while Sastika speaks, and ends
  with **Check your understanding** — three questions with instant feedback.
- **Library** — browse every textbook the teacher has read, class → subject → book →
  chapter, and tap *Explain*, *Questions* or *Open book*.
- **Recent lessons** — everything you asked, saved on your device, one tap to return.
- **Settings** — Light / Dark / System theme, text size, Sastika's voice, lesson speed,
  captions, the AI engine, and *Install as an app*.
- A real lesson **player**: progress by scene, play/pause, previous/next, captions,
  speed, full screen.
- Installable **PWA** (manifest + service worker), phone-first layout with a bottom
  tab bar, 16px type with nothing under 12px, 44px tap targets.

## How it works

- **The laptop is the server.** A dependency-free Node server (`Backend\server.js`, port
  3200) runs on the office laptop and is published through a Cloudflare Tunnel. This
  repository holds only the front end — there is no server behind the GitHub copy.
  The server and the app share **one version number** per release (About in Settings).
- **The teacher has really read the books.** All English-medium NCERT textbooks
  (Class 1–12: English, Mathematics, Science — Physics, Chemistry, Biology; Social
  Studies — History, Geography, Economics, Political Science; Commerce, Accountancy and
  more) are downloaded class-wise on the laptop, text-extracted and indexed. Every answer
  retrieves the most relevant textbook passages first and cites them.
- **Five engines.** Out of the box answers come from the on-device IBI Local engine
  (nothing leaves the laptop, no API cost). Settings → AI engine accepts a DeepSeek,
  Gemini, ChatGPT or Claude API key — any key upgrades the teacher's answers and animated
  lessons automatically. Keys are stored only in `Backend\config.json` on the laptop and
  are never sent back to the browser or published.
- **Answers teach, not just tell.** Each reply is a simple spoken-style explanation plus
  an **animated lesson, generated live**: the teacher scripts scenes (fractions, number
  lines, bar and pie charts, process flows, life cycles, labelled diagrams, timelines,
  equations, the real textbook figure) that draw themselves on screen, full-screen with
  captions, while Sastika Miss speaks each scene aloud — then a short quiz.

## Laptop-side layout (not in this repo)

```
Backend\
  server.js            the whole server
  config.json          access PIN + engine settings (never committed)
  tools\download_textbooks.py   NCERT downloader (re-run to top up)
  tools\build_index.py          PDF -> searchable index (re-run after downloads)
  textbooks\Class 01..12\...    the PDF library, organised class-wise
  data\index\                   the built index
START-TEACHER.bat      run the server with a visible window
```

© India Business International — eCommerce for the World

# IBI Skilled Foundations Teacher — v6.1

v6.1 (6 Oct 2026): photo questions are read on `qwen3.5:9b` (the graphics-card model) and photos are sent at 1280 px — the 4B runs on the processor since 15 Sep 2026 and took ~2 minutes a photo. App and server are both 6.1.

**Live:** https://teacher.indiabusinessinternational.online

Your friendly AI teacher — every NCERT concept from **Class 1 to Class 12**, explained
simply, taught as an animated lesson in her own voice, and checked with a quick quiz.
Meet **Sastika Miss** 🌸.

## What the app does (v6.0)

- **Ask** — type, speak (🎤, English or Tamil) or photograph a question. Sastika explains
  like an **expert teacher** — why it matters, what you already know, step by step,
  **how it works**, an everyday example, a common mistake, what to remember — citing the
  real textbook page.
- **How it works, on screen** — a matching **NCERT official video** (YouTube's
  privacy-enhanced player) when one fits, and an **animated lesson** where things
  *move* through the system (blood round the heart, water round its cycle, current
  round a circuit) while Sastika speaks.
- **English or Tamil** answers, narration and quizzes, chosen per learner.
- **Learner profiles** on the device (first name or nickname, class, sticker,
  language, daily goal) — nothing personal ever reaches the server.
- **My progress** — streak, today's goal, lessons this week and **chapter mastery**
  (Needs practice → Familiar → Proficient → Mastered).
- **Check your understanding** after every answer and **10-question practice tests**
  from the Library or Progress, with *Try again* and *Explain what I got wrong*.
- **Library** — class → subject → book → chapter: *Explain*, *Questions*,
  *Practice test*, *Open book*, with a mastery badge per chapter.
- **Recent lessons** — search, ⭐ save, delete; **Print notes** / save as PDF.
- **👍 / 👎 / Report a mistake** on every answer, read by the owner.
- **Child safety** — safe-teaching rules, a caring helpline line (Tele-MANAS 14416,
  Childline 1098) when a child sounds distressed, a warning before sending personal
  details, and a public privacy notice (`/privacy`).
- **Owner settings** at `#owner` — AI engines, API keys, the video list and the
  feedback inbox, behind the CEO password (asked every time; never stored).
- Security headers (CSP, HSTS, no framing), per-address limits, `/api/health`,
  installable **PWA**, light/dark, 16px type, 44px targets, phone-first layout.

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
- **Five engines.** The owner picks the engine per job in Owner settings (answers currently on Gemini,
  falling back to the on-device IBI Local engine when Google is busy; photos read on the
  laptop). Owner settings accept a DeepSeek,
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

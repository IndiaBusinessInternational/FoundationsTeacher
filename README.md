# IBI Skilled Foundations Teacher

**Live:** https://teacher.indiabusinessinternational.online

Your friendly AI teacher — every NCERT concept from **Class 1 to Class 12**, explained
simply, with an animated video lesson and a spoken lesson. Meet **Sastika Miss** 🌸.

## How it works

- **The laptop is the server.** A dependency-free Node server (`Backend\server.js`, port
  3200) runs on the office laptop and is published through a Cloudflare Tunnel. This
  repository holds only the front end — there is no server behind the GitHub copy.
- **The teacher has really read the books.** All English-medium NCERT textbooks
  (Class 1–12: English, Mathematics, Science — Physics, Chemistry, Biology; Social
  Studies — History, Geography, Economics, Political Science; Commerce, Accountancy and
  more) are downloaded class-wise on the laptop, text-extracted and indexed. Every answer
  retrieves the most relevant textbook passages first and cites them.
- **Five engines.** Out of the box answers come from the on-device IBI Local engine
  (nothing leaves the laptop, no API cost). The ⚙ engine settings in the app accept a
  DeepSeek, Gemini, ChatGPT or Claude API key — any key upgrades the teacher's answers
  and animated lessons automatically. Keys are stored only in `Backend\config.json`
  on the laptop and are never sent back to the browser or published.
- **Answers teach, not just tell.** Each reply is a simple spoken-style explanation plus
  an **animated video lesson, generated live**: the teacher scripts scenes (fractions,
  number lines, bar and pie charts, process flows, life cycles, labelled diagrams,
  timelines, equations) that draw themselves on screen, full-screen with subtitles,
  while Sastika Miss speaks each scene aloud. No video files are rendered — the
  animation is drawn instantly in the browser for any concept, at zero cost.

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

© India Intelligence International — intelligence for the World

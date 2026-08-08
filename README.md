# IBI Skilled Foundations Teacher

**Live:** https://teacher.indiabusinessinternational.online

Your friendly AI teacher — every NCERT concept from **Class 1 to Class 12**, explained
simply, with lesson slides and a spoken lesson. Meet **Meera Miss** 🌸.

## How it works

- **The laptop is the server.** A dependency-free Node server (`Backend\server.js`, port
  3200) runs on the office laptop and is published through a Cloudflare Tunnel. This
  repository holds only the front end — there is no server behind the GitHub copy.
- **The teacher has really read the books.** All English-medium NCERT textbooks
  (Class 1–12: English, Mathematics, Science — Physics, Chemistry, Biology; Social
  Studies — History, Geography, Economics, Political Science; Commerce, Accountancy and
  more) are downloaded class-wise on the laptop, text-extracted and indexed. Every answer
  retrieves the most relevant textbook passages first and cites them.
- **Two engines.** Out of the box answers come from the on-device IBI Local engine
  (nothing leaves the laptop, no API cost). Adding a cloud API key in
  `Backend\config.json` switches to the faster cloud engine automatically.
- **Answers teach, not just tell.** Each reply is a simple spoken-style explanation, an
  animated slide deck, and a Play-lesson button that reads the lesson aloud while
  Meera Miss talks.

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

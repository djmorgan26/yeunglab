# Google Sheets API Setup

This guide walks through enabling the Sheets API and wiring credentials so `npm run data:create-sheet` and `npm run data:sync` work.

## Overview

The content pipeline is:

```
Google Sheet (6 tabs)  →  npm run data:sync  →  data/*.json  →  Next.js build
```

---

## Step 1 — Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com).
2. Click **Select a project** → **New Project**.
3. Name it `yeunglab` (or anything memorable) → **Create**.

---

## Step 2 — Enable the Google Sheets API

1. In your project, go to **APIs & Services → Library**.
2. Search for **Google Sheets API** → click it → **Enable**.

---

## Step 3 — Create a Service Account

Service accounts let the scripts authenticate without interactive login.

1. Go to **APIs & Services → Credentials → Create Credentials → Service account**.
2. Name: `yeunglab-sheets` → **Create and continue** → **Done**.
3. Click the service account email to open it.
4. Go to the **Keys** tab → **Add Key → Create new key → JSON** → **Create**.
5. A `.json` file downloads — keep it safe (never commit it).

---

## Step 4 — Fill in `.env`

Copy `.env.example` to `.env` and fill in two fields from the downloaded JSON:

| `.env` key | JSON field |
|---|---|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | `client_email` |
| `GOOGLE_PRIVATE_KEY` | `private_key` |

```bash
cp .env.example .env
```

The `private_key` value includes literal `\n` characters — paste it exactly as-is inside double quotes.

---

## Step 5 — Create the Google Sheet

```bash
npm install
npm run data:create-sheet
```

The script will:
- Create a new spreadsheet titled **"Yeung Lab Content"** in the service account's drive.
- Add 6 tabs: **People, Alumni, Projects, Publications, Studies, News**.
- Populate each tab with a header row and one sample row.
- Print the **Spreadsheet ID** — copy it into `GOOGLE_SHEET_ID` in `.env`.

---

## Step 6 — Share the Sheet

The sheet is owned by the service account. To edit it in Google Sheets UI:

1. Open the sheet URL printed by the script.
2. Click **Share** → enter the team Google account (e.g. `anna@emory.edu` or your personal Gmail).
3. Grant **Editor** access → **Send**.

Anyone with Editor access can now update content directly in the spreadsheet.

---

## Step 7 — Sync Data

Pull the sheet into local JSON files consumed by the Next.js build:

```bash
npm run data:sync
```

Output files written to `data/`:

| File | Source tab |
|---|---|
| `data/people.json` | People |
| `data/alumni.json` | Alumni |
| `data/projects.json` | Projects |
| `data/publications.json` | Publications |
| `data/studies.json` | Studies |
| `data/news.json` | News |

---

## CI / Vercel Build

Add the following environment variables to Vercel (Settings → Environment Variables):

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEET_ID`

Then add `npm run data:sync` as a pre-build step, or call it inside the Next.js build config.

---

## Sheet Schema Reference

### People

| Column | Description |
|---|---|
| name | Full name |
| pronouns | e.g. she/her |
| role | PI, PhD Student, Postdoc, Research Coordinator, etc. |
| degrees | e.g. MD, PhD |
| institution | Degree-granting institution |
| grad_year | Year of most recent degree |
| research_interests | Free text |
| fun_fact | Optional |
| highlight_summary | 1–2 sentence bio blurb |
| headshot_url | Public image URL |
| vision_quote | Optional public-facing quote |
| email | Lab email |
| linkedin | LinkedIn profile URL |
| active | TRUE / FALSE |

### Alumni

Same columns as People, plus:

| Column | Description |
|---|---|
| current_position | Job title |
| current_employer | Organization |

### Projects

| Column | Description |
|---|---|
| title | Project name |
| description | 1–2 paragraph description |
| status | Active, Completed, Planned |
| collaborators | Comma-separated names/institutions |
| funding_source | Grant name / funder |
| start_date | YYYY-MM-DD |
| end_date | YYYY-MM-DD or blank |
| tags | Comma-separated topics |
| image_url | Optional cover image |
| featured | TRUE / FALSE |

### Publications

| Column | Description |
|---|---|
| title | Paper title |
| authors | e.g. "Yeung H, Smith J" |
| journal | Journal name |
| year | 4-digit year |
| volume / issue / pages | Citation details |
| doi | DOI string |
| link | Full URL |
| tags | Comma-separated topics |
| featured | TRUE / FALSE |

### Studies

| Column | Description |
|---|---|
| title | Study name |
| description | IRB-approved summary |
| status | Recruiting, Active, Closed |
| irb_number | IRB protocol number |
| eligibility | Plain-language criteria |
| contact_name | Point of contact |
| contact_email | Contact email |
| link | Optional external link |
| image_url | Optional cover image |
| featured | TRUE / FALSE |

### News

| Column | Description |
|---|---|
| title | Headline |
| date | YYYY-MM-DD |
| category | Award, Media, Event, Publication, Grant |
| summary | Short teaser (1–2 sentences) |
| content | Full text (markdown OK) |
| image_url | Optional image |
| external_link | Link to external coverage |
| published | TRUE / FALSE |

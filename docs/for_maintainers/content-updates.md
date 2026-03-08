# Yeung Lab Website — Content Update Guide

This guide is for lab members who maintain website content. **You do not need to touch any code.** All content lives in a shared Google Sheet. A developer syncs the sheet and redeploys the site when you're ready.

---

## How Updates Work

> **Important:** Editing the Google Sheet does NOT update the live website immediately.
> Changes only go live after a developer runs the sync and redeploys.

The flow is:

```
You edit the Google Sheet
        ↓
Ping the developer (David Morgan)
        ↓
Developer runs: npm run data:sync
        ↓
Developer redeploys the site to Vercel
        ↓
Changes are live on the website
```

This is intentional — it lets you draft and review changes in the sheet before they go public.

---

## Step-by-Step: Making a Content Change

1. **Open the Google Sheet** → [Yeung Lab Content](https://docs.google.com/spreadsheets/d/12KIC6gvPCcPzrrhd7-WSwbPjddrBLYvS1YnXahH4K1k/edit)
2. **Go to the correct tab** (People, Alumni, Projects, Publications, Studies, or News)
3. **Edit or add rows** following the column rules in the Tab Reference below
4. **When ready to publish**, message David Morgan and let him know what changed
5. **David will sync + redeploy** — changes are typically live within a few minutes after that

---

## Formatting Rules (apply to all tabs)

- **Dates** must be in `YYYY-MM-DD` format (e.g., `2024-06-15`)
- **TRUE / FALSE** columns: type exactly `TRUE` or `FALSE` (all caps)
- **Never rename or delete column headers** (row 1) — the sync script depends on them
- **Leave optional fields blank** rather than writing "N/A" or "-"
- **No formulas, merged cells, or colored text** — plain values only
- **Do not delete rows** for past members or closed studies — set `active` or `published` to `FALSE` instead

---

## Tab Reference

### People (current lab members)

| Column | Required? | Notes |
|---|---|---|
| `name` | Yes | Full display name |
| `pronouns` | Yes | e.g. `she/her`, `they/them` |
| `role` | Yes | `PI`, `Postdoc`, `PhD Student`, `Resident`, `Fellow`, `Research Coordinator`, etc. |
| `degrees` | Yes | e.g. `MD, MSc` |
| `institution` | Yes | Degree-granting institution |
| `grad_year` | Optional | Year of most recent degree |
| `research_interests` | Yes | 1–2 sentence summary |
| `fun_fact` | Optional | Short personal note |
| `highlight_summary` | Yes | 1–2 sentence public bio blurb |
| `headshot_url` | Yes | Public image URL (1:1 crop, min 600px wide) |
| `vision_quote` | Optional | Approved public-facing quote |
| `email` | Optional | Only include if the member consents |
| `linkedin` | Optional | Full LinkedIn URL |
| `active` | Yes | `TRUE` = shown on site, `FALSE` = hidden |

### Alumni

| Column | Required? | Notes |
|---|---|---|
| `name` | Yes | Full name |
| `pronouns` | Optional | |
| `role` | Yes | Role while in the lab |
| `degrees` | Optional | |
| `institution` | Optional | |
| `grad_year` | Optional | Year they left the lab |
| `research_interests` | Optional | |
| `headshot_url` | Optional | Only if you have permission to display |
| `vision_quote` | Optional | |
| `current_position` | Yes | Job title after leaving |
| `current_employer` | Yes | Organization/institution |
| `linkedin` | Optional | Full LinkedIn URL |

### Projects (research areas)

| Column | Required? | Notes |
|---|---|---|
| `title` | Yes | Research area name |
| `description` | Yes | 2–3 sentence summary of goals and impact |
| `status` | Yes | `Active`, `Completed`, or `Planned` |
| `collaborators` | Optional | Comma-separated names or institutions |
| `funding_source` | Optional | Grant name or funder |
| `start_date` | Optional | `YYYY-MM-DD` |
| `end_date` | Optional | `YYYY-MM-DD`, leave blank if ongoing |
| `tags` | Optional | Comma-separated topics (e.g. `SGM, disparities`) |
| `image_url` | Optional | Cover image URL (16:9, min 1200px wide) |
| `featured` | Yes | `TRUE` = highlighted on site |

### Publications

| Column | Required? | Notes |
|---|---|---|
| `title` | Yes | Full paper title |
| `authors` | Yes | e.g. `Yeung H, Smith J` |
| `journal` | Yes | Journal name |
| `year` | Yes | 4-digit year |
| `volume` | Optional | |
| `issue` | Optional | |
| `pages` | Optional | e.g. `301-310` |
| `doi` | Optional | DOI string only, e.g. `10.1001/...` |
| `link` | Yes | Full URL to paper |
| `tags` | Optional | Comma-separated topics |
| `featured` | Yes | `TRUE` = shown on home page |

### Studies (clinical / recruitment)

| Column | Required? | Notes |
|---|---|---|
| `title` | Yes | Public-facing study name |
| `description` | Yes | IRB-approved copy (2–4 sentences) |
| `status` | Yes | `Recruiting`, `Active`, or `Closed` |
| `irb_number` | Optional | IRB protocol number if allowed to publish |
| `eligibility` | Yes | Plain-language eligibility criteria |
| `contact_name` | Yes | Study coordinator name |
| `contact_email` | Yes | Study coordinator email |
| `link` | Optional | Link to consent form or REDCap |
| `image_url` | Optional | Cover image URL |
| `featured` | Yes | `TRUE` = highlighted on site |

### News

| Column | Required? | Notes |
|---|---|---|
| `title` | Yes | Headline |
| `date` | Yes | `YYYY-MM-DD` |
| `category` | Yes | `Award`, `Media`, `Event`, `Publication`, or `Grant` |
| `summary` | Yes | 1–2 sentence teaser |
| `content` | Optional | Full text (plain paragraphs) |
| `image_url` | Optional | Landscape image URL (16:9) |
| `external_link` | Optional | Link to coverage or announcement |
| `published` | Yes | `TRUE` = live, `FALSE` = draft |

---

## Image Handling

- Store images in the shared **Yeung Lab Web Assets** Google Drive folder
- Use descriptive filenames: `people_howa-yeung.jpg`, `news_2024-nih-grant.jpg`
- After uploading, right-click → **Share** → set to **"Anyone with the link" (Viewer)** → copy the link
- Paste the link into the relevant `headshot_url` or `image_url` column

---

## Need Help?

- **Sheet access or content questions:** Anna Fischer
- **Website / deploy questions:** David Morgan
- **Branding or image approvals:** Emory Communications

---

> Reminder: the website only updates after David syncs and redeploys. Feel free to build up a batch of changes before pinging him — there's no need to request a deploy for every small edit.

Agents working in this repo should update the status docs appropriately when working on this plan.

**Status Legend:** Not Started · In Progress · Completed

# Yeung Lab Website Plan

## 1. Objectives
- Establish a modern, Emory-compliant hub that instantly communicates the Yeung Lab’s mission, research scope, and inclusive values.
- Showcase members, publications, and clinical studies in ways that attract collaborators, trainees, and study participants while reinforcing credibility.
- Provide clear calls-to-action for “Join the Lab,” “Newsletter,” and “Contact” so the right audiences can reach the lab quickly without extra complexity.
- Keep maintenance simple by structuring bios, research areas, studies, and publications as reusable data collections editable without code.

## 2. Audience & Message Pillars
- Trainees (medical students, residents, fellows, postdocs): spotlight mentorship, alumni outcomes, and opportunities to advance SGM dermatology research.
- Faculty collaborators & industry partners: highlight active projects, publications, and specialties to encourage partnerships and speaking invitations.
- Research participants: present approachable study descriptions, eligibility, and safety/IRB context to build trust.
- All visitors: reinforce values around equity, community impact, and rigorous science through concise copy and authentic imagery.

## 3. Scope & Information Architecture
| Section | Purpose | Key Modules |
| --- | --- | --- |
| Home (long scroll) | Narrative landing with anchor nav | Mission hero + dual CTAs, value pillars, research highlights, featured publication, testimonials/vision statements, quick links to Join/Studies/News, newsletter signup |
| About | Lab story & compliance | Lab overview, PI bio snapshot with Emory directory link, milestones/timeline, core values, Emory/branding statement |
| People | Structured roster | Role filters, cards showing photo/pronouns/degrees/interests, optional quote, alumni gallery with placements |
| Research & Clinical Studies | Explain focus areas & open studies | Cards per research area, expandable study modules with eligibility/contact/IRB info, collaborator logos |
| Publications | Credible output list | Recent publications with title/journal/date/link, filters by topic/year, link to Emory directory or Google Scholar |
| Join the Lab | Recruitment funnel | Expectations by role, process overview, link to Google Form/email, FAQ on timing and prerequisites |
| News / Updates | Freshness & storytelling | Grid of news/media/blog posts, optional social embed if approved |
| Contact | Outreach clarity | Lab email/phone, address/map, general inquiry instructions or form, compliance/disclaimer text |
| Utility | Persistent | Sticky nav with section anchors, Emory-compliant footer with logos/policies, accessibility statement |

## 4. Content & Data Strategy
- Tighten copy from existing ScholarBlogs pages (About, Lab Members, Research, Join) for scannability and re-use the most resonant messaging.
- Make a shared Google Sheet (tabs for People, Alumni, Projects, Publications, Studies, News) the single source of truth; a repo script (`npm run data:sync`) will export each tab to the structured `data/*.json` files consumed by the site.
- Require each member profile to include: name, pronouns, degrees (institution, year), role, research interests, fun fact, highlight summary, headshot URL, optional public vision quote.
- Create content templates for research areas, publications, and studies so new entries follow consistent metadata (title, description, collaborators, calls-to-action).
- Centralize visual assets (logos, headshots, lab photos) with documented crops/aspect ratios and alt-text in an asset inventory sheet, referenced in the same shared drive as the sheet.

## 5. UX & Visual Direction
- Embrace a long-scroll storytelling pattern (inspired by The Birds & The Trees) with chapter-like sections and anchor navigation for quick jumps.
- Apply Harvard’s faculty-grid discipline to the People section: uniform portrait ratios, concise descriptions, tooltips for degrees.
- Use Wilson Lab’s alternating color blocks and imagery to keep research sections lively without overwhelming Emory’s palette requirements.
- Follow Emory guidelines: Emory Blue/Oxford Blue/Gold palette, approved typography (Trade Gothic + Calluna or web-safe equivalents), proper logo lockups.
- Bake in accessibility from day one (16px+ base font, 4.5:1 contrast, keyboard-focus styles, descriptive aria labels).

## 6. Technical Architecture & Ops
- Stack: Next.js (App Router) + TypeScript deployed on Vercel as requested; use static generation wherever possible for simplicity.
- Styling: Tailwind CSS or lightweight CSS Modules with tokens for colors/spacing/typography; reserve animation for essential transitions only.
- Content layer: Google Sheet → `npm run data:sync` script that fetches each tab (via CSV export or Sheets API) and writes JSON collections (people, projects, publications, studies, news) into `data/` for the build.
- Components: hero, icon/value pillars, research cards, CTA banners, people directory with simple filters/search, publication list, news cards, footer.
- Integrations: embed Mailchimp (or Emory-approved) newsletter form, link Join CTA to Google Form, configure contact link/mail-to (form optional) once routing is defined.
- Tooling: ESLint/Prettier plus a short manual QA checklist (mobile + desktop) and Lighthouse spot checks before launch; keep the workflow lightweight.

## 7. Implementation Roadmap
1. **Discovery & Content Audit** — **Status:** Not Started (1–2 wks). Finalize scope, inventory copy/assets, decide on form/note destinations, compile publications/projects/studies, confirm Emory compliance requirements.
2. **Experience Design** — **Status:** Not Started (2 wks). Produce the site map, responsive wireframes for the long-scroll home + key detail pages, and a style tile referencing Emory branding and inspirational sites; circulate for stakeholder review.
3. **Build & CMS Wiring** — **Status:** Not Started (2–3 wks). Scaffold the repo, implement the design system, build sections/components, wire structured content, add forms/integrations, and set up accessibility/performance tooling.
4. **Content Load & QA** — **Status:** Not Started (1 wk). Import final bios/photos/projects, run cross-browser/mobile tests, complete Lighthouse/axe audits, conduct stakeholder walkthroughs, and iterate on feedback.
5. **Launch & Handoff** — **Status:** Not Started (1 wk). Configure Vercel + Emory domain, run final smoke tests, document the update workflow (README + Loom), and identify a maintenance owner.

## 8. Risks & Dependencies
- Delays in receiving updated copy (values, PI bio refresh, study descriptions) or high-res imagery will stall design/content loading.
- Newsletter/contact/join form destinations and owners are undecided, blocking CTA implementation.
- Emory branding/domain approval or IT security reviews may add lead time.
- Automatic publication feeds require API access (Emory directory, Google Scholar, Zotero); without it, manual curation remains the fallback.

---

## Reference Analysis
- **Current ScholarBlogs site:** WordPress layout with a dense sidebar, multi-level menus, and long-form biography text; hero image has no CTA and typography feels dated, so visitors must dig for lab values, people, or research information.
- **Harvard Chemistry “Our Faculty”:** Clean grid of portrait cards with concise lab summaries, breadcrumb navigation, and filters—an effective pattern for presenting many people while staying scannable.
- **The Birds & The Trees:** Long-scroll Squarespace experience with an immediate mission statement, icon-based value pillars, immersive photography, and a visual news grid; the mix of serif/sans fonts and whitespace keeps the story welcoming and easy to skim.
- **Wilson Lab Emory Research page:** Alternating color blocks, bold uppercase headlines, and short copy paired with imagery show how a single-page flow can feel energetic; anchor-style navigation and cards make each research theme digestible.

## Open Questions
- Contact intake: Should general inquiries go to howa.yeung@emory.edu, a shared inbox, or a form routed to specific admins, and are there groups who should be filtered out?
- Join the Lab workflow: Is there an existing Google Form (per role) we should embed/link, and what confirmation or follow-up messaging should applicants receive?
- Newsletter platform: Which tool (Mailchimp, Emory listserv, other) will handle subscriptions, and do we need specific privacy or double-opt-in language from Emory communications?
- Publications feed: Is a curated highlights list + link to Dr. Yeung’s Emory directory sufficient, or do we need to invest time in automating pulls from Scholar/Emory APIs?
- People/alumni data stewardship: Will the Excel sheet remain the single source of truth, who updates roles/photos when trainees graduate, and should public-facing vision statements/testimonials be included?
- Clinical studies content: Who supplies IRB-approved language, eligibility, consent/disclaimer text, and study contact info for each listing, and are there restrictions on what we can publish?

## Next Steps
1. Confirm answers to the open questions above with Anna and Dr. Yeung so CTA wiring and compliance text are locked.
2. Share the updated copy deck, spreadsheet exports, and asset folder (logos, headshots, lab photos) for ingestion.
3. Approve this project plan (IA, stack, roadmap) or note adjustments so we can move into wireframes confidently.
4. Schedule the experience design sprint (wireframes + style tile) once content owners and stakeholders are ready for reviews.

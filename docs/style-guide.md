# Yeung Lab Style Guide

Living reference for all design tokens, logo usage, and component patterns. Keep this in sync as the site evolves.

---

## Colors

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Emory Blue | `#012169` | `bg-emory-blue` / `text-emory-blue` | Primary headings, nav border, footer bg, CTAs |
| Emory Gold | `#F2A900` | `bg-emory-gold` / `text-emory-gold` | Accent, section headers in dark contexts, highlight rings |
| Warm Gray | `#F5F5F0` | `bg-warm-gray` | Alternating section backgrounds |
| Near Black | `#1A1A1A` | `text-near-black` | Body text |
| White | `#FFFFFF` | `bg-white` / `text-white` | Default page background, reversed text |

> These tokens are defined in `tailwind.config.ts` under `theme.extend.colors`.

---

## Typography

| Role | Font | Weight | Tailwind |
|---|---|---|---|
| Headlines / Display | Barlow Condensed | 700 | `font-headline font-bold` |
| Body / Paragraphs | Lora | 400 | `font-body` |
| Body Bold | Lora | 700 | `font-body font-bold` |

### Scale

| Use | Class |
|---|---|
| Page title / hero | `text-4xl font-headline font-bold` |
| Section header | `text-2xl font-headline font-bold` |
| Card title | `text-xl font-headline font-bold` |
| Body copy | `text-base font-body` (min 16px) |
| Small / caption | `text-sm font-body` |
| Fine print | `text-xs font-body` |

---

## Logos

### Files in `public/logos/`

| File | Variant | When to Use |
|---|---|---|
| `som-shield-hz-blue.png` | SOM horizontal, Emory Blue | **Nav on white background** |
| `som-shield-hz-white.png` | SOM horizontal, white/reverse | **Footer on blue background** |
| `som-shield-vt-blue.png` | SOM vertical, Emory Blue | About page hero, tall card contexts |
| `som-shield-vt-white.png` | SOM vertical, white/reverse | Dark vertical contexts |
| `som-noshield-hz-blue.png` | SOM wordmark only, blue | Compact contexts with limited width |
| `som-noshield-hz-white.png` | SOM wordmark only, white | Compact dark contexts |
| `eu-shield-hz-blue.png` | EU horizontal, Emory Blue | Secondary attribution on white |
| `eu-shield-hz-white.png` | EU horizontal, white/reverse | **Footer secondary lockup on blue** |
| `eu-shield-vt-blue.png` | EU vertical, Emory Blue | About page co-branding |

### Usage Rules

- **Nav (white bg):** `som-shield-hz-blue.png` + "Yeung Lab" text in `text-emory-blue`
- **Footer (blue bg):** `som-shield-hz-white.png` + "Yeung Lab" text in white + `eu-shield-hz-white.png` as sub-lockup
- **About hero:** `som-shield-vt-blue.png` or `eu-shield-vt-blue.png`
- **Never:** Stretch logos, use black variants on colored backgrounds, or pair shield + no-shield versions together
- **Clear space:** Maintain padding equal to the height of the "E" in Emory on all four sides of every logo
- **Alt text:** Always include descriptive alt — `"Emory School of Medicine"` for SOM logos, `"Emory University"` for EU logos

### Logo Component

```tsx
import Logo from '@/components/ui/Logo';

<Logo variant="nav" />    // SOM shield blue + "Yeung Lab" text
<Logo variant="footer" /> // SOM shield white + "Yeung Lab" text
```

---

## Component Patterns

### Cards

```tsx
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
  ...
</div>
```

### Section Blocks

Alternate `bg-white` and `bg-warm-gray` for visual rhythm:

```tsx
<section className="py-16 px-4 bg-warm-gray">
  <div className="max-w-6xl mx-auto">...</div>
</section>
```

### CTAs — Primary

```tsx
<button className="bg-emory-blue text-white hover:bg-blue-900 px-6 py-3 font-headline font-bold transition-colors">
  Call to Action
</button>
```

### CTAs — Secondary (Outlined)

```tsx
<button className="border-2 border-emory-blue text-emory-blue hover:bg-emory-blue hover:text-white px-6 py-3 font-headline font-bold transition-colors">
  Secondary Action
</button>
```

### Accent Links

```tsx
<a className="text-emory-gold hover:underline">Link text</a>
```

### Section Header with Gold Accent

```tsx
<h2 className="text-2xl font-headline font-bold text-emory-gold mb-3">Section Title</h2>
```

---

## Spacing System

| Purpose | Class |
|---|---|
| Container max-width | `max-w-6xl mx-auto` |
| Section vertical padding | `py-16 px-4` |
| Card grid gap | `gap-6` |
| Section gap | `gap-8` |

---

## Accessibility

- Minimum font size: 16px (`text-base`)
- Contrast: Emory Blue on white = 13.5:1 ✓, Gold on white = 2.5:1 ✗ — **never use gold as body text color on white**
- All images must have descriptive `alt` text
- Interactive elements must have visible focus rings (`focus:outline-2 focus:outline-emory-blue`)
- Use semantic HTML: `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`

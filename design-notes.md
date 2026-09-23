# Design Notes

## Target Audience (Personas)

1. **The Recruiter:** Looking for engineering graduates with practical skills. Needs to quickly see my CV, core technical competencies, and project experiences.
2. **The Client:** Looking for a freelance network technician. Needs to see specific services (FTTx, VPN setup) and a clear way to contact me.

## Sitemap

- `index.html` (Home)
- `about.html` (About Me)
- `projects.html` (Projects & GitHub API)
- `article.html` (Technical Article)
- `contact.html` (Contact Form)
- `404.html` (Error Page)

## Design System

### Colors

- **Primary (Orange):** `#FF7A00` (Used for buttons, accents)
- **Dark Background:** `#080F14` (Main background)
- **Surface Card:** `#111027` (Cards, forms)
- **Text Primary:** `#FFFFFF` (Headings, main text) - _Contrast vs BG: 19.29:1 (Passes AAA)_
- **Text Secondary:** `#A0A7B4` (Paragraphs) - _Contrast vs BG: ~8:1 (Passes AAA)_
- **Border:** `#1F2937`

### Color Contrast Ratios (WCAG AA/AAA)
- #FFFFFF on #080F14: 19.29:1 (AAA)
- #A0A7B4 on #080F14: 7.97:1 (AAA)
- #FFFFFF on #111027: 18.63:1 (AAA)
- #A0A7B4 on #111027: 7.70:1 (AAA)
- #080F14 on #FF7A00: 7.38:1 (AA)
- #1F2937 on #111027: Decorative only (no WCAG requirement)

### Button Contrast Ratio

- Primary Button Text (#080F14) on Orange (#FF7A00): Contrast Ratio 7.38:1 (Passes WCAG AA)

### Typography

- **Font:** Poppins (Google Fonts)
- **H1:** 48px Bold
- **H2:** 32px SemiBold
- **Body:** 16px Regular
- **Small:** 14px Regular

### Spacing Scale

- 8px, 16px, 24px, 32px, 48px

### Component States

- **Buttons:** Default (Orange), Hover (Lighter Orange), Disabled (Gray)
- **Inputs:** Default (Gray Border), Focus (Blue Border), Error (Red Border + Red Text)

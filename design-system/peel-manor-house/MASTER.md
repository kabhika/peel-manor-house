# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Peel Manor House
**Generated:** 2026-07-09 23:11:44
**Category:** Hotel/Hospitality
**Design Dials:** Motion 4/10 (Standard) | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#7B1E3A` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#9B3A52` | `--color-secondary` |
| Accent/CTA | `#96660E` | `--color-accent` |
| Background | `#FBF7EF` | `--color-background` |
| Foreground | `#2B1B1E` | `--color-foreground` |
| Muted | `#F0E8DA` | `--color-muted` |
| Border | `#D9C9A8` | `--color-border` |
| Destructive | `#B33A3A` | `--color-destructive` |
| Ring | `#7B1E3A` | `--color-ring` |

**Color Notes:** Burgundy + brass, warm ivory ground. No navy, no teal, no glassmorphism. [Accent darkened from a brighter gold to `#96660E` for 4.5:1 text contrast on white]

### Typography

- **Heading Font:** Cormorant Garamond
- **Body Font:** Libre Baskerville
- **Mood:** classic, restrained, editorial, warm
- **Google Fonts:** [Cormorant Garamond + Libre Baskerville](https://fonts.google.com/share?selection.family=Cormorant+Garamond:wght@300;400;500;600;700|Libre+Baskerville:wght@400;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');
```

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #7B1E3A;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary / CTA Button */
.btn-secondary {
  background: transparent;
  color: #96660E;
  border: 2px solid #96660E;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #D9C9A8;
  border-radius: 4px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #D9C9A8;
  border-radius: 4px;
  font-size: 16px;
  background: #FBF7EF;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #7B1E3A;
  outline: none;
  box-shadow: 0 0 0 3px #7B1E3A20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(43, 27, 30, 0.6);
}

.modal {
  background: #FBF7EF;
  border-radius: 4px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Classic Editorial

**Keywords:** Classic, restrained, editorial, warm

**Best For:** Heritage hospitality, boutique hotels, fine dining, manor/estate venues

**Key Effects:** Flat solid surfaces, generous whitespace, understated fade/slide on entry — no blur, no depth-layering gimmicks

**Explicitly ruled out:** glassmorphism, backdrop blur, 3D transforms/perspective tilts, parallax scrolling

### Page Pattern

**Pattern Name:** Hero-Centric + Social Proof

- **CTA Placement:** Above fold
- **Section Order:** Hero > Features > CTA

---

## Motion

**Page Transition** (Standard) — Trigger: route change | Duration: 400-600ms | Easing: `power2.inOut`

```js
const tl = gsap.timeline(); tl.to('.transition-overlay', { yPercent: 0, duration: 0.4, ease: 'power2.inOut' }).call(navigate).to('.transition-overlay', { yPercent: -100, duration: 0.4, ease: 'power2.inOut', delay: 0.1 });
```

**Framework notes:** Keep the overlay element mounted at the layout root (outside the page component) so it survives the route swap

- ✅ Show a lightweight loading indicator if the destination route's data fetch outlasts the overlay
- ❌ Don't tie the overlay's reveal directly to data-fetch completion without a max-wait timeout; a slow API stalls the whole transition
- ⚡ Prefer CSS transform (yPercent) over top/left to keep the overlay animation on the compositor thread

---

## Anti-Patterns (Do NOT Use)

- ❌ Poor photos
- ❌ Complex booking
- ❌ Glassmorphism / frosted-glass panels
- ❌ Backdrop blur effects
- ❌ 3D transforms, tilts, or depth-layering
- ❌ Parallax scrolling

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile

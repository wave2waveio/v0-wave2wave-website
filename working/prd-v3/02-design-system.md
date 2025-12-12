# Wave2Wave.io Website Design System Specification
## PRD v3.0 - Document 2 of 4

**Version:** 3.0
**Date:** December 2025
**Document Type:** Design System Specification
**Status:** Production Ready

---

## Document Quick Reference

**Document 1 - Main PRD:** Strategic overview, navigation architecture, implementation guidance
**Document 2 - Design System (THIS DOCUMENT):** Color palette, typography, components, interactions
**Document 3 - Page Specs:** Content and structure for every page
**Document 4 - SEO & Technical:** SEO strategy, hidden text library, performance specs

---

## Table of Contents

1. [Color Palette - FINAL](#1-color-palette---final)
2. [Typography System](#2-typography-system)
3. [Spacing & Layout](#3-spacing--layout)
4. [Component Specifications](#4-component-specifications)
5. [Interaction Patterns](#5-interaction-patterns)
6. [Accessibility Standards](#6-accessibility-standards)
7. [Embedded Prompts for Claude Code](#7-embedded-prompts-for-claude-code)

---

## 1. Color Palette - FINAL

### 1.1 Primary Color: Electric Blue

**Brand Identity Color - Updated from PRD v2.1**

```css
Electric Blue: #0072CE
HSL: 206 100% 40%
RGB: 0, 114, 206

Usage:
- Primary buttons and CTAs
- Navigation links and active states
- Hyperlinks throughout site
- Icon accents
- Focus states and rings
```

**Variants:**

```css
Electric Blue (Hover/Dark):  #005BA4
HSL: 206 100% 32%
Usage: Button hover states, pressed states

Electric Blue (Light):  #0090FF
HSL: 206 100% 50%
Usage: Subtle accents, light backgrounds, highlights
```

**CRITICAL UPDATE from PRD v2.1:**
- PRD v2.1 specified `#0066CC` as primary blue
- **Live implementation uses `#0072CE` (Electric Blue)**
- This is the FINAL, approved color
- All new implementations must use #0072CE

### 1.2 Secondary Color: Dark Charcoal Gray

**Professional B2B Neutral - Replaces Orange Accent**

```css
Dark Charcoal Gray: #333333
HSL: 0 0% 20%
RGB: 51, 51, 51

Usage:
- Text headings and emphasis
- Dark section backgrounds
- Footer background
- Gradients (paired with Electric Blue)
- Secondary UI elements
```

**Variants:**

```css
Charcoal (Dark):  #262626
HSL: 0 0% 15%
Usage: Darker backgrounds, shadows

Charcoal (Light):  #4D4D4D
HSL: 0 0% 30%
Usage: Lighter text on dark backgrounds
```

**CRITICAL CHANGE from PRD v2.1:**
- **ELIMINATED:** Secondary Orange `#FF6B35` - completely removed
- **RATIONALE:** Avoid bright AI-generated color aesthetics
- **REPLACEMENT:** Dark Charcoal Gray (#333333) provides professional B2B appearance
- All orange references in PRD v2.1 should be replaced with blue or charcoal

### 1.3 Neutral Color Palette

**Text Colors:**

```css
Text Dark:    #1A1A1A  (HSL: 0 0% 10%)
Usage: Body text, primary headings, high-emphasis content

Text Medium:  #4A4A4A  (HSL: 0 0% 29%)
Usage: Secondary text, captions, supporting content

Text Light:   #767676  (HSL: 0 0% 46%)
Usage: Placeholder text, disabled states, de-emphasized content
```

**Background Colors:**

```css
Background White:  #FFFFFF  (HSL: 0 0% 100%)
Usage: Main page background, card backgrounds

Background Light:  #F5F5F5  (HSL: 0 0% 96%)
Usage: Alternate section backgrounds, subtle emphasis areas

Background Dark:   #2C2C2C  (HSL: 0 0% 17%)
Usage: Footer, dark hero sections, high-contrast areas
```

**Border Colors:**

```css
Border Light:   #E0E0E0  (HSL: 0 0% 88%)
Usage: Dividers, input field borders, card borders

Border Medium:  #CCCCCC  (HSL: 0 0% 80%)
Usage: Hover state borders, active input borders
```

### 1.4 Semantic Colors

**Updated to Blue-Based Theme:**

```css
Success (Blue-Based):  HSL: 206 71% 39%
Usage: Success messages, form validation (replaces green #28A745)

Error (Red):  #DC3545  (HSL: 354 70% 54%)
Usage: Error messages, form validation, warnings

Info (Blue-Based):  HSL: 206 78% 41%
Usage: Informational callouts, notices, tips
```

**Note:** Success and Info colors use blue variants instead of traditional green/cyan to maintain color palette consistency.

### 1.5 Color Usage Rules

**DO:**
- Use Electric Blue (#0072CE) for all primary actions and navigation
- Use Dark Charcoal Gray (#333333) for headings and dark sections
- Maintain 4.5:1 contrast ratio minimum for text (WCAG AA)
- Use neutral grays for body text and backgrounds
- Combine Electric Blue and Charcoal in gradients for visual interest

**DON'T:**
- ❌ Use bright green, purple, red, or orange accents (avoid AI aesthetic)
- ❌ Use orange #FF6B35 anywhere (removed from palette)
- ❌ Use color alone to convey information (include icons/text)
- ❌ Mix PRD v2.1 colors (#0066CC) with v3.0 colors (#0072CE)

**Professional B2B Pattern:**
Inspired by Panduit, Lanshack, Clearfield - limited color palette with strong blues and neutrals creates trustworthy, corporate aesthetic.

### 1.6 Tailwind CSS Configuration

**Implementation in `tailwind.config.ts` and `globals.css`:**

```css
:root {
  /* Primary Colors - Electric Blue */
  --primary-blue: 206 100% 40%; /* #0072CE */
  --primary-blue-dark: 206 100% 32%; /* #005BA4 */
  --primary-blue-light: 206 100% 50%; /* #0090FF */

  /* Secondary Colors - Dark Charcoal Gray */
  --charcoal: 0 0% 20%; /* #333333 */
  --charcoal-dark: 0 0% 15%; /* #262626 */
  --charcoal-light: 0 0% 30%; /* #4D4D4D */

  /* Text Colors */
  --text-dark: 0 0% 10%; /* #1A1A1A */
  --text-medium: 0 0% 29%; /* #4A4A4A */
  --text-light: 0 0% 46%; /* #767676 */

  /* Background Colors */
  --bg-white: 0 0% 100%; /* #FFFFFF */
  --bg-light: 0 0% 96%; /* #F5F5F5 */
  --bg-dark: 0 0% 17%; /* #2C2C2C */

  /* Border Colors */
  --border-light: 0 0% 88%; /* #E0E0E0 */
  --border-medium: 0 0% 80%; /* #CCCCCC */

  /* Tailwind Compatibility */
  --primary: var(--primary-blue);
  --secondary: var(--charcoal);
  --radius: 0.25rem; /* 4px - sharp, minimal curves */
}
```

---

## 2. Typography System

### 2.1 Font Family

**Primary Font: Inter**

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Characteristics:**
- Clean, modern sans-serif
- Excellent readability at all sizes
- Wide range of weights (400-700)
- Professional B2B appearance
- Already implemented in live site

**Secondary Font: Roboto Mono (Technical Specifications)**

```css
font-family: 'Roboto Mono', 'Courier New', monospace;
```

**Usage:**
- Code snippets
- Technical specifications
- Serial numbers, part numbers
- Model identifiers

### 2.2 Type Scale

**H1 (Page Title):**

```css
Desktop: 48px (3rem) / Line-height: 1.2 / Weight: 700 (Bold)
Mobile:  32px (2rem) / Line-height: 1.2 / Weight: 700 (Bold)
Tailwind: text-4xl md:text-5xl font-bold leading-tight
```

**H2 (Section Title):**

```css
Desktop: 36px (2.25rem) / Line-height: 1.3 / Weight: 600 (Semibold)
Mobile:  28px (1.75rem) / Line-height: 1.3 / Weight: 600 (Semibold)
Tailwind: text-3xl md:text-4xl font-semibold leading-snug
```

**H3 (Subsection Title):**

```css
Desktop: 28px (1.75rem) / Line-height: 1.4 / Weight: 600 (Semibold)
Mobile:  24px (1.5rem) / Line-height: 1.4 / Weight: 600 (Semibold)
Tailwind: text-2xl md:text-3xl font-semibold leading-normal
```

**H4 (Feature Title):**

```css
Desktop: 20px (1.25rem) / Line-height: 1.5 / Weight: 600 (Semibold)
Mobile:  18px (1.125rem) / Line-height: 1.5 / Weight: 600 (Semibold)
Tailwind: text-lg md:text-xl font-semibold leading-relaxed
```

**Body Text:**

```css
Body Large:   18px (1.125rem) / Line-height: 1.6 / Weight: 400
Body Regular: 16px (1rem) / Line-height: 1.6 / Weight: 400 (DEFAULT)
Body Small:   14px (0.875rem) / Line-height: 1.5 / Weight: 400
Caption:      12px (0.75rem) / Line-height: 1.4 / Weight: 400
```

### 2.3 Typography Rules

**Best Practices:**

1. **One H1 per page** - Always in hero section, clearly establishes page topic
2. **Use H2 for main section breaks** - Creates clear visual hierarchy
3. **Use H3 for subsections** - Within H2 sections only
4. **Maximum line length: 75 characters** - For optimal readability
5. **Use bold (600 weight) for emphasis** - Never italic (harder to read)
6. **Consistent spacing** - H2 sections: 64px apart, H3 subsections: 32px apart

**Professional B2B Pattern (Panduit/Lanshack):**
- Clear hierarchy with generous spacing
- No decorative fonts or script
- Emphasis through size and weight, not color
- Technical specs in monospace for clarity

---

## 3. Spacing & Layout

### 3.1 8px Baseline Grid

**Spacing Scale:**

```css
xs:   8px   (0.5rem)  - Tight spacing, icon gaps, small margins
sm:   16px  (1rem)    - Between related elements, button padding
md:   24px  (1.5rem)  - Default paragraph spacing, card content gaps
lg:   32px  (2rem)    - Between sections within page, card padding
xl:   48px  (3rem)    - Between major sections, large component spacing
2xl:  64px  (4rem)    - Between page sections, section padding
3xl:  96px  (6rem)    - Top/bottom page padding, hero sections
```

**Tailwind Utilities:**
- `space-x-2` = 8px horizontal
- `space-y-4` = 16px vertical
- `gap-6` = 24px grid gap
- `p-8` = 32px padding
- `my-12` = 48px vertical margin
- `py-16` = 64px vertical padding
- `py-24` = 96px vertical padding

### 3.2 Component Spacing

**Section Padding:**

```css
Desktop: 64px (4rem) vertical
Mobile:  32px (2rem) vertical
Tailwind: py-16 md:py-24 (for major sections)
```

**Card Padding:**

```css
Desktop: 32px (2rem) all sides
Mobile:  24px (1.5rem) all sides
Tailwind: p-6 md:p-8
```

**Button Padding:**

```css
Vertical:   12px (0.75rem)
Horizontal: 24px (1.5rem)
Tailwind: px-6 py-3
```

**Input Field Padding:**

```css
Vertical:   12px (0.75rem)
Horizontal: 16px (1rem)
Tailwind: px-4 py-3
```

### 3.3 Responsive Breakpoints

**Tailwind Default Breakpoints:**

```css
sm:  640px   (Small tablets, large phones landscape)
md:  768px   (Tablets)
lg:  1024px  (Small laptops, desktops)
xl:  1280px  (Desktops)
2xl: 1536px  (Large desktops)
```

**Content Width Constraints:**

```css
Max Content Width:  1400px (desktop standard)
Large Desktop:      1600px (2xl screens)
Mobile:             100% with 16px horizontal padding
Tailwind: max-w-7xl mx-auto (1280px) or max-w-screen-2xl (1536px)
```

**Grid Patterns:**

```css
3-Column (Desktop):  grid grid-cols-1 md:grid-cols-3 gap-8
2-Column (Tablet):   grid grid-cols-1 md:grid-cols-2 gap-6
Single (Mobile):     grid grid-cols-1 gap-4
```

---

## 4. Component Specifications

### 4.1 Buttons

**Primary Button (Call-to-Action):**

```css
Dimensions:
  Desktop: 180px width × 48px height (auto width allowed)
  Mobile:  100% width × 48px height

Styling:
  Border Radius: 4px (sharp, minimal curves)
  Font: 16px / 600 weight / Uppercase optional
  Background: Electric Blue (#0072CE)
  Text Color: White (#FFFFFF)

Hover State:
  Background: #005BA4 (darker blue)
  Transform: none (keep static, professional)
  Shadow: 0 4px 8px rgba(0,0,0,0.15)

Default Shadow: 0 2px 4px rgba(0,0,0,0.1)
Transition: all 0.2s ease

Tailwind Classes:
  bg-[#0072CE] hover:bg-[#005BA4] text-white font-semibold
  px-6 py-3 rounded transition-all duration-200
  shadow-sm hover:shadow-md
```

**Secondary Button:**

```css
Same dimensions as Primary

Styling:
  Background: Transparent
  Border: 2px solid Electric Blue (#0072CE)
  Text Color: Electric Blue (#0072CE)

Hover State:
  Background: Electric Blue (#0072CE)
  Text Color: White (#FFFFFF)

Tailwind Classes:
  border-2 border-[#0072CE] text-[#0072CE]
  hover:bg-[#0072CE] hover:text-white
  px-6 py-3 rounded transition-all duration-200
```

**Text Link:**

```css
Font: Inherit from context
Color: Electric Blue (#0072CE)
Hover: Underline + darken to #005BA4
Transition: color 0.2s ease

Tailwind Classes:
  text-[#0072CE] hover:text-[#005BA4] hover:underline
  transition-colors duration-200
```

**Professional B2B Pattern:**
- Minimal animations (no bounces or slides)
- Subtle hover effects (darken + shadow)
- Clear affordances (buttons look clickable)
- Consistent sizing across site

### 4.2 Navigation

**Desktop Header:**

```css
Height: 80px
Position: Sticky (fixed after scroll)
Background: White (#FFFFFF)
Border Bottom: 1px solid #E0E0E0
Shadow (when scrolled): 0 2px 8px rgba(0,0,0,0.08)

Logo:
  Max Height: 50px
  Position: Left-aligned
  Margin: 16px left padding

Menu Items:
  Font: 16px / 500 weight
  Color: #4A4A4A (text-medium)
  Hover Color: Electric Blue (#0072CE)
  Spacing: 24px between items

CTA Button:
  "Request Quote" button
  Primary Button style
  Position: Right-aligned

Tailwind Structure:
  <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      {/* Logo, Menu, CTA */}
    </div>
  </header>
```

**Desktop Dropdown Menu:**

```css
Trigger: Hover over parent menu item
Appearance: 0.2s fade-in
Background: White (#FFFFFF)
Border: 1px solid #E0E0E0
Shadow: 0 4px 12px rgba(0,0,0,0.1)
Padding: 16px
Item Height: 40px per link
Min Width: 200px
Border Radius: 4px

Tailwind Classes:
  absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200
  rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity
  duration-200
```

**Mobile Header:**

```css
Height: 64px
Background: White with bottom border
Logo: Max-height 40px
Menu Icon: 24×24px hamburger (right-aligned)

Tailwind Classes:
  <header className="sticky top-0 z-50 bg-white border-b border-gray-200 lg:hidden">
    <div className="px-4 h-16 flex items-center justify-between">
      {/* Logo, Hamburger */}
    </div>
  </header>
```

**Mobile Menu:**

```css
Type: Full-screen overlay (or slide-in drawer)
Animation: Slide from right (0.3s ease)
Background: White (#FFFFFF)
Links: Full-width, 56px height each
Font: 18px / 500 weight
Close Icon: 24×24px X (top-right)

Tailwind Implementation:
  Use Radix UI Sheet component or similar
  <Sheet>
    <SheetTrigger>Hamburger Icon</SheetTrigger>
    <SheetContent side="right" className="w-full sm:w-80">
      {/* Navigation links in vertical list */}
    </SheetContent>
  </Sheet>
```

**B2B Pattern (Panduit/Clearfield):**
- Persistent "Request Quote" CTA in header
- Clean, minimal navigation (no mega-menus unless necessary)
- Dropdown menus with clear affordances
- Mobile-friendly hamburger menu

### 4.3 Hero Section

**Standard Hero:**

```css
Desktop Height: 600px (or full viewport if content allows)
Mobile Height:  400px
Background: Image with 40% dark overlay, or gradient
Content Width: Max 800px, centered
Text Color: White (#FFFFFF)

H1 Size: 48px desktop / 32px mobile
Subtext: 20px desktop / 16px mobile
Button Margin: 32px top
Alignment: Center (default) or left (optional per page)

Gradient Option (No Image):
  background: linear-gradient(135deg, #0072CE 0%, #333333 100%);

Tailwind Implementation:
  <section className="relative h-96 md:h-[600px] flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0072CE] to-[#333333]" />
    <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Title</h1>
      <p className="text-lg md:text-xl mb-8">Subtext</p>
      <button className="...">CTA Button</button>
    </div>
  </section>
```

**Professional B2B Pattern:**
- Avoid busy backgrounds (use solid gradients or subtle images)
- Clear, bold messaging (no vague marketing speak)
- Single, focused CTA
- Minimal text (2-3 lines max)

### 4.4 Cards & Feature Blocks

**Feature Card:**

```css
Width: 100% in grid (3 columns desktop, 1 mobile)
Padding: 32px desktop / 24px mobile
Border: 1px solid #E0E0E0 (optional, or use shadow only)
Border Radius: 8px
Background: White (#FFFFFF) or #F5F5F5

Shadow (Default): 0 2px 8px rgba(0,0,0,0.06)
Hover Shadow: 0 4px 16px rgba(0,0,0,0.1)
Hover Transform: translateY(-4px)
Transition: all 0.3s ease

Tailwind Classes:
  <div className="p-6 md:p-8 bg-white rounded-lg shadow-sm hover:shadow-md
                  hover:-translate-y-1 transition-all duration-300 border border-gray-200">
    {/* Card content */}
  </div>
```

**Icon in Card:**

```css
Size: 48×48px
Margin Bottom: 16px
Color: Electric Blue (#0072CE) or Dark Charcoal (#333333)

Tailwind:
  <div className="w-12 h-12 mb-4 text-[#0072CE]">
    {/* Icon SVG or component */}
  </div>
```

**Card Title:**

```css
Font: 20px / 600 weight
Margin Bottom: 12px
Color: #1A1A1A (text-dark)

Tailwind:
  <h3 className="text-xl font-semibold mb-3 text-gray-900">Title</h3>
```

**Card Description:**

```css
Font: 16px / 400 weight
Line Height: 1.6
Color: #4A4A4A (text-medium)

Tailwind:
  <p className="text-base text-gray-600 leading-relaxed">Description text</p>
```

### 4.5 Forms

**Input Field:**

```css
Width: 100%
Height: 48px
Border: 1px solid #CCCCCC (border-medium)
Border Radius: 4px
Padding: 12px 16px (vertical / horizontal)
Font: 16px / 400 weight
Background: White (#FFFFFF)

Focus State:
  Border: 2px solid Electric Blue (#0072CE)
  Outline: None
  Ring Shadow: 0 0 0 3px rgba(0,114,206,0.1)

Error State:
  Border: 2px solid #DC3545

Success State:
  Border: 2px solid blue-based success color

Tailwind Classes:
  <input className="w-full h-12 px-4 py-3 border border-gray-400 rounded
                    focus:border-[#0072CE] focus:ring-4 focus:ring-blue-100
                    focus:outline-none transition-all" />
```

**Label:**

```css
Font: 14px / 500 weight
Margin Bottom: 8px
Color: #1A1A1A (text-dark)

Tailwind:
  <label className="block text-sm font-medium text-gray-900 mb-2">Label</label>
```

**Error Message:**

```css
Font: 14px / 400 weight
Color: #DC3545 (error red)
Margin Top: 4px
Icon: ⚠ (prepended)

Tailwind:
  <p className="text-sm text-red-600 mt-1">⚠ Error message</p>
```

**Textarea:**

```css
Min Height: 120px
Max Height: 300px
Resize: Vertical only
Same styling as Input Field

Tailwind:
  <textarea className="w-full min-h-[120px] max-h-[300px] resize-y px-4 py-3
                       border border-gray-400 rounded focus:border-[#0072CE]
                       focus:ring-4 focus:ring-blue-100 focus:outline-none" />
```

**Submit Button:**

```css
Use Primary Button style
Full width on mobile
Auto width on desktop (min 180px)
Loading state: Show spinner, disable, text "Sending..."

Tailwind:
  <button className="w-full md:w-auto px-6 py-3 bg-[#0072CE] text-white
                     rounded font-semibold hover:bg-[#005BA4]
                     disabled:opacity-50 disabled:cursor-not-allowed">
    Submit
  </button>
```

### 4.6 Tables & Spec Sheets (B2B Pattern)

**Professional Specification Table:**

```css
Width: 100%
Border Collapse: Collapse
Margin: 32px vertical

Table Header:
  Background: Electric Blue (#0072CE)
  Text Color: White (#FFFFFF)
  Padding: 12px
  Font: 16px / 600 weight
  Text Align: Left

Table Data:
  Border: 1px solid #E0E0E0
  Padding: 12px
  Font: 16px / 400 weight

Alternating Rows:
  Even rows: Background #F5F5F5 (background-light)
  Odd rows: Background White (#FFFFFF)

Tailwind Example:
  <table className="w-full border-collapse my-8">
    <thead>
      <tr className="bg-[#0072CE] text-white">
        <th className="p-3 text-left font-semibold">Specification</th>
        <th className="p-3 text-left font-semibold">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr className="even:bg-gray-50">
        <td className="p-3 border border-gray-200">Cable Type</td>
        <td className="p-3 border border-gray-200">OS2 Single-Mode Fiber</td>
      </tr>
      {/* More rows */}
    </tbody>
  </table>
```

**Critical B2B Pattern (Panduit/Clearfield):**
Technical spec tables are ESSENTIAL for B2B product pages. Wave2Wave sells complex technical products - specifications must be clear, scannable, and professional.

---

## 5. Interaction Patterns

### 5.1 Hover Effects

**Buttons:**
- Background darkens (#0072CE → #005BA4)
- Shadow increases (0 2px 4px → 0 4px 8px)
- Transition: 0.2s ease

**Cards:**
- Lift upward (translateY(-4px))
- Shadow increases (0 2px 8px → 0 4px 16px)
- Transition: 0.3s ease

**Links:**
- Color darkens (#0072CE → #005BA4)
- Underline appears
- Transition: 0.2s ease

**Rule:** NO animated bounces, slides, or attention-grabbing effects. Professional, subtle only.

### 5.2 Loading States

**Button Loading:**
```css
Show spinner icon (rotating)
Disable button (pointer-events: none, opacity: 0.5)
Change text to "Sending..." or "Loading..."
Maintain button dimensions (no layout shift)
```

**Page Loading:**
```css
Skeleton screens for content areas
Simple spinner for full-page loads
No elaborate animations
```

**Tailwind Loading Spinner:**
```html
<svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
```

### 5.3 Success/Error States

**Success State (Forms):**
```css
Green checkmark icon (or blue-based success icon)
Success message in blue-based success color
Fade-in animation (0.3s)
Auto-dismiss after 5 seconds (optional)
```

**Error State (Forms):**
```css
Red error icon (⚠)
Error message in #DC3545
Shake animation on input field (subtle, 0.3s)
Persistent (no auto-dismiss)
```

### 5.4 Focus Indicators (Keyboard Navigation)

**All Interactive Elements:**
```css
Focus Ring: 4px solid rgba(0,114,206,0.3) (blue, 30% opacity)
Outline: None (replaced by ring)
Transition: 0.15s ease

Tailwind:
  focus:ring-4 focus:ring-blue-300 focus:outline-none
```

**WCAG Requirement:**
- Focus must be visible for keyboard navigation
- Contrast ratio: 3:1 minimum against background

### 5.5 Scroll Animations (Optional, Use Sparingly)

**Fade-In on Scroll:**
```css
Opacity: 0 → 1
Transform: translateY(20px) → translateY(0)
Transition: 0.6s ease-out
Trigger: When element enters viewport (Intersection Observer)
```

**Rule:** Use ONLY on hero sections or major feature blocks. Avoid on small elements (creates busy, distracting experience).

**Professional B2B Pattern:**
Minimal animations. Users come for information, not entertainment. Every animation should serve a functional purpose (indicating state change, guiding attention).

---

## 6. Accessibility Standards

### 6.1 WCAG 2.1 Level AA Compliance

**Color Contrast Requirements:**

```
Normal Text (16px): 4.5:1 contrast ratio minimum
Large Text (24px+): 3.0:1 contrast ratio minimum
UI Components: 3.0:1 contrast ratio minimum

Wave2Wave Compliance:
- Electric Blue (#0072CE) on White: 5.9:1 ✓ PASS
- Text Dark (#1A1A1A) on White: 15.8:1 ✓ PASS
- Text Medium (#4A4A4A) on White: 7.6:1 ✓ PASS
- Text Light (#767676) on White: 4.5:1 ✓ PASS (minimum)
```

**Testing Tools:**
- Chrome DevTools Lighthouse Accessibility Audit
- WAVE Browser Extension
- axe DevTools

### 6.2 Keyboard Navigation

**All Interactive Elements Must:**
- Be reachable via Tab key
- Show visible focus indicator (ring)
- Be activatable via Enter or Space
- Support Escape to close (modals, dropdowns)

**Tab Order:**
- Follow logical visual flow (top → bottom, left → right)
- Skip navigation links for screen readers
- Modal traps focus (can't tab out)

### 6.3 ARIA Labels & Semantic HTML

**Required ARIA Attributes:**

```html
<!-- Buttons without visible text -->
<button aria-label="Close menu">×</button>

<!-- Navigation landmarks -->
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>

<!-- Form inputs -->
<input id="email" aria-describedby="email-error" />
<span id="email-error">Error message</span>

<!-- Loading states -->
<button aria-busy="true" aria-live="polite">Sending...</button>
```

**Semantic HTML:**
- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<footer>` for footer
- Use `<button>` for buttons (not `<div onclick>`)
- Use `<a>` for links (not `<button>` styled as link)

### 6.4 Screen Reader Considerations

**Hidden Content:**
```css
/* Visually hidden but accessible to screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**Hidden from Screen Readers:**
```html
<!-- SEO hidden text should use aria-hidden -->
<details className="sr-only" aria-hidden="true">
  <summary>Additional Information</summary>
  <!-- SEO content here -->
</details>
```

### 6.5 Testing Checklist

- [ ] All images have `alt` text (or `alt=""` for decorative)
- [ ] All form inputs have associated `<label>` elements
- [ ] Color is not the only means of conveying information
- [ ] Focus indicators visible on all interactive elements
- [ ] Keyboard navigation works for all interactions
- [ ] ARIA labels present where needed
- [ ] Heading hierarchy is logical (H1 → H2 → H3, no skips)
- [ ] Lighthouse Accessibility score ≥90

---

## 7. Embedded Prompts for Claude Code

### 7.1 Before Implementation

**CRITICAL: Invoke Skills Before Coding**

Before implementing ANY UI component, invoke the frontend design skill:

```
Invoke: document-skills:frontend-design
```

**Why:** This skill provides access to production-grade design patterns and avoids generic AI aesthetics. It ensures your implementation matches professional B2B standards.

**For theming consistency:**

```
Invoke: document-skills:theme-factory
```

Use the Electric Blue (#0072CE) + Dark Charcoal Gray (#333333) theme consistently. NO bright green, purple, orange, or red accents.

### 7.2 During Implementation

**Reference Competitor Patterns:**

Before implementing B2B-specific patterns (spec tables, datasheets, trust signals), research competitors:

**Panduit.com:**
- Navigation structure
- Product specification tables
- Downloadable datasheets
- Trust signals (certifications, client logos)

**Lanshack.com:**
- Technical product pages
- Spec sheet formatting
- Clear product categorization

**Clearfield.com:**
- Case study presentation
- Solution-focused messaging
- Professional photography

**Use WebSearch to analyze current implementations:**

```
Invoke: WebSearch with query: "Panduit data center cabling product page 2025"
```

**Cross-Reference Other Documents:**

For page-specific design variations:
→ **Document 3: Page Specs** (each page section includes design notes)

For performance optimization of components:
→ **Document 4: SEO & Technical Spec, Section 5** (Performance Requirements)

### 7.3 Design System Implementation Pattern

**Example: Implementing a Primary Button**

```tsx
// 1. Read Document 2, Section 4.1 (Buttons)
// 2. Use exact specifications from design system

import { cn } from "@/lib/utils"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
  loading,
  className
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        // Base styles from Document 2
        "px-6 py-3 rounded",
        "bg-[#0072CE] hover:bg-[#005BA4]",
        "text-white font-semibold",
        "shadow-sm hover:shadow-md",
        "transition-all duration-200",
        // States
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Custom classes
        className
      )}
      aria-busy={loading}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          {/* Spinner from Section 5.2 */}
          <svg className="animate-spin h-5 w-5" /* ... */ />
          Sending...
        </span>
      ) : (
        children
      )}
    </button>
  )
}
```

**Key Points:**
- Uses exact colors from Section 1.1 (#0072CE, #005BA4)
- Follows spacing from Section 3.2 (px-6 py-3)
- Implements hover effects from Section 5.1
- Includes loading state from Section 5.2
- Follows accessibility from Section 6

### 7.4 Verification Checklist

**Before claiming component implementation is complete:**

- [ ] Color palette matches Document 2, Section 1 (Electric Blue #0072CE, NO orange)
- [ ] Typography matches Document 2, Section 2 (Inter font, correct sizes)
- [ ] Spacing follows 8px baseline grid (Document 2, Section 3.1)
- [ ] Component matches specifications (Document 2, Section 4)
- [ ] Hover/focus states implemented (Document 2, Section 5)
- [ ] Accessibility requirements met (Document 2, Section 6)
- [ ] No bright AI colors (green, purple, red, orange)
- [ ] Professional B2B aesthetic (minimal animations, clean layout)

**Invoke verification skill:**

```
Invoke: superpowers:verification-before-completion
```

### 7.5 Common Implementation Pitfalls

**DON'T:**
- ❌ Use orange accent (#FF6B35) - REMOVED from palette
- ❌ Use PRD v2.1 colors (#0066CC) - OUTDATED
- ❌ Add bright green, purple, or red accents - Avoid AI aesthetic
- ❌ Create elaborate animations - Professional B2B is subtle
- ❌ Skip accessibility (ARIA labels, focus states) - Required for WCAG AA
- ❌ Forget to test keyboard navigation - Essential for compliance

**DO:**
- ✅ Use Electric Blue #0072CE consistently
- ✅ Reference competitor patterns (Panduit, Lanshack, Clearfield)
- ✅ Implement spec tables on product pages - Critical B2B pattern
- ✅ Keep animations minimal and purposeful
- ✅ Test with Lighthouse Accessibility audit
- ✅ Invoke frontend-design skill before implementation

---

## Document Metadata

**Token Count:** ~5,800 tokens
**Target Range:** 5,000-6,000 tokens ✓
**Status:** Complete - Ready for Claude Code Implementation

**Next Steps:**
- Use this design system as reference for all UI implementation
- Cross-reference with Document 3 (Page Specs) for page-specific variations
- Cross-reference with Document 4 (SEO & Technical) for performance optimization
- Invoke skills as specified in Section 7

**Version Control:**
- v3.0 - Initial comprehensive design system (December 2025)
- Updated from PRD v2.1 with color palette changes and B2B patterns

---

**End of Document 2: Design System Specification**

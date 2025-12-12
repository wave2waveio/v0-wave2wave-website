# Wave2Wave Website Redesign - Implementation Prompt

## Executive Summary

Redesign the Wave2Wave website (Next.js 15, React, TypeScript) based on PRD v3.0 specifications. This is a professional B2B data center infrastructure company requiring polished, corporate aesthetics with **Electric Blue (#0072CE)** and **Dark Charcoal Gray (#333333)** color palette. **Absolutely NO bright AI colors** (green, purple, red, orange).

## Critical Context

**Company:** Wave2Wave - Data center infrastructure solutions (fiber optics, ethernet, custom engineering, deployment services)

**Tech Stack:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Vercel deployment

**Project Status:**
- Website partially implemented from PRD v2.1
- Some features built but not in navigation (Resources menu)
- Some features exist but not documented (High Speed Interconnect)
- Color palette evolved: PRD v2.1 had #0066CC + orange → Current is #0072CE + charcoal (FINAL)

**PRD v3.0 Location:** `/working/prd-v3/`
- `01-main-prd.md` - Strategic overview, navigation, technical stack
- `02-design-system.md` - Color palette, typography, components, B2B patterns
- `03-page-specs.md` - All 16 page specifications
- `04-seo-technical.md` - SEO strategy, hidden text, performance requirements

## MANDATORY WORKFLOW - DO NOT SKIP

### Phase 0: Before You Begin (REQUIRED)

**You MUST invoke the following skill BEFORE any implementation:**

```
Invoke: superpowers:brainstorming
```

**Purpose:** Refine implementation approach, validate against PRD requirements, explore alternatives

**What to brainstorm:**
1. Which pages/features to implement first (priority order)
2. Component architecture strategy
3. How to handle navigation updates (Resources visibility, High Speed Interconnect addition)
4. State management approach (if needed)
5. SEO hidden text implementation pattern validation
6. Migration strategy from current implementation to PRD v3.0 specifications

**Expected Output:** Clear implementation plan with validated approach

---

### Phase 1: Foundation & Theme (Week 1)

#### Step 1A: Review PRD v3.0 Documents

**Action:** Read the following files in order:

1. `/working/prd-v3/02-design-system.md` - Read Section 1 (Color Palette) and Section 2 (Typography)
2. `/working/prd-v3/01-main-prd.md` - Read Section 4 (Navigation Architecture)
3. Review current implementation:
   - `app/globals.css` - Current color variables
   - `tailwind.config.ts` - Tailwind configuration
   - `components/navigation.tsx` - Current navigation structure

**Verification:** Understand current state vs. target state

#### Step 1B: Apply Design System

**Invoke the following skills:**

```
Invoke: document-skills:theme-factory
```

**Purpose:** Apply Electric Blue (#0072CE) + Dark Charcoal Gray (#333333) theme consistently

**Then invoke:**

```
Invoke: document-skills:frontend-design
```

**Purpose:** Ensure professional B2B aesthetics throughout implementation

**Tasks:**
1. Update `app/globals.css` with FINAL color palette from PRD v3.0 Doc 2, Section 1.1-1.2
2. Update `tailwind.config.ts` if needed for design tokens
3. Create/update base component library:
   - Buttons (3 variants: primary, secondary, ghost)
   - Navigation components
   - Card components
   - Form elements
   - Spec tables (critical B2B pattern)

**Reference Documents:**
- PRD v3.0 Doc 2, Sections 4-7 for component specifications
- PRD v3.0 Doc 2, Section 9 for B2B patterns

**Verification Command:**
```bash
npm run dev
# Manually review components match PRD specifications
```

**MANDATORY before proceeding:**

```
Invoke: superpowers:verification-before-completion
```

**What to verify:**
- All color variables match PRD v3.0 exactly (#0072CE, #333333)
- NO orange (#FF6B35) remains in codebase
- Components render with professional B2B aesthetics
- Typography scale matches PRD v3.0 Doc 2, Section 2

---

### Phase 2: Navigation Architecture (Week 1)

#### Step 2A: Update Navigation Structure

**Reference:** PRD v3.0 Doc 1, Section 4 (Navigation Architecture)

**Critical Changes:**
1. **Resources** - Make visible as top-level menu item (currently hidden but fully built)
2. **High Speed Interconnect** - Add as top-level menu item (exists but not in navigation)

**Tasks:**
1. Read `components/navigation.tsx`
2. Update navigation array to include:
   - Resources (make visible)
   - High Speed Interconnect (add if missing)
3. Verify navigation order matches PRD v3.0:
   - Custom Engineering (dropdown: DC Twin™)
   - Deployment Services
   - Fiber (dropdown: Hyperscalers, Patch Panels)
   - **High Speed Interconnect**
   - Ethernet (dropdown: Patch Panels)
   - Systems & Accessories (dropdown: Testing Solutions)
   - **Resources**
   - Company
   - Contact
   - "Request a Quote" CTA (right-aligned)

**Verification Command:**
```bash
npm run dev
# Verify navigation displays all items correctly
```

**MANDATORY:**

```
Invoke: superpowers:verification-before-completion
```

---

### Phase 3: Page Implementation (Weeks 2-5)

For EACH page implementation, follow this workflow:

#### Step 3A: Before Implementing Any Page

**MANDATORY:**

```
Invoke: superpowers:brainstorming
```

**What to discuss:**
- Page-specific design decisions
- Content structure validation against PRD
- SEO hidden text placement
- Component reuse strategy
- Accessibility considerations

#### Step 3B: Create Implementation Plan

**For complex pages (multi-section pages like Fiber hub with dropdowns):**

```
Use slash command: /superpowers:write-plan
```

**What to include in plan:**
1. Component breakdown
2. Content sections from PRD v3.0 Doc 3
3. SEO metadata from PRD v3.0 Doc 4
4. Hidden text implementation from Doc 4, Section 3
5. Verification steps

**Then execute:**

```
Use slash command: /superpowers:execute-plan
```

**For simpler pages (single-purpose pages like Contact):**

You can implement directly using frontend skills

#### Step 3C: Implement Page Components

**Invoke:**

```
Invoke: document-skills:frontend-design
```

**Reference Documents:**
- PRD v3.0 Doc 3 - Find your page section (Sections 1-15)
- PRD v3.0 Doc 2 - Component specifications
- PRD v3.0 Doc 4, Section 2 - Page-specific SEO metadata

**Implementation checklist per page:**
- [ ] Hero section (if specified in Doc 3)
- [ ] Features/benefits sections
- [ ] CTAs ("Request a Quote", "Learn More")
- [ ] SEO metadata (title, description from Doc 4)
- [ ] Hidden text for SEO (using pattern from Doc 4, Section 3)
- [ ] Accessibility (WCAG 2.1 AA)
- [ ] Responsive design (mobile, tablet, desktop)

**For TypeScript/React patterns:**

```
Use Task tool with: subagent_type: "typescript-pro"
```

**For parallel independent pages (e.g., all Ethernet sub-pages):**

```
Invoke: superpowers:subagent-driven-development
```

**Purpose:** Dispatch fresh subagent for each independent page with automatic code review between tasks

#### Step 3D: Add SEO Hidden Text

**Reference:** PRD v3.0 Doc 4, Section 4 (SEO Content Library)

**Available pre-written blocks (300-400 words each):**
1. High Speed Interconnect
2. DC Twin™ Digital Modeling
3. Fiber Optic Solutions
4. Ethernet Cabling
5. Deployment Services
6. Custom Engineering

**Implementation Pattern (from Doc 4, Section 3.2):**

```tsx
<section className="seo-hidden-content">
  <details className="sr-only" aria-hidden="true">
    <summary>Additional Technical Information</summary>
    <div>
      {/* Copy pre-written content from Doc 4, Section 4.X */}
    </div>
  </details>
</section>
```

**Why this pattern:**
- Fast page loads (hidden from visual render)
- SEO value (crawlers index content)
- Semantic HTML (accessible if needed)

#### Step 3E: Test & Verify Page

**MANDATORY for EVERY page:**

```
Invoke: superpowers:verification-before-completion
```

**What to verify:**
- [ ] Page renders correctly (npm run dev)
- [ ] No TypeScript errors
- [ ] All links work
- [ ] Mobile responsive
- [ ] SEO metadata present (view page source)
- [ ] Hidden text present in HTML
- [ ] Color palette matches PRD (#0072CE, #333333)
- [ ] No console errors

**Verification Commands:**
```bash
npm run build
npm run dev
# Manual testing in browser
# Check Lighthouse score (target ≥90)
```

---

### Phase 4: Resources Section (Week 6)

**Reference:** PRD v3.0 Doc 3, Section 13 (Resources)

**Status:** 7 articles fully implemented, need SEO optimization and visibility

**Articles to verify/update:**
1. Complete Guide to Data Center Structured Cabling
2. 5 Ways DCIM Digital Twins Reduce Deployment Risk
3. Case Study: Faster Deployment with Advanced Kitting
4. Fiber Optic Cable Management Best Practices
5. Cat6A vs Cat8 for High-Speed Networks
6. Edge Computing Infrastructure Requirements
7. Quality Assurance in Custom Cable Manufacturing

#### Step 4A: Resources Hub Page

**Invoke:**

```
Invoke: document-skills:frontend-design
```

**Tasks:**
1. Review `app/resources/page.tsx`
2. Ensure all 7 articles are listed
3. Add SEO metadata from Doc 4, Section 2.13
4. Implement article preview cards (thumbnail, excerpt, "Read More")

#### Step 4B: Individual Article Pages

**For content writing:**

```
Invoke: document-skills:doc-coauthoring
```

**For each article:**
1. Reference PRD v3.0 Doc 3, Section 13 for content structure
2. Add SEO metadata from Doc 4
3. Implement proper typography hierarchy
4. Add related articles section
5. Include "Request a Quote" CTA at bottom

**MANDATORY:**

```
Invoke: superpowers:verification-before-completion
```

---

### Phase 5: High Speed Interconnect (Week 6)

**Reference:** PRD v3.0 Doc 3, Section 8

**Status:** Page exists but not documented in PRD v2.1, now fully specified in PRD v3.0

#### Step 5A: Review Current Implementation

**Action:**
1. Read `app/high-speed-interconnect/page.tsx` (if exists)
2. Compare against PRD v3.0 Doc 3, Section 8 specifications
3. Identify gaps

#### Step 5B: Implement/Update Page

**Invoke:**

```
Invoke: superpowers:brainstorming
```

**Then invoke:**

```
Invoke: document-skills:frontend-design
```

**Tasks:**
1. Implement hero section (400G/800G messaging)
2. Features section (MPO-24, QSFP-DD, OSFP form factors)
3. Applications section (AI/HPC infrastructure)
4. Technical specifications table (B2B pattern)
5. SEO hidden text (use Doc 4, Section 4.1 pre-written block)
6. CTAs

**MANDATORY:**

```
Invoke: superpowers:verification-before-completion
```

---

### Phase 6: Testing & Quality Assurance (Week 7)

#### Step 6A: Test-Driven Development

**If adding new features with complex logic:**

```
Invoke: superpowers:test-driven-development
```

**Purpose:** Write tests first, watch fail, implement, verify pass

#### Step 6B: Systematic Debugging

**If encountering bugs or unexpected behavior:**

```
Invoke: superpowers:systematic-debugging
```

**Purpose:** Four-phase framework (root cause → pattern analysis → hypothesis → implementation)

**Alternative for quick debugging:**

```
Use Task tool with: subagent_type: "debugging-toolkit:debugger"
```

#### Step 6C: Comprehensive Site Verification

**MANDATORY before launch:**

```
Invoke: superpowers:verification-before-completion
```

**Verification Checklist:**

1. **Build & Deploy:**
```bash
npm run build
# Verify no errors
```

2. **Lighthouse Audit (all pages):**
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

3. **Core Web Vitals:**
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

4. **Navigation:**
- [ ] Resources visible and working
- [ ] High Speed Interconnect visible and working
- [ ] All dropdown menus function
- [ ] "Request a Quote" CTA present on all pages

5. **Color Palette:**
- [ ] Only #0072CE (Electric Blue) and #333333 (Charcoal) used
- [ ] NO orange (#FF6B35) anywhere
- [ ] NO bright AI colors (green, purple, red)

6. **SEO:**
- [ ] All 16 pages have meta titles and descriptions
- [ ] Hidden text present on all pages (view source)
- [ ] Structured data (Schema.org) if specified

7. **Accessibility:**
- [ ] WCAG 2.1 Level AA compliance
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Proper ARIA labels

8. **Responsive:**
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)

**Verification Commands:**
```bash
# TypeScript check
npm run type-check

# Linting
npm run lint

# Build
npm run build

# Test (if tests exist)
npm run test

# Run dev server
npm run dev
```

---

### Phase 7: Code Review & Launch (Week 7)

#### Step 7A: Comprehensive Code Review

**MANDATORY before merging to main:**

```
Invoke: superpowers:requesting-code-review
```

**Purpose:** Dispatches code-reviewer agent to validate against PRD requirements

**What will be reviewed:**
- Code quality and patterns
- PRD v3.0 compliance
- Security vulnerabilities
- Performance optimization
- Accessibility standards
- SEO implementation

#### Step 7B: Address Code Review Feedback

**If feedback is unclear or questionable:**

```
Invoke: superpowers:receiving-code-review
```

**Purpose:** Technical rigor, verification, not blind implementation

#### Step 7C: Final Verification

**MANDATORY:**

```
Invoke: superpowers:verification-before-completion
```

**Final Checklist:**
- [ ] All code review feedback addressed
- [ ] All tests pass
- [ ] Build successful
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Lighthouse scores ≥90
- [ ] All 16 pages functional
- [ ] Navigation complete (Resources + High Speed Interconnect)
- [ ] Color palette correct (#0072CE, #333333)

#### Step 7D: Deployment

**Action:**
1. Commit changes with descriptive message
2. Push to repository
3. Vercel will auto-deploy
4. Verify production build

**Post-Deployment:**
1. Test all pages in production
2. Verify analytics tracking (Google Analytics 4)
3. Submit sitemap to Google Search Console

---

## Quick Reference: Skill Invocation Guide

### When to Use Each Skill

| Situation | Skill to Invoke | Purpose |
|-----------|----------------|---------|
| Before ANY implementation | `superpowers:brainstorming` | Refine approach, validate decisions |
| Complex multi-page work | `/superpowers:write-plan` + `/execute-plan` | Detailed planning, batch execution |
| Building UI components | `document-skills:frontend-design` | Professional B2B aesthetics |
| Applying theme | `document-skills:theme-factory` | Consistent color palette |
| Writing article content | `document-skills:doc-coauthoring` | Polished, SEO-optimized content |
| Parallel independent tasks | `superpowers:subagent-driven-development` | Fast iteration with quality gates |
| Before claiming done | `superpowers:verification-before-completion` | **MANDATORY** - verify completion |
| After major features | `superpowers:requesting-code-review` | Validate against PRD |
| Encountering bugs | `superpowers:systematic-debugging` | Root cause analysis framework |
| Adding complex logic | `superpowers:test-driven-development` | Red-Green-Refactor cycle |

### Task Tool Agents (Alternative to Skills)

| Task Type | Agent Type | When to Use |
|-----------|-----------|-------------|
| React/Next.js work | `frontend-mobile-development:frontend-developer` | Component implementation |
| TypeScript patterns | `javascript-typescript:typescript-pro` | Type-safe development |
| Debugging issues | `debugging-toolkit:debugger` | Quick troubleshooting |
| Code review | `code-documentation:code-reviewer` | Quality assurance |

---

## Critical Reminders

### Design Principles (NON-NEGOTIABLE)

1. **Color Palette:** ONLY Electric Blue (#0072CE) and Dark Charcoal Gray (#333333)
2. **NO Bright AI Colors:** Absolutely NO green, purple, red, or orange
3. **B2B Aesthetics:** Professional, polished, corporate (reference Panduit, Lanshack, Clearfield)
4. **Typography:** Inter font, clear hierarchy per PRD v3.0 Doc 2, Section 2
5. **White Space:** Generous spacing, no clutter
6. **Trust Signals:** Client logos, certifications, quantifiable metrics

### B2B Patterns to Implement

1. **Spec Tables:** Technical product specifications in table format
2. **Downloadable Resources:** Datasheets, guides (if available)
3. **Case Studies:** Quantifiable results (50% faster, 95% error reduction)
4. **Client Logos:** "Trusted by Industry Leaders" section
5. **Persistent CTA:** "Request a Quote" always visible
6. **Breadcrumbs:** On deep pages for navigation

### SEO Best Practices

1. **Hidden Text:** Use pattern from Doc 4, Section 3.2 for all pages
2. **Meta Tags:** Unique titles/descriptions for all 16 pages (Doc 4, Section 2)
3. **Content Library:** Copy pre-written blocks from Doc 4, Section 4
4. **Performance:** Fast page loads (hidden text helps)
5. **Structured Data:** Schema.org markup where specified

### Performance Targets

- **Lighthouse Scores:** ≥90 (all categories)
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1
- **Image Optimization:** Next.js Image component, WebP format, lazy loading
- **Code Splitting:** Automatic with Next.js App Router

---

## Implementation Priority Order

### Critical Path (Must Complete First)

1. **Foundation** - Theme, base components, navigation
2. **Homepage** - First impression, critical for SEO
3. **Navigation Updates** - Resources visibility, High Speed Interconnect addition
4. **Core Product Pages** - Fiber, Ethernet, High Speed Interconnect

### High Priority (Complete Second)

5. **Custom Engineering** - DC Twin™ differentiation
6. **Deployment Services** - Key service offering
7. **Resources Section** - SEO value, thought leadership

### Medium Priority (Complete Third)

8. **Systems & Accessories** - Supporting products
9. **Testing Solutions** - Technical depth
10. **Company & Contact** - Standard pages

---

## Success Metrics

### Technical Metrics
- [ ] All 16 pages implemented and functional
- [ ] Lighthouse scores ≥90 (all categories)
- [ ] Zero TypeScript errors
- [ ] Zero console warnings
- [ ] Build time <60 seconds

### Design Metrics
- [ ] Color palette 100% compliance (#0072CE, #333333)
- [ ] Zero bright AI colors in codebase
- [ ] Professional B2B aesthetic throughout
- [ ] Responsive on all devices

### SEO Metrics
- [ ] All pages have unique meta titles/descriptions
- [ ] Hidden text present on all 16 pages
- [ ] Structured data implemented
- [ ] Sitemap submitted to Google

### Content Metrics
- [ ] Resources menu visible with 7 articles
- [ ] High Speed Interconnect fully documented
- [ ] All CTAs present ("Request a Quote")
- [ ] Client trust signals present

---

## Troubleshooting

### If You Get Stuck

1. **Design Uncertainty:**
   ```
   Invoke: superpowers:brainstorming
   ```
   Discuss alternatives, validate against PRD

2. **Implementation Complexity:**
   ```
   Use slash command: /superpowers:write-plan
   ```
   Break down into smaller tasks

3. **Bugs/Errors:**
   ```
   Invoke: superpowers:systematic-debugging
   ```
   Root cause analysis

4. **Need Expertise:**
   ```
   Use Task tool with appropriate agent:
   - frontend-developer (React/Next.js)
   - typescript-pro (TypeScript patterns)
   - debugger (troubleshooting)
   ```

### Common Issues

**Issue:** Colors don't match PRD
- **Fix:** Re-read Doc 2, Section 1, re-apply theme-factory skill

**Issue:** Navigation missing items
- **Fix:** Review Doc 1, Section 4, verify navigation array

**Issue:** SEO metadata missing
- **Fix:** Reference Doc 4, Section 2 for page-specific metadata

**Issue:** Page performance slow
- **Fix:** Review Doc 4, Section 5, implement image optimization, code splitting

---

## Final Reminder

**NEVER skip these mandatory steps:**

1. **Before starting:** `superpowers:brainstorming`
2. **Before claiming done:** `superpowers:verification-before-completion`
3. **Before merging:** `superpowers:requesting-code-review`

**Always reference PRD v3.0:**
- Doc 1 for strategy and navigation
- Doc 2 for design and components
- Doc 3 for page content
- Doc 4 for SEO and performance

**Professional B2B aesthetic is NON-NEGOTIABLE:**
- Only #0072CE and #333333
- No bright AI colors
- Clean, polished, corporate

---

## Ready to Begin?

Copy this entire prompt into Claude Code to start the Wave2Wave website redesign implementation with all skills properly integrated.

**First command to execute:**

```
Invoke: superpowers:brainstorming

Topic: Wave2Wave website redesign implementation strategy

Context:
- PRD v3.0 in /working/prd-v3/ (4 documents)
- Next.js 15, React, TypeScript
- Professional B2B aesthetic (#0072CE, #333333)
- 16 pages to implement
- Resources and High Speed Interconnect need navigation updates

Questions to explore:
1. Which pages/features to implement first?
2. Component architecture strategy?
3. How to handle navigation updates?
4. SEO hidden text implementation validation?
5. Testing strategy?
```

Let's build a professional, polished B2B website that showcases Wave2Wave's expertise!

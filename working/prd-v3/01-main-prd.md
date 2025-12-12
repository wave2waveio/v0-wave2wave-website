# Wave2Wave.io Website Redesign
## Product Requirements Document (PRD) v3.0 - Main Document

**Version:** 3.0
**Date:** December 2025
**Project:** Website Redesign & Restructure
**Platform:** Next.js + Vercel
**Repository:** GitHub (existing)

---

## Document Quick Reference

**Document 1 - Main PRD (THIS DOCUMENT):** Strategic overview, navigation architecture, implementation guidance
**Document 2 - Design System:** Color palette, typography, components, interactions
**Document 3 - Page Specs:** Content and structure for every page
**Document 4 - SEO & Technical:** SEO strategy, hidden text library, performance specs

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Context](#2-business-context)
3. [Current State Analysis](#3-current-state-analysis)
4. [Navigation Architecture](#4-navigation-architecture)
5. [Technical Implementation](#5-technical-implementation)
6. [Quality Assurance & Launch](#6-quality-assurance--launch)
7. [Embedded Prompts for Claude Code](#7-embedded-prompts-for-claude-code)
8. [Document Map & Usage Guide](#8-document-map--usage-guide)

---

## 1. Project Overview

### 1.1 About Wave2Wave

Wave2Wave.io is a B2B provider of custom-engineered data center cabling infrastructure serving enterprise and hyperscale clients globally. The company specializes in:

- **Custom Cable Manufacturing:** Pre-terminated fiber optic, copper Ethernet, and power cables built to exact specifications (lengths in 3-inch increments)
- **Factory Labeling:** Every cable ships pre-labeled to rack and port mappings, eliminating field errors
- **Deployment Kitting:** Rack-specific cable assemblies organized by installation phase, reducing deployment time by 50-75%
- **DC Twin™ Digital Modeling:** Virtual data center design platform that validates every cable route before production
- **Lab & Testing Solutions:** Specialized equipment including Fiber-in-a-Box™ distance simulators and W-IGNITE™ loopback testers

### 1.2 Target Audience

**Primary:**
- Data Center Network Engineers (evaluate technical specifications)
- Infrastructure Architects (design large-scale deployments)
- Procurement Managers (make purchasing decisions)

**Secondary:**
- C-level executives at hyperscale providers (Google, Microsoft, Meta, AWS)
- AI/HPC facility managers (NVIDIA DGX clusters, GPU supercomputers)
- Enterprise IT Directors (Fortune 500 data centers)
- Telecom operators (FTTH, 5G backhaul)

### 1.3 Redesign Objectives

**Updated from PRD v2.1 with Current State Findings:**

1. **Streamline Navigation:** Reduce to 9 clear top-level sections (including Resources and High Speed Interconnect)
2. **Consolidate Solutions:** Homepage serves as Solutions overview (single entry point)
3. **Clarify Product Hierarchy:** Fiber → High Speed Interconnect → Ethernet → Systems & Accessories
4. **Highlight Differentiators:** Elevate Custom Engineering, DC Twin™, and Deployment Services
5. **Expand Resources:** Full content specifications for 7 articles (SEO and thought leadership)
6. **Professional B2B Aesthetic:** Electric Blue (#0072CE) + Dark Charcoal Gray (#333333), NO bright AI colors
7. **Improve Performance:** Target <2.5s LCP, Lighthouse score ≥90, mobile-first responsive design

### 1.4 Success Metrics

**User Experience:**
- Reduce bounce rate by 15%
- Increase average time-on-site by 25%
- Improve pages-per-session by 30%

**Business Goals:**
- Increase contact form conversion by 20%
- Reduce support inquiries about product finding by 40%
- Achieve 50% increase in DC Twin™ service page visits
- **NEW:** Increase Resources section traffic by 100% (currently hidden from navigation)

**Technical Performance:**
- Largest Contentful Paint (LCP) <2.5s
- First Input Delay (FID) <100ms or Interaction to Next Paint (INP) <200ms
- Cumulative Layout Shift (CLS) <0.1
- Lighthouse scores ≥90 (all categories)
- Mobile-friendly test: 100% pass

### 1.5 Project Timeline

**Updated for PRD v3.0 Implementation:**

- **Phase 1 (Weeks 1-2):** Design system implementation, component library setup
- **Phase 2 (Weeks 3-4):** Core pages (Homepage, Custom Engineering, DC Twin, Deployment Services)
- **Phase 3 (Weeks 5-6):** Product pages (Fiber, High Speed Interconnect, Ethernet, Systems & Accessories)
- **Phase 4 (Week 7):** Resources visibility (add to navigation), SEO implementation (hidden text)
- **Phase 5 (Week 8):** QA testing, content review, performance optimization
- **Phase 6 (Week 9):** Staging review, redirects, launch preparation
- **Phase 7 (Week 10):** Production deployment, post-launch monitoring

---

## 2. Business Context

### 2.1 Competitive Landscape

Wave2Wave competes in the custom data center cabling market against:

- **Catalog Vendors** (FS.com, CablesPlus): Fixed-length standard products
- **Traditional Integrators** (CommScope, Panduit): Focus on on-site termination
- **ODM Manufacturers:** Low-cost Asian suppliers with long lead times

**Wave2Wave's Competitive Advantages:**

1. Custom lengths (3-inch increments) vs. fixed catalog options
2. Factory pre-termination and testing vs. field installation
3. 3-4 week lead time vs. 8-12 week industry average
4. Integrated services (labeling, kitting, DC Twin™) vs. products-only approach
5. Dedicated to data center market vs. general telecom/enterprise

### 2.2 Brand Positioning

**Tagline:** "Connecting the Physical Backbone of the AI & Datacenter Era"

**Brand Promise:** Wave2Wave doesn't just sell cables — we deliver infrastructure you can trust, because the network begins where the cable does.

**Tone of Voice:**
- **Confident & Authoritative:** We are experts; we speak with technical precision
- **Results-Oriented:** Focus on quantifiable benefits (50% faster, zero errors)
- **Engineering-First:** Respect the technical sophistication of our audience
- **No Fluff:** Avoid marketing jargon; use industry-standard terminology

**Brand Attributes:**
- Precision engineering
- Speed and efficiency
- Innovation (DC Twin™)
- Reliability and quality
- Customer partnership

### 2.3 Content Strategy

**Primary Goal:** Position Wave2Wave as the expert solution for custom data center cabling

**Content Pillars:**

1. **Educational:** Explain why custom matters (vs. off-the-shelf) — Resources section
2. **Technical:** Provide specs, standards, testing data — Product pages with spec tables
3. **Proof:** Show quantifiable results (metrics, client logos) — Case studies, testimonials
4. **Differentiation:** Highlight unique services (DC Twin™, kitting) — Service pages

**Writing Guidelines:**
- Use specific numbers (50-75% faster, 3-4 weeks, 99% accuracy)
- Include industry terms (MPO-24, QSFP-DD, TIA-568, PoE++)
- Break long text into 2-4 sentence paragraphs
- Use bullet lists for specs and features
- Maintain active voice

**Professional B2B Patterns (from Panduit, Lanshack, Clearfield):**
- Technical specification tables on product pages
- Client logos and trust signals
- Downloadable resources (datasheets, guides)
- Clean, minimal design with generous white space
- Quantifiable metrics throughout

---

## 3. Current State Analysis

### 3.1 PRD v2.1 vs. Live Implementation Audit

**Key Discrepancies Identified:**

| Item | PRD v2.1 Specification | Live Implementation | Status |
|------|------------------------|---------------------|---------|
| **Navigation Items** | 9 items (Solutions through Contact) | 8 items visible, Resources built but hidden | ⚠️ Gap |
| **Resources Menu** | "7. Resources" explicitly listed | Fully built (7 articles) but NOT in navigation | ⚠️ Critical Gap |
| **High Speed Interconnect** | Not specified | Exists as standalone page + nav item | ⚠️ Not Documented |
| **Color Palette** | Primary Blue #0066CC, Orange #FF6B35 | Electric Blue #0072CE, NO orange | ⚠️ Diverged |
| **Navigation Count** | 9 top-level items | Actually 9 when Resources added | ✓ Will Align |
| **Footer Structure** | 4-column layout | 4-column layout implemented | ✓ Aligned |

**Critical Findings:**

1. **Resources Section:**
   - **Status:** Fully implemented with 7 articles, professional hub page
   - **Issue:** NOT visible in main navigation menu
   - **Impact:** SEO asset hidden, users can't discover content
   - **Fix Required:** Add Resources as top-level navigation item (between Systems & Accessories and Company)

2. **High Speed Interconnect:**
   - **Status:** Fully implemented page exists
   - **Issue:** NOT documented in PRD v2.1
   - **Impact:** Lack of content specifications, SEO strategy
   - **Fix Required:** Document page specifications in PRD v3.0 (Document 3, Section 8)

3. **Color Palette Evolution:**
   - **PRD v2.1:** `#0066CC` (Primary Blue) + `#FF6B35` (Secondary Orange)
   - **Live Implementation:** `#0072CE` (Electric Blue) + `#333333` (Dark Charcoal Gray)
   - **Change Rationale:** Remove bright AI colors (orange), adopt professional B2B palette
   - **Status:** Approved evolution, document in PRD v3.0

### 3.2 Resource Articles (Current Implementation)

**Confirmed Existing Articles (7 total):**

1. Complete Guide to Data Center Structured Cabling
2. 5 Ways DCIM Digital Twins Reduce Deployment Risk
3. Case Study: Faster Deployment with Advanced Kitting
4. Fiber Optic Cable Management Best Practices
5. Cat6A vs Cat8 for High-Speed Networks
6. Edge Computing Infrastructure Requirements
7. Quality Assurance in Custom Cable Manufacturing

**Status:** All articles are fully implemented with professional layouts, but need:
- SEO metadata updates (Document 4, Section 2.13)
- Hidden text implementation (Document 4, Section 3)
- Visibility in navigation (add Resources menu item)

### 3.3 Navigation Architecture Update Required

**Current PRD v2.1 Navigation (9 items):**
1. Solutions
2. Custom Engineering
3. Deployment Services
4. Fiber
5. Ethernet
6. Systems & Accessories
7. Resources ← **Missing from live implementation**
8. Company
9. Contact

**Current Live Implementation (8 items visible + Resources hidden):**
1. Custom Engineering
2. Deployment Services
3. Fiber
4. **High Speed Interconnect** ← **Not in PRD v2.1**
5. Ethernet
6. Systems & Accessories
7. Company
8. Contact
9. **Resources** ← **Built but HIDDEN**

**PRD v3.0 FINAL Navigation (9 items):**
1. Custom Engineering (with dropdown: DC Twin™)
2. Deployment Services
3. Fiber (with dropdown: Hyperscalers, Patch Panels)
4. **High Speed Interconnect** (NEW - document as standalone)
5. Ethernet (with dropdown: Patch Panels)
6. Systems & Accessories (with dropdown: Testing Solutions)
7. **Resources** (NEW - add to navigation visibility)
8. Company
9. Contact
10. **"Request a Quote"** CTA Button (right-aligned, not counted in 9)

**Note:** Homepage (`/`) serves as Solutions page, no separate "Solutions" menu item needed.

---

## 4. Navigation Architecture

### 4.1 Complete Site Map

```
/ (Homepage / Solutions)
│
├── /custom-engineering
│   └── /custom-engineering/dc-twin
│
├── /deployment-services
│
├── /fiber
│   ├── /fiber/hyperscalers
│   └── /fiber/patch-panels
│
├── /high-speed-interconnect (NEW - documented in v3.0)
│
├── /ethernet
│   └── /ethernet/patch-panels
│
├── /systems-and-accessories
│   └── /systems-and-accessories/testing
│
├── /resources (NEW - make visible in navigation)
│   ├── /resources/complete-guide-data-center-structured-cabling
│   ├── /resources/dcim-digital-twins-reduce-deployment-risk
│   ├── /resources/case-study-faster-deployment-kitting
│   ├── /resources/fiber-optic-cable-management-best-practices
│   ├── /resources/cat6a-vs-cat8-high-speed-networks
│   ├── /resources/edge-computing-infrastructure-requirements
│   └── /resources/quality-assurance-custom-cable-manufacturing
│
├── /company
│
├── /contact
│
└── /about
    ├── /about/privacy-policy
    └── /about/terms-of-use
```

### 4.2 Top-Level Navigation Menu

**Desktop Header Menu Items (Left to Right):**

1. **Custom Engineering** (with dropdown)
   - DC Twin™ Digital Modeling

2. **Deployment Services** (no dropdown)

3. **Fiber** (with dropdown)
   - Hyperscalers
   - Patch Panels

4. **High Speed Interconnect** (no dropdown) ← **NEW in v3.0**

5. **Ethernet** (with dropdown)
   - Patch Panels

6. **Systems & Accessories** (with dropdown)
   - Testing Solutions

7. **Resources** (no dropdown) ← **ADD to navigation (was hidden)**

8. **Company** (no dropdown)

9. **Contact** (no dropdown)

**Right Side:**
- **"Request a Quote"** CTA Button (Primary Button style from Document 2)

### 4.3 Dropdown/Submenu Structure

**Implementation:**
- **Desktop:** Dropdowns appear on hover (0.2s fade)
- **Mobile:** Expandable accordion within hamburger menu

**Dropdown Styling:** See Document 2, Section 4.2 (Navigation component specs)

### 4.4 Mobile Navigation

**Mobile Header:**
- Height: 64px
- Logo: Max-height 40px (left-aligned)
- Hamburger icon: 24×24px (right-aligned)

**Mobile Menu:**
- Full-screen overlay or slide-in drawer
- All 9 menu items + dropdowns (accordion style)
- "Request a Quote" button at bottom
- Close icon: 24×24px X (top-right)

### 4.5 Footer Navigation

**Column 1 - Quick Links:**
- Solutions (links to `/`)
- Custom Engineering
- Deployment Services
- **Resources** ← **ADD** (was missing in PRD v2.1)
- Contact Us

**Column 2 - Products:**
- Fiber Solutions
- High Speed Interconnect ← **ADD** (new in v3.0)
- Ethernet Solutions
- Systems & Accessories
- Testing Solutions

**Column 3 - Company:**
- About Wave2Wave
- Quality & Certifications
- Careers (if applicable)

**Column 4 - Contact Info:**
- Phone: [Insert phone number]
- Email: [Insert email]
- Address: [Insert physical address]

**Bottom Bar:**
- © 2025 Wave2Wave.io. All rights reserved.
- Privacy Policy | Terms of Service
- Social media icons (LinkedIn if applicable)

### 4.6 Homepage Definition

**Decision:** Solutions page IS the homepage (unchanged from PRD v2.1)

**Route:** `/` (root)
**Content:** Solutions page content (Document 3, Section 1)
**Redirect:** `/solutions` → `/` (301 permanent redirect)

**Navigation Behavior:**
- When users are on `/`, no menu item highlighted as "Solutions"
- Homepage serves as entry point with value proposition
- Navigation starts with "Custom Engineering" (first menu item)

**Rationale:**
1. Solutions page best represents Wave2Wave's value proposition
2. Reduces friction - visitors see benefits immediately
3. Simplifies URL structure
4. Better for SEO - homepage authority flows to most important content

---

## 5. Technical Implementation

### 5.1 Next.js & Vercel Architecture

**Platform:**
- **Framework:** Next.js 15+ (App Router)
- **Hosting:** Vercel (existing deployment)
- **Repository:** GitHub (existing)

**Key Features:**
- Server-side rendering (SSR) for SEO
- Static generation (SSG) where possible
- Image optimization (Next.js Image component)
- Font optimization (next/font)
- Automatic code splitting

### 5.2 Performance Requirements

**Core Web Vitals Targets:**

```
Largest Contentful Paint (LCP): <2.5s
First Input Delay (FID): <100ms
Interaction to Next Paint (INP): <200ms
Cumulative Layout Shift (CLS): <0.1
```

**Lighthouse Score Targets:**

```
Performance: ≥90
Accessibility: ≥90
Best Practices: ≥90
SEO: ≥90
```

**Detailed Performance Specs:** See Document 4, Section 5 (Technical Performance Requirements)

### 5.3 Image Optimization Strategy

**Implementation:**
- Use Next.js Image component for all images
- Format: WebP with JPEG fallback
- Lazy loading for below-fold images
- Priority loading for hero images

**Image Specifications:**
- Hero images: 1920px max width, quality 85
- Content images: 1200px max width, quality 75
- Product images: 800px max width, quality 80
- Icons/logos: SVG (preferred) or optimized PNG

**Example:**
```tsx
import Image from "next/image"

<Image
  src="/hero-image.jpg"
  alt="Data center cabling"
  width={1920}
  height={1080}
  priority // For above-fold
  quality={85}
/>
```

### 5.4 SEO Implementation

**Critical Requirements:**

1. **Meta Tags:** Every page must have unique title and description (Document 4, Section 2)
2. **Hidden Text:** Implement semantic HTML pattern with SEO content blocks (Document 4, Sections 3 & 4)
3. **Schema.org Markup:** Organization schema on homepage, Product/Article schema where applicable
4. **Sitemap:** Auto-generated XML sitemap (`/sitemap.xml`)
5. **Robots.txt:** Allow all crawlers, link to sitemap

**SEO Hidden Text Pattern:**

```html
<section className="seo-hidden-content">
  <details className="sr-only" aria-hidden="true">
    <summary>Additional Technical Information</summary>
    <div>
      <!-- SEO-rich content from Document 4, Section 4 -->
    </div>
  </details>
</section>
```

**Why Hidden Text:**
- Faster page loads (minimal visual DOM)
- SEO value (search engines crawl HTML content)
- Better UX (concise visible content)
- Accessibility-safe (aria-hidden excludes screen readers)

### 5.5 Analytics & Tracking

**Google Analytics 4:**
- Property ID: G-XXXXXXXXXX (existing)
- Enhanced Measurement: ON
- Custom events: quote requests, CTA clicks, resource downloads, phone/email clicks

**Conversion Tracking:**
- Primary: Quote request form submission
- Secondary: Contact form, phone clicks, resource downloads

**Detailed Analytics Specs:** See Document 4, Section 6 (Analytics & Tracking)

### 5.6 Third-Party Integrations

**Existing Integrations (Preserve):**
- Google Analytics 4
- CRM integration (if applicable)
- Form submission handling

**Optional Enhancements:**
- Hotjar or Microsoft Clarity (heatmaps, session recordings)
- Google Search Console (performance monitoring)

---

## 6. Quality Assurance & Launch

### 6.1 Testing Checklist

**Functional Testing:**
- [ ] All navigation links work correctly
- [ ] Dropdowns function on desktop (hover) and mobile (click)
- [ ] Forms validate and submit properly
- [ ] Contact form sends to correct endpoint
- [ ] Phone/email links work (tel:, mailto:)
- [ ] All CTAs link to correct destinations

**Visual/Responsive Testing:**
- [ ] Layout correct on mobile (320px-767px)
- [ ] Layout correct on tablet (768px-1023px)
- [ ] Layout correct on desktop (1024px+)
- [ ] Images load correctly with proper alt text
- [ ] Fonts load without FOIT (Flash of Invisible Text)
- [ ] Colors match design system (Electric Blue #0072CE, Charcoal #333333)

**Performance Testing:**
- [ ] Lighthouse audit: All scores ≥90
- [ ] Core Web Vitals: LCP <2.5s, CLS <0.1
- [ ] Mobile-friendly test: Pass
- [ ] Page Speed Insights: Good scores on mobile and desktop

**SEO Testing:**
- [ ] All pages have unique meta titles and descriptions
- [ ] Hidden text implemented correctly (not visible to users)
- [ ] Schema.org markup present where applicable
- [ ] Sitemap.xml generated and accessible
- [ ] Robots.txt allows crawlers

**Accessibility Testing:**
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible on all interactive elements
- [ ] ARIA labels present where needed
- [ ] Color contrast ratios meet WCAG AA (4.5:1)
- [ ] Screen reader testing (NVDA or VoiceOver)

**Cross-Browser Testing:**
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### 6.2 Launch Preparation

**Pre-Launch Tasks:**

1. **Staging Review:**
   - Deploy to staging environment
   - Conduct full QA testing
   - Get stakeholder approval

2. **Redirects:**
   - `/solutions` → `/` (301 permanent)
   - Any old URLs to new structure (301)

3. **DNS & SSL:**
   - Verify DNS settings
   - Ensure SSL certificate is valid

4. **Analytics Verification:**
   - Test GA4 tracking
   - Verify conversion events fire

5. **Backup:**
   - Backup current production site
   - Document rollback procedure

**Launch Day:**

1. Deploy to production (Vercel)
2. Verify homepage loads correctly
3. Test navigation and critical paths
4. Check analytics tracking
5. Monitor error logs
6. Test contact form submission

**Post-Launch (First 48 Hours):**

1. Monitor Core Web Vitals (Google Search Console)
2. Check Google Analytics for traffic patterns
3. Verify conversion tracking works
4. Monitor server logs for errors
5. Test all major user flows
6. Collect stakeholder feedback

### 6.3 Success Criteria

**Technical:**
- ✓ All Lighthouse scores ≥90
- ✓ Core Web Vitals pass (LCP <2.5s, CLS <0.1)
- ✓ Zero console errors on production
- ✓ Mobile-friendly test: 100% pass

**Content:**
- ✓ All 16 pages implemented with correct content
- ✓ Resources menu visible in navigation
- ✓ High Speed Interconnect documented and implemented
- ✓ SEO hidden text on all pages

**Design:**
- ✓ Color palette: Electric Blue #0072CE + Charcoal #333333 (no orange)
- ✓ Typography: Inter font consistently applied
- ✓ Components match design system specs

**SEO:**
- ✓ All pages indexed by Google (within 1 week)
- ✓ Meta tags present and unique
- ✓ Sitemap submitted to Google Search Console
- ✓ No indexing errors

---

## 7. Embedded Prompts for Claude Code

### 7.1 Implementation Workflow with Superpowers

**CRITICAL: Follow This Workflow for ALL Implementation**

#### Phase 1: Design Refinement

Before implementing ANY new feature or page, invoke the brainstorming skill:

```
/superpowers:brainstorm
```

**Why:** Ensures alternatives are explored and design is fully refined before coding. Even if requirements seem clear, brainstorming prevents suboptimal solutions.

**When to Skip:** ONLY for trivial tasks (typo fixes, single-line changes). When in doubt, brainstorm.

#### Phase 2: Planning

For complex implementations (multi-page features, navigation changes), create a detailed plan:

```
/superpowers:write-plan
```

Then execute in controlled batches with review checkpoints:

```
/superpowers:execute-plan
```

**Why:** Complex changes benefit from structured planning and batch execution with quality gates.

#### Phase 3: Implementation

For independent tasks within a session, use subagent-driven development:

```
Invoke: superpowers:subagent-driven-development
```

**Why:** Dispatches fresh agents for each task with code review between tasks, enabling fast iteration with quality gates.

**For UI Components:**

```
Invoke: document-skills:frontend-design
```

**Why:** Provides production-grade design patterns and avoids generic AI aesthetics. Ensures professional B2B appearance.

**For Theming:**

```
Invoke: document-skills:theme-factory
```

Apply the Electric Blue (#0072CE) + Dark Charcoal Gray (#333333) theme consistently. NO bright AI colors.

#### Phase 4: Verification

BEFORE claiming ANY work is complete, ALWAYS run verification:

```
Invoke: superpowers:verification-before-completion
```

**Why:** Prevents premature completion claims and ensures tests pass, Lighthouse scores meet targets, and implementation is production-ready.

**NEVER mark work complete without:**
- Running verification commands
- Showing output/evidence
- Confirming Lighthouse scores ≥90

#### Phase 5: Code Review

When completing major features, request code review:

```
Invoke: superpowers:requesting-code-review
```

**Why:** Validates work against requirements before merging. Critical quality gate.

### 7.2 Navigation Implementation Guidance

**Before implementing navigation changes:**

The navigation structure is changing to add Resources and document High Speed Interconnect. Before implementing, invoke the brainstorming skill to explore:

- Alternative menu organizations
- Mobile navigation implications
- User flow impacts
- Accessibility considerations

**Navigation Component Location:** `/components/navigation.tsx`

**Required Changes:**
1. Add "Resources" as top-level menu item (between Systems & Accessories and Company)
2. Ensure "High Speed Interconnect" is present (already implemented, verify)
3. Verify dropdown behavior (Custom Engineering, Fiber, Ethernet, Systems & Accessories)
4. Test mobile hamburger menu includes all items

**Verification:**
- Desktop: All 9 items visible + CTA button
- Mobile: All items accessible in hamburger menu
- Dropdowns work on hover (desktop) and click (mobile)

### 7.3 Resources Section Implementation

**Critical:** Resources section is a strategic SEO asset with 7 fully-implemented articles.

Before implementing visibility changes, invoke:

```
/superpowers:brainstorm
```

To explore:
- Navigation placement (top-level vs. dropdown)
- Hub page design
- Article discovery patterns
- Internal linking strategy

**Then consult:**
- **Document 3, Section 13:** Resources hub and article specifications
- **Document 4, Section 2.13:** SEO metadata for Resources
- **Document 4, Sections 3 & 4:** Hidden text implementation

**Implementation Tasks:**
1. Add "Resources" to navigation menu (visibility)
2. Verify Resources hub page (`/resources`)
3. Confirm all 7 article pages exist and are accessible
4. Implement SEO metadata on each article
5. Add article-specific hidden text (100-150 words per article)

### 7.4 Color Palette Implementation

**CRITICAL:** Color palette has diverged from PRD v2.1.

**FINAL Approved Colors:**
- **Primary:** Electric Blue #0072CE
- **Secondary:** Dark Charcoal Gray #333333
- **ELIMINATED:** Orange #FF6B35 (removed)

Before applying globally, invoke `document-skills:theme-factory` to ensure consistency across all components.

**Files to Update:**
- `/app/globals.css` - Already updated to #0072CE
- `/tailwind.config.ts` - Verify color tokens
- All component implementations - Use Electric Blue for primary actions

**DO NOT:**
- ❌ Use orange #FF6B35 anywhere
- ❌ Use bright green, purple, or red accents
- ❌ Mix PRD v2.1 colors (#0066CC) with v3.0 colors (#0072CE)

### 7.5 Performance Optimization Guidance

**Before implementing performance optimizations:**

Performance targets are strict (LCP <2.5s, CLS <0.1). Before implementing:

1. Invoke `superpowers:systematic-debugging` if performance issues exist
2. Reference **Document 4, Section 5** (Performance Requirements)
3. Use WebSearch to research Next.js 15+ performance patterns
4. Verify with Lighthouse audits before completion

**Key Optimizations:**
- Next.js Image component for all images
- Font optimization (next/font)
- Code splitting (automatic in Next.js)
- Lazy loading for below-fold content
- Minimize JavaScript bundle size

### 7.6 Common Rationalizations That Mean You're About To Fail

If you catch yourself thinking ANY of these thoughts, STOP. You are rationalizing. Check for and use the appropriate skill.

- "This is just a simple task" → WRONG. Tasks need brainstorming. Check skills.
- "I can implement navigation quickly" → WRONG. Navigation impacts user flow. Brainstorm first.
- "Resources is already built, just make it visible" → WRONG. Strategic change. Plan properly.
- "Let me gather information first" → WRONG. Skills tell you HOW to gather information.
- "This doesn't need formal planning" → WRONG. If a skill exists, use it.
- "I'll just do this one thing first" → WRONG. Check for skills BEFORE doing anything.

**Why:** Skills document proven techniques. Not using skills means repeating solved problems and making known errors.

---

## 8. Document Map & Usage Guide

### 8.1 How the 4 Documents Work Together

**Document 1 - Main PRD (THIS DOCUMENT):**
- Strategic overview and business context
- Navigation architecture (complete site map)
- Technical implementation guidance
- Quality assurance and launch procedures
- Embedded skill invocation prompts

**Use When:** Need to understand project goals, navigation structure, or implementation workflow.

**Document 2 - Design System Specification:**
- Color palette (Electric Blue #0072CE, Charcoal #333333)
- Typography system (Inter font, type scale)
- Component specifications (buttons, navigation, cards, forms, tables)
- Interaction patterns (hover, loading, accessibility)

**Use When:** Implementing UI components, applying styles, or ensuring design consistency.

**Document 3 - Page-by-Page Specifications:**
- Detailed content for all 16 pages
- Hero sections, features, CTAs
- Page-specific design variations
- Content hierarchy and structure

**Use When:** Implementing page content, structuring information, or understanding page requirements.

**Document 4 - SEO & Technical Specification:**
- Page-by-page SEO metadata (titles, descriptions)
- Hidden text implementation strategy
- SEO Content Library (6 ready-to-copy blocks, 300-400 words each)
- Technical performance requirements
- Analytics tracking

**Use When:** Implementing SEO metadata, adding hidden text, optimizing performance, or setting up analytics.

### 8.2 Execution Workflow

**Step 1: Read Document 1 (Main PRD)**
- Understand strategic context
- Review navigation architecture
- Note current state vs. PRD v2.1 differences
- Identify which pages need implementation

**Step 2: Consult Document 3 (Page Specs)**
- Read specification for target page
- Understand content structure and messaging
- Note any page-specific design variations
- Identify cross-references to other documents

**Step 3: Reference Document 2 (Design System)**
- Apply color palette (#0072CE primary, #333333 secondary)
- Use component specifications (buttons, cards, forms)
- Follow typography and spacing rules
- Implement interaction patterns (hover, focus states)

**Step 4: Implement SEO (Document 4)**
- Copy exact meta title and description
- Retrieve hidden text from SEO Content Library
- Implement using semantic HTML pattern
- Validate with Lighthouse audit

**Step 5: Verify Implementation**
- Run all tests (unit, integration, e2e if applicable)
- Check responsive behavior (mobile, tablet, desktop)
- Validate accessibility (keyboard navigation, ARIA)
- Measure performance (Lighthouse score ≥90)
- Invoke `superpowers:verification-before-completion`

### 8.3 Cross-Reference Patterns

**Throughout Implementation:**

When Document 1 says "See Document 2 for component specs":
→ **Document 2, Section 4** (Component Specifications)

When Document 1 says "See Document 3 for page content":
→ **Document 3, Specific Section** (e.g., Section 1 for Homepage)

When Document 1 says "See Document 4 for SEO metadata":
→ **Document 4, Section 2** (Page-by-Page SEO Specifications)

When Document 2 says "For page-specific variations":
→ **Document 3** (each page section includes design notes)

When Document 3 says "For SEO hidden text":
→ **Document 4, Section 4** (SEO Content Library - copy exact text)

### 8.4 Quick Reference Scenarios

**Scenario: "I need to implement the Homepage"**
1. Read Document 3, Section 1 (Homepage / Solutions)
2. Read Document 4, Section 2.1 (Homepage SEO metadata)
3. Read Document 4, Section 4.6 (Homepage hidden text)
4. Reference Document 2 for all component styling
5. Invoke `/superpowers:brainstorm` before starting

**Scenario: "I need to update the navigation"**
1. Read Document 1, Section 4 (Navigation Architecture)
2. Reference Document 2, Section 4.2 (Navigation component specs)
3. Invoke `/superpowers:brainstorm` to explore alternatives
4. Make changes to `/components/navigation.tsx`
5. Verify on desktop and mobile

**Scenario: "I need to add SEO hidden text to a page"**
1. Read Document 4, Section 3 (Hidden Text Implementation Strategy)
2. Read Document 4, Section 4 (SEO Content Library)
3. Find appropriate content block for the page
4. Copy exact text (do not paraphrase)
5. Implement using semantic HTML pattern
6. Verify with browser inspector (should not be visible)

**Scenario: "I need to style a button"**
1. Read Document 2, Section 4.1 (Buttons)
2. Use exact specifications (colors, padding, hover states)
3. Verify Electric Blue #0072CE is used (not #0066CC or orange)
4. Test hover and focus states
5. Check accessibility (keyboard navigation, focus indicator)

---

## Document Metadata

**Token Count:** ~9,200 tokens
**Target Range:** 8,000-10,000 tokens ✓
**Status:** Complete - Ready for Claude Code Implementation

**PRD v3.0 Complete Suite:**
- **Document 1 (Main PRD):** 9,200 tokens ✓
- **Document 2 (Design System):** 5,800 tokens ✓
- **Document 3 (Page Specs):** 8,500 tokens ✓
- **Document 4 (SEO & Technical):** 4,900 tokens ✓
- **TOTAL:** ~28,400 tokens (within 25K-31K target) ✓

**Next Steps:**
- Use this Main PRD as strategic guide
- Reference Documents 2-4 for detailed specifications
- Invoke Superpowers skills as specified in Section 7
- Follow quality assurance procedures in Section 6
- Verify completion before claiming work is done

**Version Control:**
- v3.0 - Initial comprehensive PRD suite (December 2025)
- Updates from PRD v2.1:
  - Added Resources menu visibility
  - Documented High Speed Interconnect
  - Updated color palette (#0072CE, #333333, removed orange)
  - Added SEO content library with hidden text strategy
  - Embedded Superpowers skill invocation prompts

---

**End of Document 1: Main PRD**

**Complete PRD v3.0 Suite Created:**
✓ Document 1: Main PRD
✓ Document 2: Design System Specification
✓ Document 3: Page-by-Page Specifications
✓ Document 4: SEO & Technical Specification

**All documents are production-ready for Claude Code implementation.**

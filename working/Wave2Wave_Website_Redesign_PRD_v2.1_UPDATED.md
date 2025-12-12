# Wave2Wave.io Website Redesign

## Product Requirements Document (PRD) \- Complete Edition

**Version:** 2.0  
**Date:** November 2025  
**Project:** Website Redesign & Restructure  
**Platform:** Next.js \+ Vercel  
**Repository:** GitHub (existing)

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Business Context](#business-context)  
3. [Design System](#design-system)  
4. [Navigation & Site Structure](#navigation--site-structure)  
5. [Page-Level Content & Structure](#page-level-content--structure)  
6. [Image & Media Specifications](#image--media-specifications)  
7. [Technical Implementation](#technical-implementation)  
8. [SEO Strategy](#seo-strategy)  
9. [Analytics & Integrations](#analytics--integrations)  
10. [Quality Assurance](#quality-assurance)  
11. [Launch Checklist](#launch-checklist)

---

## 1\. Project Overview

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

### 1.3 Current Site Issues

The existing Wave2Wave.io website suffers from:

- **Navigation Overload:** 10+ top-level menu items creating decision paralysis  
- **Content Fragmentation:** Separate pages for each industry/use case, causing redundancy  
- **Product Scatter:** Fiber, copper, and accessory products split across inconsistent categories  
- **Unclear Differentiation:** Services (custom engineering, labeling, kitting) not prominently featured  
- **Hidden Capabilities:** DC Twin™ digital modeling service buried in content

### 1.4 Redesign Objectives

1. **Streamline Navigation:** Reduce to 8 clear top-level sections with logical subpage hierarchy  
2. **Consolidate Solutions:** Combine all industry/use case content into single Solutions overview page  
3. **Clarify Product Hierarchy:** Organize offerings into Fiber → Ethernet → Systems & Accessories  
4. **Highlight Differentiators:** Elevate Custom Engineering, DC Twin™, and Deployment Services  
5. **Preserve Functionality:** Maintain existing CRM integration, analytics tracking, and brand aesthetic  
6. **Improve Performance:** Target \<3s page load, Lighthouse score ≥90, mobile-first responsive design

### 1.5 Success Metrics

**User Experience:**

- Reduce bounce rate by 15%  
- Increase average time-on-site by 25%  
- Improve pages-per-session by 30%

**Business Goals:**

- Increase contact form conversion by 20%  
- Reduce support inquiries about product finding by 40%  
- Achieve 50% increase in DC Twin™ service page visits

**Technical Performance:**

- First Contentful Paint (FCP) \<1.5s  
- Largest Contentful Paint (LCP) \<2.5s  
- Cumulative Layout Shift (CLS) \<0.1  
- Mobile-friendly test: 100% pass

### 1.6 Project Timeline

- **Week 1-2:** Design system finalization, component library setup  
- **Week 3-4:** Core pages (Solutions, Fiber, Ethernet, Company, Contact)  
- **Week 5-6:** Subpages (DC Twin, Hyperscalers, Patch Panels, Testing)  
- **Week 7:** QA testing, content review, performance optimization  
- **Week 8:** Staging review, redirects implementation, launch preparation  
- **Week 9:** Production deployment, post-launch monitoring

---

## 2\. Business Context

### 2.1 Competitive Landscape

Wave2Wave competes in the custom data center cabling market against:

- **Catalog Vendors:** (FS.com, CablesPlus) offer fixed-length standard products  
- **Traditional Integrators:** (CommScope, Panduit) focus on on-site termination  
- **ODM Manufacturers:** Low-cost Asian suppliers with long lead times

**Wave2Wave's Competitive Advantages:**

1. Custom lengths (3-inch increments) vs. fixed catalog options  
2. Factory pre-termination and testing vs. field installation  
3. 3-4 week lead time vs. 8-12 week industry average  
4. Integrated services (labeling, kitting, DC Twin) vs. products-only approach  
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

1. **Educational:** Explain why custom matters (vs. off-the-shelf)  
2. **Technical:** Provide specs, standards, testing data  
3. **Proof:** Show quantifiable results (metrics, client logos)  
4. **Differentiation:** Highlight unique services (DC Twin™, kitting)

**Content Sources:**

- **Primary:** Reuse content from Wave2Wave brochure (maintains technical accuracy)  
- **Secondary:** Extract from current website (brand story, company values)  
- **Tertiary:** Create new transitional/navigational content as needed

**Writing Guidelines:**

- Use specific numbers (50-75% faster, 3-4 weeks, 99% accuracy)  
- Include industry terms (MPO-24, QSFP-DD, TIA-568, PoE++)  
- Break long text into 2-4 sentence paragraphs  
- Use bullet lists for specs and features  
- Maintain active voice

---

## 3\. Design System

### 3.1 Color Palette

**Primary Colors:**

```
Primary Blue:    #0066CC  (Buttons, links, headers, active states)
Secondary Orange: #FF6B35  (CTAs, accents, highlights)
```

**Neutral Colors:**

```
Text Dark:       #1A1A1A  (Body text, headings)
Text Medium:     #4A4A4A  (Secondary text, captions)
Text Light:      #767676  (Placeholder text, disabled states)

Background White: #FFFFFF  (Main background)
Background Light: #F5F5F5  (Alternate sections, cards)
Background Dark:  #2C2C2C  (Footer, dark sections)

Border Light:    #E0E0E0  (Dividers, input borders)
Border Medium:   #CCCCCC  (Hover states)
```

**Semantic Colors:**

```
Success:         #28A745  (Form success, checkmarks)
Error:           #DC3545  (Form errors, warnings)
Info:            #17A2B8  (Informational callouts)
```

**Color Usage Rules:**

- Use Primary Blue for all primary actions and navigation  
- Use Secondary Orange sparingly for high-priority CTAs only  
- Maintain 4.5:1 contrast ratio minimum for text (WCAG AA)  
- Never use color alone to convey information (include icons/text)

### 3.2 Typography

**Font Family:**

```css
Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Monospace: 'Roboto Mono', 'Courier New', monospace (for technical specs/code)
```

**Type Scale:**

```
H1 (Page Title):
  Desktop: 48px / 1.2 line-height / 700 weight
  Mobile:  32px / 1.2 line-height / 700 weight
  
H2 (Section Title):
  Desktop: 36px / 1.3 line-height / 600 weight
  Mobile:  28px / 1.3 line-height / 600 weight
  
H3 (Subsection Title):
  Desktop: 28px / 1.4 line-height / 600 weight
  Mobile:  24px / 1.4 line-height / 600 weight
  
H4 (Feature Title):
  Desktop: 20px / 1.5 line-height / 600 weight
  Mobile:  18px / 1.5 line-height / 600 weight

Body Large:       18px / 1.6 line-height / 400 weight
Body Regular:     16px / 1.6 line-height / 400 weight
Body Small:       14px / 1.5 line-height / 400 weight
Caption:          12px / 1.4 line-height / 400 weight
```

**Typography Rules:**

- One H1 per page (in hero section)  
- Use H2 for main section breaks  
- Use H3 for subsections within H2 sections  
- Maximum line length: 75 characters for body text  
- Use bold (600 weight) for emphasis, not italic

### 3.3 Spacing System

**8px Baseline Grid:**

```
xs:   8px   (Tight spacing, icon gaps)
sm:   16px  (Between related elements)
md:   24px  (Default paragraph spacing)
lg:   32px  (Between sections within page)
xl:   48px  (Between major sections)
2xl:  64px  (Between page sections)
3xl:  96px  (Top/bottom page padding)
```

**Component Spacing:**

- Section padding: 64px desktop / 32px mobile  
- Card padding: 32px desktop / 24px mobile  
- Button padding: 12px vertical / 24px horizontal  
- Input padding: 12px vertical / 16px horizontal

### 3.4 Component Specifications

#### 3.4.1 Buttons

**Primary Button (Call-to-Action):**

```
Desktop:     180px width × 48px height
Mobile:      100% width × 48px height
Border Radius: 4px
Font:        16px / 600 weight / uppercase
Background:  Primary Blue (#0066CC)
Text Color:  White (#FFFFFF)
Hover:       Darken to #0052A3
Transition:  all 0.2s ease
Shadow:      0 2px 4px rgba(0,0,0,0.1)
Hover Shadow: 0 4px 8px rgba(0,0,0,0.15)
```

**Secondary Button:**

```
Same dimensions as Primary
Background:  Transparent
Border:      2px solid Primary Blue (#0066CC)
Text Color:  Primary Blue (#0066CC)
Hover:       Background fills with Primary Blue, text turns white
```

**Text Link:**

```
Font:        Inherit from context
Color:       Primary Blue (#0066CC)
Hover:       Underline + darken to #0052A3
Transition:  color 0.2s ease
```

#### 3.4.2 Navigation

**Desktop Header:**

```
Height:      80px
Position:    Sticky (fixed after scroll)
Background:  White with bottom border (1px solid #E0E0E0)
Shadow:      0 2px 8px rgba(0,0,0,0.08) when scrolled
Logo:        Max-height 50px, left-aligned
Menu Items:  16px / 500 weight / Primary Blue on hover
CTA Button:  "Request Quote" (Primary Button style, right-aligned)
```

**Desktop Dropdown:**

```
Trigger:     Hover over parent menu item
Appearance:  0.2s fade-in
Background:  White
Border:      1px solid #E0E0E0
Shadow:      0 4px 12px rgba(0,0,0,0.1)
Padding:     16px
Item Height: 40px per link
Width:       200px minimum
```

**Mobile Header:**

```
Height:      64px
Background:  White with bottom border
Logo:        Max-height 40px
Menu Icon:   24×24px hamburger (right-aligned)
```

**Mobile Menu:**

```
Type:        Full-screen overlay
Animation:   Slide from right (0.3s ease)
Background:  White
Links:       Full-width, 56px height each
Close Icon:  24×24px X (top-right)
```

#### 3.4.3 Hero Section

```
Desktop Height:  600px (full viewport if content allows)
Mobile Height:   400px
Background:      Image with 40% dark overlay
Content Width:   Max 800px, centered
Text Color:      White
H1 Size:         48px desktop / 32px mobile
Subtext:         20px desktop / 16px mobile
Button Margin:   32px top
Alignment:       Center (default) or left (optional per page)
```

#### 3.4.4 Cards & Feature Blocks

**Feature Card:**

```
Width:         100% in grid (3 columns desktop, 1 mobile)
Padding:       32px desktop / 24px mobile
Border:        None (or 1px solid #E0E0E0 if desired)
Border Radius: 8px
Background:    White or #F5F5F5
Shadow:        0 2px 8px rgba(0,0,0,0.06)
Hover:         Transform translateY(-4px), shadow 0 4px 16px rgba(0,0,0,0.1)
Transition:    all 0.3s ease
```

**Icon in Card:**

```
Size:          48×48px
Margin Bottom: 16px
Color:         Primary Blue or Secondary Orange (accent)
```

**Card Title:**

```
Font:          20px / 600 weight
Margin Bottom: 12px
```

**Card Description:**

```
Font:          16px / 400 weight
Line Height:   1.6
Color:         #4A4A4A
```

#### 3.4.5 Forms

**Input Field:**

```
Width:         100%
Height:        48px
Border:        1px solid #CCCCCC
Border Radius: 4px
Padding:       12px 16px
Font:          16px / 400 weight
Background:    White

Focus State:
  Border:      2px solid Primary Blue (#0066CC)
  Outline:     None
  Shadow:      0 0 0 3px rgba(0,102,204,0.1)

Error State:
  Border:      2px solid #DC3545
  
Success State:
  Border:      2px solid #28A745
```

**Label:**

```
Font:          14px / 500 weight
Margin Bottom: 8px
Color:         #1A1A1A
```

**Error Message:**

```
Font:          14px / 400 weight
Color:         #DC3545
Margin Top:    4px
Icon:          ⚠ (prepended)
```

**Textarea:**

```
Min Height:    120px
Max Height:    300px
Resize:        Vertical only
Same styling as Input Field
```

**Submit Button:**

```
Use Primary Button style
Full width on mobile
Auto width on desktop (min 180px)
Loading state: Show spinner, disable, text "Sending..."
```

### 3.5 Responsive Breakpoints

```
Mobile:          320px - 767px
Tablet:          768px - 1023px
Desktop:         1024px - 1439px
Large Desktop:   1440px+
```

**Breakpoint Behaviors:**

**Mobile (\<768px):**

- Single column layouts for all grids  
- Navigation collapses to hamburger menu  
- Hero text reduced by 33% (e.g., H1 from 48px to 32px)  
- Images stack vertically  
- CTA buttons expand to full width  
- Section padding reduced to 32px vertical  
- Feature cards single column  
- Text alignment left (not center)

**Tablet (768px \- 1023px):**

- 2-column grids where appropriate (feature blocks)  
- Maintain hamburger menu (no full nav)  
- Reduce section padding by 25% (48px instead of 64px)  
- Hero remains full-width  
- Images can be 2-column if side-by-side

**Desktop (1024px+):**

- Full navigation menu visible (no hamburger)  
- 3-4 column grids for feature blocks  
- Full padding and spacing  
- Hover states active  
- Images at full intended sizes  
- Max content width: 1400px (centered with auto margins)

**Large Desktop (1440px+):**

- Consider 4-column grids where appropriate  
- Increase max content width to 1600px  
- Scale images proportionally but cap at native size

### 3.6 Interaction Patterns

**Hover Effects:**

- Buttons: Darken \+ shadow increase  
- Cards: Lift (translateY \-4px) \+ shadow increase  
- Links: Underline \+ color change  
- Images: Subtle zoom (scale 1.05) if clickable

**Loading States:**

- Form submission: Disable button, show spinner, text "Sending..."  
- Page load: Optional skeleton screens for content areas  
- Image load: Use Next.js blur placeholders

**Success States:**

- Form: Show green checkmark \+ "Thank you\! We'll contact you within 24 hours."  
- Alternative: Redirect to /contact/thank-you

**Error States:**

- Form fields: Red border \+ inline error message below field  
- Page error: Show 404 page with navigation \+ home link

**Focus States:**

- All interactive elements: 2px outline in Primary Blue with 3px offset  
- Keyboard navigation: Visible focus indicators

**Scroll Animations (Optional):**

- Fade-in on scroll for sections (threshold 10% visible)  
- Use sparingly; not on every element  
- Use `IntersectionObserver` for performance

### 3.7 Accessibility Requirements

**Standards:** WCAG 2.1 Level AA compliance

**Requirements:**

- Color contrast ratio minimum 4.5:1 for normal text, 3:1 for large text  
- All images have descriptive alt text  
- All interactive elements keyboard accessible (Tab, Enter, Space)  
- Focus indicators visible on all focusable elements  
- ARIA labels on icon-only buttons (e.g., hamburger menu)  
- Heading hierarchy follows logical structure (no skipped levels)  
- Form labels properly associated with inputs  
- Skip to main content link (visually hidden but keyboard accessible)  
- No content relies solely on color to convey meaning

**Testing Tools:**

- Lighthouse accessibility audit (target score ≥95)  
- WAVE browser extension  
- Keyboard navigation manual test  
- Screen reader test (NVDA on Windows or VoiceOver on Mac)

---

## 4\. Navigation & Site Structure

### 4.1 Overview

The redesigned Wave2Wave.io website features a simplified top-level navigation with 8 main sections. The menu maintains the existing brand styling (fonts, colors, button styles) while organizing content into clear hierarchies.

### 4.2 Site Architecture

```
/                                → Solutions (HOMEPAGE)
├── /custom-engineering          → Custom Engineering Overview
│   └── /dc-twin                 → DC Twin™ Digital Modeling
├── /deployment-services         → Deployment Services Overview
├── /fiber                       → Fiber Solutions Overview
│   ├── /hyperscalers            → Hyperscale Fiber Solutions
│   └── /patch-panels            → Fiber Patch Panels & Cassettes
├── /ethernet                    → Ethernet Solutions Overview
│   └── /patch-panels            → Ethernet Patch Panels (separate from fiber)
├── /systems-and-accessories     → Systems & Accessories Overview
│   └── /testing                 → Testing & Lab Solutions
├── /resources                   → Resources
├── /company                     → About Wave2Wave
└── /contact                     → Contact & Quote Form

Note: /solutions redirects to / (homepage)
```

### 4.3 Top-Level Navigation Menu

**Header Menu Items (Left to Right):**

1. Solutions (links to `/` \- visually distinct when on homepage)  
2. Custom Engineering (with dropdown indicator)  
3. Deployment Services  
4. Fiber (with dropdown indicator)  
5. Ethernet (with dropdown indicator)  
6. Systems & Accessories (with dropdown indicator)  
7. Resources  
8. Company  
9. Contact

**Right Side:**

- "Request a Quote" CTA Button (Primary Button style)

**Note:** "Solutions" links to the homepage (`/`). When users are on the homepage, this menu item should be highlighted as active.

### 4.4 Dropdown/Submenu Structure

**Custom Engineering:**

- DC Twin™ Digital Modeling

**Fiber:**

- Hyperscalers  
- Patch Panels (fiber-specific: `/fiber/patch-panels`)

**Ethernet:**

- Patch Panels (ethernet-specific: `/ethernet/patch-panels`)

**Systems & Accessories:**

- Testing Solutions

**Implementation:**

- Desktop: Dropdowns appear on hover (0.2s fade)  
- Mobile: Expandable accordion within hamburger menu

**Note:** Fiber Patch Panels and Ethernet Patch Panels are separate pages with distinct URLs. They cover different products (fiber cassettes vs. RJ45 cassettes) but can cross-link to each other within content.

### 4.5 Footer Navigation

**Column 1 \- Quick Links:**

- Solutions  
- Custom Engineering  
- Deployment Services  
- Contact Us

**Column 2 \- Products:**

- Fiber Solutions  
- Ethernet Solutions  
- Systems & Accessories  
- Testing Solutions

**Column 3 \- Company:**

- About Wave2Wave  
- Quality & Certifications  
- Careers (if applicable)

**Column 4 \- Contact Info:**

- Phone: \[Insert phone number\]  
- Email: \[Insert email\]  
- Address: \[Insert physical address\]

**Bottom Bar:**

- © 2025 Wave2Wave.io. All rights reserved.  
- Privacy Policy | Terms of Service (if applicable)  
- Social media icons (LinkedIn, Twitter if applicable)

### 4.6 Homepage Definition

**Decision:** Solutions page IS the homepage.

**Route:** `/` (root)  
**Content:** Solutions page content (as detailed in Section 5.1)  
**Redirect:** `/solutions` → `/` (301 permanent redirect)

**Navigation Behavior:**

- "Solutions" menu item links to `/`  
- When users are on `/`, the "Solutions" menu item shows active state  
- This provides immediate value proposition on landing

**Rationale:**

1. The Solutions page best represents Wave2Wave's value proposition  
2. Reduces friction \- visitors see benefits immediately without extra click  
3. Simplifies URL structure \- `/` is more memorable than `/solutions`  
4. Industry standard for B2B tech companies  
5. Better for SEO \- homepage authority flows to most important content

### 4.7 404 Error Page

**Route:** Any non-existent URL  
**Template:** `/404.js` in Next.js

**Content:**

- Header: "Page Not Found"  
- Subtext: "The page you're looking for may have moved or no longer exists."  
- Include main navigation (header/footer)  
- Quick links section:  
  - View All Solutions  
  - Browse Fiber Products  
  - Browse Ethernet Products  
  - Contact Us  
- Primary CTA: "Return to Homepage" button (links to `/`)

**Design:**

- Use site header and footer for consistency  
- Friendly imagery: Disconnected cable icon or simple illustration  
- Maintain brand colors  
- No search bar needed (complex to implement)

---

## 5\. Page-Level Content & Structure

### 5.1 Solutions Page (Homepage \- `/`)

**Purpose:** Present Wave2Wave's value proposition and key solutions for various customer environments. This consolidated page replaces separate industry pages and serves as the homepage and primary entry point.

**SEO Meta:**

```html
<title>Solutions | Wave2Wave – AI-Ready Data Center Cabling & Infrastructure</title>
<meta name="description" content="Wave2Wave provides custom-engineered cabling solutions for AI, cloud, enterprise, and telecom – delivering pre-labeled, plug-and-play fiber and copper infrastructure." />
<link rel="canonical" href="https://wave2wave.io/" />
```

**Content Structure:**

#### 5.1.1 Hero Section

```
H1: "Connecting the Physical Backbone of the AI & Datacenter Era"
Subtext: "Engineered cabling systems that move data, power, and possibility at the speed of light – custom-built, pre-labeled, and deployment-ready."
Background: Panoramic data center image (1920×800px)
CTA: "Request a Quote" (Primary Button)
```

#### 5.1.2 The Wave2Wave Difference

**Section H2:** "Why Wave2Wave?"

**Content:** Grid of 5 feature blocks (icon \+ title \+ description)

1. **Custom Cable Engineering**  
     
   - Icon: Ruler/measurement icon  
   - Text: "Every cable system engineered to exact specifications (3-inch increments) – no off-the-shelf compromises. Built to your rack geometry for perfect airflow and fit."

   

2. **Factory Labeling & Identification**  
     
   - Icon: Tag/label icon  
   - Text: "Zero field errors and 50-75% faster installs. Every cable ships pre-labeled to your rack and port map – installers just plug in. Installs in days, audits in minutes."

   

3. **Advanced Deployment Kitting**  
     
   - Icon: Box/package icon  
   - Text: "Rack-specific, pre-kitted cables organized by installation phase. No sorting, no waste – cutting installation time by 50-75% and bringing GPU clusters online weeks earlier."

   

4. **100% Quality Assurance**  
     
   - Icon: Checkmark/shield icon  
   - Text: "Every assembly factory-tested and certified for mission-critical reliability. Insertion loss \<0.35dB for fiber, TDR verification for copper, bit error rate \<1E-12 for AI workloads."

   

5. **Fast Global Delivery**  
     
   - Icon: Truck/plane icon  
   - Text: "3-4 week typical delivery – much faster than 8-12 week industry norms. From design to deployment, we move at the speed your infrastructure demands."

**Layout:** 5 cards in responsive grid (3 columns desktop, 2 tablet, 1 mobile)

#### 5.1.3 Solutions by Environment

**Section H2:** "Solutions for Your Environment"

**Intro Paragraph:** "Wave2Wave delivers infrastructure for the world's most demanding data centers. Whether you're deploying AI clusters, scaling hyperscale cloud, or refreshing enterprise racks, our custom cabling systems accelerate deployment and eliminate errors."

**Content:** 4 subsections (H3 \+ bullets \+ optional supporting image)

**1\. Enterprise Data Centers & Engineering Labs**

- H3 title  
- Bullet points:  
  - Rack-ready kits labeled by cabinet/port to enable 50-75% faster installs  
  - Mix-and-match bundles (10G copper, 25G/100G/400G fiber) delivered as single SKUs  
  - Modular fiber patch panels that allow protocol upgrades without re-cabling  
- Image: Corporate data center with organized cabling

**2\. AI & GPU Cluster Data Centers**

- H3 title  
- Bullet points:  
  - NVIDIA-validated harnesses for DGX/HGX GPU clusters (400G/800G InfiniBand and Ethernet fabrics)  
  - Factory-tested for deployments from 8 to 1000+ nodes  
  - Custom polarity management to eliminate the \#1 cause of AI network errors  
- Image: GPU servers or high-density computing cluster

**3\. Hyperscale & Cloud Networks**

- H3 title  
- Bullet points:  
  - Modular patch panel systems supporting 10G → 400G → 800G migrations without replacing cabling  
  - Spine-leaf kitting that reduces hundreds of SKUs into turnkey assemblies  
  - End-to-end solutions that scale with next-gen (800G/1.6T) architectures  
- Link: "Learn more about hyperscale fiber solutions →" (to /fiber/hyperscalers)  
- Image: Large data center facility or cloud concept

**4\. Telecom & Fiber-to-the-Home (FTTH)**

- H3 title  
- Bullet points:  
  - Pre-connectorized assemblies that cut truck rolls by 40%  
  - Compliance with government standards for broadband projects  
  - Quick-connect fiber solutions for rapid outdoor deployments  
- Image: Technician working on outdoor fiber connections

**Layout:** Alternating text/image (text left \+ image right, then flip)

#### 5.1.4 Trusted by Industry Leaders

**Section H2:** "Trusted by Industry Leaders"

**Content:** Logo grid of major clients (grayscale logos)

- Cisco, Dell, Equinix, Google, Microsoft, Meta, AWS, NVIDIA, etc.  
- 3-4 rows, centered  
- Logos fade in on scroll (optional animation)

#### 5.1.5 CTA Section

**Background:** Primary Blue with white text

**Content:**

- H2: "Ready to Accelerate Your Deployment?"  
- Subtext: "Contact us to discuss your custom cabling solution and see how Wave2Wave can transform your infrastructure timeline."  
- Button: "Get Started" (Secondary Button style, white border \+ text)

---

### 5.2 Custom Engineering Page (`/custom-engineering`)

**Purpose:** Highlight Wave2Wave's ability to design and build custom cabling and connectivity solutions to exact customer specifications.

**SEO Meta:**

```html
<title>Custom Engineering | Wave2Wave – Bespoke Cabling & DCIM Design</title>
<meta name="description" content="Custom cable engineering services by Wave2Wave – we design and manufacture cables & assemblies to your exact specs, from custom lengths to unique configurations, with DC Twin digital twin modeling." />
```

**Content Structure:**

#### 5.2.1 Hero Section

```
H1: "Custom Engineering – Cables & Systems Built to Your Spec"
Subtext: "No guesswork, no off-the-shelf compromises. We work from your design (DCIM models, CAD drawings) to create bespoke cabling systems built exactly to fit your project."
Background: Close-up of custom cable assemblies with labels
```

#### 5.2.2 Custom Cable Design

**Section H2:** "Precision-Engineered Cables"

**Content:** Text block \+ bullets

"Unlike catalog vendors with fixed lengths, Wave2Wave cables are engineered to your exact rack geometry, manufactured in 3-inch increments for an exact fit. Every cable is built to optimize airflow, eliminate slack, and match your specifications precisely."

**Customization Options:**

- **Precise Lengths & Geometry:** Built in 3-inch increments to match your pathway design  
- **Custom Connectors:** Choose connector types (LC, SC, MTP, RJ45, etc.) and polarity  
- **Jacket Colors:** Organize by color conventions (e.g., blue for 10G, aqua for 40G)  
- **Factory Labeling:** Pre-labeled to your rack/port/VLAN mapping  
- **Right First Time:** Delivered ready to install with zero on-site termination

**Why Custom vs. Off-the-Shelf:**

- Eliminate field errors with exact-fit cables  
- Reduce on-site termination labor and associated costs  
- Ensure neat, professional racks with no excess slack or cable trays of waste

**Image:** Side-by-side comparison \- messy catalog cables vs. neat Wave2Wave labeled cables

#### 5.2.3 Custom Cable Bundles

**Section H2:** "Pre-Engineered Cable Bundles"

**Content:** Text \+ example

"For complex deployments, Wave2Wave provides pre-engineered cable bundles under one SKU – multiple cables integrated as one assembly. This simplifies procurement, logistics, and installation."

**Benefits:**

- **Simplified Logistics:** One shipment instead of many, reducing receiving complexity  
- **Consolidated Ordering:** 50+ cables becomes 1 part number, cutting procurement time  
- **Fewer Errors:** Single SKU covers entire bundle, eliminating ordering mistakes  
- **Pre-Labeled:** Every cable in the bundle arrives labeled and ready to install

**Example Bundle:** "Rack-to-Rack Connectivity Bundle"

- 4× 12-strand MTP trunk cables (30m, OS2 single-mode)  
- 8× LC duplex patch cords (5m, OM4)  
- 2× Power cables (C13 to C14, 2m)  
- All pre-labeled for Rack A → Rack B  
- Ships as SKU: W2W-RAB-001

**Image:** Photo of a cable bundle with multiple cables bound together, showing labels

#### 5.2.4 Quality & Testing

**Section H2:** "Factory-Tested for Reliability"

**Content:** Text block

"Quality assurance is integral to every custom assembly. All cables are 100% tested in our ISO-certified facility before shipment."

**Testing Process:**

- Fiber: Insertion loss, return loss, and visual inspection (every strand)  
- Copper: TDR verification, continuity, and Fluke certification  
- High-speed DAC/AOC: Bit error rate testing at rated speed  
- Power: Hi-pot testing and conductor verification

"Every cable is factory-terminated and tested to meet exacting standards – custom doesn't mean risky. It means precision."

#### 5.2.5 Link to DC Twin

**Callout Box (visually distinct \- light blue background):**

"Before we build any cable, we can design it virtually."

**Text:** "Learn about our DC Twin™ digital modeling platform that creates a virtual replica of your data hall, validates every cable route, and eliminates surprises before production."

**Button:** "Explore DC Twin™ →" (links to /custom-engineering/dc-twin)

#### 5.2.6 CTA Section

Same as Solutions page, tailored text: "Ready to discuss your custom cabling needs? Contact our engineering team today."

---

### 5.3 DC Twin Subpage (`/custom-engineering/dc-twin`)

**Purpose:** Deep-dive into Wave2Wave's Digital Twin data center design service.

**SEO Meta:**

```html
<title>DC Twin™ Digital Twin | Wave2Wave – Virtual Data Center Design</title>
<meta name="description" content="Learn about Wave2Wave's DC Twin™ service – a digital twin platform that models every rack and cable in software for precise lengths, zero surprises, and 40% faster data center deployment." />
```

**Content Structure:**

#### 5.3.1 Hero Section

```
H1: "DC Twin™ – Design It. Validate It. Build It – Virtually."
Subtext: "A digital modeling platform that creates a virtual replica of your data hall before production, validating every rack and cable in software."
Background: DCIM 3D model screenshot or architectural blueprint style
```

#### 5.3.2 What is DC Twin?

**Section H2:** "Virtual Data Center Modeling"

**Content:**

"DC Twin™ is a digital modeling platform that creates a virtual replica of your data hall before production. Using industry-standard DCIM tools (Sunbird, Nlyte), we model every rack, cable route, and connector in software – then use that model to manufacture cables with 99% length accuracy."

**Visual:** Diagram or screenshot of a data center layout with cable routes

#### 5.3.3 Traditional vs. Digital Twin

**Section H2:** "Why Digital Modeling Matters"

**Content:** Two-column comparison table

| Traditional Approach | DC Twin™ Approach |
| :---- | :---- |
| Estimate cable lengths, add 20% slack | Calculate exact lengths in 3D model |
| Discover routing conflicts on-site | Resolve conflicts virtually |
| On-site adjustments cause delays | Zero on-site rework needed |
| Manual documentation after install | Automated as-built documentation |
| Emergency reorders common | Reorders eliminated entirely |

**Result Highlight (callout):** "40% faster deployment compared to traditional methods."

#### 5.3.4 Key Benefits

**Section H2:** "Three Critical Advantages"

**Content:** 3 cards

1. **Exact Cable Length Calculation**  
     
   - Icon: Ruler icon  
   - Text: "Every cable length determined with 99% accuracy through the digital model. No guesswork, no 20% slack factor – just the right length for optimal airflow and aesthetics."

   

2. **Installation De-Risking**  
     
   - Icon: Shield icon  
   - Text: "The model catches routing conflicts, bend radius violations, and pathway issues before production. The actual build has zero on-site rework because problems were solved virtually."

   

3. **Automated Documentation**  
     
   - Icon: Document icon  
   - Text: "Because the as-built matches the digital twin, documentation is automatically accurate. No manual updates, no discrepancies – perfect records from day one."

#### 5.3.5 Impact Metrics

**Section H2:** "Proven Results"

**Content:** Stat blocks (3 columns)

```
[Icon] 40% Faster      [Icon] 99% Accurate    [Icon] Zero Reorders
Deployment time        Cable lengths          Emergency cables
vs. traditional        via digital model      eliminated entirely
```

#### 5.3.6 How It Works

**Section H2:** "The DC Twin™ Process"

**Content:** 4-step process (numbered)

1. **Design:** Import your floor plan and rack layouts into DCIM software  
2. **Model:** Map every cable route, considering pathway, bend radius, and slack management  
3. **Validate:** Review virtual model with your team, identify issues, refine  
4. **Build:** Manufacture cables to exact lengths from the validated model

**Visual:** Workflow diagram with arrows showing progression

#### 5.3.7 CTA Section

"Plan your data center with DC Twin™ – contact us to initiate a digital model of your project."

---

### 5.4 Deployment Services Page (`/deployment-services`)

**Purpose:** Outline Wave2Wave's deployment and logistics services that simplify installation.

**SEO Meta:**

```html
<title>Deployment Services | Wave2Wave – Pre-Labeled & Kitted Cabling</title>
<meta name="description" content="Wave2Wave deployment services include factory labeling of cables and rack-specific kitting, ensuring your data center infrastructure installs 50% faster with zero errors." />
```

**Content Structure:**

#### 5.4.1 Hero Section

```
H1: "Deployment Services – From Factory to Rack, Faster"
Subtext: "We don't just deliver products – we deliver complete services that make on-site deployment up to 70% faster and error-free."
Background: Packaged/kitted cables on-site or installer plugging in labeled cable
```

#### 5.4.2 Factory Labeling Service

**Section H2:** "Pre-Labeled Cables – Plug and Play"

**Content:**

"Every cable leaves the factory with permanent identifiers tied to your rack and port mapping. There's zero need for manual labeling – installers simply connect the label to the port."

**Benefits:**

- Zero mismatched connections  
- 75% faster rack installations  
- Installs in days, audits in minutes  
- No on-site labeling errors or rework

**Process:**

1. You provide rack/port documentation (Excel, DCIM export, CAD)  
2. We generate unique labels for every cable  
3. Labels applied in factory with industrial-grade printers  
4. Ships ready to install – no field labeling needed

**Visual:** Close-up photo of pre-labeled cable with clear port identifier

**Callout:** "Installers go from 'sorting cables' to 'just plugging in' – a game-changer for large deployments."

#### 5.4.3 Advanced Kitting & Sequenced Delivery

**Section H2:** "Rack-Ready Kitting"

**Content:**

"Wave2Wave ships cables organized by rack or installation phase – not in bulk loose piles. Each shipment arrives sequenced by installation order, with every cable and accessory kitted for a specific rack or build phase."

**Benefits:**

- Field teams spend time installing, not sorting materials  
- Installation labor cut by 50% or more  
- GPU and HPC facilities come online weeks earlier  
- Reduced risk of missing cables or wrong parts

**Process:**

1. We coordinate with your deployment schedule  
2. Cables organized into rack-specific kits (e.g., "Rack 1A", "Rack 1B")  
3. Kits delivered in installation sequence (e.g., Phase 1, Phase 2\)  
4. Optional: Can include accessories (patch panels, cable management) in same kit

**Visual:** Photo of multiple cable bundles separated by rack labels

**Example Scenario:** "A 100-rack data center deployment: Instead of 5,000 loose cables, you receive 100 kits – one per rack, each containing exactly the cables needed for that specific rack location. Installers grab 'Rack 23 Kit' and install without searching."

#### 5.4.4 On-Site Support & Documentation

**Section H2:** "Comprehensive Documentation"

**Content:**

"Because of factory labeling and DC Twin modeling, documentation is automatically accurate. We provide:"

- As-built cable schedules (Excel or CSV)  
- Port mapping diagrams  
- Cable routing pathways  
- Test reports for every assembly  
- Optional: DCIM database import files

"Infrastructure installs in days and audits in minutes – no discrepancies between physical and documented."

#### 5.4.5 Fast Global Delivery

**Callout Box:**

"**Global Reach, Local Speed**

Standard 3-4 week lead time for custom engineered systems, shipped globally. Much faster than 8-12 week industry average."

#### 5.4.6 CTA Section

"Plan your deployment with Wave2Wave – get started today."

---

### 5.5 Fiber Page (`/fiber`)

**Purpose:** Present Wave2Wave's fiber-optic cabling solutions portfolio.

**SEO Meta:**

```html
<title>Fiber Solutions | Wave2Wave – Pre-Terminated Fiber Cables & Panels</title>
<meta name="description" content="Explore Wave2Wave's fiber solutions: custom-length pre-terminated fiber optic cables, high-density MPO trunks, fiber patch cords, and modular patch panels for 100G/400G/800G networks." />
```

**Content Structure:**

#### 5.5.1 Hero Section

```
H1: "Fiber Solutions – Engineered Fiber Infrastructure at Light Speed"
Subtext: "Pre-terminated fiber trunk systems, custom-length patch cords, and modular fiber panels – all factory-polished, tested, and delivered ready to install. No field splicing or polishing required."
Background: Bundle of lit fiber optic strands or technician installing fiber
```

#### 5.5.2 Why Factory Pre-Termination?

**Section H2:** "80% Faster Installation, Guaranteed Performance"

**Content:**

"Every fiber assembly is cut, polished, and tested in our ISO-certified facility to your exact lengths. Field termination is eliminated entirely – saving time, reducing errors, and ensuring consistent quality."

**Key Advantages:**

- No on-site splicing equipment or expertise needed  
- Guaranteed optical performance (insertion loss \<0.35dB)  
- Faster deployment (no waiting for field techs to terminate)  
- Zero variability – every cable meets spec

#### 5.5.3 Product Categories

**Section H2:** "Fiber Product Portfolio"

**Content:** 4 subsections with icons/images

**1\. Pre-Terminated Trunk Cables**

- High-fiber-count trunk and riser cables (12-144 strands)  
- MTP/MPO or LC/SC connectors  
- Custom lengths in 3-inch increments (0.5m to 300m+)  
- Jacket options: Plenum (OFNP), riser (OFNR), armored  
- Fiber types: OS2 single-mode (9/125µm), OM3/OM4 multimode (50/125µm)  
- Image: Thick multi-fiber trunk cable with MTP connectors

**2\. Fiber Patch Cords**

- Simplex, duplex, and multi-strand jumper cables  
- Connector types: LC, SC, ST, MTP/MPO  
- Custom cut in 3-inch increments  
- Available in standard or low-loss (IL \<0.15dB)  
- Special options: LC uniboot with reversible polarity, SN connectors for 400G density  
- Image: Several colorful patch cords neatly routed

**3\. Fiber Breakout Assemblies**

- Multi-strand breakouts (MTP to multiple LC/SC)  
- Eliminate separate cassette hardware for simple breakouts  
- Common configs: 1×MTP12 → 6×LC duplex, 1×MTP24 → 12×LC duplex  
- Custom polarity (Type A, B, or C)  
- Image: One MTP connector splitting into many LC connectors

**4\. Active Optical Cables (AOC)**

- Integrated fiber \+ transceivers for plug-and-play connectivity  
- Speeds: 100G, 200G, 400G (QSFP28, QSFP-DD, OSFP)  
- Tested for GPU clusters (NVIDIA DGX validated)  
- Lengths: 1m to 100m  
- Image: AOC cable with transceivers

#### 5.5.4 Performance Guarantee

**Callout Box (green border):**

"**100% Performance Guaranteed**

Every fiber assembly is 100% tested before shipment:

- Insertion loss: \<0.35dB (standard), \<0.15dB (low-loss)  
- Return loss: \>50dB (UPC), \>60dB (APC)  
- Visual inspection: No defects, scratches, or contamination

Test reports provided with every order."

#### 5.5.5 Use Case Tie-In

**Section H2:** "Deployed in the World's Most Demanding Networks"

**Content:**

"Our fiber systems are deployed in GPU superclusters and hyperscale cloud networks, enabling east-west traffic at 800G with no loss. From 8-node AI labs to 10,000-server cloud pods, Wave2Wave fiber infrastructure scales with your needs."

**CTA Link:** "See how our fiber solutions support hyperscale data centers →" (to /fiber/hyperscalers)

#### 5.5.6 Links to Subpages

**Two prominent cards:**

**Card 1:** Fiber for Hyperscalers

- Image: Large data center  
- Text: "Learn how our modular fiber solutions scale to 800G for cloud giants and hyperscale operators."  
- Button: "Explore Hyperscale Solutions →"

**Card 2:** Fiber Patch Panels & Cassettes

- Image: EVO patch panel hardware  
- Text: "Discover EVO and EXO modular fiber panels for easy 10G→400G→800G migration."  
- Button: "View Patch Panels →"

#### 5.5.7 CTA Section

Standard CTA

---

### 5.6 Fiber Subpage – Hyperscalers (`/fiber/hyperscalers`)

**Purpose:** Cater to hyperscale cloud and large enterprise clients.

**SEO Meta:**

```html
<title>Hyperscale Fiber | Wave2Wave – Scalable Cloud Data Center Cabling</title>
<meta name="description" content="Wave2Wave's fiber infrastructure for hyperscalers: modular MPO systems and custom fiber bundles enabling hyperscale cloud data centers to scale from 100G to 800G without re-cabling." />
```

**Content Structure:**

#### 5.6.1 Hero Section

```
H1: "Hyperscale Fiber Solutions – Scale Without Limits"
Subtext: "Modular fiber systems that support multi-generational upgrades from 10G to 800G – designed for hyperscale data centers and cloud providers."
Background: Aerial shot of hyperscale data center campus
```

#### 5.6.2 What is Hyperscale?

**Brief Context:**

"Hyperscalers (cloud providers, mega-scale data centers) operate at unprecedented scale: hundreds of racks, tens of thousands of servers, petabytes of east-west traffic. They require cabling that supports rapid expansion, multi-speed environments, and seamless technology migrations."

#### 5.6.3 Modular Fiber Systems for Scale

**Section H2:** "EVO & EXO Patch Panel Platforms"

**Content:**

"Wave2Wave's EVO and EXO patch panel platforms deliver the physical layer flexibility needed for environments where 10G, 40G, 100G, and emerging 400G/800G speeds coexist."

**Key Features:**

- Modular cassette-based architecture (swap cassettes, not entire panels)  
- Supports 10G → 100G → 400G → 800G migration without re-cabling  
- High-density: 14 cassettes in 2U (EVO), 4 cassettes in 1U (EXO)  
- Compatible with MPO-12, MPO-16, MPO-24 for current and next-gen optics  
- 360° cable management and front/rear access

**Image:** EVO patch panel loaded with cassettes

#### 5.6.4 Spine-Leaf Fabric Simplification

**Section H2:** "Pre-Engineered Spine-Leaf Kits"

**Content:**

"Hyperscale deployments often involve spine-leaf architectures with hundreds of unique cable runs. Wave2Wave simplifies this complexity:"

- **Before:** 200+ individual SKUs per pod (separate cables for every spine-to-leaf connection)  
- **After:** \~10 turnkey assemblies (pre-designed bundles per rack/role)

**Benefit:** "Procurement from weeks to days, installation from months to weeks."

**Example:** "For a 32-leaf × 8-spine pod:

- Traditional: 256 unique cables \+ 48 patch panels \= 304 SKUs to order  
- Wave2Wave: 8 spine bundles \+ 32 leaf bundles \+ 2 patch panel kits \= 42 SKUs"

#### 5.6.5 Migration Paths

**Section H2:** "Future-Proof Your Infrastructure"

**Content:**

"As speeds move from 100G to 400G to 800G, our MPO-24 based solutions ensure no stranded infrastructure – protecting investment while upgrading."

**Migration Scenarios:**

| Current Speed | Future Speed | How Wave2Wave Supports |
| :---- | :---- | :---- |
| 100G QSFP28 | 400G QSFP-DD | Swap 100G breakout cassette for 400G cassette, reuse same trunk cables |
| 400G QSFP-DD | 800G OSFP | Upgrade cassettes to MPO-24, existing fiber infrastructure remains |
| 10G/25G access | 100G/400G spine | Modular cassettes allow mixed speeds in same chassis |

**Visual:** Diagram showing cassette swap (no trunk re-cabling needed)

#### 5.6.6 Use Case: Cloud Provider Build-Out

**Hypothetical Scenario (can be real if client approves):**

"A top-3 cloud provider deploying 1,000 GPU nodes used Wave2Wave pre-terminated trunks and cassettes to connect racks. Result: Day-one 400G operation with zero recabling needed for future 800G upgrade. Deployment completed 6 weeks ahead of schedule."

#### 5.6.7 Key Features for Hyperscale

**3-column feature blocks:**

**Scalability:**

- Chassis and cassettes accommodate current and next-gen optics  
- Supports MPO-12, MPO-16, MPO-24 for 100G/400G/800G  
- Passive infrastructure grows with active equipment

**Speed of Deployment:**

- Pre-labeled, pre-tested solutions  
- Install thousands of connections with zero errors  
- Rack-ready kits eliminate sorting and searching

**Operational Efficiency:**

- Consolidated bundles reduce SKU count by 80%  
- Detailed digital twin models speed troubleshooting  
- Audits complete in minutes with accurate documentation

#### 5.6.8 CTA Section

"Building a hyperscale facility? See how we can connect it faster – contact our engineering team."

---

### 5.7 Fiber Subpage – Patch Panels (`/fiber/patch-panels`)

**Purpose:** Detail Wave2Wave's fiber patch panel and cassette offerings (EVO and EXO platforms with fiber cassettes).

**SEO Meta:**

```html
<title>Fiber Patch Panels | Wave2Wave – Modular MPO Cassette Systems</title>
<meta name="description" content="Discover Wave2Wave's EVO and EXO fiber patch panel systems – high-density modular cassette platforms supporting 10G-800G migrations, MPO-12/24 connectivity, and mixed fiber/copper patching." />
<link rel="canonical" href="https://wave2wave.io/fiber/patch-panels" />
```

**Content Structure:**

#### 5.7.1 Hero Section

```
H1: "Fiber Patch Panels – Modular, Dense, Simple"
Subtext: "High-density fiber connectivity for 100G to 800G migration. Swap cassettes, not entire panels, as your network evolves."
Background: Close-up of EVO/EXO patch panel with cassettes
```

#### 5.7.2 Why Modular Patch Panels?

**Section H2:** "Future-Proof Your Patch Field"

**Content:**

"Traditional fixed-port patch panels become obsolete when speeds increase. Wave2Wave's modular cassette systems let you upgrade connectivity without replacing infrastructure."

**Benefits:**

- Upgrade from 10G to 800G without ripping out panels  
- Mix fiber types and connector densities in same chassis  
- Reduce upfront investment (buy what you need now, expand later)  
- Maintain consistent cable management through technology generations

#### 5.7.3 Product Lines

**Section H2:** "EVO and EXO Platforms"

**Two-column comparison:**

**EVO Series (2U Chassis):**

- Capacity: 14 cassettes per 2U  
- Ideal for: Core data center patching, meet-me rooms, distribution frames  
- Features:  
  - 360° cable management (front and rear)  
  - Front or rear cassette access  
  - Mix fiber and copper cassettes in same chassis  
  - 19-inch rack mount (2-post or 4-post)  
  - Supports up to 336 LC duplex ports or 168 MPO ports (depending on cassette config)  
- Image: EVO chassis with multiple cassettes installed

**EXO Series (1U Chassis):**

- Capacity: 4 cassettes per 1U  
- Ideal for: Remote offices, test labs, smaller deployments  
- Features:  
  - Compact footprint for space-constrained racks  
  - Same cassette compatibility as EVO  
  - Front access only  
  - 19-inch rack mount  
- Image: EXO compact chassis

**Note:** Both platforms use interchangeable cassettes (buy once, use in either)

#### 5.7.4 Cassette Options

**Section H2:** "Hot-Swappable Cassette Modules"

**Content:** 4 cassette types with specs

**1\. Fiber Breakout Cassettes**

- Function: Break 40G/100G/400G down to 10G/25G/100G without new trunk cabling  
- Polarity: Factory-managed (Type A, B, or C)  
- Compatibility: EVO and EXO  
- Common configs:  
  - 1×MPO-12 → 6×LC duplex (for 40G/100G)  
  - 1×MPO-24 → 12×LC duplex (for 400G/800G)  
- Image: Cassette showing MPO on back, LC ports on front

**2\. MTP/MPO Feed-Through Cassettes**

- Function: Pass-through for trunk extension or cross-connects  
- Ports: 6×MPO-12 or 3×MPO-24 per cassette  
- Use: Rapid reconfiguration to higher speeds  
- Image: Cassette with MPO ports on both sides

**3\. LC Feed-Through Cassettes**

- Function: 12-port LC duplex passthrough modules  
- Use: Traditional fiber patching, structured cabling  
- Supports: OS2, OM3, OM4 fiber  
- Image: Cassette with LC ports

**4\. Copper (RJ45) Cassettes**

- Function: 12-port Cat6A shielded or unshielded  
- Supports: 10GBASE-T, PoE++ (100W)  
- Compliance: TIA-568.2-D  
- Use: Mix copper and fiber patching in same chassis  
- Image: Cassette with RJ45 ports

**Layout:** Table or grid format with small images

#### 5.7.5 Migration & Future-Proofing

**Section H2:** "Seamless Technology Upgrades"

**Content:**

"Wave2Wave patch panels enable future upgrades without infrastructure replacement:"

**Migration Scenarios:**

1. **100G → 4×25G breakout**  
     
   - Current: QSFP28 100G transceivers  
   - Future need: 25G connections for servers  
   - Solution: Swap to 1×MPO12 → 4×LC duplex cassette  
   - Trunk cables: Reuse existing

   

2. **400G → 4×100G breakout**  
     
   - Current: QSFP-DD 400G  
   - Future: 100G distribution  
   - Solution: 1×MPO24 → 4×LC duplex cassette  
   - Trunk cables: Reuse existing

   

3. **800G → 8×100G breakout**  
     
   - Current: OSFP 800G spine  
   - Future: 100G leaf switches  
   - Solution: 1×MPO24 → 8×LC duplex cassette  
   - Trunk cables: Reuse existing

**Visual:** Diagram illustrating breakout scenarios

#### 5.7.6 Ease of Use

**Section H2:** "Installation & Maintenance"

**Content:**

"Designed for installers and operators:"

- **Hot-Swappable:** Cassettes click in/out without tools or downtime  
- **Front or Rear Access:** Flexible mounting (EVO supports both)  
- **Built-in Cable Management:** Integrated routing guides and labeling on front door  
- **Color-Coded:** Cassette types easily identifiable by color tab  
- **Documented:** Every cassette ships with port mapping diagram

**Image:** Technician's hands swapping a cassette (showing ease of use)

#### 5.7.7 Specifications Download

**CTA Box:**

"**Technical Datasheets Available**

Download detailed specifications for EVO and EXO platforms, including dimensions, port densities, and cassette compatibility matrices."

Buttons:

- "Download EVO Datasheet (PDF)" (if available)  
- "Download EXO Datasheet (PDF)" (if available)  
- "Contact Us for Specifications"

#### 5.7.8 Cross-Link to Ethernet Patch Panels

**Callout Box (at bottom of page, before CTA):**

"**Also Available: Ethernet Patch Panels**

Looking for copper connectivity? We also offer RJ45 patch panel solutions for 10GBASE-T and PoE++ deployments."

Button: "View Ethernet Patch Panels →" (links to `/ethernet/patch-panels`)

#### 5.7.9 CTA Section

"Ready to future-proof your patch field? Contact us to discuss your requirements."

---

### 5.8 Ethernet Page (`/ethernet`)

**Purpose:** Showcase Wave2Wave's copper and Ethernet networking products.

**SEO Meta:**

```html
<title>Ethernet Solutions | Wave2Wave – Copper Cabling & High-Speed DACs</title>
<meta name="description" content="Wave2Wave offers custom Ethernet cabling: Cat6A patch cords made-to-length, direct attach copper (DAC) and active optical cables for GPU clusters, and integrated RJ45 patch panel systems." />
```

**Content Structure:**

#### 5.8.1 Hero Section

```
H1: "Ethernet Solutions – High-Performance Copper Cabling for Modern Networks"
Subtext: "Custom Cat6A patch cords, high-speed DAC/AOC cables, and integrated copper patch panels – all delivered to length, labeled, and tested."
Background: Top-of-rack switch with DAC cables connecting servers
```

#### 5.8.2 Why Custom Copper?

**Section H2:** "Eliminate Cable Trays of Slack"

**Content:**

"Standard Ethernet cables come in fixed lengths (1m, 2m, 3m, 5m). This creates excess slack, poor airflow, and messy racks. Wave2Wave manufactures copper cabling in custom lengths (3-inch increments) just like our fiber products – resulting in clean, professional installations."

**Benefits:**

- Improved airflow (no obstructed vents)  
- Easier troubleshooting (follow the cable)  
- Professional appearance  
- Reduced material waste

#### 5.8.3 Copper Product Categories

**Section H2:** "Copper Product Portfolio"

**Content:** 4 subsections

**1\. Ethernet Patch Cords**

- Categories: Cat5e, Cat6, Cat6A  
- Custom lengths: 0.3m to 100m (3-inch increments)  
- Conductor options: 24AWG, 26AWG, 28AWG (based on length)  
- Shielding: UTP or shielded (STP/FTP)  
- PoE rated: PoE, PoE+, PoE++ (up to 100W)  
- Colors: Multiple colors available for organization  
- Image: Variety of Cat6A cables in different colors

**2\. Direct Attach Copper (DAC) Cables**

- Function: Lowest-latency, lowest-power interconnect for in-rack links  
- Latency: Sub-100ns (passive DAC)  
- Passive DAC: Up to 3m (no power, no heat)  
- Active DAC: Up to 7m (signal conditioning for longer runs)  
- Form factors: SFP+, QSFP28, QSFP-DD, OSFP  
- Speeds: 10G, 25G, 40G, 100G, 200G, 400G  
- Use case: TOR switch to server, GPU interconnects  
- Image: DAC cable with QSFP connectors

**3\. Active Electrical Cables (AEC)**

- Function: Extend copper reach beyond DAC with retimers  
- Lengths: 5m to 7m+ (longer than passive copper)  
- Testing: Bit error rate 1E-12 for AI workloads  
- Use: When fiber AOC is too expensive but passive DAC too short  
- Image: AEC cable

**4\. Power Cables**

- Custom-length power cords (C13, C14, C19, C20, 5-15P, etc.)  
- Built with proper gauge: 12AWG for 20A, 14AWG for 15A  
- UL listed for safety  
- Also labeled and kitted by rack (like data cables)  
- Jacket options: Heavy-duty, color-coded by circuit  
- Image: Custom power cord with label

#### 5.8.4 Use Cases

**Section H2:** "Where Ethernet Solutions Excel"

**3 use case bullets:**

**Top-of-Rack Links:** "Sub-3m passive DACs for sub-50ns latency in AI training clusters. Direct copper connection between GPU servers and TOR switches eliminates transceivers and reduces power consumption."

**Structured Cabling:** "Custom-length Cat6A cables for enterprise networks. Eliminate cable trays of slack in office racks, improving airflow and aesthetics. PoE++ support for powering 100W devices like wireless APs and PTZ cameras."

**High-Density Data Centers:** "28AWG slim Cat6A cables for ultra-high-density patching. 40% thinner than standard cables, allowing 2× more cables per pathway without exceeding fill ratios."

#### 5.8.5 Quality & Testing

**Section H2:** "100% Tested Copper"

**Content:**

"Each Ethernet cable is 100% Fluke tested for continuity and performance. We validate:"

- TDR verification (Time Domain Reflectometry) for length and impedance  
- Continuity test for all conductors  
- TIA-568 compliance for Cat6A  
- PoE functionality test for PoE++ rated cables

"Test reports available upon request. Every cable meets or exceeds industry standards."

#### 5.8.6 Link to Subpage

**Prominent Card:**

"**Looking for Copper Patch Panels?**

See our modular RJ45 patch solutions that integrate with fiber panels."

Button: "View Ethernet Patch Panels →" (to /ethernet/patch-panels)

#### 5.8.7 CTA Section

Standard CTA

---

### 5.9 Ethernet Subpage – Patch Panels (`/ethernet/patch-panels`)

**Purpose:** Detail copper patch panel solutions (separate from fiber patch panels \- covers RJ45 cassettes and copper connectivity).

**SEO Meta:**

```html
<title>Ethernet Patch Panels | Wave2Wave – RJ45 Patching Solutions</title>
<meta name="description" content="Learn about Wave2Wave's RJ45 patch panel solutions, including 12-port Cat6A RJ45 cassette modules for the EVO/EXO chassis and high-density copper patch fields for 10GBASE-T and PoE++ deployments." />
<link rel="canonical" href="https://wave2wave.io/ethernet/patch-panels" />
```

**Content Structure:**

#### 5.9.1 Hero Section

```
H1: "Ethernet Patch Panels – Modular Copper Patching"
Subtext: "High-density, modular RJ45 patching solutions for 10GBASE-T and PoE++ deployments."
Background: Copper patch panel with RJ45 ports
```

#### 5.9.2 Modular RJ45 Cassettes

**Section H2:** "Integrate Copper with Fiber Infrastructure"

**Content:**

"Wave2Wave's patch panel ecosystem includes 12-port Cat6A RJ45 cassette modules that snap into our EVO/EXO chassis alongside fiber cassettes. This gives flexibility to mix copper and fiber in one unified panel."

**Benefits:**

- Unified cable management (fiber and copper in same chassis)  
- Swap cassettes as needs change (e.g., convert fiber ports to copper)  
- Consistent look and labeling across patch field  
- Space-efficient (no need for separate copper panels)

**Image:** EVO chassis with mix of fiber and RJ45 cassettes

#### 5.9.3 RJ45 Cassette Specifications

**Section H2:** "12-Port Cat6A Cassettes"

**Content:**

**Specifications:**

- Ports: 12-port RJ45 (6 duplex pairs)  
- Category: Cat6A shielded (STP) or unshielded (UTP)  
- Performance: 10GBASE-T up to 100m  
- PoE: PoE++ (802.3bt) up to 100W per port  
- Compliance: TIA-568.2-D, ISO/IEC 11801  
- Construction: 50-micron gold-plated contacts  
- Testing: Each port tested on Fluke analyzer  
- Compatibility: EVO and EXO chassis

**Image:** RJ45 cassette front view showing ports

#### 5.9.4 Use Cases

**Section H2:** "Applications"

**Content:** 3 scenarios

**1\. High-Density Data Center Copper** "Connecting servers with 10GBASE-T – Wave2Wave's RJ45 cassettes provide dense, easy-to-maintain patching that can reside next to fiber links in the same frame. Perfect for mixed 10G copper \+ 100G fiber environments."

**2\. Power over Ethernet Deployments** "PoE++ support for delivering up to 100W to equipment like wireless APs, IP cameras, LED lighting, and thin clients. Centralized patching for data and power."

**3\. Enterprise LAN Closets** "Use in enterprise MDF/IDF rooms where custom-length cables from Wave2Wave improve cable management and the modular panels provide clear labeling and future flexibility."

#### 5.9.5 Integration with Wave2Wave Systems

**Section H2:** "Part of Complete Solution"

**Content:**

"These patch panels benefit from Wave2Wave's overall approach:"

- Come pre-labeled if part of full deployment kit  
- Can be shipped with matched custom-length Cat6A cables  
- Compatible with DC Twin™ modeling (virtual patching design)  
- Hot-swappable: Add 48 copper ports by inserting 4 cassettes (no separate panel needed)

#### 5.9.6 Quality Assurance

**Callout:**

"**Every RJ45 Termination Tested**

Each port on every cassette is individually tested on a Fluke DSX analyzer to ensure Cat6A compliance. We guarantee performance to 500MHz, supporting 10GBASE-T at full 100m distance."

#### 5.9.7 Cross-Link to Fiber Patch Panels

**Callout Box (at bottom of page, before CTA):**

"**Also Available: Fiber Patch Panels**

Looking for high-speed fiber connectivity? We also offer modular fiber patch panel systems for 100G-800G networks."

Button: "View Fiber Patch Panels →" (links to `/fiber/patch-panels`)

#### 5.9.8 CTA Section

"Contact us to configure your copper patch panel solution."

---

### 5.10 Systems & Accessories Page (`/systems-and-accessories`)

**Purpose:** Group specialty systems and accessories (testing tools, power cables).

**SEO Meta:**

```html
<title>Lab Systems & Accessories | Wave2Wave – Testing Tools & Power Cables</title>
<meta name="description" content="Wave2Wave provides lab testing systems like Fiber-in-a-Box™ for fiber simulation and W-IGNITE™ loopbacks for port testing, as well as custom-length power cables and accessories for data centers." />
```

**Content Structure:**

#### 5.10.1 Hero Section

```
H1: "Systems & Accessories – Beyond Cables"
Subtext: "Lab testing tools and power connectivity that ensure networks are deployed right and run reliably."
Background: Test lab setup with equipment
```

#### 5.10.2 Testing & Lab Solutions (Summary)

**Section H2:** "Bring Manufacturing Precision to Your Test Lab"

**Content:**

"Wave2Wave provides specialized tools to bring manufacturing-level precision to your test lab – from fiber distance simulators to high-speed loopback testers, our lab solutions help you validate network performance with ease."

**Products at a Glance:**

- **Fiber-in-a-Box™:** Portable fiber distance simulator (up to 250 km in 4RU)  
- **W-IGNITE™ Loopbacks:** High-speed loopback modules for port testing (1G to 800G)

**Button:** "Explore Testing Solutions →" (to /systems-and-accessories/testing)

**Image:** Fiber-in-a-Box unit or lab bench with test equipment

#### 5.10.3 Power Cables & Accessories

**Section H2:** "Custom Power Connectivity"

**Content:**

"Wave2Wave offers custom-length power cables with various IEC/NEMA plug combinations (C13, C19, C14, C20, 5-15P, etc.), built to match your rack power needs."

**Features:**

- Custom lengths (3-inch increments) for exact fit  
- Heavy-duty jackets (SJT, SJTW)  
- Proper gauge: 12AWG for 20A circuits, 14AWG for 15A  
- UL listed for safety and compliance  
- Pre-labeled by rack (optional) to prevent confusion during installs

**Benefits:**

- Eliminate excess power cord slack  
- Match data cable aesthetics  
- Reduce install time (labeled power cords)  
- Single-source for all rack connectivity

**Image:** Custom power cables in various lengths, possibly labeled

#### 5.10.4 Other Accessories

**Brief mention (if applicable):**

"We also supply end-to-end accessories needed for deployments, including:"

- Cable management: Velcro ties, cable trays, routing guides  
- Dust caps for connectors  
- Cleaning supplies (fiber optic cleaning wipes, pens)  
- Rack labels and port identification

"These accessories can be included in deployment kits for turnkey delivery."

#### 5.10.5 CTA Section

Links: "Explore Testing Solutions →" and "Contact Sales for Accessories"

---

### 5.11 Testing Subpage (`/systems-and-accessories/testing`)

**Purpose:** Detailed information on testing and lab solutions.

**SEO Meta:**

```html
<title>Testing & Lab Solutions | Wave2Wave – Fiber-in-a-Box & Loopbacks</title>
<meta name="description" content="Detailed information on Wave2Wave's Testing & Lab Solutions: Fiber-in-a-Box™ distance simulation platform (up to 250 km fiber in 4RU) and W-IGNITE™ high-speed loopback assemblies for 1G–800G port testing." />
```

**Content Structure:**

#### 5.11.1 Hero Section

```
H1: "Testing & Lab Solutions – Precision Tools for Validation"
Subtext: "Qualify equipment, simulate real-world conditions, and maintain an efficient test environment with our lab solutions."
Background: Lab environment or Fiber-in-a-Box unit close-up
```

#### 5.11.2 Fiber-in-a-Box™

**Section H2:** "Fiber Distance Simulation System"

**Content:**

**What It Is:** "Fiber-in-a-Box™ is a compact 4RU chassis containing up to 250 km of fiber in modular cartridges. It allows engineers to simulate long-distance fiber links (introducing real-world latency and loss) in a controlled lab setting."

**The Problem It Solves:** "Historically, testing long-haul fiber equipment required massive coils of fiber sprawled on lab floors – messy, inconsistent, and space-consuming. Fiber-in-a-Box replaces this with a neat, repeatable solution."

**Key Features:**

- Capacity: Up to 250 km of fiber in a single 4RU enclosure  
- Modular: Cartridges available in 5km, 10km, 20km, 50km increments  
- Precision: Introduces known attenuation and latency (repeatable within 0.1dB)  
- Use cases: Telecom equipment validation, transceiver testing, DWDM system qualification  
- Standard: Used as a global standard in telecom, hyperscale, and R\&D labs

**Image:** Fiber-in-a-Box unit (front panel) or diagram showing fiber coils inside

**Technical Specs:**

- Fiber type: OS2 single-mode  
- Connector options: LC, SC, or MTP  
- Attenuation range: Configurable (based on cartridge selection)  
- Rack mount: Standard 19-inch

**Testimonial/Use Case (if available):** "A leading transceiver manufacturer uses Fiber-in-a-Box to validate 400G ZR optics under simulated 80km deployments – achieving consistent results across hundreds of test runs."

#### 5.11.3 W-IGNITE™ Loopbacks

**Section H2:** "High-Speed Loopback Testers"

**Content:**

**What They Are:** "W-IGNITE™ loopbacks are precision-engineered modules that emulate an active link by looping the signal back to the port – used for port testing, burn-in, troubleshooting, and validation."

**Why They Matter:** "Loopbacks are the industry benchmark for testing switch and server ports. They allow network engineers to verify port functionality without needing a second device, making them essential for labs, RMA testing, and bring-up."

**Available Form Factors:**

**Electrical Loopbacks:**

- SFP, SFP+, SFP28 (1G to 25G)  
- QSFP, QSFP+, QSFP28 (40G to 100G)  
- QSFP-DD (200G, 400G)  
- OSFP (800G)

**Optical Loopbacks:**

- LC loopbacks (single-mode and multimode)  
- MTP/MPO loopbacks (12-fiber, 24-fiber)

**Key Features:**

- Precision engineered to meet power/thermal requirements (won't damage port)  
- Cover speeds from 1G to 800G  
- Compliant with MSA specifications for each form factor  
- Used by OEMs, cloud providers, and test labs globally

**Image:** Various loopback modules (QSFP-DD, OSFP, SFP+)

**Use Cases:**

- Port bring-up: Test new switches before deployment  
- Burn-in testing: Run ports at full speed for extended periods  
- Troubleshooting: Isolate port vs. cable vs. remote device issues  
- RMA verification: Validate returned equipment

#### 5.11.4 Why Choose Wave2Wave Lab Solutions?

**Section H2:** "Proven Reliability"

**Content (3 bullets):**

**1\. Industry Standard:** "Our testing solutions are deployed by the world's largest OEMs and cloud providers – trusted for critical validation workflows."

**2\. Comprehensive Coverage:** "From 1G copper to 800G optical, we provide loopbacks and test tools for every major form factor and speed."

**3\. Laboratory Repeatability:** "Fiber-in-a-Box offers consistent, repeatable distance simulation – eliminating variables and ensuring test validity."

#### 5.11.5 CTA Section

"Set up your lab with Wave2Wave testing solutions – contact us for a demo or quote."

---

### 5.12 Company Page (`/company`)

**Purpose:** Provide background on Wave2Wave as a company.

**SEO Meta:**

```html
<title>About Wave2Wave | Data Center Cabling Innovator</title>
<meta name="description" content="Learn about Wave2Wave.io – an industry-leading provider of custom data center cabling and connectivity solutions. Discover our mission, values, and why enterprises worldwide trust us to build AI-ready infrastructure." />
```

**Content Structure:**

#### 5.12.1 Hero Section

```
H1: "About Wave2Wave – Building the Physical Backbone of Tomorrow"
Subtext: "Wave2Wave.io doesn't just sell cables. We deliver infrastructure you can trust — because the network begins where the cable does."
Background: Team photo or data center with Wave2Wave installation
```

#### 5.12.2 Mission Statement

**Section H2:** "Our Mission"

**Content:**

"Wave2Wave.io builds the physical backbone of tomorrow's AI infrastructure. From design to deployment, our intelligent cabling systems deliver the speed, scalability, and reliability that power the world's most advanced data centers and networks.

We saw an industry that treated cables as an afterthought – fixed lengths, field termination, guesswork. We transformed that approach by treating cabling as a strategic asset, not a commodity. Today, we partner with the world's leading hyperscalers, AI pioneers, and enterprises to deliver infrastructure that performs flawlessly from day one."

#### 5.12.3 Company Story

**Section H2:** "How We Started"

**Content:**

"Wave2Wave was founded by data center professionals who experienced the pain of traditional cabling firsthand: missed connections, installation delays, and infrastructure that couldn't keep pace with rapid technology change.

We identified a critical gap: As network speeds exploded and data center scale grew exponentially, the cabling industry remained stuck in old paradigms. Field termination introduced errors. Fixed-length cables created waste. Documentation fell out of sync with reality.

Our founders set out to address this by applying manufacturing precision to data center cabling. The result: custom-engineered, pre-labeled, factory-tested cable systems that install faster, perform better, and scale seamlessly."

**Timeline (optional visual if milestones available):**

- 20XX: Company founded  
- 20XX: First DC Twin™ digital modeling project  
- 20XX: Reached 100 hyperscale deployments  
- 2025: Supporting 800G networks globally

#### 5.12.4 Core Values

**Section H2:** "What Drives Us"

**Content:** 4 value cards

**1\. Innovation**

- Icon: Lightbulb  
- Text: "We deliver new products (like DC Twin™, Fiber-in-a-Box™) that solve customer problems in novel ways. Innovation isn't a buzzword – it's how we operate."

**2\. Quality**

- Icon: Shield/checkmark  
- Text: "Every product undergoes thorough QA. We maintain ISO 9001:2015 and ISO 14001:2015 certifications and offer a 100% performance guarantee."

**3\. Customer Success**

- Icon: Handshake  
- Text: "We act as a partner, not a vendor. Our solutions make customers more successful – from design through deployment and beyond."

**4\. Simplicity**

- Icon: Streamline/minimize icon  
- Text: "Networking, power, and connectivity – simplified. We aim to remove complexity from infrastructure projects, delivering turnkey solutions that just work."

#### 5.12.5 By the Numbers

**Section H2:** "Our Impact"

**Content:** Stat blocks (4 columns, large numbers with labels)

```
[Icon] 15+ Years        [Icon] 200+ Projects       [Icon] 30+ Clients      [Icon] 100% Satisfaction
In business            Completed globally         Enterprise partnerships  Customer guarantee
```

**Note:** Verify and update these numbers as needed with current data.

#### 5.12.6 Certifications & Standards

**Section H2:** "Quality & Compliance"

**Content:**

"Wave2Wave maintains rigorous quality and environmental management systems:"

- **ISO 9001:2015:** Quality Management System certification  
- **ISO 14001:2015:** Environmental Management System certification  
- **TIA-568:** Structured cabling standards compliance  
- **UL Listing:** Power cable safety certification  
- **NVIDIA Validated:** Partner for DGX cabling solutions (if applicable)

**Optional:** Display certification logos (ISO 9001, ISO 14001\)

#### 5.12.7 Trusted by Industry Leaders

**Section H2:** "Our Clients"

**Content:** Logo grid (same as Solutions page) showing major client logos

**Note:** Ensure client permission to display logos on website.

#### 5.12.8 Join Our Team (Optional)

**Brief section if hiring:**

"Interested in joining Wave2Wave? We're always looking for talented engineers, project managers, and operations professionals who are passionate about infrastructure."

Button: "View Open Positions" (if careers page exists) or "Contact Us About Careers"

#### 5.12.9 CTA Section

"Ready to work with Wave2Wave? Let's discuss your next project."

---

### 5.13 Contact Page (`/contact`)

**Purpose:** Allow visitors to get in touch for quotes, inquiries, or support.

**SEO Meta:**

```html
<title>Contact Wave2Wave | Get a Quote or Consultation</title>
<meta name="description" content="Get in touch with Wave2Wave for custom cabling solutions, quotes, or support. Our team is ready to assist with your data center cabling, deployment services, and engineering needs." />
```

**Content Structure:**

#### 5.13.1 Hero Section

```
H1: "Get in Touch"
Subtext: "Ready to discuss your cabling needs? Contact our team for a quote, consultation, or technical support."
Background: Optional light background or none (keep focus on form)
```

#### 5.13.2 Contact Form

**Form Fields (preserve existing structure):**

- First Name (required)  
- Last Name (required)  
- Email (required, validated)  
- Company (optional but helpful)  
- Phone (optional)  
- Message/Project Details (textarea, required)  
- Submit Button: "Send Message" (Primary Button style)

**Form Behavior:**

- Client-side validation: Check required fields, email format  
- On submit: Disable button, show spinner, text changes to "Sending..."  
- Success: Show success message (green checkmark \+ text) OR redirect to /contact/thank-you  
- Error: Show error message inline (red text)

**Success Message Example:** "✓ Thank you\! Your message has been sent. Our team will respond within 24 hours."

**CRM Integration:**

- Maintain existing CRM endpoint/API  
- Do not change field names (CRM expects specific names)  
- Preserve any hidden fields (e.g., source tracking)

#### 5.13.3 Contact Information

**Section (sidebar or below form):**

**Phone:** \[Insert company phone number\]

**Email:** \[Insert company email\]

**Address:** Wave2Wave.io  
\[Street Address\]  
\[City, State ZIP\]  
\[Country\]

**Hours:** Monday \- Friday: 8am \- 6pm PST  
Saturday \- Sunday: Closed  
*(Adjust as needed)*

#### 5.13.4 No Changes to Form Logic

**Critical:** The contact form is tied to a CRM. Do NOT alter:

- Form submission endpoint  
- Field names or IDs  
- Validation logic (unless improving)  
- CRM integration code

**Replication Strategy:**

- Copy existing form handling code exactly  
- Test form submission in staging before launch  
- Verify CRM receives data correctly  
- Maintain autoresponder emails (if configured in CRM)

#### 5.13.5 Optional Map/Location

If current site has an embedded map, maintain it. If not, don't add one (not critical for B2B).

---

## 6\. Image & Media Specifications

### 6.1 Image Dimensions & Formats

**Hero Images:**

- Desktop: 1920×800px (2.4:1 aspect ratio)  
- Mobile: 1200×800px (crop to 3:2 or use focal point)  
- Format: WebP with JPG fallback  
- Max file size: 200KB (compressed)  
- Alt text format: "Description of scene \- Wave2Wave \[product/service\]"

**Feature/Product Images:**

- Desktop: 800×600px (4:3 aspect ratio)  
- Mobile: 600×450px  
- Format: WebP with PNG fallback (if transparency needed)  
- Max file size: 100KB

**Icon/Logo Images:**

- SVG preferred (scalable, small file size)  
- PNG fallback: 2× resolution (e.g., 48px display \= 96px asset)  
- Transparent background

**Client Logos:**

- Format: SVG or PNG with transparency  
- Min width: 400px  
- Uniform styling: All greyscale or all color (not mixed)

**Gallery/Thumbnail Images:**

- 400×300px (4:3 aspect ratio)  
- Format: WebP  
- Max file size: 50KB

### 6.2 Image Sourcing Strategy

**Priority 1 \- Existing Assets:**

1. Extract from current Wave2Wave.io website (check /images folder)  
2. Use images from brochure (if high-resolution available)  
3. Check internal marketing folder for product photography

**Priority 2 \- Product Photography:** If existing assets insufficient, schedule product photo session:

- EVO/EXO patch panels (multiple angles)  
- Custom cable bundles with labels visible  
- Fiber-in-a-Box™ unit  
- W-IGNITE™ loopback modules  
- Cable samples (fiber and copper)

**Photography Guidelines:**

- White or neutral grey seamless background  
- Consistent studio lighting (avoid harsh shadows)  
- Multiple angles per product (front, side, detail shots)  
- Include scale reference (person's hand, ruler) for context  
- Capture labels and connectors in detail

**Priority 3 \- Stock Photography:** Use ONLY if \#1 and \#2 unavailable.

**Recommended sources:**

- Unsplash (free, high-quality)  
- Pexels (free)  
- Shutterstock (paid, exclusive)

**Search terms:**

- "data center cabling"  
- "fiber optic cables close-up"  
- "server room installation"  
- "network infrastructure"  
- "data center technician"  
- "server racks"  
- "hyperscale data center"

**Avoid:**

- Overused generic stock images  
- Images with visible competitor branding  
- Low-resolution or pixelated images

**Priority 4 \- Client Logos:**

- Request high-resolution logos directly from clients  
- Min 400px width, transparent background preferred  
- Confirm permission to display on website (legal requirement)

### 6.3 Placeholder Strategy (During Development)

Use placeholder images during initial build:

**Option A:** placehold.co service

```html
<img src="https://placehold.co/1920x800/EEE/333?text=Hero+Image" alt="[TEMP] Hero placeholder">
```

**Option B:** Low-res versions of final images

- Use compressed versions (50% quality)  
- Add \[TEMP\] label in alt text  
- Replace with high-res in final pass

**Action:** Create a "placeholder tracking" document listing:

- Page name  
- Image location  
- Placeholder URL or description  
- Final image needed  
- Status (pending, received, implemented)

### 6.4 Image Optimization

**Tools:**

- TinyPNG (PNG compression)  
- Squoosh (Google's web tool for all formats)  
- ImageOptim (Mac app)  
- Sharp (Node.js library for automated optimization)

**Compression Targets:**

- JPG: Quality 80-85 (visually lossless)  
- PNG: Use TinyPNG or similar (often 60-70% reduction)  
- WebP: Quality 80 (better compression than JPG)

**Implementation in Next.js:**

```
import Image from 'next/image'

<Image
  src="/images/fiber-solutions-hero.webp"
  alt="Technician installing pre-labeled fiber optic cables in data center rack - Wave2Wave fiber solutions"
  width={1920}
  height={800}
  quality={85}
  priority={true} // Only for above-fold images
  placeholder="blur" // Optional: nice fade-in effect
  blurDataURL="data:image/..." // Generate with plaiceholder library
/>
```

**Benefits of Next.js Image:**

- Automatic WebP conversion  
- Lazy loading (images load as user scrolls)  
- Responsive srcset generation  
- Built-in blur placeholder

### 6.5 Alt Text Standards

**Format:** `[What is shown] - [Context/purpose]`

**Good Examples:**

- "Wave2Wave EVO modular patch panel with mixed fiber and copper cassettes installed in rack"  
- "Technician installing pre-labeled fiber optic cables in hyperscale data center"  
- "Bundle of custom-length CAT6A Ethernet cables with factory-applied rack labels"  
- "DC Twin digital model showing 3D cable routing paths in data center layout"

**Bad Examples:**

- "cables" (too vague)  
- "img-1234.jpg" (not descriptive)  
- "Click here for more" (call-to-action, not description)  
- "" (empty alt text)

**Rules:**

- Every image must have alt text (WCAG requirement)  
- Decorative images: Use alt="" (empty, not missing)  
- Avoid "image of" or "picture of" (redundant)  
- Include brand name where relevant ("Wave2Wave...")  
- Describe what's visible \+ context of use

### 6.6 Video Considerations (If Applicable)

**Not explicitly required, but if adding video:**

**Formats:**

- MP4 (H.264 codec) for broad compatibility  
- WebM for modern browsers (smaller file size)

**Hosting:**

- Option A: YouTube embed (easy, reliable, no hosting cost)  
- Option B: Vimeo embed (professional, no ads)  
- Option C: Self-hosted (more control, but requires video hosting)

**Optimization:**

- Keep videos under 2 minutes for web (attention span)  
- Compress before upload (HandBrake tool)  
- Provide captions/subtitles (accessibility)

**Use Cases:**

- Company overview video on Company page  
- DC Twin™ explainer video on /custom-engineering/dc-twin  
- Product demo videos on product pages

---

## 7\. Technical Implementation

### 7.1 Platform & Hosting

**Framework:** Next.js (latest stable version, currently 14.x)  
**Hosting:** Vercel  
**Repository:** GitHub (existing repository)  
**Domain:** wave2wave.io (already configured)

### 7.2 Next.js File Structure

**Recommended Structure:**

```
/pages
  ├── index.js                    → Solutions (HOMEPAGE at /)
  ├── custom-engineering
  │   ├── index.js                → Custom Engineering overview
  │   └── dc-twin.js              → DC Twin subpage
  ├── deployment-services.js      → Deployment Services
  ├── fiber
  │   ├── index.js                → Fiber overview
  │   ├── hyperscalers.js         → Hyperscale solutions
  │   └── patch-panels.js         → Fiber patch panels
  ├── ethernet
  │   ├── index.js                → Ethernet overview
  │   └── patch-panels.js         → Ethernet patch panels (separate from fiber)
  ├── systems-and-accessories
  │   ├── index.js                → Systems overview
  │   └── testing.js              → Testing solutions
  ├── company.js                  → Company/About
  ├── contact.js                  → Contact form
  ├── 404.js                      → Custom 404 page
  └── _app.js                     → Global layout, header, footer

/components
  ├── Header.jsx                  → Navigation header
  ├── Footer.jsx                  → Site footer
  ├── HeroSection.jsx             → Reusable hero component
  ├── FeatureBlock.jsx            → Icon + title + description card
  ├── CTASection.jsx              → Call-to-action banner
  ├── Button.jsx                  → Button component (primary/secondary)
  └── FormField.jsx               → Form input component

/public
  ├── images                      → All images
  │   ├── heroes                  → Hero background images
  │   ├── products                → Product photography
  │   ├── logos                   → Client logos
  │   └── icons                   → Icon SVGs
  └── favicon.ico

/styles
  ├── globals.css                 → Global CSS, CSS variables
  └── [component].module.css      → Component-specific CSS modules

/lib
  └── analytics.js                → Google Analytics helper functions

/data
  └── content.json                → Reusable content (optional, for easier updates)
```

### 7.3 Routing Implementation

**File-System Routing:**

Next.js automatically creates routes based on file structure:

- `/pages/index.js` → `/` (homepage \- displays Solutions content)  
- `/pages/fiber/index.js` → `/fiber`  
- `/pages/fiber/hyperscalers.js` → `/fiber/hyperscalers`  
- `/pages/fiber/patch-panels.js` → `/fiber/patch-panels`  
- `/pages/ethernet/patch-panels.js` → `/ethernet/patch-panels`

**Important:** Note that `/fiber/patch-panels` and `/ethernet/patch-panels` are separate pages with distinct content (fiber vs. copper).

**Ensure:**

- Folder names use lowercase and hyphens (e.g., `custom-engineering`)  
- Index files serve as section overviews  
- Named files create subpages

**Redirects:**

Implement in `next.config.js`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/solutions',
        destination: '/',
        permanent: true, // 301 redirect
      },
      // Add more old URL → new URL mappings based on current site audit
      {
        source: '/industries/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/fiber-cables',
        destination: '/fiber',
        permanent: true,
      },
      {
        source: '/products/fiber-patch-panels',
        destination: '/fiber/patch-panels',
        permanent: true,
      },
      {
        source: '/products/ethernet-patch-panels',
        destination: '/ethernet/patch-panels',
        permanent: true,
      },
      // ... more redirects based on old site structure
    ]
  },
}
```

**Action:** Audit current site to create complete redirect list.

### 7.4 Component Development

**Reusable Components:**

Create shared components to maintain consistency:

**Header Component (`Header.jsx`):**

- Logo (links to homepage)  
- Navigation menu with dropdowns  
- "Request Quote" CTA button  
- Mobile hamburger menu (responsive)  
- Sticky behavior after scroll

**Footer Component (`Footer.jsx`):**

- Four-column layout (Quick Links, Products, Company, Contact)  
- Bottom bar with copyright and links  
- Social media icons (if applicable)

**Hero Section (`HeroSection.jsx`):**

```
<HeroSection
  title="Connecting the Physical Backbone..."
  subtitle="Engineered cabling systems..."
  backgroundImage="/images/heroes/datacenter.webp"
  ctaText="Request a Quote"
  ctaLink="/contact"
/>
```

**Feature Block (`FeatureBlock.jsx`):**

```
<FeatureBlock
  icon="/images/icons/custom-engineering.svg"
  title="Custom Cable Engineering"
  description="Every cable system engineered to exact specifications..."
/>
```

**CTA Section (`CTASection.jsx`):**

```
<CTASection
  title="Ready to Accelerate Your Deployment?"
  subtitle="Contact us to discuss..."
  buttonText="Get Started"
  buttonLink="/contact"
  variant="primary" // or "dark"
/>
```

**Benefits:**

- Consistency across pages  
- Easy updates (change component, updates everywhere)  
- Reduced code duplication  
- Faster development

### 7.5 Styling Approach

**Recommendation:** CSS Modules or Tailwind CSS

**Option A: CSS Modules (more traditional)**

```
import styles from './HeroSection.module.css'

<div className={styles.hero}>
  <h1 className={styles.title}>{title}</h1>
</div>
```

**Option B: Tailwind CSS (utility-first, faster development)**

```
<div className="relative h-[600px] flex items-center justify-center">
  <h1 className="text-5xl font-bold text-white">{title}</h1>
</div>
```

**Recommendation:** Use CSS Modules if team prefers traditional CSS. Use Tailwind if team wants rapid development and utility-first approach.

**CSS Variables (Design Tokens):**

Define in `globals.css`:

```css
:root {
  /* Colors */
  --color-primary: #0066CC;
  --color-secondary: #FF6B35;
  --color-text-dark: #1A1A1A;
  --color-bg-light: #F5F5F5;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  
  /* Typography */
  --font-family: 'Inter', sans-serif;
  --font-size-h1: 48px;
  --font-size-body: 16px;
  
  /* Breakpoints (for use in media queries) */
  --breakpoint-mobile: 768px;
  --breakpoint-desktop: 1024px;
}
```

**Usage:**

```css
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family);
}
```

### 7.6 Responsive Design Implementation

**Approach:** Mobile-first CSS

**Base styles \= Mobile (320px+)**  
**Add complexity at larger breakpoints**

```css
/* Mobile first (default) */
.hero {
  padding: 32px 16px;
  text-align: center;
}

.hero h1 {
  font-size: 32px;
}

/* Tablet */
@media (min-width: 768px) {
  .hero {
    padding: 48px 32px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero {
    padding: 64px;
  }
  
  .hero h1 {
    font-size: 48px;
  }
}
```

**Grid Layouts:**

Use CSS Grid for responsive layouts:

```css
.feature-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr; /* Mobile: 1 column */
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}
```

### 7.7 Image Optimization (Next.js)

**Always use Next.js `<Image>` component:**

```
import Image from 'next/image'

<Image
  src="/images/products/evo-panel.webp"
  alt="Wave2Wave EVO modular fiber patch panel with cassettes"
  width={800}
  height={600}
  quality={85}
  loading="lazy" // Or priority={true} for above-fold images
/>
```

**Benefits:**

- Automatic format conversion (WebP, AVIF)  
- Responsive image sizing  
- Lazy loading (images load as needed)  
- Prevents Cumulative Layout Shift (CLS)

**Configuration in `next.config.js`:**

```javascript
module.exports = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96],
  },
}
```

### 7.8 Performance Optimization

**Target Metrics:**

- Lighthouse Performance Score: ≥90  
- First Contentful Paint (FCP): \<1.5s  
- Largest Contentful Paint (LCP): \<2.5s  
- Cumulative Layout Shift (CLS): \<0.1  
- Time to Interactive (TTI): \<3.5s

**Strategies:**

**1\. Code Splitting:**

```
// Dynamic import for heavy components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

**2\. Font Optimization:**

```
// In _app.js or _document.js
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

**3\. Minimize JavaScript:**

- Remove unused dependencies  
- Tree-shake libraries (import only what's needed)  
- Use native browser APIs when possible (instead of libraries)

**4\. Enable Compression:**

- Vercel enables Brotli/Gzip by default (no action needed)

**5\. CDN:**

- Vercel provides global CDN (no action needed)

**6\. Prefetch Links:**

```
<Link href="/fiber" prefetch={true}>
  Fiber Solutions
</Link>
```

### 7.9 Browser Support

**Target Browsers:**

- Chrome/Edge (Chromium): Last 2 versions  
- Firefox: Last 2 versions  
- Safari: Last 2 versions (macOS and iOS)  
- Mobile: iOS Safari 14+, Chrome Android 90+

**Unsupported:**

- Internet Explorer 11 (show "unsupported browser" message)

**Polyfills:**

- Next.js includes necessary polyfills automatically  
- Test on target browsers using BrowserStack or manual devices

### 7.10 Environment Variables

**For sensitive data (API keys, CRM endpoints):**

Create `.env.local` (not committed to Git):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CRM_API_ENDPOINT=https://api.example.com/contact
CRM_API_KEY=your_secret_key
```

**Usage:**

```javascript
const gaId = process.env.NEXT_PUBLIC_GA_ID
```

**Vercel Configuration:**

- Set environment variables in Vercel dashboard  
- Separate environments: Development, Preview, Production

---

## 8\. SEO Strategy

### 8.1 Meta Tags (Per Page)

Each page must have unique:

**Title Tag:**

- Format: `[Page Name] | Wave2Wave – [Value Prop]`  
- Length: 50-60 characters  
- Include primary keyword

**Meta Description:**

- Length: 150-160 characters  
- Include secondary keyword and CTA  
- Enticing summary of page content

**Canonical URL:**

- Points to the preferred version of the page  
- Prevents duplicate content issues

**Example Implementation:**

```
import Head from 'next/head'

export default function FiberPage() {
  return (
    <>
      <Head>
        <title>Fiber Solutions | Wave2Wave – Pre-Terminated Fiber Cables & Panels</title>
        <meta name="description" content="Explore Wave2Wave's fiber solutions: custom-length pre-terminated fiber optic cables, high-density MPO trunks, fiber patch cords, and modular patch panels for 100G/400G/800G networks." />
        <link rel="canonical" href="https://wave2wave.io/fiber" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Fiber Solutions | Wave2Wave" />
        <meta property="og:description" content="Explore Wave2Wave's fiber solutions..." />
        <meta property="og:image" content="https://wave2wave.io/images/og-fiber.jpg" />
        <meta property="og:url" content="https://wave2wave.io/fiber" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fiber Solutions | Wave2Wave" />
        <meta name="twitter:description" content="Explore Wave2Wave's fiber solutions..." />
        <meta name="twitter:image" content="https://wave2wave.io/images/twitter-fiber.jpg" />
      </Head>
      
      {/* Page content */}
    </>
  )
}
```

### 8.2 Page-Specific Meta Tags

**Solutions (Homepage):**

```
Title: Solutions | Wave2Wave – AI-Ready Data Center Cabling & Infrastructure
Description: Wave2Wave provides custom-engineered cabling solutions for AI, cloud, enterprise, and telecom – delivering pre-labeled, plug-and-play fiber and copper infrastructure.
Canonical URL: https://wave2wave.io/
Keywords: custom data center cabling, AI data center solutions, pre-terminated cables, hyperscale network infrastructure, enterprise cabling solutions
```

**Custom Engineering:**

```
Title: Custom Engineering | Wave2Wave – Bespoke Cabling & DCIM Design
Description: Custom cable engineering services by Wave2Wave – we design and manufacture cables & assemblies to your exact specs, from custom lengths to unique configurations, with DC Twin digital twin modeling.
Keywords: custom cables, engineered cabling, bespoke network cables, DCIM cabling design, digital twin cabling
```

**DC Twin:**

```
Title: DC Twin™ Digital Twin | Wave2Wave – Virtual Data Center Design
Description: Learn about Wave2Wave's DC Twin™ service – a digital twin platform that models every rack and cable in software for precise lengths, zero surprises, and 40% faster data center deployment.
Keywords: data center digital twin, DC Twin, DCIM modeling, virtual data center planning, cable length calculation, deployment simulation
```

*(Continue for all pages as specified in Section 5\)*

### 8.3 Structured Data (Schema.org)

**Organization Schema (All Pages):**

Add to `_app.js` or `_document.js`:

```
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wave2Wave",
    "url": "https://wave2wave.io",
    "logo": "https://wave2wave.io/images/logo.png",
    "description": "Custom data center cabling infrastructure provider specializing in pre-terminated fiber and copper solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Street Address]",
      "addressLocality": "[City]",
      "addressRegion": "[State]",
      "postalCode": "[ZIP]",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "Sales",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/wave2wave",
      "https://twitter.com/wave2wave"
    ]
  }
`}
</script>
```

**Product Schema (Product Pages):**

Example for Fiber page:

```
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Pre-Terminated Fiber Optic Cables",
    "description": "Factory-terminated fiber optic trunk cables and patch cords built to custom lengths in 3-inch increments",
    "brand": {
      "@type": "Brand",
      "name": "Wave2Wave"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "url": "https://wave2wave.io/fiber"
    }
  }
`}
</script>
```

**BreadcrumbList Schema (Subpages):**

Example for `/fiber/hyperscalers`:

```
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wave2wave.io"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fiber Solutions",
        "item": "https://wave2wave.io/fiber"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hyperscale Fiber",
        "item": "https://wave2wave.io/fiber/hyperscalers"
      }
    ]
  }
`}
</script>
```

### 8.4 Sitemap Generation

**Use Next.js sitemap library:**

Install:

```shell
npm install next-sitemap
```

Create `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: 'https://wave2wave.io',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
```

Add to `package.json` scripts:

```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

**Result:** Automatically generates `/sitemap.xml` and `/robots.txt` after each build.

### 8.5 robots.txt

**Generated automatically by next-sitemap, or create manually:**

```
User-agent: *
Allow: /

Sitemap: https://wave2wave.io/sitemap.xml
```

### 8.6 Redirects for SEO

**Implement 301 redirects for all changed URLs.**

Audit current site structure and map to new structure:

```javascript
// In next.config.js
async redirects() {
  return [
    // Homepage redirect
    {
      source: '/solutions',
      destination: '/',
      permanent: true,
    },
    
    // Industry pages → Solutions
    {
      source: '/industries/enterprise',
      destination: '/',
      permanent: true,
    },
    {
      source: '/industries/ai-gpu',
      destination: '/',
      permanent: true,
    },
    {
      source: '/industries/hyperscale',
      destination: '/fiber/hyperscalers',
      permanent: true,
    },
    
    // Product pages restructured
    {
      source: '/products/fiber-cables',
      destination: '/fiber',
      permanent: true,
    },
    {
      source: '/products/copper-cables',
      destination: '/ethernet',
      permanent: true,
    },
    {
      source: '/products/patch-panels',
      destination: '/fiber/patch-panels',
      permanent: true,
    },
    {
      source: '/products/dac',
      destination: '/ethernet',
      permanent: true,
    },
    {
      source: '/products/testing',
      destination: '/systems-and-accessories/testing',
      permanent: true,
    },
    
    // Service pages
    {
      source: '/services/custom-engineering',
      destination: '/custom-engineering',
      permanent: true,
    },
    {
      source: '/services/labeling',
      destination: '/deployment-services',
      permanent: true,
    },
    {
      source: '/services/kitting',
      destination: '/deployment-services',
      permanent: true,
    },
    
    // About/Company
    {
      source: '/about',
      destination: '/company',
      permanent: true,
    },
    
    // Add more as needed based on old site audit
  ]
}
```

**Action Required:** Full audit of old site URLs before launch.

---

## 9\. Analytics & Integrations

### 9.1 Google Analytics 4

**Implementation:**

Install Google Analytics helper:

```shell
npm install @next/third-parties
```

Add to `_app.js`:

```
import { GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </>
  )
}
```

**OR manual implementation in `_document.js`:**

```
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

**Track Page Views on Route Change:**

```
// In _app.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: url,
      })
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return <Component {...pageProps} />
}
```

**Custom Events (Optional):**

Track button clicks, form submissions, etc.:

```
// Example: Track CTA button click
<button
  onClick={() => {
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: 'Request Quote Header',
    })
    router.push('/contact')
  }}
>
  Request Quote
</button>
```

**Goals to Set Up in GA4:**

- Contact form submission (conversion event)  
- "Request Quote" button clicks  
- PDF downloads (if datasheets available)  
- Time on page for key pages (Solutions, Custom Engineering)

### 9.2 CRM Integration (Contact Form)

**Critical: Do NOT change existing CRM integration.**

**Current State Analysis:**

- Identify current form endpoint (check `contact.js` for form action)  
- Identify field names expected by CRM  
- Identify any hidden fields (source tracking, campaign IDs)

**Example Current Form (hypothetical):**

```
<form action="/api/contact" method="POST">
  <input name="firstname" required />
  <input name="lastname" required />
  <input name="email" type="email" required />
  <input name="company" />
  <input name="phone" />
  <textarea name="message" required></textarea>
  <input type="hidden" name="source" value="website" />
  <button type="submit">Send Message</button>
</form>
```

**Replicate in New Site:**

```
// pages/contact.js
import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          source: 'website', // Hidden field
        }),
      })
      
      if (response.ok) {
        setStatus('success')
        setFormState({ firstname: '', lastname: '', email: '', company: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstname"
        value={formState.firstname}
        onChange={(e) => setFormState({...formState, firstname: e.target.value})}
        required
      />
      {/* ... other fields ... */}
      
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      
      {status === 'success' && (
        <p className="success">✓ Thank you! Your message has been sent. Our team will respond within 24 hours.</p>
      )}
      
      {status === 'error' && (
        <p className="error">✗ There was an error sending your message. Please try again or email us directly.</p>
      )}
    </form>
  )
}
```

**API Route (`pages/api/contact.js`):**

Replicate existing CRM API call exactly:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  const { firstname, lastname, email, company, phone, message, source } = req.body
  
  try {
    // Example: Send to CRM (adjust to actual CRM endpoint)
    const crmResponse = await fetch('https://your-crm-endpoint.com/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CRM_API_KEY}`,
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        company,
        phone,
        message,
        source,
      }),
    })
    
    if (!crmResponse.ok) {
      throw new Error('CRM submission failed')
    }
    
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
```

**Testing Plan:**

1. Test in development with staging CRM endpoint  
2. Verify submissions appear in CRM  
3. Check autoresponder emails trigger  
4. Test validation (required fields, email format)  
5. Test error handling (network failure, invalid data)

**Environment Variables:**

```
CRM_API_ENDPOINT=https://your-crm.com/api/leads
CRM_API_KEY=your_secret_key
```

### 9.3 Other Scripts

**Audit current site for additional scripts:**

Check `<head>` and `<body>` for:

- Google Tag Manager  
- LinkedIn Insight Tag  
- Facebook Pixel  
- Hotjar or similar heatmap tools  
- Chat widgets (Intercom, Drift, etc.)  
- Cookie consent banners

**Replicate any found scripts in new site.**

Example: LinkedIn Insight Tag

```
// In _document.js <Head>
<script
  dangerouslySetInnerHTML={{
    __html: `
      _linkedin_partner_id = "123456";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `,
  }}
/>
<script async src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
```

---

## 10\. Quality Assurance

### 10.1 Pre-Launch QA Checklist

**Functionality:**

- [ ] All navigation links work (internal and subpages)  
- [ ] Dropdown menus function on desktop  
- [ ] Mobile hamburger menu opens/closes correctly  
- [ ] Contact form submits successfully  
- [ ] Contact form validation works (required fields, email format)  
- [ ] Form data reaches CRM  
- [ ] Form success message displays correctly  
- [ ] "Request Quote" CTA works from all pages  
- [ ] All internal links work (no 404s)  
- [ ] External links (if any) open in new tabs  
- [ ] 301 redirects from old URLs work

**Content:**

- [ ] No Lorem Ipsum or placeholder text  
- [ ] No \[TEMP\] image placeholders  
- [ ] All images have proper alt text  
- [ ] No spelling or grammar errors  
- [ ] Product names/specs match brochure  
- [ ] Phone numbers and email addresses correct  
- [ ] Copyright year current (2025)  
- [ ] Client logos display correctly  
- [ ] All CTAs have correct links

**SEO:**

- [ ] All pages have unique title tags  
- [ ] All pages have meta descriptions  
- [ ] All images have alt text  
- [ ] Canonical URLs set correctly  
- [ ] Open Graph tags present  
- [ ] Twitter Card tags present  
- [ ] Structured data (Schema.org) implemented  
- [ ] Sitemap.xml generated and accessible  
- [ ] robots.txt configured  
- [ ] Google Analytics tracking verified (check realtime reports)  
- [ ] 301 redirects tested

**Performance:**

- [ ] Lighthouse Performance score ≥90 on all pages  
- [ ] Lighthouse Accessibility score ≥95  
- [ ] All images optimized (\<200KB hero, \<100KB product)  
- [ ] Page load time \<3s on 3G (use Chrome DevTools throttling)  
- [ ] No console errors in browser  
- [ ] No layout shift (CLS \<0.1)  
- [ ] Images lazy load below fold

**Cross-Browser/Device:**

- [ ] Tested on Chrome (Windows and Mac)  
- [ ] Tested on Firefox  
- [ ] Tested on Safari (Mac)  
- [ ] Tested on Edge  
- [ ] Tested on iPhone (Safari)  
- [ ] Tested on Android (Chrome)  
- [ ] Tested on iPad  
- [ ] Tested at multiple screen sizes (320px, 768px, 1024px, 1440px)

**Accessibility:**

- [ ] Keyboard navigation works (Tab, Enter, Esc)  
- [ ] Focus indicators visible  
- [ ] Color contrast passes WCAG AA (use Lighthouse or WAVE)  
- [ ] Screen reader test (NVDA or JAWS)  
- [ ] Skip to main content link works  
- [ ] ARIA labels on icon-only buttons  
- [ ] Form labels properly associated with inputs

**Mobile Specific:**

- [ ] Text is readable without zooming  
- [ ] Buttons are easily tappable (min 44×44px)  
- [ ] No horizontal scrolling  
- [ ] Images scale appropriately  
- [ ] Mobile menu is usable  
- [ ] Forms are usable (inputs not tiny)

### 10.2 Testing Tools

**Automated Testing:**

- **Lighthouse:** Built into Chrome DevTools (Performance, Accessibility, SEO, Best Practices)  
- **WAVE:** Browser extension for accessibility testing  
- **Google PageSpeed Insights:** Online performance testing  
- **Broken Link Checker:** Tool to find 404s (e.g., Dead Link Checker Chrome extension)

**Manual Testing:**

- **BrowserStack:** Test on real devices and browsers (paid)  
- **Responsively App:** Free desktop app for multi-device preview  
- **Keyboard Navigation:** Manually tab through all pages  
- **Screen Reader:** NVDA (Windows, free) or VoiceOver (Mac, built-in)

**Performance Testing:**

- **WebPageTest:** Detailed performance analysis (webpagetest.org)  
- **GTmetrix:** Performance monitoring  
- **Chrome DevTools:** Network throttling, coverage analysis

### 10.3 Staging Environment

**Vercel Provides:**

- Automatic preview deployments for each Git branch  
- Every pull request gets unique URL  
- Test changes before merging to production

**Process:**

1. Create feature branch (e.g., `feature/fiber-page`)  
2. Push to GitHub  
3. Vercel generates preview URL (e.g., `wave2wave-git-feature-fiber.vercel.app`)  
4. Team reviews preview  
5. Approve and merge to main  
6. Production auto-deploys

**Best Practice:**

- Use staging for content review before launch  
- Share preview links with stakeholders for approval  
- Test CRM integration in staging (use test endpoint if available)

---

## 11\. Launch Checklist

### 11.1 Pre-Launch (1 Week Before)

**Content Finalization:**

- [ ] All content reviewed and approved by Marketing  
- [ ] Legal review completed (certifications, claims accurate)  
- [ ] Client logo usage approved in writing  
- [ ] Final images provided and optimized  
- [ ] All placeholder images replaced

**Technical Preparation:**

- [ ] Final QA checklist completed (Section 10.1)  
- [ ] Redirect list finalized and tested  
- [ ] Environment variables set in Vercel production  
- [ ] Google Analytics tracking verified in staging  
- [ ] CRM integration tested end-to-end  
- [ ] Performance benchmarks met (Lighthouse ≥90)

**Stakeholder Approval:**

- [ ] CEO/Marketing Director sign-off  
- [ ] Sales team briefed on new structure  
- [ ] Support team updated on FAQ changes

### 11.2 Launch Day

**Deployment:**

- [ ] Merge final changes to main branch  
- [ ] Vercel auto-deploys to production  
- [ ] Verify deployment successful (check Vercel dashboard)

**Immediate Verification:**

- [ ] Visit wave2wave.io and confirm new site loads  
- [ ] Test navigation on desktop and mobile  
- [ ] Submit test contact form (use personal email)  
- [ ] Verify form submission reaches CRM  
- [ ] Check Google Analytics realtime report (confirm tracking)  
- [ ] Test 3-5 old URLs to confirm redirects work

**Monitoring:**

- [ ] Monitor Vercel logs for errors  
- [ ] Watch Google Analytics for traffic  
- [ ] Monitor CRM for form submissions  
- [ ] Set up uptime monitoring (e.g., UptimeRobot \- free)

### 11.3 Post-Launch (First 48 Hours)

**Issue Tracking:**

- [ ] Log any bugs reported by team or users  
- [ ] Prioritize and fix critical issues immediately  
- [ ] Document non-critical issues for future sprint

**Performance Monitoring:**

- [ ] Run Lighthouse on production site  
- [ ] Check Core Web Vitals in Google Search Console (takes a few days for data)  
- [ ] Monitor page load times via Vercel Analytics

**SEO:**

- [ ] Submit sitemap to Google Search Console  
- [ ] Request indexing for key pages (Search Console)  
- [ ] Monitor rankings for primary keywords (may take weeks)

**Analytics Review:**

- [ ] Compare traffic to previous week (expect potential dip during transition)  
- [ ] Check bounce rate and time-on-site metrics  
- [ ] Analyze top landing pages  
- [ ] Review contact form conversion rate

### 11.4 Post-Launch (First Month)

**Optimization:**

- [ ] A/B test CTAs (if desired)  
- [ ] Refine content based on user behavior (heatmaps, session recordings if available)  
- [ ] Address any performance bottlenecks

**SEO Monitoring:**

- [ ] Check Google Search Console for crawl errors  
- [ ] Monitor keyword rankings weekly  
- [ ] Update content if certain pages underperform

**Stakeholder Reporting:**

- [ ] Prepare 30-day report comparing pre/post metrics  
- [ ] Present to leadership (traffic, conversions, performance)  
- [ ] Gather feedback from Sales on lead quality

---

## 12\. Appendices

### 12.1 Content Sources

**Primary Source:**

- Wave2Wave Brochure (draft\_2025-11-11-single-column.docx)  
- Use technical specs, product descriptions, service explanations verbatim

**Secondary Source:**

- Current Wave2Wave.io website (wave2wave.io)  
- Extract company story, brand values, client testimonials

**Additional:**

- Create new transitional/navigational content as needed  
- Ensure all new content matches tone and style of brochure

### 12.2 Key Contacts

**Project Owner:** \[Name, Title\]  
**Marketing Lead:** \[Name\] \- Content approval  
**Technical Lead:** \[Name\] \- Development oversight  
**Sales Lead:** \[Name\] \- CRM requirements, lead quality feedback

### 12.3 Timeline Summary

| Phase | Duration | Milestones |
| :---- | :---- | :---- |
| Design System Setup | Week 1-2 | Component library, style guide |
| Core Pages Development | Week 3-4 | Solutions, Fiber, Ethernet, Company, Contact |
| Subpages Development | Week 5-6 | DC Twin, Hyperscalers, Patch Panels, Testing |
| QA & Content Review | Week 7 | Full QA checklist, stakeholder approval |
| Redirects & Launch Prep | Week 8 | Staging review, redirect implementation |
| Launch | Week 9 | Production deployment, monitoring |

### 12.4 Success Criteria

**User Experience:**

- Reduce bounce rate by 15%  
- Increase time-on-site by 25%  
- Improve pages-per-session by 30%

**Business Goals:**

- Increase contact form conversions by 20%  
- Achieve 50% increase in DC Twin page visits  
- Reduce support inquiries about navigation by 40%

**Technical Performance:**

- Lighthouse Performance ≥90  
- FCP \<1.5s, LCP \<2.5s, CLS \<0.1  
- Mobile-friendly test 100% pass

### 12.5 Post-Launch Iteration Plan

**Month 1:**

- Monitor analytics closely  
- Fix any critical bugs  
- Gather user feedback

**Month 2-3:**

- Implement minor improvements based on data  
- Consider adding blog or resources section (if desired)  
- Optimize underperforming pages

**Ongoing:**

- Quarterly content updates (new products, updated specs)  
- Annual design refresh (colors, typography) as needed  
- Continuous performance monitoring

---

## Document Revision History

| Version | Date | Author | Changes |
| :---- | :---- | :---- | :---- |
| 1.0 | Nov 2025 | \[Original Author\] | Initial PRD |
| 2.0 | Nov 2025 | \[Your Name\] | Complete rewrite with gap analysis integration: Added business context, design system, image specifications, performance benchmarks, QA checklist, and expanded technical implementation |

---

## Approval Signatures

**Project Owner:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_

**Marketing Lead:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_

**Technical Lead:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_

---

**END OF DOCUMENT**

Total Pages: \~50  
Total Word Count: \~25,000  
Estimated Reading Time: 90 minutes

This PRD is now ready to be provided to Claude Code or any development team for implementation.  

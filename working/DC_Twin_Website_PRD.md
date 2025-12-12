# DC Twin™ Engineering Services Website
## Product Requirements Document

**Version:** 1.0
**Date:** December 2025
**Section:** Engineering Services
**Platform:** Next.js + Vercel
**Target Launch:** Q1 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Menu Structure & Navigation](#menu-structure--navigation)
3. [Design System](#design-system)
4. [Page 1: Main Landing Page](#page-1-main-landing-page)
5. [Page 2: How It Works](#page-2-how-it-works)
6. [Page 3: Deliverables](#page-3-deliverables)
7. [Page 4: Case Studies](#page-4-case-studies)
8. [Page 5: Get Started](#page-5-get-started)
9. [SEO Strategy](#seo-strategy)
10. [Technical Implementation](#technical-implementation)
11. [Analytics & Tracking](#analytics--tracking)

---

## Overview

### Purpose

Create a comprehensive 5-page website section showcasing Wave2Wave's DC Twin™ engineering services. The site must educate technical audiences (data center engineers, infrastructure architects) on the value proposition, process, and deliverables while driving qualified leads to sales engagement.

### Target Audience

**Primary:**
- Data Center Network Engineers (need technical credibility)
- Infrastructure Architects (need process understanding)
- Procurement Managers (need deliverables clarity)

**Secondary:**
- C-level executives at hyperscale providers
- AI/HPC facility managers
- Enterprise IT Directors

### Business Goals

1. Generate 50+ qualified engineering service inquiries per quarter
2. Reduce sales cycle time by providing self-service education
3. Position Wave2Wave as technical authority in DC cabling engineering
4. Support $2M+ annual revenue target for DC Twin™ services

### Success Metrics

- **Traffic:** 2,000+ unique visitors/month to /engineering-services section
- **Engagement:** Average 3+ pages/session, 4+ minutes time-on-site
- **Conversion:** 5%+ form submission rate on /get-started page
- **Quality:** 60%+ of leads qualify as SQL (Sales Qualified Lead)

---

## Menu Structure & Navigation

### Recommended Menu Header

**Primary:** "Engineering Services"

**Alternatives Considered:**
- "Data Center Design" (too narrow, limits perceived scope)
- "DC Twin Solutions" (requires brand awareness first)

**Rationale:** "Engineering Services" is clear, professional, and positions the offering as a service (not just a product). It appeals to technical buyers who value engineering expertise.

### Site Hierarchy

```
Main Navigation > Engineering Services (dropdown)
├── Overview (links to /engineering-services)
├── How It Works (links to /engineering-services/process)
├── Deliverables (links to /engineering-services/deliverables)
├── Case Studies (links to /engineering-services/case-studies)
└── Get Started (links to /engineering-services/get-started)
```

### URL Structure

**Base URL:** `https://wave2wave.io/engineering-services`

**Subpages:**
- `/engineering-services` — Main landing page
- `/engineering-services/process` — How It Works
- `/engineering-services/deliverables` — What You Get
- `/engineering-services/case-studies` — Project Examples
- `/engineering-services/get-started` — Contact/Intake Form

**Breadcrumb Navigation:**
Display on all subpages: Home > Engineering Services > [Current Page]

### Internal Linking Strategy

- Landing page links to all 4 subpages
- Each subpage links to /get-started in CTA blocks
- Cross-link between Process → Deliverables → Case Studies where contextually relevant
- Link to relevant product pages (Fiber, Testing Tools) where mentioned

---

## Design System

### Color Palette

**Primary Colors:**
- **Electric Blue:** `#0072CE` (Buttons, links, headers, accents)
- **Dark Charcoal Gray:** `#333333` (Body text, dark sections)

**Neutral Colors:**
- **Text Dark:** `#1A1A1A` (Headings, primary text)
- **Text Medium:** `#4A4A4A` (Secondary text)
- **Text Light:** `#767676` (Captions, metadata)
- **Background White:** `#FFFFFF` (Primary background)
- **Background Light:** `#F5F5F5` (Alternate sections, cards)
- **Border Light:** `#E0E0E0` (Dividers, card borders)

**Usage Rules:**
- Use Electric Blue for all CTAs and interactive elements
- Dark Charcoal Gray for text-heavy sections and footer
- Maintain 4.5:1 contrast ratio minimum (WCAG AA compliance)
- Alternate white and light gray backgrounds for section variation

### Typography

**Font Family:**
```css
Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

**Type Scale:**
```
H1 (Page Titles):
  Desktop: 48px / 1.2 line-height / 700 weight
  Mobile: 32px / 1.2 line-height / 700 weight

H2 (Section Titles):
  Desktop: 36px / 1.3 line-height / 600 weight
  Mobile: 28px / 1.3 line-height / 600 weight

H3 (Subsection Titles):
  Desktop: 28px / 1.4 line-height / 600 weight
  Mobile: 24px / 1.4 line-height / 600 weight

Body Large: 18px / 1.6 line-height / 400 weight
Body Regular: 16px / 1.6 line-height / 400 weight
Body Small: 14px / 1.5 line-height / 400 weight
```

### Spacing & Layout

**Section Padding:**
- Desktop: 64px top/bottom
- Mobile: 32px top/bottom

**Container Max Width:**
- Content: 1200px (centered)
- Full-bleed images: 100% viewport width

**Grid System:**
- Desktop: 12-column grid with 24px gutters
- Mobile: Single column, 16px side padding

### Component Specifications

**Buttons:**
```
Primary CTA Button:
  Width: 200px (auto-width on mobile: 100%)
  Height: 48px
  Border Radius: 8px
  Font: 16px / 600 weight
  Background: Electric Blue (#0072CE)
  Text: White (#FFFFFF)
  Hover: Darken to #0052A3 with shadow lift
  Transition: all 0.2s ease
```

**Cards:**
```
Feature Card:
  Padding: 32px desktop / 24px mobile
  Border: 1px solid #E0E0E0
  Border Radius: 8px
  Background: White or #F5F5F5
  Shadow: 0 2px 8px rgba(0,0,0,0.06)
  Hover: Transform translateY(-4px), shadow increase
```

**Icons:**
```
Size: 48×48px for feature cards
Color: Electric Blue (#0072CE)
Format: SVG preferred
```

### Responsive Breakpoints

```
Mobile:   320px - 767px
Tablet:   768px - 1023px
Desktop:  1024px+
```

**Mobile Behaviors:**
- Single-column layouts
- Navigation collapses to hamburger menu
- Hero text scales down 33%
- Images stack vertically
- CTA buttons expand to full width

---

## Page 1: Main Landing Page

**URL:** `/engineering-services`

**Purpose:** Introduce DC Twin™, communicate value proposition, drive visitors deeper into site

**Word Count:** ~1,800 words

**SEO Meta:**
- **Title:** "DC Twin™ Engineering Services | Data Center Cabling Design | Wave2Wave"
- **Description:** "Transform your data center design into installation-ready cabling systems. DC Twin™ digital twin engineering delivers custom cables, documentation, and 50-75% faster deployment."
- **Keywords:** DC Twin, data center cabling engineering, digital twin cabling, custom cable design, data center infrastructure

---

### Hero Section

**Layout:** Full-width background image with centered text overlay

**Content:**

**H1:** DC Twin™ Engineering Services

**Subhead:** Design-Driven Cabling: transforming your 2D layouts and spreadsheets into digital twin models, custom-length cable kits, and port-level installation guides.

**CTA Button:** "See How It Works" → Links to `/engineering-services/process`

**Hero Image:**
`[FULL-BLEED BACKGROUND: 3D floor map visualization showing cable pathways through data center - Floor_Map_3D_View.png]`
- Dimensions: 1920×800px desktop, 768×500px mobile
- Dark overlay: 50% opacity for text readability
- Text color: White (#FFFFFF)
- Alt text: "DC Twin 3D digital twin model showing data center cable infrastructure design"

---

### Section 2: The Problem We Solve

**Layout:** Centered content with 3-column pain-point cards below

**Content:**

**H2:** Data Center Cabling Projects Shouldn't Be This Hard

Modern data center builds demand precision. Hundreds of racks, thousands of ports, and cable runs that must be exactly right. Traditional approaches rely on bulk catalog ordering, field measurements, and on-site labeling. The result? Wrong lengths requiring rework, mismatched connections causing delays, and field labeling errors that create troubleshooting nightmares. Your team knows the cost: **30-50% of installation time** wasted fixing problems that should never have happened.

**Pain-Point Cards (3 columns):**

**Card 1:**
**Icon:** 📏 (or custom icon: ruler/measurement tool)
**Title:** Wrong Lengths
**Text:** Catalog cables don't fit your pathways. Field measurements are error-prone. Rework wastes time and budget.

**Card 2:**
**Icon:** 🏷️ (or custom icon: label maker)
**Title:** Field Labeling Errors
**Text:** On-site labeling with label makers means typos, inconsistencies, and mystery cables six months later.

**Card 3:**
**Icon:** ⏱️ (or custom icon: clock/calendar)
**Title:** Installation Delays
**Text:** Sorting bulk cables, measuring, labeling, and troubleshooting connections doubles your deployment time.

**Design Notes:**
- Card background: Light Gray (#F5F5F5)
- Icons: 48×48px, Electric Blue (#0072CE)
- Cards have subtle hover effect (lift + shadow)

---

### Section 3: The DC Twin™ Approach

**Layout:** Two-column (60% text left, 40% visual right on desktop; stacked on mobile)

**Content:**

**H2:** We Engineer Your Complete Cabling System Before You Build It

You provide your rack layout (CAD/Visio) and configuration data (spreadsheet). We transform it into a precision-engineered cabling system, manufactured and delivered ready to install.

Using our **DC Twin™ platform**, we build a complete 3D digital twin of your infrastructure. Every cable path is routed through your actual overhead trays and floor pathways. Every length is calculated from real routing—not straight-line estimates. Every connection is mapped from source port to destination port.

You approve the design. We manufacture to specification. You install with confidence. It's that simple.

**Process Visual:**
`[DIAGRAM: Your Input → DC Twin™ → Your Output]`
- Left: Icons for spreadsheet + 2D floor plan (labeled "Your Design Data")
- Center: DC Twin™ logo or platform icon with arrow flow
- Right: 3D model rendering + labeled cable bundle photo (labeled "Installation-Ready System")
- Dimensions: 600×400px
- Alt text: "DC Twin engineering process transforms design data into installation-ready cable systems"

**Design Notes:**
- Visual positioned to right of text on desktop
- Visual stacks below text on mobile
- Use Electric Blue for arrows/process indicators

---

### Section 4: Key Deliverables

**Layout:** Grid of 7 cards (3-3-1 pattern on desktop; single column on mobile)

**Content:**

**H2:** Everything You Need to Install with Confidence

**Intro Text:** Every DC Twin™ engagement delivers a complete engineering package. No surprises. No hidden costs. One partner, complete accountability.

**Card Grid:**

**Card 1: 3D Digital Twin**
**Icon:** 🎯 (or custom: 3D cube)
Visualize every cable path before manufacturing. Identify conflicts, validate routing, approve design. Your 2D floor plan becomes a complete virtual environment.

**Card 2: Calculated Cable Lengths**
**Icon:** 📐 (or custom: measurement icon)
Manufactured in 3-inch increments to match your pathway design—not rounded to catalog lengths. Calculated from actual 3D routing, not straight-line guesses.

**Card 3: Complete BOM**
**Icon:** 📋 (or custom: checklist)
Full bill of materials with part numbers, quantities, specifications, and pricing. Organized for procurement. Single PO option available for simplified purchasing.

**Card 4: Single PO Part Number**
**Icon:** 🎫 (or custom: document)
Order your entire cabling infrastructure as one line item. Simplified procurement, single invoice, one delivery schedule.

**Card 5: Rack-Organized Shipping**
**Icon:** 📦 (or custom: box/shipping)
Cables packaged by rack for sequential installation. Box labels match your rack identifiers. Reduces on-site sorting time to zero.

**Card 6: Installation Guides**
**Icon:** 📝 (or custom: document with checkmarks)
Every cable documented: Rack A Port 12 → Rack B Port 47. Spreadsheet format for easy reference. Technicians follow the guide—no interpretation required.

**Card 7: Factory Test Reports**
**Icon:** ✓ (or custom: checkmark/certificate)
100% IL/RL testing for fiber, TDR for copper. Serialized results mapped to your design. Full traceability from manufacturing to installation.

**CTA Button:** "See Full Deliverables Details" → Links to `/engineering-services/deliverables`

**Design Notes:**
- Cards: White background, light border, 32px padding
- Icons: 48×48px, Electric Blue
- Card hover effect: subtle lift + shadow increase
- CTA button: Centered below grid

---

### Section 5: How It Works (Overview)

**Layout:** Horizontal timeline or numbered steps (6 steps)

**Content:**

**H2:** A Proven Engineering Process

**Intro Text:** From your design data to your loading dock in 3-4 weeks. Here's how DC Twin™ works.

**6-Step Process (Brief overview - full details on /process page):**

**1. Discovery** — You share your rack layout and configuration data
**2. Digital Twin Creation** — We build your complete 3D model
**3. Cable Path Routing** — Every cable routed through actual pathways
**4. Design Documentation** — BOM and installation guides generated
**5. Design Review** — You approve before manufacturing
**6. Manufacturing & Delivery** — Custom cables built, tested, and shipped

**Timeline Indicator:** "Typical project: 3-4 weeks from data to delivery"

**CTA Button:** "Learn the Complete Process" → Links to `/engineering-services/process`

**Design Notes:**
- Use horizontal timeline with connecting line (Electric Blue)
- Number badges for each step (white text on Electric Blue circles)
- Timeline responsive: horizontal on desktop, vertical on mobile

---

### Section 6: Case Study Teaser

**Layout:** Full-width section with dark background (Dark Charcoal Gray #333333)

**Content:**

**H2 (White text):** 80 Racks. 800+ Custom Cables. One Turnkey System.

**Text (White):**
See how we engineered a complete cabling infrastructure for a high-performance AI hyperscale deployment. 68 compute racks plus 12 spine switches. Custom fiber assemblies ranging from 39 to 106 feet. Single PO. Zero field labeling. 50-75% faster installation.

**Metric Callout Boxes (3 boxes, horizontal):**

**Box 1:**
**80** Racks
High-density compute infrastructure

**Box 2:**
**800+** Custom Cables
Precisely calculated lengths

**Box 3:**
**1** Purchase Order
Complete system, simplified procurement

**CTA Button (White outline button):** "Read the Full Case Study" → Links to `/engineering-services/case-studies`

**Background Image (Optional):**
`[SUBTLE BACKGROUND: 3D visualization or data center imagery at 20% opacity]`
- Alt text: N/A (decorative background)

**Design Notes:**
- Background: Dark Charcoal Gray (#333333)
- Text: White (#FFFFFF)
- Metric boxes: Electric Blue background with white text
- Button: White outline with white text, hovers to solid white with dark text

---

### Section 7: Why Wave2Wave

**Layout:** 4-column feature blocks (2×2 grid on mobile)

**Content:**

**H2:** Engineering-Grade Precision. Manufacturing Excellence. One Accountable Partner.

**Feature Blocks:**

**Block 1:**
**Icon:** 🔧 (or custom: engineering/tools)
**Title:** Engineering Company First
**Text:** We're not a cable broker—we're an engineering company that manufactures. DC Twin™ digital twin technology ensures design accuracy before production begins.

**Block 2:**
**Icon:** ⚡ (or custom: lightning/speed)
**Title:** Speed Without Compromise
**Text:** 3-4 week typical lead time from design to delivery. ISO 9001/14001 certified facilities with 100% test-and-trace capabilities.

**Block 3:**
**Icon:** 🎯 (or custom: target/precision)
**Title:** Custom Without Risk
**Text:** Every cable system engineered to exact specifications. Custom doesn't mean risky—it means precision matched to your infrastructure.

**Block 4:**
**Icon:** 🤝 (or custom: handshake/partnership)
**Title:** One Partner, Complete Accountability
**Text:** Single point of contact for design, engineering, manufacturing, testing, and delivery. We own the outcome from spreadsheet to installation.

**Design Notes:**
- Feature blocks: Light gray background (#F5F5F5), 32px padding
- Icons: 48×48px, Electric Blue
- Text: Dark gray (#1A1A1A for titles, #4A4A4A for body)

---

### Section 8: Final CTA

**Layout:** Full-width section with Electric Blue background

**Content:**

**H2 (White text):** Ready to Simplify Your Next Data Center Build?

**Text (White):** Share your rack layout and configuration data. We'll build your digital twin, calculate your cable requirements, and deliver a complete DC Twin™ engineering proposal—typically within days.

**CTA Button (White background, Electric Blue text):** "Get Started" → Links to `/engineering-services/get-started`

**Design Notes:**
- Background: Electric Blue (#0072CE)
- Text: White (#FFFFFF)
- Button: White background with Electric Blue text, hover reverses colors
- Section padding: 80px top/bottom desktop, 48px mobile

---

**Total Page Word Count:** ~1,800 words
**Images/Visuals:** 8 (hero, process diagram, 7 card icons, case study background, 4 feature icons)
**CTAs:** 4 (Hero, Deliverables link, Process link, Case Study link, Get Started)

---

## Page 2: How It Works

**URL:** `/engineering-services/process`

**Purpose:** Detailed walkthrough of DC Twin™ engineering process to build confidence and transparency

**Word Count:** ~1,400 words

**SEO Meta:**
- **Title:** "How DC Twin™ Works | Data Center Cabling Engineering Process | Wave2Wave"
- **Description:** "Step-by-step walkthrough of our DC Twin™ engineering process: from design data to 3D digital twin to custom-manufactured, installation-ready cable systems."
- **Keywords:** DC Twin process, data center cabling workflow, digital twin engineering, cable manufacturing process

---

### Hero Section

**H1:** How DC Twin™ Works

**Subhead:** A proven engineering process that transforms your design data into installation-ready infrastructure.

**Hero Image:**
`[IMAGE: 3D digital twin model screenshot showing full data center layout]`
- Dimensions: 1920×600px desktop, 768×400px mobile
- Alt text: "DC Twin 3D digital twin platform showing complete data center cable infrastructure model"

---

### Process Introduction

**Intro Text:**

DC Twin™ engineering isn't magic—it's rigorous methodology. We've refined this process over dozens of deployments ranging from 20-rack edge facilities to 200+ rack hyperscale builds. The result: predictable outcomes, transparent timelines, and installation-ready deliverables you can trust.

Here's exactly how it works, step by step.

---

### 7-Step Detailed Process

**(Each step follows this format: Step number, title, narrative, key activities list, timeline, image)**

---

#### Step 1: Discovery & Data Collection

**Narrative:**

The process begins with understanding your project. You share your rack layout—this could be a CAD file, Visio diagram, PDF, or even a hand-drawn sketch with dimensions. You also provide configuration data, typically in spreadsheet format, showing racks, switches, servers, and port assignments.

We review your documentation, ask clarifying questions about port requirements, pathway constraints, and timeline. Our engineering team identifies any gaps in the data and requests additional details if needed. This collaborative discovery phase ensures we have everything required to create an accurate digital twin.

**Key Activities:**
- Customer provides rack layout (CAD, Visio, PDF, or sketch)
- Customer provides configuration spreadsheet (racks, switches, ports)
- Wave2Wave engineering team reviews documentation
- Clarifying questions addressed via email or call
- Data gaps identified and resolved

**Typical Timeline:** 2-3 business days

**Image:**
`[SCREENSHOT: Sample customer input spreadsheet showing rack/switch/port configuration]`
- Dimensions: 800×500px
- Caption: "Example: Customer-provided configuration data showing rack layout and port assignments"
- Alt text: "Data center rack configuration spreadsheet with server and switch port assignments"

---

#### Step 2: Digital Twin Creation

**Narrative:**

With your data in hand, our engineers build a complete 3D model of your data center in the DC Twin™ platform. Every rack is positioned according to your floor plan. Cable trays, ladder racks, and floor pathways are modeled based on your layout. Switches, servers, and patch panels are placed within racks according to your configuration.

This isn't just a pretty visualization—it's a working engineering model. The digital twin becomes the foundation for all cable routing, length calculations, and documentation. Accuracy here determines success downstream.

**Key Activities:**
- 3D data center environment created in DC Twin™ platform
- Rack positions modeled from floor plan with precise coordinates
- Cable trays, pathways, and routing infrastructure mapped
- Switches, servers, and equipment placed within racks
- Initial validation of model accuracy against source data

**Typical Timeline:** 5-7 business days

**Image:**
`[SCREENSHOT: 3D model in DC Twin platform showing rack layout and infrastructure]`
- Dimensions: 1000×600px
- Caption: "DC Twin™ 3D model showing rack positions, cable trays, and infrastructure pathways"
- Alt text: "DC Twin platform 3D digital twin model of data center with rack and cable pathway layout"

---

#### Step 3: Cable Path Routing

**Narrative:**

Now comes the precision engineering. Every cable in your design is routed through the 3D model along actual physical pathways. Fiber trunks are routed from spine switches through overhead ladder rack to compute racks. Management cables follow different paths. Power connections take the most direct routes while avoiding interference.

The platform calculates cable lengths based on these routed paths—not straight-line distances. It accounts for vertical drops, horizontal runs, service loops, strain relief, and connector offsets. The result: cable lengths accurate to within 3 inches of what's actually needed in the field.

**Key Activities:**
- Every cable routed through 3D model along actual pathways
- Length calculations based on routed distance (not straight-line)
- Service loops and strain relief factored into lengths
- Cable types assigned (fiber trunk, fanout, copper, power)
- Pathway conflicts identified and resolved digitally

**Typical Timeline:** Included in Step 2 (5-7 days total for modeling + routing)

**Image:**
`[SCREENSHOT: 3D view showing cable bundles routed through overhead trays]`
- Dimensions: 1000×600px
- Caption: "Cable routing visualization showing fiber trunk paths through overhead infrastructure"
- Alt text: "3D visualization of cable routing paths through data center overhead cable trays"

---

#### Step 4: Design Documentation

**Narrative:**

With all cables routed and calculated, the platform generates complete project documentation. The bill of materials (BOM) lists every cable with part number, quantity, length, and specifications. The installation guide documents every connection: source rack, source port, cable ID, destination rack, destination port.

This documentation is reviewed internally for accuracy and completeness before customer presentation. Our engineering team verifies that cable counts match port requirements, lengths are manufacturable, and the design meets industry standards.

**Key Activities:**
- Complete BOM generated with all cable specifications
- Installation guide created showing port-to-port connections
- Test documentation templates prepared
- Internal engineering review for accuracy
- Pricing calculated based on specifications and quantities

**Typical Timeline:** 2-3 business days

**Image:**
`[SCREENSHOT: Installation guide spreadsheet showing connection table]`
- Dimensions: 1000×500px
- Caption: "Installation guide excerpt showing rack-to-rack cable connections with port assignments"
- Alt text: "Cable installation guide spreadsheet showing source and destination rack and port assignments"

---

#### Step 5: Design Review

**Narrative:**

You receive the complete design package: 3D model access or screenshots, full BOM with pricing, installation guide preview, and project timeline. This is your opportunity to review, question, and request changes. Need to add racks? Adjust a pathway? Change cable types? We refine the design digitally until you're confident it's exactly right.

Once approved, the design is locked and moves to manufacturing. No surprises. No field changes. What you approve is what you'll receive.

**Key Activities:**
- Customer receives 3D model access/screenshots
- Complete BOM with pricing shared
- Installation guide preview provided
- Customer reviews and provides feedback
- Design refined based on customer input
- Final approval obtained before manufacturing

**Typical Timeline:** 3-5 business days (depends on customer review cycle)

**Image:**
`[SCREENSHOT: Example design review package (composite showing BOM + 3D view + guide)]`
- Dimensions: 1200×600px
- Caption: "Design review package includes 3D model, BOM, and installation guide documentation"
- Alt text: "DC Twin design review package showing BOM, 3D visualization, and installation documentation"

---

#### Step 6: Manufacturing & Testing

**Narrative:**

With design approval, manufacturing begins. Custom cables are built to the exact calculated lengths—not rounded to catalog sizes. Fiber assemblies are terminated in our ISO-certified facilities. Every cable is factory-labeled with rack, port, and circuit identifiers using durable, professional labels (not hand-written).

Before shipment, every cable assembly is 100% tested. Fiber cables undergo insertion loss (IL) and return loss (RL) testing per TIA-568 standards. Copper cables are TDR-tested for length and continuity. Test results are documented by serial number and mapped to your installation guide. Issues surface at the factory—not in your data center.

**Key Activities:**
- Custom cables manufactured to calculated lengths (3-inch increments)
- Factory termination in ISO 9001/14001 certified facilities
- Factory labeling applied (rack, port, circuit identifiers)
- 100% IL/RL testing for fiber assemblies
- TDR testing for copper cables
- Test results documented and serialized
- Cables organized into rack-specific kits

**Typical Timeline:** 2-3 weeks

**Image:**
`[PHOTO: Cable bundles with Wave2Wave factory labels clearly visible]`
- Dimensions: 800×600px
- Caption: "Factory-labeled cable assemblies ready for installation with rack and port identifiers"
- Alt text: "Wave2Wave custom cable assemblies with factory-applied rack and port labels"

---

#### Step 7: Delivery & Installation Support

**Narrative:**

Rack-organized kits ship to your site with complete documentation. Each box is labeled with the rack identifier from your design. Your installation team opens the box for Rack A, follows the installation guide, and connects cables. Move to Rack B. Repeat. No sorting. No labeling. No interpretation.

We remain available throughout your installation. Questions about a cable? Need clarification on a connection? We're a phone call or email away. Because we engineered the system, we can answer any question about any cable instantly.

**Key Activities:**
- Cables packaged by rack for sequential installation
- Boxes labeled with rack identifiers
- Complete documentation package included (BOM, guides, test reports)
- Shipment tracking provided
- Installation support available via phone/email
- Post-installation consultation offered

**Typical Timeline:** 1-2 days shipping (domestic), 3-7 days (international)

**Image:**
`[PHOTO: Packaged shipping box with rack label visible]`
- Dimensions: 600×600px
- Caption: "Rack-organized cable kits ready for shipment with clear rack identifiers"
- Alt text: "Packaged Wave2Wave cable kit labeled for specific rack installation"

---

### Process Summary

**H2:** The Result: Predictable Outcomes, Faster Deployments

**Text:**

Total timeline from design data to delivery: **3-4 weeks** for most projects. Compare this to 8-12 weeks for traditional field-terminated systems or bulk catalog orders with on-site customization.

Installation time: **50-75% faster** than traditional approaches. Your team spends time connecting cables, not measuring, labeling, or troubleshooting.

Error rate: **Near zero**. Factory labeling, 100% testing, and port-level documentation eliminate the guesswork that causes field errors.

---

### Final CTA Section

**H2:** See What's Included in Your Deliverables

**Text:** Every DC Twin™ project delivers a complete package of engineering documentation, custom cables, and test reports. See the full list of deliverables.

**CTA Button:** "View Complete Deliverables" → Links to `/engineering-services/deliverables`

---

**Total Page Word Count:** ~1,400 words
**Images/Visuals:** 8 (hero, 7 process step images)
**CTAs:** 2 (Hero breadcrumb back, Deliverables link)

---

## Page 3: Deliverables

**URL:** `/engineering-services/deliverables`

**Purpose:** Detailed explanation of every deliverable included in DC Twin™ engagement

**Word Count:** ~1,500 words

**SEO Meta:**
- **Title:** "DC Twin™ Engineering Deliverables | Complete Package | Wave2Wave"
- **Description:** "See everything included: 3D digital twin, calculated cable lengths, complete BOM, installation guides, factory test reports. Complete engineering package for data center cabling."
- **Keywords:** DC Twin deliverables, data center cabling documentation, 3D digital twin, cable installation guides, factory test reports

---

### Hero Section

**H1:** Complete Engineering Deliverables

**Subhead:** Everything you need to install with confidence—from 3D visualization to serialized test reports.

**Hero Image:**
`[COLLAGE: 2x2 grid showing deliverable samples - 3D model, BOM, installation guide, test report]`
- Dimensions: 1920×600px desktop, 768×400px mobile
- Alt text: "DC Twin engineering deliverables including 3D model, BOM, installation guide, and test reports"

---

### Introduction

**Text:**

DC Twin™ isn't just custom cables—it's a complete engineering package. Every engagement delivers documentation, visualization, specifications, and test data. You receive everything needed to procure, install, troubleshoot, and audit your cabling infrastructure.

No hidden costs. No add-on fees. This is the standard package, included in every DC Twin™ project.

---

### Deliverables (7 Expandable Sections)

**(Each deliverable follows this format: Icon, Title, Description, "What's Included" list, "Why It Matters" text, Example image)**

---

#### Deliverable 1: 3D Digital Twin

**Icon:** 🎯 (or custom: 3D cube icon, 64×64px, Electric Blue)

**Description:**

Your complete data center modeled in three dimensions before a single cable is manufactured. The digital twin shows rack positions, cable trays, overhead pathways, and equipment placement according to your design. Every cable is visualized as it will be routed through the physical infrastructure.

This isn't a static image—it's a working engineering model. You can view it from any angle, zoom into specific areas, and validate that the design matches your expectations. Identify potential pathway conflicts, verify equipment positioning, and confirm cable routing before committing to production.

**What's Included:**
- Full 3D model of your data center infrastructure
- Rack positions with exact coordinates from floor plan
- Cable tray and pathway modeling
- Equipment placement within racks (switches, servers, patch panels)
- Cable routing visualization showing every trunk and connection
- Model screenshots or viewer access for review

**Why It Matters:**

Virtual validation eliminates physical rework. If there's a pathway conflict or routing issue, we discover it during engineering—not during installation. Changes cost minutes in software; they cost hours in the field.

**Example Image:**
`[SCREENSHOT: 3D digital twin model showing full data center layout with cable pathways visible]`
- Dimensions: 1000×600px
- Caption: "3D digital twin model showing data center infrastructure with cable routing visualization"
- Alt text: "DC Twin 3D model of data center with rack layout and overhead cable pathway routing"

---

#### Deliverable 2: Cable Length Calculations

**Icon:** 📐 (or custom: measurement/ruler icon, 64×64px, Electric Blue)

**Description:**

Every cable length calculated from the routed pathway in the 3D model—not from straight-line distance or guesswork. The DC Twin™ platform traces each cable through overhead trays, down vertical drops, across floor pathways, and into racks. It accounts for service loops, strain relief, connector offsets, and best-practice cable management.

Cables are manufactured to these calculated lengths in 3-inch increments. Not rounded to the nearest foot. Not "close enough." Exact.

**What's Included:**
- Length calculation spreadsheet for every cable
- Routed distance vs. straight-line comparison (shows methodology)
- Service loop and strain relief allowances documented
- Manufacturing specifications (cut length, termination points)
- Cable ID mapped to installation guide for traceability

**Why It Matters:**

Precision fit means faster installation and cleaner cable management. Too-short cables require expensive rework and delay go-live. Too-long cables create spaghetti messes that impede airflow and future maintenance. Calculated lengths solve both problems.

**Example Image:**
`[SCREENSHOT: Cable length calculation spreadsheet showing Cable ID, Source, Destination, Calculated Length columns]`
- Dimensions: 1000×500px
- Caption: "Cable length calculations showing routed distance and manufacturing specifications"
- Alt text: "Spreadsheet showing cable length calculations with source, destination, and calculated distances"

---

#### Deliverable 3: Complete Bill of Materials

**Icon:** 📋 (or custom: checklist/document icon, 64×64px, Electric Blue)

**Description:**

Comprehensive BOM listing every cable assembly with part numbers, quantities, specifications, and pricing. Organized for procurement: fiber trunks grouped separately from copper bundles, management cables listed distinctly from spine interconnects.

Need to order? Send the BOM to accounting. Need to budget? The BOM has line-item pricing. Need to verify what was shipped? Cross-reference the BOM against packing lists.

**What's Included:**
- Complete part number list with Wave2Wave SKUs
- Quantities for every cable assembly
- Technical specifications (fiber type, connector type, length, cable construction)
- Unit pricing and extended pricing
- Organized by cable category (fiber trunks, fanouts, copper, power)
- Optional: Single PO part number for complete system

**Why It Matters:**

Simplified procurement. One BOM. One quote. One PO. Traditional approaches require ordering from multiple vendors, managing multiple quotes, tracking multiple shipments. DC Twin™ consolidates everything into a single, accountable package.

**Example Image:**
`[SCREENSHOT: BOM spreadsheet showing Part Number, Description, Qty, Unit Price, Extended Price columns]`
- Dimensions: 1000×600px
- Caption: "Bill of materials showing complete cable system with part numbers, quantities, and pricing"
- Alt text: "Cable system bill of materials spreadsheet with part numbers, quantities, and pricing"

---

#### Deliverable 4: Rack-Organized Shipping

**Icon:** 📦 (or custom: shipping box icon, 64×64px, Electric Blue)

**Description:**

Cables packaged by rack for sequential installation. All cables for Rack A ship in one box labeled "Rack A." All cables for Rack B ship in a separate box labeled "Rack B." Your installation team works rack by rack, opening boxes as needed, with zero time wasted sorting through bulk cable spools.

This isn't just convenient—it's transformative for large deployments. Imagine a 100-rack data center: instead of sorting through 1,000+ cables, your team opens the box for the rack they're installing and finds exactly what they need.

**What's Included:**
- Cables grouped by rack identifier
- Box labels matching your rack naming convention
- Packing lists per box showing contents
- Installation guide included with each rack kit
- Boxes numbered for installation sequence (optional)

**Why It Matters:**

Eliminates sorting time on-site. Reduces installation errors (wrong cable for wrong rack). Enables parallel installation teams (multiple crews can work simultaneously without interfering). Dramatically speeds deployment.

**Example Image:**
`[PHOTO: Shipping box with clear rack label visible - "RACK A-12"]`
- Dimensions: 800×600px
- Caption: "Rack-organized cable kit with clear identifier for sequential installation"
- Alt text: "Packaged cable kit labeled for specific rack with Wave2Wave shipping label"

---

#### Deliverable 5: Port-Level Installation Guides

**Icon:** 📝 (or custom: document with connection diagram icon, 64×64px, Electric Blue)

**Description:**

Every cable connection documented in spreadsheet format: Source Rack, Source Port, Cable ID, Destination Rack, Destination Port. Organized by rack for ease of use during installation. Technicians open the guide for Rack A, locate Cable ID C-001, see it connects from Rack A Port 12 to Rack B Port 47, plug it in, check it off, move to the next line.

No interpretation required. No field decisions. No ambiguity. Just follow the guide.

**What's Included:**
- Port-to-port connection table for every cable
- Organized by rack for sequential installation
- Cable ID cross-referenced to physical labels on cables
- Connector type and polarity specified (for fiber)
- Additional notes for complex connections (e.g., "Use keystone adapter")

**Why It Matters:**

Foolproof installation. Technicians don't need to be engineers—they just need to be able to match labels to ports. Reduces skilled labor requirements, eliminates interpretation errors, enables junior staff or contractors to install confidently.

**Example Image:**
`[SCREENSHOT: Installation guide spreadsheet showing Source Rack, Source Port, Cable ID, Dest Rack, Dest Port columns]`
- Dimensions: 1000×500px
- Caption: "Installation guide showing port-to-port cable connections for rack-by-rack deployment"
- Alt text: "Cable installation guide spreadsheet with source and destination rack and port assignments"

---

#### Deliverable 6: Factory Test Reports

**Icon:** ✓ (or custom: checkmark/certificate icon, 64×64px, Electric Blue)

**Description:**

100% testing before shipment. Every fiber cable undergoes insertion loss (IL) and return loss (RL) testing per TIA-568 and IEC standards. Copper cables are TDR-tested for length, continuity, and performance. Test results are documented by cable serial number and organized to match your installation guide.

If a cable fails testing, it's replaced before shipment. Issues surface at the factory—not in your data center.

**What's Included:**
- Test results for every cable assembly (IL/RL for fiber, TDR for copper)
- Organized by cable serial number
- Serial number cross-referenced to Cable ID in installation guide
- Test equipment specifications and calibration data
- Pass/fail indicators with threshold values
- Technician signature and test date

**Why It Matters:**

Complete traceability and verification. If you have a connectivity issue post-installation, you can cross-reference the test report to eliminate cable quality as a variable. Insurance for your infrastructure. Confidence that what shipped meets specifications.

**Example Image:**
`[SCREENSHOT: Test report spreadsheet showing Cable ID, Serial Number, IL (dB), RL (dB), Pass/Fail columns]`
- Dimensions: 1000×600px
- Caption: "Factory test report showing insertion loss and return loss results for fiber assemblies"
- Alt text: "Cable test report spreadsheet showing IL/RL test results with pass/fail indicators"

---

#### Deliverable 7: Product Drawings & Specifications

**Icon:** 🔧 (or custom: technical drawing/blueprint icon, 64×64px, Electric Blue)

**Description:**

Detailed engineering drawings for every cable assembly design. For fiber: fiber mapping showing which strand connects where, connector types and orientations, polarity confirmation (Method A/B/C). For copper: pinout diagrams, cable construction specs, shielding details. These drawings serve as reference documentation for your records and future troubleshooting.

**What's Included:**
- Technical drawings for each cable assembly type
- Fiber mapping diagrams (strand-to-strand connections)
- Connector specifications and part numbers
- Polarity method documentation (for MTP/MPO cables)
- Cable construction details (jacket type, fiber count, shielding)
- Compliance certifications (TIA, IEC, RoHS)

**Why It Matters:**

Enables future maintenance and troubleshooting. If you need to re-order a cable assembly in two years, the drawing has all specifications. If you're troubleshooting a connection, the fiber mapping shows exactly how it's wired. Documentation that outlives the installation.

**Example Image:**
`[TECHNICAL DRAWING: Cable assembly diagram showing fanout design, connector layout, fiber mapping]`
- Dimensions: 1000×700px
- Caption: "Product drawing showing MTP fanout assembly design with fiber strand mapping"
- Alt text: "Technical drawing of MTP fanout cable assembly showing connector layout and fiber mapping"

---

### Summary Section

**H2:** One Package. Complete Accountability.

**Text:**

These seven deliverables aren't extras—they're standard. Every DC Twin™ engagement delivers this complete package. No hidden costs. No add-on fees. One partner who owns engineering, manufacturing, testing, documentation, and delivery.

Compare this to traditional approaches where you piece together vendors: one for design, one for manufacturing, one for testing, one for documentation. With DC Twin™, it's all integrated, all accountable, all from Wave2Wave.

---

### Final CTA Section

**H2:** See DC Twin™ in Action

**Text:** Real projects. Real results. See how we've delivered complete engineering packages for complex data center deployments.

**CTA Button:** "View Case Studies" → Links to `/engineering-services/case-studies`

---

**Total Page Word Count:** ~1,500 words
**Images/Visuals:** 8 (hero, 7 deliverable example images)
**CTAs:** 2 (Hero breadcrumb back, Case Studies link)

---

## Page 4: Case Studies

**URL:** `/engineering-services/case-studies`

**Purpose:** Provide social proof and detailed project example to build credibility

**Word Count:** ~1,000 words

**SEO Meta:**
- **Title:** "DC Twin™ Case Studies | Data Center Cabling Projects | Wave2Wave"
- **Description:** "See DC Twin™ engineering in action: 80-rack AI hyperscale deployment with 800+ custom fiber assemblies, single PO, and 50-75% faster installation."
- **Keywords:** DC Twin case studies, data center cabling projects, AI infrastructure cabling, hyperscale deployment, fiber optic installation

---

### Hero Section

**H1:** DC Twin™ in Action

**Subhead:** See how we've engineered cabling systems for complex data center deployments.

**Hero Image:**
`[3D VISUALIZATION: Floor map view showing full deployment]`
- Dimensions: 1920×600px desktop, 768×400px mobile
- Alt text: "DC Twin 3D model of large-scale data center deployment showing cable infrastructure"

---

### Featured Case Study: AI Hyperscale Deployment

**Layout:** Long-form case study with multiple sections and image gallery

---

#### Project Overview

**H2:** 80-Rack AI Compute Infrastructure

**Narrative:**

A high-performance AI/ML facility required precision cabling for 68 high-density compute racks plus 12 spine switch racks. The deployment demanded thousands of optical connections across complex overhead pathways with zero margin for error—downtime costs measured in thousands of dollars per minute.

The customer provided rack configuration spreadsheets and a 2D CAD floor layout. Wave2Wave engineered the complete cabling infrastructure using DC Twin™, delivered as a turnkey system, and enabled installation in a fraction of traditional deployment time.

**Project Specifications:**

**Facility Type:** AI/ML Hyperscale Compute
**Scale:** 80 total racks (68 compute + 12 spine switches)
**Complexity:** High-density optical interconnects, overhead pathway routing
**Timeline:** 3.5 weeks from design data to delivery

**Customer-Provided Inputs:**
- Rack configuration spreadsheet (Excel format with port assignments)
- 2D CAD floor layout showing rack positions and dimensions
- Cable tray pathway information
- Port requirement specifications (fiber types, connector types)

**Image:**
`[SCREENSHOT: Partial view of customer-provided rack configuration spreadsheet - anonymized]`
- Dimensions: 1000×500px
- Caption: "Customer-provided rack configuration data used as input for DC Twin modeling"
- Alt text: "Sample rack configuration spreadsheet showing server and switch layout data"

---

#### The Challenge

**H3:** Precision Required at Scale

**Challenges List:**

**✗ 800+ individual cable assemblies required**
Every compute rack connecting to multiple spine switches across varied distances. Traditional catalog ordering impossible—no fixed lengths would fit.

**✗ Overhead pathway complexity**
Cable trays routed through raised ceiling with multiple elevation changes, turns, and penetrations. Straight-line distance calculations would fail.

**✗ High-density port mapping**
Thousands of individual port-to-port connections requiring perfect documentation. Field labeling not feasible at this scale.

**✗ Compressed timeline**
Customer needed cabling delivered and installed within 5 weeks of project kickoff to meet facility go-live date.

**✗ Zero-error requirement**
AI workloads require full bandwidth with no degraded connections. Every cable had to meet IL/RL specifications with complete traceability.

---

#### Our Approach

**H3:** DC Twin™ Engineering Solution

**Process Narrative:**

Wave2Wave's engineering team built a complete 3D digital twin of the facility in 5 business days. Every rack was positioned according to the floor plan. Cable trays, overhead pathways, and vertical drops were modeled. All 68 compute racks and 12 spine switches were placed with equipment mapped to specific rack units.

Every cable was then routed through the 3D model along actual overhead pathways. Fiber trunks from spine switches followed cable trays with calculated elevation changes, horizontal runs, and vertical drops to compute racks. Management connections took separate pathways. The platform calculated precise lengths for all 800+ assemblies, accounting for service loops and connector offsets.

The customer reviewed the 3D model, complete BOM with pricing, and installation guide previews. After one design refinement (adding 4 additional management connections), the design was approved for manufacturing.

**Image:**
`[SCREENSHOT: 3D digital twin showing full rack layout with cable pathway routing visible]`
- Dimensions: 1200×700px
- Caption: "DC Twin 3D model showing 80-rack layout with overhead fiber trunk routing"
- Alt text: "3D digital twin model of AI hyperscale deployment with rack layout and cable routing"

---

#### What We Delivered

**H3:** Complete Turnkey Cabling System

**Deliverables List with Quantities:**

**✓ 800+ Custom Fiber Assemblies**
- 96 custom 16×12F MTP trunk bundles (lengths 39 to 106 feet)
- 24 MTP bundles for spine-to-spine interconnects
- 20 LC duplex bundles for management network

**✓ Complete 3D Digital Twin**
Full interactive model with all cable paths visualized and documented

**✓ Rack-Specific Installation Guides**
12 separate guides (one per spine switch rack) showing every connection to compute racks

**✓ Factory Test Documentation**
100% IL/RL testing completed with serialized results for every fiber assembly

**✓ Single Purchase Order**
Entire cable infrastructure ordered as one line item, simplifying procurement

**✓ Rack-Organized Kitting**
Cables packaged by destination rack for sequential installation

**Image Gallery (3 images horizontal):**
`[IMAGE 1: Physical photo of MTP trunk bundle with labels visible]`
- Dimensions: 600×400px
- Caption: "Custom MTP trunk bundles with factory-applied rack and port labels"

`[IMAGE 2: Installation guide spreadsheet screenshot]`
- Dimensions: 600×400px
- Caption: "Port-level installation guide showing spine-to-compute connections"

`[IMAGE 3: Test report excerpt]`
- Dimensions: 600×400px
- Caption: "Factory test report showing IL/RL results for fiber assemblies"

---

#### Results & Impact

**H3:** Faster Deployment, Zero Errors, Complete Traceability

**Results Metrics:**

**50-75% Faster Installation**
Rack-organized kits with pre-labeled cables and port-level guides eliminated sorting, measuring, and on-site labeling. Installation team completed cabling in 4 days (vs. 10-14 days estimated for traditional approach).

**Zero Field Labeling Required**
Every cable shipped with durable factory labels showing rack and port identifiers. Technicians matched labels to ports—no label makers, no handwriting, no errors.

**Single PO Procurement**
Entire cabling infrastructure ordered as one line item. Simplified purchasing, single invoice, one delivery schedule. Customer avoided managing multiple vendors and shipments.

**Complete Traceability**
Every cable documented from design through manufacturing to test results to installed location. Full audit trail for compliance and future maintenance.

**On-Time Facility Go-Live**
Zero cable-related delays. No field rework. No troubleshooting mystery connections. Infrastructure ready on schedule.

**Quote Callout (Optional):**
> "DC Twin eliminated the traditional chaos of large-scale cabling deployments. Our team installed with confidence because every cable was documented, tested, and labeled perfectly."
> — *Senior Network Engineer, AI Hyperscale Facility*

*(Note: If customer permits testimonial, replace with actual quote and attribution. Otherwise, remove.)*

**Image:**
`[PHOTO: Installed cable bundles in overhead tray showing clean organization]`
- Dimensions: 1000×600px
- Caption: "Installed fiber trunks showing clean cable management enabled by calculated lengths"
- Alt text: "Overhead cable tray with organized fiber trunk bundles in AI data center installation"

---

### Technical Specifications Sidebar

**(Optional sidebar or expandable section with detailed specs)**

**Deployment Specifications:**
- **Cable Types:** OM4 50/125µm multimode fiber
- **Trunk Configuration:** 16×12F MTP-MPO (base-12)
- **Connector Types:** MTP (male/female per Method B polarity)
- **Cable Lengths:** 39 feet (minimum) to 106 feet (maximum)
- **Test Standards:** TIA-568.3-D, IEC 61280-4-1
- **IL Performance:** <0.35dB average insertion loss
- **RL Performance:** >20dB return loss (all assemblies)
- **Manufacturing:** ISO 9001/14001 certified facility
- **Lead Time:** 3.5 weeks design to delivery

---

### Additional Case Studies (Placeholder Section)

**H2:** More Projects Coming Soon

**Text:**

We're working with clients to publish additional case studies showcasing DC Twin™ engineering across different deployment types: enterprise edge facilities, hyperscale expansions, colocation builds, and GPU cluster installations. Check back for updates.

**Note for Implementation:** This placeholder allows room for future case studies without leaving the page feeling incomplete with only one example.

---

### Final CTA Section

**H2:** Ready to See What DC Twin™ Can Do for Your Project?

**Text:** Share your rack layout and configuration data. We'll scope your engineering engagement and provide a detailed proposal.

**CTA Button:** "Get Started" → Links to `/engineering-services/get-started`

---

**Total Page Word Count:** ~1,000 words
**Images/Visuals:** 7 (hero, 1 spreadsheet, 1 3D model, 3 gallery images, 1 installation photo)
**CTAs:** 2 (Hero breadcrumb back, Get Started)

---

## Page 5: Get Started

**URL:** `/engineering-services/get-started`

**Purpose:** Capture project information and initiate sales engagement

**Word Count:** ~600 words

**SEO Meta:**
- **Title:** "Get Started with DC Twin™ | Request Engineering Proposal | Wave2Wave"
- **Description:** "Share your rack layout and configuration data. Receive a DC Twin™ engineering proposal within days. Free project scoping for data center cabling infrastructure."
- **Keywords:** DC Twin request proposal, data center cabling quote, engineering services contact, cable project scoping

---

### Hero Section

**H1:** Let's Scope Your Project

**Subhead:** Share your project details and we'll provide a DC Twin™ engineering proposal—typically within days.

**Hero Image:**
`[SUBTLE BACKGROUND: Light abstract pattern or faded 3D visualization, not prominent]`
- Should not distract from form
- Optional: omit hero image entirely on this page for form focus

---

### Introduction Section

**Text:**

DC Twin™ engineering isn't right for every project—and that's okay. It's designed for deployments where precision, documentation, and installation speed matter. If you have 20+ racks, complex interconnections, or tight timelines, let's talk.

Share your project information below. Our engineering team will review, ask any clarifying questions, and provide a detailed proposal including scope, deliverables, timeline, and pricing. No obligation. No pressure.

---

### What to Have Ready

**H2:** Before You Submit

**Checklist:**

**✓ Rack Layout**
CAD file, Visio diagram, PDF, or even a hand-drawn sketch with dimensions. We need to know where racks are positioned.

**✓ Configuration Data**
Spreadsheet showing racks, switches, servers, and port assignments. This tells us what needs to connect to what.

**✓ Port Requirements**
Fiber types (MTP, LC, SC), copper needs (Cat6a, Cat8, DAC), and any special assemblies or custom requirements.

**✓ Timeline**
Target installation date or procurement schedule. This helps us plan manufacturing capacity.

**Don't have all of this yet?** That's fine. Submit what you have, and we'll work with you to fill in the gaps during our scoping conversation.

---

### Contact Form

**Form Fields:**

**(All fields full-width, stacked vertically, with clear labels and placeholders)**

**Name** (Required)
- Input type: Text
- Placeholder: "Your full name"

**Email** (Required)
- Input type: Email
- Placeholder: "your.email@company.com"

**Company** (Required)
- Input type: Text
- Placeholder: "Company name"

**Phone** (Optional)
- Input type: Tel
- Placeholder: "+1 (555) 123-4567"

**Number of Racks** (Optional but helpful)
- Input type: Number
- Placeholder: "Estimated rack count"

**Project Type** (Optional dropdown)
- Options: "New Data Center Build", "Expansion/Upgrade", "Colocation Deployment", "AI/HPC Facility", "Edge Deployment", "Other"

**Project Description** (Required)
- Input type: Textarea
- Placeholder: "Describe your project: rack count, types of equipment, interconnection requirements, timeline, any special constraints..."
- Min height: 150px

**File Upload** (Optional)
- Accept: .pdf, .dwg, .dxf, .vsd, .xlsx, .xls, .png, .jpg
- Max size: 25MB per file
- Multiple files: Yes (up to 5 files)
- Label: "Upload rack layout, configuration data, or any relevant documents"

**Timeline** (Optional dropdown)
- Options: "<30 days", "1-3 months", "3-6 months", "6+ months", "Just exploring"

**How Did You Hear About Us?** (Optional dropdown)
- Options: "Google Search", "Trade Show", "Referral", "LinkedIn", "Industry Publication", "Existing Customer", "Other"

**Submit Button**
- Text: "Request Proposal"
- Style: Primary CTA button (Electric Blue, 200px width desktop, 100% mobile)

**Form Behavior:**
- Client-side validation for required fields
- Email format validation
- File size/type validation before upload
- Loading state during submission ("Sending...")
- Success message: "Thank you! We've received your request and will respond within 1-2 business days."
- Error handling: Display field-specific errors inline

**Privacy Note (below form):**
*Your information is used solely for responding to your inquiry. We do not sell or share contact data. See our [Privacy Policy](#) for details.*

---

### Alternative Contact Section

**H2:** Prefer to Talk?

**Text:**

Reach us directly via phone or email. We're available Monday-Friday, 8 AM - 6 PM ET.

**Contact Details:**

**Phone:** +1-866-473-2701
**Email:** sales@wave2wave.io

**Business Hours:** Monday-Friday, 8:00 AM - 6:00 PM ET

---

### FAQ Section

**H2:** Common Questions

**(Expandable accordion or simple Q&A list)**

**Q: What's the typical cost for a DC Twin™ engagement?**
A: Pricing depends on project size and complexity. A 50-rack deployment typically ranges from $X,XXX to $XX,XXX including engineering, manufacturing, testing, and delivery. We provide detailed quotes after scoping your project.

*(Note: Insert actual pricing guidance or remove specific numbers if pricing varies too widely.)*

**Q: How long does the process take?**
A: Typical timeline is 3-4 weeks from design data to delivery. This includes engineering (1 week), customer review (3-5 days), and manufacturing (2-3 weeks). Rush options available for urgent projects.

**Q: Do you work with projects outside the US?**
A: Yes. We serve customers globally. International projects may have extended shipping times, but the engineering process is identical. We handle all export documentation.

**Q: What if my rack layout isn't finalized?**
A: We can start with a preliminary design and refine as your layout solidifies. Many customers begin DC Twin™ engagement during facility design phase to validate cabling feasibility early.

**Q: Can you integrate with existing infrastructure?**
A: Absolutely. DC Twin™ works for new builds and expansions. We model existing infrastructure and design new cabling to integrate seamlessly.

**Q: What size projects are a good fit?**
A: DC Twin™ is most cost-effective for deployments with 20+ racks or complex interconnections. Smaller projects may still benefit if precision documentation and labeling are critical.

---

### Final Note

**Text:**

**Not sure if DC Twin™ is right for your project?** Submit your information anyway. We'll provide honest feedback on whether our engineering approach fits your needs—even if it means recommending a different solution.

---

**Form Submission Flow:**

1. User fills out form and uploads files
2. Form data POSTs to `/api/contact/engineering-services`
3. Backend validates data, uploads files to secure storage
4. Email notification sent to sales@wave2wave.io with form data and file links
5. CRM entry created (Salesforce, HubSpot, or equivalent)
6. Automated confirmation email sent to user
7. Success page displayed or success message shown

**Success Message Content:**

> **Thank you for your interest in DC Twin™ Engineering Services!**
>
> We've received your request and will review your project details. Our engineering team typically responds within 1-2 business days with follow-up questions or a preliminary scope.
>
> **What happens next:**
> 1. We review your rack layout and configuration data
> 2. We identify any additional information needed
> 3. We provide a detailed proposal including scope, deliverables, timeline, and pricing
>
> Questions in the meantime? Email us at sales@wave2wave.io or call +1-866-473-2701.

---

**Total Page Word Count:** ~600 words
**Images/Visuals:** 1 (optional subtle hero background)
**CTAs:** 1 (Form submission)

---

## SEO Strategy

### Keyword Targets

**Primary Keywords:**
- DC Twin engineering
- Data center cabling engineering
- Digital twin cabling
- Custom cable manufacturing
- Data center cable design

**Secondary Keywords:**
- 3D data center modeling
- Cable installation documentation
- Factory-terminated fiber cables
- Rack-organized cabling
- Pre-labeled cable systems

**Long-Tail Keywords:**
- How to design data center cabling infrastructure
- Custom length fiber optic cables for data centers
- Digital twin platform for cable engineering
- Reduce data center installation time
- Factory-tested data center cables

### On-Page SEO Requirements

**All Pages Must Include:**

1. **Unique H1** (one per page, includes primary keyword)
2. **Meta Title** (50-60 characters, includes brand and keyword)
3. **Meta Description** (150-160 characters, includes CTA)
4. **Header Hierarchy** (H1 → H2 → H3, proper nesting)
5. **Alt Text** (all images, descriptive and keyword-rich)
6. **Internal Links** (3-5 per page to related content)
7. **External Links** (1-2 to authoritative sources if contextually appropriate)

**Image Optimization:**
- File names: `dc-twin-3d-model-data-center.jpg` (not `IMG_1234.jpg`)
- Alt text: Descriptive, includes keywords naturally
- Compressed: WebP format preferred, <200KB per image
- Lazy loading: Enabled for below-fold images

### Schema Markup

**Implement on All Pages:**

**Service Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "DC Twin Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "Wave2Wave.io"
  },
  "description": "Digital twin engineering for data center cabling infrastructure",
  "areaServed": "Worldwide"
}
```

**Breadcrumb Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://wave2wave.io"},
    {"@type": "ListItem", "position": 2, "name": "Engineering Services", "item": "https://wave2wave.io/engineering-services"}
  ]
}
```

**FAQ Schema (for Get Started page):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does the DC Twin process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typical timeline is 3-4 weeks from design data to delivery..."
      }
    }
  ]
}
```

### Canonical URLs

- All pages must have `<link rel="canonical" href="[full URL]">`
- Ensure no duplicate content across pages

### Open Graph Tags (for social sharing)

```html
<meta property="og:title" content="DC Twin™ Engineering Services | Wave2Wave">
<meta property="og:description" content="Transform your data center design into installation-ready cabling systems.">
<meta property="og:image" content="https://wave2wave.io/images/dc-twin-og-image.jpg">
<meta property="og:url" content="https://wave2wave.io/engineering-services">
<meta property="og:type" content="website">
```

---

## Technical Implementation

### Technology Stack

**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS (configured with Wave2Wave design system)
**Hosting:** Vercel
**Forms:** React Hook Form + server-side validation
**File Uploads:** Vercel Blob or AWS S3
**CRM Integration:** Salesforce or HubSpot API

### File Structure

```
/app
  /engineering-services
    /page.tsx (Main landing)
    /process
      /page.tsx
    /deliverables
      /page.tsx
    /case-studies
      /page.tsx
    /get-started
      /page.tsx
    /layout.tsx (Shared layout for all subpages)

/components
  /engineering-services
    /Hero.tsx
    /ProcessStep.tsx
    /DeliverableCard.tsx
    /CaseStudyGallery.tsx
    /ContactForm.tsx

/public
  /images
    /engineering-services
      /hero-3d-floor-map.webp
      /process-step-*.webp
      /deliverables-*.webp
      /case-study-*.webp
```

### Performance Targets

**Lighthouse Scores:**
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

**Core Web Vitals:**
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

**Optimization Strategies:**
- Next.js Image component for all images (automatic optimization)
- WebP format with fallbacks
- Lazy loading for below-fold content
- Code splitting per route
- Edge caching on Vercel CDN

---

## Analytics & Tracking

### Google Analytics 4 Events

**Track the following events:**

1. **Page Views**
   - `/engineering-services` (landing)
   - `/engineering-services/process`
   - `/engineering-services/deliverables`
   - `/engineering-services/case-studies`
   - `/engineering-services/get-started`

2. **CTA Clicks**
   - "See How It Works" (landing hero)
   - "Learn the Complete Process" (landing section)
   - "View Complete Deliverables" (process page)
   - "View Case Studies" (deliverables page)
   - "Get Started" (case studies page, landing final CTA)

3. **Form Interactions**
   - Form started (user clicks into first field)
   - Form submitted
   - Form submission success
   - Form submission error

4. **File Uploads**
   - File upload initiated
   - File upload success
   - File upload failure (track file type and size for debugging)

5. **Engagement**
   - Time on page (by page)
   - Scroll depth (25%, 50%, 75%, 100%)
   - Expandable section clicks (FAQ, deliverable cards if expandable)

### Conversion Goals

**Primary Conversions:**
- Form submission on `/get-started`
- Phone click (mobile)
- Email click

**Secondary Conversions:**
- File download (if offering PDF brochure or case study)
- Internal link clicks to product pages

### A/B Testing Opportunities

**Test variations of:**
- Hero CTA button text ("See How It Works" vs. "Learn More" vs. "View Process")
- Form length (minimal vs. detailed)
- Case study presentation (long-form vs. summary with PDF download)
- CTA placement on landing page

---

## Launch Checklist

**Pre-Launch:**

- [ ] All 5 pages content finalized and reviewed
- [ ] All images sourced, optimized, and uploaded
- [ ] Design system implemented in Tailwind config
- [ ] Mobile responsive testing complete (all pages, all breakpoints)
- [ ] Form functionality tested (submission, validation, file upload)
- [ ] CRM integration tested (form data flowing to sales team)
- [ ] All internal links verified (no broken links)
- [ ] All external links verified (open in new tab)
- [ ] SEO meta tags implemented on all pages
- [ ] Schema markup validated (test with Google Rich Results Test)
- [ ] Alt text added to all images
- [ ] Lighthouse audits pass targets (≥90 performance)
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Analytics tracking verified (events firing correctly)

**Launch Day:**

- [ ] Deploy to production on Vercel
- [ ] Verify all pages load correctly in production
- [ ] Submit sitemap to Google Search Console
- [ ] Test form submission end-to-end in production
- [ ] Monitor analytics for traffic

**Post-Launch:**

- [ ] Monitor form submissions for first week
- [ ] Review analytics data (page views, engagement, conversions)
- [ ] Collect user feedback from sales team
- [ ] Identify optimization opportunities (high exit pages, low engagement sections)
- [ ] Plan content updates (additional case studies, FAQ additions)

---

## Future Enhancements

**Potential additions for Version 2.0:**

1. **Interactive 3D Model Viewer**
   - Embed actual DC Twin™ 3D model viewer on landing page or process page
   - Allow visitors to interact with a sample project

2. **Video Content**
   - Process walkthrough video (2-3 minutes)
   - Customer testimonial video
   - Installation time-lapse video

3. **ROI Calculator**
   - Interactive tool: input rack count, get estimated time/cost savings
   - Lead capture opportunity

4. **Additional Case Studies**
   - Enterprise edge deployment
   - GPU cluster installation
   - Colocation expansion

5. **Resource Library**
   - Downloadable white papers
   - Technical guides
   - Installation best practices

6. **Live Chat Integration**
   - Implement chatbot for immediate questions
   - Route qualified leads to sales team

---

**PRD Prepared by Wave2Wave.io**
**For Web Development and Marketing Teams**
**Version 1.0 | December 2025**

---

## Appendix: Content Approval & Sign-Off

**Technical Accuracy Review:**
- [ ] Cable specifications verified (fiber types, connectors, standards)
- [ ] Timeline accuracy confirmed (3-4 week lead time, process durations)
- [ ] Metrics verified (50-75% faster, 30-50% time wasted, etc.)
- [ ] Case study numbers confirmed (80 racks, 800+ cables, 39-106 ft lengths)

**Brand Consistency Review:**
- [ ] Tone matches brand guidelines (authoritative, technical, results-oriented)
- [ ] Terminology consistent (DC Twin™ always with ™, "rack-organized", etc.)
- [ ] Contact information current (phone, email, website)
- [ ] Company positioning accurate (engineering company, not reseller)

**Legal/Compliance Review:**
- [ ] No client names used without permission (case study genericized)
- [ ] No misleading claims or unsubstantiated metrics
- [ ] Privacy policy linked from form
- [ ] Terms of service accessible
- [ ] Cookie consent implemented if required

**Final Approval:**
- [ ] Marketing Manager sign-off
- [ ] Sales Director sign-off
- [ ] Engineering Manager sign-off (technical accuracy)
- [ ] Executive approval for launch

---

**End of PRD**

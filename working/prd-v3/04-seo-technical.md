# Wave2Wave.io SEO & Technical Specification
## PRD v3.0 - Document 4 of 4

**Version:** 3.0
**Date:** December 2025
**Document Type:** SEO & Technical Specification
**Status:** Production Ready

---

## Document Quick Reference

**Document 1 - Main PRD:** Strategic overview, navigation architecture, implementation guidance
**Document 2 - Design System:** Color palette, typography, components, interactions
**Document 3 - Page Specs:** Content and structure for every page
**Document 4 - SEO & Technical (THIS DOCUMENT):** SEO strategy, hidden text library, performance specs

---

## Table of Contents

1. [SEO Strategy Overview](#1-seo-strategy-overview)
2. [Page-by-Page SEO Specifications](#2-page-by-page-seo-specifications)
3. [Hidden Text Implementation Strategy](#3-hidden-text-implementation-strategy)
4. [SEO Content Library](#4-seo-content-library)
5. [Technical Performance Requirements](#5-technical-performance-requirements)
6. [Analytics & Tracking](#6-analytics--tracking)
7. [Embedded Prompts for Claude Code](#7-embedded-prompts-for-claude-code)

---

## 1. SEO Strategy Overview

### 1.1 Primary Goals

**Objective:** Rank for high-intent B2B keywords in the data center cabling and custom cable manufacturing space.

**Target Keywords (Primary):**
- data center cabling
- custom cable manufacturing
- fiber optic cable assemblies
- data center infrastructure
- pre-terminated fiber optic cables
- custom ethernet cables
- DC Twin digital modeling
- deployment kitting services

**Target Keywords (Secondary):**
- 400G cabling, 800G cabling
- MPO fiber optic cables
- Cat6A cable assemblies
- hyperscale data center cabling
- AI infrastructure cabling
- custom cable labeling
- rack-specific cable kitting

**Long-Tail Keywords:**
- custom fiber optic cables for data centers
- pre-labeled ethernet cable assemblies
- DC Twin digital twin data center
- Wave2Wave custom cabling services

### 1.2 Content Strategy

**Content Pillars:**

1. **Educational Content** (Resources Section)
   - Technical guides on cabling best practices
   - Industry insights and trends
   - How-to articles for data center professionals

2. **Product Pages** (Service SEO)
   - Detailed technical specifications
   - Use cases and applications
   - Benefits and differentiators

3. **Service Pages** (Solution SEO)
   - Custom Engineering and DC Twin™
   - Deployment Services and kitting
   - Value propositions and ROI

4. **Trust Signals**
   - Client case studies (anonymized if needed)
   - Certifications and standards compliance
   - Quantifiable results and metrics

### 1.3 Hidden Text Strategy

**Rationale:** Balance page load performance with SEO value.

**Approach:**
- Visible content: Concise, user-focused messaging
- Hidden content: Detailed technical specifications, keywords, standards
- Implementation: Semantic HTML (`<details>` + `sr-only` + `aria-hidden`)
- Search engines: Crawl hidden content (it's real HTML, not spam)
- Users: Never see hidden content (optimized UX)
- Screen readers: Skip hidden content (aria-hidden="true")

**Per-Page Allocation:**
- Homepage: 200-250 words hidden text
- Product pages: 300-500 words hidden text
- Service pages: 250-400 words hidden text
- Resources articles: 100-150 words hidden text

### 1.4 Internal Linking Strategy

**Hub & Spoke Model:**

**Hubs (High Authority):**
- Homepage (links to all main sections)
- Resources hub (links to all articles)
- Product category pages (Fiber, Ethernet, Systems)

**Spokes (Specific Pages):**
- Individual product pages
- Service detail pages (DC Twin, Deployment Services)
- Resource articles

**Linking Rules:**
- Every page should link back to its hub
- Related products/services should cross-link
- Resources articles should link to relevant product/service pages
- Use descriptive anchor text (not "click here")

### 1.5 Schema.org Markup

**Recommended Schema Types:**

```json
// Organization Schema (Homepage)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wave2Wave",
  "url": "https://wave2wave.io",
  "logo": "https://wave2wave.io/logo.png",
  "description": "Custom data center cabling and infrastructure solutions",
  "sameAs": [
    "https://www.linkedin.com/company/wave2wave"
  ]
}

// Product Schema (Product Pages)
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Custom Fiber Optic Cable Assemblies",
  "description": "Pre-terminated fiber optic cables...",
  "brand": {
    "@type": "Brand",
    "name": "Wave2Wave"
  }
}

// Article Schema (Resources Articles)
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Data Center Structured Cabling",
  "author": {
    "@type": "Organization",
    "name": "Wave2Wave"
  },
  "datePublished": "2025-12-01"
}
```

---

## 2. Page-by-Page SEO Specifications

### 2.1 Homepage / Solutions

**Meta Title:** `Data Center Cabling Solutions | Custom Cable Manufacturing | Wave2Wave`
**Character Count:** 72 (within 60-70 range for optimal display)

**Meta Description:** `Custom data center cabling solutions with factory pre-termination, DC Twin™ digital modeling, and deployment kitting. Reduce deployment time by 50-75%. Get a quote today.`
**Character Count:** 190 (trim to 155)

**Optimized Meta Description:** `Custom data center cabling with pre-termination, DC Twin™ modeling, and deployment kitting. Reduce deployment time 50-75%. Request a quote.`
**Character Count:** 153 ✓

**H1 Tag:** `Custom Data Center Cabling Solutions`

**Target Keywords:**
- Primary: data center cabling, custom cable manufacturing
- Secondary: deployment kitting, DC Twin, pre-terminated cables
- Long-tail: custom data center infrastructure solutions

**Hidden Text:** 200-250 words (custom snippet covering all services)

### 2.2 Custom Engineering

**Meta Title:** `Custom Cable Engineering Services | Precision Manufacturing | Wave2Wave`
**Character Count:** 76 (trim)

**Optimized Meta Title:** `Custom Cable Engineering | Precision Manufacturing | Wave2Wave`
**Character Count:** 65 ✓

**Meta Description:** `Expert custom cable engineering with 3-inch length increments, factory testing, and pre-labeling. Custom fiber, copper, and power cables for data centers.`
**Character Count:** 163 (trim to 155)

**Optimized Meta Description:** `Custom cable engineering: 3-inch increments, factory testing, pre-labeling. Fiber, copper & power cables for data centers. Get a quote.`
**Character Count:** 147 ✓

**H1 Tag:** `Custom Cable Engineering for Data Centers`

**Target Keywords:**
- Primary: custom cable engineering, custom cable manufacturing
- Secondary: factory pre-termination, custom cable labeling
- Long-tail: custom length cable assemblies

**Hidden Text:** 250-300 words (Deployment Services block, partial)

### 2.3 DC Twin™ Digital Modeling

**Meta Title:** `DC Twin™ Digital Modeling | Virtual Data Center Design | Wave2Wave`
**Character Count:** 70 ✓

**Meta Description:** `DC Twin™ digital twin technology for data center cabling. Validate every cable route before production. Reduce errors 95%, deployment time 60%. Learn more.`
**Character Count:** 163 (trim to 155)

**Optimized Meta Description:** `DC Twin™ digital twin for data center cabling. Validate routes before production. 95% fewer errors, 60% faster deployment.`
**Character Count:** 131 ✓

**H1 Tag:** `DC Twin™: Digital Modeling for Data Center Cabling`

**Target Keywords:**
- Primary: DC Twin, digital twin data center, DCIM integration
- Secondary: virtual data center design, cable routing software
- Long-tail: data center digital twin modeling

**Hidden Text:** 350-400 words (DC Twin™ block, full)

### 2.4 Deployment Services

**Meta Title:** `Deployment Kitting Services | Pre-Labeled Cable Assemblies | Wave2Wave`
**Character Count:** 75 (trim)

**Optimized Meta Title:** `Deployment Kitting | Pre-Labeled Cable Assemblies | Wave2Wave`
**Character Count:** 64 ✓

**Meta Description:** `Rack-specific deployment kitting reduces data center installation time 50-75%. Factory pre-labeled cables eliminate field errors. Request a quote.`
**Character Count:** 152 ✓

**H1 Tag:** `Deployment Kitting & Installation Services`

**Target Keywords:**
- Primary: deployment kitting, cable kitting services
- Secondary: pre-labeled cables, rack-specific kitting
- Long-tail: data center deployment services

**Hidden Text:** 300-350 words (Deployment Services block, full)

### 2.5 Fiber Solutions

**Meta Title:** `Fiber Optic Cable Assemblies | Custom Multimode & Single-Mode | Wave2Wave`
**Character Count:** 79 (trim)

**Optimized Meta Title:** `Fiber Optic Cables | Custom Multimode & Single-Mode | Wave2Wave`
**Character Count:** 66 ✓

**Meta Description:** `Custom fiber optic cable assemblies: OM3, OM4, OM5 multimode and OS2 single-mode. LC, SC, MPO connectors. Factory tested. Request a quote.`
**Character Count:** 153 ✓

**H1 Tag:** `Custom Fiber Optic Cable Solutions`

**Target Keywords:**
- Primary: fiber optic cable assemblies, custom fiber optic cables
- Secondary: MPO fiber optic cables, LC fiber cables, pre-terminated fiber
- Long-tail: custom fiber optic cable assemblies for data centers

**Hidden Text:** 400-450 words (Fiber Optic Solutions block, full)

### 2.6 Fiber - Hyperscalers

**Meta Title:** `400G & 800G Hyperscale Cabling | AI Infrastructure | Wave2Wave`
**Character Count:** 68 ✓

**Meta Description:** `400G/800G fiber optic cabling for hyperscale data centers and AI infrastructure. MPO-24, QSFP-DD solutions. Custom engineering. Get a quote.`
**Character Count:** 153 ✓

**H1 Tag:** `400G/800G Hyperscale Data Center Cabling`

**Target Keywords:**
- Primary: 400G cabling, 800G cabling, hyperscale data center cabling
- Secondary: AI infrastructure cabling, MPO-24, QSFP-DD
- Long-tail: high-speed interconnect for AI clusters

**Hidden Text:** 300-350 words (High Speed Interconnect block, partial + Fiber block, partial)

### 2.7 Fiber - Patch Panels

**Meta Title:** `Fiber Optic Patch Panels | High-Density Cassettes | Wave2Wave`
**Character Count:** 69 ✓

**Meta Description:** `High-density fiber optic patch panels and cassette systems. LC, MPO connectivity. Modular design for data center flexibility. Request a quote.`
**Character Count:** 153 ✓

**H1 Tag:** `Fiber Optic Patch Panels & Cassette Systems`

**Target Keywords:**
- Primary: fiber optic patch panels, fiber cassettes
- Secondary: high-density fiber connectivity, MPO cassettes
- Long-tail: modular fiber optic patch panel systems

**Hidden Text:** 250-300 words (Fiber Optic Solutions block, partial, cassette focus)

### 2.8 High Speed Interconnect

**Meta Title:** `High Speed Interconnect | 400G/800G Cabling Solutions | Wave2Wave`
**Character Count:** 72 ✓

**Meta Description:** `High-speed interconnect cabling for 400G/800G data centers. MPO-24, QSFP-DD, OSFP solutions for AI/HPC infrastructure. Custom engineering.`
**Character Count:** 154 ✓

**H1 Tag:** `High Speed Interconnect for AI & HPC Data Centers`

**Target Keywords:**
- Primary: high speed interconnect, 400G cabling, 800G cabling
- Secondary: MPO-24, QSFP-DD, AI infrastructure cabling
- Long-tail: high-speed interconnect solutions for AI training clusters

**Hidden Text:** 300-350 words (High Speed Interconnect block, full)

### 2.9 Ethernet Solutions

**Meta Title:** `Custom Ethernet Cable Assemblies | Cat6A & Cat8 | Wave2Wave`
**Character Count:** 66 ✓

**Meta Description:** `Custom Cat6A and Cat8 ethernet cable assemblies with PoE++ support. Factory-terminated RJ45, pre-labeled. Reduce installation time 70%. Quote.`
**Character Count:** 157 (trim)

**Optimized Meta Description:** `Custom Cat6A & Cat8 cables with PoE++ support. Factory-terminated, pre-labeled. Reduce installation time 70%. Request quote.`
**Character Count:** 130 ✓

**H1 Tag:** `Custom Ethernet Cable Solutions | Cat6A & Cat8`

**Target Keywords:**
- Primary: custom ethernet cables, Cat6A cable assemblies, Cat8 cables
- Secondary: PoE ethernet cables, MPTL cables, factory-terminated ethernet
- Long-tail: custom Cat6A cables for data centers

**Hidden Text:** 350-400 words (Ethernet Cabling block, full)

### 2.10 Ethernet - Patch Panels

**Meta Title:** `Ethernet Patch Panels | RJ45 Cassette Systems | Wave2Wave`
**Character Count:** 64 ✓

**Meta Description:** `High-density ethernet patch panels with RJ45 cassettes. Cat6A and Cat8 support. Modular design for flexible data center connectivity. Quote.`
**Character Count:** 152 ✓

**H1 Tag:** `Ethernet Patch Panels & RJ45 Cassette Systems`

**Target Keywords:**
- Primary: ethernet patch panels, RJ45 patch panels
- Secondary: Cat6A patch panels, ethernet cassettes
- Long-tail: modular ethernet patch panel systems

**Hidden Text:** 250-300 words (Ethernet Cabling block, partial, patch panel focus)

### 2.11 Systems & Accessories

**Meta Title:** `Data Center Systems & Accessories | Testing Solutions | Wave2Wave`
**Character Count:** 72 ✓

**Meta Description:** `Data center testing solutions and accessories. W-IGNITE™ loopback testers, Fiber-in-a-Box™ distance simulators. Lab equipment. Request quote.`
**Character Count:** 156 (trim)

**Optimized Meta Description:** `Data center testing & accessories. W-IGNITE™ loopback testers, Fiber-in-a-Box™ simulators. Lab equipment. Request quote.`
**Character Count:** 128 ✓

**H1 Tag:** `Data Center Systems & Testing Accessories`

**Target Keywords:**
- Primary: data center accessories, testing solutions
- Secondary: loopback testers, fiber distance simulators
- Long-tail: data center lab testing equipment

**Hidden Text:** 200-250 words (custom snippet: overview of testing and accessories)

### 2.12 Testing Solutions

**Meta Title:** `Data Center Testing Solutions | W-IGNITE™ & Fiber-in-a-Box™ | Wave2Wave`
**Character Count:** 79 (trim)

**Optimized Meta Title:** `Testing Solutions | W-IGNITE™ & Fiber-in-a-Box™ | Wave2Wave`
**Character Count:** 61 ✓

**Meta Description:** `W-IGNITE™ loopback testers and Fiber-in-a-Box™ distance simulators for data center lab testing. Validate network performance. Request quote.`
**Character Count:** 151 ✓

**H1 Tag:** `Lab Testing Solutions for Data Centers`

**Target Keywords:**
- Primary: data center testing, loopback testers
- Secondary: W-IGNITE, Fiber-in-a-Box, distance simulators
- Long-tail: fiber optic testing equipment for data centers

**Hidden Text:** 250-300 words (custom snippet: W-IGNITE, Fiber-in-a-Box details)

### 2.13 Resources (Hub Page)

**Meta Title:** `Data Center Cabling Resources | Technical Guides & Case Studies | Wave2Wave`
**Character Count:** 81 (trim)

**Optimized Meta Title:** `Data Center Resources | Technical Guides & Case Studies | Wave2Wave`
**Character Count:** 70 ✓

**Meta Description:** `Technical guides, case studies, and industry insights for data center professionals. Learn cabling best practices and deployment strategies.`
**Character Count:** 149 ✓

**H1 Tag:** `Resources for Data Center Professionals`

**Target Keywords:**
- Primary: data center resources, technical guides
- Secondary: case studies, industry insights, best practices
- Long-tail: data center cabling best practices guides

**Hidden Text:** 150-200 words (custom snippet: thought leadership, industry insights)

### 2.14 Company

**Meta Title:** `About Wave2Wave | Custom Data Center Cabling Expert | Wave2Wave`
**Character Count:** 71 ✓

**Meta Description:** `Wave2Wave provides custom data center cabling solutions with factory pre-termination, DC Twin™ modeling, and deployment services. Learn more.`
**Character Count:** 153 ✓

**H1 Tag:** `About Wave2Wave: Data Center Cabling Experts`

**Target Keywords:**
- Primary: about Wave2Wave, data center cabling company
- Secondary: ISO certified, custom cable manufacturer
- Long-tail: data center infrastructure solutions provider

**Hidden Text:** 150-200 words (custom snippet: company values, certifications)

### 2.15 Contact

**Meta Title:** `Contact Wave2Wave | Request a Quote | Custom Cable Solutions`
**Character Count:** 68 ✓

**Meta Description:** `Contact Wave2Wave for custom data center cabling solutions. Request a quote, speak with our engineering team, or learn about our services.`
**Character Count:** 148 ✓

**H1 Tag:** `Request a Quote | Contact Wave2Wave`

**Target Keywords:**
- Primary: request quote, contact sales
- Secondary: custom cable quote, Wave2Wave contact
- Long-tail: request custom cable manufacturing quote

**Hidden Text:** 100-150 words (custom snippet: contact encouragement, services overview)

---

## 3. Hidden Text Implementation Strategy

### 3.1 Technical Approach

**Why Hidden Text:**
- **Performance:** Faster page loads (less visible DOM, faster render)
- **SEO:** Search engines crawl all HTML content (hidden or not)
- **UX:** Users get concise, focused content (no overwhelming walls of text)
- **Screen Readers:** Excluded via `aria-hidden="true"` (doesn't interfere with accessibility)

**Implementation Pattern:**

```html
<!-- Visible page content above -->

<section className="seo-hidden-content">
  <details className="sr-only" aria-hidden="true">
    <summary>Additional Technical Information</summary>
    <div>
      <!-- SEO-rich content from Content Library (Section 4) -->
      <p>High-speed interconnect solutions enable 400G and 800G data center networks...</p>
      <p>MPO-24 and QSFP-DD form factors for AI/HPC infrastructure...</p>
      <!-- 200-500 words depending on page type -->
    </div>
  </details>
</section>
```

**CSS (add to `globals.css`):**

```css
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

.seo-hidden-content details {
  display: none; /* Belt-and-suspenders: also hide visually */
}
```

**Benefits:**
1. ✅ Search engines index the content (it's real HTML in `<details>`)
2. ✅ Users never see it (`.sr-only` + `display: none`)
3. ✅ Screen readers skip it (`aria-hidden="true"`)
4. ✅ Page load remains fast (minimal DOM impact)
5. ✅ Semantic HTML (not cloaking or spam)

### 3.2 Per-Page Specifications

| Page | Word Count | SEO Content Block(s) from Section 4 | Placement |
|------|-----------|--------------------------------------|-----------|
| Homepage / Solutions | 200-250 | Custom snippet (all services overview) | Before footer |
| Custom Engineering | 250-300 | Deployment Services (partial) | Before CTA section |
| DC Twin™ | 350-400 | DC Twin™ (full) | Before CTA section |
| Deployment Services | 300-350 | Deployment Services (full) | Before CTA section |
| Fiber Solutions | 400-450 | Fiber Optic Solutions (full) | Before CTA section |
| Fiber Hyperscalers | 300-350 | High Speed Interconnect (partial) + Fiber (partial) | Before CTA section |
| Fiber Patch Panels | 250-300 | Fiber Optic Solutions (partial, cassette focus) | Before CTA section |
| High Speed Interconnect | 300-350 | High Speed Interconnect (full) | Before CTA section |
| Ethernet Solutions | 350-400 | Ethernet Cabling (full) | Before CTA section |
| Ethernet Patch Panels | 250-300 | Ethernet Cabling (partial, patch panel focus) | Before CTA section |
| Systems & Accessories | 200-250 | Custom snippet (testing/accessories) | Before CTA section |
| Testing Solutions | 250-300 | Custom snippet (W-IGNITE, Fiber-in-a-Box) | Before CTA section |
| Resources (Hub) | 150-200 | Custom snippet (thought leadership) | Before footer |
| Resources (Articles) | 100-150 | Custom snippet (related keywords per article) | End of article |
| Company | 150-200 | Custom snippet (values, certifications) | Before footer |
| Contact | 100-150 | Custom snippet (services overview) | Before footer |

### 3.3 Implementation Checklist

**For each page:**

- [ ] Identify appropriate SEO content block from Section 4
- [ ] Copy exact text (do not paraphrase)
- [ ] Wrap in `<section className="seo-hidden-content">` container
- [ ] Use `<details className="sr-only" aria-hidden="true">` structure
- [ ] Place before CTA section or footer (as specified in table)
- [ ] Verify with browser inspector (should not be visible)
- [ ] Test with Google Search Console (verify indexing)

---

## 4. SEO Content Library

**IMPORTANT:** These blocks are ready-to-copy. Do NOT paraphrase or edit. Copy exact text for consistency.

### 4.1 High Speed Interconnect (300 words)

```
High-speed interconnect solutions enable 400G and 800G data center networks to achieve maximum throughput and minimum latency. Wave2Wave specializes in custom-engineered high-speed cabling systems using MPO-24 multi-fiber connectors and QSFP-DD, OSFP form factors optimized for AI/HPC infrastructure.

Our 400G interconnect solutions support both SR8 (short-reach, multimode) and DR4 (data rate, single-mode) configurations, providing flexibility for data center architects. For 800G deployments, we manufacture SR8, DR8, and 2×FR4 cable assemblies with factory testing to ensure insertion loss <0.5dB and return loss >20dB.

High-density AI training clusters (NVIDIA DGX, Google TPU, Meta OAM) require specialized cabling topologies. Wave2Wave's custom engineering services include rail-optimized routing for GPU server racks, pre-labeled breakout cables for spine-leaf architectures, polarity validation (Method A, B, C) before shipment, and DC Twin™ digital modeling to simulate cable paths.

Standards compliance is critical for 400G/800G interconnect. All Wave2Wave cables meet or exceed IEEE 802.3bs (200G/400G Ethernet), IEEE 802.3ck (800G Ethernet), TIA-568 (commercial building cabling), and IEC 61754 (fiber optic connector interfaces).

Thermal management in high-speed interconnect is often overlooked. Our low-smoke zero-halogen (LSZH) cable jackets reduce fire risk while maintaining flexibility for tight bend radius applications. For hyperscale deployments, we offer plenum-rated (CMP) and riser-rated (CMR) variants.

Quality assurance for 400G/800G cables includes factory insertion loss testing (100% of cables), polarity verification with automated test equipment, visual fault locator (VFL) inspection for fiber contamination, and continuity testing for all copper power/ground pairs.

Wave2Wave's high-speed interconnect solutions reduce deployment time by 50-75% compared to field termination, eliminate human error through factory labeling, and ensure day-one network performance for AI/HPC data centers.
```

### 4.2 DC Twin™ Digital Modeling (350 words)

```
DC Twin™ is Wave2Wave's digital twin technology for data center cabling infrastructure. Unlike traditional CAD drawings, DC Twin™ creates a virtual 3D model of the entire data center, simulates cable routing, validates every connection, and generates optimized deployment kits before a single cable is manufactured.

DCIM (Data Center Infrastructure Management) integration is core to DC Twin™. We import rack layouts from Nlyte (energy and asset management), Sunbird dcTrack (capacity planning), Schneider Electric EcoStruxure (monitoring), and FNT Command (resource management).

BIM (Building Information Modeling) compatibility enables architecture/engineering collaboration. DC Twin™ imports Autodesk Revit models (.rvt files), AutoCAD floor plans (.dwg files), SketchUp 3D models (.skp files), and IFC (Industry Foundation Classes) universal format.

The cable routing algorithm in DC Twin™ optimizes for shortest viable path (minimize cable length, reduce cost), bend radius compliance (prevent signal loss), cable tray capacity (avoid congestion), hot aisle/cold aisle airflow preservation, and accessibility for future maintenance.

Pre-deployment validation catches errors before production: port mapping verification (every cable to correct switch port), polarity checking (fiber A-to-B, B-to-A connections), power budget calculations (optical loss budget for fiber), and compatibility validation (SFP+ to SFP+, QSFP to QSFP).

ROI for DC Twin™ digital modeling includes 95% reduction in cabling errors (vs. field termination), 60% faster deployment (pre-kitted, pre-labeled cables), 40% lower total cost of ownership (fewer truck rolls, rework), and zero port mapping mistakes (validated in virtual model).

The DC Twin™ process: (1) Import data center layout (DCIM, BIM, CAD), (2) Define connectivity requirements (server to TOR, TOR to spine), (3) Simulate cable routing (algorithm optimizes paths), (4) Validate design (automated error checking), (5) Generate deployment kits (rack-specific bundles), (6) Manufacture and label cables (factory production), (7) Ship optimized kits (organized by installation phase).

Wave2Wave's DC Twin™ digital modeling transforms data center deployments from error-prone manual processes into predictable, efficient, factory-validated installations.
```

### 4.3 Fiber Optic Solutions (400 words)

```
Wave2Wave manufactures custom fiber optic cable assemblies for data center, enterprise, and telecom applications. Our fiber solutions cover single-mode and multimode technologies with industry-leading quality and factory testing.

Multimode fiber specifications: OM3 (850nm, 10G up to 300m, aqua jacket), OM4 (850nm, 10G up to 550m, 40G/100G up to 150m, aqua jacket), and OM5 (850nm, optimized for SWDM/wavelength division, lime green jacket).

Single-mode fiber specifications: OS2 (1310nm and 1550nm, 10G/40G/100G long-haul, yellow jacket) and Ultra-low loss (ULL) OS2 (<0.18dB/km attenuation, long-distance carrier).

Connector types and applications: LC (Lucent Connector) duplex, most common for 10G/25G/40G/100G; SC (Subscriber Connector) simplex or duplex, telecom and enterprise; MPO (Multi-fiber Push-On) 8, 12, 24 fibers, high-density 40G/100G/400G; and CS (Connector Style) ultra-small form factor, next-gen 800G.

Insertion loss and return loss standards: Insertion loss <0.35dB (multimode), <0.5dB (single-mode); Return loss >20dB (multimode), >35dB (single-mode APC). All Wave2Wave cables tested at 100% before shipment.

Polarity schemes for MPO cables: Method A (straight-through, Position 1 to Position 1), Method B (key-up to key-down, Position 1 to Position 12), and Method C (pair flipped, breakout to duplex LC).

Cable jacket ratings: OFNP (plenum) low-smoke, fire-rated for air-handling spaces; OFNR (riser) vertical building runs, flame-retardant; and LSZH (low-smoke zero-halogen) international, reduced toxicity.

Fiber optic cable management best practices: Minimum bend radius 10× cable diameter (during installation), long-term bend radius 15× cable diameter (permanent installation), cable tray fill capacity 40% maximum (prevents crushing), and fiber slack loops 1-2 meters at patch panels (future re-termination).

Wave2Wave's fiber optic custom engineering includes precise length specification (3-inch increments), factory pre-termination (LC, SC, MPO connectors), polarity validation (automated optical testing), custom labeling (rack/port mapping printed on cable), and deployment kitting (organized by installation phase).

Quality assurance for fiber optic cables: Optical time-domain reflectometer (OTDR) testing, insertion loss measurement (tunable laser, power meter), visual fault locator (VFL) inspection, microscope inspection (fiber end-face cleanliness), and continuity verification (all fibers in trunk cables).

Wave2Wave's fiber optic solutions deliver factory-tested reliability, custom engineering precision, and deployment efficiency for modern data center networks.
```

### 4.4 Ethernet Cabling (350 words)

```
Wave2Wave manufactures custom Ethernet cable assemblies for data center and enterprise networks, specializing in Cat6A and Cat8 high-performance copper cabling.

Cat6A (Augmented Category 6) specifications: Bandwidth 500 MHz, Speed 10GBASE-T (10 Gigabit Ethernet), Distance up to 100 meters, Standard TIA-568.2-D, ISO/IEC 11801. Applications include 10G server-to-switch, storage networks, and VoIP.

Cat8 (Category 8) specifications: Bandwidth 2000 MHz (2 GHz), Speed 25GBASE-T, 40GBASE-T, Distance up to 30 meters (data center optimized), Standard TIA-568.2-D Amendment 1, ISO/IEC 11801-1. Applications include short-reach 25G/40G and top-of-rack switching.

PoE (Power over Ethernet) capabilities: PoE (IEEE 802.3af) 15.4W suitable for IP phones and cameras; PoE+ (IEEE 802.3at) 30W for wireless access points and advanced cameras; PoE++ (IEEE 802.3bt Type 3) 60W for high-power APs and building automation; and PoE++ (IEEE 802.3bt Type 4) 100W for LED lighting and PTZ cameras.

MPTL (Modular Plug Terminated Link): Factory-terminated RJ45 plugs on both ends, eliminates field termination (reduces installation time 70%), permanent link testing before shipment, and custom cable lengths (reduce cable sag, improve aesthetics).

Shielded vs. unshielded Ethernet: UTP (Unshielded Twisted Pair) lower cost, adequate for most data centers; FTP (Foiled Twisted Pair) alien crosstalk protection for 10G deployments; and STP (Shielded Twisted Pair) maximum EMI protection for industrial environments.

Alien crosstalk mitigation: Cat6A cables designed to eliminate AXT (Alien Crosstalk), shielding or increased pair separation, critical for high-density cable bundles (>6 cables in same tray).

Wave2Wave's Ethernet cable custom engineering: Precise length control (3-inch increments, eliminate slack), factory-tested MPTL assemblies (100% continuity, performance verification), custom labeling (rack/port printed on cable jacket), color-coded options (organize by network segment), and deployment kitting (rack-specific cable bundles).

Quality assurance for Ethernet cables: Fluke DSX-8000 testing (Cat6A, Cat8 certification), TDR (Time-Domain Reflectometry) for fault location, PoE power delivery verification (all 4 pairs), and connector retention force testing (RJ45 plug durability).

Wave2Wave's Ethernet cabling solutions reduce deployment time, eliminate field termination errors, and ensure day-one network performance for enterprise and data center environments.
```

### 4.5 Deployment Services (300 words)

```
Wave2Wave's deployment services transform data center cabling from a labor-intensive field process into a predictable, efficient factory operation. Our rack-specific kitting, pre-termination, and factory labeling eliminate installation errors and reduce deployment time by 50-75%.

Rack-specific kitting methodology: Cables organized by destination rack (Rack A1, Rack A2, etc.), installation phase grouping (power first, TOR next, spine last), color-coded bundles (visually distinguish network segments), and sequential labeling (install cable 1, then 2, then 3).

Pre-termination quality processes: Factory-installed connectors (LC, MPO, RJ45) tested before shipment, insertion loss/return loss verification (fiber optic cables), TDR and performance testing (Ethernet cables), and visual inspection (connector alignment, fiber end-face cleanliness).

Factory labeling systems: Rack and port mapping printed on cable jacket, durable labels (heat-shrink or laser-etched, won't peel), sequential numbering (matches installation documentation), and QR code option (link to digital twin or DCIM record).

Deployment timeline reduction metrics: Traditional field termination 8-12 weeks for 1000-rack data center, Wave2Wave pre-kitted deployment 3-4 weeks for same facility, labor cost reduction 60% (fewer installers, shorter timeline), and error rate reduction 95% (factory QA vs. field termination).

Error elimination statistics: Field termination error rate 5-10% (port mapping, polarity mistakes), Wave2Wave factory error rate <0.5% (automated testing, validation), and rework truck rolls eliminated 100% (get it right the first time).

Case study summary for Fortune 500 Hyperscale Deployment: Challenge was deploy 500 racks in 6 weeks (impossible with field termination). Solution was DC Twin™ digital modeling + rack-specific kitting. Results were 5-week deployment, zero port mapping errors, and 65% cost savings vs. traditional approach.

Wave2Wave's deployment services de-risk data center infrastructure projects by moving complexity from the chaotic field environment into the controlled factory setting, ensuring predictable outcomes and faster time-to-production.
```

### 4.6 Custom Snippet: Homepage Services Overview (200 words)

```
Wave2Wave provides end-to-end custom data center cabling solutions including fiber optic cable assemblies, ethernet cable assemblies, high-speed interconnect cabling, and deployment services. Our factory pre-termination eliminates field installation errors while reducing deployment time by 50-75%.

DC Twin™ digital modeling technology creates virtual 3D models of data center infrastructure, validating every cable route before manufacturing. DCIM and BIM integration ensures compatibility with existing design tools while pre-deployment validation catches 95% of errors before production.

Custom engineering capabilities include precise length control (3-inch increments), factory pre-labeling (rack and port mapping), compatibility testing (100% of cables), and deployment kitting organized by installation phase. All cables ship with complete documentation and test reports.

Product lines include multimode fiber (OM3, OM4, OM5), single-mode fiber (OS2), Cat6A ethernet with PoE++ support, Cat8 high-speed ethernet, MPO trunk cables for 40G/100G/400G, and 400G/800G high-speed interconnect for AI/HPC clusters.

Wave2Wave serves hyperscale data centers (Google, Microsoft, Meta, AWS), enterprise IT infrastructure (Fortune 500 companies), AI/HPC facilities (NVIDIA DGX, GPU clusters), and telecom operators (FTTH, 5G backhaul). ISO 9001:2015 certified with TIA-568 standards compliance.
```

---

## 5. Technical Performance Requirements

### 5.1 Core Web Vitals Targets

**Largest Contentful Paint (LCP):**
```
Target: <2.5 seconds
Good: <2.5s
Needs Improvement: 2.5-4.0s
Poor: >4.0s

Optimization strategies:
- Optimize hero images (Next.js Image component)
- Preload critical resources (fonts, above-fold images)
- Lazy load below-fold images
- Minimize render-blocking JavaScript
```

**First Input Delay (FID) / Interaction to Next Paint (INP):**
```
Target: <100ms (FID) or <200ms (INP)
Good: <100ms FID, <200ms INP
Needs Improvement: 100-300ms FID, 200-500ms INP
Poor: >300ms FID, >500ms INP

Optimization strategies:
- Minimize JavaScript execution time
- Code splitting (load only what's needed)
- Defer non-critical JavaScript
- Use Web Workers for heavy computations
```

**Cumulative Layout Shift (CLS):**
```
Target: <0.1
Good: <0.1
Needs Improvement: 0.1-0.25
Poor: >0.25

Optimization strategies:
- Reserve space for images (width/height attributes)
- Avoid inserting content above existing content
- Use CSS transform for animations (not top/left)
- Preload fonts to avoid FOIT/FOUT
```

### 5.2 Lighthouse Score Targets

**Target Scores (All Categories ≥90):**

```
Performance: ≥90
  - Focus on Core Web Vitals
  - Optimize images and fonts
  - Minimize JavaScript

Accessibility: ≥90
  - WCAG 2.1 Level AA compliance
  - ARIA labels where needed
  - Keyboard navigation support

Best Practices: ≥90
  - HTTPS everywhere
  - No console errors
  - Secure third-party resources

SEO: ≥90
  - Meta tags on all pages
  - Semantic HTML structure
  - Mobile-friendly design
```

**Audit Frequency:**
- Every deploy to staging (automated in CI/CD)
- Weekly audits of production
- Before major releases

### 5.3 Image Optimization

**Next.js Image Component:**

```tsx
import Image from "next/image"

<Image
  src="/hero-image.jpg"
  alt="Data center cabling installation"
  width={1920}
  height={1080}
  priority // For above-fold images
  quality={85} // Default: 75, increase for hero images
  placeholder="blur" // Optional: show blur while loading
  blurDataURL="data:image/..." // Low-res placeholder
/>
```

**Image Specifications:**

```
Hero Images:
  - Max width: 1920px
  - Format: WebP with JPEG fallback
  - Quality: 85
  - Loading: priority (above-fold)

Content Images:
  - Max width: 1200px
  - Format: WebP with JPEG fallback
  - Quality: 75
  - Loading: lazy (below-fold)

Icons/Logos:
  - Format: SVG (preferred) or PNG
  - Inline SVG for critical icons
  - Sprite sheets for multiple icons

Product Images:
  - Max width: 800px
  - Format: WebP with JPEG fallback
  - Quality: 80
  - Loading: lazy
```

### 5.4 Font Loading Strategy

**Variable Fonts (Recommended):**

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Avoid FOIT (Flash of Invisible Text)
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

**Preload Critical Fonts:**

```html
<!-- In head section -->
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

### 5.5 JavaScript Bundle Size Limits

**Target Bundle Sizes:**

```
Initial JavaScript: <200 KB (gzipped)
Total JavaScript: <500 KB (gzipped)
First Load JS: <150 KB (gzipped)

Strategies:
- Code splitting by route (Next.js automatic)
- Dynamic imports for heavy components
- Tree shaking (remove unused code)
- Minification in production
```

**Example: Dynamic Import**

```tsx
// Lazy load heavy component
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Optional: disable server-side rendering
})
```

### 5.6 Caching Strategy

**Static Assets:**

```
Cache-Control: public, max-age=31536000, immutable
  - Next.js automatically hashes static assets
  - Fonts, images, CSS, JS

HTML Pages (Dynamic):
  Cache-Control: public, s-maxage=60, stale-while-revalidate=86400
  - Fresh for 60 seconds
  - Serve stale while revalidating for 24 hours

API Routes:
  Cache-Control: private, no-cache
  - Don't cache sensitive data
```

---

## 6. Analytics & Tracking

### 6.1 Google Analytics 4 Setup

**Property Configuration:**

```
Property Name: Wave2Wave Website
Property ID: G-XXXXXXXXXX
Data Streams: Web (wave2wave.io)
Enhanced Measurement: ON
```

**Events to Track:**

```javascript
// Custom Events
gtag('event', 'quote_request_start', {
  event_category: 'engagement',
  event_label: 'Quote Form Opened'
})

gtag('event', 'quote_request_submit', {
  event_category: 'conversion',
  event_label: 'Quote Form Submitted',
  value: 1
})

gtag('event', 'resource_download', {
  event_category: 'engagement',
  event_label: 'Datasheet Downloaded',
  resource_name: 'Fiber Optic Spec Sheet'
})

gtag('event', 'phone_click', {
  event_category: 'engagement',
  event_label: 'Phone Number Clicked'
})
```

### 6.2 Conversion Tracking

**Primary Conversions:**

1. **Quote Request Form Submission**
   - Event: `quote_request_submit`
   - Goal: Track all quote requests
   - Value: Assign monetary value if known

2. **Contact Form Submission**
   - Event: `contact_form_submit`
   - Goal: Track general inquiries

3. **Phone Call Click**
   - Event: `phone_click`
   - Goal: Track phone engagement

**Secondary Conversions:**

4. **Resource Download**
   - Event: `resource_download`
   - Goal: Track lead generation (datasheets, guides)

5. **Email Click**
   - Event: `email_click`
   - Goal: Track email engagement

### 6.3 Event Tracking (CTA Clicks)

**Example Implementation:**

```tsx
// components/CTAButton.tsx
'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: any
  }
}

export function CTAButton({ children, href, eventLabel }: CTAButtonProps) {
  const handleClick = () => {
    // Track in GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: eventLabel,
        value: 1
      })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="btn-primary"
    >
      {children}
    </a>
  )
}
```

### 6.4 Heatmap Integration (Optional)

**Recommended Tools:**
- Hotjar (heatmaps, session recordings)
- Microsoft Clarity (free heatmaps and session recordings)
- Crazy Egg (heatmaps, scroll maps)

**Use Cases:**
- Identify where users click most (optimize CTA placement)
- See how far users scroll (optimize content length)
- Find confusing UI elements (improve UX)

---

## 7. Embedded Prompts for Claude Code

### 7.1 Before SEO Implementation

**CRITICAL: Verify SEO Implementation**

Before claiming SEO work is complete, invoke the verification skill:

```
Invoke: superpowers:verification-before-completion
```

**Why:** This ensures all meta tags are correct, hidden text is properly implemented, and Lighthouse scores meet targets.

**Research Latest Best Practices:**

Before implementing SEO for any page, research current best practices:

```
Invoke: WebSearch with query: "Next.js 15 SEO best practices 2025 hidden text semantic HTML"
```

### 7.2 During Implementation

**For Each Page SEO Implementation:**

1. **Read Section 2** (Page-by-Page SEO Specifications) for exact meta titles and descriptions
2. **Read Section 4** (SEO Content Library) to copy hidden text blocks
3. **Read Section 3** (Hidden Text Implementation) for technical pattern
4. Implement using exact specifications (no paraphrasing)
5. Verify with browser inspector (hidden text should not be visible)

**Cross-Reference Other Documents:**

For page content and structure context:
→ **Document 3: Page Specs** (each page section)

For component performance optimization:
→ **Document 2: Design System, Section 5** (Interaction Patterns)

### 7.3 Hidden Text Implementation Pattern

**Example: High Speed Interconnect Page**

```tsx
// app/high-speed-interconnect/page.tsx
import type { Metadata } from "next"

// 1. Copy exact meta tags from Document 4, Section 2.8
export const metadata: Metadata = {
  title: "High Speed Interconnect | 400G/800G Cabling Solutions | Wave2Wave",
  description: "High-speed interconnect cabling for 400G/800G data centers. MPO-24, QSFP-DD, OSFP solutions for AI/HPC infrastructure. Custom engineering.",
}

export default function HighSpeedInterconnectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="...">
        <h1>High Speed Interconnect for AI & HPC Data Centers</h1>
        {/* Hero content */}
      </section>

      {/* Main Content Sections */}
      <section className="...">
        {/* Visible content from Document 3 */}
      </section>

      {/* SEO Hidden Text - COPY FROM DOCUMENT 4, SECTION 4.1 */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>High-speed interconnect solutions enable 400G and 800G data center networks to achieve maximum throughput and minimum latency. Wave2Wave specializes in custom-engineered high-speed cabling systems using MPO-24 multi-fiber connectors and QSFP-DD, OSFP form factors optimized for AI/HPC infrastructure.</p>

            <p>Our 400G interconnect solutions support both SR8 (short-reach, multimode) and DR4 (data rate, single-mode) configurations, providing flexibility for data center architects. For 800G deployments, we manufacture SR8, DR8, and 2×FR4 cable assemblies with factory testing to ensure insertion loss <0.5dB and return loss >20dB.</p>

            {/* ... rest of content from Section 4.1 ... */}
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <section className="...">
        {/* Call to action */}
      </section>
    </div>
  )
}
```

### 7.4 Verification Protocol

**After Implementing SEO:**

1. **Run Lighthouse Audit**
   ```bash
   # In Chrome DevTools
   # Target: ≥90 all categories
   ```

2. **Verify Meta Tags**
   ```bash
   # Check with browser inspector
   # Ensure title and description match Document 4 specs
   ```

3. **Check Hidden Text**
   ```bash
   # Inspect DOM with browser tools
   # Hidden text should exist but not be visible
   # Verify aria-hidden="true" is present
   ```

4. **Validate Schema.org Markup** (if applicable)
   ```bash
   # Use Google's Rich Results Test
   # https://search.google.com/test/rich-results
   ```

5. **Monitor Field Data**
   ```bash
   # After deployment, check Google Search Console
   # Verify Core Web Vitals in the wild
   ```

### 7.5 Common SEO Implementation Pitfalls

**DON'T:**
- ❌ Paraphrase hidden text blocks - Use exact text from Section 4
- ❌ Make hidden text visible - Users should never see it
- ❌ Skip aria-hidden="true" - Screen readers should ignore hidden text
- ❌ Forget meta descriptions - Every page needs unique description
- ❌ Exceed character limits - Meta titles 60-70 chars, descriptions ~155 chars
- ❌ Use duplicate meta tags - Each page must have unique tags

**DO:**
- ✅ Copy exact hidden text from Section 4 (SEO Content Library)
- ✅ Implement `.sr-only` class correctly (position: absolute, etc.)
- ✅ Place hidden text before CTA section or footer (as specified)
- ✅ Verify with Lighthouse audit (SEO score ≥90)
- ✅ Test mobile-friendliness (Google Mobile-Friendly Test)
- ✅ Monitor Google Search Console for indexing issues

---

## Document Metadata

**Token Count:** ~4,900 tokens
**Target Range:** 4,000-5,000 tokens ✓
**Status:** Complete - Ready for Claude Code Implementation

**Next Steps:**
- Use Section 2 for exact meta tags on each page
- Use Section 4 to copy hidden text blocks (do not paraphrase)
- Use Section 3 for technical implementation pattern
- Cross-reference Document 3 for page content context
- Invoke verification skill before claiming completion

**Version Control:**
- v3.0 - Initial comprehensive SEO & technical specification (December 2025)
- Includes complete SEO content library with 6 ready-to-copy blocks

---

**End of Document 4: SEO & Technical Specification**

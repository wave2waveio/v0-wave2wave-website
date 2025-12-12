# Wave2Wave.io Page-by-Page Specifications
## PRD v3.0 - Document 3 of 4

**Version:** 3.0
**Date:** December 2025
**Document Type:** Page-by-Page Content Specifications
**Status:** Production Ready

---

## Document Quick Reference

**Document 1 - Main PRD:** Strategic overview, navigation architecture, implementation guidance
**Document 2 - Design System:** Color palette, typography, components, interactions
**Document 3 - Page Specs (THIS DOCUMENT):** Content and structure for every page
**Document 4 - SEO & Technical:** SEO strategy, hidden text library, performance specs

---

## Table of Contents

1. [Homepage / Solutions](#1-homepage--solutions)
2. [Custom Engineering](#2-custom-engineering)
3. [DC Twin™ Digital Modeling](#3-dc-twin-digital-modeling)
4. [Deployment Services](#4-deployment-services)
5. [Fiber Solutions](#5-fiber-solutions)
6. [Fiber - Hyperscalers](#6-fiber---hyperscalers)
7. [Fiber - Patch Panels](#7-fiber---patch-panels)
8. [High Speed Interconnect](#8-high-speed-interconnect)
9. [Ethernet Solutions](#9-ethernet-solutions)
10. [Ethernet - Patch Panels](#10-ethernet---patch-panels)
11. [Systems & Accessories](#11-systems--accessories)
12. [Testing Solutions](#12-testing-solutions)
13. [Resources Hub & Articles](#13-resources-hub--articles)
14. [Company](#14-company)
15. [Contact](#15-contact)
16. [Embedded Prompts for Claude Code](#16-embedded-prompts-for-claude-code)

---

## Implementation Note

**For each page:**
- Use exact H1 tags as specified
- Follow content structure outlined
- Apply component styles from **Document 2** (Design System)
- Implement SEO metadata from **Document 4, Section 2** (Page-by-Page SEO)
- Add hidden text from **Document 4, Section 4** (SEO Content Library)

---

## 1. Homepage / Solutions

**Route:** `/`
**Purpose:** Present Wave2Wave's value proposition and key solutions. This consolidated page replaces separate industry pages and serves as the primary entry point.

**SEO Metadata:** See Document 4, Section 2.1

### 1.1 Hero Section

```
H1: "Connecting the Physical Backbone of the AI & Datacenter Era"

Subtext: "Engineered cabling systems that move data, power, and possibility at the speed of light – custom-built, pre-labeled, and deployment-ready."

Background:
  - Panoramic data center image (1920×800px desktop)
  - OR Gradient: from-[#0072CE] to-[#333333] (if no image)

CTA: "Request a Quote" (Primary Button from Document 2)

Design Notes:
  - Hero height: 600px desktop / 400px mobile
  - Text color: White
  - Content: Centered, max-width 800px
  - CTA margin-top: 32px
```

### 1.2 The Wave2Wave Difference

**Section H2:** "Why Wave2Wave?"

**Layout:** 5 feature cards in responsive grid (3 columns desktop → 2 tablet → 1 mobile)

**Cards Content:**

1. **Custom Cable Engineering**
   - Icon: Ruler/measurement icon (48×48px, Electric Blue #0072CE)
   - Title (H3): "Custom Cable Engineering"
   - Description: "Every cable system engineered to exact specifications (3-inch increments) – no off-the-shelf compromises. Built to your rack geometry for perfect airflow and fit."

2. **Factory Labeling & Identification**
   - Icon: Tag/label icon
   - Title (H3): "Factory Labeling & Identification"
   - Description: "Zero field errors and 50-75% faster installs. Every cable ships pre-labeled to your rack and port map – installers just plug in. Installs in days, audits in minutes."

3. **Advanced Deployment Kitting**
   - Icon: Box/package icon
   - Title (H3): "Advanced Deployment Kitting"
   - Description: "Rack-specific, pre-kitted cables organized by installation phase. No sorting, no waste – cutting installation time by 50-75% and bringing GPU clusters online weeks earlier."

4. **100% Quality Assurance**
   - Icon: Checkmark/shield icon
   - Title (H3): "100% Quality Assurance"
   - Description: "Every assembly factory-tested and certified for mission-critical reliability. Insertion loss <0.35dB for fiber, TDR verification for copper, bit error rate <1E-12 for AI workloads."

5. **Fast Global Delivery**
   - Icon: Truck/plane icon
   - Title (H3): "Fast Global Delivery"
   - Description: "3-4 week typical delivery – much faster than 8-12 week industry norms. From design to deployment, we move at the speed your infrastructure demands."

**Component Reference:** Use Feature Card from Document 2, Section 4.4

### 1.3 Solutions by Environment

**Section H2:** "Solutions for Your Environment"

**Intro Paragraph:** "Wave2Wave delivers infrastructure for the world's most demanding data centers. Whether you're deploying AI clusters, scaling hyperscale cloud, or refreshing enterprise racks, our custom cabling systems accelerate deployment and eliminate errors."

**Layout:** Alternating text/image sections (text left + image right, then flip)

**Subsections:**

**1. Enterprise Data Centers & Engineering Labs**

- **H3:** "Enterprise Data Centers & Engineering Labs"
- **Content:**
  - Rack-ready kits labeled by cabinet/port to enable 50-75% faster installs
  - Mix-and-match bundles (10G copper, 25G/100G/400G fiber) delivered as single SKUs
  - Modular fiber patch panels that allow protocol upgrades without re-cabling
- **Image:** Corporate data center with organized cabling (800×600px)

**2. AI & GPU Cluster Data Centers**

- **H3:** "AI & GPU Cluster Data Centers"
- **Content:**
  - NVIDIA-validated harnesses for DGX/HGX GPU clusters (400G/800G InfiniBand and Ethernet fabrics)
  - Factory-tested for deployments from 8 to 1000+ nodes
  - Custom polarity management to eliminate the #1 cause of AI network errors
- **Image:** GPU servers or high-density computing cluster (800×600px)

**3. Hyperscale & Cloud Networks**

- **H3:** "Hyperscale & Cloud Networks"
- **Content:**
  - Modular patch panel systems supporting 10G → 400G → 800G migrations without replacing cabling
  - Spine-leaf kitting that reduces hundreds of SKUs into turnkey assemblies
  - End-to-end solutions that scale with next-gen (800G/1.6T) architectures
- **Link:** "Learn more about hyperscale fiber solutions →" (links to `/fiber/hyperscalers`)
- **Image:** Large data center facility or cloud concept (800×600px)

**4. Telecom & Fiber-to-the-Home (FTTH)**

- **H3:** "Telecom & Fiber-to-the-Home (FTTH)"
- **Content:**
  - Pre-connectorized assemblies that cut truck rolls by 40%
  - Compliance with government standards for broadband projects
  - Quick-connect fiber solutions for rapid outdoor deployments
- **Image:** Technician working on outdoor fiber connections (800×600px)

### 1.4 Trusted by Industry Leaders

**Section H2:** "Trusted by Industry Leaders"

**Content:** Logo grid of major clients (grayscale logos)

**Logos:** Cisco, Dell, Equinix, Google, Microsoft, Meta, AWS, NVIDIA, etc.

**Layout:**
- 3-4 rows, centered
- Max-width: 1200px
- Grid: 4-5 logos per row desktop → 3 tablet → 2 mobile
- Logos: Grayscale filter, slight opacity (0.6), hover to full color/opacity

**Optional Animation:** Fade in on scroll (subtle, 0.6s ease)

### 1.5 CTA Section

**Background:** Electric Blue (#0072CE) with white text

**Content:**
- **H2:** "Ready to Accelerate Your Deployment?"
- **Subtext:** "Contact us to discuss your custom cabling solution and see how Wave2Wave can transform your infrastructure timeline."
- **Button:** "Get Started" (Secondary Button style from Document 2 - white border + text)

**Design Notes:**
- Section padding: 64px vertical
- Content: Centered, max-width 800px

### 1.6 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use custom snippet from Document 4, Section 4.6 (Homepage Services Overview, 200 words)

---

## 2. Custom Engineering

**Route:** `/custom-engineering`
**Purpose:** Highlight Wave2Wave's ability to design and build custom cabling and connectivity solutions to exact customer specifications.

**SEO Metadata:** See Document 4, Section 2.2

### 2.1 Hero Section

```
H1: "Custom Engineering – Cables & Systems Built to Your Spec"

Subtext: "No guesswork, no off-the-shelf compromises. We work from your design (DCIM models, CAD drawings) to create bespoke cabling systems built exactly to fit your project."

Background: Close-up of custom cable assemblies with labels
```

### 2.2 Precision-Engineered Cables

**Section H2:** "Precision-Engineered Cables"

**Intro Paragraph:**
"Unlike catalog vendors with fixed lengths, Wave2Wave cables are engineered to your exact rack geometry, manufactured in 3-inch increments for an exact fit. Every cable is built to optimize airflow, eliminate slack, and match your specifications precisely."

**Customization Options (Bullet List):**
- **Precise Lengths & Geometry:** Built in 3-inch increments to match your pathway design
- **Custom Connectors:** Choose connector types (LC, SC, MTP, RJ45, etc.) and polarity
- **Jacket Colors:** Organize by color conventions (e.g., blue for 10G, aqua for 40G)
- **Factory Labeling:** Pre-labeled to your rack/port/VLAN mapping
- **Right First Time:** Delivered ready to install with zero on-site termination

**Why Custom vs. Off-the-Shelf:**
- Eliminate field errors with exact-fit cables
- Reduce on-site termination labor and associated costs
- Ensure neat, professional racks with no excess slack or cable trays of waste

**Image:** Side-by-side comparison – messy catalog cables vs. neat Wave2Wave labeled cables (1200×600px)

### 2.3 Pre-Engineered Cable Bundles

**Section H2:** "Pre-Engineered Cable Bundles"

**Intro Paragraph:**
"For complex deployments, Wave2Wave provides pre-engineered cable bundles under one SKU – multiple cables integrated as one assembly. This simplifies procurement, logistics, and installation."

**Benefits (Bullet List):**
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

**Image:** Photo of a cable bundle with multiple cables bound together, showing labels (800×600px)

### 2.4 Factory-Tested for Reliability

**Section H2:** "Factory-Tested for Reliability"

**Intro Paragraph:**
"Quality assurance is integral to every custom assembly. All cables are 100% tested in our ISO-certified facility before shipment."

**Testing Process (Bullet List):**
- **Fiber:** Insertion loss, return loss, and visual inspection (every strand)
- **Copper:** TDR verification, continuity, and Fluke certification
- **High-speed DAC/AOC:** Bit error rate testing at rated speed
- **Power:** Hi-pot testing and conductor verification

**Closing Statement:**
"Every cable is factory-terminated and tested to meet exacting standards – custom doesn't mean risky. It means precision."

### 2.5 Link to DC Twin™

**Callout Box (Visually Distinct):**

**Background:** Light blue (#0090FF with 10% opacity)
**Border:** 2px solid Electric Blue (#0072CE)

**Content:**
- **Headline:** "Before we build any cable, we can design it virtually."
- **Text:** "Learn about our DC Twin™ digital modeling platform that creates a virtual replica of your data hall, validates every cable route, and eliminates surprises before production."
- **Button:** "Explore DC Twin™ →" (links to `/custom-engineering/dc-twin`)

### 2.6 CTA Section

**Same as Homepage, tailored text:**
- **H2:** "Ready to Discuss Your Custom Cabling Needs?"
- **Subtext:** "Contact our engineering team today to explore custom solutions for your data center."

### 2.7 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use Deployment Services block (partial, ~250-300 words) from Document 4, Section 4.5

---

## 3. DC Twin™ Digital Modeling

**Route:** `/custom-engineering/dc-twin`
**Purpose:** Deep-dive into Wave2Wave's Digital Twin data center design service.

**SEO Metadata:** See Document 4, Section 2.3

### 3.1 Hero Section

```
H1: "DC Twin™ – Design It. Validate It. Build It – Virtually."

Subtext: "A digital modeling platform that creates a virtual replica of your data hall before production, validating every rack and cable in software."

Background: DCIM 3D model screenshot or architectural blueprint style
```

### 3.2 What is DC Twin™?

**Section H2:** "Virtual Data Center Modeling"

**Intro Paragraph:**
"DC Twin™ is a digital modeling platform that creates a virtual replica of your data hall before production. Using industry-standard DCIM tools (Sunbird, Nlyte), we model every rack, cable route, and connector in software – then use that model to manufacture cables with 99% length accuracy."

**How It Works (Process Steps):**

1. **Import Your Design**
   - Upload DCIM models, CAD drawings, or rack layouts
   - Compatible with Sunbird, Nlyte, Schneider Electric, AutoCAD

2. **Model Every Connection**
   - Virtual representation of every rack, cable tray, and port
   - Algorithm calculates optimal cable routes and lengths

3. **Validate Before Production**
   - Catch errors in software (port mapping, polarity, length)
   - Generate manufacturing specifications with 3-inch precision

4. **Manufacture to Spec**
   - Cables built to exact virtual model
   - Pre-labeled with rack/port mapping from DC Twin™

5. **Deploy with Confidence**
   - Install cables knowing they'll fit perfectly
   - Reduce deployment time by 60%, errors by 95%

**Visual:** Flowchart or numbered diagram showing the 5 steps

### 3.3 Key Features

**Section H2:** "DC Twin™ Capabilities"

**Feature Grid (3 columns):**

**1. DCIM Integration**
- Import from Sunbird dcTrack, Nlyte, Schneider EcoStruxure
- Automatic rack layout and port mapping
- Bi-directional sync with DCIM platforms

**2. Cable Route Optimization**
- Algorithm finds shortest viable path
- Considers bend radius, tray capacity, airflow
- Generates bill of materials (BOM) automatically

**3. Pre-Deployment Validation**
- Port mapping verification (every cable to correct port)
- Polarity checking (fiber A-to-B, B-to-A)
- Power budget calculations (optical loss budgets)

**4. 3D Visualization**
- Explore virtual data hall in 3D
- See cable routes before production
- Identify conflicts and optimize paths

**5. Manufacturing Automation**
- Direct export to production systems
- Labels generated from DC Twin™ model
- QR codes link back to digital twin

**6. Documentation & Audit**
- Complete as-built documentation
- PDF reports with cable routes and specs
- Searchable database of all cables

### 3.4 Benefits & ROI

**Section H2:** "Proven Results"

**Metrics Grid (3 columns):**

**95% Error Reduction**
- Eliminate port mapping mistakes
- Catch polarity errors in software
- Validate before production

**60% Faster Deployment**
- Pre-kitted, pre-labeled cables
- No field termination
- Installers just plug in

**40% Lower TCO**
- Fewer truck rolls and rework
- Reduced installation labor
- Faster time-to-production

**Case Study Callout:**
"Fortune 500 hyperscale deployment: 500 racks in 5 weeks, zero port mapping errors, 65% cost savings vs. traditional approach."

### 3.5 CTA Section

**H2:** "Ready to Model Your Data Center?"
**Subtext:** "Contact us to learn how DC Twin™ can transform your next deployment."

### 3.6 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use DC Twin™ block (full, 350-400 words) from Document 4, Section 4.2

---

## 4. Deployment Services

**Route:** `/deployment-services`
**Purpose:** Explain Wave2Wave's deployment kitting, pre-labeling, and installation services.

**SEO Metadata:** See Document 4, Section 2.4

### 4.1 Hero Section

```
H1: "Deployment Kitting & Installation Services"

Subtext: "Rack-specific cable kits that reduce installation time by 50-75% and eliminate field errors."

Background: Data center installation with organized cable bundles
```

### 4.2 Rack-Specific Kitting

**Section H2:** "Organized for Speed"

**Intro:**
"Wave2Wave's deployment kitting organizes cables by rack, phase, and installation sequence – cutting deployment time in half."

**Kitting Methodology:**
- **By Rack:** Cables grouped by destination (Rack A1, A2, etc.)
- **By Phase:** Power first, TOR next, spine last
- **By Sequence:** Install cable 1, then 2, then 3 (numbered)
- **Color-Coded:** Visual organization by network segment

**Image:** Photo of deployment kit with labeled bundles (800×600px)

### 4.3 Factory Pre-Labeling

**Section H2:** "Pre-Labeled for Zero Errors"

**Content:**
"Every cable ships with durable labels printed with rack and port mapping. No field labeling, no mistakes, no delays."

**Label Types:**
- **Heat-Shrink Labels:** Durable, won't peel or fade
- **Laser-Etched:** Permanent identification
- **QR Codes:** Link to DC Twin™ model or DCIM record
- **Sequential Numbers:** Match installation documentation

**Benefit:** "Installers just read the label and plug in. Audits take minutes instead of hours."

### 4.4 Timeline Comparison

**Section H2:** "50-75% Faster Deployment"

**Comparison Table (2 columns):**

| Traditional Field Termination | Wave2Wave Pre-Kitted |
|-------------------------------|----------------------|
| 8-12 weeks for 1000-rack DC | 3-4 weeks for same facility |
| 5-10% error rate | <0.5% error rate |
| Field termination required | Zero field termination |
| Multiple truck rolls for rework | Get it right the first time |

### 4.5 Case Study

**Headline:** "Real Results: Fortune 500 Hyperscale Deployment"

**Challenge:** Deploy 500 racks in 6 weeks (impossible with field termination)

**Solution:** DC Twin™ digital modeling + rack-specific kitting

**Results:**
- ✓ 5-week deployment (1 week ahead of schedule)
- ✓ Zero port mapping errors
- ✓ 65% cost savings vs. traditional approach

### 4.6 CTA Section

**H2:** "Ready to Accelerate Your Deployment?"
**Subtext:** "Contact us to discuss deployment kitting for your data center project."

### 4.7 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use Deployment Services block (full, 300-350 words) from Document 4, Section 4.5

---

## 5. Fiber Solutions

**Route:** `/fiber`
**Purpose:** Overview of Wave2Wave's fiber optic cable offerings.

**SEO Metadata:** See Document 4, Section 2.5

### 5.1 Hero Section

```
H1: "Custom Fiber Optic Cable Solutions"

Subtext: "Multimode and single-mode fiber cables with LC, SC, MPO connectors. Factory-tested, pre-labeled, deployment-ready."

Background: Fiber optic cables with glowing light
```

### 5.2 Fiber Types Overview

**Section H2:** "Multimode & Single-Mode Solutions"

**Grid (2 columns):**

**Multimode Fiber:**
- **OM3:** 10G up to 300m (aqua jacket)
- **OM4:** 10G up to 550m, 40G/100G up to 150m (aqua jacket)
- **OM5:** Optimized for SWDM, wavelength division (lime green jacket)

**Applications:** Short-reach data center connections, 10G/40G/100G networks

**Single-Mode Fiber:**
- **OS2:** 10G/40G/100G long-haul (yellow jacket)
- **Ultra-Low Loss (ULL):** <0.18dB/km attenuation for carrier networks

**Applications:** Long-distance connections, campus networks, telecom

### 5.3 Connector Types

**Section H2:** "Connector Options"

**Grid (4 columns):**

**LC (Lucent Connector):**
- Duplex format
- Most common for 10G/25G/100G
- Small form factor

**SC (Subscriber Connector):**
- Simplex or duplex
- Telecom and enterprise standard
- Push-pull latching

**MPO (Multi-Fiber Push-On):**
- 8, 12, or 24 fibers
- High-density 40G/100G/400G
- Polarity schemes (Method A, B, C)

**CS (Connector Style):**
- Ultra-small form factor
- Next-gen 800G
- Emerging standard

**Image:** Photos of each connector type (side-by-side)

### 5.4 Testing & Quality

**Section H2:** "Factory-Tested Reliability"

**Content:**
"All fiber optic cables are 100% tested before shipment."

**Test Parameters:**
- **Insertion Loss:** <0.35dB (multimode), <0.5dB (single-mode)
- **Return Loss:** >20dB (multimode), >35dB (single-mode APC)
- **Visual Inspection:** Fiber end-face cleanliness (every connector)
- **OTDR Testing:** Optical time-domain reflectometry (trunk cables)

### 5.5 Subpage Links

**Callout Boxes (2 columns):**

**Hyperscale Solutions:**
- "400G/800G fiber for AI/HPC clusters"
- Link: "Explore Hyperscale Fiber →" (`/fiber/hyperscalers`)

**Fiber Patch Panels:**
- "High-density cassette systems"
- Link: "View Patch Panels →" (`/fiber/patch-panels`)

### 5.6 CTA Section

**H2:** "Custom Fiber Solutions for Your Data Center"
**Subtext:** "Contact us to discuss fiber optic cable assemblies tailored to your needs."

### 5.7 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use Fiber Optic Solutions block (full, 400-450 words) from Document 4, Section 4.3

---

## 6. Fiber - Hyperscalers

**Route:** `/fiber/hyperscalers`
**Purpose:** Detail 400G/800G solutions for hyperscale and AI/HPC data centers.

**SEO Metadata:** See Document 4, Section 2.6

### 6.1 Hero Section

```
H1: "400G/800G Hyperscale Data Center Cabling"

Subtext: "High-speed fiber optic solutions for AI infrastructure, GPU clusters, and hyperscale networks."

Background: GPU servers or high-density data center
```

### 6.2 400G/800G Solutions

**Section H2:** "High-Speed Interconnect for AI/HPC"

**Content:**
"Wave2Wave manufactures 400G and 800G fiber optic cable assemblies optimized for AI training clusters, GPU servers, and hyperscale spine-leaf architectures."

**Configurations:**

**400G Options:**
- SR8 (short-reach, multimode, 100m)
- DR4 (data rate, single-mode, 500m)
- FR4 (frequency division, single-mode, 2km)

**800G Options:**
- SR8 (short-reach, multimode, 100m)
- DR8 (data rate, single-mode, 500m)
- 2×FR4 (dual wavelength, single-mode, 2km)

### 6.3 Form Factors

**Section H2:** "MPO-24 & QSFP-DD Connectivity"

**Grid (3 columns):**

**MPO-24:**
- 24-fiber trunk cables
- Polarity: Method A, B, C
- Breakout options to LC duplex

**QSFP-DD:**
- 400G transceiver compatibility
- 8-lane electrical interface
- Backward compatible with QSFP+

**OSFP:**
- 800G transceiver support
- Higher power budget
- Emerging for next-gen AI

### 6.4 AI/HPC Optimizations

**Section H2:** "Optimized for AI Training Clusters"

**Content:**
"NVIDIA DGX, Google TPU, Meta OAM clusters require specialized cabling:"

**Features:**
- Rail-optimized routing for GPU server racks
- Pre-labeled breakout cables for spine-leaf
- Polarity validation (eliminates #1 cause of AI network errors)
- DC Twin™ modeling for complex topologies

**Supported Platforms:**
- NVIDIA DGX/HGX (InfiniBand, Ethernet)
- Google TPU clusters
- Meta OAM (Open Accelerator Module)
- AMD Instinct clusters

### 6.5 CTA Section

**H2:** "Deploy AI Infrastructure Faster"
**Subtext:** "Contact us for 400G/800G cabling solutions for your GPU cluster or hyperscale network."

### 6.6 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use High Speed Interconnect block (partial, ~200 words) + Fiber block (partial, ~150 words) from Document 4, Sections 4.1 and 4.3

---

## 7. Fiber - Patch Panels

**Route:** `/fiber/patch-panels`
**Purpose:** Detail fiber optic patch panel and cassette systems.

**SEO Metadata:** See Document 4, Section 2.7

### 7.1 Hero Section

```
H1: "Fiber Optic Patch Panels & Cassette Systems"

Subtext: "High-density modular patch panels for scalable data center connectivity."

Background: Fiber patch panel with cables connected
```

### 7.2 Cassette Systems

**Section H2:** "Modular Cassette Design"

**Content:**
"Wave2Wave's fiber patch panels use modular cassette systems for flexible, high-density connectivity."

**Cassette Types:**
- **LC Duplex:** 24-port, 48-port, 96-port
- **MPO Adapter:** 12-fiber, 24-fiber cassettes
- **SC Adapter:** 24-port (telecom standard)

**Benefits:**
- Tool-less cassette installation
- Hot-swappable modules
- Future-proof (upgrade protocols without re-cabling)

### 7.3 Density Options

**Section H2:** "High-Density Solutions"

**Table:**

| Panel Type | Port Count | Rack Units |
|------------|-----------|-----------|
| LC Duplex | 96 ports | 1U |
| LC Duplex | 144 ports | 2U |
| MPO-24 | 288 fibers | 1U |

### 7.4 Cross-Link to Ethernet

**Callout Box:**
"Also available: Ethernet Patch Panels with RJ45 cassettes for Cat6A/Cat8 connectivity."
Link: "View Ethernet Patch Panels →" (`/ethernet/patch-panels`)

### 7.5 CTA Section

**H2:** "Modular Patch Panels for Scalable Networks"
**Subtext:** "Contact us to discuss fiber patch panel solutions for your data center."

### 7.6 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use Fiber Optic Solutions block (partial, cassette focus, ~250-300 words) from Document 4, Section 4.3

---

## 8. High Speed Interconnect

**Route:** `/high-speed-interconnect`
**Purpose:** Detail high-speed interconnect cabling for 400G/800G networks.

**STATUS:** ⚠️ **Implemented but NOT documented in PRD v2.1**

**SEO Metadata:** See Document 4, Section 2.8

### 8.1 Hero Section

```
H1: "High Speed Interconnect for AI & HPC Data Centers"

Subtext: "400G/800G cabling solutions for AI training clusters, GPU servers, and hyperscale networks."

Background: AI/HPC data center or GPU rack
```

### 8.2 Content Audit Needed

**NOTE TO CLAUDE CODE:**
This page exists in the live implementation but is NOT documented in PRD v2.1. Before implementing content, audit the current live page at `/high-speed-interconnect/page.tsx` to understand existing structure.

**Recommended Content Structure:**

1. **Hero Section** (as specified above)
2. **400G/800G Overview** (similar to Fiber Hyperscalers content)
3. **Form Factors** (MPO-24, QSFP-DD, OSFP)
4. **AI/HPC Applications** (NVIDIA DGX, GPU clusters)
5. **Standards Compliance** (IEEE 802.3bs, 802.3ck)
6. **Custom Engineering** (DC Twin™ integration, polarity validation)
7. **CTA Section**

**Design Notes:**
- Use same layout patterns as Fiber Hyperscalers page
- Emphasize technical specifications (B2B audience)
- Include spec tables (per Document 2, Section 4.6)

### 8.3 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use High Speed Interconnect block (full, 300-350 words) from Document 4, Section 4.1

---

## 9. Ethernet Solutions

**Route:** `/ethernet`
**Purpose:** Overview of Wave2Wave's Cat6A and Cat8 ethernet cable offerings.

**SEO Metadata:** See Document 4, Section 2.9

### 9.1 Hero Section

```
H1: "Custom Ethernet Cable Solutions | Cat6A & Cat8"

Subtext: "High-performance copper cabling with PoE++ support. Factory-terminated, pre-labeled, tested."

Background: Ethernet cables in data center rack
```

### 9.2 Cable Types

**Section H2:** "Cat6A & Cat8 Solutions"

**Grid (2 columns):**

**Cat6A (Augmented Category 6):**
- **Bandwidth:** 500 MHz
- **Speed:** 10GBASE-T (10 Gigabit Ethernet)
- **Distance:** Up to 100 meters
- **Standard:** TIA-568.2-D

**Applications:**
- 10G server-to-switch connections
- Storage networks (iSCSI, NFS)
- VoIP and unified communications

**Cat8 (Category 8):**
- **Bandwidth:** 2000 MHz (2 GHz)
- **Speed:** 25GBASE-T, 40GBASE-T
- **Distance:** Up to 30 meters (data center optimized)
- **Standard:** TIA-568.2-D Amendment 1

**Applications:**
- Short-reach 25G/40G top-of-rack
- High-density server connections
- Next-gen enterprise networks

### 9.3 PoE Support

**Section H2:** "Power over Ethernet Capabilities"

**Table:**

| PoE Standard | Power | Applications |
|--------------|-------|--------------|
| PoE (802.3af) | 15.4W | IP phones, basic cameras |
| PoE+ (802.3at) | 30W | Wireless APs, advanced cameras |
| PoE++ Type 3 (802.3bt) | 60W | High-power APs, building automation |
| PoE++ Type 4 (802.3bt) | 100W | LED lighting, PTZ cameras |

### 9.4 MPTL (Factory-Terminated)

**Section H2:** "MPTL: Modular Plug Terminated Link"

**Content:**
"Wave2Wave's MPTL assemblies come with factory-terminated RJ45 plugs on both ends – eliminating field termination and reducing installation time by 70%."

**Benefits:**
- Zero field termination (no tools, no training)
- 100% factory tested (Fluke DSX-8000 certification)
- Custom lengths (3-inch increments, no cable slack)
- Pre-labeled (rack/port mapping)

### 9.5 Shielding Options

**Section H2:** "Shielded vs. Unshielded"

**Grid (3 columns):**

**UTP (Unshielded):**
- Lower cost
- Adequate for most data centers
- Lighter weight, easier routing

**FTP (Foiled):**
- Alien crosstalk protection
- Critical for 10G high-density bundles
- Shielded overall

**STP (Shielded):**
- Maximum EMI protection
- Industrial environments
- Individual pair shielding

### 9.6 Subpage Link

**Callout Box:**
"Ethernet Patch Panels: High-density RJ45 cassette systems for Cat6A/Cat8 connectivity."
Link: "View Ethernet Patch Panels →" (`/ethernet/patch-panels`)

### 9.7 CTA Section

**H2:** "Custom Ethernet Solutions for Your Data Center"
**Subtext:** "Contact us for Cat6A and Cat8 cable assemblies tailored to your network."

### 9.8 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use Ethernet Cabling block (full, 350-400 words) from Document 4, Section 4.4

---

## 10. Ethernet - Patch Panels

**Route:** `/ethernet/patch-panels`
**Purpose:** Detail ethernet patch panel and RJ45 cassette systems.

**SEO Metadata:** See Document 4, Section 2.10

### 10.1 Hero Section

```
H1: "Ethernet Patch Panels & RJ45 Cassette Systems"

Subtext: "High-density modular patch panels for Cat6A and Cat8 connectivity."

Background: Ethernet patch panel with cables
```

### 10.2 RJ45 Cassette Systems

**Section H2:** "Modular RJ45 Cassettes"

**Content:**
"Modular cassette design provides tool-less installation and hot-swappable connectivity."

**Cassette Types:**
- **24-port RJ45:** Cat6A and Cat8 compatible
- **48-port RJ45:** High-density (2U)
- **Angled Cassettes:** Improved cable management

### 10.3 Density & Form Factors

**Table:**

| Panel Type | Port Count | Rack Units | Standards |
|------------|-----------|-----------|----------|
| RJ45 Cassette | 24 ports | 1U | Cat6A, Cat8 |
| RJ45 Cassette | 48 ports | 2U | Cat6A, Cat8 |

### 10.4 Cross-Link to Fiber

**Callout Box:**
"Also available: Fiber Optic Patch Panels with LC/MPO cassettes for multimode and single-mode connectivity."
Link: "View Fiber Patch Panels →" (`/fiber/patch-panels`)

### 10.5 CTA Section

**H2:** "Scalable Ethernet Patch Panels"
**Subtext:** "Contact us for ethernet patch panel solutions for your data center."

### 10.6 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use Ethernet Cabling block (partial, patch panel focus, ~250-300 words) from Document 4, Section 4.4

---

## 11. Systems & Accessories

**Route:** `/systems-and-accessories`
**Purpose:** Overview of data center testing solutions and accessories.

**SEO Metadata:** See Document 4, Section 2.11

### 11.1 Hero Section

```
H1: "Data Center Systems & Testing Accessories"

Subtext: "Lab testing equipment, loopback testers, and distance simulators for network validation."

Background: Testing equipment in lab environment
```

### 11.2 Product Categories

**Section H2:** "Testing & Accessories"

**Grid (3 columns):**

**Testing Solutions:**
- W-IGNITE™ loopback testers
- Fiber-in-a-Box™ distance simulators
- Bit error rate testers
- Link: "View Testing Solutions →" (`/systems-and-accessories/testing`)

**Cable Management:**
- Fiber optic management trays
- Cable routing guides
- Velcro cable ties

**Accessories:**
- Cleaning kits (fiber end-face)
- Connector caps and dust covers
- Labeling systems

### 11.3 CTA Section

**H2:** "Complete Data Center Solutions"
**Subtext:** "Contact us for testing equipment and accessories for your data center or lab."

### 11.4 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use custom snippet (testing/accessories overview, ~200-250 words) - to be created based on product portfolio

---

## 12. Testing Solutions

**Route:** `/systems-and-accessories/testing`
**Purpose:** Detail W-IGNITE™ and Fiber-in-a-Box™ testing products.

**SEO Metadata:** See Document 4, Section 2.12

### 12.1 Hero Section

```
H1: "Lab Testing Solutions for Data Centers"

Subtext: "W-IGNITE™ loopback testers and Fiber-in-a-Box™ distance simulators for network performance validation."

Background: Testing equipment in use
```

### 12.2 W-IGNITE™ Loopback Testers

**Section H2:** "W-IGNITE™ Loopback Testers"

**Content:**
"Test network equipment without live connections. W-IGNITE™ loopback testers simulate end-to-end connectivity for bench testing and troubleshooting."

**Form Factors:**
- QSFP28 (100G)
- QSFP-DD (400G)
- OSFP (800G)

**Applications:**
- Switch validation before deployment
- Troubleshooting network issues
- Lab testing and development

### 12.3 Fiber-in-a-Box™ Distance Simulators

**Section H2:** "Fiber-in-a-Box™ Distance Simulators"

**Content:**
"Simulate long-distance fiber connections in lab environments. Test equipment for long-haul deployments without hundreds of meters of cable."

**Configurations:**
- 500m simulation (single-mode)
- 1km, 2km, 5km, 10km options
- Custom lengths available

**Use Cases:**
- Campus network testing
- Long-haul transceiver validation
- Budget planning for optical links

### 12.4 CTA Section

**H2:** "Validate Network Performance"
**Subtext:** "Contact us for testing solutions for your data center or lab environment."

### 12.5 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use custom snippet (W-IGNITE, Fiber-in-a-Box details, ~250-300 words) - to be created based on product specs

---

## 13. Resources Hub & Articles

**Route:** `/resources`
**Purpose:** Hub page for technical guides, case studies, and industry insights.

**STATUS:** ⚠️ **Fully implemented but NOT in navigation (PRD v2.1 gap)**

**SEO Metadata:** See Document 4, Section 2.13

### 13.1 Hero Section

```
H1: "Resources for Data Center Professionals"

Subtext: "Technical guides, case studies, and industry insights to help you deploy faster and smarter."

Background: Subtle gradient or data center image
```

### 13.2 Featured Articles

**Section H2:** "Featured Articles"

**Layout:** 3-column grid (responsive)

**Articles (Confirmed Existing):**

1. **Complete Guide to Data Center Structured Cabling**
   - Route: `/resources/complete-guide-data-center-structured-cabling`
   - Summary: "Comprehensive guide covering fiber, copper, and power cabling best practices."
   - CTA: "Read Guide →"

2. **5 Ways DCIM Digital Twins Reduce Deployment Risk**
   - Route: `/resources/dcim-digital-twins-reduce-deployment-risk`
   - Summary: "How DC Twin™ technology eliminates errors and accelerates data center builds."
   - CTA: "Learn More →"

3. **Case Study: Faster Deployment with Advanced Kitting**
   - Route: `/resources/case-study-faster-deployment-kitting`
   - Summary: "Real-world results from Fortune 500 hyperscale deployment using Wave2Wave kitting."
   - CTA: "View Case Study →"

### 13.3 Additional Articles List

**Section H2:** "Technical Resources"

**List Format (with thumbnails):**

4. Fiber Optic Cable Management Best Practices
5. Cat6A vs Cat8 for High-Speed Networks
6. Edge Computing Infrastructure Requirements
7. Quality Assurance in Custom Cable Manufacturing

### 13.4 Article Page Template

**For Each Article:**

**Structure:**
```
Hero:
  - H1: [Article Title]
  - Subtext: [Article Summary]
  - Reading time: [X] min read

Content:
  - Introduction paragraph
  - H2 sections with content
  - Images/diagrams where relevant
  - Bullet lists for key points
  - Callout boxes for important notes

Related CTA:
  - Link to relevant product/service page
  - Example: "Learn about DC Twin™ →" (for digital twin article)

SEO Hidden Text:
  - 100-150 words related keywords (per Document 4)
  - Specific to article topic
```

**Design Notes:**
- Max content width: 800px (readable line length)
- Inter font for body text
- Images: Max 1200px wide, lazy loaded
- Social share buttons (optional)

### 13.5 Resources Hub CTA

**Section H2:** "Need Custom Cabling Solutions?"

**Content:**
- "Explore how Wave2Wave can accelerate your data center deployment."
- Button: "Schedule Consultation" (links to `/contact`)

### 13.6 Hidden Text Implementation (Hub Page)

**Placement:** Before CTA section

**Content:** Use custom snippet (thought leadership, ~150-200 words) from Document 4, Section 4 (to be created)

### 13.7 Hidden Text Implementation (Article Pages)

**Placement:** End of article, before related CTA

**Content:** 100-150 words related keywords specific to article topic (create custom snippets per article)

---

## 14. Company

**Route:** `/company`
**Purpose:** About Wave2Wave, mission, values, certifications.

**SEO Metadata:** See Document 4, Section 2.14

### 14.1 Hero Section

```
H1: "About Wave2Wave: Data Center Cabling Experts"

Subtext: "Custom-engineered cabling solutions trusted by hyperscale providers, AI companies, and enterprise data centers worldwide."

Background: Wave2Wave facility or team photo
```

### 14.2 Company Overview

**Section H2:** "Who We Are"

**Content:**
"Wave2Wave is a B2B provider of custom-engineered data center cabling infrastructure serving enterprise and hyperscale clients globally. We specialize in factory pre-terminated fiber optic and copper cables, DC Twin™ digital modeling, and deployment kitting services that reduce installation time by 50-75%."

### 14.3 Mission & Values

**Section H2:** "Our Mission"

**Mission Statement:**
"To deliver infrastructure you can trust, because the network begins where the cable does."

**Core Values:**
- **Precision Engineering** – Every cable built to exact specifications
- **Speed & Efficiency** – 3-4 week lead times, 50-75% faster deployment
- **Innovation** – DC Twin™ digital modeling, deployment kitting
- **Reliability** – 100% factory testing, <0.5% error rate
- **Partnership** – Collaborative approach with clients

### 14.4 Certifications & Standards

**Section H2:** "Quality & Certifications"

**Grid (2 columns):**

**Certifications:**
- ISO 9001:2015 (Quality Management)
- ISO 14001:2015 (Environmental Management)
- TIA-568 Compliance (Cabling Standards)
- UL Listed (if applicable)

**Standards Compliance:**
- IEEE 802.3 (Ethernet)
- TIA-568.2-D (Commercial Cabling)
- IEC 61754 (Fiber Optic Connectors)
- ISO/IEC 11801 (Generic Cabling)

### 14.5 CTA Section

**H2:** "Partner with Wave2Wave"
**Subtext:** "Contact us to learn how we can support your next data center project."

### 14.6 Hidden Text Implementation

**Placement:** Before CTA section

**Content:** Use custom snippet (company values, certifications, ~150-200 words) from Document 4, Section 4 (to be created)

---

## 15. Contact

**Route:** `/contact`
**Purpose:** Contact form for quote requests and general inquiries.

**SEO Metadata:** See Document 4, Section 2.15

### 15.1 Hero Section

```
H1: "Request a Quote | Contact Wave2Wave"

Subtext: "Get in touch with our team to discuss custom cabling solutions for your data center."

Background: Gradient or simple background (form is focus)
```

### 15.2 Contact Form

**Form Fields:**

**Required:**
- Name (text input)
- Email (email input, validation)
- Company (text input)
- Phone (tel input, optional)
- Message (textarea, min 20 characters)

**Optional:**
- Project Type (select dropdown):
  - New Data Center Build
  - Data Center Expansion
  - Cabling Upgrade
  - AI/HPC Cluster
  - Other

**Submit Button:** "Send Message" (Primary Button style from Document 2)

**Form Validation:**
- Required fields highlighted on submit
- Email format validation
- Show success message after submission
- Clear error messages (per Document 2, Section 4.5)

### 15.3 Contact Information

**Section H2:** "Get in Touch"

**Grid (3 columns):**

**Phone:**
- [Insert phone number]
- Monday-Friday, 9am-5pm PT

**Email:**
- [Insert email address]
- Response within 24 hours

**Address:**
- [Insert physical address]
- [City, State ZIP]

### 15.4 Office Hours & Response Time

**Content:**
"Our team typically responds to inquiries within 24 business hours. For urgent requests, please call our sales team directly."

### 15.5 CTA Section (Alternative)

**Background:** Light gray (#F5F5F5)

**Content:**
- **H2:** "Prefer to Talk?"
- **Text:** "Schedule a call with our engineering team to discuss your project requirements."
- **Button:** "Schedule Call" (links to calendar tool if available)

### 15.6 Hidden Text Implementation

**Placement:** Before footer

**Content:** Use custom snippet (services overview, ~100-150 words) from Document 4, Section 4 (to be created)

---

## 16. Embedded Prompts for Claude Code

### 16.1 Before Page Implementation

**CRITICAL: Brainstorm Before Implementing**

Before implementing ANY page, invoke the brainstorming skill to refine the content strategy:

```
Invoke: /superpowers:brainstorm
```

**Why:** Even with detailed specs in this document, brainstorming helps explore alternative content structures and ensures the page achieves user goals.

**For content creation (Resources articles, long-form content):**

```
Invoke: document-skills:doc-coauthoring
```

**Why:** This skill guides structured content creation with iteration and verification, ensuring Resources articles are comprehensive and valuable.

### 16.2 During Implementation

**Reference Other Documents:**

For component styling specifications:
→ **Document 2: Design System** (all component specs, colors, typography)

For SEO metadata (titles, descriptions):
→ **Document 4: SEO & Technical, Section 2** (Page-by-Page SEO Specifications)

For hidden text content:
→ **Document 4: SEO & Technical, Section 4** (SEO Content Library - ready-to-copy blocks)

### 16.3 Page Implementation Pattern

**Example: Implementing Homepage**

```tsx
// 1. Read Document 3, Section 1 (Homepage / Solutions)
// 2. Read Document 4, Section 2.1 for SEO metadata
// 3. Read Document 4, Section 4.6 for hidden text content

import type { Metadata } from "next"
import Image from "next/image"

// SEO metadata from Document 4
export const metadata: Metadata = {
  title: "Data Center Cabling Solutions | Custom Cable Manufacturing | Wave2Wave",
  description: "Custom data center cabling with pre-termination, DC Twin™ modeling, and deployment kitting. Reduce deployment time 50-75%. Request a quote.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section (Document 3, Section 1.1) */}
      <section className="relative h-96 md:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0072CE] to-[#333333]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connecting the Physical Backbone of the AI & Datacenter Era
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Engineered cabling systems that move data, power, and possibility at the speed of light – custom-built, pre-labeled, and deployment-ready.
          </p>
          <a href="/contact" className="btn-primary">Request a Quote</a>
        </div>
      </section>

      {/* The Wave2Wave Difference (Document 3, Section 1.2) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Why Wave2Wave?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards from Document 3, Section 1.2 */}
          </div>
        </div>
      </section>

      {/* ... other sections from Document 3 ... */}

      {/* SEO Hidden Text (Document 4, Section 4.6) */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            {/* Copy exact text from Document 4, Section 4.6 */}
            <p>Wave2Wave provides end-to-end custom data center cabling solutions...</p>
            {/* ... rest of content ... */}
          </div>
        </details>
      </section>

      {/* CTA Section (Document 3, Section 1.5) */}
      <section className="py-16 md:py-24 bg-[#0072CE] text-white">
        {/* CTA content */}
      </section>
    </div>
  )
}
```

### 16.4 Content Audit for High Speed Interconnect

**CRITICAL:** High Speed Interconnect page exists but is NOT documented in PRD v2.1.

**Before implementing:**
1. Read current implementation: `/app/high-speed-interconnect/page.tsx`
2. Audit existing content and structure
3. Use Document 3, Section 8 as starting point
4. Preserve good existing content, update to match PRD v3.0 standards
5. Apply design system from Document 2
6. Add hidden text from Document 4, Section 4.1

### 16.5 Resources Section Implementation

**CRITICAL:** Resources section is fully implemented but NOT visible in navigation (PRD v2.1 gap).

**Implementation Steps:**
1. Add "Resources" to navigation menu (per Document 1, will be created)
2. Verify all 7 article pages exist and are accessible
3. Implement Resources hub page per Document 3, Section 13
4. Add SEO metadata to each article (Document 4, Section 2.13)
5. Add article-specific hidden text (100-150 words per article)

### 16.6 Testing Anti-Patterns Reminder

**When writing or changing tests for page functionality:**

```
Invoke: superpowers:testing-anti-patterns
```

**Why:** This prevents testing mock behavior and ensures real validation of page components.

### 16.7 Verification Checklist

**Before claiming page implementation is complete:**

- [ ] Page content matches Document 3 specifications
- [ ] Components styled per Document 2 (Design System)
- [ ] SEO metadata matches Document 4, Section 2 (exact titles/descriptions)
- [ ] Hidden text implemented per Document 4, Section 3 (placement and pattern)
- [ ] Hidden text content copied from Document 4, Section 4 (exact text, not paraphrased)
- [ ] Images optimized (Next.js Image component, WebP format)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Lighthouse score ≥90 (all categories)
- [ ] Navigation links work correctly
- [ ] Forms validate and submit properly (Contact page)

**Invoke verification skill:**

```
Invoke: superpowers:verification-before-completion
```

---

## Document Metadata

**Token Count:** ~8,500 tokens
**Target Range:** 8,000-10,000 tokens ✓
**Status:** Complete - Ready for Claude Code Implementation

**Next Steps:**
- Use this document as content specification for all pages
- Cross-reference Document 2 for component styling
- Cross-reference Document 4 for SEO metadata and hidden text
- Invoke brainstorming skill before implementing each page
- Verify completeness before claiming pages are done

**Version Control:**
- v3.0 - Initial comprehensive page-by-page specifications (December 2025)
- Includes all 16 pages with detailed content structures
- Documents High Speed Interconnect (new, not in PRD v2.1)
- Expands Resources section (hub + 7 articles)

---

**End of Document 3: Page-by-Page Specifications**

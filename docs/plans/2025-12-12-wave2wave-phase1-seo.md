# Wave2Wave Website Redesign - Phase 1: SEO Hidden Text

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add SEO-optimized hidden text to all 15 pages for immediate search ranking benefits while maintaining zero visual impact

**Architecture:** Use semantic HTML (`<details>` + `.sr-only` + `aria-hidden`) to hide content from visual display while remaining indexable by search engines. Content blocks are pre-written in PRD v3.0 Doc 4, Section 4 - copy exact text without modification.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS

**Timeline:** 80 minutes (5 min per page × 16, minus Contact page)

**Why This Matters:** SEO takes weeks/months to improve rankings. Adding hidden text NOW starts that process while we redesign pages later.

---

## Prerequisites

### Prerequisite 1: Verify CSS Classes Exist

**Files:**
- Check: `app/globals.css`

**Step 1: Check if `.sr-only` class exists**

Run: `grep -n "\.sr-only" app/globals.css`

Expected: Should find the class definition around line 91-100

**Step 2: If NOT found, add CSS classes**

Add to `app/globals.css` after the `@layer base` section:

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
  display: none;
}
```

**Step 3: Verify dev server running**

Run: `npm run dev`

Expected: Server starts on http://localhost:3000

---

## Task 1: High Speed Interconnect Page

**Files:**
- Modify: `app/high-speed-interconnect/page.tsx`

**Step 1: Read current page structure**

Run: `wc -l app/high-speed-interconnect/page.tsx`

Expected: See line count to determine where to add SEO content

**Step 2: Add SEO hidden text before footer/CTA**

Location: Before the final CTA section or footer (typically near end of file)

Add this code:

```tsx
      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>High-speed interconnect solutions enable 400G and 800G data center networks to achieve maximum throughput and minimum latency. Wave2Wave specializes in custom-engineered high-speed cabling systems using MPO-24 multi-fiber connectors and QSFP-DD, OSFP form factors optimized for AI/HPC infrastructure.</p>

            <p>Our 400G interconnect solutions support both SR8 (short-reach, multimode) and DR4 (data rate, single-mode) configurations, providing flexibility for data center architects. For 800G deployments, we manufacture SR8, DR8, and 2×FR4 cable assemblies with factory testing to ensure insertion loss &lt;0.5dB and return loss &gt;20dB.</p>

            <p>High-density AI training clusters (NVIDIA DGX, Google TPU, Meta OAM) require specialized cabling topologies. Wave2Wave&apos;s custom engineering services include rail-optimized routing for GPU server racks, pre-labeled breakout cables for spine-leaf architectures, polarity validation (Method A, B, C) before shipment, and DC Twin™ digital modeling to simulate cable paths.</p>

            <p>Standards compliance is critical for 400G/800G interconnect. All Wave2Wave cables meet or exceed IEEE 802.3bs (200G/400G Ethernet), IEEE 802.3ck (800G Ethernet), TIA-568 (commercial building cabling), and IEC 61754 (fiber optic connector interfaces).</p>

            <p>Thermal management in high-speed interconnect is often overlooked. Our low-smoke zero-halogen (LSZH) cable jackets reduce fire risk while maintaining flexibility for tight bend radius applications. For hyperscale deployments, we offer plenum-rated (CMP) and riser-rated (CMR) variants.</p>

            <p>Quality assurance for 400G/800G cables includes factory insertion loss testing (100% of cables), polarity verification with automated test equipment, visual fault locator (VFL) inspection for fiber contamination, and continuity testing for all copper power/ground pairs.</p>

            <p>Wave2Wave&apos;s high-speed interconnect solutions reduce deployment time by 50-75% compared to field termination, eliminate human error through factory labeling, and ensure day-one network performance for AI/HPC data centers.</p>
          </div>
        </details>
      </section>
```

**Step 3: Verify syntax**

Run: `npm run build 2>&1 | grep -i "high-speed-interconnect" | head -5`

Expected: No TypeScript or build errors for this page

**Step 4: Visual verification**

Run: Open http://localhost:3000/high-speed-interconnect in browser

Expected: Page looks identical (no visible text added)

**Step 5: Source verification**

Action: View page source (Cmd+U or Ctrl+U)

Expected: Search for "High-speed interconnect solutions enable 400G" - should find text in HTML

**Step 6: Commit**

```bash
git add app/high-speed-interconnect/page.tsx
git commit -m "seo: add hidden text to High Speed Interconnect page

- Add 300-word SEO content block from PRD Doc 4, Section 4.1
- Uses sr-only + aria-hidden pattern for search engine indexing
- Zero visual impact, immediate ranking benefits

🤖 Generated with Claude Code"
```

---

## Task 2: DC Twin™ Digital Modeling Page

**Files:**
- Modify: `app/custom-engineering/dc-twin/page.tsx`

**Step 1: Add SEO hidden text before CTA**

Location: Before final CTA section

Add this code:

```tsx
      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>DC Twin™ is Wave2Wave&apos;s digital twin technology for data center cabling infrastructure. Unlike traditional CAD drawings, DC Twin™ creates a virtual 3D model of the entire data center, simulates cable routing, validates every connection, and generates optimized deployment kits before a single cable is manufactured.</p>

            <p>DCIM (Data Center Infrastructure Management) integration is core to DC Twin™. We import rack layouts from Nlyte (energy and asset management), Sunbird dcTrack (capacity planning), Schneider Electric EcoStruxure (monitoring), and FNT Command (resource management).</p>

            <p>BIM (Building Information Modeling) compatibility enables architecture/engineering collaboration. DC Twin™ imports Autodesk Revit models (.rvt files), AutoCAD floor plans (.dwg files), SketchUp 3D models (.skp files), and IFC (Industry Foundation Classes) universal format.</p>

            <p>The cable routing algorithm in DC Twin™ optimizes for shortest viable path (minimize cable length, reduce cost), bend radius compliance (prevent signal loss), cable tray capacity (avoid congestion), hot aisle/cold aisle airflow preservation, and accessibility for future maintenance.</p>

            <p>Pre-deployment validation catches errors before production: port mapping verification (every cable to correct switch port), polarity checking (fiber A-to-B, B-to-A connections), power budget calculations (optical loss budget for fiber), and compatibility validation (SFP+ to SFP+, QSFP to QSFP).</p>

            <p>ROI for DC Twin™ digital modeling includes 95% reduction in cabling errors (vs. field termination), 60% faster deployment (pre-kitted, pre-labeled cables), 40% lower total cost of ownership (fewer truck rolls, rework), and zero port mapping mistakes (validated in virtual model).</p>

            <p>The DC Twin™ process: (1) Import data center layout (DCIM, BIM, CAD), (2) Define connectivity requirements (server to TOR, TOR to spine), (3) Simulate cable routing (algorithm optimizes paths), (4) Validate design (automated error checking), (5) Generate deployment kits (rack-specific bundles), (6) Manufacture and label cables (factory production), (7) Ship optimized kits (organized by installation phase).</p>

            <p>Wave2Wave&apos;s DC Twin™ digital modeling transforms data center deployments from error-prone manual processes into predictable, efficient, factory-validated installations.</p>
          </div>
        </details>
      </section>
```

**Step 2: Verify and commit**

```bash
# Check for errors
npm run build 2>&1 | grep -i "dc-twin" | head -5

# Visual check
# Open http://localhost:3000/custom-engineering/dc-twin

# View source to confirm text present

# Commit
git add app/custom-engineering/dc-twin/page.tsx
git commit -m "seo: add hidden text to DC Twin digital modeling page

- Add 350-word SEO content block from PRD Doc 4, Section 4.2
- Covers DCIM integration, BIM compatibility, ROI metrics
- sr-only pattern for search engine indexing

🤖 Generated with Claude Code"
```

---

## Task 3: Fiber Solutions Hub Page

**Files:**
- Modify: `app/fiber/page.tsx`

**Step 1: Read SEO content from PRD**

Content source: PRD v3.0 Doc 4, Section 4.3 (Fiber Optic Solutions - 400 words)

**Step 2: Add SEO hidden text before CTA**

Add code (400-word fiber optic solutions block):

```tsx
      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>Wave2Wave manufactures custom fiber optic cable assemblies for data center, enterprise, and telecom applications. Our fiber solutions cover single-mode and multimode technologies with industry-leading quality and factory testing.</p>

            <p>Multimode fiber specifications: OM3 (850nm, 10G up to 300m, aqua jacket), OM4 (850nm, 10G up to 550m, 40G/100G up to 150m, aqua jacket), and OM5 (850nm, optimized for SWDM/wavelength division, lime green jacket).</p>

            <p>Single-mode fiber specifications: OS2 (1310nm and 1550nm, 10G/40G/100G long-haul, yellow jacket) and Ultra-low loss (ULL) OS2 (&lt;0.18dB/km attenuation, long-distance carrier).</p>

            <p>Fiber optic connector types: LC (duplex, 1.25mm ferrule, common for data center), SC (simplex, 2.5mm ferrule, legacy enterprise), MPO/MTP (12-fiber and 24-fiber, high-density 40G/100G/400G), and ST (bayonet mount, multimode legacy).</p>

            <p>Custom fiber assemblies include trunk cables (multi-fiber MPO breakout to LC), patch cables (duplex LC to LC, 1m-30m standard lengths), cross-connect cables (permanent infrastructure, plenum-rated), and pigtails (pre-terminated single fiber, fusion splice ready).</p>

            <p>Wave2Wave fiber manufacturing process: fiber selection (Corning, Prysmian, OFS certified), precision cleaving (sub-micron end-face quality), connector polishing (UPC, APC end-faces), insertion loss testing (every cable, <0.3dB typical), visual inspection (microscope 400x, contamination check), and factory labeling (sequential numbering, custom schemes).</p>

            <p>Fiber optic standards compliance: TIA-568 (commercial building cabling), ISO/IEC 11801 (international cabling), IEEE 802.3 (Ethernet over fiber), and Telcordia GR-326 (single-mode connector reliability).</p>

            <p>Quality assurance includes 100% insertion loss testing, return loss measurement (&gt;35dB for UPC, &gt;60dB for APC), continuity verification (OTDR trace for every cable), and polarity validation (A-to-B fiber mapping check).</p>

            <p>Wave2Wave fiber optic cable assemblies reduce installation time 60-80% compared to field termination, eliminate splicing errors through factory quality control, and provide day-one network performance with guaranteed specifications.</p>
          </div>
        </details>
      </section>
```

**Step 3: Verify and commit**

```bash
npm run build 2>&1 | grep -i "fiber" | head -5
# Open http://localhost:3000/fiber
# View source to confirm

git add app/fiber/page.tsx
git commit -m "seo: add hidden text to Fiber Solutions hub page

- Add 400-word SEO content block from PRD Doc 4, Section 4.3
- Covers multimode/single-mode specs, connectors, standards
- sr-only pattern for search indexing

🤖 Generated with Claude Code"
```

---

## Task 4-15: Remaining Pages (Abbreviated Tasks)

**Remaining pages to update (same pattern):**

4. `app/ethernet/page.tsx` - Ethernet Solutions (350 words from PRD Doc 4, Section 4.4)
5. `app/deployment-services/page.tsx` - Deployment Services (300 words from PRD Doc 4, Section 4.5)
6. `app/custom-engineering/page.tsx` - Custom Engineering (250-300 words, partial Deployment Services)
7. `app/fiber/hyperscalers/page.tsx` - Fiber Hyperscalers (300-350 words, High Speed + Fiber partial)
8. `app/fiber/patch-panels/page.tsx` - Fiber Patch Panels (250-300 words, Fiber partial with cassette focus)
9. `app/ethernet/patch-panels/page.tsx` - Ethernet Patch Panels (250-300 words, Ethernet partial)
10. `app/systems-and-accessories/page.tsx` - Systems & Accessories (200-250 words, custom snippet)
11. `app/systems-and-accessories/testing/page.tsx` - Testing Solutions (250-300 words, custom snippet)
12. `app/page.tsx` - Homepage (200-250 words, custom all-services overview)
13. `app/resources/page.tsx` - Resources Hub (150-200 words, thought leadership snippet)
14. `app/company/page.tsx` - Company (150-200 words, values/certifications snippet)
15. Resources articles (7 files, 100-150 words each, custom per article)

**For each page:**

1. Locate appropriate placement (before CTA or footer per PRD Doc 4 Section 3.2)
2. Add SEO hidden text block using pattern from Tasks 1-3
3. Copy exact text from PRD v3.0 Doc 4, Section 4 (do NOT paraphrase)
4. Verify no visual changes (view in browser)
5. Verify text present in page source
6. Commit with descriptive message

**Resources Articles to Update:**

- `app/resources/complete-guide-data-center-structured-cabling/page.tsx`
- `app/resources/dcim-digital-twins-reduce-deployment-risk/page.tsx`
- `app/resources/case-study-faster-deployment-advanced-kitting/page.tsx`
- `app/resources/fiber-optic-cable-management-best-practices/page.tsx`
- `app/resources/cat6a-vs-cat8-high-speed-networks/page.tsx`
- `app/resources/edge-computing-infrastructure-requirements/page.tsx`
- `app/resources/quality-assurance-custom-cable-manufacturing/page.tsx`

**Note:** Contact page (`app/contact/page.tsx`) is EXCLUDED - do not modify (has integrations)

---

## Final Verification

### Verification 1: Build Check

**Step 1: Run full build**

Run: `npm run build`

Expected: Build succeeds with no TypeScript or lint errors

**Step 2: Check for warnings**

Expected: No warnings related to pages we modified

### Verification 2: Visual Spot Check

**Step 1: Check 3 random pages**

Run dev server: `npm run dev`

Open:
- http://localhost:3000/high-speed-interconnect
- http://localhost:3000/fiber
- http://localhost:3000/deployment-services

Expected: All pages look identical to before (no visible changes)

### Verification 3: SEO Source Check

**Step 1: View source on 3 pages**

Action: Cmd+U (or Ctrl+U) to view page source

Search for: "Wave2Wave" in hidden text

Expected: Find hidden text content in HTML source

### Verification 4: Git Status Check

**Step 1: Check git status**

Run: `git status`

Expected: All changes committed, working tree clean

**Step 2: Count commits**

Run: `git log --oneline --since="1 hour ago" | wc -l`

Expected: 15 commits (one per page, excluding Contact)

---

## Success Metrics

### Immediate (Today)

- [ ] All 15 pages have hidden SEO text
- [ ] Zero visual changes to any page
- [ ] Build succeeds with no errors
- [ ] All changes committed to git

### Short-term (48 hours)

- [ ] Google Search Console shows crawl activity
- [ ] No user reports of broken pages
- [ ] Dev team confirms no regressions

### Long-term (4-8 weeks)

- [ ] Improved rankings for target keywords
- [ ] Increased organic search traffic
- [ ] Better SERP snippet relevance

---

## Troubleshooting

**Problem:** TypeScript error about `&apos;` or `&lt;` entities

**Solution:** These are HTML entities (apostrophe, less-than). They're correct for JSX. If you see TypeScript errors, the quotes might be wrong. Use HTML entities or escape characters.

**Problem:** Text is visible on page

**Solution:** Check that:
1. `.sr-only` class exists in `globals.css`
2. `className="seo-hidden-content"` on `<section>`
3. `className="sr-only" aria-hidden="true"` on `<details>`
4. Dev server restarted after CSS changes

**Problem:** Text not in page source

**Solution:**
1. Check browser DevTools → Elements tab
2. Search for `seo-hidden-content` class
3. Verify `<details>` element is present
4. If missing, check file was saved and dev server reloaded

---

## Time Estimates

- Prerequisites: 5 minutes
- Tasks 1-3 (detailed): 15 minutes (5 min each)
- Tasks 4-15 (remaining pages): 60 minutes (5 min each × 12 pages)
- Final verification: 10 minutes

**Total: 90 minutes** (includes 10-minute buffer)

---

## Next Phase

After completing Phase 1 (SEO), proceed to:

**Phase 2: B2B Component Library**
- Create `components/ui/b2b/button.tsx`
- Create `components/ui/b2b/card.tsx`
- Create `components/ui/b2b/spec-table.tsx`

See `docs/plans/2025-12-12-wave2wave-redesign-design.md` for complete roadmap.

---

**Plan Status:** Ready for execution
**Estimated Completion:** 90 minutes from start
**Dependencies:** None (can start immediately)

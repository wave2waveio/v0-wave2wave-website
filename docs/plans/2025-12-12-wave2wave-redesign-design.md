# Wave2Wave Website Redesign - Implementation Design

**Date:** December 12, 2025
**Status:** Approved for Implementation
**Approach:** B2B Component Variants + Dependency-Order Implementation
**Execution Model:** Hybrid (phase-by-phase approval + immediate implementation)

---

## Executive Summary

Redesign Wave2Wave.io website to establish professional B2B aesthetics using Electric Blue (#0072CE) and Dark Charcoal Gray (#333333) color palette. Implementation follows dependency-order: SEO foundation → B2B components → Homepage → Product pages → Resources.

**Timeline:** 9 days total
**Pages in Scope:** 15 pages (Contact excluded - has integrations)
**Key Deliverables:** B2B component library, SEO-optimized pages, professional product showcase

---

## Validated Decisions (Locked In)

### Strategic Decisions

1. **Component Strategy:** Create B2B variants in `components/ui/b2b/` - existing components remain untouched
2. **Spec Table Priority:** Phase 2 (after button/card foundation)
3. **SEO Timing:** Immediate (add hidden text NOW for ranking head start)
4. **Page Order:** Dependency-driven (Homepage → Product Pattern → Replication)
5. **Execution:** Phase-by-phase design approval with immediate implementation
6. **Contact Page:** OFF-LIMITS (has integrations, do not modify)

### Design System (Non-Negotiable)

**Color Palette:**
- Primary: Electric Blue `#0072CE`
- Secondary: Dark Charcoal Gray `#333333`
- **ELIMINATED:** Orange `#FF6B35` (remove from all code)
- **ELIMINATED:** All bright AI colors (green, purple, red)

**Typography:**
- Font: Inter (already implemented)
- H1: 48px desktop / 32px mobile
- H2: 36px desktop / 28px mobile
- H3: 28px desktop / 24px mobile
- Body: 16px / 1.6 line-height

**Spacing:**
- 8px baseline grid
- Section padding: 64px desktop / 32px mobile
- Card padding: 32px desktop / 24px mobile

**Visual Style:**
- Sharp corners (4px border-radius, not rounded)
- Minimal shadows (subtle, professional)
- Generous white space (B2B = spacious)
- Clean borders (defined edges)

---

## Phase 1: SEO Hidden Text Implementation

**Objective:** Add SEO-optimized hidden text to all 15 pages for immediate search ranking benefits

**Timeline:** Day 1 (80 minutes total - 5 min per page)

**Why First:**
- SEO takes weeks/months to show results
- Adding now = rankings improve while we redesign
- Zero visual impact (completely hidden)
- Trivial implementation (copy-paste from PRD)

### Technical Implementation

**Pattern (from PRD v3.0 Doc 4, Section 3.1):**

```tsx
// Add before CTA section or footer on each page
<section className="seo-hidden-content">
  <details className="sr-only" aria-hidden="true">
    <summary>Additional Technical Information</summary>
    <div>
      {/* Copy exact text from PRD v3.0 Doc 4, Section 4.X */}
      {/* DO NOT paraphrase - use exact wording */}
    </div>
  </details>
</section>
```

**CSS (add to `globals.css` if not present):**

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

### Page-by-Page Specifications

| Page | SEO Block Source (PRD Doc 4) | Word Count | Placement |
|------|------------------------------|------------|-----------|
| Homepage | Custom snippet (all services) | 200-250 | Before footer |
| Custom Engineering | Deployment Services (partial) | 250-300 | Before CTA |
| DC Twin™ | Section 4.2 (full) | 350 | Before CTA |
| Deployment Services | Section 4.5 (full) | 300 | Before CTA |
| Fiber Solutions | Section 4.3 (full) | 400 | Before CTA |
| Fiber - Hyperscalers | High Speed + Fiber (partial) | 300-350 | Before CTA |
| Fiber - Patch Panels | Fiber Optic (cassette focus) | 250-300 | Before CTA |
| High Speed Interconnect | Section 4.1 (full) | 300 | Before CTA |
| Ethernet Solutions | Section 4.4 (full) | 350 | Before CTA |
| Ethernet - Patch Panels | Ethernet (partial) | 250-300 | Before CTA |
| Systems & Accessories | Custom snippet | 200-250 | Before CTA |
| Testing Solutions | Custom snippet | 250-300 | Before CTA |
| Resources (hub) | Custom snippet | 150-200 | Before footer |
| Resources (7 articles) | Custom per article | 100-150 ea | End of article |
| Company | Custom snippet | 150-200 | Before footer |

**Note:** Contact page excluded per requirement

### Verification Checklist (Per Page)

After adding hidden text:

- [ ] Text copied exactly from PRD v3.0 Doc 4 (no paraphrasing)
- [ ] Wrapped in correct `<section>` + `<details>` structure
- [ ] Placed before CTA section (or footer as specified)
- [ ] View page source - HTML contains the text
- [ ] Visual inspection - text NOT visible on page
- [ ] Browser DevTools - element has `.sr-only` class
- [ ] No console errors

### Success Metrics

**Immediate (Day 1):**
- All 15 pages have hidden SEO text
- Google Search Console shows crawl activity within 48 hours

**Long-term (Weeks 4-8):**
- Improved rankings for target keywords
- Increased organic traffic from long-tail searches
- Better SERP snippet relevance

---

## Phase 2: B2B Component Library

**Objective:** Create professional B2B component variants that establish design language

**Timeline:** Days 2-3 (2-3 hours foundation + 2-3 hours spec table)

**Why Second:**
- Foundation components (button, card) set B2B aesthetic
- Spec table inherits design language from foundation
- All product pages reuse these components
- Zero risk to existing components (new directory)

### Directory Structure

```
components/
  ui/                    # Keep existing (untouched)
    button.tsx
    card.tsx
    input.tsx
    ...
  ui/b2b/               # NEW - B2B variants
    button.tsx          # Professional B2B button
    card.tsx            # B2B card with proper spacing
    spec-table.tsx      # Technical specification table
    trust-badge.tsx     # Client logos, certifications (future)
    cta-section.tsx     # Professional CTA layouts (future)
```

### Component 1: B2B Button

**File:** `components/ui/b2b/button.tsx`

**Variants:**

1. **Primary (Call-to-Action):**
   - Background: Electric Blue `#0072CE`
   - Hover: Darker Blue `#005BA4`
   - Text: White
   - Shadow: Subtle → elevated on hover
   - Border Radius: 4px (sharp)
   - Padding: 24px horizontal, 12px vertical
   - Font: 16px / 600 weight

2. **Secondary (Outline):**
   - Background: Transparent
   - Border: 2px solid Electric Blue `#0072CE`
   - Text: Electric Blue `#0072CE`
   - Hover: Fill with Electric Blue, text to white

3. **Ghost (Text Link):**
   - Text: Electric Blue `#0072CE`
   - Hover: Darker Blue `#005BA4` + underline
   - Minimal appearance

**Implementation Pattern:**

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const b2bButtonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded",
  {
    variants: {
      variant: {
        primary: "bg-[#0072CE] hover:bg-[#005BA4] text-white shadow-sm hover:shadow-md",
        secondary: "border-2 border-[#0072CE] text-[#0072CE] hover:bg-[#0072CE] hover:text-white",
        ghost: "text-[#0072CE] hover:text-[#005BA4] hover:underline"
      },
      size: {
        default: "px-6 py-3 text-base",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface B2BButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof b2bButtonVariants> {
  asChild?: boolean
}

export const B2BButton = React.forwardRef<HTMLButtonElement, B2BButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(b2bButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
B2BButton.displayName = "B2BButton"
```

### Component 2: B2B Card

**File:** `components/ui/b2b/card.tsx`

**Specs (from PRD v3.0 Doc 2, Section 4.3):**
- Padding: 32px desktop, 24px mobile (`p-6 md:p-8`)
- Border: 1px solid `#E0E0E0`
- Border Radius: 4px (sharp, professional)
- Shadow: Subtle `0 2px 4px rgba(0,0,0,0.08)`
- Hover: Lift effect `0 4px 12px rgba(0,0,0,0.12)`
- Background: White `#FFFFFF`

**Key Differences from Generic Card:**
- Generous padding (B2B = spacious, not cramped)
- Sharp corners (professional, not rounded)
- Minimal shadow (subtle, not dramatic)
- Clean borders (defined edges)

**Implementation:**

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const B2BCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white border border-[#E0E0E0] rounded p-6 md:p-8",
      "shadow-sm hover:shadow-md transition-shadow duration-200",
      className
    )}
    {...props}
  />
))
B2BCard.displayName = "B2BCard"

const B2BCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 mb-6", className)}
    {...props}
  />
))
B2BCardHeader.displayName = "B2BCardHeader"

const B2BCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold text-[#1A1A1A]", className)}
    {...props}
  />
))
B2BCardTitle.displayName = "B2BCardTitle"

const B2BCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base text-[#4A4A4A]", className)}
    {...props}
  />
))
B2BCardDescription.displayName = "B2BCardDescription"

const B2BCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
B2BCardContent.displayName = "B2BCardContent"

export {
  B2BCard,
  B2BCardHeader,
  B2BCardTitle,
  B2BCardDescription,
  B2BCardContent
}
```

### Component 3: Spec Table (CRITICAL B2B PATTERN)

**File:** `components/ui/b2b/spec-table.tsx`

**Purpose:** Display technical specifications in scannable, professional format (essential for B2B product pages)

**Design Pattern (inspired by Panduit/Lanshack):**
- Clean, striped rows for scannability
- Clear headers with proper hierarchy
- Monospace font for technical values
- Responsive (stacks on mobile)

**Specs:**
- Header Background: Light gray `#F5F5F5`
- Row Striping: Alternating white/`#FAFAFA`
- Border: 1px solid `#E0E0E0`
- Font: Inter for labels, Roboto Mono for values
- Padding: 16px per cell
- Mobile: Full-width, 2-column layout

**Implementation:**

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface SpecTableProps {
  specifications: Array<{
    label: string
    value: string | React.ReactNode
  }>
  className?: string
}

export const SpecTable = React.forwardRef<HTMLTableElement, SpecTableProps>(
  ({ specifications, className }, ref) => {
    return (
      <div className="overflow-x-auto">
        <table
          ref={ref}
          className={cn(
            "w-full border border-[#E0E0E0] rounded",
            className
          )}
        >
          <thead className="bg-[#F5F5F5]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A1A1A] border-b border-[#E0E0E0]">
                Specification
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A1A1A] border-b border-[#E0E0E0]">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec, index) => (
              <tr
                key={index}
                className={cn(
                  "border-b border-[#E0E0E0] last:border-b-0",
                  index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                )}
              >
                <td className="px-4 py-3 text-sm font-medium text-[#4A4A4A]">
                  {spec.label}
                </td>
                <td className="px-4 py-3 text-sm font-mono text-[#1A1A1A]">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
)
SpecTable.displayName = "SpecTable"

// Usage Example:
// <SpecTable specifications={[
//   { label: "Cable Type", value: "OM4 Multimode Fiber" },
//   { label: "Connector", value: "MPO-24 (Male)" },
//   { label: "Length Options", value: "1m - 100m (3-inch increments)" },
//   { label: "Jacket", value: "LSZH (Plenum Rated)" },
//   { label: "Testing", value: "100% Factory Tested" },
//   { label: "Standards", value: "TIA-568, IEEE 802.3" },
// ]} />
```

### Verification Checklist

After creating B2B components:

- [ ] All 3 components created in `components/ui/b2b/`
- [ ] Button variants work (primary, secondary, ghost)
- [ ] Card has proper padding, borders, shadows
- [ ] Spec table renders correctly with test data
- [ ] Colors match PRD (#0072CE, #333333, etc.)
- [ ] No TypeScript errors
- [ ] Components export correctly
- [ ] Test in Storybook or isolated page

---

## Phase 3: Navigation & Page Implementation

**Objective:** Update navigation, redesign Homepage, establish product page pattern

**Timeline:** Days 3-9

### Phase 3a: Navigation Update (Day 3 - 5 minutes)

**File:** `components/navigation.tsx`

**Add Resources Link (Desktop):**

```tsx
// After Systems & Accessories dropdown, before Company
<Link
  href="/resources"
  className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
    isActive("/resources") ? "text-primary" : ""
  }`}
>
  Resources
</Link>
```

**Add Resources Link (Mobile Sheet):**

```tsx
// After Systems & Accessories accordion, before Company
<Link href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
  Resources
</Link>
```

**Verification:**
- [ ] Resources visible in desktop navigation
- [ ] Resources visible in mobile navigation
- [ ] Link works (navigates to `/resources`)
- [ ] Active state highlights correctly
- [ ] High Speed Interconnect still visible (already in nav)

### Phase 3b: Homepage Redesign (Days 3-4)

**File:** `app/page.tsx`

**Structure (from PRD v3.0 Doc 3, Section 1):**

**1. Hero Section**

```tsx
<section className="bg-gradient-to-r from-[#0072CE] to-[#005BA4] text-white py-24">
  <div className="container mx-auto px-4 max-w-6xl">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
      Custom Data Center Cabling Solutions
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl">
      Reduce deployment time 50-75% with factory pre-termination,
      DC Twin™ digital modeling, and deployment kitting
    </p>
    <B2BButton variant="secondary" size="lg" asChild>
      <Link href="/contact">Request a Quote</Link>
    </B2BButton>
  </div>
</section>
```

**Design Specs:**
- Gradient: Electric Blue → Darker Blue (professional)
- No stock images (solid gradient only)
- Typography: H1 responsive sizing
- CTA: Secondary button (white outline on blue)
- Padding: 96px vertical desktop, 64px mobile

**2. Core Services Grid**

```tsx
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-center mb-12">
      Our Solutions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <B2BCard>
        <B2BCardHeader>
          <B2BCardTitle>Custom Engineering</B2BCardTitle>
          <B2BCardDescription>
            Precision cable manufacturing with 3-inch length increments
          </B2BCardDescription>
        </B2BCardHeader>
        <B2BCardContent>
          <ul className="space-y-2 text-sm text-[#4A4A4A] mb-4">
            <li>• Factory pre-termination</li>
            <li>• Custom labeling</li>
            <li>• 100% testing</li>
          </ul>
          <B2BButton variant="ghost" asChild>
            <Link href="/custom-engineering">Learn More →</Link>
          </B2BButton>
        </B2BCardContent>
      </B2BCard>

      <B2BCard>
        <B2BCardHeader>
          <B2BCardTitle>DC Twin™ Digital Modeling</B2BCardTitle>
          <B2BCardDescription>
            Virtual data center validation before production
          </B2BCardDescription>
        </B2BCardHeader>
        <B2BCardContent>
          <ul className="space-y-2 text-sm text-[#4A4A4A] mb-4">
            <li>• 95% error reduction</li>
            <li>• DCIM integration</li>
            <li>• Pre-deployment validation</li>
          </ul>
          <B2BButton variant="ghost" asChild>
            <Link href="/custom-engineering/dc-twin">Learn More →</Link>
          </B2BButton>
        </B2BCardContent>
      </B2BCard>

      <B2BCard>
        <B2BCardHeader>
          <B2BCardTitle>Deployment Services</B2BCardTitle>
          <B2BCardDescription>
            Rack-specific kitting for faster installation
          </B2BCardDescription>
        </B2BCardHeader>
        <B2BCardContent>
          <ul className="space-y-2 text-sm text-[#4A4A4A] mb-4">
            <li>• Pre-labeled assemblies</li>
            <li>• Installation sequencing</li>
            <li>• 50-75% time savings</li>
          </ul>
          <B2BButton variant="ghost" asChild>
            <Link href="/deployment-services">Learn More →</Link>
          </B2BButton>
        </B2BCardContent>
      </B2BCard>
    </div>
  </div>
</section>
```

**3. Trust Signals Section**

```tsx
<section className="py-16 md:py-24 bg-[#F5F5F5]">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-center mb-12">
      Trusted by Industry Leaders
    </h2>

    {/* Quantifiable Metrics */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
          50-75%
        </div>
        <div className="text-base text-[#4A4A4A]">Faster Deployment</div>
      </div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
          95%
        </div>
        <div className="text-base text-[#4A4A4A]">Error Reduction</div>
      </div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
          100%
        </div>
        <div className="text-base text-[#4A4A4A]">Factory Tested</div>
      </div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
          3"
        </div>
        <div className="text-base text-[#4A4A4A]">Length Increments</div>
      </div>
    </div>

    {/* Client Logos (if available) - placeholder for now */}
    <div className="text-center text-sm text-[#767676]">
      <p>Serving data center, enterprise, and hyperscale customers worldwide</p>
    </div>
  </div>
</section>
```

**4. CTA Section + SEO Hidden Text**

```tsx
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 max-w-4xl text-center">
    <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
      Ready to Transform Your Data Center Deployment?
    </h2>
    <p className="text-lg text-[#4A4A4A] mb-8">
      Get a custom quote for your data center cabling project
    </p>
    <B2BButton variant="primary" size="lg" asChild>
      <Link href="/contact">Request a Quote</Link>
    </B2BButton>
  </div>
</section>

{/* SEO Hidden Text (already added in Phase 1) */}
<section className="seo-hidden-content">
  <details className="sr-only" aria-hidden="true">
    <summary>Additional Technical Information</summary>
    <div>
      {/* 200-250 words from PRD Doc 4 - already added */}
    </div>
  </details>
</section>
```

**Verification:**
- [ ] Homepage matches PRD structure
- [ ] All B2B components used correctly
- [ ] Color palette compliance (#0072CE, #333333)
- [ ] Responsive on mobile/tablet/desktop
- [ ] No orange or bright AI colors
- [ ] SEO hidden text present (from Phase 1)
- [ ] All links work
- [ ] No TypeScript errors

### Phase 3c: Product Page Pattern (Days 5-7)

**Reusable Pattern for Product Pages:**

**Structure Template:**

```tsx
// 1. Hero Section
<section className="bg-gradient-to-r from-[#0072CE] to-[#005BA4] text-white py-16 md:py-24">
  <div className="container mx-auto px-4 max-w-6xl">
    <h1>{productName}</h1>
    <p className="text-xl md:text-2xl">{productTagline}</p>
  </div>
</section>

// 2. Features Grid (3 columns)
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2>Features & Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map(feature => (
        <B2BCard key={feature.id}>
          <B2BCardHeader>
            <B2BCardTitle>{feature.title}</B2BCardTitle>
          </B2BCardHeader>
          <B2BCardContent>
            <p>{feature.description}</p>
          </B2BCardContent>
        </B2BCard>
      ))}
    </div>
  </div>
</section>

// 3. Technical Specifications (B2B CRITICAL)
<section className="py-16 md:py-24 bg-[#F5F5F5]">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="mb-8">Technical Specifications</h2>
    <SpecTable specifications={productSpecs} />
  </div>
</section>

// 4. Applications/Use Cases
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="mb-8">Applications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Application cards or bullet points */}
    </div>
  </div>
</section>

// 5. CTA + SEO Hidden Text
<section className="py-16 md:py-24 bg-white text-center">
  <div className="container mx-auto px-4 max-w-4xl">
    <h2>Request a Quote</h2>
    <B2BButton variant="primary" size="lg" asChild>
      <Link href="/contact">Get Started</Link>
    </B2BButton>
  </div>
</section>

{/* SEO Hidden Text (already added in Phase 1) */}
```

**Apply Pattern To (in order):**

1. **Fiber Solutions** (`app/fiber/page.tsx`) - First product page, establishes pattern
2. High Speed Interconnect (`app/high-speed-interconnect/page.tsx`)
3. Ethernet Solutions (`app/ethernet/page.tsx`)
4. Deployment Services (`app/deployment-services/page.tsx`)
5. Custom Engineering (`app/custom-engineering/page.tsx`)
6. DC Twin™ (`app/custom-engineering/dc-twin/page.tsx`)
7. Systems & Accessories (`app/systems-and-accessories/page.tsx`)
8. Testing Solutions (`app/systems-and-accessories/testing/page.tsx`)
9. Fiber - Hyperscalers (`app/fiber/hyperscalers/page.tsx`)
10. Fiber - Patch Panels (`app/fiber/patch-panels/page.tsx`)
11. Ethernet - Patch Panels (`app/ethernet/patch-panels/page.tsx`)

**Per-Page Checklist:**
- [ ] Copy product pattern structure
- [ ] Update content from PRD v3.0 Doc 3
- [ ] Add product-specific specs to SpecTable
- [ ] SEO hidden text already present (Phase 1)
- [ ] All B2B components used
- [ ] Responsive design verified
- [ ] No TypeScript errors

### Phase 3d: Resources Polish (Day 8)

**Hub Page:** `app/resources/page.tsx`

**Updates:**
- Apply B2B card styling to article preview cards
- Ensure proper spacing and layout
- SEO hidden text already added (Phase 1)

**7 Article Pages:**
- Apply B2B typography
- Add "Request a Quote" CTA at bottom
- SEO hidden text already added (Phase 1)
- Related articles section (if needed)

### Phase 3e: Company Page (Day 9)

**File:** `app/company/page.tsx`

**Updates:**
- Apply B2B component styling
- Professional layout matching homepage pattern
- SEO hidden text already added (Phase 1)
- Values, certifications, trust signals

**Note:** Contact page excluded (do not modify)

---

## Implementation Sequence Summary

| Phase | Timeline | Deliverable |
|-------|----------|-------------|
| **Phase 1: SEO** | Day 1 (80 min) | SEO hidden text on all 15 pages |
| **Phase 2: Components** | Days 2-3 | B2B button, card, spec table |
| **Phase 3a: Navigation** | Day 3 (5 min) | Resources link added |
| **Phase 3b: Homepage** | Days 3-4 | Homepage redesign complete |
| **Phase 3c: Products** | Days 5-7 | 11 product pages redesigned |
| **Phase 3d: Resources** | Day 8 | Resources hub + 7 articles polished |
| **Phase 3e: Company** | Day 9 | Company page redesigned |

**Total:** 9 days to complete redesign

---

## Quality Assurance Checklist

### Design Compliance

- [ ] Electric Blue (#0072CE) used for all primary elements
- [ ] Dark Charcoal Gray (#333333) used for secondary elements
- [ ] NO orange (#FF6B35) anywhere in codebase
- [ ] NO bright AI colors (green, purple, red)
- [ ] Sharp corners (4px border-radius) throughout
- [ ] Generous white space (B2B aesthetic)
- [ ] Professional shadows (subtle, not dramatic)

### Component Verification

- [ ] B2B components created in `/components/ui/b2b/`
- [ ] Existing components untouched
- [ ] All B2B components TypeScript compliant
- [ ] Components export correctly
- [ ] Button variants work (primary, secondary, ghost)
- [ ] Card styling matches PRD
- [ ] Spec table renders correctly

### Page Implementation

- [ ] All 15 pages redesigned (Contact excluded)
- [ ] SEO hidden text on all pages
- [ ] Product pages use SpecTable component
- [ ] Homepage matches PRD structure
- [ ] Resources visible in navigation
- [ ] All links functional
- [ ] Responsive design verified

### Technical Quality

- [ ] Zero TypeScript errors
- [ ] Zero console warnings
- [ ] Build succeeds (`npm run build`)
- [ ] Lighthouse scores ≥90
- [ ] Core Web Vitals met
- [ ] Mobile responsive
- [ ] Accessibility (WCAG 2.1 AA)

### SEO Verification

- [ ] All pages have meta titles
- [ ] All pages have meta descriptions
- [ ] Hidden text present (view source)
- [ ] Schema.org markup (if applicable)
- [ ] Sitemap updated
- [ ] Google Search Console verification

---

## Success Metrics

### Immediate (Days 1-9)

- [ ] All 15 pages redesigned and deployed
- [ ] B2B component library complete
- [ ] Navigation updated (Resources visible)
- [ ] SEO hidden text implemented
- [ ] Zero regressions (Contact page unchanged)

### Short-term (Weeks 1-4)

- [ ] Google Search Console shows crawl activity
- [ ] Lighthouse scores ≥90 across all pages
- [ ] Zero user-reported bugs
- [ ] Stakeholder approval on design

### Long-term (Weeks 4-12)

- [ ] Improved organic search rankings
- [ ] Increased organic traffic
- [ ] Better engagement metrics (time on site, bounce rate)
- [ ] Higher conversion rates (quote requests)

---

## Next Steps

1. **Review & Approve** this design document
2. **Set up git worktree** for isolated implementation
3. **Begin Phase 1** (SEO hidden text - 80 min)
4. **Proceed through phases** with approval checkpoints
5. **Deploy to production** after final verification

---

**Design Validated:** December 12, 2025
**Ready for Implementation:** Yes
**Estimated Completion:** 9 days from start

import type { Metadata } from "next"
import {
  B2BButton,
  B2BCard,
  B2BCardHeader,
  B2BCardTitle,
  B2BCardDescription,
  B2BCardContent,
  B2BCardFooter,
  SpecTable,
} from "@/components/ui/b2b"
import { Download, ExternalLink, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "B2B Components Demo | Wave2Wave",
  description: "Demonstration page for B2B component library",
}

export default function B2BComponentsDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#333333] mb-4">B2B Component Library Demo</h1>
            <p className="text-lg text-slate-600">
              Professional B2B components using Electric Blue (#0072CE) and Dark Charcoal Gray (#333333)
            </p>
          </div>
        </div>
      </section>

      {/* Button Variants */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Button Variants</h2>

            <div className="space-y-8">
              {/* Primary Buttons */}
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">Primary (Call-to-Action)</h3>
                <div className="flex flex-wrap gap-4">
                  <B2BButton size="sm">Small Primary</B2BButton>
                  <B2BButton size="md">Medium Primary (Default)</B2BButton>
                  <B2BButton size="lg">Large Primary</B2BButton>
                  <B2BButton size="md" disabled>Disabled</B2BButton>
                  <B2BButton size="md" loading>Loading...</B2BButton>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">Secondary (Outline)</h3>
                <div className="flex flex-wrap gap-4">
                  <B2BButton variant="secondary" size="sm">Small Secondary</B2BButton>
                  <B2BButton variant="secondary" size="md">Medium Secondary</B2BButton>
                  <B2BButton variant="secondary" size="lg">Large Secondary</B2BButton>
                  <B2BButton variant="secondary" size="md" disabled>Disabled</B2BButton>
                </div>
              </div>

              {/* Outline Buttons */}
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">Outline (Dark)</h3>
                <div className="flex flex-wrap gap-4">
                  <B2BButton variant="outline" size="sm">Small Outline</B2BButton>
                  <B2BButton variant="outline" size="md">Medium Outline</B2BButton>
                  <B2BButton variant="outline" size="lg">Large Outline</B2BButton>
                </div>
              </div>

              {/* Ghost Buttons */}
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">Ghost (Minimal)</h3>
                <div className="flex flex-wrap gap-4">
                  <B2BButton variant="ghost" size="sm">Small Ghost</B2BButton>
                  <B2BButton variant="ghost" size="md">Medium Ghost</B2BButton>
                  <B2BButton variant="ghost" size="lg">Large Ghost</B2BButton>
                </div>
              </div>

              {/* Buttons with Icons */}
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">With Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <B2BButton>
                    <Download />
                    Download Datasheet
                  </B2BButton>
                  <B2BButton variant="secondary">
                    <ExternalLink />
                    View Specifications
                  </B2BButton>
                  <B2BButton variant="outline">
                    <CheckCircle2 />
                    Request Quote
                  </B2BButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Variants */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Card Components</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Basic Card */}
              <B2BCard>
                <B2BCardHeader>
                  <B2BCardTitle>Basic Card</B2BCardTitle>
                  <B2BCardDescription>
                    Professional B2B card with generous padding and clean borders
                  </B2BCardDescription>
                </B2BCardHeader>
                <B2BCardContent>
                  <p className="text-slate-600">
                    This card demonstrates the basic B2B styling with proper spacing, borders, and hover effects.
                  </p>
                </B2BCardContent>
              </B2BCard>

              {/* Card with Footer */}
              <B2BCard>
                <B2BCardHeader>
                  <B2BCardTitle>Card with Footer</B2BCardTitle>
                  <B2BCardDescription>
                    Includes a footer section for actions
                  </B2BCardDescription>
                </B2BCardHeader>
                <B2BCardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5" />
                      <span>Professional B2B aesthetics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5" />
                      <span>Clean, corporate design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5" />
                      <span>Hover effects included</span>
                    </li>
                  </ul>
                </B2BCardContent>
                <B2BCardFooter>
                  <B2BButton variant="secondary" size="sm">Learn More</B2BButton>
                </B2BCardFooter>
              </B2BCard>

              {/* Feature Card */}
              <B2BCard>
                <B2BCardHeader>
                  <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0072CE]" />
                  </div>
                  <B2BCardTitle>Feature Highlight</B2BCardTitle>
                  <B2BCardDescription>
                    Cards can include icons and visual elements
                  </B2BCardDescription>
                </B2BCardHeader>
                <B2BCardContent>
                  <p className="text-slate-600 mb-4">
                    This pattern is perfect for feature highlights, service offerings, or value propositions.
                  </p>
                  <B2BButton size="sm">Get Started</B2BButton>
                </B2BCardContent>
              </B2BCard>
            </div>
          </div>
        </div>
      </section>

      {/* Specification Tables */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Specification Tables</h2>

            <div className="space-y-8">
              {/* Fiber Optic Specs */}
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">Fiber Optic Cable Specifications</h3>
                <SpecTable
                  specifications={[
                    { label: "Cable Type", value: "OM4 Multimode Fiber" },
                    { label: "Connector Type", value: "MPO-24 (Male)" },
                    { label: "Polarity", value: "Method B (Straight-Through)" },
                    { label: "Length Options", value: "1m - 100m (3-inch increments)" },
                    { label: "Jacket Material", value: "LSZH (Plenum Rated)" },
                    { label: "Bandwidth", value: "4700 MHz·km @ 850nm" },
                    { label: "Testing", value: "100% Factory Tested (IL/RL)" },
                    { label: "Standards Compliance", value: "TIA-568.3-D, IEC 61754-7, IEEE 802.3" },
                    { label: "Operating Temperature", value: "-20°C to +70°C" },
                    { label: "Warranty", value: "Lifetime (Manufacturing Defects)" },
                  ]}
                />
              </div>

              {/* Ethernet Specs */}
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">Cat6A Ethernet Cable Specifications</h3>
                <SpecTable
                  specifications={[
                    { label: "Category", value: "Cat6A (Augmented Category 6)" },
                    { label: "Bandwidth", value: "500 MHz" },
                    { label: "Speed", value: "10GBASE-T (10 Gigabit Ethernet)" },
                    { label: "Max Distance", value: "100 meters" },
                    { label: "Connector", value: "RJ45 (8P8C)" },
                    { label: "Shielding", value: "UTP or F/UTP options" },
                    { label: "Testing", value: "Fluke DSX-8000 Certified" },
                    { label: "Standards", value: "TIA-568.2-D, ISO/IEC 11801" },
                    { label: "PoE Support", value: "IEEE 802.3bt (100W)" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Combinations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Component Combinations</h2>

            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>OM4 Multimode Fiber - MPO-24 Trunk Cable</B2BCardTitle>
                <B2BCardDescription>
                  High-performance 400G fiber optic trunk cable for data center spine-leaf architecture
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <div className="space-y-6">
                  <p className="text-slate-600">
                    This example demonstrates how B2B components work together: cards, specification tables, and buttons create a professional product showcase.
                  </p>

                  <SpecTable
                    specifications={[
                      { label: "Fiber Count", value: "24-fiber MPO trunk" },
                      { label: "Application", value: "400GBASE-SR8, 800G breakout" },
                      { label: "Core/Cladding", value: "50/125 µm" },
                      { label: "Attenuation", value: "≤ 2.3 dB/km @ 850nm" },
                      { label: "Custom Lengths", value: "Available in 3-inch increments" },
                      { label: "Factory Testing", value: "Insertion Loss & Return Loss verified" },
                    ]}
                  />

                  <div className="flex flex-wrap gap-4">
                    <B2BButton>
                      <Download />
                      Download Datasheet
                    </B2BButton>
                    <B2BButton variant="secondary">Request Custom Quote</B2BButton>
                    <B2BButton variant="outline">View Similar Products</B2BButton>
                  </div>
                </div>
              </B2BCardContent>
            </B2BCard>
          </div>
        </div>
      </section>

      {/* Design Notes */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">Design System Notes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#333333]">Color Palette</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#0072CE] border-2 border-slate-200"></div>
                    <div>
                      <div className="font-mono text-sm text-[#333333]">#0072CE</div>
                      <div className="text-sm text-slate-600">Electric Blue (Primary)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#333333] border-2 border-slate-200"></div>
                    <div>
                      <div className="font-mono text-sm text-[#333333]">#333333</div>
                      <div className="text-sm text-slate-600">Dark Charcoal (Secondary)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#005BA4] border-2 border-slate-200"></div>
                    <div>
                      <div className="font-mono text-sm text-[#333333]">#005BA4</div>
                      <div className="text-sm text-slate-600">Darker Blue (Hover)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#333333]">Key Principles</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Sharp corners (4px border-radius) for professional look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Generous padding and white space (B2B aesthetic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Minimal shadows (subtle, not dramatic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Clean borders for defined edges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Monospace fonts for technical specifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

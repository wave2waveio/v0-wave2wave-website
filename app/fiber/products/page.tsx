import type { Metadata } from "next"
import Link from "next/link"
import { B2BButton, B2BCard, B2BCardHeader, B2BCardTitle, B2BCardDescription, B2BCardContent, SpecTable } from "@/components/ui/b2b"
import { HeroSection } from "@/components/HeroSection"
import { CTASection } from "@/components/CTASection"
import { CheckCircle2, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Fiber Optic Products | Wave2Wave – Complete Product Catalog",
  description:
    "Browse Wave2Wave's complete fiber optic product catalog including MPO patch cords, LC patch cords, trunk cables, and breakout assemblies with detailed specifications.",
}

export default function FiberProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Fiber Optic Products"
        subtitle="Complete catalog of factory-terminated fiber assemblies with detailed specifications and ordering information"
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* MPO Patch Cords */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6">MPO Patch Cords</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                High-density optical connectivity for data centers, telecom networks, and cross-connect systems.
                Designed to terminate 12 or 24 fibers in a compact form factor, efficiently consolidating multiple
                optical paths into a single interface.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-[#333333]">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Low IL/RL for stable, high-performance optical links",
                    "Factory-terminated and tested to meet industry standards",
                    "High-density MPO design replaces up to 24 individual connectors",
                    "Precision guide pins ensure accurate fiber alignment",
                    "Push-pull tabs for installation in tight spaces",
                    "Available in SM and MM with color-coded housings",
                    "Plenum-rated jackets and custom configurations"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <B2BButton size="sm" asChild>
                  <Link href="/contact">Request Quote</Link>
                </B2BButton>
                <B2BButton variant="secondary" size="sm">
                  <Download className="w-4 h-4" />
                  Download Datasheet
                </B2BButton>
              </div>
            </div>

            <div>
              <SpecTable
                specifications={[
                  { label: "Fiber Count", value: "12-fiber or 24-fiber" },
                  { label: "Fiber Types", value: "SMF 9/125, OM3 50/125, OM4 50/125" },
                  { label: "Connector Options", value: "Male/Female, Male/Male guide pins" },
                  { label: "Polish Type", value: "PC, APC" },
                  { label: "IL (MM Elite)", value: "Typ: 0.10 dB, Max: 0.35 dB" },
                  { label: "IL (MM)", value: "Typ: 0.20 dB, Max: 0.60 dB" },
                  { label: "IL (SM Elite APC)", value: "Typ: 0.10 dB, Max: 0.35 dB" },
                  { label: "IL (SM APC)", value: "Typ: 0.25 dB, Max: 0.75 dB" },
                  { label: "Return Loss (MM)", value: "≥ 20 dB" },
                  { label: "Return Loss (SM)", value: "≥ 60 dB" },
                  { label: "Standards", value: "EIA/TIA-455-21A, IEC-61754-7, TIS-604-5" },
                  { label: "Compliance", value: "RoHS, UL Rated" },
                ]}
              />

              <div className="mt-6 p-4 bg-slate-50 rounded border-l-4 border-[#0072CE]">
                <h4 className="font-semibold text-[#333333] mb-2">Part Number Format</h4>
                <p className="font-mono text-sm text-slate-700 mb-2">50ab-CDEFP-XXM</p>
                <div className="text-sm text-slate-600 space-y-1">
                  <p><strong>ab:</strong> MF (male pins one end), MM (male pins both ends)</p>
                  <p><strong>C:</strong> 3 (SMF), 4 (OM3), 8 (OM4)</p>
                  <p><strong>DE:</strong> 12 or 24 fibers</p>
                  <p><strong>F:</strong> 0 (PC), 2 (APC)</p>
                  <p><strong>P:</strong> Polarity method</p>
                  <p><strong>XX:</strong> Length in meters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LC Patch Cords */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <SpecTable
                specifications={[
                  { label: "Connector Types", value: "LC, SC, FC, ST, MTRJ, LC Uni-Boot, Mini-LC" },
                  { label: "Polish Types", value: "UPC, APC, PC" },
                  { label: "Fiber Options", value: "OM1, OM2, OM3, OM4, Single-Mode" },
                  { label: "Cable Types", value: "Riser, Plenum, LSZH" },
                  { label: "IL SM (LC/UPC)", value: "Typ: 0.15 dB, Max: 0.30 dB" },
                  { label: "IL SM (SC/UPC)", value: "Typ: 0.15 dB, Max: 0.30 dB" },
                  { label: "IL SM (APC)", value: "Typ: 0.15 dB, Max: 0.30 dB" },
                  { label: "IL MM (LC/PC)", value: "Typ: 0.10 dB, Max: 0.20 dB" },
                  { label: "IL MM (SC/PC)", value: "Typ: 0.10 dB, Max: 0.20 dB" },
                  { label: "Return Loss (SM)", value: "≥ 50 dB (UPC), ≥ 60 dB (APC)" },
                  { label: "Standards", value: "GR-326-CORE, TIA/EIA-568B-B.3, IEEE802.3z" },
                  { label: "Compliance", value: "RoHS Approved" },
                ]}
              />

              <div className="mt-6 p-4 bg-white rounded border-l-4 border-[#0072CE]">
                <h4 className="font-semibold text-[#333333] mb-2">Part Number Format</h4>
                <p className="font-mono text-sm text-slate-700 mb-2">AB-CDEFg-XXM</p>
                <div className="text-sm text-slate-600 space-y-1">
                  <p><strong>AB:</strong> 31 (LC-LC), 31U (Uni-Boot), 31P (Pull Tab)</p>
                  <p><strong>C:</strong> 3 (SMF), 4 (OM3), 8 (OM4)</p>
                  <p><strong>DE:</strong> 02 (duplex), 04 (quad)</p>
                  <p><strong>F:</strong> 0 (PC), 1 (UPC), 2 (APC)</p>
                  <p><strong>g:</strong> P (Plenum), m (2mm jacket), L (LSZH)</p>
                  <p><strong>XX:</strong> Length in meters</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#333333] mb-6">LC Fiber Optic Patch Cords</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                High-speed, low-loss performance for data, telecom, and enterprise applications. Designed to replace
                copper cabling with superior bandwidth, longer reach, and EMI immunity for high-capacity and
                mission-critical networks.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-[#333333]">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Low return loss (RL) and low insertion loss (IL)",
                    "100% factory-tested with individual test data",
                    "Wide range of connector options (LC, SC, FC, ST, MTRJ)",
                    "Multiple polish types: UPC, APC, and PC",
                    "Fiber options: OM1, OM2, OM3, OM4, Single-Mode",
                    "Cable types: Riser, Plenum, or LSZH",
                    "Serialized labeling for fast installation and traceability",
                    "Full customization available at no additional cost"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0072CE] mt-0.5 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <B2BButton size="sm" asChild>
                  <Link href="/contact">Request Quote</Link>
                </B2BButton>
                <B2BButton variant="secondary" size="sm">
                  <Download className="w-4 h-4" />
                  Download Datasheet
                </B2BButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Additional Fiber Products</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>MPO Trunk Cables</B2BCardTitle>
                <B2BCardDescription>
                  12F and 24F trunk cables for spine-leaf architectures
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>400G/800G applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>OM3, OM4, OM5, SMF options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Custom lengths available</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/contact">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>MPO to LC Breakout</B2BCardTitle>
                <B2BCardDescription>
                  Breakout cables for distributing MPO to individual LC connections
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>12F to 6× LC duplex</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>24F to 12× LC duplex</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Pre-terminated fanout assemblies</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/contact">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>LC Uniboot Patch Cords</B2BCardTitle>
                <B2BCardDescription>
                  Space-saving duplex design with reversible polarity
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>50% space savings vs standard duplex</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Switchable polarity with pull tab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Improved airflow in high-density racks</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/contact">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>Armored Fiber Cables</B2BCardTitle>
                <B2BCardDescription>
                  Rugged protection for harsh environments and outdoor use
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Stainless steel armoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Rodent and crush resistant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Indoor/outdoor rated</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/contact">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>Fiber Loopbacks</B2BCardTitle>
                <B2BCardDescription>
                  Testing and diagnostic tools for fiber networks
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>LC, SC, MPO connector types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Single-mode and multimode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Port testing and diagnostics</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/contact">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>Bend-Insensitive Fiber</B2BCardTitle>
                <B2BCardDescription>
                  G.657 compliant fiber for tight routing applications
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Reduced bend radius requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Maintains performance in tight spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Ideal for high-density installations</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/contact">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>
          </div>
        </div>
      </section>

      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>Wave2Wave fiber optic products include comprehensive range of MPO patch cords (12-fiber and 24-fiber), LC patch cords, SC patch cords, MPO trunk cables, MPO-to-LC breakout cables, LC uniboot assemblies, armored fiber cables, fiber loopbacks, and bend-insensitive fiber assemblies.</p>

            <p>MPO patch cord specifications: 12-fiber or 24-fiber MPO connectors, male/female or male/male guide pin configurations, fiber types (SMF 9/125µm, OM3 50/125µm, OM4 50/125µm), polish types (PC, APC), insertion loss 0.10-0.75 dB depending on grade, return loss ≥20 dB (MM) or ≥60 dB (SM), standards compliance (EIA/TIA-455-21A, IEC-61754-7, TIS-604-5, RoHS, UL).</p>

            <p>LC patch cord specifications: Connector types (LC, SC, FC, ST, MTRJ, LC Uni-Boot, Mini-LC), polish types (UPC, APC, PC), fiber options (OM1, OM2, OM3, OM4, Single-Mode), cable types (Riser, Plenum, LSZH), insertion loss 0.10-0.30 dB, return loss ≥50 dB (UPC) or ≥60 dB (APC), 100% factory tested with individual test data, serialized labeling, standards compliance (GR-326-CORE, TIA/EIA-568B-B.3, IEEE802.3z, RoHS).</p>

            <p>MPO trunk cable applications: 400G QSFP-DD networks (400GBASE-SR8, 8×50G lanes), 800G OSFP networks (800GBASE-SR8, 8×100G lanes), spine-leaf data center architectures, high-density cross-connects, parallel optics transmission, and structured cabling backbones.</p>

            <p>Custom fiber assembly capabilities: Precise length control (custom lengths in 3-inch increments), factory pre-termination (eliminates field splicing), custom labeling (rack/port mapping, serial numbers, barcodes), polarity management (Method A, B, C configurations for MPO), breakout configurations (MPO to individual LC/SC), color-coded jacketing (organize by network segment), and deployment kitting (rack-specific bundles).</p>

            <p>Wave2Wave fiber products serve data center infrastructure (cross-connects, equipment rooms, MDA/IDA), telecom networks (central offices, carrier hotels), enterprise IT (campus backbones, SAN storage), test labs (equipment testing, validation), and FTTH deployments (fiber-to-the-home, distribution networks).</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Custom Fiber Assemblies?"
        subtitle="Contact our engineering team to discuss your specific fiber optic requirements and receive detailed specifications and pricing."
        primaryButtonText="Request Custom Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

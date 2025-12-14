import type { Metadata } from "next"
import Link from "next/link"
import { B2BButton } from "@/components/ui/b2b/button"
import { B2BCard } from "@/components/ui/b2b/card"
import { SpecTable } from "@/components/ui/b2b/spec-table"
import { ChevronRight, Download, CheckCircle2, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Systems & Accessories | Wave2Wave",
  description:
    "Modular fiber patch panel systems (EVO/EXO), optical loopbacks, transceiver coding modules, and testing accessories for data center infrastructure.",
  keywords:
    "fiber patch panels, EVO patch panels, EXO cassettes, optical loopbacks, SFP+ loopback, QSFP+ loopback, transceiver coding, testing accessories",
}

export default function SystemsAccessoriesProductsPage() {
  // Schema.org Structured Data - Product Catalog
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Systems & Accessories",
    "description": "Modular fiber patch panel systems, optical loopbacks, and testing accessories for data center infrastructure",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "EVO Fiber Patch Panel System",
        "description": "High-density modular fiber patch panel supporting up to 288 fibers per 1U with MPO and LC connectivity",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Infrastructure",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Capacity", "value": "Up to 288 fibers per 1U" },
          { "@type": "PropertyValue", "name": "Rack Units", "value": "1U, 2U, 4U configurations" },
          { "@type": "PropertyValue", "name": "Standards", "value": "TIA-942, EIA-310-D" }
        ]
      },
      {
        "@type": "Product",
        "name": "EXO Mini Fiber Cassette System",
        "description": "Compact fiber cassette system for space-constrained environments with multiple connectivity options",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Infrastructure",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Form Factor", "value": "Mini cassette design" },
          { "@type": "PropertyValue", "name": "Applications", "value": "Compact installations, branch offices" }
        ]
      },
      {
        "@type": "Product",
        "name": "SFP+ Optical Loopback",
        "description": "10G SFP+ optical loopback module for testing and diagnostics",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Testing Equipment",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Form Factor", "value": "SFP+ pluggable" },
          { "@type": "PropertyValue", "name": "Speed", "value": "10G" }
        ]
      },
      {
        "@type": "Product",
        "name": "QSFP+ Optical Loopback",
        "description": "40G QSFP+ optical loopback module for testing and diagnostics",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Testing Equipment",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Form Factor", "value": "QSFP+ pluggable" },
          { "@type": "PropertyValue", "name": "Speed", "value": "40G" }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-[#0072CE] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/systems-and-accessories"
              className="hover:text-[#0072CE] transition-colors"
            >
              Systems & Accessories
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#333333] font-medium">Products</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0072CE] to-[#005BA4] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-10 w-10" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Systems & Accessories
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Modular fiber patch panel systems, optical testing accessories, and
              infrastructure components designed for high-density data centers.
              Simplify deployment, improve organization, and accelerate
              troubleshooting.
            </p>
            <div className="flex flex-wrap gap-4">
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </B2BButton>
              <B2BButton variant="outline" size="lg" asChild>
                <Link href="/custom-engineering">Custom Solutions</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>

      {/* Patch Panel Systems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Modular Fiber Patch Panel Systems
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* EVO System */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      FLAGSHIP SYSTEM
                    </div>
                    <h3 className="text-2xl font-bold text-[#333333]">
                      EVO Fiber Patch Panel System
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex gap-3">
                    <B2BButton asChild>
                      <a
                        href="/datasheets/patch-panels/W2W-C123_EVO Series Datasheet_REV1.2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-5 w-5" />
                        Download Datasheet
                      </a>
                    </B2BButton>
                    <B2BButton variant="secondary" asChild>
                      <Link href="/contact">Request Quote</Link>
                    </B2BButton>
                  </div>
                }
              >
                <div className="space-y-6">
                  <p className="text-slate-700">
                    High-density modular cassette system for MPO-based fiber
                    infrastructure. Supports 12F and 24F MPO cassettes with
                    field-swappable modules for rapid deployment and
                    reconfiguration.
                  </p>

                  <div>
                    <h4 className="font-semibold text-[#333333] mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>High Density:</strong> Up to 288 fibers per 1U
                          enclosure
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Modular Design:</strong> Field-swappable
                          cassettes (12F/24F)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>MPO/MTP Compatible:</strong> Supports Type A, B,
                          C polarity
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Fiber Types:</strong> OM3, OM4, OM5, OS2
                          single-mode
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Cable Management:</strong> Integrated routing
                          guides
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Labeling:</strong> Clear port identification and
                          documentation
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#333333] mb-3">
                      Applications
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Hyperscale data center spine-leaf fabrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>High-density cross-connects and MDA/IDA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>40G/100G/400G network aggregation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Telecom central offices and carrier hotels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </B2BCard>

              {/* EXO System */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      COMPACT SOLUTION
                    </div>
                    <h3 className="text-2xl font-bold text-[#333333]">
                      EXO Mini Fiber Cassette System
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex gap-3">
                    <B2BButton asChild>
                      <a
                        href="/datasheets/patch-panels/W2W-C123_EXO Series Datasheet_REV1.1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-5 w-5" />
                        Download Datasheet
                      </a>
                    </B2BButton>
                    <B2BButton variant="secondary" asChild>
                      <Link href="/contact">Request Quote</Link>
                    </B2BButton>
                  </div>
                }
              >
                <div className="space-y-6">
                  <p className="text-slate-700">
                    Ultra-compact modular cassette system for space-constrained
                    deployments. Ideal for edge computing sites, branch offices,
                    and equipment rooms requiring high fiber counts in minimal
                    footprint.
                  </p>

                  <div>
                    <h4 className="font-semibold text-[#333333] mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Compact Form Factor:</strong> Smallest modular
                          cassette on market
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Flexible Mounting:</strong> Wall-mount, rack-mount,
                          cabinet options
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Easy Access:</strong> Slide-out cassette trays
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Multiple Adapters:</strong> LC, SC, MPO interface
                          options
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Color Coding:</strong> Fiber type identification
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Tool-Free:</strong> No tools required for cassette
                          changes
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#333333] mb-3">
                      Applications
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Edge computing and micro data centers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Branch office and retail locations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Equipment rooms with limited space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Testing and lab environments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </B2BCard>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Accessories */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Optical Testing Accessories
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Essential tools for network validation, troubleshooting, and quality
              assurance testing.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* SFP+ Loopback */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      10G TESTING
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      SFP+ Optical Loopback
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex flex-col gap-2">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/test-accessories/W2W_C123_SFP+_Loopback REV1.1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4" />
                        Datasheet
                      </a>
                    </B2BButton>
                    <B2BButton variant="secondary" size="sm" asChild>
                      <Link href="/contact">Quote</Link>
                    </B2BButton>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Hot-pluggable optical loopback for testing SFP+ ports,
                    transceivers, and 10G fiber links.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>10GBASE-SR/LR testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>MM (850nm) and SM (1310nm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Port diagnostics and validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Hot-pluggable design</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* QSFP+ Loopback */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      40G TESTING
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      QSFP+ Optical Loopback
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex flex-col gap-2">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/test-accessories/W2W_C123_QSFP+_Loopback REV1.1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4" />
                        Datasheet
                      </a>
                    </B2BButton>
                    <B2BButton variant="secondary" size="sm" asChild>
                      <Link href="/contact">Quote</Link>
                    </B2BButton>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    High-speed optical loopback for testing QSFP+ ports and
                    validating 40G fiber infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>40GBASE-SR4/LR4 testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>MPO/MTP connector validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Switch port diagnostics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Link quality verification</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* Custom Loopbacks */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#333333] mb-1">
                      CUSTOM TESTING
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      Custom Loopback Modules
                    </h3>
                  </div>
                }
                footer={
                  <B2BButton size="sm" asChild>
                    <Link href="/custom-engineering">Learn More</Link>
                  </B2BButton>
                }
              >
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Custom optical loopbacks for specialized testing requirements
                    and form factors.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>QSFP28, QSFP56, QSFP-DD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>Custom wavelengths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>Specialty fiber types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>OEM and bulk orders</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Need Custom Systems or Testing Solutions?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Our engineering team can design custom patch panel configurations,
              specialized testing modules, and integrated infrastructure systems
              tailored to your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <B2BButton size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </B2BButton>
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/custom-engineering">
                  Explore Custom Engineering
                </Link>
              </B2BButton>
              <B2BButton variant="outline" size="lg" asChild>
                <Link href="/systems-and-accessories">
                  Back to Systems & Accessories
                </Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

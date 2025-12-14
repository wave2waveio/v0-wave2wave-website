import type { Metadata } from "next"
import Link from "next/link"
import { B2BButton } from "@/components/ui/b2b/button"
import { B2BCard } from "@/components/ui/b2b/card"
import { SpecTable } from "@/components/ui/b2b/spec-table"
import { ComparisonTable } from "@/components/ui/b2b/comparison-table"
import { ChevronRight, Download, CheckCircle2, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "High Speed Interconnect Products | Wave2Wave",
  description:
    "Ultra-high-speed 800G, 400G, and 100G Active Optical Cables (AOC) and Direct Attach Cables (DAC) for data center interconnects. QSFP-DD, OSFP, and QSFP28 solutions.",
  keywords:
    "800G AOC, 400G AOC, 100G AOC, QSFP-DD, OSFP, QSFP28, DAC cables, active optical cables, direct attach copper, data center interconnect",
}

export default function HighSpeedInterconnectProductsPage() {
  // Schema.org Structured Data - Product Catalog
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "High Speed Interconnect Products",
    "description": "Ultra-high-speed 800G, 400G, and 100G Active Optical Cables (AOC) and Direct Attach Cables (DAC) for data center interconnects",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "800G OSFP Active Optical Cable",
        "description": "800G OSFP to 4x200G QSFP112 breakout AOC with PAM4 modulation for next-gen data centers",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Cable",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "800 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "Up to 100 meters" },
          { "@type": "PropertyValue", "name": "Wavelength", "value": "850nm VCSEL" },
          { "@type": "PropertyValue", "name": "Standards", "value": "IEEE 802.3ck, OIF 800G, OSFP MSA, RoHS" }
        ]
      },
      {
        "@type": "Product",
        "name": "400G QSFP-DD Active Optical Cable",
        "description": "400G QSFP-DD AOC with 8-lane PAM4 for 400G Ethernet and InfiniBand applications",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Cable",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "400 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "Up to 100 meters" },
          { "@type": "PropertyValue", "name": "Standards", "value": "IEEE 802.3bs, QSFP-DD MSA" }
        ]
      },
      {
        "@type": "Product",
        "name": "100G QSFP28 Active Optical Cable",
        "description": "100G QSFP28 AOC with 4-lane 25G NRZ for 100G Ethernet and InfiniBand EDR",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Cable",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "100 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "Up to 100 meters" },
          { "@type": "PropertyValue", "name": "Standards", "value": "IEEE 802.3bm, SFF-8665" }
        ]
      },
      {
        "@type": "Product",
        "name": "100G QSFP28 Direct Attach Cable",
        "description": "100G QSFP28 passive copper DAC for short-reach top-of-rack connections",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Cable",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "100 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "1-5 meters" },
          { "@type": "PropertyValue", "name": "Power Consumption", "value": "Zero (passive)" }
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
              href="/high-speed-interconnect"
              className="hover:text-[#0072CE] transition-colors"
            >
              High Speed Interconnect
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
              <Zap className="h-10 w-10" />
              <h1 className="text-4xl md:text-5xl font-bold">
                High Speed Interconnect Products
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Ultra-high-speed 800G, 400G, and 100G Active Optical Cables (AOC)
              and Direct Attach Cables (DAC) engineered for next-generation
              data centers. Low latency, high reliability, and optimized for
              AI/ML workloads.
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

      {/* 800G AOC - Flagship Product */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-block bg-gradient-to-r from-[#0072CE] to-[#005BA4] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                NEXT-GENERATION INTERCONNECT
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                800G OSFP to 4x200G QSFP112 Breakout AOC
              </h2>
              <p className="text-lg text-slate-700">
                Ultra-high-bandwidth 800G active optical cable with breakout to
                4x200G QSFP112 connectors. Engineered for AI/ML clusters,
                high-performance computing, and next-generation data center
                fabrics requiring massive bandwidth and low latency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>800 Gbps aggregate bandwidth</strong> — ideal for
                      AI/ML training clusters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      OSFP 2x4 (800G) to 4x QSFP112 (200G each) breakout
                      configuration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Active optical technology for extended reach up to 100m
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Ultra-low latency and power consumption
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      PAM4 modulation for maximum signal integrity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Hot-pluggable design for easy deployment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Factory-tested and serialized for traceability
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">
                  Applications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      AI/ML training and inference clusters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      High-performance computing (HPC) fabrics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Hyperscale data center spine-leaf architectures
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      GPU server interconnects (NVIDIA, AMD)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      400G/800G Ethernet network upgrades
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Storage area networks (SAN) and NVMe-oF
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#333333] mb-4">
                Technical Specifications
              </h3>
              <SpecTable
                specifications={[
                  {
                    label: "Configuration",
                    value: "1x OSFP (800G) to 4x QSFP112 (200G each)",
                  },
                  { label: "Data Rate", value: "800 Gbps aggregate" },
                  { label: "Per-Lane Speed", value: "106.25 Gbps (PAM4)" },
                  {
                    label: "Connector Type",
                    value: "OSFP 2x4 | QSFP112 (QSFP-DD112)",
                  },
                  { label: "Cable Type", value: "Active Optical Cable (AOC)" },
                  { label: "Reach", value: "Up to 100 meters" },
                  { label: "Wavelength", value: "850nm VCSEL" },
                  { label: "Fiber Type", value: "OM3/OM4 Multimode" },
                  { label: "Power Consumption", value: "< 12W typical" },
                  { label: "Operating Temperature", value: "0°C to 70°C" },
                  {
                    label: "Standards",
                    value:
                      "IEEE 802.3ck, OIF 800G, QSFP-DD MSA, OSFP MSA, RoHS",
                  },
                ]}
              />
            </div>

            <div className="flex gap-4">
              <B2BButton size="lg" asChild>
                <a
                  href="/datasheets/hsi/W2W_C123_AOC_800G_OSFP112-to-4x200G-QSFP112-ACC-rev1.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5" />
                  Download Datasheet
                </a>
              </B2BButton>
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>

      {/* 100G QSFP28 AOC */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                100G QSFP28 Active Optical Cable
              </h2>
              <p className="text-lg text-slate-700">
                High-performance 100G QSFP28 AOC for data center spine-leaf
                networks, server connectivity, and storage applications.
                Delivers ultra-low latency and power efficiency with extended
                reach up to 100 meters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      100 Gbps aggregate bandwidth (4x25G lanes)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      QSFP28 form factor for broad compatibility
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      850nm VCSEL technology on OM3/OM4 fiber
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Low power consumption (&lt;3.5W)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Hot-pluggable and EMI shielded
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Available in lengths from 1m to 100m
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-4">
                  Applications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      100GBASE-SR4 Ethernet networks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Data center spine-leaf interconnects
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      High-speed server connectivity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Storage area networks (SAN)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Infiniband EDR applications
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#333333] mb-4">
                Technical Specifications
              </h3>
              <SpecTable
                specifications={[
                  { label: "Data Rate", value: "100 Gbps (4x25G)" },
                  { label: "Connector Type", value: "QSFP28" },
                  { label: "Cable Type", value: "Active Optical Cable (AOC)" },
                  { label: "Reach", value: "Up to 100 meters (OM4)" },
                  { label: "Wavelength", value: "850nm VCSEL" },
                  { label: "Fiber Type", value: "OM3/OM4 Multimode" },
                  { label: "Power Consumption", value: "< 3.5W" },
                  { label: "Operating Temperature", value: "0°C to 70°C" },
                  {
                    label: "Standards",
                    value:
                      "IEEE 802.3bm, SFF-8665, SFF-8679, QSFP MSA, RoHS",
                  },
                ]}
              />
            </div>

            <div className="flex gap-4">
              <B2BButton size="lg" asChild>
                <a
                  href="/datasheets/hsi/W2W_C123_AOC_100G_QSFP28.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5" />
                  Download Datasheet
                </a>
              </B2BButton>
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Additional High Speed Interconnect Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 40G QSFP+ AOC */}
              <B2BCard
                header={
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-2">
                      40G QSFP+ Active Optical Cable
                    </h3>
                    <p className="text-sm text-slate-600">
                      Cost-effective 40G connectivity for legacy systems
                    </p>
                  </div>
                }
                footer={
                  <div className="flex gap-3">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/hsi/W2W_C123_AOC_40G_QSFP_REV1.3.pdf"
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
                    Proven 40G QSFP+ AOC for 40GBASE-SR4 Ethernet and
                    Infiniband QDR applications. Extends reach up to 100m with
                    minimal power consumption.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>40 Gbps (4x10G lanes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>QSFP+ form factor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Up to 100m on OM3/OM4</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>IEEE 802.3ba, SFF-8436</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* 100G QSFP28 DAC */}
              <B2BCard
                header={
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-2">
                      100G QSFP28 Direct Attach Cable
                    </h3>
                    <p className="text-sm text-slate-600">
                      Low-cost, low-latency passive copper solution
                    </p>
                  </div>
                }
                footer={
                  <div className="flex gap-3">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/hsi/W2W_C123_DAC_100GbE_QSFP28_Direct_Attach_Cables_Datasheet_SHORT_REV1.1.pdf"
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
                    Passive copper direct attach cable for short-reach 100G
                    connections. Ultra-low latency, zero power consumption, and
                    ideal for top-of-rack applications.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>100 Gbps passive copper</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Lengths: 1m, 2m, 3m, 5m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Zero power consumption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Sub-nanosecond latency</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* 100G QSFP28 to 4x25G SFP28 Breakout DAC */}
              <B2BCard
                header={
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-2">
                      100G to 4x25G Breakout DAC
                    </h3>
                    <p className="text-sm text-slate-600">
                      QSFP28 to 4x SFP28 passive copper breakout
                    </p>
                  </div>
                }
                footer={
                  <div className="flex gap-3">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/hsi/W2W_C123_DAC_Hybrid_Passive_Copper_100GE_QSFP28_to_4x25GE_SFP28_SHORT_REV1.1.pdf"
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
                    Hybrid passive copper cable enabling 100G QSFP28 switch
                    ports to connect to four 25G SFP28 servers or devices.
                    Perfect for maximizing port utilization.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>1x QSFP28 to 4x SFP28</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Passive copper (no power)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Lengths up to 5 meters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Cost-effective port breakout</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* Custom Solutions Card */}
              <B2BCard
                header={
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-2">
                      Custom High Speed Solutions
                    </h3>
                    <p className="text-sm text-slate-600">
                      Specialized interconnects for unique requirements
                    </p>
                  </div>
                }
                footer={
                  <B2BButton size="sm" asChild>
                    <Link href="/custom-engineering">
                      Explore Custom Engineering
                    </Link>
                  </B2BButton>
                }
              >
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Need custom lengths, fiber types, connectors, or
                    specialized configurations? Our engineering team designs
                    and manufactures custom high-speed interconnects.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Custom lengths and configurations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Specialized fiber types (OM5, SMF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Hybrid breakout assemblies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Bulk orders with custom labeling</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-4 text-center">
              AOC vs DAC: Technology Comparison
            </h2>
            <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto">
              Choose the right interconnect technology based on your distance,
              power, latency, and cost requirements.
            </p>

            <ComparisonTable
              columns={[
                {
                  header: "Active Optical (AOC)",
                  subheader: "Fiber-based",
                  highlighted: true,
                },
                {
                  header: "Direct Attach (DAC)",
                  subheader: "Copper-based",
                },
              ]}
              rows={[
                {
                  label: "Maximum Reach",
                  values: ["Up to 100 meters", "1-5 meters typical"],
                },
                {
                  label: "Power Consumption",
                  values: ["Low (< 3.5W for 100G)", "Zero (passive)"],
                },
                {
                  label: "Latency",
                  values: ["< 100 nanoseconds", "< 1 nanosecond"],
                },
                {
                  label: "Cable Weight",
                  values: ["Lightweight, flexible", "Heavier, stiffer"],
                },
                {
                  label: "EMI Immunity",
                  values: ["Complete immunity", "Susceptible to EMI"],
                },
                {
                  label: "Bend Radius",
                  values: ["Tight bends allowed", "Requires wider radius"],
                },
                {
                  label: "Cost (per port)",
                  values: ["Moderate", "Low"],
                },
                {
                  label: "Durability",
                  values: ["Good", "Excellent"],
                },
                {
                  label: "Ideal Applications",
                  values: [
                    "Spine-leaf, cross-rack, extended runs",
                    "Top-of-rack, within-rack, server-to-switch",
                  ],
                },
                {
                  label: "Best for AI/HPC",
                  values: [
                    "Yes - cross-rack GPU clusters",
                    "Yes - within-rack ultra-low latency",
                  ],
                },
              ]}
            />

            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#0072CE] to-[#005BA4] text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  <Zap className="inline h-6 w-6 mb-1 mr-2" />
                  Choose AOC When:
                </h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Runs exceed 5-7 meters (typical DAC limit)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Connecting across racks or between rows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Cable management and airflow are critical
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      EMI protection required (near power systems)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>
                      Building spine-leaf or distributed fabric
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#333333]">
                <h3 className="text-xl font-semibold text-[#333333] mb-4">
                  <Zap className="inline h-6 w-6 mb-1 mr-2 text-[#333333]" />
                  Choose DAC When:
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#333333] mt-0.5 flex-shrink-0" />
                    <span>
                      Runs are 5 meters or less (within rack)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#333333] mt-0.5 flex-shrink-0" />
                    <span>
                      Top-of-rack to server connections
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#333333] mt-0.5 flex-shrink-0" />
                    <span>
                      Absolute lowest latency required (HFT, AI inference)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#333333] mt-0.5 flex-shrink-0" />
                    <span>
                      Budget constraints favor lower cost
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#333333] mt-0.5 flex-shrink-0" />
                    <span>
                      Zero power consumption desired
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-[#0072CE]">
              <h4 className="font-semibold text-[#333333] mb-3">
                Pro Tip: Hybrid Approach
              </h4>
              <p className="text-slate-700">
                Many data centers use DAC for within-rack Top-of-Rack (ToR)
                connections to maximize cost savings and minimize latency, then
                use AOC for spine-leaf and cross-rack connections where the
                extended reach and lighter weight provide operational
                advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Ready to Upgrade to High Speed Interconnect?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Our team specializes in designing ultra-high-speed network
              architectures for AI/ML, HPC, and hyperscale environments. Get
              expert guidance on 800G, 400G, and 100G deployments.
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
                <Link href="/high-speed-interconnect">
                  Back to High Speed Interconnect
                </Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

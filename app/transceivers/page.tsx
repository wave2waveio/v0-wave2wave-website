import type { Metadata } from "next"
import Link from "next/link"
import { B2BButton } from "@/components/ui/b2b/button"
import { B2BCard } from "@/components/ui/b2b/card"
import { SpecTable } from "@/components/ui/b2b/spec-table"
import { ChevronRight, Download, CheckCircle2, Waves } from "lucide-react"

export const metadata: Metadata = {
  title: "Optical Transceivers | Wave2Wave",
  description:
    "Complete range of optical transceivers from 1.25G SFP to 400G QSFP-DD. SFP, SFP+, SFP28, QSFP+, QSFP28, and QSFP-DD modules for fiber optic networks.",
  keywords:
    "optical transceivers, SFP, SFP+, SFP28, QSFP28, QSFP-DD, 400G transceiver, 100G transceiver, SR optics, LR optics, fiber modules",
}

export default function TransceiversPage() {
  // Schema.org Structured Data - Product Catalog
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Optical Transceivers",
    "description": "Complete range of optical transceivers from 1.25G SFP to 400G QSFP-DD for multimode and single-mode fiber networks",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "400G QSFP-DD LR4 Transceiver",
        "description": "400G QSFP-DD pluggable transceiver with 8-lane PAM4 for long-reach single-mode fiber",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Transceiver",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "400 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "Up to 10 km" },
          { "@type": "PropertyValue", "name": "Wavelength", "value": "1310nm CWDM4" },
          { "@type": "PropertyValue", "name": "Standards", "value": "IEEE 802.3bs, QSFP-DD MSA" }
        ]
      },
      {
        "@type": "Product",
        "name": "100G QSFP28 SR4 Transceiver",
        "description": "100G QSFP28 pluggable transceiver with 4-lane 25G for short-reach multimode fiber",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Transceiver",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "100 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "Up to 100 meters" },
          { "@type": "PropertyValue", "name": "Wavelength", "value": "850nm VCSEL" }
        ]
      },
      {
        "@type": "Product",
        "name": "25G SFP28 SR Transceiver",
        "description": "25G SFP28 pluggable transceiver for short-reach multimode fiber applications",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Transceiver",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "25 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "Up to 100 meters" },
          { "@type": "PropertyValue", "name": "Wavelength", "value": "850nm VCSEL" }
        ]
      },
      {
        "@type": "Product",
        "name": "10G SFP+ SR Transceiver",
        "description": "10G SFP+ pluggable transceiver for short-reach multimode fiber applications",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Transceiver",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Data Rate", "value": "10 Gbps" },
          { "@type": "PropertyValue", "name": "Reach", "value": "Up to 300 meters" }
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
            <span className="text-[#333333] font-medium">
              Optical Transceivers
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0072CE] to-[#005BA4] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Waves className="h-10 w-10" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Optical Transceivers
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Complete portfolio of optical transceivers from 1.25G to 400G.
              Hot-pluggable SFP, SFP+, SFP28, QSFP+, QSFP28, and QSFP-DD modules
              for multimode and single-mode fiber networks. Factory-tested and
              MSA-compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </B2BButton>
              <B2BButton variant="outline" size="lg" asChild>
                <Link href="/fiber">Fiber Solutions</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>

      {/* 400G QSFP-DD - Flagship */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-block bg-gradient-to-r from-[#0072CE] to-[#005BA4] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                NEXT-GENERATION 400G
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                400G QSFP-DD LR4 Optical Transceiver
              </h2>
              <p className="text-lg text-slate-700">
                High-performance 400G QSFP-DD optical transceiver for long-reach
                single-mode fiber applications. Delivers 400 Gbps bandwidth over
                distances up to 10km, ideal for data center interconnects and
                metropolitan networks.
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
                      <strong>400 Gbps</strong> aggregate data rate (8x50G PAM4)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      QSFP-DD (QSFP Double-Density) form factor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      LR4 optics: Up to 10km on single-mode fiber
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      4x CWDM4 lanes (1295nm-1330nm)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Hot-pluggable and duplex LC connector
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Digital diagnostics (DDM) via I2C
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
                      400GBASE-LR4 Ethernet networks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Data center interconnects (DCI)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Metropolitan area networks (MAN)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Core network aggregation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Hyperscale cloud infrastructure
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#333333] mb-4">
                Technical Specifications
              </h3>
              <SpecTable
                specifications={[
                  { label: "Data Rate", value: "400 Gbps (8x 50G PAM4)" },
                  { label: "Form Factor", value: "QSFP-DD (DD = Double-Density)" },
                  { label: "Wavelength", value: "CWDM4 (1295nm, 1300nm, 1305nm, 1310nm)" },
                  { label: "Fiber Type", value: "Single-Mode (SMF G.652)" },
                  { label: "Reach", value: "Up to 10 km" },
                  { label: "Connector", value: "Duplex LC" },
                  { label: "TX Power", value: "0 to +4.5 dBm per lane" },
                  { label: "RX Sensitivity", value: "-10 dBm per lane" },
                  { label: "Power Consumption", value: "< 12W" },
                  { label: "Operating Temp", value: "0°C to 70°C" },
                  { label: "Standards", value: "IEEE 802.3bs, QSFP-DD MSA, RoHS" },
                ]}
              />
            </div>

            <div className="flex gap-4">
              <B2BButton size="lg" asChild>
                <a
                  href="/datasheets/transceivers/W2W_C123_400G_QSFP-DD_LR4_Datasheet REV1.1.pdf"
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

      {/* Transceiver Product Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Complete Transceiver Portfolio
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 100G QSFP28 */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      100G QSFP28
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      100G QSFP28 LR4
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex gap-2">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/transceivers/W2W_C123_100G_QSFP28_LR4_Datasheet REV1.1.pdf"
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
                <div className="space-y-3">
                  <p className="text-sm text-slate-700">
                    100GBASE-LR4 optical transceiver for long-reach
                    single-mode applications up to 10km.
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>100G (4x25G NRZ)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>CWDM4 (1295-1330nm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>SMF, 10km reach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>IEEE 802.3ba</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* 40G QSFP+ */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      40G QSFP+
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      40G QSFP+ SR4
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex gap-2">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/transceivers/W2W_C123_40G_QSFP+_SR4_Datasheet REV1.1.pdf"
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
                <div className="space-y-3">
                  <p className="text-sm text-slate-700">
                    40GBASE-SR4 optical transceiver for multimode fiber
                    short-reach applications.
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>40G (4x10G)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>850nm VCSEL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>OM3: 100m, OM4: 150m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>MPO/MTP connector</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* 25G SFP28 */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      25G SFP28
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      25G SFP28 SR
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex gap-2">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/transceivers/W2W_C123_25G_SFP28_SR_Datasheet REV1.1.pdf"
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
                <div className="space-y-3">
                  <p className="text-sm text-slate-700">
                    25GBASE-SR optical transceiver for multimode fiber
                    short-reach networks.
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>25.78125 Gbps NRZ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>850nm VCSEL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>OM3: 70m, OM4: 100m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>Duplex LC connector</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* 10G SFP+ */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      10G SFP+
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      10G SFP+ SR
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex gap-2">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/transceivers/W2W_C123_10G_SFP+_SR_Datasheet REV1.1.pdf"
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
                <div className="space-y-3">
                  <p className="text-sm text-slate-700">
                    10GBASE-SR optical transceiver for multimode fiber
                    10 Gigabit Ethernet.
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>10.3125 Gbps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>850nm VCSEL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>OM3: 300m, OM4: 400m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>IEEE 802.3ae, SFF-8431</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* 1.25G SFP */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#0072CE] mb-1">
                      1.25G SFP
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      1.25G SFP SX
                    </h3>
                  </div>
                }
                footer={
                  <div className="flex gap-2">
                    <B2BButton size="sm" asChild>
                      <a
                        href="/datasheets/transceivers/W2W_C123_1.25G_SFP_SX_Datasheet REV1.1.pdf"
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
                <div className="space-y-3">
                  <p className="text-sm text-slate-700">
                    1000BASE-SX optical transceiver for Gigabit Ethernet over
                    multimode fiber.
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>1.25 Gbps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>850nm VCSEL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>OM3: 550m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                      <span>IEEE 802.3z, SFF-8472</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>

              {/* Custom Solutions */}
              <B2BCard
                header={
                  <div>
                    <div className="text-sm font-semibold text-[#333333] mb-1">
                      CUSTOM OPTICS
                    </div>
                    <h3 className="text-lg font-bold text-[#333333]">
                      Custom Transceivers
                    </h3>
                  </div>
                }
                footer={
                  <B2BButton size="sm" asChild>
                    <Link href="/custom-engineering">Learn More</Link>
                  </B2BButton>
                }
              >
                <div className="space-y-3">
                  <p className="text-sm text-slate-700">
                    Need custom wavelengths, extended temperatures, or
                    specialized configurations?
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>Custom wavelengths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>Industrial temperature (-40°C to 85°C)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>BiDi and WDM configurations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#333333] mt-0.5 flex-shrink-0" />
                      <span>Custom coding and labeling</span>
                    </li>
                  </ul>
                </div>
              </B2BCard>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8">
              Transceiver Selection Guide
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#333333] mb-4">
                  Short-Reach (SR) Transceivers
                </h3>
                <p className="text-sm text-slate-700 mb-4">
                  Optimized for multimode fiber within data centers and
                  campus networks.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Wavelength:</strong> 850nm VCSEL technology
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Fiber:</strong> OM3, OM4, OM5 multimode
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Reach:</strong> 70m to 550m depending on speed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Best For:</strong> Intra-rack, ToR, spine-leaf
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#333333] mb-4">
                  Long-Reach (LR) Transceivers
                </h3>
                <p className="text-sm text-slate-700 mb-4">
                  Single-mode fiber for extended distance applications and
                  inter-site connectivity.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Wavelength:</strong> 1310nm or CWDM4
                      (1295-1330nm)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Fiber:</strong> SMF (G.652, G.657)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Reach:</strong> 10km to 40km+
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Best For:</strong> DCI, MAN, campus backbone
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Need Help Selecting Transceivers?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Our optical engineers can help you choose the right transceivers
              for your network architecture, fiber type, and distance
              requirements. We offer complete compatibility testing and custom
              coding services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <B2BButton size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </B2BButton>
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/custom-engineering">
                  Custom Engineering Services
                </Link>
              </B2BButton>
              <B2BButton variant="outline" size="lg" asChild>
                <Link href="/fiber">Explore Fiber Solutions</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

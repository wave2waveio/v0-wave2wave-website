import type { Metadata } from "next"
import Link from "next/link"
import { B2BButton } from "@/components/ui/b2b/button"
import { B2BCard } from "@/components/ui/b2b/card"
import { SpecTable } from "@/components/ui/b2b/spec-table"
import { ComparisonTable } from "@/components/ui/b2b/comparison-table"
import { ChevronRight, Download, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Ethernet Copper Products | Wave2Wave",
  description:
    "High-performance Cat6A and Cat6 copper patch cords for 10GBASE-T Ethernet networks. Factory-tested, serialized, and optimized for data centers.",
  keywords:
    "Cat6A patch cords, Cat6 ethernet cables, 10GBASE-T, copper cabling, SSTP shielding, data center ethernet, UTP cables, structured cabling",
}

export default function EthernetProductsPage() {
  // Schema.org Structured Data - Product Catalog
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ethernet Copper Products",
    "description": "High-performance Cat6A and Cat6 copper patch cords for 10GBASE-T Ethernet networks",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "Cat6A SSTP Patch Cord",
        "description": "26AWG stranded copper with SSTP dual-shielding for 10GBASE-T up to 100 meters",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Cable",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Bandwidth", "value": "500 MHz" },
          { "@type": "PropertyValue", "name": "Max Speed", "value": "10 Gbps" },
          { "@type": "PropertyValue", "name": "Max Distance", "value": "100 meters" },
          { "@type": "PropertyValue", "name": "Standards", "value": "TIA/EIA-568-C.2, ISO/IEC 11801" }
        ]
      },
      {
        "@type": "Product",
        "name": "Super Slim Cat6A Patch Cord",
        "description": "28AWG ultra-thin Cat6A for high-density patching in space-constrained environments",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Cable",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Bandwidth", "value": "500 MHz" },
          { "@type": "PropertyValue", "name": "Diameter", "value": "3.8mm" },
          { "@type": "PropertyValue", "name": "Standards", "value": "TIA/EIA-568-C.2" }
        ]
      },
      {
        "@type": "Product",
        "name": "Cat6 UTP Patch Cord",
        "description": "24AWG unshielded twisted pair for Gigabit Ethernet up to 100 meters",
        "brand": { "@type": "Brand", "name": "Wave2Wave" },
        "category": "Network Cable",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Bandwidth", "value": "250 MHz" },
          { "@type": "PropertyValue", "name": "Max Speed", "value": "1 Gbps" },
          { "@type": "PropertyValue", "name": "Standards", "value": "TIA/EIA-568-B.2-1, ISO/IEC 11801" }
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
              href="/ethernet"
              className="hover:text-[#0072CE] transition-colors"
            >
              Ethernet Solutions
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ethernet Copper Products
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              High-performance Cat6A and Cat6 patch cords engineered for
              enterprise networks and data centers. Every cable is
              factory-tested, serialized, and built to exceed industry
              standards.
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

      {/* Cat6A Patch Cord - Detailed Product */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                Cat6A Copper Patch Cord
              </h2>
              <p className="text-lg text-slate-700">
                Professional-grade Cat6A patch cords designed for 10GBASE-T
                Ethernet networks. Featuring 26AWG stranded copper with
                SSTP dual-shielding for superior performance and EMI
                protection in demanding data center environments.
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
                      26AWG stranded copper for flexibility and durability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      SSTP (dual-shielded) construction for maximum EMI
                      protection
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Full 10GBASE-T support up to 100 meters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Shielded RJ45 connectors with 50µm gold-plated contacts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      100% continuity and wire map tested
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Serialized labeling at both ends with length and part
                      number
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Available in 10 jacket colors for easy identification
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
                      10GBASE-T Ethernet networks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Data center server connections
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      High-speed storage networks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      PoE++ (IEEE 802.3bt) applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Enterprise backbone cabling
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      High-density rack installations
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
                  { label: "Cable Type", value: "Cat6A SSTP" },
                  { label: "Conductor", value: "26AWG Stranded Bare Copper" },
                  { label: "Shielding", value: "SSTP (Dual-Shielded)" },
                  { label: "Jacket Material", value: "PVC (CMR)" },
                  { label: "Outer Diameter", value: "6.2 mm ± 0.3 mm" },
                  {
                    label: "Connector Type",
                    value: "Shielded RJ45 Modular Plug",
                  },
                  {
                    label: "Contact Plating",
                    value: "50µm Gold-Plated Phosphor Bronze",
                  },
                  {
                    label: "Performance",
                    value: "10GBASE-T (10 Gbps) up to 100m",
                  },
                  { label: "Frequency Range", value: "Up to 500 MHz" },
                  { label: "PoE Support", value: "PoE++ (IEEE 802.3bt)" },
                  {
                    label: "Operating Temperature",
                    value: "-20°C to 60°C",
                  },
                  { label: "Storage Temperature", value: "-20°C to 70°C" },
                  {
                    label: "Standards",
                    value: "ANSI/TIA-568-C.2, ANSI/TIA-968-A, UL, RoHS",
                  },
                ]}
              />
            </div>

            {/* Part Number Format */}
            <div className="mb-8 p-6 bg-slate-50 rounded-lg border-l-4 border-[#0072CE]">
              <h4 className="font-semibold text-[#333333] mb-3">
                Part Number Format
              </h4>
              <p className="font-mono text-lg text-slate-700 mb-4">
                71-1060A-BCDE
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-[#333333] mb-2">
                    A: Cable Type
                  </p>
                  <p>6 = Cat6A (10GBASE-T)</p>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] mb-2">
                    BC: Jacket Color
                  </p>
                  <div className="space-y-1">
                    <p>BL (Blue) • BK (Black)</p>
                    <p>GN (Green) • GY (Gray)</p>
                    <p>OR (Orange) • PP (Purple)</p>
                    <p>RD (Red) • WH (White)</p>
                    <p>YW (Yellow) • PK (Pink)</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] mb-2">
                    DE: Length
                  </p>
                  <p>Any length available</p>
                  <p className="text-xs text-slate-500 mt-1">
                    (e.g., 1, 3, 5, 10, 50, 75)
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Example: 71-1060A-BL05 = Cat6A, Blue, 5 feet
              </p>
            </div>

            <div className="flex gap-4">
              <B2BButton size="lg" asChild>
                <a
                  href="/datasheets/ethernet/W2W_C123_Copper_CAT6A_Datasheet REV1.1.pdf"
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

      {/* Super Slim Cat6A - Detailed Product */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-block bg-[#0072CE] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                SPACE-SAVING DESIGN
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                Super Slim Cat6A Patch Cord
              </h2>
              <p className="text-lg text-slate-700">
                Ultra-slim 28AWG Cat6A patch cord delivering full 10GBASE-T
                performance in a compact design. Reduces cable volume by over
                50% compared to standard Cat6A, ideal for high-density data
                centers and improved airflow management.
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
                      <strong>50%+ thinner</strong> than standard Cat6A cables
                      (3.8mm diameter)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      28AWG stranded UTP copper for maximum flexibility
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Tight bend radius enhances cable routing and airflow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Full Cat6A 500 MHz performance (ANSI/TIA-568-C.2)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Recommended for runs up to 10 meters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      100% factory-tested for continuity and wire map
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0072CE] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      Snagless connectors with integrated strain relief
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
                      High-density data center I/O consolidation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Top-of-Rack (ToR) switch connections
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Server virtualization and cloud environments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      High-density patch panels and network racks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Parallel processing and high-speed computing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0072CE] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      Environments requiring improved airflow
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
                  { label: "Cable Type", value: "Cat6A UTP" },
                  { label: "Conductor", value: "28AWG Stranded Bare Copper" },
                  { label: "Shielding", value: "UTP (Unshielded Twisted Pair)" },
                  { label: "Jacket Material", value: "PVC (CM)" },
                  {
                    label: "Outer Diameter",
                    value: "3.8 mm ± 0.2 mm (50%+ slimmer)",
                  },
                  { label: "Connector Type", value: "RJ45 Modular Plug" },
                  {
                    label: "Contact Plating",
                    value: "Gold-Plated Phosphor Bronze",
                  },
                  {
                    label: "Performance",
                    value: "10GBASE-T (10 Gbps) up to 10m recommended",
                  },
                  { label: "Frequency Range", value: "Up to 500 MHz" },
                  {
                    label: "Operating Temperature",
                    value: "-20°C to 60°C",
                  },
                  { label: "Storage Temperature", value: "-20°C to 70°C" },
                  {
                    label: "Standards",
                    value: "ANSI/TIA-568-C.2, ANSI/TIA-968-A, UL, RoHS",
                  },
                ]}
              />
            </div>

            {/* Part Number Format */}
            <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-[#0072CE]">
              <h4 className="font-semibold text-[#333333] mb-3">
                Part Number Format
              </h4>
              <p className="font-mono text-lg text-slate-700 mb-4">
                71-1068A-BCDE
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-[#333333] mb-2">
                    A: Cable Type
                  </p>
                  <p>8 = Super Slim Cat6A</p>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] mb-2">
                    BC: Jacket Color
                  </p>
                  <div className="space-y-1">
                    <p>BL (Blue) • BK (Black)</p>
                    <p>GN (Green) • GY (Gray)</p>
                    <p>OR (Orange) • PP (Purple)</p>
                    <p>RD (Red) • WH (White)</p>
                    <p>YW (Yellow)</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] mb-2">
                    DE: Length
                  </p>
                  <p>Recommended up to 10 meters</p>
                  <p className="text-xs text-slate-500 mt-1">
                    (e.g., 1, 2, 3, 5, 7, 10)
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Example: 71-1068A-BL03 = Super Slim Cat6A, Blue, 3 meters
              </p>
            </div>

            <div className="flex gap-4">
              <B2BButton size="lg" asChild>
                <a
                  href="/datasheets/ethernet/W2W-C123_Super Slim CAT6A Copper Patch Cord_Datasheet_REV1.1.pdf"
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

      {/* Product Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-4 text-center">
              Ethernet Product Comparison
            </h2>
            <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto">
              Compare our Cat6A, Super Slim Cat6A, and Cat6 patch cords to find
              the perfect solution for your network infrastructure.
            </p>

            <ComparisonTable
              columns={[
                {
                  header: "Cat6A SSTP",
                  subheader: "26AWG Shielded",
                  highlighted: true,
                },
                {
                  header: "Super Slim Cat6A",
                  subheader: "28AWG Ultra-Thin",
                },
                {
                  header: "Cat6 UTP",
                  subheader: "24AWG Standard",
                },
              ]}
              rows={[
                {
                  label: "Bandwidth",
                  values: ["500 MHz", "500 MHz", "250 MHz"],
                },
                {
                  label: "Max Speed",
                  values: ["10 Gbps", "10 Gbps", "1 Gbps"],
                },
                {
                  label: "Max Distance",
                  values: ["100 meters", "10 meters (recommended)", "100 meters"],
                },
                {
                  label: "Cable Diameter",
                  values: ["6.2 mm", "3.8 mm (50%+ thinner)", "6.0 mm"],
                },
                {
                  label: "Conductor Size",
                  values: ["26 AWG", "28 AWG", "24 AWG"],
                },
                {
                  label: "Shielding",
                  values: ["SSTP (Dual-Shielded)", "UTP (Unshielded)", "UTP (Unshielded)"],
                },
                {
                  label: "PoE++ Support",
                  values: [true, true, false],
                },
                {
                  label: "10GBASE-T",
                  values: [true, true, false],
                },
                {
                  label: "EMI Protection",
                  values: ["Excellent", "Good", "Standard"],
                },
                {
                  label: "Flexibility",
                  values: ["Good", "Excellent", "Good"],
                },
                {
                  label: "Best Use Case",
                  values: [
                    "Data center, enterprise 10G",
                    "High-density racks, improved airflow",
                    "Gigabit Ethernet, office networks",
                  ],
                },
                {
                  label: "Relative Cost",
                  values: ["Premium", "Premium+", "Standard"],
                },
              ]}
            />

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#0072CE] to-[#005BA4] text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Choose Cat6A SSTP if:</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>✓ You need 10GBASE-T performance</li>
                  <li>✓ Runs are up to 100 meters</li>
                  <li>✓ EMI protection is critical</li>
                  <li>✓ PoE++ power delivery required</li>
                </ul>
              </div>

              <div className="bg-slate-100 p-6 rounded-lg border-2 border-[#0072CE]">
                <h4 className="font-semibold text-[#333333] mb-3">
                  Choose Super Slim Cat6A if:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ High-density rack space is limited</li>
                  <li>✓ Improved airflow is needed</li>
                  <li>✓ Short runs (up to 10m)</li>
                  <li>✓ Easier cable routing required</li>
                </ul>
              </div>

              <div className="bg-slate-100 p-6 rounded-lg">
                <h4 className="font-semibold text-[#333333] mb-3">
                  Choose Cat6 UTP if:
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Gigabit Ethernet is sufficient</li>
                  <li>✓ Budget-conscious deployment</li>
                  <li>✓ Office/campus environment</li>
                  <li>✓ Standard PoE applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cat6 Patch Cord */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <B2BCard
              header={
                <div>
                  <h2 className="text-2xl font-bold text-[#333333] mb-2">
                    Cat6 Copper Patch Cord
                  </h2>
                  <p className="text-slate-600">
                    Reliable Gigabit Ethernet connectivity for enterprise
                    networks
                  </p>
                </div>
              }
              footer={
                <div className="flex gap-4">
                  <B2BButton asChild>
                    <a
                      href="/datasheets/ethernet/W2W_C123_Copper_CAT6_Datasheet REV1.1.pdf"
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
                  High-performance Cat6 patch cord built with 24AWG stranded
                  UTP copper and precision-engineered RJ45 modular plugs.
                  Ensures reliable transmission, minimal crosstalk, and
                  consistent signal integrity for Gigabit Ethernet networks.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>24AWG stranded UTP copper cable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          RJ45 connectors with 50µm gold-plated contacts
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>Snagless connectors for dense environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>
                          100% continuity and wire map tested
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>Serialized labeling with length and part number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0072CE] mt-0.5 flex-shrink-0" />
                        <span>Supports T568A and T568B wiring standards</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#333333] mb-3">
                      Applications
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Gigabit Ethernet 1000BASE-T</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Fast Ethernet 100BASE-T</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Voice over IP (VoIP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>ATM 155 Mb/s, 622 Mb/s, 1.2 Gb/s</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Token Ring 4/16</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-semibold text-[#333333] mb-2 text-sm">
                    Part Number Format: 71-10A0-BCDE
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-xs text-slate-600">
                    <div>
                      <span className="font-semibold">A:</span> 6 (Cat6) / 5
                      (Cat5e)
                    </div>
                    <div>
                      <span className="font-semibold">BC:</span> Jacket Color
                      (BL, BK, GN, GY, OR, PP, RD, WH, YW)
                    </div>
                    <div>
                      <span className="font-semibold">DE:</span> Any Length
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </B2BCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Need Custom Ethernet Solutions?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Our engineering team can design custom copper patch cords,
              specialized lengths, custom color coding, and bulk configurations
              to meet your exact requirements.
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
                <Link href="/ethernet">Back to Ethernet Solutions</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

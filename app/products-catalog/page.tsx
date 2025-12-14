import type { Metadata } from "next"
import Link from "next/link"
import { B2BButton } from "@/components/ui/b2b/button"
import { B2BCard } from "@/components/ui/b2b/card"
import {
  Package,
  Cable,
  Zap,
  Cpu,
  Grid3x3,
  Layers,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Product Catalog | Wave2Wave",
  description:
    "Browse Wave2Wave's complete product catalog: fiber optic cables, ethernet copper, high-speed interconnects, optical transceivers, and patch panel systems for data center infrastructure.",
  keywords:
    "data center products, fiber optic cables, ethernet cables, transceivers, patch panels, AOC, DAC, networking products",
}

export default function ProductsCatalogPage() {
  // Schema.org Structured Data - Organization with Product Catalog
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wave2Wave",
    url: "https://wave2wave.io",
    logo: "https://wave2wave.io/logo.png",
    description:
      "Professional data center cabling solutions and network infrastructure products",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wave2Wave Product Catalog",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Fiber Optic Products",
          url: "https://wave2wave.io/fiber/products",
          description:
            "MPO patch cords, LC assemblies, fiber trunk cables, and breakout solutions",
        },
        {
          "@type": "OfferCatalog",
          name: "Ethernet Copper Products",
          url: "https://wave2wave.io/ethernet/products",
          description:
            "Cat6A, Super Slim Cat6A, and Cat6 patch cords for 10GBASE-T networks",
        },
        {
          "@type": "OfferCatalog",
          name: "High Speed Interconnect",
          url: "https://wave2wave.io/high-speed-interconnect/products",
          description:
            "800G/400G/100G Active Optical Cables (AOC) and Direct Attach Cables (DAC)",
        },
        {
          "@type": "OfferCatalog",
          name: "Optical Transceivers",
          url: "https://wave2wave.io/transceivers",
          description:
            "SFP, SFP+, SFP28, QSFP28, QSFP-DD optical transceiver modules",
        },
        {
          "@type": "OfferCatalog",
          name: "Systems & Accessories",
          url: "https://wave2wave.io/systems-and-accessories/products",
          description:
            "Modular fiber patch panels, optical loopbacks, and testing accessories",
        },
      ],
    },
  }

  const categories = [
    {
      icon: Cable,
      title: "Fiber Optic Products",
      description:
        "MPO/MTP patch cords, LC/SC assemblies, fiber trunk cables, breakout solutions, and armored fiber for high-density data center deployments.",
      link: "/fiber/products",
      productCount: "50+",
      highlights: [
        "MPO 12F/24F Patch Cords",
        "LC Duplex Assemblies",
        "Breakout Cables",
        "Armored Fiber",
      ],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Ethernet Copper",
      description:
        "Cat6A SSTP, Super Slim Cat6A, and Cat6 UTP patch cords for 10GBASE-T, PoE++, and Gigabit Ethernet networks.",
      link: "/ethernet/products",
      productCount: "15+",
      highlights: [
        "Cat6A 10GBASE-T",
        "Super Slim Cat6A",
        "Cat6 Gigabit",
        "PoE++ Support",
      ],
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      icon: Layers,
      title: "High Speed Interconnect",
      description:
        "800G, 400G, and 100G Active Optical Cables (AOC) and Direct Attach Cables (DAC) for next-generation data center fabrics.",
      link: "/high-speed-interconnect/products",
      productCount: "25+",
      highlights: [
        "800G OSFP AOC",
        "400G QSFP-DD",
        "100G QSFP28",
        "DAC Copper",
      ],
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      icon: Cpu,
      title: "Optical Transceivers",
      description:
        "Complete range of optical transceiver modules from 1.25G SFP to 400G QSFP-DD for multimode and single-mode fiber networks.",
      link: "/transceivers",
      productCount: "40+",
      highlights: [
        "400G QSFP-DD LR4",
        "100G QSFP28",
        "25G SFP28",
        "10G SFP+",
      ],
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: Grid3x3,
      title: "Systems & Accessories",
      description:
        "Modular fiber patch panel systems (EVO/EXO), optical loopbacks, transceiver coding modules, and testing accessories.",
      link: "/systems-and-accessories/products",
      productCount: "20+",
      highlights: [
        "EVO Patch Panels",
        "EXO Cassettes",
        "Optical Loopbacks",
        "Testing Tools",
      ],
      gradient: "from-slate-600 to-gray-700",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0072CE] to-[#005BA4] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Package className="h-12 w-12" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Product Catalog
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Explore our complete portfolio of professional-grade data center
              cabling solutions. From fiber optic patch cords to 800G
              interconnects, every product is factory-tested and ready for
              enterprise deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </B2BButton>
              <B2BButton variant="outline" size="lg" asChild>
                <Link href="/custom-engineering">Custom Engineering</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Select a product category to explore detailed specifications,
                datasheets, and technical information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.link}
                  className="group block"
                >
                  <div className="h-full bg-white rounded-lg border-2 border-slate-200 hover:border-[#0072CE] transition-all duration-300 hover:shadow-xl overflow-hidden">
                    {/* Gradient Header */}
                    <div
                      className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <category.icon className="h-10 w-10" />
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                          {category.productCount} products
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {category.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-700 mb-6">
                        {category.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#333333] mb-3">
                          Product Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {category.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-slate-600 flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-[#0072CE] rounded-full" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-[#0072CE] font-semibold group-hover:gap-4 transition-all">
                        View All Products
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#0072CE] mb-2">
                  150+
                </div>
                <div className="text-slate-700">Total Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0072CE] mb-2">
                  100%
                </div>
                <div className="text-slate-700">Factory Tested</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0072CE] mb-2">
                  5 Days
                </div>
                <div className="text-slate-700">Typical Lead Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0072CE] mb-2">
                  24/7
                </div>
                <div className="text-slate-700">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wave2Wave */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center">
              Why Choose Wave2Wave Products?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <B2BCard
                header={
                  <h3 className="text-xl font-bold text-[#333333]">
                    Factory Tested & Certified
                  </h3>
                }
              >
                <p className="text-slate-700">
                  Every cable assembly is 100% tested for insertion loss, return
                  loss, continuity, and polarity before shipment. Test reports
                  included with every order.
                </p>
              </B2BCard>

              <B2BCard
                header={
                  <h3 className="text-xl font-bold text-[#333333]">
                    Custom Engineering
                  </h3>
                }
              >
                <p className="text-slate-700">
                  Need custom lengths, colors, labeling, or configurations? Our
                  engineering team designs and manufactures to your exact
                  specifications.
                </p>
              </B2BCard>

              <B2BCard
                header={
                  <h3 className="text-xl font-bold text-[#333333]">
                    Fast Turnaround
                  </h3>
                }
              >
                <p className="text-slate-700">
                  Standard lead time of 3-5 business days for stock
                  configurations. Expedited options available for urgent
                  deployments.
                </p>
              </B2BCard>

              <B2BCard
                header={
                  <h3 className="text-xl font-bold text-[#333333]">
                    Standards Compliant
                  </h3>
                }
              >
                <p className="text-slate-700">
                  All products meet or exceed TIA-568, IEEE, IEC, and RoHS
                  standards. UL/ETL listed where applicable.
                </p>
              </B2BCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0072CE] to-[#005BA4]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Order or Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our product specialists are here to help you select the right
              solutions for your data center infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <B2BButton variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </B2BButton>
              <B2BButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#0072CE]"
                asChild
              >
                <Link href="/custom-engineering">Custom Engineering</Link>
              </B2BButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

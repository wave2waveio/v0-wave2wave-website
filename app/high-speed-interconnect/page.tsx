import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"

export const metadata: Metadata = {
  title: "High Speed Interconnect | Wave2Wave - AOC, AEC, DAC & Transceivers",
  description:
    "Wave2Wave high-speed optical solutions: Active Optical Cables (AOC), Active Electrical Cables (AEC), Direct Attach Copper (DAC), and optical transceivers for 10G-800G networks.",
}

export default function HighSpeedInterconnectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="High Speed Interconnect - Factory-Terminated for Speed and Reliability"
        subtitle="Active Optical, Active Electrical and Direct Attach Cables (AOC/AEC/DAC) plus Optical Transceivers for 10G-800G applications."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* AOC/AEC/DAC Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-4">Active Optical, Active Electrical and Direct Attach Cables</h2>
            <p className="text-lg text-slate-700 mb-12 text-center max-w-4xl mx-auto">
              High-speed factory-terminated assemblies for short and mid-range interconnects.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold mb-3">Typical Deployments:</h3>
              <p className="text-slate-700">
                GPU and AI fabric clusters, hyperscale and colocation data centers, HPC interconnects, and
                Ethernet/InfiniBand spine-leaf architectures where latency and density are critical.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureBlock
                title="Active Optical Cables (AOC)"
                description={
                  <div>
                    <p className="mb-3 font-semibold">Form Factors:</p>
                    <ul className="space-y-1 text-sm mb-4">
                      <li>• OSFP (400G, 800G)</li>
                      <li>• QSFP-DD (400G, 800G)</li>
                      <li>• QSFP112, QSFP56, QSFP28, QSFP+</li>
                      <li>• SFP112, SFP56, SFP28, SFP+</li>
                    </ul>
                    <p className="mb-2 font-semibold">Specifications:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Custom lengths: 0.5m to 100m</li>
                      <li>• Breakout configurations available</li>
                      <li>• 400G to 4 x 100G</li>
                      <li>• 800G to 4 x 200G</li>
                    </ul>
                  </div>
                }
              />

              <FeatureBlock
                title="Active Electrical Cables (AEC)"
                description={
                  <div>
                    <p className="mb-3 font-semibold">Form Factors:</p>
                    <ul className="space-y-1 text-sm mb-4">
                      <li>• OSFP (400G, 800G)</li>
                      <li>• QSFP / QSFP-DD (400G, 800G)</li>
                    </ul>
                    <p className="mb-2 font-semibold">Specifications:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Custom lengths: 0.5m to 7m</li>
                      <li>• Breakout configurations available</li>
                      <li>• 400G to 4 x 100G</li>
                      <li>• 800G to 4 x 200G</li>
                    </ul>
                  </div>
                }
              />

              <FeatureBlock
                title="Direct Attach Copper (DAC)"
                description={
                  <div>
                    <p className="mb-3 font-semibold">Form Factors:</p>
                    <ul className="space-y-1 text-sm mb-4">
                      <li>• OSFP (400G, 800G)</li>
                      <li>• QSFP-DD (400G, 800G)</li>
                      <li>• QSFP112, QSFP56, QSFP28, QSFP+</li>
                      <li>• SFP112, SFP56, SFP28, SFP+</li>
                    </ul>
                    <p className="mb-2 font-semibold">Specifications:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Custom lengths: 0.5m to 5m</li>
                      <li>• Breakout configurations available</li>
                      <li>• 400G to 4 x 100G</li>
                      <li>• 800G to 4 x 200G</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supported Speeds & Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Supported Speeds & Features</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3 text-lg">Supported Speeds:</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">10G</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">25G</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">40G</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">50G</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">100G</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">200G</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">400G</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">800G+</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3 text-lg">Platform Coding:</h4>
                <p className="text-slate-700 mb-3">
                  Fully vendor-validated EEPROM coding for switch, NIC, accelerator, and router platforms.
                </p>
                <p className="text-sm text-slate-600">
                  Ensures seamless compatibility and plug-and-play operation across all major network infrastructure.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
              <h4 className="font-semibold mb-4 text-lg">Custom Options:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Breakouts/Fanouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Lengths (3 inch / 8 cm increments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Cable bundles / harness builds</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Custom Labeling, serialization, barcodes, QR codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>OEM / White-label packaging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optical Transceivers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-4">Optical Transceivers</h2>
            <p className="text-lg text-slate-700 mb-12 text-center max-w-4xl mx-auto">
              Hot-pluggable optical modules for network switches, routers, and servers.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold mb-3">Typical Deployments:</h3>
              <p className="text-slate-700">
                Enterprise and hyperscale data centers, AI/GPU clusters, and telecom networks - enabling 10G-800G
                optical connectivity for spine-leaf, inter-rack, and long-reach applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Form Factors:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• OSFP (400G, 800G)</li>
                  <li>• QSFP-DD (400G, 800G)</li>
                  <li>• QSFP112, QSFP56, QSFP28, QSFP+</li>
                  <li>• SFP112, SFP56, SFP28, SFP+</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Optical Types / Reaches:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">SR</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">LR</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">DR</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">DR4</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">FR4</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">ER</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">ZR</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">CWDM</span>
                  <span className="px-3 py-1 bg-white rounded-md text-sm font-medium">DWDM</span>
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  10G-800G variants depending on form factor and reach class.
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-slate-200 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Platform Compatibility:</h4>
                <p className="text-slate-700">
                  Fully coded and validated for Cisco, Arista, Juniper, Dell, HPE, NVIDIA, and other major switch/NIC
                  OEMs.
                </p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Diagnostics / Standards:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• DOM / DDM (Digital Optical Monitoring) compliant</li>
                  <li>• SFF-MSA standard management interface</li>
                  <li>• Coded and tested for interoperability</li>
                  <li>• Custom EEPROM programming available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog CTA */}
      <section className="py-12 bg-gradient-to-br from-[#0072CE] to-[#005BA4]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Explore Our High Speed Interconnect Product Catalog</h3>
            <p className="text-lg text-blue-100 mb-6">
              Browse detailed specifications, datasheets, and technical information for 800G, 400G, and 100G Active Optical Cables, Direct Attach Cables, and Optical Transceivers.
            </p>
            <Link
              href="/high-speed-interconnect/products"
              className="inline-block bg-white hover:bg-slate-100 text-[#0072CE] px-8 py-3 rounded font-semibold transition-colors"
            >
              View Full Product Catalog →
            </Link>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <CTASection
        title="Need High Speed Optical Solutions?"
        subtitle="Contact us to discuss your AOC, AEC, DAC, or transceiver requirements and receive a custom quote."
        primaryButtonText="Request Optics Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

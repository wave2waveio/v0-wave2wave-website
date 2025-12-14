import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Ethernet Solutions | Wave2Wave – Custom Copper Cabling",
  description:
    "Wave2Wave Ethernet solutions: Cat6A, Cat8, custom patch cords, DAC twinax cables, structured cabling, and PoE++ power delivery for data centers and enterprise networks.",
}

export default function EthernetPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Ethernet Solutions – Copper Cabling Built for Performance"
        subtitle="Custom Cat6A, Cat8, and DAC solutions for 1G to 100G networks. Factory-tested, pre-labeled, deployment-ready."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Ethernet Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Complete Ethernet Infrastructure</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureBlock
                title="Cat6A Patch Cords"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• 10GBASE-T up to 100 meters</li>
                    <li>• 550MHz bandwidth</li>
                    <li>• Lengths 0.5m to 100m</li>
                    <li>• Snagless molded boots</li>
                    <li>• TIA-568-C.2 compliant</li>
                    <li>• Color-coded by length or function</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Cat8 Patch Cords"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• 25G/40GBASE-T applications</li>
                    <li>• 2000MHz bandwidth</li>
                    <li>• Shielded (S/FTP) construction</li>
                    <li>• Max length 30 meters</li>
                    <li>• Low latency for AI/HPC clusters</li>
                    <li>• Future-proof copper solution</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="DAC (Direct Attach Copper)"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• 10G/25G/40G/100G twinax</li>
                    <li>• SFP+, SFP28, QSFP28, QSFP56</li>
                    <li>• Passive and active options</li>
                    <li>• Lengths 0.5m to 7m</li>
                    <li>• Lower power vs. transceivers</li>
                    <li>• Perfect for ToR connections</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Structured Cabling Systems"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• Permanent link infrastructure</li>
                    <li>• Cat6A/Cat8 solid conductor cable</li>
                    <li>• Keystone jacks and wall plates</li>
                    <li>• Cable management systems</li>
                    <li>• TIA-568 channel certification</li>
                    <li>• 25-year warranty options</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="PoE++ Power Cables"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• IEEE 802.3bt 100W delivery</li>
                    <li>• Cat6A shielded for heat dissipation</li>
                    <li>• Power over Ethernet to devices</li>
                    <li>• Wi-Fi 6/6E AP support</li>
                    <li>• IP cameras, LED lighting, IoT</li>
                    <li>• Certified for PoE applications</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Ethernet Patch Panels"
                description={
                  <div>
                    <p className="mb-2">Modular RJ45 cassette systems for flexible copper patching and easy moves/adds/changes.</p>
                    <Link href="/ethernet/patch-panels" className="text-primary hover:text-primary-blue-dark font-medium">
                      Learn more →
                    </Link>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cat6A vs Cat8 Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Cat6A vs. Cat8: Which is Right for You?</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-left">Cat6A</th>
                    <th className="px-6 py-4 text-left">Cat8</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Max Bandwidth</td>
                    <td className="px-6 py-4">550 MHz</td>
                    <td className="px-6 py-4">2000 MHz</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Max Speed</td>
                    <td className="px-6 py-4">10 Gbps</td>
                    <td className="px-6 py-4">25/40 Gbps</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Max Distance</td>
                    <td className="px-6 py-4">100 meters</td>
                    <td className="px-6 py-4">30 meters</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Shielding</td>
                    <td className="px-6 py-4">UTP or F/UTP</td>
                    <td className="px-6 py-4">S/FTP (required)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Best Use Case</td>
                    <td className="px-6 py-4">General enterprise, campus</td>
                    <td className="px-6 py-4">Data center ToR, AI clusters</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Cost</td>
                    <td className="px-6 py-4">Standard</td>
                    <td className="px-6 py-4">Premium</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold mb-2">Choose Cat6A if:</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• You need runs longer than 30m</li>
                  <li>• 10G performance is sufficient</li>
                  <li>• Budget is a consideration</li>
                  <li>• Campus/enterprise deployment</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-success">
                <h4 className="font-semibold mb-2">Choose Cat8 if:</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• You need 25G/40G copper</li>
                  <li>• Runs are under 30m (ToR typical)</li>
                  <li>• Low latency is critical (AI/HPC)</li>
                  <li>• Future-proofing copper infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAC Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Why DAC (Direct Attach Copper)?</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              For short runs within a rack or between adjacent racks, DAC twinax cables offer significant advantages over
              fiber or traditional Ethernet.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p className="font-semibold mb-2">Lower Power</p>
                <p className="text-sm text-slate-600">vs. fiber transceivers</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <p className="font-semibold mb-2">Cost Savings</p>
                <p className="text-sm text-slate-600">vs. fiber optics</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">&lt;1µs</div>
                <p className="font-semibold mb-2">Latency</p>
                <p className="text-sm text-slate-600">Perfect for HFT, AI inference</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Common DAC Applications:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-700">
                <li>• Top-of-Rack (ToR) switch to server</li>
                <li>• Storage array to SAN switch</li>
                <li>• GPU to InfiniBand switch</li>
                <li>• Stacking cables between switches</li>
                <li>• High-frequency trading systems</li>
                <li>• AI/ML training clusters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Testing */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Quality & Testing Standards</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Cat6A/Cat8 Testing:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Fluke DTX/DSX channel certification</li>
                  <li>• TDR (Time Domain Reflectometry)</li>
                  <li>• Alien crosstalk (AXT) testing</li>
                  <li>• Return loss verification</li>
                  <li>• PoE resistance measurement</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">DAC Testing:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Bit error rate (BER) &lt;1E-12</li>
                  <li>• Eye diagram analysis</li>
                  <li>• Impedance verification (100Ω)</li>
                  <li>• Vendor compatibility testing</li>
                  <li>• Temperature cycling</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-center text-slate-700">
              All Wave2Wave Ethernet products ship with test reports and lifetime warranty against manufacturing defects.
            </p>
          </div>
        </div>
      </section>

      {/* Products Catalog CTA */}
      <section className="py-12 bg-gradient-to-br from-[#0072CE] to-[#005BA4]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Explore Our Complete Ethernet Product Catalog</h3>
            <p className="text-lg text-blue-100 mb-6">
              Browse detailed specifications, datasheets, and technical information for all our copper products including Cat6A, Cat6, Super Slim Cat6A, and Direct Attach Cables.
            </p>
            <Link
              href="/ethernet/products"
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
            <p>Wave2Wave manufactures custom Ethernet cable assemblies for data center and enterprise networks, specializing in Cat6A and Cat8 high-performance copper cabling.</p>

            <p>Cat6A (Augmented Category 6) specifications: Bandwidth 500 MHz, Speed 10GBASE-T (10 Gigabit Ethernet), Distance up to 100 meters, Standard TIA-568.2-D, ISO/IEC 11801. Applications include 10G server-to-switch, storage networks, and VoIP.</p>

            <p>Cat8 (Category 8) specifications: Bandwidth 2000 MHz (2 GHz), Speed 25GBASE-T, 40GBASE-T, Distance up to 30 meters (data center optimized), Standard TIA-568.2-D Amendment 1, ISO/IEC 11801-1. Applications include short-reach 25G/40G and top-of-rack switching.</p>

            <p>PoE (Power over Ethernet) capabilities: PoE (IEEE 802.3af) 15.4W suitable for IP phones and cameras; PoE+ (IEEE 802.3at) 30W for wireless access points and advanced cameras; PoE++ (IEEE 802.3bt Type 3) 60W for high-power APs and building automation; and PoE++ (IEEE 802.3bt Type 4) 100W for LED lighting and PTZ cameras.</p>

            <p>MPTL (Modular Plug Terminated Link): Factory-terminated RJ45 plugs on both ends, eliminates field termination (reduces installation time 70%), permanent link testing before shipment, and custom cable lengths (reduce cable sag, improve aesthetics).</p>

            <p>Shielded vs. unshielded Ethernet: UTP (Unshielded Twisted Pair) lower cost, adequate for most data centers; FTP (Foiled Twisted Pair) alien crosstalk protection for 10G deployments; and STP (Shielded Twisted Pair) maximum EMI protection for industrial environments.</p>

            <p>Alien crosstalk mitigation: Cat6A cables designed to eliminate AXT (Alien Crosstalk), shielding or increased pair separation, critical for high-density cable bundles (&gt;6 cables in same tray).</p>

            <p>Wave2Wave&apos;s Ethernet cable custom engineering: Precise length control (3-inch increments, eliminate slack), factory-tested MPTL assemblies (100% continuity, performance verification), custom labeling (rack/port printed on cable jacket), color-coded options (organize by network segment), and deployment kitting (rack-specific cable bundles).</p>

            <p>Quality assurance for Ethernet cables: Fluke DSX-8000 testing (Cat6A, Cat8 certification), TDR (Time-Domain Reflectometry) for fault location, PoE power delivery verification (all 4 pairs), and connector retention force testing (RJ45 plug durability).</p>

            <p>Wave2Wave&apos;s Ethernet cabling solutions reduce deployment time, eliminate field termination errors, and ensure day-one network performance for enterprise and data center environments.</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Custom Ethernet Cabling?"
        subtitle="Contact us to discuss your copper infrastructure requirements and receive a custom quote."
        primaryButtonText="Request Ethernet Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

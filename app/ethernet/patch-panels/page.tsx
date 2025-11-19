import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Zap, Shield, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Ethernet Patch Panels | Wave2Wave – Modular RJ45 Systems",
  description:
    "Wave2Wave Ethernet patch panels: modular Cat6A/Cat8 cassette systems, keystone jack panels, and high-density 1U/2U solutions for data center copper patching.",
}

export default function EthernetPatchPanelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Ethernet Patch Panels – Flexible Copper Connectivity"
        subtitle="Modular RJ45 cassette systems for easy moves, adds, and changes. High-density patching for enterprise and data center networks."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Why Modular Ethernet Panels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Why Modular Ethernet Patch Panels?</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Modular cassette-based patch panels offer flexibility that traditional fixed panels can't match.
              Upgrade cable categories, swap failed jacks, or reconfigure layouts without replacing the entire panel.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureBlock
                icon={<Layers className="h-6 w-6 text-primary" />}
                title="Hot-Swappable Cassettes"
                description="Replace individual RJ45 cassettes without taking down the entire panel. Minimize downtime during upgrades or repairs."
              />
              <FeatureBlock
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="High Port Density"
                description="48-port capacity in 1U rack space. Maximize copper connectivity without expanding your rack footprint."
              />
              <FeatureBlock
                icon={<Shield className="h-6 w-6 text-primary" />}
                title="Category Flexibility"
                description="Mix Cat6A and Cat8 cassettes in the same enclosure. Support different performance requirements per row or rack."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cassette Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Cassette Options</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">Cat6A Shielded Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 6-port or 12-port options</li>
                  <li>• 10GBASE-T rated to 100m</li>
                  <li>• TIA-568-C.2 compliant</li>
                  <li>• PoE++ (100W) capable</li>
                  <li>• Tool-less keystone jacks</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">Cat6A Unshielded Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 6-port or 12-port options</li>
                  <li>• 10G performance, lower cost</li>
                  <li>• UTP construction</li>
                  <li>• Color-coded by TIA standards</li>
                  <li>• 110-punch or tool-less jacks</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">Cat8 Shielded Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 6-port configuration</li>
                  <li>• 25G/40GBASE-T to 30m</li>
                  <li>• S/FTP shielded jacks</li>
                  <li>• Low latency for AI/HPC</li>
                  <li>• Future-proof copper</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">Blank Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Keystone jack compatible</li>
                  <li>• Bring your own jacks</li>
                  <li>• 6-port or 12-port frames</li>
                  <li>• Universal fit</li>
                  <li>• Cost-effective option</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">Pre-Loaded Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Factory-terminated</li>
                  <li>• All ports tested</li>
                  <li>• Numbered for easy install</li>
                  <li>• Custom labeling available</li>
                  <li>• Ships ready to deploy</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">Angled Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 45° angled jacks</li>
                  <li>• Easier cable management</li>
                  <li>• Reduces bend radius stress</li>
                  <li>• 6-port configuration</li>
                  <li>• Cat6A shielded</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Configurations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Panel Configurations</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Panel Type</th>
                    <th className="px-6 py-4 text-left">Rack Height</th>
                    <th className="px-6 py-4 text-left">Cassette Slots</th>
                    <th className="px-6 py-4 text-left">Max Ports</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Compact 1U</td>
                    <td className="px-6 py-4">1U (1.75")</td>
                    <td className="px-6 py-4">2 cassettes (6-port)</td>
                    <td className="px-6 py-4">12 ports</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Standard 1U</td>
                    <td className="px-6 py-4">1U (1.75")</td>
                    <td className="px-6 py-4">4 cassettes (6-port)</td>
                    <td className="px-6 py-4">24 ports</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">High-Density 1U</td>
                    <td className="px-6 py-4">1U (1.75")</td>
                    <td className="px-6 py-4">4 cassettes (12-port)</td>
                    <td className="px-6 py-4">48 ports</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Standard 2U</td>
                    <td className="px-6 py-4">2U (3.5")</td>
                    <td className="px-6 py-4">8 cassettes (12-port)</td>
                    <td className="px-6 py-4">96 ports</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold mb-2">All panels include:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-700">
                <li>• Integrated cable management</li>
                <li>• Rear cable routing guides</li>
                <li>• Grounding bars (shielded models)</li>
                <li>• Port numbering labels</li>
                <li>• 19" rack mountable</li>
                <li>• Black powder-coat finish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Modular vs. Traditional Patch Panels</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h4 className="font-semibold mb-3 text-slate-600">Traditional Fixed Panels:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span>Must replace entire panel to upgrade category</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span>Failed jack = entire panel downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span>No flexibility for mixed Cat6A/Cat8</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-error mr-2">✗</span>
                    <span>Higher long-term costs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-success">
                <h4 className="font-semibold mb-3 text-success">Wave2Wave Modular Panels:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Swap individual cassettes for upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Hot-swap cassettes, minimal downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Mix categories per your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>Lower total cost of ownership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Upgrade Your Ethernet Patching?"
        subtitle="Contact us to discuss your patch panel requirements and design a flexible copper infrastructure."
        primaryButtonText="Request Patch Panel Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

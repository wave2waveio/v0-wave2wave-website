import Image from "next/image"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Layers, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Fiber Patch Panels | Wave2Wave – Modular Cassette Systems",
  description:
    "Wave2Wave fiber patch panels and cassettes: MPO/MTP cassettes, LC/SC adapters, high-density 1U/2U/4U enclosures, and modular systems for easy upgrades.",
}

export default function FiberPatchPanelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Fiber Patch Panels – Modular, High-Density, Future-Proof"
        subtitle="Cassette-based patch panel systems that support seamless protocol upgrades without replacing trunk cabling."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Why Modular Cassette Systems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Why Modular Cassette Systems?</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Traditional fixed patch panels lock you into one connector type and port configuration. Modular cassette
              systems give you flexibility to upgrade from 10G → 100G → 400G without replacing your trunk infrastructure.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureBlock
                icon={<Layers className="h-6 w-6 text-primary" />}
                title="Protocol Flexibility"
                description="Swap cassettes to change from 10G LC to 40G MPO to 100G QSFP28 breakouts – same trunk cables, new front connectors."
              />
              <FeatureBlock
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="High Density"
                description="144-port fiber capacity in 1U rack space. Maximize port count without expanding rack footprint."
              />
              <FeatureBlock
                icon={<Shield className="h-6 w-6 text-primary" />}
                title="Reduced Downtime"
                description="Hot-swappable cassettes mean you can upgrade ports without taking down the entire panel or disturbing adjacent connections."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cassette Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Cassette Types & Configurations</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">LC Duplex Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 12-port LC duplex (24 fibers)</li>
                  <li>• OM3, OM4, OS2 fiber types</li>
                  <li>• UPC or APC polishing</li>
                  <li>• Color-coded adapters</li>
                  <li>• Perfect for 10G/25G networks</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">MPO/MTP Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 1×MPO-12 to 12×LC duplex</li>
                  <li>• 1×MPO-24 to 24×LC duplex</li>
                  <li>• Type A, B, C polarity options</li>
                  <li>• Elite or premium connectors</li>
                  <li>• Supports 40G/100G breakouts</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">QSFP Breakout Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 1×MPO-12 to 3×QSFP28 ports</li>
                  <li>• 1×MPO-24 to 6×QSFP28 ports</li>
                  <li>• 100G SR4 applications</li>
                  <li>• Integrated polarity management</li>
                  <li>• Supports Cisco, Arista, Juniper</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">High-Density MPO Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 8×MPO-12 or 4×MPO-24 per cassette</li>
                  <li>• 144 fibers in single 1U cassette</li>
                  <li>• Push-pull or flip-style connectors</li>
                  <li>• Ideal for spine-leaf fabrics</li>
                  <li>• Supports 400G SR8 and beyond</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">SC Simplex/Duplex Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 12-port SC duplex</li>
                  <li>• Legacy system support</li>
                  <li>• OS2 single-mode fiber</li>
                  <li>• APC polish standard</li>
                  <li>• Telecom and campus networks</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold mb-3">Custom Hybrid Cassettes</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Mix LC, SC, MPO on one cassette</li>
                  <li>• Custom port layouts</li>
                  <li>• Adapter plate configurations</li>
                  <li>• Support unique architectures</li>
                  <li>• Consult engineering for specs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enclosure Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Enclosure Options</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Enclosure Type</th>
                    <th className="px-6 py-4 text-left">Rack Height</th>
                    <th className="px-6 py-4 text-left">Cassette Slots</th>
                    <th className="px-6 py-4 text-left">Max Fiber Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Standard 1U</td>
                    <td className="px-6 py-4">1U (1.75")</td>
                    <td className="px-6 py-4">4 cassettes</td>
                    <td className="px-6 py-4">96 fibers (48 LC duplex)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">High-Density 1U</td>
                    <td className="px-6 py-4">1U (1.75")</td>
                    <td className="px-6 py-4">6 cassettes</td>
                    <td className="px-6 py-4">144 fibers (72 LC duplex)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Standard 2U</td>
                    <td className="px-6 py-4">2U (3.5")</td>
                    <td className="px-6 py-4">8 cassettes</td>
                    <td className="px-6 py-4">192 fibers (96 LC duplex)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Standard 4U</td>
                    <td className="px-6 py-4">4U (7")</td>
                    <td className="px-6 py-4">16 cassettes</td>
                    <td className="px-6 py-4">384 fibers (192 LC duplex)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold mb-2">All enclosures include:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-700">
                <li>• Cable management brackets</li>
                <li>• Integrated strain relief</li>
                <li>• Sliding tray for easy access</li>
                <li>• Dust covers for unused slots</li>
                <li>• 19" rack mountable</li>
                <li>• Black powder-coat finish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Example */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Real-World Upgrade Example</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Initial Deployment (Year 1): 10G Network</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Install 24-fiber MPO trunk cables between racks</li>
                  <li>• Use LC duplex cassettes with OM4 fiber</li>
                  <li>• Connect 10GBASE-SR transceivers</li>
                  <li>• Cost: $X for infrastructure</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Upgrade (Year 3): 100G Network</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Keep</strong> all MPO trunk cables (no re-cabling!)</li>
                  <li>• Swap LC cassettes for MPO-to-QSFP breakout cassettes</li>
                  <li>• Connect 100G SR4 transceivers</li>
                  <li>• Cost: Only cassettes + transceivers (80% savings vs. full re-cable)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-success">
                <p className="font-semibold text-lg">
                  Result: 10× bandwidth increase with minimal downtime and 80% cost savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>Fiber optic patch panels with modular cassette systems enable data center infrastructure to upgrade from 10G to 40G to 100G to 400G without replacing backbone cabling. Wave2Wave provides high-density patch panel solutions with MPO trunk connectivity and cassette-based flexibility.</p>

            <p>Modular cassette types: LC duplex cassettes (10G, 25G single-mode and multimode), MPO-12 cassettes (40G SR4, 100G SR4), MPO-24 cassettes (400G SR8), breakout cassettes (MPO to 8×LC, MPO to 12×LC), and universal polarity cassettes (flip module for Method A/B/C).</p>

            <p>Patch panel configurations: 1U high-density (144 LC ports, 12×MPO-12 backend), 2U ultra-high-density (288 LC ports, 24×MPO-12 backend), sliding tray design (easy access without removing panel), and integrated cable management (strain relief, bend radius protection).</p>

            <p>Migration path example: Year 1 deploy 10G with LC duplex cassettes and OM4 trunk cables; Year 3 upgrade to 100G by swapping cassettes only (keep trunk cables); Year 5 upgrade to 400G with MPO-24 cassettes (keep same trunk cables). Result is 80% cost savings vs. complete re-cabling.</p>

            <p>Wave2Wave fiber patch panel systems reduce upgrade costs through modular cassette architecture, eliminate downtime with hot-swap cassettes, and future-proof infrastructure by supporting 10G through 800G on same backbone cabling.</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need a Modular Fiber Solution?"
        subtitle="Let's discuss your patch panel requirements and design a future-proof infrastructure."
        primaryButtonText="Request Patch Panel Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

import Image from "next/image"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Zap, Network, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Hyperscale Fiber Solutions | Wave2Wave – Spine-Leaf Cabling",
  description:
    "Wave2Wave hyperscale fiber solutions for cloud and AI data centers: spine-leaf fabrics, 400G/800G infrastructure, modular patch panels, and turnkey cabling assemblies.",
}

export default function HyperscalersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Hyperscale Fiber Solutions – Built for Cloud-Scale Infrastructure"
        subtitle="Engineered cabling for spine-leaf fabrics supporting 10G to 800G and beyond. From hundreds to thousands of racks."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* The Hyperscale Challenge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">The Hyperscale Challenge</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Hyperscale and cloud data centers face unique cabling challenges: thousands of connections, rapid deployment
              timelines, frequent upgrades, and the need for 100% uptime. Traditional cable management doesn't scale.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Complexity at Scale</h4>
                <p className="text-slate-700 text-sm">
                  10,000+ port spine-leaf fabrics require flawless polarity management and zero-error installations
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Speed-to-Revenue</h4>
                <p className="text-slate-700 text-sm">
                  Every day of deployment delay costs revenue. Infrastructure must deploy in weeks, not months
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Future-Proofing</h4>
                <p className="text-slate-700 text-sm">
                  Networks must support 10G → 100G → 400G → 800G migrations without full re-cabling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave2Wave Solutions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Wave2Wave Hyperscale Solutions</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureBlock
                icon={<Layers className="h-6 w-6 text-primary" />}
                title="Modular Patch Panel Systems"
                description="Spine-leaf fabrics built on cassette-based patch panels that support 10G → 400G → 800G migrations without replacing trunk cabling. Swap cassettes, not infrastructure."
              />
              <FeatureBlock
                icon={<Network className="h-6 w-6 text-primary" />}
                title="Spine-Leaf Kitting"
                description="Pre-engineered cable bundles that reduce hundreds of SKUs into turnkey assemblies. One part number covers an entire rack or row, eliminating procurement complexity."
              />
              <FeatureBlock
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="400G/800G Ready Infrastructure"
                description="End-to-end fiber solutions designed for current and next-gen architectures. OM5 and OS2 options support SWDM, DR4, and future 1.6T standards."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spine-Leaf Architecture Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Spine-Leaf Architecture Support</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Wave2Wave understands the unique requirements of modern spine-leaf fabrics used by hyperscalers and cloud providers.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4">Typical Spine-Leaf Topology:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Spine switches: 32-128 ports per switch, 4-16 switches</li>
                  <li>• Leaf switches: 32-64 ports per switch, hundreds per fabric</li>
                  <li>• Every leaf connects to every spine (full mesh)</li>
                  <li>• Fiber breakouts from spine MPO to leaf QSFP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Wave2Wave Solutions:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Custom MPO trunk lengths for exact spine-leaf distances</li>
                  <li>• Pre-labeled breakouts (e.g., "Spine-2-Port-1 → Leaf-47-Port-5")</li>
                  <li>• Kitted by row or pod for rapid deployment</li>
                  <li>• Type B polarity standard (or your custom spec)</li>
                </ul>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000"
                alt="Spine-leaf architecture diagram"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Migration Path */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Future-Proof Migration Path</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phase 1: Deploy with 100G (Today)</h4>
                    <p className="text-slate-700">
                      Install OM4 or OS2 MPO trunk cables between spine and leaf. Use 100G SR4 transceivers and MPO-to-4×25G breakout cassettes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phase 2: Upgrade to 400G (Future)</h4>
                    <p className="text-slate-700">
                      Keep the same MPO trunk cables. Swap cassettes to 400G SR8 breakouts (MPO-to-8×50G). No re-cabling needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-600">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phase 3: Scale to 800G (Next-Gen)</h4>
                    <p className="text-slate-700">
                      Same trunk cables, new 800G cassettes. Total cost of ownership reduced by avoiding full infrastructure replacement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary text-white p-6 rounded-lg text-center">
              <p className="text-xl font-bold">
                Result: 10-year infrastructure lifespan with minimal upgrade costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Proven at Scale</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-lg font-semibold mb-1">Ports Deployed</p>
                <p className="text-slate-600">Single fabric installations</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50%</div>
                <p className="text-lg font-semibold mb-1">Faster Deployment</p>
                <p className="text-slate-600">vs. traditional methods</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">&lt;0.1%</div>
                <p className="text-lg font-semibold mb-1">Error Rate</p>
                <p className="text-slate-600">Factory testing + pre-labeling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Building a Hyperscale Network?"
        subtitle="Let's discuss your spine-leaf architecture and how Wave2Wave can accelerate your deployment."
        primaryButtonText="Discuss Your Fabric"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

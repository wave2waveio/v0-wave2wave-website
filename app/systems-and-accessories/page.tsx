import Link from "next/link"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Zap, Activity, Cable } from "lucide-react"

export const metadata: Metadata = {
  title: "Systems & Accessories | Wave2Wave – Power & Testing Solutions",
  description:
    "Wave2Wave systems and accessories: PDU power cables, fiber testing equipment, cable management, and lab solutions for data centers.",
}

export default function SystemsAndAccessoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Systems & Accessories – Complete Infrastructure Solutions"
        subtitle="Power distribution, testing equipment, and accessories that complete your data center deployment."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Complete Infrastructure Accessories</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureBlock
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="PDU Power Cables"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• C13 to C14, C19 to C20</li>
                    <li>• Custom lengths (3-inch increments)</li>
                    <li>• 120V, 208V, 240V rated</li>
                    <li>• Pre-labeled by PDU/outlet</li>
                    <li>• Color-coded by voltage</li>
                    <li>• UL/cUL listed</li>
                  </ul>
                }
              />
              <FeatureBlock
                icon={<Activity className="h-6 w-6 text-primary" />}
                title="Testing & Lab Solutions"
                description={
                  <div>
                    <p className="mb-2">Fiber distance simulators, loopback testers, and lab equipment for network validation.</p>
                    <Link href="/systems-and-accessories/testing" className="text-primary hover:text-primary-blue-dark font-medium">
                      Learn more →
                    </Link>
                  </div>
                }
              />
              <FeatureBlock
                icon={<Cable className="h-6 w-6 text-primary" />}
                title="Cable Management"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• Vertical cable managers (1U/2U)</li>
                    <li>• Horizontal organizers</li>
                    <li>• Velcro straps and ties</li>
                    <li>• Cable trays and pathways</li>
                    <li>• Finger ducts</li>
                    <li>• D-ring panels</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Fiber Cleaning & Inspection"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• Fiber optic cleaning kits</li>
                    <li>• MPO/LC connector cleaners</li>
                    <li>• Inspection scopes</li>
                    <li>• Cleaning cassettes</li>
                    <li>• Alcohol wipes (IPA)</li>
                    <li>• Dust caps and protectors</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Rack Hardware"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• Cage nuts and screws</li>
                    <li>• Rack shelves (1U/2U/4U)</li>
                    <li>• Blanking panels</li>
                    <li>• Grounding kits</li>
                    <li>• PDU mounting brackets</li>
                    <li>• Cable pass-through panels</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Transceivers & Optics"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• SFP, SFP+, SFP28 modules</li>
                    <li>• QSFP28, QSFP56, QSFP-DD</li>
                    <li>• BiDi and CWDM/DWDM</li>
                    <li>• Vendor-compatible coding</li>
                    <li>• DOM/DDM monitoring</li>
                    <li>• Extended temperature options</li>
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* PDU Power Cables */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">PDU Power Cables – Custom Engineered for Your Racks</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Wave2Wave manufactures custom PDU power cables to exact lengths, eliminating excess slack and improving
              airflow. Every cable is pre-labeled to match your PDU outlet mapping.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Standard Configurations:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• C13 to C14 (server power)</li>
                  <li>• C19 to C20 (high-wattage devices)</li>
                  <li>• NEMA 5-15P to C13</li>
                  <li>• NEMA L6-20P to C19</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Custom Options:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Lengths from 0.3m to 10m+</li>
                  <li>• 14 AWG, 12 AWG, or 10 AWG</li>
                  <li>• Color-coded by voltage</li>
                  <li>• Right-angle connectors</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold mb-2">Benefits of Custom PDU Cables:</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Exact lengths eliminate cable slack and improve airflow</li>
                <li>• Pre-labeling matches PDU outlet to server/device</li>
                <li>• Color coding by voltage prevents misconnections</li>
                <li>• Faster installation and easier troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy Systems & Accessories from Wave2Wave */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Why Buy from Wave2Wave?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">One-Stop Shopping</h4>
                <p className="text-slate-700">
                  Bundle fiber, copper, power, and accessories into a single order. Simplify procurement and reduce logistics costs.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">Custom Integration</h4>
                <p className="text-slate-700">
                  We integrate accessories into your deployment kits. Receive cables, power cords, and hardware together — organized by rack.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">Quality Assurance</h4>
                <p className="text-slate-700">
                  All products tested and certified. Power cables UL listed, transceivers vendor-compatible, testing equipment calibrated.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">Fast Delivery</h4>
                <p className="text-slate-700">
                  Same lead times as your cable order. No separate shipments or delays — everything arrives deployment-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Complete Your Infrastructure Build"
        subtitle="Contact us to add power, testing, and accessories to your next cable order."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

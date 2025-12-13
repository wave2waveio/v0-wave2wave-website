import Image from "next/image"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Tag, Package, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Deployment Services | Wave2Wave – Pre-Labeled & Kitted Cabling",
  description:
    "Wave2Wave deployment services include factory labeling of cables and rack-specific kitting, ensuring your data center infrastructure installs 50% faster with zero errors.",
}

export default function DeploymentServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Deployment Services – From Factory to Rack, Faster"
        subtitle="We don't just deliver products – we deliver complete services that make on-site deployment up to 70% faster and error-free."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Pre-Labeled Cables */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Pre-Labeled Cables – Plug and Play</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Every cable leaves the factory with permanent identifiers tied to your rack and port mapping.
              There's zero need for manual labeling – installers simply connect the label to the port.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl mb-4">Benefits:</h3>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Zero mismatched connections</p>
                    <p className="text-slate-600 text-sm">Pre-labeled cables eliminate human error</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">75% faster rack installations</p>
                    <p className="text-slate-600 text-sm">No on-site labeling needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Installs in days, audits in minutes</p>
                    <p className="text-slate-600 text-sm">Perfect documentation from day one</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">No on-site labeling errors or rework</p>
                    <p className="text-slate-600 text-sm">Factory quality control ensures accuracy</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000"
                  alt="Pre-labeled cables"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Label Formats We Support:</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>• Rack/Port numbering (e.g., R12-U24-P01)</li>
                <li>• VLAN identifiers</li>
                <li>• Custom naming schemes</li>
                <li>• Color-coded by function</li>
                <li>• QR codes for asset management</li>
                <li>• Barcode integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Deployment Kitting */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Advanced Deployment Kitting</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Rack-specific cable kits organized by installation phase. Your installers receive exactly what they need,
              when they need it – no sorting through hundreds of cables.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <FeatureBlock
                icon={<Package className="h-6 w-6 text-primary" />}
                title="Rack-Specific Kits"
                description="Each kit contains only the cables for that specific rack, labeled and ready to install."
              />
              <FeatureBlock
                icon={<Clock className="h-6 w-6 text-primary" />}
                title="Phase-Based Organization"
                description="Kits organized by installation phase: power first, then network, then storage."
              />
              <FeatureBlock
                icon={<Tag className="h-6 w-6 text-primary" />}
                title="Simplified Logistics"
                description="One box per rack reduces receiving complexity and eliminates sorting time."
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl mb-4">How Kitting Works:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">We receive your deployment plan</p>
                    <p className="text-slate-600 text-sm">DCIM export, rack elevation, or spreadsheet</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">We organize cables by rack and phase</p>
                    <p className="text-slate-600 text-sm">Power → Network → Storage → Management</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Each kit ships with installation guide</p>
                    <p className="text-slate-600 text-sm">Visual diagrams showing exactly where each cable goes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-semibold">Installers complete racks in record time</p>
                    <p className="text-slate-600 text-sm">50-75% faster than traditional methods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Real-World Impact</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold mb-2">Before Wave2Wave:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• 2-3 weeks to install 100 racks</li>
                  <li>• Installers spend 40% of time labeling</li>
                  <li>• 5-10% error rate requiring rework</li>
                  <li>• Documentation months out of date</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-success">
                <h4 className="font-semibold mb-2">After Wave2Wave:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• 1 week to install 100 racks</li>
                  <li>• Zero time spent on labeling</li>
                  <li>• &lt;0.1% error rate</li>
                  <li>• Perfect documentation from day one</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-primary mb-4">
                Result: 50-75% reduction in installation time and costs
              </p>
              <p className="text-lg text-slate-600">
                GPU clusters online weeks earlier, revenue generation accelerated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>Wave2Wave&apos;s deployment services transform data center cabling from a labor-intensive field process into a predictable, efficient factory operation. Our rack-specific kitting, pre-termination, and factory labeling eliminate installation errors and reduce deployment time by 50-75%.</p>

            <p>Rack-specific kitting methodology: Cables organized by destination rack (Rack A1, Rack A2, etc.), installation phase grouping (power first, TOR next, spine last), color-coded bundles (visually distinguish network segments), and sequential labeling (install cable 1, then 2, then 3).</p>

            <p>Pre-termination quality processes: Factory-installed connectors (LC, MPO, RJ45) tested before shipment, insertion loss/return loss verification (fiber optic cables), TDR and performance testing (Ethernet cables), and visual inspection (connector alignment, fiber end-face cleanliness).</p>

            <p>Factory labeling systems: Rack and port mapping printed on cable jacket, durable labels (heat-shrink or laser-etched, won&apos;t peel), sequential numbering (matches installation documentation), and QR code option (link to digital twin or DCIM record).</p>

            <p>Deployment timeline reduction metrics: Traditional field termination 8-12 weeks for 1000-rack data center, Wave2Wave pre-kitted deployment 3-4 weeks for same facility, labor cost reduction 60% (fewer installers, shorter timeline), and error rate reduction 95% (factory QA vs. field termination).</p>

            <p>Error elimination statistics: Field termination error rate 5-10% (port mapping, polarity mistakes), Wave2Wave factory error rate &lt;0.5% (automated testing, validation), and rework truck rolls eliminated 100% (get it right the first time).</p>

            <p>Case study summary for Fortune 500 Hyperscale Deployment: Challenge was deploy 500 racks in 6 weeks (impossible with field termination). Solution was DC Twin™ digital modeling + rack-specific kitting. Results were 5-week deployment, zero port mapping errors, and 65% cost savings vs. traditional approach.</p>

            <p>Wave2Wave&apos;s deployment services de-risk data center infrastructure projects by moving complexity from the chaotic field environment into the controlled factory setting, ensuring predictable outcomes and faster time-to-production.</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Accelerate Your Deployment?"
        subtitle="Learn how our labeling and kitting services can transform your next data center build."
        primaryButtonText="Discuss Your Project"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

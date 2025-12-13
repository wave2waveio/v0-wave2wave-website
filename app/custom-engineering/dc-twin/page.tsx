import Image from "next/image"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Ruler, Shield, FileText, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "DC Twin™ Digital Twin | Wave2Wave – Virtual Data Center Design",
  description:
    "Learn about Wave2Wave's DC Twin™ service – a digital twin platform that models every rack and cable in software for precise lengths, zero surprises, and 40% faster data center deployment.",
}

export default function DCTwinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <HeroSection
        title="DC Twin™ – Design It. Validate It. Build It – Virtually."
        subtitle="A digital modeling platform that creates a virtual replica of your data hall before production, validating every rack and cable in software."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* What is DC Twin? */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Virtual Data Center Modeling</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              DC Twin™ is a digital modeling platform that creates a virtual replica of your data hall before
              production. Using industry-standard DCIM tools (Sunbird, Nlyte), we model every rack, cable route, and
              connector in software – then use that model to manufacture cables with 99% length accuracy.
            </p>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000"
                alt="DCIM 3D model screenshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs. Digital Twin */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Digital Modeling Matters</h2>

            <div className="overflow-hidden rounded-xl border border-slate-700 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800 border-b border-slate-700">
                    <th className="px-6 py-4 text-lg font-semibold text-slate-300 w-1/2">Traditional Approach</th>
                    <th className="px-6 py-4 text-lg font-semibold text-blue-400 w-1/2">DC Twin™ Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                  <tr>
                    <td className="px-6 py-4 text-slate-400">Estimate cable lengths, add 20% slack</td>
                    <td className="px-6 py-4 text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> Calculate exact lengths in 3D model
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">Discover routing conflicts on-site</td>
                    <td className="px-6 py-4 text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> Resolve conflicts virtually
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">On-site adjustments cause delays</td>
                    <td className="px-6 py-4 text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> Zero on-site rework needed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">Manual documentation after install</td>
                    <td className="px-6 py-4 text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> Automated as-built documentation
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">Emergency reorders common</td>
                    <td className="px-6 py-4 text-white font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> Reorders eliminated entirely
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-600 text-white p-4 rounded-lg text-center shadow-lg">
              <p className="text-xl font-bold">Result: 40% faster deployment compared to traditional methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Critical Advantages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Three Critical Advantages</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureBlock
              icon={<Ruler className="h-6 w-6 text-blue-600" />}
              title="Exact Cable Length Calculation"
              description="Every cable length determined with 99% accuracy through the digital model. No guesswork, no 20% slack factor – just the right length for optimal airflow and aesthetics."
              className="bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
            />
            <FeatureBlock
              icon={<Shield className="h-6 w-6 text-blue-600" />}
              title="Installation De-Risking"
              description="The model catches routing conflicts, bend radius violations, and pathway issues before production. The actual build has zero on-site rework because problems were solved virtually."
              className="bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
            />
            <FeatureBlock
              icon={<FileText className="h-6 w-6 text-blue-600" />}
              title="Automated Documentation"
              description="Because the as-built matches the digital twin, documentation is automatically accurate. No manual updates, no discrepancies – perfect records from day one."
              className="bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* The DC Twin Process */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">The DC Twin™ Process</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Process Steps */}
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Design</h3>
                    <p className="text-slate-600">Import your floor plan and rack layouts into DCIM software.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Model</h3>
                    <p className="text-slate-600">
                      Map every cable route, considering pathway, bend radius, and slack management.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Validate</h3>
                    <p className="text-slate-600">Review virtual model with your team, identify issues, refine.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Build</h3>
                    <p className="text-slate-600">Manufacture cables to exact lengths from the validated model.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000"
                  alt="DC Twin workflow diagram"
                  fill
                  className="object-cover"
                />
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
            <p>DC Twin™ is Wave2Wave&apos;s digital twin technology for data center cabling infrastructure. Unlike traditional CAD drawings, DC Twin™ creates a virtual 3D model of the entire data center, simulates cable routing, validates every connection, and generates optimized deployment kits before a single cable is manufactured.</p>

            <p>DCIM (Data Center Infrastructure Management) integration is core to DC Twin™. We import rack layouts from Nlyte (energy and asset management), Sunbird dcTrack (capacity planning), Schneider Electric EcoStruxure (monitoring), and FNT Command (resource management).</p>

            <p>BIM (Building Information Modeling) compatibility enables architecture/engineering collaboration. DC Twin™ imports Autodesk Revit models (.rvt files), AutoCAD floor plans (.dwg files), SketchUp 3D models (.skp files), and IFC (Industry Foundation Classes) universal format.</p>

            <p>The cable routing algorithm in DC Twin™ optimizes for shortest viable path (minimize cable length, reduce cost), bend radius compliance (prevent signal loss), cable tray capacity (avoid congestion), hot aisle/cold aisle airflow preservation, and accessibility for future maintenance.</p>

            <p>Pre-deployment validation catches errors before production: port mapping verification (every cable to correct switch port), polarity checking (fiber A-to-B, B-to-A connections), power budget calculations (optical loss budget for fiber), and compatibility validation (SFP+ to SFP+, QSFP to QSFP).</p>

            <p>ROI for DC Twin™ digital modeling includes 95% reduction in cabling errors (vs. field termination), 60% faster deployment (pre-kitted, pre-labeled cables), 40% lower total cost of ownership (fewer truck rolls, rework), and zero port mapping mistakes (validated in virtual model).</p>

            <p>The DC Twin™ process: (1) Import data center layout (DCIM, BIM, CAD), (2) Define connectivity requirements (server to TOR, TOR to spine), (3) Simulate cable routing (algorithm optimizes paths), (4) Validate design (automated error checking), (5) Generate deployment kits (rack-specific bundles), (6) Manufacture and label cables (factory production), (7) Ship optimized kits (organized by installation phase).</p>

            <p>Wave2Wave&apos;s DC Twin™ digital modeling transforms data center deployments from error-prone manual processes into predictable, efficient, factory-validated installations.</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Plan Your Data Center with DC Twin™"
        subtitle="Contact us to initiate a digital model of your project and experience the precision and efficiency of virtual data center design."
        primaryButtonText="Start Digital Modeling"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

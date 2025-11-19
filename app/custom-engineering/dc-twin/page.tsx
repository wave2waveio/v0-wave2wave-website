import Image from "next/image"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Ruler, Shield, FileText, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "DC Twin™ Digital Twin | Wave2Wave – Virtual Data Center Design",
  description:
    "Learn about Wave2Wave's DC Twin™ service – a digital twin platform that models every rack and cable in software for precise lengths, zero surprises, and 40% faster data center deployment.",
}

export default function DCTwinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="DC Twin™ – Design It. Validate It. Build It – Virtually."
        subtitle="A digital modeling platform that creates a virtual replica of your data hall before production, validating every rack and cable in software."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* What is DC Twin? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Virtual Data Center Modeling</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              DC Twin™ is a digital modeling platform that creates a virtual replica of your data hall before production.
              Using industry-standard DCIM tools (Sunbird, Nlyte), we model every rack, cable route, and connector in
              software – then use that model to manufacture cables with 99% length accuracy.
            </p>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
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
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Why Digital Modeling Matters</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Traditional Approach</th>
                    <th className="px-6 py-4 text-left">DC Twin™ Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Estimate cable lengths, add 20% slack</td>
                    <td className="px-6 py-4 text-slate-700 font-medium">Calculate exact lengths in 3D model</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 text-slate-700">Discover routing conflicts on-site</td>
                    <td className="px-6 py-4 text-slate-700 font-medium">Resolve conflicts virtually</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-700">On-site adjustments cause delays</td>
                    <td className="px-6 py-4 text-slate-700 font-medium">Zero on-site rework needed</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 text-slate-700">Manual documentation after install</td>
                    <td className="px-6 py-4 text-slate-700 font-medium">Automated as-built documentation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Emergency reorders common</td>
                    <td className="px-6 py-4 text-slate-700 font-medium">Reorders eliminated entirely</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-primary text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-bold">Result: 40% faster deployment compared to traditional methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Critical Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Three Critical Advantages</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureBlock
              icon={<Ruler className="h-6 w-6 text-primary" />}
              title="Exact Cable Length Calculation"
              description="Every cable length determined with 99% accuracy through the digital model. No guesswork, no 20% slack factor – just the right length for optimal airflow and aesthetics."
            />
            <FeatureBlock
              icon={<Shield className="h-6 w-6 text-primary" />}
              title="Installation De-Risking"
              description="The model catches routing conflicts, bend radius violations, and pathway issues before production. The actual build has zero on-site rework because problems were solved virtually."
            />
            <FeatureBlock
              icon={<FileText className="h-6 w-6 text-primary" />}
              title="Automated Documentation"
              description="Because the as-built matches the digital twin, documentation is automatically accurate. No manual updates, no discrepancies – perfect records from day one."
            />
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Proven Results</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-lg font-semibold mb-2">Faster Deployment</div>
              <p className="text-slate-600">vs. traditional methods</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Ruler className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-lg font-semibold mb-2">Accurate Lengths</div>
              <p className="text-slate-600">via digital model</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <div className="text-lg font-semibold mb-2">Reorders</div>
              <p className="text-slate-600">Emergency cables eliminated entirely</p>
            </div>
          </div>
        </div>
      </section>

      {/* The DC Twin Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">The DC Twin™ Process</h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design</h3>
                  <p className="text-slate-700">Import your floor plan and rack layouts into DCIM software</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Model</h3>
                  <p className="text-slate-700">Map every cable route, considering pathway, bend radius, and slack management</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Validate</h3>
                  <p className="text-slate-700">Review virtual model with your team, identify issues, refine</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build</h3>
                  <p className="text-slate-700">Manufacture cables to exact lengths from the validated model</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
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

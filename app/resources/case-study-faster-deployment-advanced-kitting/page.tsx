import { ArrowLeft, Calendar, Clock, User, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function KittingCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>

            <Badge className="mb-4">Case Study</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Case Study: Faster Deployment with Advanced Kitting
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                December 5, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />6 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Wave2Wave Case Study Team
              </div>
            </div>

            <Image
              src="/images/design-mode/advanced-kitting.jpeg"
              alt="Data Center Deployment Success"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 mb-8">
                A Fortune 500 Technology Services company faced mounting pressure to scale its infrastructure in response to explosive growth in digital workloads and cloud services. To meet operational goals without compromising on quality, they partnered with Wave2Wave.io to implement an advanced kitting and logistics solution.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Challenge</h2>
              <p className="text-slate-700 mb-4">
                The client needed to install 200 new server racks across three data halls—under a compressed 8-week schedule. This expansion required:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>High-density structured cabling for latency-sensitive workloads</li>
                <li>Accurate power and cooling coordination across hundreds of endpoints</li>
                <li>Strict uptime adherence and minimal disruption to live systems</li>
                <li>Regulatory-compliant deployment processes with zero tolerance for error</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Wave2Wave.io’s Approach</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Rack-Level Kitting and Pre-Staging</h3>
              <p className="text-slate-700 mb-4">
                Wave2Wave.io developed rack-specific kits that included all materials—pre-labeled and arranged according to the installation sequence. Every cable, patch panel, and accessory was organized to eliminate on-site sorting and reduce technician setup time.
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li><strong>Installation-ready kits:</strong> All items packaged by rack, floor, and zone</li>
                <li><strong>Color-coded and barcoded labels:</strong> Simplified installation and error tracking</li>
                <li><strong>Pre-verified components:</strong> Eliminated DOA materials during deployment</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">DCIM-Integrated Design Validation</h3>
              <p className="text-slate-700 mb-4">
                Leveraging a full digital twin of the environment, Wave2Wave.io modeled and validated the deployment prior to shipment:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Calculated exact fiber and copper cable lengths for each route</li>
                <li>Simulated airflow and thermal loading to optimize rack placement</li>
                <li>Resolved potential cable routing conflicts digitally</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Coordinated Logistics and On-Site Execution</h3>
              <p className="text-slate-700 mb-4">
                A dedicated logistics plan ensured each kitted bundle arrived when needed:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li><strong>Just-in-time delivery:</strong> Minimized staging space and storage costs</li>
                <li><strong>Real-time shipment visibility:</strong> Ensured full chain-of-custody from build to install</li>
                <li><strong>On-site project coordination:</strong> Deployment teams followed digital build sheets with precision</li>
              </ul>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
                Results Achieved
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-green-600 mb-2">Significantly</h3>
                  <p className="text-slate-700 font-semibold mb-2">Faster Deployment</p>
                  <p className="text-slate-600 text-sm">Completed in 8 weeks vs. projected 12-14 weeks</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">Complete</h3>
                  <p className="text-slate-700 font-semibold mb-2">Reduction in Installation Errors</p>
                  <p className="text-slate-600 text-sm">Near-zero rework required during deployment</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">Measurable</h3>
                  <p className="text-slate-700 font-semibold mb-2">Cost Savings</p>
                  <p className="text-slate-600 text-sm">Reduced labor costs and faster time-to-revenue</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-orange-600 mb-2">100%</h3>
                  <p className="text-slate-700 font-semibold mb-2">On-Time Delivery</p>
                  <p className="text-slate-600 text-sm">All milestones met or exceeded</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Client Testimonial</h2>
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-700 bg-slate-50 p-6 rounded-r-lg mb-8">
                "Wave2Wave.io's advanced kitting approach completely transformed our deployment experience. What typically takes us 3-4 months was completed in just 8 weeks, with virtually no errors or rework required. The level of organization and attention to detail was exceptional. This approach will be our standard for all future data center expansions."
                <footer className="text-slate-600 mt-4 not-italic">
                  — Director of Data Center Operations, Fortune 500 Technology Services Company
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Cards */}
          </div>
        </div>
      </section>

      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>Advanced deployment kitting reduces data center installation time through rack-specific cable organization, factory pre-labeling, and installation phase grouping. Wave2Wave case study demonstrates Fortune 500 company achieved 40% faster deployment, 60% labor cost reduction, and zero port mapping errors using precision kitting services. Rack-specific bundles eliminate on-site sorting, pre-labeled cables match DCIM documentation, and phase-based organization accelerates commissioning timelines.</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Next Deployment?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Discover how Wave2Wave.io's advanced kitting and logistics services can transform your infrastructure projects.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

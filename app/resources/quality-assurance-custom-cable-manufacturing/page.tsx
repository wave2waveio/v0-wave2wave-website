import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function QualityAssurancePage() {
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

            <Badge className="mb-4">Behind the Scenes</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Quality Assurance in Custom Cable Manufacturing
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                November 12, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />6 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Wave2Wave Quality Team
              </div>
            </div>

            <Image
              src="/placeholder.svg?height=400&width=800&text=Quality+Assurance+Manufacturing"
              alt="Quality Assurance in Cable Manufacturing"
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
                Quality assurance in custom cable manufacturing is critical for ensuring reliable network performance
                and preventing costly deployment failures. This behind-the-scenes look explores the rigorous processes
                that ensure every cable meets exacting standards.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Quality Assurance Framework</h2>
              <p className="text-slate-700 mb-6">
                Our quality assurance process begins with incoming material inspection and continues through every stage
                of manufacturing, testing, and packaging. This comprehensive approach ensures consistent quality and
                reliability.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Incoming Material Inspection</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Raw Material Verification</h3>
              <p className="text-slate-700 mb-4">
                Every batch of raw materials undergoes thorough inspection before entering production:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Cable jacket and conductor specifications verification</li>
                <li>Connector quality and dimensional checks</li>
                <li>Fiber optic cable attenuation and bandwidth testing</li>
                <li>Documentation review and traceability establishment</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Supplier Qualification</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Rigorous supplier auditing and certification processes</li>
                <li>Ongoing performance monitoring and evaluation</li>
                <li>Quality agreements and specifications compliance</li>
                <li>Regular supplier quality reviews and improvements</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Manufacturing Process Controls</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">In-Process Monitoring</h3>
              <p className="text-slate-700 mb-4">
                Quality checkpoints throughout the manufacturing process ensure consistent results:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Real-time monitoring of termination processes</li>
                <li>Dimensional verification at each assembly stage</li>
                <li>Visual inspection of all connections and joints</li>
                <li>Environmental condition monitoring and control</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Process Documentation</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Detailed work instructions for each manufacturing step</li>
                <li>Operator training and certification requirements</li>
                <li>Process parameter recording and trend analysis</li>
                <li>Non-conformance tracking and corrective actions</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Testing and Validation</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Electrical Testing</h3>
              <p className="text-slate-700 mb-4">
                Comprehensive electrical testing ensures performance specifications are met:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Continuity and resistance measurements</li>
                <li>Insertion loss and return loss testing</li>
                <li>Near-end and far-end crosstalk verification</li>
                <li>High-voltage isolation testing</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Optical Testing (Fiber Cables)</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Optical loss measurement across all wavelengths</li>
                <li>Optical return loss verification</li>
                <li>Polarity and continuity confirmation</li>
                <li>End-face geometry inspection</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Environmental Testing</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Temperature cycling and thermal shock testing</li>
                <li>Humidity and moisture resistance evaluation</li>
                <li>Vibration and mechanical stress testing</li>
                <li>UV exposure and aging tests for outdoor cables</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Final Inspection and Packaging</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Final Quality Check</h3>
              <p className="text-slate-700 mb-4">Before packaging, every cable assembly undergoes final inspection:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Visual inspection of all components and connections</li>
                <li>Label verification and placement confirmation</li>
                <li>Length measurement and tolerance verification</li>
                <li>Packaging integrity and protection assessment</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Documentation and Traceability</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Complete test reports and certificates of compliance</li>
                <li>Batch tracking and material traceability records</li>
                <li>Quality control sign-offs and approvals</li>
                <li>Customer-specific documentation requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Continuous Improvement</h2>
              <p className="text-slate-700 mb-6">
                Our quality assurance program includes ongoing analysis of quality metrics, customer feedback, and
                industry best practices to continuously improve our processes and products. Regular audits, training
                updates, and process refinements ensure we maintain the highest standards of quality and reliability.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Quality Guarantee</h2>
              <p className="text-slate-700 mb-6">
                Every Wave2Wave.io cable assembly comes with our comprehensive quality guarantee, backed by detailed
                testing documentation and full traceability. This commitment to quality ensures that our customers
                receive products that meet or exceed their specifications and perform reliably in demanding
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Quality Difference</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Learn more about our quality assurance processes and how they ensure reliable performance for your critical
            infrastructure.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Discuss Quality Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

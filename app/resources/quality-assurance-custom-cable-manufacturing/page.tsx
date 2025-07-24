import { ArrowLeft, Calendar, Clock, User, CheckCircle, Shield, Award } from "lucide-react"
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
              src="/images/resources/quality-assurance-manufacturing.png"
              alt="Quality Assurance in Cable Manufacturing"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              unoptimized
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
                Quality assurance in custom cable manufacturing is the foundation of reliable network performance and
                the key to preventing costly deployment failures. This behind-the-scenes look explores the rigorous
                processes and methodologies that ensure every cable assembly meets exacting standards and performs
                flawlessly in demanding environments.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-blue-600" />
                  Our Quality Philosophy
                </h3>
                <p className="text-slate-700">
                  Quality isn't just a checkpoint—it's embedded in every stage of our manufacturing process. From
                  incoming material inspection to final packaging, we maintain rigorous standards that exceed industry
                  requirements and customer expectations.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Quality Assurance Framework</h2>
              <p className="text-slate-700 mb-6">
                Our comprehensive quality assurance framework encompasses every aspect of the manufacturing process,
                from supplier qualification to final product delivery. This systematic approach ensures consistent
                quality and reliability across all product lines and custom configurations.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Incoming Material Inspection</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Raw Material Verification</h3>
              <p className="text-slate-700 mb-4">
                Every batch of raw materials undergoes comprehensive inspection before entering our production
                environment:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>
                    <strong>Cable specifications:</strong> Jacket material, conductor gauge, and impedance verification
                  </li>
                  <li>
                    <strong>Connector quality:</strong> Dimensional checks, plating thickness, and contact resistance
                  </li>
                  <li>
                    <strong>Fiber optic testing:</strong> Attenuation, bandwidth, and numerical aperture measurements
                  </li>
                  <li>
                    <strong>Documentation review:</strong> Certificates of compliance and material traceability
                  </li>
                  <li>
                    <strong>Environmental testing:</strong> Temperature cycling and humidity resistance validation
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Supplier Qualification Program</h3>
              <p className="text-slate-700 mb-4">
                Our supplier network undergoes rigorous qualification and ongoing monitoring:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Facility audits:</strong> On-site inspections of manufacturing processes and quality systems
                </li>
                <li>
                  <strong>Performance monitoring:</strong> Statistical tracking of defect rates and delivery performance
                </li>
                <li>
                  <strong>Quality agreements:</strong> Detailed specifications and compliance requirements
                </li>
                <li>
                  <strong>Continuous improvement:</strong> Regular supplier reviews and capability assessments
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Manufacturing Process Controls</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">In-Process Monitoring</h3>
              <p className="text-slate-700 mb-4">
                Quality checkpoints throughout the manufacturing process ensure consistent results and early detection
                of potential issues:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Real-Time Monitoring
                  </h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Termination process parameters</li>
                    <li>Dimensional verification systems</li>
                    <li>Visual inspection protocols</li>
                    <li>Environmental condition tracking</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Process Documentation
                  </h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Detailed work instructions</li>
                    <li>Operator certification records</li>
                    <li>Parameter logging and analysis</li>
                    <li>Non-conformance tracking</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Statistical Process Control</h3>
              <p className="text-slate-700 mb-4">
                We employ advanced statistical methods to monitor and control manufacturing processes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Control charts:</strong> Real-time monitoring of critical process parameters
                </li>
                <li>
                  <strong>Capability studies:</strong> Regular assessment of process performance and stability
                </li>
                <li>
                  <strong>Trend analysis:</strong> Predictive monitoring to prevent quality issues
                </li>
                <li>
                  <strong>Root cause analysis:</strong> Systematic investigation of any quality deviations
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Comprehensive Testing and Validation</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Electrical Testing (Copper Cables)</h3>
              <p className="text-slate-700 mb-4">
                Every copper cable assembly undergoes comprehensive electrical testing to ensure performance
                specifications are met:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>
                    <strong>Continuity testing:</strong> Verification of all conductor paths and pin assignments
                  </li>
                  <li>
                    <strong>Resistance measurements:</strong> DC resistance and impedance characterization
                  </li>
                  <li>
                    <strong>Insertion loss:</strong> Signal attenuation across the frequency spectrum
                  </li>
                  <li>
                    <strong>Return loss:</strong> Reflection characteristics and impedance matching
                  </li>
                  <li>
                    <strong>Crosstalk testing:</strong> NEXT, FEXT, and alien crosstalk measurements
                  </li>
                  <li>
                    <strong>High-voltage testing:</strong> Insulation integrity and safety verification
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Optical Testing (Fiber Cables)</h3>
              <p className="text-slate-700 mb-4">
                Fiber optic assemblies undergo specialized testing to ensure optimal light transmission:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>
                    <strong>Optical loss measurement:</strong> Insertion loss across all operating wavelengths
                  </li>
                  <li>
                    <strong>Return loss testing:</strong> Reflection characteristics at connector interfaces
                  </li>
                  <li>
                    <strong>Polarity verification:</strong> Fiber mapping and continuity confirmation
                  </li>
                  <li>
                    <strong>End-face inspection:</strong> Microscopic analysis of connector geometry and cleanliness
                  </li>
                  <li>
                    <strong>Bandwidth testing:</strong> Modal bandwidth and dispersion characteristics
                  </li>
                  <li>
                    <strong>OTDR analysis:</strong> Length verification and fault detection
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Environmental and Reliability Testing</h3>
              <p className="text-slate-700 mb-4">
                Products undergo rigorous environmental testing to ensure long-term reliability:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Temperature cycling:</strong> Performance verification across operating temperature ranges
                </li>
                <li>
                  <strong>Humidity testing:</strong> Moisture resistance and condensation effects
                </li>
                <li>
                  <strong>Vibration testing:</strong> Mechanical stress and connection integrity
                </li>
                <li>
                  <strong>UV exposure:</strong> Aging tests for outdoor and plenum applications
                </li>
                <li>
                  <strong>Salt spray testing:</strong> Corrosion resistance for harsh environments
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Final Inspection and Documentation</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Final Quality Verification</h3>
              <p className="text-slate-700 mb-4">
                Before packaging, every cable assembly undergoes a comprehensive final inspection:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Visual inspection:</strong> Complete examination of all components and connections
                </li>
                <li>
                  <strong>Label verification:</strong> Accuracy and placement of all identification labels
                </li>
                <li>
                  <strong>Length measurement:</strong> Precise verification against customer specifications
                </li>
                <li>
                  <strong>Packaging assessment:</strong> Protection adequacy and handling instructions
                </li>
                <li>
                  <strong>Documentation review:</strong> Completeness of test reports and certificates
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Traceability and Documentation</h3>
              <p className="text-slate-700 mb-4">Complete documentation ensures full traceability and compliance:</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Comprehensive test reports with all measurement data</li>
                  <li>Certificates of compliance for industry standards</li>
                  <li>Material traceability records linking to source batches</li>
                  <li>Quality control sign-offs and approval documentation</li>
                  <li>Customer-specific documentation and labeling requirements</li>
                  <li>Calibration certificates for all test equipment used</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Continuous Improvement Program</h2>
              <p className="text-slate-700 mb-6">
                Our quality assurance program includes ongoing analysis and improvement initiatives:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Quality metrics analysis:</strong> Regular review of defect rates and performance trends
                </li>
                <li>
                  <strong>Customer feedback integration:</strong> Systematic incorporation of field performance data
                </li>
                <li>
                  <strong>Process optimization:</strong> Continuous refinement of manufacturing procedures
                </li>
                <li>
                  <strong>Technology updates:</strong> Investment in advanced testing and manufacturing equipment
                </li>
                <li>
                  <strong>Training programs:</strong> Ongoing education for quality and manufacturing personnel
                </li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Quality Results</h3>
                <p className="text-green-800 mb-4">Our comprehensive quality program delivers measurable results:</p>
                <ul className="list-disc pl-6 text-green-800 space-y-1">
                  <li>99.8% first-pass yield rate on all products</li>
                  <li>Less than 0.1% field failure rate</li>
                  <li>100% on-time delivery of quality products</li>
                  <li>Zero customer complaints related to quality issues</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Our Quality Guarantee</h2>
              <p className="text-slate-700 mb-6">
                Every Wave2Wave.io cable assembly comes with our comprehensive quality guarantee, backed by detailed
                testing documentation and full material traceability. This commitment to quality ensures that our
                customers receive products that not only meet their specifications but exceed their expectations for
                performance and reliability.
              </p>
              <p className="text-slate-700 mb-6">
                Our quality assurance program represents more than just compliance—it's our commitment to your success.
                When you choose Wave2Wave.io, you're partnering with a team that understands that quality isn't
                negotiable, and that every cable we manufacture carries our reputation and your trust.
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
            infrastructure projects.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Discuss Quality Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

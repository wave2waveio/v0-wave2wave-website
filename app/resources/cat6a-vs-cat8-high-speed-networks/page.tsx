import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Cat6AVsCat8Page() {
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

            <Badge className="mb-4">Technical Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Understanding Cat6A vs Cat8 for High-Speed Networks
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                November 22, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />7 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Wave2Wave Technical Team
              </div>
            </div>

            <Image
              src="/placeholder.svg?height=400&width=800&text=Cat6A+vs+Cat8+Comparison"
              alt="Cat6A vs Cat8 Cable Comparison"
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
                As network speeds continue to increase, choosing the right copper cabling category becomes critical for
                performance and future-proofing. This guide compares Cat6A and Cat8 cables to help you make informed
                decisions.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Cat6A Overview</h2>
              <p className="text-slate-700 mb-6">
                Category 6A (Augmented) cable supports 10 Gigabit Ethernet up to 100 meters and operates at frequencies
                up to 500 MHz.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Cat6A Specifications</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Bandwidth:</strong> 500 MHz
                </li>
                <li>
                  <strong>Maximum Speed:</strong> 10 Gbps
                </li>
                <li>
                  <strong>Maximum Distance:</strong> 100 meters
                </li>
                <li>
                  <strong>Shielding:</strong> Available in both UTP and STP variants
                </li>
                <li>
                  <strong>Applications:</strong> 10GBASE-T, general data center use
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Cat8 Overview</h2>
              <p className="text-slate-700 mb-6">
                Category 8 cable is designed for high-speed data center applications, supporting 25 and 40 Gigabit
                Ethernet over shorter distances.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Cat8 Specifications</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Bandwidth:</strong> 2000 MHz (2 GHz)
                </li>
                <li>
                  <strong>Maximum Speed:</strong> 25/40 Gbps
                </li>
                <li>
                  <strong>Maximum Distance:</strong> 30 meters
                </li>
                <li>
                  <strong>Shielding:</strong> Always shielded (S/FTP or F/UTP)
                </li>
                <li>
                  <strong>Applications:</strong> 25GBASE-T, 40GBASE-T, top-of-rack connections
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Performance Comparison</h2>

              <div className="bg-slate-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Differences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cat6A Advantages</h4>
                    <ul className="list-disc pl-6 text-slate-700">
                      <li>100-meter reach for 10 Gbps</li>
                      <li>Lower cost per port</li>
                      <li>Mature technology with wide support</li>
                      <li>Available in UTP for easier installation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cat8 Advantages</h4>
                    <ul className="list-disc pl-6 text-slate-700">
                      <li>Higher speeds (25/40 Gbps)</li>
                      <li>Superior EMI protection</li>
                      <li>Future-proof for emerging applications</li>
                      <li>Ideal for high-density environments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Application Recommendations</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Choose Cat6A When:</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>You need 10 Gbps over distances up to 100 meters</li>
                <li>Budget is a primary concern</li>
                <li>Installing horizontal cabling in office environments</li>
                <li>Working with existing 10GBASE-T infrastructure</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Choose Cat8 When:</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>You need 25 Gbps or 40 Gbps speeds</li>
                <li>Working within 30-meter distance limitations</li>
                <li>Connecting top-of-rack switches to servers</li>
                <li>High-density data center environments</li>
                <li>Future-proofing for emerging high-speed applications</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Installation Considerations</h2>
              <p className="text-slate-700 mb-6">
                Both cable types require careful installation practices, but Cat8's higher performance comes with
                stricter requirements for bend radius, termination quality, and EMI protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Cable?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our cabling experts can help you select the optimal solution for your specific network requirements.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Get Expert Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

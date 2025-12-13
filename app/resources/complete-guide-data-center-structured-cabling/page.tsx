import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StructuredCablingGuidePage() {
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
              The Complete Guide to Data Center Structured Cabling
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                December 15, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                12 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Wave2Wave Technical Team
              </div>
            </div>

            <Image
              src="/images/design-mode/structured-cabling.jpeg"
              alt="Data Center Structured Cabling"
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
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                Fiber Optic Systems: Technology and Products
              </h2>
              <p className="text-slate-700 mb-6">
                Fiber optics enable high-speed data transmission with minimal signal loss. Data centers use both
                multi-mode and single-mode fiber:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  Multi-mode (OM3, OM4, OM5): Ideal for short-distance, high-speed links (up to 400G in some cases).
                  Lower cost transceivers.
                </li>
                <li>
                  Single-mode (OS2): Supports long-distance transmission (up to 40 km and beyond). Required for DWDM and
                  high-density spine-leaf fabrics.
                </li>
              </ul>
              <p className="text-slate-700 mb-6">Fiber Products Include:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Pre-terminated trunk cables (MTP/MPO)</li>
                <li>Fanout/breakout cables (MTP to LC)</li>
                <li>Fiber cassettes and patch panels</li>
                <li>Rack-mounted fiber enclosures</li>
                <li>Optical transceivers (SFP+, QSFP28, QSFP-DD, OSFP)</li>
                <li>Test and inspection tools (OTDR, power meters, fiber scopes)</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                Ethernet Infrastructure: Technology and Products
              </h2>
              <p className="text-slate-700 mb-6">
                Ethernet still plays a critical role in modern networks—particularly within the rack:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Cat6A: 10Gbps up to 100m; shielded or unshielded</li>
                <li>Cat8: 25Gbps and 40Gbps up to 30m; ideal for short top-of-rack links</li>
                <li>Modular patch panels: Easy reconfiguration</li>
                <li>Field-terminated plugs: Flexible for custom lengths</li>
                <li>Color-coded patch cords: Simplifies troubleshooting and change management</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                Deployment Logistics: Kitting, Labeling, and Efficiency
              </h2>
              <p className="text-slate-700 mb-6">
                One of the most overlooked but impactful factors in structured cabling is how your components arrive at
                the job site. Efficient deployment reduces installation time, labor costs, and human error.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Why Kitting Matters</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Receive all components per rack rather than by type</li>
                <li>Eliminate time spent sorting through mixed hardware</li>
                <li>Each box labeled with rack ID, U position, server/device type</li>
                <li>Include installation map, labeling guide, and port diagram</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Best Practices</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Use color-coded cables (e.g., blue for Ethernet, yellow for SM fiber, aqua for MM fiber)</li>
                <li>Use pre-printed port labels and cable flags</li>
                <li>Include slack management and cable support accessories</li>
                <li>Deliver cassettes and trunks pre-labeled and polarity verified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Best Practices
                  </Badge>
                  <CardTitle className="text-lg">
                    <Link
                      href="/resources/fiber-optic-cable-management-best-practices"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Fiber Optic Cable Management Best Practices
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn essential techniques for managing fiber optic cables in data center environments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Technical Guide
                  </Badge>
                  <CardTitle className="text-lg">
                    <Link
                      href="/resources/cat6a-vs-cat8-high-speed-networks"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Understanding Cat6A vs Cat8 for High-Speed Networks
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Compare the performance characteristics and use cases for Cat6A and Cat8 cabling.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>Structured cabling systems for data centers follow TIA-568 standards for horizontal and backbone cabling design. Proper cable management, pathway planning, and adherence to bend radius specifications ensure optimal performance for Cat6A and fiber optic infrastructure. Wave2Wave provides factory-terminated structured cabling assemblies with pre-labeled cables, reducing installation time 60-70% vs field termination.</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Structured Cabling Project?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our structured cabling experts can help you design and implement a solution that meets your specific
            requirements.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Get Expert Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

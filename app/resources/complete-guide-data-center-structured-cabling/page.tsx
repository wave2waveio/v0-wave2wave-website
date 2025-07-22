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
              src="/placeholder.svg?height=400&width=800&text=Data+Center+Structured+Cabling"
              alt="Data Center Structured Cabling"
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
                Structured cabling forms the backbone of modern data center infrastructure. This comprehensive guide
                covers everything from planning and design to implementation and maintenance of structured cabling
                systems that support today's high-performance computing environments.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What is Structured Cabling?</h2>
              <p className="text-slate-700 mb-6">
                Structured cabling is a standardized approach to cabling infrastructure that consists of a number of
                standardized smaller elements called subsystems. It provides a comprehensive telecommunications
                infrastructure that serves a wide range of uses, such as providing telephone service or transmitting
                data through a computer network.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                Key Components of Data Center Structured Cabling
              </h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Horizontal Cabling</h3>
              <p className="text-slate-700 mb-4">
                The horizontal cabling subsystem extends from the telecommunications room to the individual workstation
                outlets. In data centers, this typically includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Copper cables (Cat6, Cat6A, Cat8)</li>
                <li>Fiber optic cables (single-mode and multi-mode)</li>
                <li>Patch panels and cross-connects</li>
                <li>Outlet boxes and faceplates</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Backbone Cabling</h3>
              <p className="text-slate-700 mb-4">
                Backbone cabling provides interconnection between telecommunications rooms, equipment rooms, and
                entrance facilities. This includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>High-fiber-count cables</li>
                <li>Main distribution frames (MDF)</li>
                <li>Intermediate distribution frames (IDF)</li>
                <li>Vertical cable management systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Work Area Components</h3>
              <p className="text-slate-700 mb-6">
                Work area components connect end-user equipment to the horizontal cabling system, including patch cords,
                adapters, and outlet boxes.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Planning Your Structured Cabling System</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Assessment and Requirements Gathering</h3>
              <p className="text-slate-700 mb-4">
                Before designing your structured cabling system, conduct a thorough assessment of your current and
                future needs:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Current bandwidth requirements</li>
                <li>Projected growth over 5-10 years</li>
                <li>Types of applications and services</li>
                <li>Physical space constraints</li>
                <li>Environmental considerations</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Design Considerations</h3>
              <p className="text-slate-700 mb-4">Key design factors include:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Scalability:</strong> Design for future expansion and technology upgrades
                </li>
                <li>
                  <strong>Redundancy:</strong> Implement backup paths for critical connections
                </li>
                <li>
                  <strong>Cable Management:</strong> Plan for proper organization and accessibility
                </li>
                <li>
                  <strong>Standards Compliance:</strong> Follow TIA/EIA and ISO/IEC standards
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Best Practices for Implementation</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Cable Selection</h3>
              <p className="text-slate-700 mb-4">Choose the right cable types based on your specific requirements:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Cat6A:</strong> Supports 10 Gigabit Ethernet up to 100 meters
                </li>
                <li>
                  <strong>Cat8:</strong> Supports 25/40 Gigabit Ethernet for shorter distances
                </li>
                <li>
                  <strong>Single-mode Fiber:</strong> Long-distance, high-bandwidth applications
                </li>
                <li>
                  <strong>Multi-mode Fiber:</strong> Shorter distances, cost-effective for many applications
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Installation Guidelines</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Maintain proper bend radius for all cables</li>
                <li>Use appropriate cable management systems</li>
                <li>Label all cables and connections clearly</li>
                <li>Test all connections before final acceptance</li>
                <li>Document the entire installation thoroughly</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Testing and Certification</h2>
              <p className="text-slate-700 mb-4">
                Proper testing ensures your structured cabling system meets performance specifications:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Copper Testing:</strong> Use certified cable testers to verify performance parameters
                </li>
                <li>
                  <strong>Fiber Testing:</strong> Perform OTDR testing and insertion loss measurements
                </li>
                <li>
                  <strong>Documentation:</strong> Maintain detailed test results and certification reports
                </li>
                <li>
                  <strong>Acceptance Testing:</strong> Verify system performance meets design specifications
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Maintenance and Lifecycle Management</h2>
              <p className="text-slate-700 mb-4">Ongoing maintenance ensures optimal performance and longevity:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Regular visual inspections of cable infrastructure</li>
                <li>Periodic performance testing and monitoring</li>
                <li>Proper change management procedures</li>
                <li>Planning for technology refresh cycles</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Conclusion</h2>
              <p className="text-slate-700 mb-6">
                A well-designed structured cabling system is essential for supporting current and future data center
                operations. By following industry standards, implementing best practices, and working with experienced
                professionals, you can create a robust infrastructure that supports your organization's growth and
                technology evolution.
              </p>
              <p className="text-slate-700 mb-6">
                At Wave2Wave.io, we specialize in designing and implementing custom structured cabling solutions that
                meet the unique requirements of modern data centers. Our team of experts can help you plan, design, and
                deploy a structured cabling system that provides the performance, scalability, and reliability your
                organization needs.
              </p>
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

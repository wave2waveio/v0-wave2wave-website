import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FiberOpticCableManagementPage() {
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

            <Badge className="mb-4">Best Practices</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Fiber Optic Cable Management Best Practices
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                January 10, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />6 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Wave2Wave Technical Team
              </div>
            </div>

            <Image
              src="/images/design-mode/fiber-cable.jpeg"
              alt="Professional fiber optic cable management in data center rack showing color-coded cables with proper bundling and routing"
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
                Proper fiber optic cable management is essential for maintaining performance, reducing signal loss, and
                ensuring long-term reliability in high-density environments like data centers and enterprise networks.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Technical Best Practices</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Maintain Minimum Bend Radius</h3>
              <p className="text-slate-700 mb-4">
                Exceeding the minimum bend radius can cause signal loss and permanent damage to fiber optic cables:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Single-mode fiber:</strong> 10x diameter under load, 20x when static
                </li>
                <li>
                  <strong>Multi-mode fiber:</strong> 10x diameter under load, 15x when static
                </li>
                <li>Use radius guides, trays, and slack spools to maintain compliant paths</li>
                <li>Avoid sharp corners or pulling against fixed objects</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Control Pulling Tension</h3>
              <p className="text-slate-700 mb-4">
                Excessive pulling tension can damage fiber cores and degrade performance:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Follow manufacturer pulling tension ratings (typically 600N for distribution cables)</li>
                <li>Use swivel pulling grips and lubricants for long conduit runs</li>
                <li>Maintain smooth, steady pulls to reduce microbending</li>
                <li>Never exceed 1,500N pulling tension for standard indoor cables</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Route and Isolate</h3>
              <p className="text-slate-700 mb-4">Proper routing prevents interference and physical damage:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Use dedicated fiber trays or ducts separate from copper or power cables</li>
                <li>Route horizontally and vertically with consistent standards</li>
                <li>Maintain minimum 6-inch separation from high-voltage power sources</li>
                <li>Use plenum-rated cables in air handling spaces</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Modular and High-Density Hardware</h3>
              <p className="text-slate-700 mb-4">Modern fiber management requires scalable, high-density solutions:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Deploy cassettes (LC, MTP/MPO) with modular patch panels</li>
                <li>Use rack-mounted enclosures with front/rear access</li>
                <li>Allow room for adds/moves/changes without disrupting existing fibers</li>
                <li>Implement color-coding standards for different fiber types and applications</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Clean and Inspect Connectors</h3>
              <p className="text-slate-700 mb-4">
                Contaminated connectors are the leading cause of fiber network problems:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Enforce a "clean before connect" policy for all connections</li>
                <li>Use dry-clean pens, inspection scopes, and lint-free wipes</li>
                <li>Terminate in clean environments and protect connectors with dust caps</li>
                <li>Inspect end-faces with 400x magnification before making connections</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Operational Best Practices</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Pre-Design Cable Paths</h3>
              <p className="text-slate-700 mb-4">
                Proper planning prevents installation problems and future limitations:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Plan with CAD or DCIM tools for route clarity and future capacity</li>
                <li>Avoid overfilling trays (50% fill ratio maximum recommended)</li>
                <li>Document all pathways, lengths, and ports in detail</li>
                <li>Consider future expansion needs in initial design</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Bundle by Function</h3>
              <p className="text-slate-700 mb-4">Organized bundling improves maintainability and reduces errors:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Use hook-and-loop fasteners—never zip ties which can cause stress</li>
                <li>Bundle cables by application (intra-rack, inter-rack, uplink)</li>
                <li>Label both ends with port/rack/zone identifiers and color codes</li>
                <li>Maintain consistent bundle sizes (typically 12-24 fibers per bundle)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Slack Management and Accessibility</h3>
              <p className="text-slate-700 mb-4">Proper slack management enables maintenance and future changes:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Leave 1–2 meters of slack per connection point for service loops</li>
                <li>Use dedicated slack trays or boxes—do not coil inside enclosures</li>
                <li>Keep patch cords long enough for service loops but short enough to avoid clutter</li>
                <li>Ensure all connections remain accessible for testing and maintenance</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Schedule Regular Inspections</h3>
              <p className="text-slate-700 mb-4">Proactive maintenance prevents problems and extends system life:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Create quarterly cable audits for cleaning, tension checks, and patch integrity</li>
                <li>Use DCIM systems to reconcile physical layout vs. logical records</li>
                <li>Log MACs (Moves/Adds/Changes) to keep infrastructure documentation accurate</li>
                <li>Perform optical loss testing annually or after any physical changes</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                3. Business Benefits of Strong Cable Management
              </h2>
              <p className="text-slate-700 mb-4">Proper fiber management delivers measurable business value:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Accelerated Installations:</strong> Mapped, labeled paths speed up technician work by 40%
                </li>
                <li>
                  <strong>Downtime Avoidance:</strong> Prevents patching errors and supports network resilience
                </li>
                <li>
                  <strong>Cost Control:</strong> Reduces labor costs and prevents premature component replacement
                </li>
                <li>
                  <strong>Audit and Compliance Readiness:</strong> Supports documentation and inspection requirements
                </li>
                <li>
                  <strong>Strategic Scalability:</strong> Enables growth with modular pathways and high-density designs
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip</h3>
                <p className="text-blue-800">
                  Implement a comprehensive labeling system from day one. Use machine-printed labels that include rack
                  location, port numbers, and destination information. This small investment in organization pays
                  dividends during troubleshooting and maintenance activities.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Conclusion</h2>
              <p className="text-slate-700 mb-6">
                Cable management is foundational—not optional—for reliable network operations. With proper planning,
                execution, and maintenance, organizations can minimize downtime, improve serviceability, and enable
                long-term scalability.
              </p>
              <p className="text-slate-700 mb-6">
                At <strong>Wave2Wave.io</strong>, we help data centers and network operators deploy fiber systems
                engineered for growth, clarity, and resilience. From pre-labeled kits to DCIM-integrated layout
                validation, we bring structure to every strand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Fiber Infrastructure Design?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let our specialists help you implement structured, scalable fiber systems tailored to your operation.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

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
              src="/images/resources/fiber-cable-management.jpg"
              alt="Fiber Optic Cable Management"
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
                Proper fiber optic cable management is essential for maintaining performance, reducing signal loss, and ensuring long-term reliability in high-density environments like data centers and enterprise networks.
              </p>

              <h2>1. Technical Best Practices</h2>
              <h3>a. Maintain Minimum Bend Radius</h3>
              <ul>
                <li><strong>Single-mode fiber:</strong> 10x diameter under load, 20x when static</li>
                <li><strong>Multi-mode fiber:</strong> 10x diameter under load, 15x when static</li>
                <li>Use radius guides, trays, and slack spools to maintain compliant paths</li>
                <li>Avoid sharp corners or pulling against fixed objects</li>
              </ul>

              <h3>b. Control Pulling Tension</h3>
              <ul>
                <li>Follow manufacturer pulling tension ratings</li>
                <li>Use swivel pulling grips and lubricants for long conduit runs</li>
                <li>Maintain smooth, steady pulls to reduce microbending</li>
              </ul>

              <h3>c. Route and Isolate</h3>
              <ul>
                <li>Use dedicated fiber trays or ducts separate from copper or power</li>
                <li>Route horizontally and vertically with consistent standards</li>
                <li>Avoid EMI by distancing fiber from high-voltage sources</li>
              </ul>

              <h3>d. Modular and High-Density Hardware</h3>
              <ul>
                <li>Deploy cassettes (LC, MTP/MPO) with modular patch panels</li>
                <li>Use rack-mounted enclosures with front/rear access</li>
                <li>Allow room for adds/moves/changes without disrupting existing fibers</li>
              </ul>

              <h3>e. Clean and Inspect Connectors</h3>
              <ul>
                <li>Enforce a “clean before connect” policy</li>
                <li>Use dry-clean pens, inspection scopes, and lint-free wipes</li>
                <li>Terminate in clean environments and protect connectors with dust caps</li>
              </ul>

              <h2>2. Operational Best Practices</h2>
              <h3>a. Pre-Design Cable Paths</h3>
              <ul>
                <li>Plan with CAD or DCIM tools for route clarity and future capacity</li>
                <li>Avoid overfilling trays (50% fill ratio max)</li>
                <li>Document all pathways, lengths, and ports</li>
              </ul>

              <h3>b. Bundle by Function</h3>
              <ul>
                <li>Use hook-and-loop fasteners—not zip ties</li>
                <li>Bundle cables by application (intra-rack, inter-rack, uplink)</li>
                <li>Label both ends with port/rack/zone identifiers and color codes</li>
              </ul>

              <h3>c. Slack Management and Accessibility</h3>
              <ul>
                <li>Leave 1–2 meters of slack per connection point</li>
                <li>Use trays or slack boxes—do not coil inside enclosures</li>
                <li>Keep patch cords long enough for service loops but short enough to avoid clutter</li>
              </ul>

              <h3>d. Schedule Regular Inspections</h3>
              <ul>
                <li>Create quarterly cable audits for cleaning, tension checks, and patch integrity</li>
                <li>Use DCIM systems to reconcile physical layout vs. logical records</li>
                <li>Log MACs (Moves/Adds/Changes) to keep infrastructure accurate</li>
              </ul>

              <h2>3. Business Benefits of Strong Cable Management</h2>
              <ul>
                <li><strong>Accelerated Installations:</strong> Mapped, labeled paths speed up technician work</li>
                <li><strong>Downtime Avoidance:</strong> Prevents patching errors and supports resilience</li>
                <li><strong>Cost Control:</strong> Reduces labor and premature part replacement</li>
                <li><strong>Audit and Compliance Readiness:</strong> Supports documentation and inspection requirements</li>
                <li><strong>Strategic Scalability:</strong> Enables growth with modular pathways and dense designs</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Cable management is foundational—not optional—for reliable network operations. With proper planning, execution, and maintenance, organizations can minimize downtime, improve serviceability, and enable long-term scale.
              </p>
              <p>
                At <strong>Wave2Wave.io</strong>, we help data centers and network operators deploy fiber systems engineered for growth, clarity, and resilience. From pre-labeled kits to DCIM-integrated layout validation, we bring structure to every strand.
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

import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EdgeComputingInfrastructurePage() {
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

            <Badge className="mb-4">Industry Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Edge Computing Infrastructure Requirements
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                November 18, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />9 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Wave2Wave Infrastructure Team
              </div>
            </div>

            <Image
              src="/placeholder.svg?height=400&width=800&text=Edge+Computing+Infrastructure"
              alt="Edge Computing Infrastructure"
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
                Edge computing brings compute and storage closer to where data is generated—whether on the factory floor, inside a retail store, or at a telecom tower. This proximity reduces latency and enables faster decision-making. However, deploying edge infrastructure presents unique operational, environmental, and logistical challenges. Structured cabling providers like Wave2Wave play a vital role in making these deployments scalable, resilient, and easy to maintain.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What Is Edge Computing?</h2>
              <p className="text-slate-700 mb-6">
                Edge computing decentralizes IT infrastructure by placing computing resources closer to users and endpoints. This approach reduces data transit times, supports real-time applications like computer vision or robotics, and offloads traffic from centralized data centers. It's increasingly critical for industries leveraging IoT, 5G, and AI.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Top Infrastructure Challenges</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Constrained Footprints</h3>
              <p className="text-slate-700 mb-4">
                Edge locations often lack the space of traditional data centers. This demands:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Compact, wall-mounted or rack-mounted enclosures</li>
                <li>Pre-terminated fiber/copper cable kits to reduce field work</li>
                <li>High-density patch panels with modular MTP/MPO cassettes</li>
                <li>Labeling schemes for rapid identification and MAC traceability</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Challenging Environments</h3>
              <p className="text-slate-700 mb-4">
                Edge deployments are often exposed to conditions that traditional data centers are not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Ruggedized cabling to withstand vibration and moisture</li>
                <li>IP-rated enclosures for dust and weather resistance</li>
                <li>Passive cooling and airflow management in sealed spaces</li>
                <li>Temperature-tolerant components with low power draw</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Remote and Unattended Sites</h3>
              <p className="text-slate-700 mb-4">
                Most edge locations lack on-site staff, requiring resilient and autonomous systems:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Color-coded cables and labels for easy remote troubleshooting</li>
                <li>DCIM integration for asset tracking and environmental alerts</li>
                <li>Standardized cabling layouts for predictable service procedures</li>
                <li>Secure access controls, including physical lockout/tagout options</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Best Practices for Edge Builds</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Design for Modularity</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Use pre-engineered structured cabling kits based on site specs</li>
                <li>Build repeatable node layouts that can be rapidly deployed</li>
                <li>Include labeled service loops for re-termination and moves</li>
                <li>Minimize field terminations—focus on plug-and-play connections</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Optimize for Logistics</h3>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Ship materials in labeled kits by rack or cabinet</li>
                <li>Include rack diagrams, patch schedules, and BOM with shipment</li>
                <li>Coordinate just-in-time delivery aligned with install teams</li>
                <li>Pre-validate component fit with digital twin modeling</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Future-Ready Infrastructure</h2>
              <p className="text-slate-700 mb-6">
                As edge adoption accelerates, structured cabling must keep pace. Fiber counts will rise. Power and signal paths will converge. AI and analytics at the edge will require fault-tolerant connectivity. Providers like Wave2Wave enable this evolution with smart, scalable, and high-performance cabling systems validated against your digital models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning an Edge Computing Deployment?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our edge infrastructure specialists can help you design solutions that meet the unique challenges of edge computing—from rugged cabling to pre-labeled kits.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Get Expert Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

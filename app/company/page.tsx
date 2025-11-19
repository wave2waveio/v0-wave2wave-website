import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { HeroSection } from "@/components/HeroSection"
import { CTASection } from "@/components/CTASection"
import { Target, Award, Users, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Company | Wave2Wave – About Our Data Center Cabling Solutions",
  description:
    "Learn about Wave2Wave's mission to simplify networking infrastructure. With over 15 years in business and 200+ projects completed, we transform cabling from commodity to strategic asset.",
}

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="About Wave2Wave"
        subtitle="Pioneering the future of data center infrastructure with custom engineering, precision logistics, and digital twin design expertise."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Cabling, Power, Connectivity - Simplified</h2>

            <div className="space-y-6 text-lg text-slate-700">
              <p>
                For years, cabling was treated as an afterthought—just commodity cables. But as networks scaled, AI
                workloads exploded, and user and developer expectations surged, the pressure on IT teams, engineers, and
                data center managers intensified. Standing up new data centers, reconfiguring networks, maximizing
                uptime—and doing it all quickly—made one thing clear: the answer wasn't cheap cables sold by the foot.
              </p>
              <p>
                At Wave2Wave, we saw what others overlooked: <strong>cables aren't just part of the network; they are the
                network</strong>. Every server, switch, and signal depends on the integrity of that physical layer. Today,
                success means deploying infrastructure faster, with higher quality, and with less friction.
              </p>
              <p>
                Whether it's building a new data center, standing up a rack, adding a server, reconfiguring a switch, or
                swapping out a PDU, our customers need more than a parts supplier—they need a trusted equipment provider
                and supply chain partner. That realization reshaped how we build and deliver.
              </p>
              <p>
                Wave2Wave designs cabling systems as strategic assets—pre-labeled, precision-assembled, and purpose-built
                to accelerate deployment, improve reliability, and simplify scaling.
              </p>
              <p className="text-xl font-semibold text-primary">
                Wave2Wave doesn't just sell cables. We deliver infrastructure you can trust—because the network begins
                where the cable does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>Our Mission & Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
              From commodity vendor to supply chain partner - we're transforming how data centers think about cabling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Customer Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Commitment to innovative products and logistics that make customers more successful
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every product undergoes thorough quality assurance testing. 100% satisfaction guarantee.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Delivering new products and services that solve real customer problems
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Simplify</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our goal: Networking, Power and Connectivity - Simplified
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 bg-white" id="quality">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>By the Numbers</h2>
            <p className="text-xl text-slate-600">Proven track record of excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg font-semibold mb-1">Years in Business</div>
              <div className="text-slate-600">Serving the industry</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg font-semibold mb-1">Projects Completed</div>
              <div className="text-slate-600">Successful deployments</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">30+</div>
              <div className="text-lg font-semibold mb-1">Enterprise Clients</div>
              <div className="text-slate-600">Trusted partnerships</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold mb-1">Quality Tested</div>
              <div className="text-slate-600">Every product, every time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Quality & Certifications</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl mb-4">Industry Certifications:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• TIA-568 compliant structured cabling</li>
                  <li>• IEC 61754 fiber optic connectors</li>
                  <li>• UL/cUL listed power cables</li>
                  <li>• RoHS and REACH certified</li>
                  <li>• ISO 9001 quality management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl mb-4">Testing Standards:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• 100% factory testing before shipment</li>
                  <li>• Fluke certification for copper</li>
                  <li>• Insertion loss testing for fiber</li>
                  <li>• TDR verification for all cables</li>
                  <li>• Test reports included with orders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work with Wave2Wave?"
        subtitle="Let's discuss how our expertise and commitment to excellence can help accelerate your next infrastructure project."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

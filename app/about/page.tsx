import type { Metadata } from "next"
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Wave2Wave – Your Data Center Cabling & Infrastructure Partner",
  description:
    "Learn about Wave2Wave's mission to simplify networking infrastructure. With over 15 years in business and 200+ projects completed, we transform cabling from commodity to strategic asset. Our story, values (quality, innovation, customer success), and commitment to custom-engineered solutions show why we're a trusted data center cabling partner. Meet the team that's powering tomorrow's networks.",
  openGraph: {
    title: "About Wave2Wave – Your Data Center Cabling & Infrastructure Partner",
    description:
      "Learn about Wave2Wave's mission to simplify networking infrastructure. With over 15 years in business and 200+ projects completed, we transform cabling from commodity to strategic asset. Our story, values (quality, innovation, customer success), and commitment to custom-engineered solutions show why we're a trusted data center cabling partner. Meet the team that's powering tomorrow's networks.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            {/* Logo */}
            <Image
              src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/wave2wave-logo.png"
              alt="Wave2Wave.io"
              width={300}
              height={90}
              className="h-16 w-auto mx-auto mb-6 brightness-0 invert"
              unoptimized
            />

            {/* Heading */}
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wave2Wave.io</h1>*/}

            {/* Sub-heading */}
            <p className="text-xl mb-8 text-slate-200">
              Pioneering the future of networking and data center infrastructure with custom engineering, precision
              logistics, and digital twin design expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Wave2Wave.io Story: Cabling, Power, Connectivity - Simplified
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                For years, cabling was treated as an afterthought—just commodity cables. But as networks scaled, AI
                workloads exploded, and user and developer expectations surged, the pressure on IT teams, engineers, and
                data center managers intensified. Standing up new data centers, reconfiguring networks, maximizing
                uptime—and doing it all quickly—made one thing clear: the answer wasn't cheap cables sold by the foot.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                At Wave2Wave.io, we saw what others overlooked: cables aren't just part of the network; they are the
                network. Every server, switch, and signal depends on the integrity of that physical layer. Today,
                success means deploying infrastructure faster, with higher quality, and with less friction.
              </p>
              <p className="text-lg text-slate-600">
                Whether it's building a new data center, standing up a rack, adding a server, reconfiguring a switch, or
                swapping out a PDU, our customers need more than a parts supplier—they need a trusted equipment provider
                and supply chain partner. That realization reshaped how we build and deliver. Wave2Wave.io designs
                cabling systems as strategic assets—pre-labeled, precision-assembled, and purpose-built to accelerate
                deployment, improve reliability, and simplify scaling.
              </p>
              <p className="text-lg text-slate-600">
                Wave2Wave.io doesn't just sell cables. We deliver infrastructure you can trust—because the network
                begins where the cable does.
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg p-8 text-center">
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/our-team.png"
                alt="Wave2Wave.io Team Working in Data Center"
                width={500}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
                unoptimized
              />
              <p className="text-slate-600 text-sm">
                Our team working with structured cabling infrastructure in a modern data center environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cabling & Connectivity – From Commodity Vendor to Supply Chain Partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Meeting Customer Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Commitment to innovative products and logistics to making customers more successful
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
                  Every product is has a thorough quality assurance test. 100% guarantee
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
                <CardDescription>Delivering new products that solve customer problems</CardDescription>
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
                <CardDescription>Our goal: Networking, Power and Connectivity - Simplified</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-slate-600">Key company statistics and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-lg font-semibold text-slate-900">Years in Business</div>
              <div className="text-slate-600">Serving the industry</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-lg font-semibold text-slate-900">Projects Completed</div>
              <div className="text-slate-600">Successful deployments</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">30+</div>
              <div className="text-lg font-semibold text-slate-900">Enterprise Clients</div>
              <div className="text-slate-600">Trusted partnerships</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-slate-900">Customer Satisfaction</div>
              <div className="text-slate-600">Quality guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Wave2Wave.io?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our expertise and commitment to excellence can help accelerate your next infrastructure
            project.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

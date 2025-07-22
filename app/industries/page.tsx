import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl mb-8 text-slate-200">
              Trusted by leading organizations across critical infrastructure sectors, delivering custom solutions for
              diverse industry needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Industry Expertise</h2>
            <p className="text-xl text-slate-600">
              Specialized infrastructure solutions tailored to the unique requirements of each industry sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise Data Centers & Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Mission-critical infrastructure for enterprise computing environments</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Commercial Data Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Scalable infrastructure solutions for colocation and cloud service providers
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Broadband Operators (FTTH)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Fiber-to-the-home and telecommunications infrastructure solutions</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise IT Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Corporate network infrastructure and connectivity solutions</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">System Integrators & VARs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Custom fulfillment and design solutions for system integrators and value-added resellers
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-slate-600">
              Deep expertise and tailored approaches for each sector's unique challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Enterprise & Commercial Data Centers</h3>
                <p className="text-slate-600 mb-4">
                  From hyperscale facilities to edge computing deployments, we deliver the precision infrastructure that
                  powers modern digital operations.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• High-density fiber and copper cabling systems</li>
                  <li>• Custom PDU and power distribution solutions</li>
                  <li>• Rack-optimized kitting and logistics</li>
                  <li>• DCIM integration and digital twin services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Telecommunications & Broadband</h3>
                <p className="text-slate-600 mb-4">
                  Supporting the backbone of connectivity with specialized fiber optic solutions and network
                  infrastructure for service providers.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• FTTH and fiber distribution networks</li>
                  <li>• Central office and headend infrastructure</li>
                  <li>• Outdoor and harsh environment cabling</li>
                  <li>• Network expansion and upgrade projects</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">System Integrators & VARs</h3>
                <p className="text-slate-600 mb-4">
                  Empowering partners with custom fulfillment, design services, and logistics support to accelerate
                  project delivery.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Custom design and engineering services</li>
                  <li>• Project-specific kitting and packaging</li>
                  <li>• Drop-ship and logistics coordination</li>
                  <li>• Technical support and consultation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Enterprise IT Departments</h3>
                <p className="text-slate-600 mb-4">
                  Streamlining corporate network infrastructure with reliable, scalable solutions for campus and
                  facility deployments.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Campus and building network infrastructure</li>
                  <li>• Structured cabling and connectivity</li>
                  <li>• Network refresh and modernization</li>
                  <li>• Standardized deployment packages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-slate-600">
              Our industry expertise delivers measurable value for organizations of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Faster Deployments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-800">
                  Advanced kitting and precision logistics reduce installation time by up to 40% across all industry
                  sectors
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">Reduced Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-800">
                  Custom engineering and quality assurance minimize deployment errors and rework across complex projects
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle className="text-xl text-purple-900">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-800">
                  Integrated solutions and single-partner approach deliver significant cost savings and operational
                  efficiency
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry Infrastructure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how Wave2Wave.io's industry expertise can accelerate your next infrastructure project with
            custom solutions designed for your sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
              <Link href="/contact">Discuss Your Industry Needs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Download Industry Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

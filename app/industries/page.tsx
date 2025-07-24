import Link from "next/link"
import { CheckCircle, ArrowRight, Building2, Wifi, Users, Laptop, Server } from "lucide-react"

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
              Specialized infrastructure solutions tailored to the unique requirements of each industry sector we serve
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-full">Enterprise Data Centers</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Commercial Data Centers</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Telecommunications</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">System Integrators</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Enterprise IT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-slate-600">
              Deep expertise and tailored approaches for each sector's unique challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Enterprise Data Centers</h3>
                  </div>
                  <p className="text-slate-600">
                    From hyperscale facilities to edge computing deployments, we deliver the precision infrastructure
                    that powers modern digital operations.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>High-density fiber and copper cabling systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Custom PDU and power distribution solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rack-optimized kitting and logistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>DCIM integration and digital twin services</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-2">Typical Project Scale:</p>
                    <p className="text-sm font-medium text-slate-700">1 to 20 racks; Lab & On-Prem Data centers</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Server className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Commercial Data Centers</h3>
                  </div>
                  <p className="text-slate-600">
                    Scalable infrastructure solutions for colocation providers, cloud service providers, and managed
                    hosting facilities requiring high-density, multi-tenant environments.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Multi-tenant cabling and connectivity solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>High-density fiber distribution systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Scalable power and cooling infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Modular deployment and expansion solutions</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-2">Typical Project Scale:</p>
                    <p className="text-sm font-medium text-slate-700">50+ racks; Colocation & cloud facilities</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Wifi className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Telecommunications & Broadband</h3>
                  </div>
                  <p className="text-slate-600">
                    Supporting the backbone of connectivity with specialized fiber optic solutions and network
                    infrastructure for service providers.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>FTTH and fiber distribution networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Central office and headend infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Outdoor and harsh environment cabling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Network expansion and upgrade projects</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-2">Specialization:</p>
                    <p className="text-sm font-medium text-slate-700">
                      High-fiber-count assemblies, outdoor-rated solutions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold">System Integrators & VARs</h3>
                  </div>
                  <p className="text-slate-600">
                    Empowering partners with custom fulfillment, design services, and logistics support to accelerate
                    project delivery.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Custom design and engineering services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Project-specific kitting and packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Drop-ship and logistics coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Technical support and consultation</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-2">Partnership Benefits:</p>
                    <p className="text-sm font-medium text-slate-700">White-label solutions, competitive pricing</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Laptop className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Enterprise IT Departments</h3>
                  </div>
                  <p className="text-slate-600">
                    Streamlining corporate network infrastructure with reliable, scalable solutions for campus and
                    facility deployments.
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Campus and building network infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Structured cabling and connectivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Network refresh and modernization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Standardized deployment packages</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-2">Common Applications:</p>
                    <p className="text-sm font-medium text-slate-700">
                      Office buildings, manufacturing facilities, campuses
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-slate-600">
              Our industry expertise delivers measurable value for organizations of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <CardTitle className="text-xl text-blue-900">Faster Deployments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-800">
                  Advanced kitting and precision logistics reduce installation time across all industry sectors
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <CardTitle className="text-xl text-green-900">Fewer Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-800">
                  Custom engineering and quality assurance minimize deployment errors and rework across complex projects
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-purple-600 mb-2">$2M+</div>
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
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
              <Link href="/contact">
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

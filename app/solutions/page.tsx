import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Infrastructure Solutions</h1>
            <p className="text-xl mb-8 text-slate-200">
              From custom structured cabling to advanced kitting and DCIM services, we deliver end-to-end solutions that
              accelerate deployment and reduce risk.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Structured Cabling */}
            <div className="space-y-6">
              <div className="w-full h-48 mb-4">
                <Image
                  src="/images/solutions/structured-cabling-hardware.jpeg"
                  alt="Structured Cabling & Hardware"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Structured Cabling & Hardware</h2>
                <p className="text-slate-600 mb-6">
                  Custom-engineered cabling systems, power distribution, and connectivity hardware designed to your
                  exact specifications and site requirements.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">What We Provide:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Copper and fiber optic cabling systems (w-Ignite brand fiber)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom patch panels, racks, and enclosures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Power distribution units (PDUs) and power management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pre-terminated harnesses and cable assemblies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cable management hardware and accessories</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Connectors, jacks, outlets, and faceplates</span>
                    </li>
                  </ul>
                </div>

                <Button className="mt-6" asChild>
                  <Link href="/contact">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Kitting & Logistics */}
            <div className="space-y-6">
              <div className="w-full h-48 mb-4">
                <Image
                  src="/images/solutions/advanced-kitting-logistics.jpeg"
                  alt="Advanced Kitting & Logistics"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Advanced Kitting & Logistics</h2>
                <p className="text-slate-600 mb-6">
                  Precision-organized hardware and cabling kits that dramatically reduce installation time, costs, and
                  the risk of deployment errors.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Benefits:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Rack-by-rack organization of all components</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Server-specific hardware and cable kits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduced on-site preparation time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lower installation costs and faster deployment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Minimized risk of installation errors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete project logistics coordination</span>
                    </li>
                  </ul>
                </div>

                <Button className="mt-6" asChild>
                  <Link href="/contact">
                    Learn About Kitting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* DCIM Services */}
            <div className="space-y-6">
              <div className="w-full h-48 mb-4">
                <Image
                  src="/images/solutions/dcim-digital-twin.jpeg"
                  alt="DCIM & Digital Twin Services"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">DCIM & Digital Twin Services</h2>
                <p className="text-slate-600 mb-6">
                  Comprehensive data center infrastructure management consulting, digital twin design, and ongoing
                  managed services for optimal performance.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Service Offerings:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>DCIM consulting and strategy development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital twin design and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ongoing managed DCIM services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Infrastructure visualization and planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capacity planning and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital twin maintenance and updates</span>
                    </li>
                  </ul>
                </div>

                <Button className="mt-6" asChild>
                  <Link href="/contact">
                    Explore DCIM Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* OEM Structured Cabling */}
            <div className="space-y-6">
              <div className="w-full h-48 mb-4">
                <Image
                  src="/images/solutions/oem-solutions.png"
                  alt="High-performance server with custom fiber optic interconnects and structured cabling in data center rack"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">HPC, Telecom & OEM Structured Cabling</h2>
                <p className="text-slate-600 mb-6">
                  Custom-engineered structured cabling & optical interconnect solutions optimized for complex hardware
                  platforms—from GPU servers to next-generation data appliances.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Key Benefits:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Custom Interconnect Solutions – fiber optic and copper assemblies built to your hardware specs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Design & Engineering Services – consulting to optimize signal integrity and mechanical fit
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Kitting & Supply Chain – Pre-configured kits and JIT delivery aligned to production workflows
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Scalable Manufacturing – Flexible production to support prototyping through high-volume ramp
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Quality & Compliance Assurance – All assemblies tested to meet industry standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Dedicated Program Support – Single point of contact with program management and lifecycle change
                        control
                      </span>
                    </li>
                  </ul>
                </div>

                <Button className="mt-6" asChild>
                  <Link href="/contact">
                    Discuss OEM Partnership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Integrated Solutions for Maximum Impact</h2>
            <p className="text-xl text-slate-600 mb-8">
              Wave2Wave.io's solutions work together seamlessly to deliver a complete infrastructure deployment
              experience that's faster, more reliable, and cost-effective.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Design Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    DCIM digital twins inform custom cabling designs and kitting specifications
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Rigorous testing and validation across all components and assemblies
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Single Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    One point of contact with Wave2Wave.io for design, manufacturing, kitting, and support
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
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Next Deployment?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how Wave2Wave.io's integrated solutions can simplify your infrastructure project and reduce
            time to deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

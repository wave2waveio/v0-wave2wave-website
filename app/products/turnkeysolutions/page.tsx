import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Download, Phone, Mail, Settings, Users, Clock, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Turnkey Solutions - Wave2Wave",
  description: "Complete turnkey solutions for data center infrastructure, from design to deployment.",
  keywords: "turnkey solutions, data center, infrastructure, complete solutions, Wave2Wave",
}

export default function TurnkeySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Turnkey Solutions</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Complete
                <span className="text-purple-600"> Turnkey Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                End-to-end turnkey solutions that take your project from concept to completion. We handle everything so
                you can focus on your core business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Solution Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/turnkey-data-center-solution-deployment.jpg"
                alt="Turnkey Solutions"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Turnkey Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Design",
                description: "We analyze your requirements and create a comprehensive solution design.",
                icon: <Target className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Planning & Engineering",
                description: "Detailed project planning with engineering specifications and timelines.",
                icon: <Settings className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Implementation",
                description: "Professional installation and configuration by certified technicians.",
                icon: <Users className="h-8 w-8" />,
              },
              {
                step: "04",
                title: "Testing & Handover",
                description: "Comprehensive testing and training to ensure optimal performance.",
                icon: <Clock className="h-8 w-8" />,
              },
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow relative">
                <CardHeader>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mt-4 text-purple-600">
                    {process.icon}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-gray-600">Everything you need for a successful infrastructure deployment</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  "Site survey and assessment",
                  "Custom solution design and engineering",
                  "Project management and coordination",
                  "Equipment procurement and logistics",
                  "Professional installation and configuration",
                  "Testing, commissioning, and validation",
                  "Documentation and training",
                  "Ongoing support and maintenance",
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Data Center Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Complete data center infrastructure including structured cabling, power distribution, cooling
                    systems, and monitoring.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Network Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    End-to-end network solutions from backbone to edge, including fiber optic and copper cabling
                    systems.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Custom Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Tailored solutions that integrate with your existing infrastructure and business requirements.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Turnkey Solutions?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⏱️</span>
                </div>
                <CardTitle>Faster Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Streamlined processes and expert project management reduce deployment time by up to 40%.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <CardTitle>Cost Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Single point of contact and bulk procurement reduce overall project costs and complexity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle>Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive testing and validation ensure reliable performance and minimize operational risks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Turnkey Project?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our experts handle your complete infrastructure solution from design to deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call (408) 988-8000
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

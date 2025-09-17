import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Download, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "EXO Solutions - Wave2Wave",
  description: "Advanced EXO solutions for enterprise connectivity and data center infrastructure.",
  keywords: "EXO, enterprise solutions, data center, connectivity, Wave2Wave",
}

export default function ExoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">EXO Solutions</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Advanced EXO
                <span className="text-blue-600"> Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade EXO solutions designed for mission-critical applications, delivering unparalleled
                performance and reliability for your data center infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Specs
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/exo-enterprise-solution-hardware.jpg"
                alt="EXO Solutions"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">EXO Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advanced capabilities that make EXO the preferred choice for enterprise infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High Performance",
                description: "Optimized for maximum throughput and minimal latency in demanding environments.",
                icon: "⚡",
              },
              {
                title: "Scalable Architecture",
                description: "Flexible design that grows with your business requirements and infrastructure needs.",
                icon: "📈",
              },
              {
                title: "Enterprise Security",
                description: "Advanced security features to protect your critical data and communications.",
                icon: "🔒",
              },
              {
                title: "24/7 Reliability",
                description: "Built for continuous operation with redundant systems and failover protection.",
                icon: "🔄",
              },
              {
                title: "Easy Integration",
                description: "Seamless integration with existing infrastructure and third-party systems.",
                icon: "🔗",
              },
              {
                title: "Expert Support",
                description: "Comprehensive support from our team of certified engineers and specialists.",
                icon: "👥",
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Detailed specifications for EXO solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Bandwidth</span>
                  <span className="text-blue-600">Up to 100 Gbps</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Latency</span>
                  <span className="text-blue-600">{"< 1ms"}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Uptime</span>
                  <span className="text-blue-600">99.99%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Scalability</span>
                  <span className="text-blue-600">Enterprise Grade</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Compatible with standard rack configurations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Redundant power supply options</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Environmental monitoring capabilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Hot-swappable components</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Deploy EXO Solutions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our experts to discuss your specific requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call (408) 988-8000
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

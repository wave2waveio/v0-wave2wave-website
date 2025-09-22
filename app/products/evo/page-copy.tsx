import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Download, Phone, Mail, Zap, Shield, Cpu } from "lucide-react"

export const metadata: Metadata = {
  title: "EVO Solutions - Wave2Wave",
  description: "Next-generation EVO solutions for advanced networking and data center evolution.",
  keywords: "EVO, evolution, networking, data center, advanced solutions, Wave2Wave",
}

export default function EvoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">EVO Solutions</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Evolution in
                <span className="text-green-600"> Connectivity</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Next-generation EVO solutions that evolve with your business needs, providing cutting-edge technology
                for modern data center environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Explore EVO <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Technical Docs
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/evo-evolution-networking-solution.jpg"
                alt="EVO Solutions"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">EVO Innovation Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary features that set EVO apart in the evolution of network infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ultra-low latency performance with speeds that exceed industry standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Multi-layered security protocols to protect your critical infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Smart Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  AI-powered optimization for intelligent traffic management and routing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose EVO?</h3>
              <div className="space-y-4">
                {[
                  "Future-proof architecture that adapts to emerging technologies",
                  "Seamless integration with existing infrastructure",
                  "Reduced operational costs through intelligent automation",
                  "Enhanced monitoring and analytics capabilities",
                  "Scalable design for growing business requirements",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/evo-benefits-diagram.jpg"
                alt="EVO Benefits"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Small Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Small Packages, Large Impact</h2>
            <h3 className="text-2xl text-gray-600">Modular Cassettes</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 leading-relaxed">
              Our engineers face the challenge of building powerful hardware in small, modular form factors. The
              benefits are significant: less space, better airflow, and reduced environmental impact. Innovation thrives
              when stakes are high, and EVO™ stands as a testament to our commitment to technological evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_6xMTP_Feed-through%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-ZNBdHjtnupsc9cO4SL22WstbMLRI6L.png"
                  alt="EVO 6xMTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO 6xMTP Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_12xMTP_Feed-through%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-6dDvYFw9igeG3z9170eVh9xee3BOr6.png"
                  alt="EVO 12xMTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO 12xMTP Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_Cassette_MTP%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-cvE8LHMQEaAZVnvJ0h26s7jVSAupvl.png"
                  alt="EVO MTP"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO MTP</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_LC_Cassette%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-rc2QC0M0DxskYlWJlOKYwLOXCYczuk.png"
                  alt="EVO LC"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO LC</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_Cassettes_Stacked%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-6JcwV1WHw5HuI4kME1fBUtczjCLroJ.png"
                  alt="EVO Stacked"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO Stacked</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-LC.CASSCFT1%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-LqdnzbLXxfMKtP8yjYOhqqujM5HKGF.png"
                  alt="EVO SC"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO SC</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-LC-Feedthrough%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-7bDHKWYwltZ0PVshxri44J0gJfIXCq.png"
                  alt="EVO LC Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO LC Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_12xMTP_Feed-through%281%29%281%29%281%29%281%29%281%29%281%29%281%29%281%29-6dDvYFw9igeG3z9170eVh9xee3BOr6.png"
                  alt="EVO MTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO MTP Feed-through</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">EVO Specifications</h2>
            <p className="text-xl text-gray-600">Comprehensive technical details for EVO solutions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Throughput</span>
                  <span className="font-semibold">400 Gbps</span>
                </div>
                <div className="flex justify-between">
                  <span>Latency</span>
                  <span className="font-semibold">{"< 0.5ms"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Jitter</span>
                  <span className="font-semibold">{"< 10ns"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability</span>
                  <span className="font-semibold">99.999%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Connectivity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Ports</span>
                  <span className="font-semibold">128x QSFP-DD</span>
                </div>
                <div className="flex justify-between">
                  <span>Protocols</span>
                  <span className="font-semibold">Multi-protocol</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance</span>
                  <span className="font-semibold">Up to 80km</span>
                </div>
                <div className="flex justify-between">
                  <span>Wavelengths</span>
                  <span className="font-semibold">CWDM/DWDM</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Interface</span>
                  <span className="font-semibold">Web/CLI/API</span>
                </div>
                <div className="flex justify-between">
                  <span>Monitoring</span>
                  <span className="font-semibold">Real-time</span>
                </div>
                <div className="flex justify-between">
                  <span>Automation</span>
                  <span className="font-semibold">AI-powered</span>
                </div>
                <div className="flex justify-between">
                  <span>Integration</span>
                  <span className="font-semibold">SDN/NFV</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Evolve Your Infrastructure with EVO</h2>
          <p className="text-xl text-green-100 mb-8">
            Take the next step in network evolution. Contact us to learn how EVO can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call (408) 988-8000
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

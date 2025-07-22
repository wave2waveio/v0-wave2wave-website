import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const customerLogos = [
    { src: "/images/customers/equinix-logo.png", alt: "Equinix", name: "Equinix" },
    { src: "/images/customers/cisco-logo.png", alt: "Cisco", name: "Cisco" },
    { src: "/images/customers/dell-logo.png", alt: "Dell", name: "Dell" },
    { src: "/images/customers/broadcom-logo.png", alt: "Broadcom", name: "Broadcom" },
    { src: "/images/customers/arista-logo.png", alt: "Arista Networks", name: "Arista Networks" },
    { src: "/images/customers/coherent-logo.png", alt: "Coherent", name: "Coherent" },
    { src: "/images/customers/cerebras-logo.png", alt: "Cerebras", name: "Cerebras" },
    { src: "/images/customers/brocade-logo.png", alt: "Brocade", name: "Brocade" },
    { src: "/images/customers/amaara-logo.jpg", alt: "Amaara Networks", name: "Amaara Networks" },
    { src: "/images/customers/domotion-logo.png", alt: "Domotion", name: "Domotion" },
    { src: "/images/customers/hpe-logo.png", alt: "Hewlett Packard Enterprise", name: "HPE" },
    { src: "/images/customers/juniper-logo.png", alt: "Juniper Networks", name: "Juniper Networks" },
    { src: "/images/customers/paloalto-logo.png", alt: "Palo Alto Networks", name: "Palo Alto Networks" },
    { src: "/images/customers/flex-logo.png", alt: "Flex", name: "Flex" },
    { src: "/images/customers/foxconn-logo.png", alt: "Foxconn", name: "Foxconn" },
    { src: "/images/customers/rocket-ems-logo.webp", alt: "Rocket EMS", name: "Rocket EMS" },
    { src: "/images/customers/techconnect-logo.png", alt: "TechConnect", name: "TechConnect" },
    { src: "/images/customers/mox-logo.png", alt: "MOX", name: "MOX" },
    { src: "/images/customers/visionit-logo.png", alt: "VisionIT", name: "VisionIT" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              From Design to Deployment —
              <span className="text-blue-400"> Simplifying Cabling, Power & Connectivity</span>{" "}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Custom cabling, advanced kitting, and DCIM expertise for enterprise data centers, commercial data centers,
              network operators, system integrators and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Wave2Wave.io</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine custom engineering, precision logistics, and digital twin expertise to deliver the critical
              infrastructure behind tomorrow's networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/images/icons/icon-fiber-optic.png"
                    alt="Custom Engineering"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">Custom Designs, Engineered for You</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We work from your digital design, DCIM models, or site requirements to deliver custom-fit structured
                  cabling, harnesses, PDUs, and accessories — not just stock parts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/images/icons/icon-diamond-quality.png"
                    alt="Quality Assurance"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">Diligent Quality, No Surprises</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every product we ship passes a rigorous quality assurance program — from copper/fiber cabling to
                  connectors, patch panels, racks, and power systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/images/icons/icon-fast-carrier.png"
                    alt="Fast Delivery"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our advanced kitting services organize all needed hardware, cables, and accessories per rack and
                  server — reducing on-site prep time and cutting install costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/images/icons/icon-digital-twin03.png"
                    alt="Digital Twin Services"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">Digital Twin Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We offer DCIM consulting, digital twin design, and ongoing managed services to help you plan,
                  visualize, and maintain your data center's infrastructure with precision.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/images/icons/icon-efficient02.png"
                    alt="Efficiency and Risk Reduction"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">Increased Convenience, Reduced Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  With Wave2Wave.io, you get a single partner to simplify design, sourcing, kitting, logistics, and
                  lifecycle management — reducing complexity, cutting risks, and saving time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading organizations across enterprise, commercial, and telecommunications sectors rely on Wave2Wave.io
              for their critical infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
            {customerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 min-h-[100px]"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Join industry leaders like Equinix, Cisco, Dell, HPE, Juniper Networks, Palo Alto Networks, Foxconn, and
              Flex who trust Wave2Wave.io for their infrastructure solutions
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Become Our Next Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Infrastructure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how Wave2Wave.io can accelerate your next data center deployment with custom engineering and
            precision logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 text-lg px-8 py-3">
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3 bg-transparent"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

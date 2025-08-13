import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Welcome Cabling123 Customers | Wave2Wave.io",
  description:
    "Cabling123 is now part of Wave2Wave.io. Learn about how we continue to serve your data center cabling needs.",
  openGraph: {
    title: "Welcome Cabling123 Customers | Wave2Wave.io",
    description:
      "Cabling123 is now part of Wave2Wave.io. Learn about how we continue to serve your data center cabling needs.",
    url: "https://www.wave2wave.io/cabling123",
    siteName: "Wave2Wave.io",
    images: [
      {
        url: "/images/cabling123-logo.png",
        width: 600,
        height: 325,
        alt: "Cabling123 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Cabling123Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Cabling123 Logo */}
            <div className="mb-8">
              <Image
                src="/images/cabling123-logo.png"
                alt="Cabling123 - A Wave2Wave Company"
                width={400}
                height={200}
                className="mx-auto"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Welcome Cabling123 Customers</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              We're excited to announce that Cabling123 is now part of the Wave2Wave.io family! This transition brings
              you the same trusted expertise you've come to rely on.
            </p>
          </div>
        </div>
      </section>

      {/* What This Means Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">What This Means for You</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">✓ Same Trusted Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Your existing relationships, account information, and service history remain intact. The same team
                    members you know and trust continue to serve you.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">✓ Seamless Transition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    No disruption to your current projects or orders. All existing contracts, warranties, and support
                    agreements remain in full effect.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Same Great Services Still Available
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Image
                      src="/images/icons/icon-digital-twin03.png"
                      alt="DCIM Services"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <CardTitle className="text-xl">DCIM & Digital Twin Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Advanced data center infrastructure management and digital twin modeling for better planning and
                    visualization.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Image
                      src="/images/icons/icon-fast-carrier.png"
                      alt="Advanced Kitting"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <CardTitle className="text-xl">Advanced Kitting & Logistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Pre-configured rack kitting services that organize all hardware and cables per rack, reducing
                    installation time and costs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Image
                      src="/images/icons/icon-efficient02.png"
                      alt="OEM Solutions"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <CardTitle className="text-xl">OEM & Custom Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Expanded OEM partnerships and custom engineering capabilities for specialized networking and
                    interconnect requirements.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About the Transition?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our team is here to help ensure a smooth transition and answer any questions you may have.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-blue-800 border-blue-700 text-white">
                <CardHeader className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <CardTitle className="text-white">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-2">Speak directly with our team</p>
                  <a href="tel:+1-866-473-2701" className="text-xl font-bold text-white hover:text-blue-200">
                    +1 (866) 473-2701
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-blue-800 border-blue-700 text-white">
                <CardHeader className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <CardTitle className="text-white">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-100 mb-2">Get detailed answers via email</p>
                  <a href="mailto:info@wave2wave.io" className="text-xl font-bold text-white hover:text-blue-200">
                    info@wave2wave.io
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 text-lg px-8 py-3" asChild>
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

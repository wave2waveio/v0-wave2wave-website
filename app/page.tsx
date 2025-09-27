import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeroCarousel from "@/components/HeroCarousel"

export const metadata: Metadata = {
  title: "Wave2Wave – Custom Data Center Cabling & DCIM Solutions",
  description:
    "Custom data center cabling, labeling & kitting for easy deployment, and digital twin design services for modern data centers. Simplify your network infrastructure deployment with a single expert partner – Wave2Wave. Contact us for a quote.",
  openGraph: {
    title: "Wave2Wave – Custom Data Center Cabling & DCIM Solutions",
    description:
      "Custom data center cabling, labeling & kitting for easy deployment, and digital twin services for modern data centers. Simplify your network infrastructure deployment with a single expert partner – Wave2Wave. Contact us for a quote.",
    url: "https://www.wave2wave.io",
    siteName: "Wave2Wave.io",
    images: [
      {
        url: "/images/wave2wave-logo.png",
        width: 600,
        height: 325,
        alt: "Wave2Wave Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function HomePage() {
  const customerLogos = [
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/equinix-logo.png", alt: "Equinix", name: "Equinix" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/cisco-logo.png", alt: "Cisco", name: "Cisco" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/dell-logo.png", alt: "Dell", name: "Dell" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/broadcom-logo.png", alt: "Broadcom", name: "Broadcom" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/arista-logo.png", alt: "Arista Networks", name: "Arista Networks" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/coherent-logo.png", alt: "Coherent", name: "Coherent" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/cerebras-logo.png", alt: "Cerebras", name: "Cerebras" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/brocade-logo.png", alt: "Brocade", name: "Brocade" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/amaara-logo.jpg", alt: "Amaara Networks", name: "Amaara Networks" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/domotion-logo.png", alt: "Domotion", name: "Domotion" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/hpe-logo.png", alt: "Hewlett Packard Enterprise", name: "HPE" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/juniper-logo.png", alt: "Juniper Networks", name: "Juniper Networks" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/paloalto-logo.png", alt: "Palo Alto Networks", name: "Palo Alto Networks" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/flex-logo.png", alt: "Flex", name: "Flex" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/foxconn-logo.png", alt: "Foxconn", name: "Foxconn" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/rocket-ems-logo.webp", alt: "Rocket EMS", name: "Rocket EMS" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/techconnect-logo.png", alt: "TechConnect", name: "TechConnect" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/mox-logo.png", alt: "MOX", name: "MOX" },
    { src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/visionit-logo.png", alt: "VisionIT", name: "VisionIT" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      {/* Value Propositions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">One Partner - Complete Confidence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Wave2Wave is more than a cabling vendor—we’re a custom network infrastructure partner. From structured cabling to rack kitting and DCIM digital twin design, we deliver the products and services that keep data centers running smoothly, on time, and with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/icons/icon-fiber-optic.png"
                    alt="Custom Engineering"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">
                  <Link href="/solutions#structured-cabling-hardware" className="hover:text-blue-600 transition-colors">
                    Custom Engineering - Cables & Systems Built to Your Spec
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                 We design from your DCIM models, CAD drawings, or detailed requirements—delivering fiber, copper, PDUs, and accessories built exactly to fit your project. No guesswork, no off-the-shelf compromises.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/icons/icon-diamond-quality.png"
                    alt="Quality Assurance"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">
                  <Link href="/solutions#rack-kitting-logistics" className="hover:text-blue-600 transition-colors">
                    Quality Assurance - Top Quality, Every Time
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every assembly—cables, connectors, panels, racks, and power—is rigorously tested and certified. You get consistent performance and reliability across your entire deployment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/icons/icon-fast-carrier.png"
                    alt="Fast Delivery"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">Fast Delivery - Weeks, Not Months</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Why wait 12 weeks? Our streamlined process delivers in just weeks. Pre-kitted and pre-labeled, our solutions cut on-site prep time and reduce installation costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/icons/icon-diamond-quality.png"
                    alt="Great Pricing"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">
                  <Link href="/solutions#dcim-digital-twin" className="hover:text-blue-600 transition-colors">
                    Great Pricing - Better Value Than the Big Brands
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We offer enterprise-grade cabling solutions at prices that beat the large OEMs. With Wave2Wave, you get the same or better quality—without paying premium brand markups.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/icons/icon-efficient02.png"
                    alt="Value-Added Services for No Extra Cost"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">
                  <Link href="/solutions#rack-kitting-logistics" className="hover:text-blue-600 transition-colors">
                    Value-Added Services for No Extra Cost
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Customer Labeling and Kitting - We pre-label every cable and bundle them into organized kits by rack or server. Your installers plug in once and move on—no sorting, tracing, or second-guessing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/icons/icon-efficient02.png"
                    alt="Digital Twin Services"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <CardTitle className="text-xl">
                  <Link href="/solutions#rack-kitting-logistics" className="hover:text-blue-600 transition-colors">
                    Digital Twin Services - Plan with Precision
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our Sunbird DCIM-powered design services let you model your environment, plan capacity, and maintain accuracy through the entire lifecycle.
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
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 text-lg px-8 py-3" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

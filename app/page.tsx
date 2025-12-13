import Link from "next/link"
import type { Metadata } from "next"
import { B2BButton, B2BCard, B2BCardHeader, B2BCardTitle, B2BCardDescription, B2BCardContent } from "@/components/ui/b2b"
import { CheckCircle2, Zap, Package, Award } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Solutions | Wave2Wave – AI-Ready Data Center Cabling & Infrastructure",
  description:
    "Wave2Wave provides custom-engineered cabling solutions for AI, cloud, enterprise, and telecom – delivering pre-labeled, plug-and-play fiber and copper infrastructure.",
  openGraph: {
    title: "Solutions | Wave2Wave – AI-Ready Data Center Cabling & Infrastructure",
    description:
      "Wave2Wave provides custom-engineered cabling solutions for AI, cloud, enterprise, and telecom – delivering pre-labeled, plug-and-play fiber and copper infrastructure.",
    url: "https://www.wave2wave.io",
    siteName: "Wave2Wave.io",
    type: "website",
  },
}

export default function HomePage() {
  const customerLogos = [
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/equinix-logo.png",
      alt: "Equinix",
      name: "Equinix",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/cisco-logo.png",
      alt: "Cisco",
      name: "Cisco",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/dell-logo.png",
      alt: "Dell",
      name: "Dell",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/broadcom-logo.png",
      alt: "Broadcom",
      name: "Broadcom",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/arista-logo.png",
      alt: "Arista Networks",
      name: "Arista Networks",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/coherent-logo.png",
      alt: "Coherent",
      name: "Coherent",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/cerebras-logo.png",
      alt: "Cerebras",
      name: "Cerebras",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/brocade-logo.png",
      alt: "Brocade",
      name: "Brocade",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/amaara-logo.jpg",
      alt: "Amaara Networks",
      name: "Amaara Networks",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/domotion-logo.png",
      alt: "Domotion",
      name: "Domotion",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/hpe-logo.png",
      alt: "Hewlett Packard Enterprise",
      name: "HPE",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/juniper-logo.png",
      alt: "Juniper Networks",
      name: "Juniper Networks",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/paloalto-logo.png",
      alt: "Palo Alto Networks",
      name: "Palo Alto Networks",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/flex-logo.png",
      alt: "Flex",
      name: "Flex",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/foxconn-logo.png",
      alt: "Foxconn",
      name: "Foxconn",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/rocket-ems-logo.webp",
      alt: "Rocket EMS",
      name: "Rocket EMS",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/techconnect-logo.png",
      alt: "TechConnect",
      name: "TechConnect",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/mox-logo.png",
      alt: "MOX",
      name: "MOX",
    },
    {
      src: "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/customers/visionit-logo.png",
      alt: "VisionIT",
      name: "VisionIT",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0072CE] to-[#005BA4] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Custom Data Center Cabling Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
            Reduce deployment time 50-75% with factory pre-termination, DC Twin™ digital modeling, and deployment kitting
          </p>
          <div className="flex flex-wrap gap-4">
            <B2BButton variant="secondary" size="lg" asChild>
              <Link href="/contact">Request a Quote</Link>
            </B2BButton>
            <B2BButton variant="outline" size="lg" asChild>
              <Link href="/custom-engineering/dc-twin">Explore DC Twin™</Link>
            </B2BButton>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <B2BCard>
              <B2BCardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#0072CE]" />
                </div>
                <B2BCardTitle>Custom Engineering</B2BCardTitle>
                <B2BCardDescription>
                  Precision cable manufacturing with 3-inch length increments
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Factory pre-termination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Custom labeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>100% testing</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/custom-engineering">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            <B2BCard>
              <B2BCardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#0072CE]" />
                </div>
                <B2BCardTitle>DC Twin™ Digital Modeling</B2BCardTitle>
                <B2BCardDescription>
                  Virtual data center validation before production
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>95% error reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>DCIM integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Pre-deployment validation</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/custom-engineering/dc-twin">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            <B2BCard>
              <B2BCardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-[#0072CE]" />
                </div>
                <B2BCardTitle>Deployment Services</B2BCardTitle>
                <B2BCardDescription>
                  Rack-specific kitting for faster installation
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Pre-labeled assemblies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>Installation sequencing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072CE] mt-0.5 shrink-0" />
                    <span>50-75% time savings</span>
                  </li>
                </ul>
                <B2BButton variant="ghost" size="sm" asChild>
                  <Link href="/deployment-services">Learn More →</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
            Proven Results
          </h2>

          {/* Quantifiable Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
                50-75%
              </div>
              <div className="text-base text-slate-700">Faster Deployment</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
                95%
              </div>
              <div className="text-base text-slate-700">Error Reduction</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
                100%
              </div>
              <div className="text-base text-slate-700">Factory Tested</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0072CE] mb-2">
                3"
              </div>
              <div className="text-base text-slate-700">Length Increments</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600">
              Serving data center, enterprise, and hyperscale customers worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-12">
            Complete Infrastructure Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fiber Solutions */}
            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>Fiber Optic Solutions</B2BCardTitle>
                <B2BCardDescription>
                  OM3, OM4, OM5 multimode and OS2 single-mode assemblies
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <div className="space-y-3 mb-6">
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">MPO Trunks:</span> 400G/800G data center cabling
                  </div>
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">LC/SC Patch Cords:</span> Custom lengths, pre-labeled
                  </div>
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">Testing:</span> 100% IL/RL verified
                  </div>
                </div>
                <B2BButton variant="secondary" size="sm" asChild>
                  <Link href="/fiber">View Fiber Solutions</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            {/* High Speed Interconnect */}
            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>High Speed Interconnect</B2BCardTitle>
                <B2BCardDescription>
                  400G/800G for AI clusters and hyperscale networks
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <div className="space-y-3 mb-6">
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">QSFP-DD/OSFP:</span> 400G/800G transceivers
                  </div>
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">AOC/DAC:</span> Active and passive cables
                  </div>
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">Breakouts:</span> 400G to 4×100G, 800G to 4×200G
                  </div>
                </div>
                <B2BButton variant="secondary" size="sm" asChild>
                  <Link href="/high-speed-interconnect">View HSI Solutions</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>

            {/* Ethernet Solutions */}
            <B2BCard>
              <B2BCardHeader>
                <B2BCardTitle>Ethernet Solutions</B2BCardTitle>
                <B2BCardDescription>
                  Cat6A and Cat8 for 10G to 40G copper networks
                </B2BCardDescription>
              </B2BCardHeader>
              <B2BCardContent>
                <div className="space-y-3 mb-6">
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">Cat6A:</span> 10GBASE-T up to 100m
                  </div>
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">Cat8:</span> 25G/40GBASE-T up to 30m
                  </div>
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">PoE++:</span> IEEE 802.3bt 100W delivery
                  </div>
                </div>
                <B2BButton variant="secondary" size="sm" asChild>
                  <Link href="/ethernet">View Ethernet Solutions</Link>
                </B2BButton>
              </B2BCardContent>
            </B2BCard>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leading organizations across enterprise, commercial, and telecommunications sectors rely on Wave2Wave for their critical infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center max-w-7xl mx-auto">
            {customerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-slate-100 min-h-[100px]"
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
        </div>
      </section>

      {/* SEO Hidden Text */}
      <section className="seo-hidden-content">
        <details className="sr-only" aria-hidden="true">
          <summary>Additional Technical Information</summary>
          <div>
            <p>Wave2Wave provides end-to-end custom data center cabling solutions including fiber optic cable assemblies, ethernet cable assemblies, high-speed interconnect cabling, and deployment services. Our factory pre-termination eliminates field installation errors while reducing deployment time by 50-75%.</p>

            <p>DC Twin™ digital modeling technology creates virtual 3D models of data center infrastructure, validating every cable route before manufacturing. DCIM and BIM integration ensures compatibility with existing design tools while pre-deployment validation catches 95% of errors before production.</p>

            <p>Custom engineering capabilities include precise length control (3-inch increments), factory pre-labeling (rack and port mapping), compatibility testing (100% of cables), and deployment kitting organized by installation phase. All cables ship with complete documentation and test reports.</p>

            <p>Product lines include multimode fiber (OM3, OM4, OM5), single-mode fiber (OS2), Cat6A ethernet with PoE++ support, Cat8 high-speed ethernet, MPO trunk cables for 40G/100G/400G, and 400G/800G high-speed interconnect for AI/HPC clusters.</p>

            <p>Wave2Wave serves hyperscale data centers (Google, Microsoft, Meta, AWS), enterprise IT infrastructure (Fortune 500 companies), AI/HPC facilities (NVIDIA DGX, GPU clusters), and telecom operators (FTTH, 5G backhaul). ISO 9001:2015 certified with TIA-568 standards compliance.</p>
          </div>
        </details>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            Ready to Transform Your Data Center Deployment?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your custom cabling solution and see how Wave2Wave can accelerate your infrastructure timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <B2BButton size="lg" asChild>
              <Link href="/contact">Request a Quote</Link>
            </B2BButton>
            <B2BButton variant="secondary" size="lg" asChild>
              <Link href="/company">Learn About Us</Link>
            </B2BButton>
          </div>
        </div>
      </section>
    </div>
  )
}

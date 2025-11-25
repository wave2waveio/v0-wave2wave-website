import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { RotatingHeroSection } from "@/components/RotatingHeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Cpu, ScanLine, PackageCheck, ClipboardCheck, Rocket } from "lucide-react"

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
  const heroImages = [
    "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/QSFPto4SFP1728.jpg",
    "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/MTP_Bundle.jpg",
    "https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/EVO-2RU-Filled-Front-Panel-highlights2.jpg",
    "/images/hero/01-hero-image-1.png",
  ]

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
      <RotatingHeroSection
        title="Connecting the Physical Backbone of the AI & Datacenter Era"
        subtitle="Engineered cabling systems that simplfy Cabling, Power and Connectivity – custom-built, pre-labeled, and deployment-ready."
        images={heroImages}
        height="tall"
      />

      {/* The Wave2Wave Difference */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2>Why Wave2Wave?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
              We deliver infrastructure you can trust, because the network begins where the cable does.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureBlock
              icon={<Cpu className="h-6 w-6 text-[#0072CE]" />}
              title="Custom Cable Engineering"
              description="Every cable system engineered to exact specifications (3-inch increments) – no off-the-shelf compromises. Built to your rack geometry for perfect airflow and fit."
              className="border-t-4 border-t-[#0072CE] bg-slate-50/50 hover:bg-white border-x border-b border-slate-200"
              iconContainerClassName="bg-[#0072CE]/10"
            />
            <FeatureBlock
              icon={<ScanLine className="h-6 w-6 text-[#005BA4]" />}
              title="Factory Labeling & Identification"
              description="Zero field errors and 50-75% faster installs. Every cable ships pre-labeled to your rack and port map – installers just plug in. Installs in days, audits in minutes."
              className="border-t-4 border-t-[#005BA4] bg-slate-50/50 hover:bg-white border-x border-b border-slate-200"
              iconContainerClassName="bg-[#005BA4]/10"
            />
            <FeatureBlock
              icon={<PackageCheck className="h-6 w-6 text-[#0090FF]" />}
              title="Advanced Deployment Kitting"
              description="Rack-specific, pre-kitted cables organized by installation phase. No sorting, no waste – cutting installation time by 50-75% and bringing GPU clusters online weeks earlier."
              className="border-t-4 border-t-[#0090FF] bg-slate-50/50 hover:bg-white border-x border-b border-slate-200"
              iconContainerClassName="bg-[#0090FF]/10"
            />
            <FeatureBlock
              icon={<ClipboardCheck className="h-6 w-6 text-[#333333]" />}
              title="100% Quality Assurance"
              description="Every assembly factory-tested and certified for mission-critical reliability. Insertion loss <0.35dB for fiber, TDR verification for copper, bit error rate <1E-12 for AI workloads."
              className="border-t-4 border-t-[#333333] bg-slate-50/50 hover:bg-white border-x border-b border-slate-200"
              iconContainerClassName="bg-[#333333]/10"
            />
            <FeatureBlock
              icon={<Rocket className="h-6 w-6 text-[#4D4D4D]" />}
              title="Fast Global Delivery"
              description="3-4 week typical delivery – much faster than 8-12 week industry norms. From design to deployment, we move at the speed your infrastructure demands."
              className="border-t-4 border-t-[#4D4D4D] bg-slate-50/50 hover:bg-white border-x border-b border-slate-200"
              iconContainerClassName="bg-[#4D4D4D]/10"
            />
          </div>
        </div>
      </section>

      {/* Solutions by Environment */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2>Solutions for Your Environment</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mt-4">
              Wave2Wave delivers infrastructure for the world's most demanding data centers. Whether you're deploying AI
              clusters, scaling hyperscale cloud, or refreshing enterprise racks, our custom cabling systems accelerate
              deployment and eliminate errors.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Enterprise Data Centers */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0072CE] shadow-sm">
                <h3 className="mb-4 text-[#005BA4]">Enterprise Data Centers & Engineering Labs</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#0072CE] mr-2 mt-1">•</span>
                    <span>Rack-ready kits labeled by cabinet/port to enable 50-75% faster installs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0072CE] mr-2 mt-1">•</span>
                    <span>Mix-and-match bundles (10G copper, 25G/100G/400G fiber) delivered as single SKUs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0072CE] mr-2 mt-1">•</span>
                    <span>Modular fiber patch panels that allow protocol upgrades without re-cabling</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000"
                  alt="Enterprise Data Center"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* AI & GPU Clusters */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000"
                  alt="AI & GPU Cluster Data Centers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-2 bg-white p-6 rounded-lg border-l-4 border-[#005BA4] shadow-sm">
                <h3 className="mb-4 text-[#005BA4]">AI & GPU Cluster Data Centers</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#005BA4] mr-2 mt-1">•</span>
                    <span>
                      NVIDIA-validated harnesses for DGX/HGX GPU clusters (400G/800G InfiniBand and Ethernet fabrics)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#005BA4] mr-2 mt-1">•</span>
                    <span>Factory-tested for deployments from 8 to 1000+ nodes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#005BA4] mr-2 mt-1">•</span>
                    <span>Custom polarity management to eliminate the #1 cause of AI network errors</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hyperscale & Cloud */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#333333] shadow-sm">
                <h3 className="mb-4 text-[#333333]">Hyperscale & Cloud Networks</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#333333] mr-2 mt-1">•</span>
                    <span>
                      Modular patch panel systems supporting 10G → 400G → 800G migrations without replacing cabling
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#333333] mr-2 mt-1">•</span>
                    <span>Spine-leaf kitting that reduces hundreds of SKUs into turnkey assemblies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#333333] mr-2 mt-1">•</span>
                    <span>End-to-end solutions that scale with next-gen (800G/1.6T) architectures</span>
                  </li>
                </ul>
                <Link
                  href="/fiber/hyperscalers"
                  className="inline-block mt-4 text-[#0072CE] hover:text-[#005BA4] font-medium"
                >
                  Learn more about hyperscale fiber solutions →
                </Link>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000"
                  alt="Hyperscale & Cloud Networks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Telecom & FTTH */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?q=80&w=1000"
                  alt="Telecom & Fiber-to-the-Home"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-2 bg-white p-6 rounded-lg border-l-4 border-[#0090FF] shadow-sm">
                <h3 className="mb-4 text-[#005BA4]">Telecom & Fiber-to-the-Home (FTTH)</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-[#0090FF] mr-2 mt-1">•</span>
                    <span>Pre-connectorized assemblies that cut truck rolls by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0090FF] mr-2 mt-1">•</span>
                    <span>Compliance with government standards for broadband projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0090FF] mr-2 mt-1">•</span>
                    <span>Quick-connect fiber solutions for rapid outdoor deployments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2>Trusted by Industry Leaders</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
              Leading organizations across enterprise, commercial, and telecommunications sectors rely on Wave2Wave.io
              for their critical infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Accelerate Your Deployment?"
        subtitle="Contact us to discuss your custom cabling solution and see how Wave2Wave can transform your infrastructure timeline."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

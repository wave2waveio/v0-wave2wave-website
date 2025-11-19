import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { RotatingHeroSection } from "@/components/RotatingHeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { StatsSection } from "@/components/StatsSection"
import { ProductCategories } from "@/components/ProductCategories"
import { PencilRuler, ScanBarcode, Boxes, ShieldCheck, Globe, ArrowRight, Network, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: "Wave2Wave – AI-Ready Data Center Cabling & Infrastructure",
  description:
    "Wave2Wave provides custom-engineered cabling solutions for AI, cloud, enterprise, and telecom – delivering pre-labeled, plug-and-play fiber and copper infrastructure.",
  openGraph: {
    title: "Wave2Wave – AI-Ready Data Center Cabling & Infrastructure",
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <RotatingHeroSection
        title="Connecting the Physical Backbone of the AI & Datacenter Era"
        subtitle="Engineered cabling systems that move data, power, and possibility at the speed of light – custom-built, pre-labeled, and deployment-ready."
        images={heroImages}
        height="tall"
      />

      {/* Key Stats Section - Building Trust */}
      <StatsSection />

      {/* Product Categories - Distinct from Solutions */}
      <ProductCategories />

      {/* Solutions by Environment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Industry Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Engineered for Your Environment</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mt-4">
              Whether you're deploying AI clusters, scaling hyperscale cloud, or refreshing enterprise racks, our custom cabling systems accelerate deployment.
            </p>
          </div>

          <div className="space-y-20">
            {/* Enterprise Data Centers */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block p-2 bg-blue-100 rounded-lg mb-4">
                  <Network className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Data Centers</h3>
                <p className="text-slate-600 mb-6 text-lg">
                  Streamline your rack deployments with pre-labeled, custom-length cabling that eliminates slack management headaches.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-blue-100 rounded-full">
                      <ArrowRight className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Rack-ready kits labeled by cabinet/port (50-75% faster installs)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-blue-100 rounded-full">
                      <ArrowRight className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Mix-and-match bundles (10G copper, 25G/100G fiber)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-blue-100 rounded-full">
                      <ArrowRight className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Modular panels for easy protocol upgrades</span>
                  </li>
                </ul>
                <Link href="/deployment-services" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                  View Enterprise Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000"
                  alt="Enterprise Data Center"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* AI & GPU Clusters */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000"
                  alt="AI & GPU Cluster Data Centers"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="inline-block p-2 bg-green-100 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI & GPU Clusters</h3>
                <p className="text-slate-600 mb-6 text-lg">
                  High-performance interconnects for DGX/HGX clusters where latency and signal integrity are non-negotiable.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-green-100 rounded-full">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-slate-700">NVIDIA-validated harnesses (400G/800G InfiniBand/Ethernet)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-green-100 rounded-full">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-slate-700">Factory-tested for deployments from 8 to 1000+ nodes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-green-100 rounded-full">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-slate-700">Custom polarity management to eliminate errors</span>
                  </li>
                </ul>
                <Link href="/custom-engineering" className="text-green-600 font-semibold hover:text-green-800 flex items-center">
                  View AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Wave2Wave Difference */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Wave2Wave?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
              We deliver infrastructure you can trust, because the network begins where the cable does.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureBlock
              icon={<PencilRuler className="h-6 w-6 text-blue-600" />}
              title="Custom Cable Engineering"
              description="Every cable system engineered to exact specifications (3-inch increments) – no off-the-shelf compromises. Built to your rack geometry for perfect airflow and fit."
              className="border-t-4 border-t-blue-500 bg-white shadow-sm hover:shadow-md transition-all"
            />
            <FeatureBlock
              icon={<ScanBarcode className="h-6 w-6 text-indigo-600" />}
              title="Factory Labeling & Identification"
              description="Zero field errors and 50-75% faster installs. Every cable ships pre-labeled to your rack and port map – installers just plug in. Installs in days, audits in minutes."
              className="border-t-4 border-t-indigo-500 bg-white shadow-sm hover:shadow-md transition-all"
            />
            <FeatureBlock
              icon={<Boxes className="h-6 w-6 text-cyan-600" />}
              title="Advanced Deployment Kitting"
              description="Rack-specific, pre-kitted cables organized by installation phase. No sorting, no waste – cutting installation time by 50-75% and bringing GPU clusters online weeks earlier."
              className="border-t-4 border-t-cyan-500 bg-white shadow-sm hover:shadow-md transition-all"
            />
            <FeatureBlock
              icon={<ShieldCheck className="h-6 w-6 text-teal-600" />}
              title="100% Quality Assurance"
              description="Every assembly factory-tested and certified for mission-critical reliability. Insertion loss <0.35dB for fiber, TDR verification for copper, bit error rate <1E-12 for AI workloads."
              className="border-t-4 border-t-teal-500 bg-white shadow-sm hover:shadow-md transition-all"
            />
            <FeatureBlock
              icon={<Globe className="h-6 w-6 text-sky-600" />}
              title="Fast Global Delivery"
              description="3-4 week typical delivery – much faster than 8-12 week industry norms. From design to deployment, we move at the speed your infrastructure demands."
              className="border-t-4 border-t-sky-500 bg-white shadow-sm hover:shadow-md transition-all"
            />
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted by Industry Leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center max-w-7xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {customerLogos.slice(0, 10).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="max-w-full max-h-12 object-contain"
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

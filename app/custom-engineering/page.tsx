import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { CTASection } from "@/components/CTASection"
import { Button } from "@/components/ui/button"
import { Ruler, Cable, CheckCircle2, Box, Truck, ClipboardCheck, Zap, Activity, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Engineering | Wave2Wave – Bespoke Cabling & DCIM Design",
  description:
    "Custom cable engineering services by Wave2Wave – we design and manufacture cables & assemblies to your exact specs, from custom lengths to unique configurations, with DC Twin digital twin modeling.",
}

export default function CustomEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Custom Engineering – Cables & Systems Built to Your Spec"
        subtitle="No guesswork, no off-the-shelf compromises. We work from your design (DCIM models, CAD drawings) to create bespoke cabling systems built exactly to fit your project."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Precision-Engineered Cables */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Precision-Engineered Cables</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Unlike catalog vendors with fixed lengths, Wave2Wave cables are engineered to your exact rack geometry,
                manufactured in 3-inch increments for an exact fit. Every cable is built to optimize airflow, eliminate
                slack, and match your specifications precisely.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Ruler className="w-6 h-6 text-blue-600" />
                    Customization Options
                  </h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Precise Lengths & Geometry",
                        desc: "Built in 3-inch increments to match your pathway design",
                      },
                      {
                        title: "Custom Connectors",
                        desc: "Choose connector types (LC, SC, MTP, RJ45, etc.) and polarity",
                      },
                      {
                        title: "Jacket Colors",
                        desc: "Organize by color conventions (e.g., blue for 10G, aqua for 40G)",
                      },
                      {
                        title: "Factory Labeling",
                        desc: "Pre-labeled to your rack/port/VLAN mapping",
                      },
                      {
                        title: "Right First Time",
                        desc: "Delivered ready to install with zero on-site termination",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <strong className="text-slate-900 block">{item.title}</strong>
                          <span className="text-slate-600 text-sm">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1622519407650-3df9883f76e5?q=80&w=2000"
                    alt="Custom labeled cables vs messy catalog cables"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">Why Custom vs. Off-the-Shelf?</h3>
                      <ul className="space-y-2 text-slate-200 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" /> Eliminate field errors with exact-fit
                          cables
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" /> Reduce on-site termination labor
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" /> Ensure neat, professional racks
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Engineered Cable Bundles */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Box className="w-4 h-4" />
                <span>Streamlined Deployment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pre-Engineered Cable Bundles</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                For complex deployments, Wave2Wave provides pre-engineered cable bundles under one SKU – multiple cables
                integrated as one assembly. This simplifies procurement, logistics, and installation.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: Truck,
                    title: "Simplified Logistics",
                    desc: "One shipment instead of many, reducing receiving complexity",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Consolidated Ordering",
                    desc: "50+ cables becomes 1 part number, cutting procurement time",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Fewer Errors",
                    desc: "Single SKU covers entire bundle, eliminating ordering mistakes",
                  },
                  {
                    icon: Box,
                    title: "Pre-Labeled",
                    desc: "Every cable in the bundle arrives labeled and ready to install",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <item.icon className="w-6 h-6 text-blue-400 mb-3" />
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
                  <Cable className="w-5 h-5" />
                  Example Bundle: "Rack-to-Rack Connectivity"
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                  <li>• 4× 12-strand MTP trunk cables</li>
                  <li>• 8× LC duplex patch cords</li>
                  <li>• 2× Power cables (C13 to C14)</li>
                  <li>• All pre-labeled for Rack A → Rack B</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-blue-500/30 text-xs font-mono text-blue-400">
                  Ships as SKU: W2W-RAB-001
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
              <Image
                src="/structured-cabling-bundle-data-center.jpg"
                alt="Pre-engineered structured cabling bundles in a data center environment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Factory-Tested for Reliability */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Factory-Tested for Reliability</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Quality assurance is integral to every custom assembly. All cables are 100% tested in our ISO-certified
                facility before shipment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Fiber Testing",
                  icon: Activity,
                  items: ["Insertion loss measurement", "Return loss verification", "Visual inspection (every strand)"],
                },
                {
                  title: "Copper Testing",
                  icon: Zap,
                  items: ["TDR verification", "Continuity testing", "Fluke certification"],
                },
                {
                  title: "High-Speed DAC/AOC",
                  icon: Activity,
                  items: ["Bit error rate testing", "Signal integrity verification", "At rated speed"],
                },
                {
                  title: "Power Cables",
                  icon: Zap,
                  items: ["Hi-pot testing", "Conductor verification", "Safety compliance"],
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-4">{card.title}</h4>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-blue-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium text-slate-900 bg-white inline-block px-8 py-4 rounded-full shadow-sm border border-slate-100">
                Every cable is factory-terminated and tested to meet exacting standards – custom doesn't mean risky. It
                means precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DC Twin Callout */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Before we build any cable, we can design it virtually.</h3>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Learn about our DC Twin™ digital modeling platform that creates a virtual replica of your data hall,
              validates every cable route, and eliminates surprises before production.
            </p>
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50 border-none h-14 px-8 text-lg">
              <Link href="/custom-engineering/dc-twin">Explore DC Twin™ →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Discuss Your Custom Cabling Needs?"
        subtitle="Contact our engineering team today to discuss how we can design and build the perfect cabling solution for your data center."
        primaryButtonText="Contact Engineering Team"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

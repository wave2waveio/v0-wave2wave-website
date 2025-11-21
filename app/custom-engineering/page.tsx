import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { CTASection } from "@/components/CTASection"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Settings, Package, ShieldCheck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Engineering | Wave2Wave – Bespoke Cabling & DCIM Design",
  description:
    "Custom cable engineering services by Wave2Wave – we design and manufacture cables & assemblies to your exact specs, from custom lengths to unique configurations, with DC Twin digital twin modeling.",
}

export default function CustomEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
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
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Settings className="w-6 h-6 text-blue-600" />
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
                      { title: "Factory Labeling", desc: "Pre-labeled to your rack/port/VLAN mapping" },
                      { title: "Right First Time", desc: "Delivered ready to install with zero on-site termination" },
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

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Why Custom vs. Off-the-Shelf?</h3>
                  <ul className="space-y-2">
                    {[
                      "Eliminate field errors with exact-fit cables",
                      "Reduce on-site termination labor and associated costs",
                      "Ensure neat, professional racks with no excess slack",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-blue-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="https://images.unsplash.com/photo-1622519407650-3df9883f76e5?q=80&w=2000"
                  alt="Custom labeled cables vs messy catalog cables"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="font-medium text-blue-200 mb-1">Visual Comparison</p>
                  <h4 className="text-2xl font-bold">Precision Fit vs. Cable Chaos</h4>
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
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
                <Package className="w-4 h-4" />
                Streamlined Deployment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pre-Engineered Cable Bundles</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                For complex deployments, Wave2Wave provides pre-engineered cable bundles under one SKU – multiple cables
                integrated as one assembly. This simplifies procurement, logistics, and installation.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    title: "Simplified Logistics",
                    desc: "One shipment instead of many, reducing receiving complexity",
                  },
                  {
                    title: "Consolidated Ordering",
                    desc: "50+ cables becomes 1 part number, cutting procurement time",
                  },
                  { title: "Fewer Errors", desc: "Single SKU covers entire bundle, eliminating ordering mistakes" },
                  { title: "Pre-Labeled", desc: "Every cable in the bundle arrives labeled and ready to install" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-blue-400 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <h4 className="font-semibold text-lg mb-4 text-blue-300 flex items-center gap-2">
                  <span className="bg-blue-500 w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold">
                    EX
                  </span>
                  Example Bundle: "Rack-to-Rack Connectivity"
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm mb-4">
                  <li>• 4× 12-strand MTP trunk cables (30m, OS2 single-mode)</li>
                  <li>• 8× LC duplex patch cords (5m, OM4)</li>
                  <li>• 2× Power cables (C13 to C14, 2m)</li>
                  <li>• All pre-labeled for Rack A → Rack B</li>
                </ul>
                <div className="inline-block bg-slate-900 px-3 py-1 rounded text-xs font-mono text-slate-400 border border-slate-700">
                  Ships as SKU: W2W-RAB-001
                </div>
              </div>
            </div>

            {/* Right Column: Image Space */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                <Image
                  src="/structured-cabling-bundle-data-center.jpg"
                  alt="Pre-engineered cable bundle assembly"
                  fill
                  className="object-cover"
                />

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory-Tested for Reliability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Factory-Tested for Reliability</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Quality assurance is integral to every custom assembly. All cables are 100% tested in our ISO-certified
                facility before shipment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Fiber Testing",
                  items: ["Insertion loss measurement", "Return loss verification", "Visual inspection (every strand)"],
                },
                { title: "Copper Testing", items: ["TDR verification", "Continuity testing", "Fluke certification"] },
                {
                  title: "High-Speed DAC/AOC",
                  items: ["Bit error rate testing", "Signal integrity verification", "Performance validation"],
                },
                {
                  title: "Power Cables",
                  items: ["Hi-pot testing", "Conductor verification", "Safety compliance check"],
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <h4 className="font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200 group-hover:border-blue-200 transition-colors">
                    {card.title}
                  </h4>
                  <ul className="space-y-3">
                    {card.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium text-slate-900 bg-blue-50 inline-block px-6 py-3 rounded-full border border-blue-100">
                Every cable is factory-terminated and tested to meet exacting standards – custom doesn't mean risky. It
                means precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DC Twin Callout */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Before we build any cable, we can design it virtually.</h3>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Learn about our DC Twin™ digital modeling platform that creates a virtual replica of your data hall,
              validates every cable route, and eliminates surprises before production.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-blue-600 hover:bg-blue-50 border-none h-14 px-8 text-lg font-semibold shadow-lg"
            >
              <Link href="/custom-engineering/dc-twin">
                Explore DC Twin™ <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
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

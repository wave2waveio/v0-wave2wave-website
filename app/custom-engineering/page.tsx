import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { CTASection } from "@/components/CTASection"
import { Button } from "@/components/ui/button"

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Precision-Engineered Cables</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Unlike catalog vendors with fixed lengths, Wave2Wave cables are engineered to your exact rack geometry,
              manufactured in 3-inch increments for an exact fit. Every cable is built to optimize airflow, eliminate slack,
              and match your specifications precisely.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl mb-4">Customization Options:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Precise Lengths & Geometry:</strong> Built in 3-inch increments to match your pathway design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Custom Connectors:</strong> Choose connector types (LC, SC, MTP, RJ45, etc.) and polarity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Jacket Colors:</strong> Organize by color conventions (e.g., blue for 10G, aqua for 40G)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Factory Labeling:</strong> Pre-labeled to your rack/port/VLAN mapping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Right First Time:</strong> Delivered ready to install with zero on-site termination</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-4">Why Custom vs. Off-the-Shelf:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Eliminate field errors with exact-fit cables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Reduce on-site termination labor and associated costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Ensure neat, professional racks with no excess slack or cable trays of waste</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1622519407650-3df9883f76e5?q=80&w=2000"
                alt="Custom labeled cables vs messy catalog cables"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Engineered Cable Bundles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Pre-Engineered Cable Bundles</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              For complex deployments, Wave2Wave provides pre-engineered cable bundles under one SKU – multiple cables
              integrated as one assembly. This simplifies procurement, logistics, and installation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4">Benefits:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Simplified Logistics:</strong> One shipment instead of many, reducing receiving complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Consolidated Ordering:</strong> 50+ cables becomes 1 part number, cutting procurement time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Fewer Errors:</strong> Single SKU covers entire bundle, eliminating ordering mistakes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span><strong>Pre-Labeled:</strong> Every cable in the bundle arrives labeled and ready to install</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-primary">
                <h4 className="font-semibold text-lg mb-4 text-primary">Example Bundle: "Rack-to-Rack Connectivity"</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• 4× 12-strand MTP trunk cables (30m, OS2 single-mode)</li>
                  <li>• 8× LC duplex patch cords (5m, OM4)</li>
                  <li>• 2× Power cables (C13 to C14, 2m)</li>
                  <li>• All pre-labeled for Rack A → Rack B</li>
                  <li className="font-semibold mt-3">Ships as SKU: W2W-RAB-001</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory-Tested for Reliability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Factory-Tested for Reliability</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Quality assurance is integral to every custom assembly. All cables are 100% tested in our ISO-certified facility before shipment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Fiber Testing:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Insertion loss measurement</li>
                  <li>• Return loss verification</li>
                  <li>• Visual inspection (every strand)</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Copper Testing:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• TDR verification</li>
                  <li>• Continuity testing</li>
                  <li>• Fluke certification</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">High-Speed DAC/AOC:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Bit error rate testing at rated speed</li>
                  <li>• Signal integrity verification</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Power Cables:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Hi-pot testing</li>
                  <li>• Conductor verification</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-slate-700 mt-8 text-center font-medium">
              Every cable is factory-terminated and tested to meet exacting standards – custom doesn't mean risky. It means precision.
            </p>
          </div>
        </div>
      </section>

      {/* DC Twin Callout */}
      <section className="py-12 bg-blue-50 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4">Before we build any cable, we can design it virtually.</h3>
            <p className="text-lg text-slate-700 mb-6">
              Learn about our DC Twin™ digital modeling platform that creates a virtual replica of your data hall,
              validates every cable route, and eliminates surprises before production.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary-blue-dark">
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

import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Fiber Solutions | Wave2Wave – Custom Fiber Optic Cabling",
  description:
    "Wave2Wave fiber optic solutions for data centers: custom MPO/MTP trunk cables, LC/SC patch cords, OM3/OM4/OM5 multimode, OS2 single-mode, and modular patch panel systems.",
}

export default function FiberPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Fiber Solutions – Engineered for Speed and Precision"
        subtitle="Custom fiber optic cabling for 10G to 800G+ networks. From hyperscale spine-leaf fabrics to enterprise campus backbones."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Fiber Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Complete Fiber Infrastructure</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureBlock
                title="MPO/MTP Trunk Cables"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• 12, 24, 48, 72, 96 fiber trunks</li>
                    <li>• Custom lengths (3-inch increments)</li>
                    <li>• Type A, Type B, Type C polarity</li>
                    <li>• OM3, OM4, OM5, OS2 fiber types</li>
                    <li>• Elite (low-loss) and premium connectors</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="LC/SC Duplex Patch Cords"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• 10G, 25G, 40G, 100G applications</li>
                    <li>• Lengths from 0.5m to 100m+</li>
                    <li>• UPC and APC polishing</li>
                    <li>• Color-coded jackets by speed</li>
                    <li>• Bend-insensitive fiber options</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Breakout & Harness Assemblies"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• MPO-to-LC breakouts (8, 12, 24 fiber)</li>
                    <li>• QSFP/OSFP to 4×SFP harnesses</li>
                    <li>• Custom fanout configurations</li>
                    <li>• Integrated strain relief</li>
                    <li>• Factory-tested for insertion loss</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="AOC (Active Optical Cables)"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• 40G/100G/200G/400G/800G</li>
                    <li>• QSFP28, QSFP56, QSFP-DD, OSFP</li>
                    <li>• Lengths up to 100m</li>
                    <li>• Lower power vs. DAC for long runs</li>
                    <li>• Plug-and-play, no transceivers needed</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Armored & Outdoor Fiber"
                description={
                  <ul className="space-y-1 text-sm">
                    <li>• Rodent-resistant armored jackets</li>
                    <li>• Outdoor-rated UV protection</li>
                    <li>• Direct burial assemblies</li>
                    <li>• Tight-buffered and loose-tube options</li>
                    <li>• Environmental sealing for wet locations</li>
                  </ul>
                }
              />
              <FeatureBlock
                title="Fiber Patch Panels & Enclosures"
                description={
                  <div>
                    <p className="mb-2">Modular cassette systems for easy upgrades and high-density patching.</p>
                    <Link href="/fiber/patch-panels" className="text-primary hover:text-primary-blue-dark font-medium">
                      Learn more →
                    </Link>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fiber Types Explained */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Fiber Types & Applications</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Fiber Type</th>
                    <th className="px-6 py-4 text-left">Core Size</th>
                    <th className="px-6 py-4 text-left">Max Distance</th>
                    <th className="px-6 py-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">OM3 Multimode</td>
                    <td className="px-6 py-4">50/125µm</td>
                    <td className="px-6 py-4">300m @ 10G</td>
                    <td className="px-6 py-4">Short-reach 10G networks</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">OM4 Multimode</td>
                    <td className="px-6 py-4">50/125µm</td>
                    <td className="px-6 py-4">550m @ 10G, 150m @ 40G</td>
                    <td className="px-6 py-4">Most common data center fiber</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">OM5 Multimode</td>
                    <td className="px-6 py-4">50/125µm</td>
                    <td className="px-6 py-4">550m @ 10G, supports SWDM</td>
                    <td className="px-6 py-4">400G SR4.2 and future-proofing</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-semibold">OS2 Single-Mode</td>
                    <td className="px-6 py-4">9/125µm</td>
                    <td className="px-6 py-4">10km+ @ 10G/100G</td>
                    <td className="px-6 py-4">Campus, long-haul, telco</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wave2Wave Fiber */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Choose Wave2Wave Fiber?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">Custom Engineered:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Exact lengths in 3-inch increments</li>
                  <li>• Custom polarity (A, B, C, or your spec)</li>
                  <li>• Color-coded by your standards</li>
                  <li>• Pre-labeled to your port mapping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Factory Tested:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• 100% insertion loss testing</li>
                  <li>• Return loss verification</li>
                  <li>• Visual fault inspection</li>
                  <li>• Test reports included with every order</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Industry Certified:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• TIA-568 compliant</li>
                  <li>• IEC 61754 connectors</li>
                  <li>• RoHS and REACH certified</li>
                  <li>• UL/ETL listed where applicable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Fast Delivery:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• 3-4 week typical lead time</li>
                  <li>• Expedited options available</li>
                  <li>• Global shipping</li>
                  <li>• Protective packaging for long runs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyperscale Solutions Callout */}
      <section className="py-12 bg-blue-50 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4">Building a Hyperscale or Cloud Network?</h3>
            <p className="text-lg text-slate-700 mb-6">
              Learn about our specialized fiber solutions for hyperscale spine-leaf fabrics, supporting 10G to 800G and beyond.
            </p>
            <Link
              href="/fiber/hyperscalers"
              className="inline-block bg-primary hover:bg-primary-blue-dark text-white px-8 py-3 rounded font-medium transition-colors"
            >
              Explore Hyperscale Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Upgrade Your Fiber Infrastructure?"
        subtitle="Contact us to discuss your fiber requirements and receive a custom quote."
        primaryButtonText="Request Fiber Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

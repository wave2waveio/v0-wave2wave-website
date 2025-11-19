import Image from "next/image"
import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { FeatureBlock } from "@/components/FeatureBlock"
import { CTASection } from "@/components/CTASection"
import { Activity, TestTube, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Testing Solutions | Wave2Wave – Fiber Lab Equipment",
  description:
    "Wave2Wave testing solutions: Fiber-in-a-Box™ distance simulators, W-IGNITE™ loopback testers, and lab equipment for network validation and troubleshooting.",
}

export default function TestingSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Testing Solutions – Lab Equipment for Network Validation"
        subtitle="Specialized fiber testing equipment for labs, R&D teams, and network engineers. Validate deployments before they go live."
        backgroundImage="/images/hero/01-hero-image-1.png"
      />

      {/* Why Testing Equipment Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Why Invest in Testing Equipment?</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Network validation and troubleshooting require specialized equipment. Wave2Wave's testing solutions
              help you identify issues before deployment and diagnose problems faster in production.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Pre-Deployment Validation</h4>
                <p className="text-slate-600 text-sm">
                  Test network configurations in the lab before going live
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">R&D & Development</h4>
                <p className="text-slate-600 text-sm">
                  Simulate long-distance fiber for equipment testing
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Faster Troubleshooting</h4>
                <p className="text-slate-600 text-sm">
                  Diagnose connectivity issues quickly with loopback testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiber-in-a-Box */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="mb-6">Fiber-in-a-Box™ Distance Simulators</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Simulate long-distance fiber optic links in a compact enclosure. Perfect for testing equipment that
                  will be deployed across campus or metro networks without needing kilometers of physical fiber.
                </p>

                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Simulate 1km to 100km+ fiber distances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Compact 1U or 2U rack-mount enclosures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Single-mode (OS2) and multimode (OM3/OM4) options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>LC, SC, or MPO connectors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Variable attenuation for loss simulation</span>
                  </li>
                </ul>

                <h4 className="font-semibold mb-3">Use Cases:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Testing long-haul telecom equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Validating campus fiber deployments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>R&D for optical transceivers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Training and education labs</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000"
                  alt="Fiber-in-a-Box™"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* W-IGNITE Loopback Testers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1597733153203-a91067f80c99?q=80&w=1000"
                  alt="W-IGNITE™ Loopback Testers"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="md:order-2">
                <h2 className="mb-6">W-IGNITE™ Loopback Testers</h2>
                <p className="text-lg text-slate-700 mb-6">
                  Quickly validate fiber connectivity with loopback testing. W-IGNITE™ plugs reflec optical signals
                  back to the source, allowing you to test transceivers, switches, and fiber links without needing
                  a second device.
                </p>

                <h4 className="font-semibold mb-3">Available Configurations:</h4>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>LC simplex and duplex loopbacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>SC simplex and duplex loopbacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>MPO-12 and MPO-24 loopbacks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Single-mode and multimode fiber</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Polarity options (Type A, B, C)</span>
                  </li>
                </ul>

                <h4 className="font-semibold mb-3">Benefits:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Test transceivers without a second device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Validate fiber polarity before deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Troubleshoot link-down issues quickly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Compact and portable for field use</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Testing Equipment */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Additional Testing Equipment</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureBlock
                title="Fiber Inspection Scopes"
                description="Portable video microscopes for inspecting fiber end-faces. Identify contamination, scratches, and cracks that cause insertion loss."
              />
              <FeatureBlock
                title="Optical Power Meters"
                description="Measure optical signal strength in dBm. Essential for verifying link budgets and identifying excessive loss."
              />
              <FeatureBlock
                title="Fiber Light Sources"
                description="Stable light sources at 850nm, 1310nm, or 1550nm for testing with power meters. LED and laser options."
              />
              <FeatureBlock
                title="OTDR (Optical Time Domain Reflectometer)"
                description="Analyze fiber links for breaks, bends, and splice quality. Measure length and loss at specific points."
              />
              <FeatureBlock
                title="Fiber Cleaning Kits"
                description="Cleaning pens, swabs, and cassettes for MPO and LC connectors. IPA wipes and compressed air."
              />
              <FeatureBlock
                title="Cable Testers"
                description="Fluke-style testers for Cat6A/Cat8 certification. TDR, continuity, and channel performance verification."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Testing Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Custom Testing Solutions</h2>
            <p className="text-lg text-slate-700 mb-8 text-center">
              Need a custom testing configuration? Wave2Wave can build specialized loopbacks, distance simulators,
              or test cables to your exact specifications.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold mb-4">Examples of Custom Solutions:</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
                <li>• Custom-length test cables</li>
                <li>• Multi-port loopback assemblies</li>
                <li>• Variable attenuators (0-30dB)</li>
                <li>• BiDi loopbacks for CWDM/DWDM</li>
                <li>• Hybrid test cables (fiber + copper)</li>
                <li>• Rack-mount test panels</li>
              </ul>
              <p className="mt-4 font-medium">
                Contact our engineering team to discuss your custom testing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Equip Your Lab with Wave2Wave Testing Solutions"
        subtitle="Contact us to discuss your testing equipment needs and receive a custom quote."
        primaryButtonText="Request Testing Quote"
        primaryButtonLink="/contact"
      />
    </div>
  )
}

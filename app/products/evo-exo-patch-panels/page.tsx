import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Download,
  Zap,
  Shield,
  Layers,
  Play,
  CheckCircle,
  Cpu,
  Database,
  Network,
  TrendingUp,
  Award,
} from "lucide-react"

export default function EVOEXOProductPage() {
  const galleryImages = [
    "https://www.wave2wave.io/images/evo-images/Gallery-1-qr05urokxnjff7t14iblth3hfhg0v1q1d459oil2bk.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-2-qr05utk9bbm02fqatj4uygmem96rafxi1dg8n2i9z4.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-3-qr05uwdrvtpv19m7d2cqnxwseesuxj8p1rep2we3gg.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-4-qr05uz7agbtq03i3wlkmdf766keykmjw25d5iq9wxs.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-5-qr05v12ytzwanbfdlmdvieq3dc5p00rcqeo4ha74lc.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-6-qr05v3whei05m5ba55lr7w0h5hrsn42jqsmkx42y2o.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-7-qr05v6pzz040kz76ootmxdauxndwa7dqr6l1cxyrk0.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-8-qr05v8loco6l874gdpmw2cts4f4mpll7ffw0bhvz7k.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-9-qr05vbf6x6ag710cx8urru45wkqqcoweftugrbrsow.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-10-qr05vdavaud0u8xmm9o0wtn33chgs33v435fpvp0cg.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-11-qr05vg4dvcgvt2tj5svwmaxgvi3kf6f24h3w5pktts.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-12-qr05vixwfukqrwpfpc3sbs7unnpo29q94v2cljgnb4.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-13-qr05vktktinbf4mpecx1grqrfhg0v1q1d459oil2bk.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-14-qr05vnn3e0r6dyilxw4x6915ml2i4r8wtibrzx9og0.jpeg",
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200 text-sm font-semibold px-4 py-2">
                  EXO™ & EVO™ Next-Generation Platforms
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  The Physical Layer Foundation for
                  <span className="text-blue-300"> AI and Terabit Speeds</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Future-proof your data center with ultra-high-density structured cabling. Our EVO™ and EXO™ platforms
                  provide the reliable, scalable physical layer infrastructure required for 400G, 800G, and 1.6T
                  networking.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300">144</div>
                  <div className="text-sm text-blue-100">Duplex Links per 1RU</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300">4x</div>
                  <div className="text-sm text-blue-100">More Dense than Legacy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300">1.6T</div>
                  <div className="text-sm text-blue-100">Ready Infrastructure</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wave2wave.io/datasheets/W2W-C123_EVO-EXO Series Datasheet_REV1.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Download Technical Datasheets
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-blue-300 text-blue-100 hover:bg-blue-800 bg-transparent"
                >
                  Request Infrastructure Consultation
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Hero-EVO-2RU-Evo-Switch-2%281%29%281%29%281%29-c1QqKlthHbmPzfWnpNX6Fv8mV2Kl9M.png"
                alt="EVO™ & EXO™ High-Density Patch Panel Platforms"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Hero-EVO-2RU-Evo-1%281%29%281%29%281%29-ZdTma4URy2yh2qlFTspOTk2dfPPOnI.png"
                  alt="EVO™ Platform"
                  className="w-full h-32 object-cover rounded-lg shadow-xl"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-2RU-Filled-Front-Panel-highlights2-768x441%281%29%281%29%281%29-23BBhStJVITGLj44B3k9xnNw2RzYy8.jpg"
                  alt="EXO™ Platform"
                  className="w-full h-32 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            The Critical Role of Physical Infrastructure
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            In today's data centers, speed and density are paramount. The backbone of every high-performance
            network—from AI clusters to hyperscale cloud platforms—is its physical fiber optic infrastructure.
            High-density patch panels are the central nervous system of this infrastructure, providing a crucial,
            organized hub for managing the massive number of fiber connections required for 400G, 800G, and future
            terabit networking. They replace chaotic point-to-point cabling with a clean, modular, and scalable system,
            ensuring reliability and simplifying management for mission-critical operations.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The AI & Hyperscale Infrastructure Challenge
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Modern AI/ML workloads demand massive east-west bandwidth. Traditional, low-density cabling creates a
                "physical layer bottleneck" that limits GPU cluster performance, complicates network management, and
                wastes valuable rack space. As you scale to 400G and 800G, a robust and ultra-dense structured cabling
                strategy is no longer optional—it's essential for performance and ROI.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Physical layer bottlenecks limit GPU cluster performance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Complex network management with traditional cabling</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Wasted valuable rack space with low-density solutions</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-6">
                Our Solution: A Foundation for Performance
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The EVO™ and EXO™ platforms are not just patch panels; they are engineered ecosystems for high-speed
                fiber management. They deliver industry-leading density and signal integrity, creating a reliable
                physical layer that allows your active switches and optics to perform at their full potential.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Unmatched density maximizes fiber connectivity per rack unit</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">AI-optimized signal integrity for GPU clusters</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Future-proof modularity supports 100G to 1.6T migrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Two Platforms for Scalable Connectivity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered ecosystems for high-speed fiber management with industry-leading density and signal integrity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* EVO Platform */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center pb-6 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-300 transition-colors">
                  <Database className="w-10 h-10 text-blue-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700 mb-2">EVO™ Platform</CardTitle>
                <p className="text-gray-700 font-medium">Ultra-High-Density for Hyperscale & AI</p>
                <p className="text-sm text-gray-600 mt-2">
                  Engineered for maximum fiber density in hyperscale data centers and large AI clusters
                </p>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-900">Key Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Industry-Leading Density:</strong> Up to 48 QSFP-DD/OSFP transceivers (144 Duplex LC
                        links) in 2RU
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>MTP-to-LC Breakouts:</strong> Modular cassettes for efficient trunk cable management
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Ultra-Low Loss:</strong> Less than 0.55dB (MM) and less than 0.75dB (SM) per cassette
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>360° Wire Manager:</strong> Simplifies high-density MTP bundle routing
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Ideal Applications:</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Hyperscale data centers maximizing connectivity per square foot</li>
                    <li>• Large AI training facilities with thousands of GPU connections</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* EXO Platform */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300">
              <CardHeader className="text-center pb-6 bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-300 transition-colors">
                  <Network className="w-10 h-10 text-purple-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700 mb-2">EXO™ Platform</CardTitle>
                <p className="text-gray-700 font-medium">Specialized Wavelength Division Multiplexing (WDM)</p>
                <p className="text-sm text-gray-600 mt-2">
                  Perfect for service providers needing to dramatically increase fiber capacity
                </p>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-900">Key Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Wavelength Division Multiplexing:</strong> Combine 4, 8, or 16 channels onto single
                        fiber pair
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Massive Fiber Savings:</strong> Increase capacity up to 16x without new cables
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Protocol Agnostic:</strong> Supports Ethernet, Fibre Channel, SONET over same fiber
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Compact & Passive:</strong> No power required, minimal 1RU footprint
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Ideal Applications:</h5>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Data Center Interconnects (DCI) over limited fiber pairs</li>
                    <li>• 5G networks and service provider backhaul</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Industry Leaders Choose Wave2Wave</h2>
            <p className="text-xl text-gray-600">For their Physical Layer Infrastructure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Density Leadership</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Highest MTP and LC termination density in the industry, saving up to 80% of rack space compared to
                  traditional solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enables AI/ML Performance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Stable, high-performance physical foundation that lossless RoCEv2 and InfiniBand fabrics for GPU
                  clusters depend on.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Future-Proof Architecture</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Modular systems support MTP-12, MTP-16, and MTP-24 connectors for 400G, 800G, and future 1.6T optics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Simplicity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tool-free, hot-swappable cassettes enable rapid MACs without network disruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Detailed performance metrics for both EVO™ and EXO™ platforms</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* EVO Specifications */}
            <Card className="border-2 border-blue-100">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 text-center">
                <CardTitle className="text-2xl font-bold text-blue-700">EVO™ High-Density Platform</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900">Form Factor:</strong>
                    <p className="text-gray-600">1RU or 2RU modular panels</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Connectivity (2RU):</strong>
                    <p className="text-gray-600">Up to 144 Duplex LC connections</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Connector Support:</strong>
                    <p className="text-gray-600">MTP-12/16/24 rear, Duplex LC front</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Fiber Standards:</strong>
                    <p className="text-gray-600">OM4/OM5 MM, OS2 SM</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Performance:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Insertion Loss: Less than 0.55dB (MM), less than 0.75dB (SM)</li>
                    <li>• Return Loss: Greater than 50dB (APC), Greater than 35dB (UPC)</li>
                    <li>• Operating Temperature: -5°C to +70°C</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* EXO Specifications */}
            <Card className="border-2 border-purple-100">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 text-center">
                <CardTitle className="text-2xl font-bold text-purple-700">EXO™ WDM Platform</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900">Form Factor:</strong>
                    <p className="text-gray-600">1RU modular chassis</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Technology:</strong>
                    <p className="text-gray-600">Passive CWDM, LAN-WDM, DWDM</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Channel Capacity:</strong>
                    <p className="text-gray-600">4, 8, and 16-channel configs</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Connectors:</strong>
                    <p className="text-gray-600">Duplex LC for all ports</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Performance:</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• CWDM: Less than 1.8dB typical insertion loss</li>
                    <li>• LAN-WDM: Less than 2.2dB typical insertion loss</li>
                    <li>• 8-Ch DWDM: Less than 3.0dB typical</li>
                    <li>• 16-Ch DWDM: Less than 4.5dB typical</li>
                    <li>• Channel Isolation: Greater than 30dB</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Engineered for Next-Generation Applications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl text-blue-700">AI/Machine Learning Infrastructure</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  The EVO™ platform provides the clean, structured cabling needed to build and scale massive GPU
                  clusters, ensuring reliable communication for distributed training workloads.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl text-green-700">Hyperscale Cloud Providers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Maximize revenue per rack with EVO's unmatched termination density. Simplify fiber management and
                  accelerate tenant provisioning with a modular, easy-to-manage system.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-purple-700" />
                  </div>
                  <CardTitle className="text-xl text-purple-700">5G Networks & Service Providers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Use the EXO™ WDM platform to multiply the capacity of existing fiber backhaul and fronthaul networks,
                  dramatically reducing capital expenditures.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                    <Layers className="w-6 h-6 text-orange-700" />
                  </div>
                  <CardTitle className="text-xl text-orange-700">Data Center Interconnects</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Deploy WDM technology to maximize the utilization of existing dark fiber between facilities,
                  supporting multiple protocols and services over the same physical infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Small Packages, Large Impact</h2>
            <h3 className="text-2xl text-blue-600 mb-4">EVO™ Modular Cassettes</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The EVO™ modular cassettes offer powerful hardware in a small, modular form factor. The benefits are
              significant: less space, better airflow, and reduced environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_6xMTP_Feed-through%281%29%281%29%281%29-fqRn5lIHRI1LAoCDfT3eXZXq4yAy1u.png"
                  alt="EVO 6xMTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO 6xMTP Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_12xMTP_Feed-through%281%29%281%29%281%29-bsXg1fFpQ7BI9zw3se3PL7AWoVQ7b6.png"
                  alt="EVO 12xMTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO 12xMTP Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_Cassette_MTP%281%29%281%29%281%29-bnZtXLfi5blKIcNM6xoYhsNgEfdoft.png"
                  alt="EVO MTP"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO MTP</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_LC_Cassette%281%29%281%29%281%29-0dNubTalPvqlPOUydMgZkmt7Qsj0wl.png"
                  alt="EVO LC"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO LC</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_Cassettes_Stacked%281%29%281%29%281%29-MY6dcAiYruCO6lnGKn8OPlaxkSvqvz.png"
                  alt="EVO Stacked"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO Stacked</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-LC.CASSCFT1%281%29%281%29%281%29-IcVRNanckgMnUobWjX0SyM3GuUKKMS.png"
                  alt="EVO SC"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO SC</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-LC-Feedthrough%281%29%281%29%281%29-BIni6py26m3vzZykT8RhIasglrPxMc.png"
                  alt="EVO LC Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO LC Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_12xMTP_Feed-through%281%29%281%29%281%29-bsXg1fFpQ7BI9zw3se3PL7AWoVQ7b6.png"
                  alt="EVO MTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO MTP Feed-through</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Simplified Deployment and Operations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tool-Free Installation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hot-swappable cassettes with push-pull latching mechanisms enable rapid deployment without specialized
                tools or network downtime.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cable Management Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                360° rotating wire manager accommodates various cable routing requirements while maintaining proper bend
                radius protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layers className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modular Scalability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Start with the capacity you need today and seamlessly add modules as your network grows, protecting your
                infrastructure investment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each platform undergoes rigorous testing with detailed insertion loss measurements provided for every
                cassette.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white" id="video">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">See EVO™ in Action</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <a href="https://youtu.be/m4jIYh3ug9g" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative group cursor-pointer">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-2RU-Filled-Front-Panel-highlights2-300x172%281%29%281%29%281%29-nzmB9WtzqeGtGQRlCmWKBDb0ntv4gF.jpg"
                    alt="EVO Panel Solution"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-red-700 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </a>
              <h3 className="text-xl font-semibold">EVO Panel Solution</h3>
            </div>

            <div className="text-center space-y-4">
              <a href="https://youtu.be/ZX-Q8WJCB-U" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative group cursor-pointer">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/maxresdefault%281%29%281%29%281%29-3GQS5a0fS9DcBS2MCPRPCmeMknmAKK.jpg"
                    alt="EVO Fiber Panel Solution"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-red-700 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </a>
              <h3 className="text-xl font-semibold">
                EVO Fiber Panel Solution: Plug-n-Play Connectivity with Elegance
              </h3>
            </div>

            <div className="text-center space-y-4">
              <a href="https://youtu.be/PpPtQZOHGeQ" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative group cursor-pointer">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/maxresdefault%281%29%281%29%281%29-JezkqIoMv3kFamiiuVNvTd6BcS3Qa4.jpg"
                    alt="EVO Patch Panels"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-red-700 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </a>
              <h3 className="text-xl font-semibold">EVO Patch Panels</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5" id="brochure">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold">Join the EVO™ Revolution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At Wave2Wave.io, we are dedicated to driving innovation and creating solutions that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">EVO Datasheet</h3>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  SEE BROCHURE ⟶
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold">EVO Kite</h3>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  SEE BROCHURE ⟶
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold">EVO Storybook</h3>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  SEE BROCHURE ⟶
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">W2W EVO Switch+ Storybook</h3>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  SEE BROCHURE ⟶
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold">W2W EVO Switch+</h3>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  SEE BROCHURE ⟶
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h2 className="text-4xl font-bold">EVO™ Product Gallery</h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive EVO™ modular panel and cassette solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((imageUrl, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={`EVO Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

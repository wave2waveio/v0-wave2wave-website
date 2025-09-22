import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, Zap, Shield, Layers, Play, CheckCircle } from "lucide-react"

export default function EVOProductPage() {
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
    "https://www.wave2wave.io/images/evo-images/Gallery-13-qr05vktktinbf4mpecx1grqrufgehnxpt4dbk3duyo.jpeg",
    "https://www.wave2wave.io/images/evo-images/Gallery-14-qr05vnn3e0r6dyilxw4x6915ml2i4r8wtibrzx9og0.jpeg",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">EVO Solutions</Badge>
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Evolution in
                  <span className="text-green-600"> Connectivity</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Next-generation EVO solutions that evolve with your business needs, providing cutting-edge technology
                  for modern data center environments.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wave2wave.io/datasheets/W2W-C123_EVO-EXO Series Datasheet_REV1.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="mr-2 h-5 w-5" />
                    Download Datasheet
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Hero-EVO-2RU-Evo-Switch-2%281%29%281%29%281%29%281%29%281%29%281%29%281%29-kPSPfkIE1R3o4wrGBihShbMiUhkGnC.png"
                    alt="EVO TM Modular Panel and Cassette Solution"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Hero-EVO-2RU-Evo-1%281%29%281%29%281%29%281%29%281%29%281%29%281%29-YXrVqEWTuUv6mvWaRrU02WdwPlet4X.png"
                    alt="EVO Evolution Networking Solution"
                    className="w-full h-64 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-2RU-Filled-Front-Panel-highlights2-768x441%281%29%281%29%281%29%281%29%281%29%281%29%281%29-o9qLPqUa6jlzevZHFpx24HBytmVrio.jpg"
                    alt="EVO Benefits Diagram"
                    className="w-full h-64 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVO Modular Cassettes Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Small Packages, Large Impact</h2>
            <h3 className="text-2xl text-gray-600">EVO Modular Cassettes</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 leading-relaxed">
              The EVO modular cassettes offer powerful hardware in a small, modular form factor. The benefits are
              significant: less space, better airflow, and reduced environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_6xMTP_Feed-through%281%29%281%29%281%29%281%29%281%29%281%29%281%29-TI43pf4vpynVzwa8iy2MEw35Ems0wf.png"
                  alt="EVO 6xMTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO 6xMTP Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_12xMTP_Feed-through%281%29%281%29%281%29%281%29%281%29%281%29%281%29-RstpnhncnypIQYZmRAZs2zkh955lY5.png"
                  alt="EVO 12xMTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO 12xMTP Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_Cassette_MTP%281%29%281%29%281%29%281%29%281%29%281%29%281%29-pfTVXD8GTJ5KkUGDU4bsi8CjYSctol.png"
                  alt="EVO MTP"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO MTP</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_LC_Cassette%281%29%281%29%281%29%281%29%281%29%281%29%281%29-lXyVF9u3QaNNK1gdSdoQDLcx1gwPw3.png"
                  alt="EVO LC"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO LC</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_Cassettes_Stacked%281%29%281%29%281%29%281%29%281%29%281%29%281%29-0cxssnvI0gJgRlp8qE7J9rG6ysVIdl.png"
                  alt="EVO Stacked"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO Stacked</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-LC.CASSCFT1%281%29%281%29%281%29%281%29%281%29%281%29%281%29-dfirNfIbbZ7p0eEbogyjo4At3yEeVC.png"
                  alt="EVO SC"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO SC</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-LC-Feedthrough%281%29%281%29%281%29%281%29%281%29%281%29%281%29-qC81VEsCo1mAHQVe3tWq8EAWYLVhqc.png"
                  alt="EVO LC Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO LC Feed-through</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO_12xMTP_Feed-through%281%29%281%29%281%29%281%29%281%29%281%29%281%29-RstpnhncnypIQYZmRAZs2zkh955lY5.png"
                  alt="EVO MTP Feed-through"
                  className="w-full h-32 object-contain mb-4 rounded"
                />
                <CardTitle className="text-sm">EVO MTP Feed-through</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Evolution of High-Speed Connectivity */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Evolution of High-Speed Connectivity
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our EVO™ panel family brings unmatched scalability and density to your data center. Built with simplicity
              in mind, EVO™ enhances functionality in dynamic, mission-critical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-300 transition-colors">
                  <Layers className="w-8 h-8 text-blue-700" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-4">Scalability and Density</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Unmatched scalability for future-proofing data centers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>High-density solutions to maximize space efficiency</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Future-proof-design-cassettes-closeup-lg%281%29%281%29%281%29%281%29%281%29%281%29%281%29-af5U52vmgYgPZG1ydgR8xVpQNQET52.jpg"
                    alt="Scalability and Density"
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-300 transition-colors">
                  <Zap className="w-8 h-8 text-green-700" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-4">Enhanced Functionality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Simplified design enhances functionality in dynamic environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Versatile platform supports 10G, 40G, and 100/120G connections</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Enhanced-Functionality-Pulltabs-lg%281%29%281%29%281%29%281%29%281%29%281%29%281%29-laGLidxbPbJPdMMPdE5WOLHtwljH20.jpg"
                    alt="Enhanced Functionality"
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-300 transition-colors">
                  <Shield className="w-8 h-8 text-purple-700" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-4">Future-Proof Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Built-in modularity ensures your infrastructure can adapt to emerging technologies and growing
                  bandwidth demands with seamless integration.
                </p>
                <div className="mt-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Future-proof-design-cassettes-lg%281%29%281%29%281%29%281%29%281%29%281%29%281%29-SlV6KMAvvh7gfWX7vUCxTPZBXlVTz8.jpg"
                    alt="Future-Proof Design"
                    className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EVO Product Specifications */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">EVO Product Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical specifications for Multi Mode and Single Mode EVO solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-300 transition-colors">
                  <Layers className="w-10 h-10 text-blue-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-700 mb-2">Multi Mode OM4</CardTitle>
                <p className="text-gray-700">High-performance solutions for short to medium range applications</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Part #: 69EVO-2U8P-12</h4>
                  <p className="text-gray-600 leading-relaxed">
                    EVO Switch+ Multi Mode OM4 2U Panel to Support 36 QSFP+/QSFP28 with 2 Additional Slots
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Part #: 69EVO-1U8P-4</h4>
                  <p className="text-gray-600 leading-relaxed">
                    EVO Switch+ Multi Mode OM4 1U Panel to Support 12 QSFP+/QSFP28 with 1 Additional Slot
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Part #: 69EVO51-8020+</h4>
                  <p className="text-gray-600 leading-relaxed">
                    EVO Switch+ Multi Mode OM4 Cassette to Support 3 QSFP+/QSFP28 to Existing Chassis
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-300 transition-colors">
                  <Zap className="w-10 h-10 text-orange-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-orange-700 mb-2">Single Mode</CardTitle>
                <p className="text-gray-700">Long-range, high-bandwidth connectivity solutions</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Part #: 69EVO-2U3P-12</h4>
                  <p className="text-gray-600 leading-relaxed">
                    EVO Switch+ Single Mode 2U Panel to Support 36 QSFP+/QSFP28 with 2 Additional Slots
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Part #: 69EVO-1U3P-4</h4>
                  <p className="text-gray-600 leading-relaxed">
                    EVO Switch+ Single Mode 1U Panel to Support 12 QSFP+/QSFP28 with 1 Additional Slot
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Part #: 69EVO51-3021+</h4>
                  <p className="text-gray-600 leading-relaxed">
                    EVO Switch+ Single Mode Cassette to Support 3 QSFP+/QSFP28 to Existing Chassis
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4" id="video">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <a href="https://youtu.be/m4jIYh3ug9g" target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative group cursor-pointer">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/EVO-2RU-Filled-Front-Panel-highlights2-300x172%281%29%281%29%281%29%281%29%281%29%281%29%281%29-nWmYqzUWBEbHX4nb4oJYarJxWkweQu.jpg"
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/maxresdefault%281%29%281%29%281%29%281%29%281%29%281%29%281%29-6d3c1faM3Y4WY0UGKz8in4VRO4KiSa.jpg"
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/maxresdefault%281%29%281%29%281%29%281%29%281%29%281%29%281%29-wxHQ14o0UE3DmoUftkHUBKyqkdQ1JO.jpg"
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

      {/* Join the EVO Revolution */}
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

      {/* EVO Product Gallery */}
      <section className="py-20 px-4" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
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

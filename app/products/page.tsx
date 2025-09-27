"use client"

import { ArrowRight, Zap, Cable, Server, Sheet as Ethernet, Power, TestTube, Settings, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const categories = [
    {
      id: "high-speed-interconnects",
      title: "High-Speed Interconnects",
      subtitle: "DAC / AOC / Transceivers",
      icon: Zap,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "fiber-cabling",
      title: "Fiber Cabling",
      subtitle: "Custom Trunks, Patch Cords, MPO/MTP, Risers, Bundles",
      icon: Cable,
      color: "green",
      gradient: "from-green-500 to-green-600",
    },
    {
      id: "fiber-connectivity-hardware",
      title: "Fiber Connectivity Hardware",
      subtitle: "Patch Panels, Cassettes, Chassis",
      icon: Server,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: "copper-cabling",
      title: "Copper Cabling",
      subtitle: "Cat6A / Cat7 / Bundled Assemblies, Patch Cords",
      icon: Ethernet,
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: "power-rack-infrastructure",
      title: "Accessories, Power, Infrastructure",
      subtitle: "Custom Power Cords, Couplers, Adapters, Attenuators, Enclosures",
      icon: Power,
      color: "red",
      gradient: "from-red-500 to-red-600",
    },
    {
      id: "testing-lab-solutions",
      title: "Testing & Lab Solutions",
      subtitle: "Loopbacks, Fiber-in-a-Box",
      icon: TestTube,
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      id: "accessories",
      title: "Cleaning, Supplies and more",
      subtitle: "Labeling, Cable Management, Cleaning Tools",
      icon: Settings,
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
    },
  ]

  const handleExploreProducts = () => {
    const element = document.getElementById("product-categories")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Custom and Out-of-the-Box
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cabling, Data Center and Networking Products
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-300 leading-relaxed max-w-4xl mx-auto">
              From 800G/400G high speed cables to complete data center solutions, discover our premium quality,
              comprehensive range of products designed for modern data centers and enterprise networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={handleExploreProducts}
              >
                Explore Products
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Index */}
      <section id="product-categories" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Product Categories</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <div className="p-6 relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-500">{category.subtitle}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* 1. High-Speed Interconnects */}
      <section id="high-speed-interconnects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <Zap className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">High-Speed Interconnects</h2>
              <p className="text-xl text-slate-600">AOC / DAC / Transceivers</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/QSFPto4SFP1728.jpg"
                alt="QSFP to 4x SFP breakout cables"
                width={600}
                height={600}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-500 text-white">DAC Cables</Badge>
                    <CardTitle className="text-xl text-slate-900">Direct Attach Copper</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 mb-4 text-base">
                    SFP+, SFP28, QSFP+, QSFP28, QSFP56, QSFP-DD; 10G to 400G; passive and active options.
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">10G SFP+ DAC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">25G SFP28 DAC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">100G QSFP28 DAC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">400G QSFP-DD DAC</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-600 text-white">AOC Cables</Badge>
                    <CardTitle className="text-xl text-slate-900">Active Optical</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 mb-4 text-base">
                    QSFP28, QSFP-DD, OSFP; 100G to 800G for long-distance, high-speed connections.
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-slate-600">100G QSFP28 AOC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-slate-600">400G QSFP-DD AOC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-slate-600">800G OSFP AOC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-slate-600">Custom Lengths</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-slate-600 text-white">Transceivers</Badge>
                    <CardTitle className="text-xl text-slate-900">Breakout & Modules</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    QSFP28 to 4×SFP28 (100G to 4×25G) breakouts, plus SFP+, SFP28, QSFP28, QSFP-DD, OSFP transceivers
                    with LR4, SR4, CWDM4, PSM4 modules.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* 2. Fiber Cabling */}
      <section id="fiber-cabling" className="py-20 bg-gradient-to-b from-green-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white">
              <Cable className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Fiber Cabling</h2>
              <p className="text-xl text-slate-600">Trunks, Patch Cords, MPO/MTP, Risers</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-green-500 text-white">Trunk Cables</Badge>
                    Pre-terminated Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    MTP/MPO, LC, SC; SM & MM; plenum/LSZH rated for demanding environments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-green-600 text-white">Patch Cords</Badge>
                    Flexible Connectivity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    LC, SC, ST, FC, MPO; uni-boot, push-pull tab, bend-insensitive options.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-slate-600 text-white">MPO/MTP</Badge>
                    High-Density Harnesses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    MPO to LC fanouts, 12F, 24F, 48F configurations for high-density applications.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl"></div>
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/MTP_Bundle.jpg"
                alt="MTP/MPO fiber optic cable"
                width={600}
                height={600}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* 3. Fiber Connectivity Hardware */}
      <section id="fiber-connectivity-hardware" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <Server className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Fiber Connectivity Hardware</h2>
              <p className="text-xl text-slate-600">Patch Panels, Cassettes, Enclosures</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-xl"></div>
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/EVO-2RU-Filled-Front-Panel-highlights2.jpg"
                alt="EXO Mini fiber patch panel"
                width={600}
                height={600}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-purple-500 text-white">Patch Panels</Badge>
                    High-Density Chassis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    1U/2U/4U chassis, high-density options for maximum port count in minimal space.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-purple-600 text-white">Cassettes</Badge>
                    Modular Breakouts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    MPO/MTP-LC breakout, 12F/24F/48F configurations for flexible connectivity.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-slate-600 text-white">Enclosures</Badge>
                    Complete Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Rackmount fiber enclosures, wall-mount boxes for various installation scenarios.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* 4. Copper Cabling */}
      <section id="copper-cabling" className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <Ethernet className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Copper Cabling</h2>
              <p className="text-xl text-slate-600">Cat6A / Cat7 / Bundled Assemblies</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-orange-500 text-white">Cat6A/Cat7</Badge>
                    High-Performance Patch Cords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Standard & slim versions, multiple colors, snagless boots for reliable connections.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-orange-600 text-white">Bundled</Badge>
                    Pre-Configured Assemblies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Rack-to-server bundles with custom labeling for organized installations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-slate-600 text-white">Infrastructure</Badge>
                    Complete Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Bulk cable, patch panels, and keystone jacks for complete copper connectivity.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl"></div>
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/structured-cabling.webp"
                alt="71 Series Cat6A patch cord"
                width={600}
                height={600}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* 5. Power & Rack Infrastructure */}
      <section id="power-rack-infrastructure" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white">
              <Power className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Power & Fiber Accessories</h2>
              <p className="text-xl text-slate-600">Custom Power Cords, Cables, Adapters, Attentuators, Transceivers and connectors</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-3xl blur-xl"></div>
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/product/C123/rackandstack.png"
                alt="Data center rack and stack infrastructure"
                width={600}
                height={600}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-red-500 text-white">Power Cords</Badge>
                    Custom & Standard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    C13–C14, C19–C20; black and color-coded options; custom lengths available.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-red-600 text-white">Fiber Accessories</Badge>
                    Adapters, Transceivers, Attentuators, Couplers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Fiber optic accessories to complete a data center build.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-slate-600 text-white">Panels</Badge>
                    Panels, Enclosures, and more
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Fiber enclosures, Panels, Cable trays, and management solutions for organized installations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* 6. Testing & Lab Solutions */}
      <section id="testing-lab-solutions" className="py-20 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <TestTube className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Testing & Lab Solutions</h2>
              <p className="text-xl text-slate-600">Loopbacks, Fiber-in-a-Box</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-indigo-500 text-white">Loopbacks</Badge>
                    Testing Modules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    SFP+, QSFP+, QSFP28, MPO, OSFP loopback modules for testing and validation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-indigo-600 text-white">Fiber-in-a-Box</Badge>
                    Distance Simulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    1km to 200km spools for distance simulation and testing scenarios.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-slate-600 text-white">Custom Harnesses</Badge>
                    Lab Kits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Labeled, short-run kits for lab setups and specialized testing requirements.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/product/Loopback/Ganged_Loopback.jpg"
                alt="Loopback modules and Fiber-in-a-Box"
                width={600}
                height={600}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* 7. Accessories */}
      <section id="accessories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <Settings className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Accessories</h2>
              <p className="text-xl text-slate-600">Labeling, Cable Management, Cleaning Tools</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/cleaning_cable-labels.jpg"
                alt="Cable labels, cleaning tools, and RFID tags"
                width={600}
                height={600}
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-teal-500 text-white">Labeling</Badge>
                    Identification Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Serialized tags, RFID options for comprehensive asset management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-teal-600 text-white">Cleaning</Badge>
                    Maintenance Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    MPO/MTP cleaners, lint-free wipes, inspection scopes for optimal performance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100/50 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-3">
                    <Badge className="bg-slate-600 text-white">Hardware</Badge>
                    Installation Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 text-base">
                    Optical attenuators, fiber adapters, rack screws, cage nuts, and filler panels.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-slate-200"></div>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 px-4 py-2">Custom Engineering</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Custom High-Speed Solutions?</h2>
            <p className="text-xl mb-10 text-slate-300 leading-relaxed">
              From 400G DAC cables to complete 800G AOC solutions, we engineer products tailored to your exact
              specifications. DCIM integration, custom labeling, and kitting available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/contact">Get Product Samples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">Product Support</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Support & Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beyond products, we provide comprehensive support for your high-speed infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100/50">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mx-auto mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-slate-900">Custom Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700">
                  Tailored 400G, 800G, and specialty solutions designed to your exact specifications
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100/50">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white mx-auto mb-4">
                  <TestTube className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-slate-900">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700">
                  Expert guidance for high-speed product selection, installation, and troubleshooting
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100/50">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-slate-900">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700">
                  Rigorous testing and validation for all products before shipment
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-slate-100/50">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mx-auto mb-4">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-slate-900">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700">
                  Quick turnaround times with organized kitting and logistics support
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Upgrade to High-Speed Infrastructure?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Contact our product specialists to discuss your 400G, 800G, and high-speed requirements. Get personalized
            recommendations for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg" asChild>
              <Link href="/contact">Contact Product Specialist</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="/contact">Request Product Samples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

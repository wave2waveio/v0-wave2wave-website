import { HeroCarousel } from "./HeroCarousel"

export default function PatchPanelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroCarousel />

      <main className="space-y-4 py-4">
        <section id="introduction" className="p-4">
export function Introduction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl text-slate-900">
                Fiber Patch Panels - Critical Role in the Data center
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                In today's data centers, speed and density are paramount. The backbone of 
                every high-performance network—from AI clusters to hyperscale cloud 
                platforms—is the physical fiber optic infrastructure.

                High-density patch panels are the central nervous system of this infrastructure, 
                providing a crucial, organized hub for managing the massive number of fiber 
                connections required for 400G, 800G, and future terabit networking.
                They provide the flexibility and scalability to grow and reconfigure as needed, organization and management of the data center, protection of expensive equipment and durability and longevity by shielding permanent infrastructure connections.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl text-blue-600 mb-2">400G+</div>
                  <div className="text-sm text-slate-600">Network Speeds Supported</div>
                </div>
                
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl text-blue-600 mb-2">144</div>
                  <div className="text-sm text-slate-600">Max Duplex Links per 1RU</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1624965439943-09e0238644e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwY2FibGVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTg1NjE5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fiber optic cables technology"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border">
              <div className="text-xs text-slate-600 mb-1">Signal Integrity</div>
              <div className="text-sm text-blue-600">Ultra-Low Loss</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
        </section>

        <section id="problemsolution" className="p-4">
export function ProblemSolution() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            The Challenge & Our Solution
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
            Solving the AI & Hyperscale Infrastructure Challenge
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem */}
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <CardTitle className="text-red-900">The Challenge</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800">
                Modern AI/ML workloads demand massive east-west bandwidth. Traditional, 
                low-density cabling creates a "physical layer bottleneck" that limits 
                GPU cluster performance, complicates network management, and wastes 
                valuable rack space.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-red-700">
                    Limited GPU cluster performance due to physical layer constraints
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-red-700">
                    Complex network management with point-to-point cabling
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-red-700">
                    Wasted rack space with low-density solutions
                  </p>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>Critical Point:</strong> As you scale to 400G and 800G, a robust 
                  and ultra-dense structured cabling strategy is no longer optional—it's 
                  essential for performance and ROI.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <CardTitle className="text-green-900">Our Solution</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800">
                The EVO™ and EXO™ platforms are not just patch panels; they are engineered 
                ecosystems for high-speed fiber management. They deliver industry-leading 
                density and signal integrity, creating a reliable physical layer that allows 
                your active switches and optics to perform at their full potential.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-green-700">
                    Industry-leading density with up to 144 duplex links per 1RU
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-green-700">
                    Ultra-low loss engineering for optimal signal integrity
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-green-700">
                    Modular ecosystem supporting 400G, 800G, and future 1.6T speeds
                  </p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Result:</strong> A Foundation for Performance that maximizes your 
                  infrastructure investment while enabling seamless scaling for future 
                  networking requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
        </section>

        <section id="productoverview" className="p-4">
export function ProductOverview() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Product Platforms
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
            Two Platforms for Scalable Connectivity
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Choose the right platform for your infrastructure needs, from ultra-high-density 
            hyperscale deployments to specialized wavelength division multiplexing applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* EVO Platform */}
          <div className="space-y-8">
            <Card className="overflow-hidden border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-blue-900">EVO™ Platform</CardTitle>
                  <Badge className="bg-blue-600">Ultra-High-Density</Badge>
                </div>
                <p className="text-blue-700">
                  Engineered for maximum fiber density in hyperscale data centers and large AI clusters
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByYWNrJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NTg1MjcyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Server rack in data center"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-blue-900">Key Features:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Network className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <strong>Industry-Leading Density:</strong> Provides connectivity for up to 48 QSFP-DD/OSFP 
                          transceivers (144 Duplex LC links) in a 2RU chassis
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <strong>MTP-to-LC Breakouts:</strong> Modular cassettes efficiently break out 
                          high-speed MTP-12/16/24 trunk cables into duplex LC connections
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <strong>Ultra-Low Insertion Loss:</strong> Features typical loss of &lt;0.55dB (MM) 
                          and &lt;0.75dB (SM) per cassette, protecting your optical power budget
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <h5 className="text-blue-900 mb-2">Ideal Applications:</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Hyperscale data centers maximizing connectivity per square foot</li>
                    <li>• Large AI training facilities requiring structured cabling for thousands of GPU connections</li>
                  </ul>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Learn More About EVO™
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* EXO Platform */}
          <div className="space-y-8">
            <Card className="overflow-hidden border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-purple-900">EXO™ Platform</CardTitle>
                  <Badge className="bg-purple-600">WDM Specialized</Badge>
                </div>
                <p className="text-purple-700">
                  Perfect for service providers or enterprises needing to dramatically increase 
                  the capacity of existing fiber infrastructure
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODU0NjI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI artificial intelligence technology"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-purple-900">Key Features:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Network className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <strong>Wavelength Division Multiplexing:</strong> Utilizes passive WDM technology 
                          to combine multiple data streams (e.g., 4, 8, or 16 channels) onto a single fiber pair
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <strong>Massive Fiber Savings:</strong> Increase the capacity of dark fiber or 
                          campus links by up to 16x without laying new cables
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <strong>Protocol Agnostic:</strong> Transparently supports a variety of services 
                          like Ethernet, Fibre Channel, and SONET over the same fiber
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <h5 className="text-purple-900 mb-2">Ideal Applications:</h5>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Data Center Interconnects (DCI) over limited fiber pairs</li>
                    <li>• 5G networks and service provider backhaul</li>
                  </ul>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Learn More About EXO™
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
        </section>

        <section id="competitiveadvantages" className="p-4">
export function CompetitiveAdvantages() {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Density Leadership",
      description: "Our EVO™ platform offers the highest MTP and LC termination density in the industry, saving up to 80% of rack space compared to traditional solutions.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Cpu,
      title: "Enables AI/ML Performance",
      description: "We provide the stable, high-performance physical foundation that lossless RoCEv2 and InfiniBand fabrics for GPU clusters depend on.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Layers,
      title: "Future-Proof Architecture",
      description: "Our modular systems support MTP-12, MTP-16, and MTP-24 connectors, ensuring you're ready for the cabling requirements of 400G, 800G, and future 1.6T optics.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Wrench,
      title: "Operational Simplicity",
      description: "Tool-free, hot-swappable cassettes simplify installation and allow for rapid Moves, Adds, and Changes (MACs) without network disruption.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Competitive Advantages
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
            Why Industry Leaders Choose Wave2Wave
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our platforms deliver unmatched performance, density, and reliability for 
            mission-critical infrastructure deployments across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={index} 
                className={`${advantage.bgColor} ${advantage.borderColor} border-2 hover:shadow-lg transition-shadow duration-300`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-white ${advantage.borderColor} border`}>
                      <IconComponent className={`w-6 h-6 ${advantage.color}`} />
                    </div>
                    <CardTitle className="text-xl text-slate-900">
                      {advantage.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">80%</div>
              <div className="text-sm text-slate-600">Rack Space Savings</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">2000+</div>
              <div className="text-sm text-slate-600">Data Centers Deployed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">99.9%</div>
              <div className="text-sm text-slate-600">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
        </section>

        <section id="technicalspecs" className="p-4">
export function TechnicalSpecs() {
  const evoSpecs = [
    { parameter: "Form Factor", value: "1RU or 2RU modular panels" },
    { parameter: "Connectivity Capacity (2RU)", value: "Up to 144 Duplex LC connections" },
    { parameter: "Transceiver Support", value: "48 QSFP-DD or OSFP transceivers" },
    { parameter: "Connector Support", value: "MTP-12/16/24 (rear), Duplex LC (front)" },
    { parameter: "Fiber Standards", value: "OM4/OM5 Multimode, OS2 Single-Mode" },
    { parameter: "Insertion Loss (MM)", value: "Typical <0.55dB" },
    { parameter: "Insertion Loss (SM)", value: "Typical <0.75dB" },
    { parameter: "Return Loss (APC)", value: ">50dB" },
    { parameter: "Return Loss (UPC)", value: ">35dB" },
    { parameter: "Operating Temperature", value: "-5°C to +70°C" }
  ];

  const exoSpecs = [
    { parameter: "Form Factor", value: "1RU modular chassis" },
    { parameter: "Technology", value: "Passive CWDM, LAN-WDM, and DWDM multiplexing" },
    { parameter: "Channel Capacity", value: "Available in 4, 8, and 16-channel configurations" },
    { parameter: "Connector Support", value: "Duplex LC for channel ports and equipment ports" },
    { parameter: "CWDM Insertion Loss", value: "<1.8dB typical" },
    { parameter: "LAN-WDM Insertion Loss", value: "<2.2dB typical" },
    { parameter: "8-Channel DWDM", value: "<3.0dB typical" },
    { parameter: "16-Channel DWDM", value: "<4.5dB typical" },
    { parameter: "Channel Isolation", value: ">30dB" },
    { parameter: "Operating Wavelengths", value: "ITU Grid compliant" }
  ];

  return (
    <section id="specifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Specifications
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
            Detailed Platform Specifications
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical specifications for both EVO™ and EXO™ platforms, 
            engineered for demanding enterprise and hyperscale environments.
          </p>
        </div>

        <Tabs defaultValue="evo" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="evo" className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              EVO™ Platform
            </TabsTrigger>
            <TabsTrigger value="exo" className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              EXO™ Platform
            </TabsTrigger>
          </TabsList>

          <TabsContent value="evo">
            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  EVO™ High-Density Platform Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Parameter</TableHead>
                      <TableHead>Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {evoSpecs.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-slate-700">
                          {spec.parameter}
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {spec.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="text-blue-900 mb-2">Key Performance Highlights</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Industry-leading 144 duplex LC connections in 2RU</li>
                      <li>• Ultra-low insertion loss for optimal signal integrity</li>
                      <li>• Hot-swappable modular cassettes for easy maintenance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="text-blue-900 mb-2">Compliance & Standards</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• IEC 61754 connector standards compliant</li>
                      <li>• TIA/EIA-568 structured cabling standards</li>
                      <li>• RoHS and REACH environmental compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exo">
            <Card className="border-purple-200 bg-purple-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-purple-900">
                  <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                  EXO™ WDM Platform Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Parameter</TableHead>
                      <TableHead>Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exoSpecs.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-slate-700">
                          {spec.parameter}
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {spec.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="text-purple-900 mb-2">WDM Technology Benefits</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Massive fiber capacity multiplication up to 16x</li>
                      <li>• Protocol agnostic operation</li>
                      <li>• Passive operation requiring no power</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="text-purple-900 mb-2">Applications</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Data center interconnects (DCI)</li>
                      <li>• 5G fronthaul and backhaul networks</li>
                      <li>• Service provider metro networks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
        </section>

        <section id="usecases" className="p-4">
export function UseCases() {
  const useCases = [
    {
      icon: Brain,
      title: "AI/Machine Learning Infrastructure",
      description: "The EVO™ platform provides the clean, structured cabling needed to build and scale massive GPU clusters, ensuring reliable communication for distributed training workloads.",
      platform: "EVO™",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Support for thousands of GPU connections",
        "Lossless RoCEv2 and InfiniBand fabric support",
        "Ultra-low latency physical layer",
        "Modular scaling for growing clusters"
      ]
    },
    {
      icon: Cloud,
      title: "Hyperscale Cloud Providers",
      description: "Maximize revenue per rack with EVO's unmatched termination density. Simplify fiber management and accelerate tenant provisioning with a modular, easy-to-manage system.",
      platform: "EVO™",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: [
        "Maximum connectivity per square foot",
        "Rapid tenant provisioning capabilities",
        "Tool-free installation and maintenance",
        "Future-proof 400G/800G readiness"
      ]
    },
    {
      icon: Radio,
      title: "5G Networks & Service Providers",
      description: "Use the EXO™ WDM platform to multiply the capacity of existing fiber backhaul and fronthaul networks, dramatically reducing capital expenditures.",
      platform: "EXO™",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "16x fiber capacity multiplication",
        "CAPEX reduction for network expansion",
        "Support for multiple protocols simultaneously",
        "Passive operation with no power requirements"
      ]
    },
    {
      icon: Network,
      title: "Data Center Interconnects",
      description: "Deploy WDM technology to maximize the utilization of existing dark fiber between facilities, supporting multiple protocols and services over the same physical infrastructure.",
      platform: "EXO™",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Dark fiber capacity maximization",
        "Multi-protocol service support",
        "Long-distance connectivity optimization",
        "Cost-effective DCI solutions"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Use Cases & Applications
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
            Engineered for Next-Generation Applications
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From AI training clusters to 5G networks, our platforms enable the most 
            demanding connectivity requirements across diverse industry applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card 
                key={index} 
                className={`${useCase.bgColor} ${useCase.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white ${useCase.borderColor} border-2`}>
                        <IconComponent className={`w-7 h-7 ${useCase.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900 mb-1">
                          {useCase.title}
                        </CardTitle>
                        <Badge 
                          variant="secondary" 
                          className={`${useCase.bgColor} ${useCase.color} border-0 text-xs`}
                        >
                          {useCase.platform} Platform
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-slate-700 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-slate-900">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${useCase.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl text-slate-900 mb-6">
              Industry Deployments by the Numbers
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl text-blue-600">500+</div>
                <div className="text-sm text-slate-600">AI Clusters Connected</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-green-600">1M+</div>
                <div className="text-sm text-slate-600">GPU Links Managed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-purple-600">100+</div>
                <div className="text-sm text-slate-600">5G Networks Enabled</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-orange-600">50+</div>
                <div className="text-sm text-slate-600">DCI Deployments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
        </section>

        <section id="productperformance" className="p-4">
export function ProductPerformance() {
  const evoMetrics = [
    { 
      label: "Insertion Loss (MM)", 
      value: "<0.55dB", 
      percentage: 95, 
      description: "Industry-leading low loss for multimode fiber"
    },
    { 
      label: "Insertion Loss (SM)", 
      value: "<0.75dB", 
      percentage: 93, 
      description: "Exceptional performance for single-mode applications"
    },
    { 
      label: "Return Loss (APC)", 
      value: ">50dB", 
      percentage: 98, 
      description: "Superior signal reflection performance"
    },
    { 
      label: "Return Loss (UPC)", 
      value: ">35dB", 
      percentage: 88, 
      description: "Excellent UPC connector performance"
    }
  ];

  const exoMetrics = [
    { 
      label: "CWDM Insertion Loss", 
      value: "<1.8dB", 
      percentage: 85, 
      description: "Optimal for CWDM wavelength multiplexing"
    },
    { 
      label: "LAN-WDM Insertion Loss", 
      value: "<2.2dB", 
      percentage: 82, 
      description: "Efficient LAN-WDM performance"
    },
    { 
      label: "8-Channel DWDM", 
      value: "<3.0dB", 
      percentage: 78, 
      description: "High-density DWDM capability"
    },
    { 
      label: "Channel Isolation", 
      value: ">30dB", 
      percentage: 95, 
      description: "Excellent channel separation"
    }
  ];

  return (
    <section id="performance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Product Performance
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
            Proven Signal Integrity for Mission-Critical Applications
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive performance metrics demonstrating the exceptional quality and 
            reliability of our EVO™ and EXO™ platforms in demanding environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* EVO Performance */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-900">
                  EVO™ Platform Performance
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {evoMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-blue-800">{metric.label}</span>
                      <span className="text-sm text-blue-600">{metric.value}</span>
                    </div>
                    <Progress value={metric.percentage} className="h-2" />
                    <p className="text-xs text-blue-700">{metric.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <Signal className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg text-blue-900">OM4/OM5</div>
                  <div className="text-xs text-blue-700">Fiber Compatibility</div>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <Thermometer className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg text-blue-900">-5°C to +70°C</div>
                  <div className="text-xs text-blue-700">Operating Range</div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Key Performance Features
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• MTP-12/16/24 and duplex LC connector compatibility</li>
                  <li>• Rigorous testing ensures consistent performance</li>
                  <li>• Detailed insertion loss measurements provided</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* EXO Performance */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Signal className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-900">
                  EXO™ WDM Performance
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {exoMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-800">{metric.label}</span>
                      <span className="text-sm text-purple-600">{metric.value}</span>
                    </div>
                    <Progress value={metric.percentage} className="h-2" />
                    <p className="text-xs text-purple-700">{metric.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-purple-100 p-4 rounded-lg text-center">
                  <div className="text-lg text-purple-900">16-Ch</div>
                  <div className="text-xs text-purple-700">DWDM Capacity</div>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg text-center">
                  <div className="text-lg text-purple-900">ITU Grid</div>
                  <div className="text-xs text-purple-700">Wavelength Compliant</div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="text-purple-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  WDM Technology Benefits
                </h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Passive operation requires no power consumption</li>
                  <li>• Protocol agnostic - supports multiple service types</li>
                  <li>• ITU grid compliant wavelengths for standardization</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl text-slate-900 mb-6">
                Quality Assurance & Testing
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg text-slate-900 mb-2">100% Tested</h4>
                  <p className="text-sm text-slate-600">
                    Every module undergoes rigorous performance testing before shipping
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Signal className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg text-slate-900 mb-2">Traceable Performance</h4>
                  <p className="text-sm text-slate-600">
                    Detailed insertion loss measurements provided for each cassette
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Thermometer className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg text-slate-900 mb-2">Environmental Testing</h4>
                  <p className="text-sm text-slate-600">
                    Validated performance across full operating temperature range
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
        </section>

        <section id="installationmanagement" className="p-4">
export function InstallationManagement() {
  const features = [
    {
      icon: Wrench,
      title: "Tool-Free Installation",
      description: "Hot-swappable cassettes with push-pull latching mechanisms enable rapid deployment and reconfiguration without specialized tools or network downtime.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: RotateCcw,
      title: "Cable Management Excellence",
      description: "The 360° rotating wire manager accommodates various cable routing requirements while maintaining proper bend radius protection for high-speed fiber assemblies.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: TrendingUp,
      title: "Modular Scalability",
      description: "Start with the capacity you need today and seamlessly add modules as your network grows, protecting your infrastructure investment while adapting to changing requirements.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Each platform undergoes rigorous testing to ensure consistent performance across all modules, with detailed insertion loss measurements provided for every cassette.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Installation & Management
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">
            Simplified Deployment and Operations
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our platforms are designed for operational efficiency, featuring tool-free installation, 
            intelligent cable management, and modular scalability for growing networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-white ${feature.borderColor} border`}>
                      <IconComponent className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl text-slate-900">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Installation Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-2 border-blue-200 bg-blue-50/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">5</span>
              </div>
              <h3 className="text-xl text-slate-900 mb-2">Minutes</h3>
              <p className="text-sm text-slate-600">
                Average cassette replacement time with no network disruption
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-green-200 bg-green-50/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">0</span>
              </div>
              <h3 className="text-xl text-slate-900 mb-2">Tools Required</h3>
              <p className="text-sm text-slate-600">
                Complete installation and maintenance without specialized equipment
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-purple-200 bg-purple-50/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">360°</span>
              </div>
              <h3 className="text-xl text-slate-900 mb-2">Cable Management</h3>
              <p className="text-sm text-slate-600">
                Rotating wire manager accommodates any cable routing requirement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardContent className="text-center p-12">
            <h3 className="text-3xl mb-4">
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get detailed technical specifications, pricing, and deployment guidance 
              from our infrastructure experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 border-white"
              >
                Download Complete Datasheets
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule Infrastructure Consultation
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Expert Support Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Same-Day Quote Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Global Deployment Support</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
        </section>

      </main>
    </div>
  )
}

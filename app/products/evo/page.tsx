import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, Zap, Shield, Layers, Gauge, Cable, Settings, CheckCircle } from "lucide-react"

export default function EVOProductPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Cabling123 Solutions
                </Badge>
                <h1 className="text-5xl font-bold text-balance leading-tight">
                  Connecting for Life with <span className="text-primary">EVO™</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  At Cabling123, we believe in creating a future where connectivity is seamless and elegant. Our modular
                  panel and cassette solutions are designed to elevate the performance of today's data centers while
                  preparing them for the challenges of tomorrow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Explore EVO Solutions
                </Button>
                <Button size="lg" variant="default" className="text-lg px-8 bg-secondary hover:bg-secondary/90">
                  Request a Quote
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Download className="w-5 h-5 mr-2" />
                  Download Datasheet
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/evo-modular-fiber-optic-panel-system-in-data-cente.jpg"
                alt="EVO Modular Panel System"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-balance">EVO™ Modular Panel and Cassette Solution</h2>
            <p className="text-xl text-muted-foreground">Panels For Unparalleled Efficiency</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">EVO Switch+</CardTitle>
                <CardDescription>Versatile Application Support</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">EVO Switch+</CardTitle>
                <CardDescription>Flexible Mounting Options</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-lg">EVO Pal</CardTitle>
                <CardDescription>Compact and Efficient</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cable className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Modular Cassettes</CardTitle>
                <CardDescription>Small Packages, Large Impact</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Small Packages Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-balance">Small Packages, Large Impact</h2>
            <h3 className="text-2xl text-muted-foreground">Modular Cassettes</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Our engineers face the challenge of building powerful hardware in small, modular form factors. The
              benefits are significant: less space, better airflow, and reduced environmental impact. Innovation thrives
              when stakes are high, and EVO™ stands as a testament to our commitment to technological evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "EVO 6xMTP Feed-through",
              "EVO 12xMTP Feed-through",
              "EVO MTP",
              "EVO LC",
              "EVO Stacked",
              "EVO SC",
              "EVO LC Feed-through",
              "EVO MTP Feed-through",
            ].map((product, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img
                    src={`/abstract-geometric-shapes.png?height=120&width=200&query=${product} fiber optic cassette`}
                    alt={product}
                    className="w-full h-24 object-contain mb-4 rounded"
                  />
                  <CardTitle className="text-sm">{product}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-balance">The Evolution of High-Speed Connectivity</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Our EVO™ panel family brings unmatched scalability and density to your data center. Built with simplicity
              in mind, EVO™ enhances functionality in dynamic, mission-critical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-left">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Scalability and Density</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unmatched scalability for future-proofing data centers</li>
                  <li>• High-density solutions to maximize space efficiency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Enhanced Functionality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Simplified design enhances functionality in dynamic environments</li>
                  <li>• Versatile platform supports 10G, 40G, and 100/120G connections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Future-Proof Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Built-in modularity ensures your infrastructure can adapt to emerging technologies and growing
                  bandwidth demands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">EVO™ Product Specifications</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions for every connectivity need</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Multi Mode Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Multi Mode OM4</CardTitle>
                <CardDescription>High-performance solutions for short to medium range applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Part #: 69EVO-2U8P-12</h4>
                    <p className="text-sm text-muted-foreground">
                      EVO Switch+ Multi Mode OM4 2U Panel to Support 36 QSFP+/QSFP28 with 2 Additional Slots
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Part #: 69EVO-1U8P-4</h4>
                    <p className="text-sm text-muted-foreground">
                      EVO Switch+ Multi Mode OM4 1U Panel to Support 12 QSFP+/QSFP28 with 1 Additional Slot
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Part #: 69EVO51-8020+</h4>
                    <p className="text-sm text-muted-foreground">
                      EVO Switch+ Multi Mode OM4 Cassette to Support 3 QSFP+/QSFP28 to Existing Chassis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Single Mode Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Single Mode</CardTitle>
                <CardDescription>Long-range, high-bandwidth connectivity solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Part #: 69EVO-2U3P-12</h4>
                    <p className="text-sm text-muted-foreground">
                      EVO Switch+ Single Mode 2U Panel to Support 36 QSFP+/QSFP28 with 2 Additional Slots
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Part #: 69EVO-1U3P-4</h4>
                    <p className="text-sm text-muted-foreground">
                      EVO Switch+ Single Mode 1U Panel to Support 12 QSFP+/QSFP28 with 1 Additional Slot
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Part #: 69EVO51-3021+</h4>
                    <p className="text-sm text-muted-foreground">
                      EVO Switch+ Single Mode Cassette to Support 3 QSFP+/QSFP28 to Existing Chassis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">EVO™ Modular Panel and Cassette Solution</h2>
            <h3 className="text-2xl text-muted-foreground">Highlights</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "High density chassis with 14 slots in 2U or 5 slots in 1U",
              "Built-in and pre-installed wire management capabilities",
              "360° front and rear wire management options",
              "Cables can be routed top, bottom and sideways",
              "Grouping fibers with individual slots",
              "Flexible cassettes and feedthrough plate options",
              "Supports mix of front and rear mounting of cassettes",
              "Inter-changeable cassettes between 1U and 2U chassis",
              "Supports Single Mode (SM) and Multi-Mode applications",
            ].map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wire Management Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-balance">360° Wire Management</h2>
                <h3 className="text-2xl text-muted-foreground">Guide the Cables Whichever Way You Like</h3>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Combing cables in style, the EVO™ wire manager revolves 360° around the chassis with mounting options
                  from the front or back, up or down and sideways. Protecting and organizing your physical assets is a
                  critical first step to secure the digital lifestyle.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/360-degree-wire-management-system-for-fiber-optic-.jpg"
                alt="360° Wire Management"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intuitive Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-balance">Intuitive Features</h2>
                <h3 className="text-2xl text-muted-foreground">The Subtleties That Intrigue</h3>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Designed for human intuition, the EVO™ product family is a creation that was born through vibrant
                  collaboration among our optical, mechanical, and graphical design teams. Engineered with meanings and
                  emotions, the EVO™ optimizes the connectivity of a network and ensures an enjoyable user experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/detailed-view-of-modular-fiber-optic-cassettes-and.jpg"
                alt="EVO Modular Components"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">Join the EVO™ Revolution</h2>
          <p className="text-xl opacity-90 text-pretty">
            At Cabling123, we are dedicated to driving innovation and creating solutions that matter. Discover how EVO™
            can transform your data center connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Request a Quote
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Request Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Brochures
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

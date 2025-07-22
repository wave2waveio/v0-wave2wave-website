import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Custom Fiber Optic Patch Cables & Enclosures",
      description:
        "Precision-engineered custom fiber patch cables, enclosures, panels, and couplers for unique installations. Tailored to exact specifications for connector types, lengths, labeling, and enclosure dimensions to ensure seamless integration.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Pre-Terminated Fiber Optic Cable Assemblies",
      description:
        "High-performance pre-terminated fiber optic cable assemblies for rapid deployment and minimal on-site termination. Available with a range of connectors, jacket types, and precise cut lengths to meet demanding data center and enterprise requirements. We can customize the lengths, colors, and labeling per your specification or taken directly from the DCIM design.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Transceivers/SFP Modules, Media Converters",
      description:
        "Enterprise-grade SFP transceivers, and media converters to power high-speed data center, campus, and edge networks. Multi-vendor compatible for seamless connectivity and network expansion.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fiber Optic Termination Boxes & Adapter Panels",
      description:
        "Versatile fiber optic termination boxes and adapter panels supporting a wide range of connector styles and port densities. Modular designs with flexible sizing and labeling options to support structured cabling builds.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fiber MTP / MPO Cassettes and Components",
      description:
        "High-density MTP/MPO cassettes and components for efficient fiber management and breakout applications. Enable seamless connections between trunk cables and patching environments with minimal loss.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fiber Optic Cable by the Foot (Unterminated)",
      description:
        "High-quality bulk fiber optic cable sold by the foot, ideal for custom field terminations or installations requiring precise cable runs. Available in singlemode, multimode, and specialty constructions. We can customize the lengths, colors, and labeling per your specification or taken directly from the DCIM design.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fiber Optic Test Instruments",
      description:
        "Comprehensive fiber optic test equipment including OTDRs, power meters, light sources, and inspection scopes to validate network performance and ensure optimal link integrity.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fiber Optic Cleaning Products",
      description:
        "Critical fiber optic cleaning tools and supplies—wipes, sticks, cassettes, and solvents—to maintain connector cleanliness and reduce signal loss, ensuring peak network performance.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Ethernet Patch Cables (Cat 5E, 6, 6A, 7, 8)",
      description:
        "Premium Ethernet patch cables in Cat5e, Cat6, Cat6A, Cat7, and Cat8 standards. Customizable in shielding and build quality for enterprise networks and data centers. We can customize the lengths, colors, and labeling per your specification or taken directly from the DCIM design.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Bulk Ethernet Cable (Cat 5E, 6E, 6A, 7A, 8)",
      description:
        "High-performance bulk Ethernet cable spools for structured cabling projects, available in a full range of categories and shielding options. Perfect for in-building or campus deployments. We can customize the lengths, colors, and labeling per your specification or taken directly from the DCIM design.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Ethernet Keystone Jacks, Plugs, Boots, Wallplates",
      description:
        "Reliable Ethernet keystone jacks, RJ45 plugs, strain relief boots, and wallplates for clean, professional network terminations and structured cabling builds.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Tactical, Rugged, and Harsh Environment Cabling",
      description:
        "Durable, ruggedized fiber and copper cabling built for extreme environments—military, industrial, outdoor, or broadcast. Engineered for resistance to moisture, abrasion, temperature, and impact, with customizable build options.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Patch Panels",
      description:
        "Modular Ethernet patch panels in various port counts and configurations for neat, organized cable management. Available for shielded and unshielded applications.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Datacom Installation Tools and Testers",
      description:
        "Professional-grade datacom installation tools and testers for copper and fiber networks, including crimpers, punchdown tools, cable testers, and certification kits.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Network Racks, Cabinets, and Metal Products",
      description:
        "Sturdy network racks, cabinets, and metal enclosures designed for optimal airflow, cable management, and equipment security in data center and telecom environments.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom and Off-the-Shelf Products Kitted for Easy, Fast Installation
            </h1>
            <p className="text-xl mb-8 text-slate-200">
              From fiber optic assemblies to network infrastructure, discover our comprehensive range of products
              designed to elevate your network performance, reliability, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product Lines */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Custom & Featured Product Lines</h2>
            <p className="text-xl text-slate-600">Kitted, modern network infrastructure solutions.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-0">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Fiber+Optic+Solutions"
                    alt="Fiber Optic Solutions"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-blue-900">Fiber Optic Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-800 mb-4">
                  Complete range of custom and pre-cut fiber optic cables, assemblies, and components for high-speed
                  data transmission.
                </CardDescription>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Pre-terminated assemblies</li>
                  <li>• MTP/MPO solutions</li>
                  <li>• Custom patch cables</li>
                  <li>• Bulk cable options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-0">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Ethernet+Infrastructure"
                    alt="Ethernet Infrastructure"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-green-900">Ethernet Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-800 mb-4">
                  Comprehensive custom and pre-cut Ethernet cabling and connectivity solutions for all network speeds
                </CardDescription>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Cat5e through Cat8 cables</li>
                  <li>• Patch panels and jacks</li>
                  <li>• Network switches</li>
                  <li>• Installation tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="pb-0">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Infrastructure+Hardware"
                    alt="Infrastructure Hardware"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-purple-900">Infrastructure Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-800 mb-4">
                  Custom and standard Racks, enclosures, and support hardware for professional installations
                </CardDescription>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>• Network racks and cabinets</li>
                  <li>• Cable management</li>
                  <li>• Test equipment</li>
                  <li>• Cleaning supplies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Product Categories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our extensive catalog of networking and cabling solutions, each engineered for performance and
              reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader className="pb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              We specialize in custom-engineered products tailored to your exact specifications. From DCIM designs to
              field requirements, we deliver solutions that fit perfectly.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
              <Link href="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Support & Services</h2>
            <p className="text-xl text-slate-600">
              Beyond products, we provide comprehensive support for your infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Custom Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored solutions designed to your exact specifications and requirements
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert guidance for product selection, installation, and troubleshooting
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Rigorous testing and validation for all products before shipment</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick turnaround times with organized kitting and logistics support</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our product specialists to discuss your requirements and get personalized recommendations for your
            next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
              <Link href="/contact">Contact Product Specialist</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
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

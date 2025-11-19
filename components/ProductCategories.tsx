import Link from "next/link"
import { ArrowRight, Cable, Zap, Network, Settings } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  {
    title: "Fiber Optics",
    description: "High-density MTP/MPO, LC, and SC assemblies for 400G/800G AI clusters.",
    icon: <Network className="h-8 w-8 text-blue-500" />,
    href: "/fiber",
    color: "border-l-blue-500",
  },
  {
    title: "Copper Cabling",
    description: "Cat6/6A patch cords and trunks engineered for maximum headroom.",
    icon: <Cable className="h-8 w-8 text-orange-500" />,
    href: "/ethernet",
    color: "border-l-orange-500",
  },
  {
    title: "Power Solutions",
    description: "Mission-critical power cables and PDU whips for high-density racks.",
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    href: "/systems-and-accessories",
    color: "border-l-yellow-500",
  },
  {
    title: "Accessories",
    description: "Cable management, testing tools, and rack accessories.",
    icon: <Settings className="h-8 w-8 text-slate-500" />,
    href: "/systems-and-accessories",
    color: "border-l-slate-500",
  },
]

export function ProductCategories() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Product Categories</h2>
            <p className="text-lg text-slate-600">
              Comprehensive infrastructure solutions engineered for performance and reliability.
            </p>
          </div>
          <Link 
            href="/products" 
            className="hidden md:flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 ${category.color}`}>
                <CardHeader>
                  <div className="mb-4 p-3 bg-slate-100 w-fit rounded-lg group-hover:bg-white transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-medium text-blue-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Products <ArrowRight className="ml-2 h-3 w-3" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link 
            href="/products" 
            className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
          >
            View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

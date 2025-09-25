import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Shield } from "lucide-react"
import Image from "next/image"

export function ProductOverview() {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">Two Platforms, Infinite Possibilities</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our EVO™ and EXO™ patch panel platforms deliver unmatched density, performance, and flexibility for modern
            data center requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-8">
          {/* EVO Platform */}
          <Card className="overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwcGF0Y2glMjBwYW5lbHxlbnwxfHx8fDE3NTg1NjE5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="EVO Platform patch panel"
                width={1080}
                height={810}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white">EVO™ Platform</Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                EVO™ High-Density Platform
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Engineered for maximum port density and optimal cable management in space-constrained environments.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-xl text-blue-600 mb-1">144</div>
                  <div className="text-xs text-slate-600">Duplex LC per 1RU</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-xl text-blue-600 mb-1">≤0.15dB</div>
                  <div className="text-xs text-slate-600">Insertion Loss</div>
                </div>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Ultra-high density design
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Advanced cable management
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Tool-free maintenance
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* EXO Platform */}
          <Card className="overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwZXF1aXBtZW50fGVufDF8fHx8MTc1ODU2MTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="EXO Platform patch panel"
                width={1080}
                height={810}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-600 text-white">EXO™ Platform</Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                EXO™ Modular Platform
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Flexible, modular design that adapts to evolving network requirements with field-configurable options.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-xl text-green-600 mb-1">96</div>
                  <div className="text-xs text-slate-600">Duplex LC per 1RU</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-xl text-green-600 mb-1">≤0.12dB</div>
                  <div className="text-xs text-slate-600">Insertion Loss</div>
                </div>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Modular flexibility
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Field-configurable
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Future-proof design
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

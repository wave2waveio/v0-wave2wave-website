import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, TrendingUp, Shield, Zap } from "lucide-react"

export function CompetitiveAdvantages() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Competitive Advantages
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">Why Choose Our Patch Panel Solutions</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our EVO™ and EXO™ platforms deliver unmatched performance, density, and reliability for modern data center
            requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Industry-Leading Density</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Up to 144 duplex LC connections per 1RU, maximizing your rack space efficiency and reducing footprint.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Ultra-Low Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Engineered for ≤0.15dB insertion loss, ensuring optimal signal integrity for high-speed applications.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Future-Proof Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Supports current 400G/800G speeds and ready for future 1.6T networking requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">Proven Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm">
                Engineered for mission-critical environments with superior build quality and long-term durability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

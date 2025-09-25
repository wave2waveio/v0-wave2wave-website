import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Shield, Award } from "lucide-react"

export function ProductPerformance() {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Performance Metrics
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">Proven Performance at Scale</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-blue-600">144</CardTitle>
              <p className="text-sm text-slate-600">Max Duplex Links per 1RU</p>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">≤0.12dB</CardTitle>
              <p className="text-sm text-slate-600">Ultra-Low Insertion Loss</p>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl text-purple-600">≥55dB</CardTitle>
              <p className="text-sm text-slate-600">Return Loss Performance</p>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-2xl text-orange-600">1.6T</CardTitle>
              <p className="text-sm text-slate-600">Future Speed Ready</p>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Specification</th>
                    <th className="text-center py-3 px-4">EVO™ Platform</th>
                    <th className="text-center py-3 px-4">EXO™ Platform</th>
                    <th className="text-center py-3 px-4">Industry Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Port Density (1RU)</td>
                    <td className="text-center py-3 px-4 text-blue-600 font-semibold">144 duplex</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold">96 duplex</td>
                    <td className="text-center py-3 px-4 text-slate-500">48-72 duplex</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Insertion Loss</td>
                    <td className="text-center py-3 px-4 text-blue-600 font-semibold">≤0.15dB</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold">≤0.12dB</td>
                    <td className="text-center py-3 px-4 text-slate-500">≤0.25dB</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Return Loss</td>
                    <td className="text-center py-3 px-4 text-blue-600 font-semibold">≥50dB</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold">≥55dB</td>
                    <td className="text-center py-3 px-4 text-slate-500">≥45dB</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Speed Support</td>
                    <td className="text-center py-3 px-4 text-blue-600 font-semibold">Up to 1.6T</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold">Up to 1.6T</td>
                    <td className="text-center py-3 px-4 text-slate-500">Up to 400G</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

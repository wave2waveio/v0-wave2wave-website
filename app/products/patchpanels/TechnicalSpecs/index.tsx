import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function TechnicalSpecs() {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Technical Specifications
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">Detailed Technical Specifications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* EVO Platform Specs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge className="bg-blue-600">EVO™</Badge>
                High-Density Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Port Density</h4>
                  <p className="text-slate-600">144 duplex LC per 1RU</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Insertion Loss</h4>
                  <p className="text-slate-600">≤0.15dB typical</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Return Loss</h4>
                  <p className="text-slate-600">≥50dB</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Operating Temp</h4>
                  <p className="text-slate-600">-40°C to +75°C</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Key Features</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">Ultra-high density design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">Advanced cable management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">Tool-free maintenance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EXO Platform Specs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge className="bg-green-600">EXO™</Badge>
                Modular Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Port Density</h4>
                  <p className="text-slate-600">96 duplex LC per 1RU</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Insertion Loss</h4>
                  <p className="text-slate-600">≤0.12dB typical</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Return Loss</h4>
                  <p className="text-slate-600">≥55dB</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Operating Temp</h4>
                  <p className="text-slate-600">-40°C to +75°C</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Key Features</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">Modular flexibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">Field-configurable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-600">Future-proof design</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

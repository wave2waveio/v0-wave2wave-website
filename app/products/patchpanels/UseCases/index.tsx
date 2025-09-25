import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Network, Zap } from "lucide-react"

export function UseCases() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Use Cases
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">Perfect for Every High-Performance Environment</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">AI/ML & GPU Clusters</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">
                Enable massive east-west bandwidth for AI training and inference workloads with ultra-dense fiber
                connectivity.
              </p>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• High-performance computing clusters</li>
                <li>• Machine learning training environments</li>
                <li>• GPU-accelerated workloads</li>
                <li>• Distributed AI inference</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Hyperscale Data Centers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800">
                Maximize rack efficiency and simplify cable management in large-scale cloud and colocation facilities.
              </p>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Cloud service provider infrastructure</li>
                <li>• Colocation facilities</li>
                <li>• Content delivery networks</li>
                <li>• Edge computing deployments</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">Enterprise Networks</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-800">
                Future-proof enterprise infrastructure with scalable, high-density connectivity solutions.
              </p>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• Campus network backbones</li>
                <li>• Financial trading floors</li>
                <li>• Research institutions</li>
                <li>• Government facilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <CardTitle className="text-orange-900">High-Frequency Trading</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800">
                Ultra-low latency connectivity for time-sensitive financial applications requiring microsecond
                precision.
              </p>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• Trading floor infrastructure</li>
                <li>• Market data distribution</li>
                <li>• Risk management systems</li>
                <li>• Algorithmic trading platforms</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

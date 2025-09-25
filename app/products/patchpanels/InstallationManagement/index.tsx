import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstallationManagement() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Installation & Management
          </Badge>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-6">Simple Installation, Powerful Management</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-blue-600" />
                Quick Installation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Our patch panels are designed for rapid deployment with tool-free installation and intuitive cable
                management systems.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Tool-Free Design</h4>
                    <p className="text-sm text-slate-600">No special tools required for installation or maintenance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Guided Cable Management</h4>
                    <p className="text-sm text-slate-600">
                      Integrated routing guides ensure optimal cable organization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Standard Rack Mount</h4>
                    <p className="text-sm text-slate-600">Compatible with standard 19" racks and cabinets</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-green-600" />
                Ongoing Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Comprehensive documentation and support tools ensure your infrastructure remains optimized and
                maintainable.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Digital Documentation</h4>
                    <p className="text-sm text-slate-600">Complete installation guides and technical specifications</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Labeling System</h4>
                    <p className="text-sm text-slate-600">Clear port identification for easy troubleshooting</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Technical Support</h4>
                    <p className="text-sm text-slate-600">Expert support team available for deployment assistance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download Installation Guide
            </Button>
            <Button size="lg" variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Contact Technical Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowLeft, Calendar, Clock, User, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function KittingCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>

            <Badge className="mb-4">Case Study</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Case Study: 40% Faster Deployment with Advanced Kitting
            </h1>

            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                December 5, 2024
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />6 min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Wave2Wave Case Study Team
              </div>
            </div>

            <Image
              src="/placeholder.svg?height=400&width=800&text=Data+Center+Deployment+Success"
              alt="Data Center Deployment Success"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 mb-8">
                When a Fortune 500 financial services company needed to rapidly expand their data center capacity to
                support growing digital services, they turned to Wave2Wave.io's advanced kitting and logistics services.
                The result: a 40% reduction in deployment time and significant cost savings.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Challenge</h2>
              <p className="text-slate-700 mb-4">
                Our client, a major financial services provider, faced an urgent need to expand their primary data
                center to support rapid business growth and new digital banking services. The project requirements
                included:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Installation of 200 new server racks across three data halls</li>
                <li>Complex structured cabling for high-frequency trading systems</li>
                <li>Tight 8-week deployment timeline</li>
                <li>Zero tolerance for errors due to regulatory requirements</li>
                <li>Minimal disruption to existing operations</li>
              </ul>

              <p className="text-slate-700 mb-6">
                Traditional deployment approaches would have required 12-14 weeks, making it impossible to meet the
                business-critical timeline. The client needed an innovative solution that could accelerate deployment
                without compromising quality or reliability.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Wave2Wave.io Solution</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Advanced Kitting Strategy</h3>
              <p className="text-slate-700 mb-4">
                Wave2Wave.io developed a comprehensive kitting strategy that organized all components by rack and
                installation sequence:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Rack-specific kits:</strong> Every component needed for each rack was pre-organized and
                  labeled
                </li>
                <li>
                  <strong>Installation sequence optimization:</strong> Components were arranged in the order they would
                  be installed
                </li>
                <li>
                  <strong>Quality pre-checks:</strong> All components were tested and verified before kitting
                </li>
                <li>
                  <strong>Custom labeling:</strong> Clear, consistent labeling system for rapid identification
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">DCIM-Driven Design</h3>
              <p className="text-slate-700 mb-4">
                Using digital twin technology, Wave2Wave.io created a precise virtual model of the deployment:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Exact cable lengths calculated for each connection</li>
                <li>Optimal cable routing paths identified</li>
                <li>Power and cooling requirements validated</li>
                <li>Installation conflicts identified and resolved before deployment</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Precision Logistics</h3>
              <p className="text-slate-700 mb-6">
                Wave2Wave.io coordinated the entire logistics operation to ensure seamless delivery and installation:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>Just-in-time delivery scheduled to minimize storage requirements</li>
                <li>Staged delivery to match installation progress</li>
                <li>Dedicated project management and on-site support</li>
                <li>Real-time tracking and communication systems</li>
              </ul>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
                Results Achieved
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-green-600 mb-2">40%</h3>
                  <p className="text-slate-700 font-semibold mb-2">Faster Deployment</p>
                  <p className="text-slate-600 text-sm">Completed in 8 weeks vs. projected 12-14 weeks</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
                  <p className="text-slate-700 font-semibold mb-2">Reduction in Installation Errors</p>
                  <p className="text-slate-600 text-sm">Near-zero rework required during deployment</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">$2.1M</h3>
                  <p className="text-slate-700 font-semibold mb-2">Total Cost Savings</p>
                  <p className="text-slate-600 text-sm">Reduced labor costs and faster time-to-revenue</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-orange-600 mb-2">100%</h3>
                  <p className="text-slate-700 font-semibold mb-2">On-Time Delivery</p>
                  <p className="text-slate-600 text-sm">All milestones met or exceeded</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Key Success Factors</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
                1. Elimination of On-Site Preparation Time
              </h3>
              <p className="text-slate-700 mb-6">
                Traditional deployments require significant on-site time for sorting, organizing, and preparing
                components. Wave2Wave.io's advanced kitting eliminated this step entirely, allowing installation teams
                to begin productive work immediately upon arrival.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Reduced Installation Errors</h3>
              <p className="text-slate-700 mb-6">
                Pre-tested components and clear organization dramatically reduced the potential for installation errors.
                The systematic approach ensured that the right components were always available at the right time.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Optimized Resource Utilization</h3>
              <p className="text-slate-700 mb-6">
                Installation teams could work at maximum efficiency without waiting for components or dealing with
                organizational tasks. This optimization resulted in significant labor cost savings.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Enhanced Quality Control</h3>
              <p className="text-slate-700 mb-6">
                Every component was tested and verified before kitting, ensuring that installation teams never
                encountered defective or incorrect parts during the critical deployment phase.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Client Testimonial</h2>
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-700 bg-slate-50 p-6 rounded-r-lg mb-8">
                "Wave2Wave.io's advanced kitting approach completely transformed our deployment experience. What
                typically takes us 3-4 months was completed in just 8 weeks, with virtually no errors or rework
                required. The level of organization and attention to detail was exceptional. This approach will be our
                standard for all future data center expansions."
                <footer className="text-slate-600 mt-4 not-italic">
                  — Director of Data Center Operations, Fortune 500 Financial Services Company
                </footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Lessons Learned and Best Practices</h2>
              <p className="text-slate-700 mb-4">
                This successful deployment highlighted several key best practices for advanced kitting:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700">
                <li>
                  <strong>Early engagement:</strong> Involving kitting specialists during the design phase maximizes
                  benefits
                </li>
                <li>
                  <strong>Digital twin integration:</strong> DCIM models provide the precision needed for effective
                  kitting
                </li>
                <li>
                  <strong>Quality first:</strong> Pre-testing all components prevents downstream delays
                </li>
                <li>
                  <strong>Clear communication:</strong> Consistent labeling and documentation are critical
                </li>
                <li>
                  <strong>Logistics coordination:</strong> Timing delivery to match installation progress optimizes
                  efficiency
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Conclusion</h2>
              <p className="text-slate-700 mb-6">
                This case study demonstrates the transformative impact of advanced kitting and logistics services on
                data center deployment projects. By eliminating traditional inefficiencies and organizing components for
                optimal installation flow, Wave2Wave.io helped the client achieve their aggressive timeline while
                maintaining the highest quality standards.
              </p>
              <p className="text-slate-700 mb-6">
                The success of this project has led to an ongoing partnership, with Wave2Wave.io now serving as the
                client's preferred partner for all major infrastructure deployments. The advanced kitting approach has
                become their new standard, delivering consistent time and cost savings across multiple projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Industry Insights
                  </Badge>
                  <CardTitle className="text-lg">
                    <Link
                      href="/resources/dcim-digital-twins-reduce-deployment-risk"
                      className="hover:text-blue-600 transition-colors"
                    >
                      5 Ways DCIM Digital Twins Reduce Deployment Risk
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Discover how digital twin technology is revolutionizing data center planning and deployment.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Behind the Scenes
                  </Badge>
                  <CardTitle className="text-lg">
                    <Link
                      href="/resources/quality-assurance-custom-cable-manufacturing"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Quality Assurance in Custom Cable Manufacturing
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn about the rigorous quality processes that ensure reliable custom cable solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Next Deployment?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Discover how Wave2Wave.io's advanced kitting and logistics services can transform your infrastructure
            projects.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

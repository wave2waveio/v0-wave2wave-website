import { ArrowRight, Users, Target, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wave2Wave.io</h1>
            <p className="text-xl mb-8 text-slate-200">
              Pioneering the future of infrastructure with custom engineering, precision logistics, and digital twin
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                [Placeholder: Company founding story, mission, and vision. Describe how Wave2Wave.io was established to
                address the growing complexity of data center infrastructure deployment.]
              </p>
              <p className="text-lg text-slate-600 mb-6">
                [Placeholder: Key milestones, growth trajectory, and evolution of services. Highlight major achievements
                and expansion into new markets.]
              </p>
              <p className="text-lg text-slate-600">
                [Placeholder: Current market position and future outlook. Describe Wave2Wave.io's role in shaping the
                future of infrastructure solutions.]
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg p-8 text-center">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Company+Photo"
                alt="Wave2Wave.io Team"
                width={500}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-slate-600 italic">[Placeholder: Company photo or office image]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              [Placeholder: Core mission statement and company values that drive our approach to infrastructure
              solutions.]
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  [Placeholder: Description of commitment to innovation and cutting-edge solutions]
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  [Placeholder: Description of quality standards and commitment to excellence]
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  [Placeholder: Description of customer partnership approach and collaborative solutions]
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  [Placeholder: Description of global capabilities and international presence]
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600">
              [Placeholder: Introduction to the leadership team and their expertise]
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200&text=CEO+Photo"
                  alt="CEO"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">[CEO Name]</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>[Placeholder: CEO background, experience, and vision for the company]</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200&text=CTO+Photo"
                  alt="CTO"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">[CTO Name]</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  [Placeholder: CTO background, technical expertise, and innovation leadership]
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=200&text=VP+Photo"
                  alt="VP Operations"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">[VP Name]</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">VP of Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  [Placeholder: VP background, operational expertise, and logistics leadership]
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-slate-600">[Placeholder: Key company statistics and achievements]</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">[X]+</div>
              <div className="text-lg font-semibold text-slate-900">Years in Business</div>
              <div className="text-slate-600">Serving the industry</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">[X]+</div>
              <div className="text-lg font-semibold text-slate-900">Projects Completed</div>
              <div className="text-slate-600">Successful deployments</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">[X]+</div>
              <div className="text-lg font-semibold text-slate-900">Enterprise Clients</div>
              <div className="text-slate-600">Trusted partnerships</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">[X]%</div>
              <div className="text-lg font-semibold text-slate-900">Customer Satisfaction</div>
              <div className="text-slate-600">Quality guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-slate-600">
              [Placeholder: Industry certifications, awards, and recognition received]
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-xl">Industry Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  [Placeholder: List of relevant industry certifications and standards compliance]
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-xl">Awards & Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>[Placeholder: Industry awards, recognition, and accolades received]</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-xl">Partner Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>[Placeholder: Strategic partnerships and vendor certifications]</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Wave2Wave.io?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our expertise and commitment to excellence can help accelerate your next infrastructure
            project.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

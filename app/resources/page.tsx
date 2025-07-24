import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  const featuredArticles = [
    {
      title: "The Complete Guide to Data Center Structured Cabling",
      description:
        "Everything you need to know about designing, implementing, and maintaining structured cabling systems in modern data centers.",
      category: "Technical Guide",
      readTime: "12 min read",
      date: "December 15, 2024",
      image: "/placeholder.svg?height=200&width=300&text=Structured+Cabling+Guide",
      slug: "complete-guide-data-center-structured-cabling",
    },
    {
      title: "5 Ways DCIM Digital Twins Reduce Deployment Risk",
      description:
        "Discover how digital twin technology is revolutionizing data center planning and reducing costly deployment errors.",
      category: "Industry Insights",
      readTime: "8 min read",
      date: "December 10, 2024",
      image: "/placeholder.svg?height=200&width=300&text=DCIM+Digital+Twins",
      slug: "dcim-digital-twins-reduce-deployment-risk",
    },
    {
      title: "Case Study: 40% Faster Deployment with Advanced Kitting",
      description:
        "How a Fortune 500 company accelerated their data center expansion using Wave2Wave's precision kitting services.",
      category: "Case Study",
      readTime: "6 min read",
      date: "December 5, 2024",
      image: "/placeholder.svg?height=200&width=300&text=Kitting+Case+Study",
      slug: "case-study-faster-deployment-advanced-kitting",
    },
  ]

  const recentArticles = [
    {
      title: "Fiber Optic Cable Management Best Practices",
      category: "Best Practices",
      readTime: "5 min read",
      date: "November 28, 2024",
      slug: "fiber-optic-cable-management-best-practices",
    },
    {
      title: "Understanding Cat6A vs Cat8 for High-Speed Networks",
      category: "Technical Guide",
      readTime: "7 min read",
      date: "November 22, 2024",
      slug: "cat6a-vs-cat8-high-speed-networks",
    },
    {
      title: "Edge Computing Infrastructure Requirements",
      category: "Industry Insights",
      readTime: "9 min read",
      date: "November 18, 2024",
      slug: "edge-computing-infrastructure-requirements",
    },
    {
      title: "Quality Assurance in Custom Cable Manufacturing",
      category: "Behind the Scenes",
      readTime: "6 min read",
      date: "November 12, 2024",
      slug: "quality-assurance-custom-cable-manufacturing",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl mb-8 text-slate-200">
              Expert knowledge, technical guides, and industry insights to help you make informed infrastructure
              decisions and optimize your deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-slate-600">
              Our most popular and comprehensive resources for infrastructure professionals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader className="pb-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    unoptimized
                  />
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    <Link href={`/resources/${article.slug}`}>{article.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{article.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/resources/${article.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">More Articles</h2>
            <p className="text-xl text-slate-600">Stay up to date with the latest insights and technical knowledge</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center text-sm text-slate-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                        <Link href={`/resources/${article.slug}`}>{article.title}</Link>
                      </h3>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/resources/${article.slug}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

{/*
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
*/}
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Consultation?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our technical experts are available to discuss your specific infrastructure challenges and provide
            personalized recommendations.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

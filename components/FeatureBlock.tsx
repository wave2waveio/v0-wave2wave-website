import Image from "next/image"
import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureBlockProps {
  icon?: string | ReactNode
  title: string
  description: string | ReactNode
  link?: {
    href: string
    text: string
  }
}

export function FeatureBlock({ icon, title, description, link }: FeatureBlockProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 h-full">
      <CardHeader className="text-center">
        {icon && (
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            {typeof icon === "string" ? (
              <Image src={icon} alt="" width={24} height={24} className="h-6 w-6" />
            ) : (
              icon
            )}
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {typeof description === "string" ? (
          <CardDescription className="text-base">{description}</CardDescription>
        ) : (
          description
        )}
        {link && (
          <a
            href={link.href}
            className="inline-block mt-4 text-primary hover:text-primary-blue-dark font-medium transition-colors"
          >
            {link.text} →
          </a>
        )}
      </CardContent>
    </Card>
  )
}

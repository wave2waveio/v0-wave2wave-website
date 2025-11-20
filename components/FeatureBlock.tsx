import Image from "next/image"
import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureBlockProps {
  icon?: string | ReactNode
  title: string
  description: string | ReactNode
  link?: {
    href: string
    text: string
  }
  className?: string
  iconContainerClassName?: string
}

export function FeatureBlock({ icon, title, description, link, className, iconContainerClassName }: FeatureBlockProps) {
  return (
    <Card
      className={cn(
        "border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 h-full",
        className,
      )}
    >
      <CardHeader className="text-center">
        {icon && (
          <div
            className={cn(
              "w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto",
              iconContainerClassName || "bg-blue-100",
            )}
          >
            {typeof icon === "string" ? (
              <Image src={icon || "/placeholder.svg"} alt="" width={24} height={24} className="h-6 w-6" />
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

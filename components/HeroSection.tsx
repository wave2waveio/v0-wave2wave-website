import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
  alignment?: "center" | "left"
  height?: "default" | "tall"
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Request a Quote",
  ctaLink = "/contact",
  alignment = "center",
  height = "default",
}: HeroSectionProps) {
  const heightClass = height === "tall" ? "h-[600px]" : "h-[400px] md:h-[500px]"
  const textAlign = alignment === "center" ? "text-center" : "text-left"
  const itemsAlign = alignment === "center" ? "items-center" : "items-start"

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 ${textAlign}`}>
        <div className={`max-w-4xl mx-auto flex flex-col ${itemsAlign} gap-6`}>
          <h1 className="text-white drop-shadow-lg">{title}</h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl drop-shadow-md">
            {subtitle}
          </p>
          {ctaText && (
            <Button
              size="lg"
              className="mt-4 bg-primary hover:bg-primary-blue-dark text-white shadow-lg"
              asChild
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

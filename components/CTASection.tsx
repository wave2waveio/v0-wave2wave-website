import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  variant?: "primary" | "dark"
}

export function CTASection({
  title,
  subtitle,
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  variant = "primary",
}: CTASectionProps) {
  const bgClass = variant === "dark" ? "bg-slate-900" : "bg-primary"

  return (
    <section className={`py-16 ${bgClass} text-white`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white mb-4">{title}</h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8"
            asChild
          >
            <Link href={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8"
              asChild
            >
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RotatingHeroProps {
  title: string
  subtitle: string
  images: string[]
  ctaText?: string
  ctaLink?: string
  alignment?: "center" | "left"
  height?: "default" | "tall"
  autoPlayInterval?: number
}

export function RotatingHeroSection({
  title,
  subtitle,
  images,
  ctaText = "Request a Quote",
  ctaLink = "/contact",
  alignment = "center",
  height = "default",
  autoPlayInterval = 5000,
}: RotatingHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval])

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const heightClass = height === "tall" ? "h-[600px]" : "h-[400px] md:h-[500px]"
  const textAlign = alignment === "center" ? "text-center" : "text-left"
  const itemsAlign = alignment === "center" ? "items-center" : "items-start"

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background Images with Crossfade */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image || "/placeholder.svg"}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 ${textAlign}`}>
        <div className={`max-w-4xl mx-auto flex flex-col ${itemsAlign} gap-6`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl drop-shadow-md">{subtitle}</p>
          {ctaText && (
            <Button size="lg" className="mt-4 bg-primary hover:bg-primary-blue-dark text-white shadow-lg" asChild>
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

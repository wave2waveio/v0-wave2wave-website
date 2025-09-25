"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "EVO™ & EXO™ Patch Panels",
    subtitle: "Next-generation patch panel solutions engineered for AI workloads and terabit speeds",
    image: "/images/products/patchpanels/evo-exo-hero.jpg",
    tags: ["AI-Optimized Infrastructure", "Terabit Performance", "Hyperscale Ready"],
  },
  {
    id: 2,
    title: "EVO™ & EXO™ Patch Panels",
    subtitle: "Revolutionary connectivity solutions designed for tomorrow's data centers",
    image: "/images/products/patchpanels/evo-exo-hero.jpg",
    tags: ["Future-Ready Design", "Maximum Density", "Zero Downtime"],
  },
  {
    id: 3,
    title: "EVO™ & EXO™ Patch Panels",
    subtitle: "Unmatched performance and reliability for mission-critical applications",
    image: "/images/products/patchpanels/evo-exo-hero.jpg",
    tags: ["Mission Critical", "Ultra-Low Latency", "Enterprise Grade"],
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-20" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated Content */}
          <div className="relative h-96 flex items-center justify-center">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ${
                  index === currentSlide ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto text-pretty">{slide.subtitle}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                  {slide.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-600/30 px-4 py-2 rounded-full border border-blue-400/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div
                className="bg-white h-1 rounded-full transition-all duration-300 ease-linear"
                style={{
                  width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

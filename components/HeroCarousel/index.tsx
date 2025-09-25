"use client"

import { useState, useEffect } from "react"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  backgroundImage: string
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Design to Deployment - ",
    subtitle: "Expert Customer Service, Uncompromising Quality",
    description:
      "Custom fiber & copper cabling, high-speed 400G/800G interconnects, patch panels & cassettes—delivered in weeks, not months. Pre-labeled, pre-kitted, and built to your spec.",
    backgroundImage: "/images/hero-background.png",
  },
  {
    id: 2,
    title: "Design to Deployment - ",
    subtitle: "Custom Cables. Faster Delivery. Zero Guesswork.",
    description:
      "Building data center, fiber and Ethernet solutions to your exact design, faster lead times, pre-labeled, pre-kitted, and ready to plug and play.",
    backgroundImage: "/images/rackandstack.png",
  },
  {
    id: 3,
    title: "Design to Deployment - ",
    subtitle: "Simplifying the modern Data Center",
    description:
      "From AI clusters to colocation racks, we deliver custom fiber & Ethernet cabling, 400G/800G interconnects, labeling, kitting, and DCIM-driven design—everything you need to deploy with speed and confidence.",
    backgroundImage: "/images/evo-images/Future-proof-design-cassettes-lg.jpg",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setProgress(0)
    }, 5000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100)
    }, 50)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }

  return (
    <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.backgroundImage}')`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ${
                index === currentSlide
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4 absolute inset-0"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
                <span className="text-blue-400"> {slide.subtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">{slide.description}</p>
            </div>
          ))}

          <p className="text-xl text-slate-300 mt-6 italic">
            Serving enterprise, colocation, AI/HPC, telecom, and system integrators worldwide.
          </p>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-blue-400 scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-400 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type ProductGalleryProps = {}

export function ProductGallery({}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const galleryImages = [
    {
      src: "/images/evo-images/Hero-EVO-2RU-Evo-Switch-1.png",
      alt: "EVO Platform Front View",
      title: "EVO™ 2RU High-Density Platform",
    },
    {
      src: "/images/exo-images/EXO2-down-1.jpeg",
      alt: "EXO Platform Configuration",
      title: "EXO™ WDM Platform",
    },
    {
      src: "/images/evo-images/Future-proof-design-cassettes-closeup-lg.jpg",
      alt: "Modular Cassette Design",
      title: "Modular Cassette System",
    },
    {
      src: "/images/evo-images/Gallery-10-qr05vdavaud0u8xmm9o0wtn33chgs33v435fpvp0cg.jpeg",
      alt: "Installation View",
      title: "Professional Installation",
    },
    {
      src: "/fiber-optic-patch-panel-rear-view.jpg",
      alt: "Rear Connectivity View",
      title: "Rear Panel Connectivity",
    },
    {
      src: "/data-center-rack-installation.jpg",
      alt: "Rack Installation",
      title: "Data Center Integration",
    },
    {
      src: "/fiber-optic-cable-management-system.jpg",
      alt: "Cable Management System",
      title: "Advanced Cable Management",
    },
    {
      src: "/high-density-fiber-connections-closeup.jpg",
      alt: "High-Density Connections",
      title: "Ultra-High Density Connections",
    },
    {
      src: "/platform-side-view-with-connectors.jpg",
      alt: "Platform Side View",
      title: "Platform Side Configuration",
    },
    {
      src: "/modular-design-components-layout.jpg",
      alt: "Modular Components",
      title: "Modular Design Components",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length)
    }, 4000) // Rotate every 4 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const handleImageSelect = (index: number) => {
    setSelectedImage(index)
  }

  return (
    <section id="productgallery" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Product Gallery
          </div>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">EVO™ & EXO™ Platform Gallery</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Explore detailed views of our high-density fiber management platforms, showcasing the engineering excellence
            and modular design that powers next-generation data centers.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Image Display */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-all duration-500"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-slate-900">{galleryImages[selectedImage].title}</h3>
              <p className="text-slate-600">{galleryImages[selectedImage].alt}</p>
            </div>

            {/* Dot indicators for rotation progress */}
            <div className="mt-4 flex justify-center space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    selectedImage === index ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-900">Gallery Images</h4>
            <div className="max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={`group aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? "border-blue-600 ring-2 ring-blue-600 ring-opacity-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={200}
                      height={150}
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="mt-12 grid gap-6 text-center md:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-6">
            <div className="mb-2 text-2xl font-bold text-blue-600">144</div>
            <div className="text-sm text-slate-600">Max Duplex Connections per 2RU</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-6">
            <div className="mb-2 text-2xl font-bold text-purple-600">16x</div>
            <div className="text-sm text-slate-600">Fiber Capacity Multiplication</div>
          </div>
          <div className="rounded-lg bg-slate-50 p-6">
            <div className="mb-2 text-2xl font-bold text-green-600">800G+</div>
            <div className="text-sm text-slate-600">Network Speeds Supported</div>
          </div>
        </div>
      </div>
    </section>
  )
}

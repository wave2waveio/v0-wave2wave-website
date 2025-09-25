export function ProductGallery() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our EVO™ and EXO™ patch panel solutions in detail
          </p>
        </div>

        {/* Gallery Grid - Placeholder for images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main product showcase */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-500 font-medium">Main Product Image</p>
                <p className="text-sm text-gray-400">1200x800 recommended</p>
              </div>
            </div>
          </div>

          {/* Detail shots */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-3"></div>
                <p className="text-gray-500 font-medium text-sm">Detail {i + 1}</p>
                <p className="text-xs text-gray-400">600x600</p>
              </div>
            </div>
          ))}

          {/* Technical diagrams */}
          <div className="lg:col-span-3">
            <div className="aspect-[3/1] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-12 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-500 font-medium">Technical Diagram</p>
                <p className="text-sm text-gray-400">1800x600 recommended</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">High-Resolution Images</h3>
            <p className="text-sm text-gray-600">Detailed product photography showcasing build quality</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Technical Diagrams</h3>
            <p className="text-sm text-gray-600">Detailed schematics and installation guides</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-purple-600 rounded"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Installation Views</h3>
            <p className="text-sm text-gray-600">Real-world deployment examples and configurations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

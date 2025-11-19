import { TrendingUp, Clock, Globe, CheckCircle } from 'lucide-react'

export function StatsSection() {
  return (
    <section className="bg-slate-950 py-16 text-white border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-blue-500/10 rounded-full mb-2">
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">1M+</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium">Ports Deployed</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-blue-500/10 rounded-full mb-2">
              <Clock className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">24h</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium">Rapid Shipping</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-blue-500/10 rounded-full mb-2">
              <CheckCircle className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">100%</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium">Factory Tested</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 bg-blue-500/10 rounded-full mb-2">
              <Globe className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Global</h3>
            <p className="text-sm md:text-base text-slate-400 font-medium">Distribution Network</p>
          </div>
        </div>
      </div>
    </section>
  )
}

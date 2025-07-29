import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/wave2wave-logo.png"
                alt="Wave2Wave.io"
                width={200}
                height={60}
                className="h-8 w-auto brightness-0 invert"
                unoptimized
              />
            </div>
            <p className="text-slate-300 mb-4">
              Designing, delivering, and supporting the critical physical infrastructure behind tomorrow's networks.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (866) 473-2701</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@wave2wave.io</span>
              </div>
              <div className="mt-2">
                <p>1017 El Camino Real, #448</p>
                <p>Redwood City, CA 94063</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Wave2Wave.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

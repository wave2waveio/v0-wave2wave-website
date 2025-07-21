import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/wave2wave-logo.png"
                alt="Wave2Wave.io"
                width={200}
                height={60}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-4">
              Designing, delivering, and supporting the critical physical infrastructure behind tomorrow's networks.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
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

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/solutions/structured-cabling" className="hover:text-white transition-colors">
                  Structured Cabling
                </Link>
              </li>
              <li>
                <Link href="/solutions/kitting-logistics" className="hover:text-white transition-colors">
                  Kitting & Logistics
                </Link>
              </li>
              <li>
                <Link href="/solutions/dcim-services" className="hover:text-white transition-colors">
                  DCIM Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/industries/enterprise" className="hover:text-white transition-colors">
                  Enterprise Data Centers
                </Link>
              </li>
              <li>
                <Link href="/industries/commercial" className="hover:text-white transition-colors">
                  Commercial Data Centers
                </Link>
              </li>
              <li>
                <Link href="/industries/broadband" className="hover:text-white transition-colors">
                  Broadband Operators
                </Link>
              </li>
              <li>
                <Link href="/industries/value-added-resellers" className="hover:text-white transition-colors">
                  Value Added Resellers
                </Link>
              </li>
              <li>
                <Link href="/industries/enterprise-it" className="hover:text-white transition-colors">
                  Enterprise IT
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Wave2Wave.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

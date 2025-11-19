import { Mail, Phone, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/custom-engineering" className="hover:text-white transition-colors">
                  Custom Engineering
                </Link>
              </li>
              <li>
                <Link href="/deployment-services" className="hover:text-white transition-colors">
                  Deployment Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/fiber" className="hover:text-white transition-colors">
                  Fiber Solutions
                </Link>
              </li>
              <li>
                <Link href="/ethernet" className="hover:text-white transition-colors">
                  Ethernet Solutions
                </Link>
              </li>
              <li>
                <Link href="/systems-and-accessories" className="hover:text-white transition-colors">
                  Systems & Accessories
                </Link>
              </li>
              <li>
                <Link href="/systems-and-accessories/testing" className="hover:text-white transition-colors">
                  Testing Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  About Wave2Wave
                </Link>
              </li>
              <li>
                <Link href="/company#quality" className="hover:text-white transition-colors">
                  Quality & Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+18664732701" className="hover:text-white transition-colors">
                  +1 (866) 473-2701
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@wave2wave.io" className="hover:text-white transition-colors">
                  info@wave2wave.io
                </a>
              </div>
              <div className="mt-4">
                <p>1017 El Camino Real, #448</p>
                <p>Redwood City, CA 94063</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/wave2wave_logo_anchorcraft_business.png"
                alt="Wave2Wave.io"
                width={150}
                height={40}
                className="h-8 w-auto brightness-0 invert"
                unoptimized
              />
            </div>
            <div className="text-center text-sm text-slate-400">
              <p>&copy; {currentYear} Wave2Wave.io. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/about/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/about/terms-of-use" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/design-mode/wave2wave_logo_anchorcraft_business.png"
              alt="Wave2Wave.io"
              width={200}
              height={50}
              className="h-12 md:h-14 w-auto object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Custom Engineering */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
                Custom Engineering
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[220px]">
                <DropdownMenuItem asChild>
                  <Link href="/custom-engineering" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Overview</div>
                      <div className="text-xs text-muted-foreground">Custom Cable Engineering</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/custom-engineering/dc-twin" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">DC Twin™</div>
                      <div className="text-xs text-muted-foreground">Digital Modeling</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Deployment Services */}
            <Link
              href="/deployment-services"
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/deployment-services") ? "text-primary" : ""
              }`}
            >
              Deployment Services
            </Link>

            {/* Fiber */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
                Fiber
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[220px]">
                <DropdownMenuItem asChild>
                  <Link href="/fiber" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Overview</div>
                      <div className="text-xs text-muted-foreground">Fiber Solutions</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/fiber/hyperscalers" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Hyperscalers</div>
                      <div className="text-xs text-muted-foreground">Hyperscale Solutions</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/fiber/patch-panels" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Patch Panels</div>
                      <div className="text-xs text-muted-foreground">Fiber Cassettes</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* High Speed Interconnect */}
            <Link
              href="/high-speed-interconnect"
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/high-speed-interconnect") ? "text-primary" : ""
              }`}
            >
              High Speed Interconnect
            </Link>

            {/* Ethernet */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
                Ethernet
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[220px]">
                <DropdownMenuItem asChild>
                  <Link href="/ethernet" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Overview</div>
                      <div className="text-xs text-muted-foreground">Ethernet Solutions</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ethernet/patch-panels" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Patch Panels</div>
                      <div className="text-xs text-muted-foreground">RJ45 Cassettes</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Systems & Accessories */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
                Systems & Accessories
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[220px]">
                <DropdownMenuItem asChild>
                  <Link href="/systems-and-accessories" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Overview</div>
                      <div className="text-xs text-muted-foreground">Systems & Accessories</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/systems-and-accessories/testing" className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium">Testing Solutions</div>
                      <div className="text-xs text-muted-foreground">Lab & Testing</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources */}
            <Link
              href="/resources"
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/resources") ? "text-primary" : ""
              }`}
            >
              Resources
            </Link>

            {/* Company */}
            <Link
              href="/company"
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/company") ? "text-primary" : ""
              }`}
            >
              Company
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-primary hover:bg-primary-blue-dark">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col space-y-4 mt-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="custom-engineering" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium py-0 hover:no-underline">
                      Custom Engineering
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <Link
                        href="/custom-engineering"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link
                        href="/custom-engineering/dc-twin"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        DC Twin™ Digital Modeling
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href="/deployment-services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Deployment Services
                </Link>

                <Link href="/high-speed-interconnect" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  High Speed Interconnect
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="fiber" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium py-0 hover:no-underline">Fiber</AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <Link
                        href="/fiber"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link
                        href="/fiber/hyperscalers"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Hyperscalers
                      </Link>
                      <Link
                        href="/fiber/patch-panels"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Patch Panels
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ethernet" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium py-0 hover:no-underline">
                      Ethernet
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <Link
                        href="/ethernet"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link
                        href="/ethernet/patch-panels"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Patch Panels
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="systems" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium py-0 hover:no-underline">
                      Systems & Accessories
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <Link
                        href="/systems-and-accessories"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link
                        href="/systems-and-accessories/testing"
                        className="block py-2 pl-4 text-base hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Testing Solutions
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Resources
                </Link>

                <Link href="/company" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Company
                </Link>

                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>

                <div className="pt-4">
                  <Button className="w-full bg-primary hover:bg-primary-blue-dark" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Request a Quote
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

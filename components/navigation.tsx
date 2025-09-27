"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Image
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/wave2wave_logo_anchorcraft_business.png"
                alt="Wave2Wave.io"
                width={200}
                height={70}
                className="h-15 w-auto"
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Home
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  href="/solutions"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Solutions
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  href="/industries"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Industries
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  href="/products"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Products
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  href="/resources"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Resources
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  About
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/contact">Request Quote</Link>
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/solutions" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Solutions
                </Link>
                <Link href="/industries" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Industries
                </Link>
                <Link href="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Resources
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Request Quote
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Talk to Expert
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

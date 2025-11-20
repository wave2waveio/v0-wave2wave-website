"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ImgHTMLAttributes,
  type ReactNode,
  type SyntheticEvent,
  type TableHTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react"
import { HeroCarousel } from "./HeroCarousel"
import { ProductGallery } from "./ProductGallery"
import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Layers,
  Network,
  Radio,
  RotateCcw,
  Settings,
  Shield,
  Signal,
  Thermometer,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react"

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline" | "secondary"
}

function Badge({ className = "", variant = "solid", ...props }: BadgeProps) {
  const variantStyles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-700"
      : variant === "secondary"
        ? "bg-slate-100 text-slate-700"
        : "bg-blue-600 text-white"

  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantStyles,
        className,
      )}
    />
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        className,
      )}
    />
  )
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

function Card({ className = "", ...props }: CardProps) {
  return <div {...props} className={cn("rounded-2xl border border-slate-200 bg-white shadow-sm", className)} />
}

function CardHeader({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn("p-6", className)} />
}

function CardContent({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn("p-6 pt-0", className)} />
}

function CardTitle({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} className={cn("text-lg font-semibold leading-tight", className)} />
}

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs parent")
  }
  return context
}

interface TabsProps {
  defaultValue: string
  children: ReactNode
  className?: string
}

function Tabs({ defaultValue, children, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

function TabsList({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("inline-flex items-center justify-center gap-2 rounded-xl bg-white p-2 shadow-sm", className)}
    />
  )
}

interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

function TabsTrigger({ value, className = "", onClick, ...props }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === value

  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) {
          setActiveTab(value)
        }
      }}
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors",
        isActive
          ? "border-blue-600 bg-blue-600 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
        className,
      )}
    />
  )
}

interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

function TabsContent({ value, className = "", ...props }: TabsContentProps) {
  const { activeTab } = useTabsContext()
  if (activeTab !== value) {
    return null
  }
  return <div {...props} className={className} />
}

function Table({ className = "", ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <table {...props} className={cn("w-full border-collapse text-left text-sm text-slate-700", className)} />
}

function TableHeader({ className = "", ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead {...props} className={cn("bg-slate-100 text-xs uppercase tracking-wide", className)} />
}

function TableBody({ className = "", ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} className={cn("divide-y divide-slate-100", className)} />
}

function TableRow({ className = "", ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr {...props} className={cn("border-b last:border-0", className)} />
}

function TableHead({ className = "", ...props }: ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return <th {...props} className={cn("px-4 py-3 font-semibold text-slate-600", className)} />
}

function TableCell({ className = "", ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td {...props} className={cn("px-4 py-3", className)} />
}

function Progress({ value, className = "" }: { value: number; className?: string }) {
  const clampedValue = Math.min(Math.max(value, 0), 100)
  return (
    <div className={cn("h-2 w-full rounded-full bg-slate-200", className)}>
      <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${clampedValue}%` }} />
    </div>
  )
}

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

function ImageWithFallback({ fallbackSrc, src, onError, ...props }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  return (
    <img
      {...props}
      src={currentSrc || "/placeholder.svg"}
      onError={(event: SyntheticEvent<HTMLImageElement>) => {
        onError?.(event)
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
      }}
    />
  )
}

export default function PatchPanelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroCarousel />

      <main className="space-y-2 py-2">
        <Introduction />
        <ProblemSolution />
        <ProductOverview />
        <CompetitiveAdvantages />
        <ProductGallery />
        <TechnicalSpecs />
        <UseCases />
        <ProductPerformance />
        <InstallationManagement />
      </main>
    </div>
  )
}

function Introduction() {
  return (
    <section id="introduction" className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl text-slate-900 lg:text-4xl">
                Fiber Patch Panels - Critical Role in the Data Center
              </h2>

              <p className="text-lg leading-relaxed text-slate-600">
                In today's data centers, speed and density are paramount. The backbone of every high-performance
                network—from AI clusters to hyperscale cloud platforms—is the physical fiber optic infrastructure.
              </p>

              <p className="text-lg leading-relaxed text-slate-600">
                High-density patch panels are the central nervous system of this infrastructure, providing a crucial,
                organized hub for managing the massive number of fiber connections required for 400G, 800G, and future
                terabit networking. They provide the flexibility and scalability to grow and reconfigure as needed,
                organization and management of the data center, protection of expensive equipment and durability and
                longevity by shielding permanent infrastructure connections.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <div className="mb-2 text-2xl text-blue-600">400G+</div>
                  <div className="text-sm text-slate-600">Network Speeds Supported</div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <div className="mb-2 text-2xl text-blue-600">144</div>
                  <div className="text-sm text-slate-600">Max Duplex Links per 1RU</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <ImageWithFallback
                src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/EXO2-down-1.jpeg"
                alt="Fiber optic cables technology"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-4 rounded-lg border bg-white p-3 shadow-lg">
              <div className="mb-1 text-xs text-slate-600">Signal Integrity</div>
              <div className="text-sm text-blue-600">Ultra-Low Loss</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSolution() {
  return (
    <section id="problemsolution" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            The Challenge &amp; Our Solution
          </Badge>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">
            Solving the AI &amp; Hyperscale Infrastructure Challenge
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-900">The Challenge</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800">
                Modern AI/ML workloads demand massive east-west bandwidth. Traditional, low-density cabling creates a
                "physical layer bottleneck" that limits GPU cluster performance, complicates network management, and
                wastes valuable rack space.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-red-700">
                    Limited GPU cluster performance due to physical layer constraints
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-red-700">Complex network management with point-to-point cabling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-red-700">Wasted rack space with low-density solutions</p>
                </div>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-100 p-4">
                <p className="text-sm text-red-800">
                  <strong>Critical Point:</strong> As you scale to 400G and 800G, a robust and ultra-dense structured
                  cabling strategy is no longer optional—it's essential for performance and ROI.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-900">Our Solution</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800">
                The EVO™ and EXO™ platforms are not just patch panels; they are engineered ecosystems for high-speed
                fiber management. They deliver industry-leading density and signal integrity, creating a reliable
                physical layer that allows your active switches and optics to perform at their full potential.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  <p className="text-sm text-green-700">Industry-leading density with up to 144 duplex links per 1RU</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  <p className="text-sm text-green-700">Ultra-low loss engineering for optimal signal integrity</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  <p className="text-sm text-green-700">
                    Modular ecosystem supporting 400G, 800G, and future 1.6T speeds
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-100 p-4">
                <p className="text-sm text-green-800">
                  <strong>Result:</strong> A foundation for performance that maximizes your infrastructure investment
                  while enabling seamless scaling for future networking requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ProductOverview() {
  return (
    <section id="productoverview" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Product Platforms
          </Badge>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">Two Platforms for Scalable Connectivity</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Choose the right platform for your infrastructure needs, from ultra-high-density hyperscale deployments to
            specialized wavelength division multiplexing applications.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Card className="overflow-hidden border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-blue-900">EVO™ Platform</CardTitle>
                  <Badge className="bg-blue-600">Ultra-High-Density</Badge>
                </div>
                <p className="text-blue-700">
                  Engineered for maximum fiber density in hyperscale data centers and large AI clusters
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/Future-proof-design-cassettes-closeup-lg.jpg"
                    alt="Server rack in data center"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-blue-900">Key Features:</h4>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Network className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <p className="text-sm">
                        <strong>Industry-Leading Density:</strong> Provides connectivity for up to 48 QSFP-DD/OSFP
                        transceivers (144 duplex LC links) in a 2RU chassis
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Settings className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <p className="text-sm">
                        <strong>MTP-to-LC Breakouts:</strong> Modular cassettes efficiently break out high-speed
                        MTP-12/16/24 trunk cables into duplex LC connections
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <p className="text-sm">
                        <strong>Ultra-Low Insertion Loss:</strong> Features typical loss of &lt;0.55dB (MM) and
                        &lt;0.75dB (SM) per cassette, protecting your optical power budget
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-100 p-4">
                  <h5 className="mb-2 text-blue-900">Ideal Applications:</h5>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>- Hyperscale data centers maximizing connectivity per square foot</li>
                    <li>
                      - Large AI training facilities requiring structured cabling for thousands of GPU connections
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Learn More About EVO™</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="overflow-hidden border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-purple-900">EXO™ Platform</CardTitle>
                  <Badge className="bg-purple-600">WDM Specialized</Badge>
                </div>
                <p className="text-purple-700">
                  Perfect for service providers or enterprises needing to dramatically increase the capacity of existing
                  fiber infrastructure
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="https://biezpt9rjogvsua7.public.blob.vercel-storage.com/public/images/Gallery-10-qr05vdavaud0u8xmm9o0wtn33chgs33v435fpvp0cg.jpeg"
                    alt="AI artificial intelligence technology"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-purple-900">Key Features:</h4>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Network className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <p className="text-sm">
                        <strong>Wavelength Division Multiplexing:</strong> Utilizes passive WDM technology to combine
                        multiple data streams (for example 4, 8, or 16 channels) onto a single fiber pair
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Database className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <p className="text-sm">
                        <strong>Massive Fiber Savings:</strong> Increase the capacity of dark fiber or campus links by
                        up to 16x without laying new cables
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Settings className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <p className="text-sm">
                        <strong>Protocol Agnostic:</strong> Transparently supports a variety of services like Ethernet,
                        Fibre Channel, and SONET over the same fiber
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-purple-100 p-4">
                  <h5 className="mb-2 text-purple-900">Ideal Applications:</h5>
                  <ul className="space-y-1 text-sm text-purple-800">
                    <li>- Data center interconnects over limited fiber pairs</li>
                    <li>- 5G networks and service provider backhaul</li>
                  </ul>
                </div>

                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">Learn More About EXO™</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompetitiveAdvantages() {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Density Leadership",
      description:
        "Our EVO™ platform offers the highest MTP and LC termination density in the industry, saving up to 80% of rack space compared to traditional solutions.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Cpu,
      title: "Enables AI/ML Performance",
      description:
        "We provide the stable, high-performance physical foundation that lossless RoCEv2 and InfiniBand fabrics for GPU clusters depend on.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Layers,
      title: "Future-Proof Architecture",
      description:
        "Our modular systems support MTP-12, MTP-16, and MTP-24 connectors, ensuring you're ready for the cabling requirements of 400G, 800G, and future 1.6T optics.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Wrench,
      title: "Operational Simplicity",
      description:
        "Tool-free, hot-swappable cassettes simplify installation and allow for rapid moves, adds, and changes without network disruption.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section id="competitiveadvantages" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Competitive Advantages
          </Badge>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">Why Industry Leaders Choose Wave2Wave</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Our platforms deliver unmatched performance, density, and reliability for mission-critical infrastructure
            deployments across the globe.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card
                key={index}
                className={cn(
                  advantage.bgColor,
                  advantage.borderColor,
                  "border-2 transition-shadow duration-300 hover:shadow-lg",
                )}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={cn("rounded-lg border bg-white p-3", advantage.borderColor)}>
                      <IconComponent className={cn("h-6 w-6", advantage.color)} />
                    </div>
                    <CardTitle className="text-slate-900">{advantage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-slate-700">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">80%</div>
              <div className="text-sm text-slate-600">Rack Space Savings</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">2000+</div>
              <div className="text-sm text-slate-600">Data Centers Deployed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-blue-600">99.9%</div>
              <div className="text-sm text-slate-600">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnicalSpecs() {
  const evoSpecs = [
    { parameter: "Form Factor", value: "1RU or 2RU modular panels" },
    { parameter: "Connectivity Capacity (2RU)", value: "Up to 144 Duplex LC connections" },
    { parameter: "Transceiver Support", value: "48 QSFP-DD or OSFP transceivers" },
    { parameter: "Connector Support", value: "MTP-12/16/24 (rear), Duplex LC (front)" },
    { parameter: "Fiber Standards", value: "OM4/OM5 Multimode, OS2 Single-Mode" },
    { parameter: "Insertion Loss (MM)", value: "Typical <0.55dB" },
    { parameter: "Insertion Loss (SM)", value: "Typical <0.75dB" },
    { parameter: "Return Loss (APC)", value: ">50dB" },
    { parameter: "Return Loss (UPC)", value: ">35dB" },
    { parameter: "Operating Temperature", value: "-5°C to +70°C" },
  ]

  const exoSpecs = [
    { parameter: "Form Factor", value: "1RU modular chassis" },
    { parameter: "Technology", value: "Passive CWDM, LAN-WDM, and DWDM multiplexing" },
    { parameter: "Channel Capacity", value: "Available in 4, 8, and 16-channel configurations" },
    { parameter: "Connector Support", value: "Duplex LC for channel ports and equipment ports" },
    { parameter: "CWDM Insertion Loss", value: "<1.8dB typical" },
    { parameter: "LAN-WDM Insertion Loss", value: "<2.2dB typical" },
    { parameter: "8-Channel DWDM", value: "<3.0dB typical" },
    { parameter: "16-Channel DWDM", value: "<4.5dB typical" },
    { parameter: "Channel Isolation", value: ">30dB" },
    { parameter: "Operating Wavelengths", value: "ITU Grid compliant" },
  ]

  return (
    <section id="technicalspecs" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Technical Specifications
          </Badge>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">Detailed Platform Specifications</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Comprehensive technical specifications for both EVO™ and EXO™ platforms, engineered for demanding enterprise
            and hyperscale environments.
          </p>
        </div>

        <Tabs defaultValue="evo" className="w-full">
          <TabsList className="mx-auto mb-12 grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="evo">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              EVO™ Platform
            </TabsTrigger>
            <TabsTrigger value="exo">
              <span className="h-2 w-2 rounded-full bg-purple-600" />
              EXO™ Platform
            </TabsTrigger>
          </TabsList>

          <TabsContent value="evo">
            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
                  <span className="h-3 w-3 rounded-full bg-blue-600" />
                  EVO™ High-Density Platform Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Parameter</TableHead>
                      <TableHead>Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {evoSpecs.map((spec) => (
                      <TableRow key={spec.parameter}>
                        <TableCell className="font-medium text-slate-700">{spec.parameter}</TableCell>
                        <TableCell className="text-slate-600">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-blue-100 p-4">
                    <h4 className="mb-2 text-blue-900">Key Performance Highlights</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>- Industry-leading 144 duplex LC connections in 2RU</li>
                      <li>- Ultra-low insertion loss for optimal signal integrity</li>
                      <li>- Hot-swappable modular cassettes for easy maintenance</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-blue-100 p-4">
                    <h4 className="mb-2 text-blue-900">Compliance &amp; Standards</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>- IEC 61754 connector standards compliant</li>
                      <li>- TIA/EIA-568 structured cabling standards</li>
                      <li>- RoHS and REACH environmental compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exo">
            <Card className="border-purple-200 bg-purple-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-purple-900">
                  <span className="h-3 w-3 rounded-full bg-purple-600" />
                  EXO™ WDM Platform Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Parameter</TableHead>
                      <TableHead>Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exoSpecs.map((spec) => (
                      <TableRow key={spec.parameter}>
                        <TableCell className="font-medium text-slate-700">{spec.parameter}</TableCell>
                        <TableCell className="text-slate-600">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-purple-100 p-4">
                    <h4 className="mb-2 text-purple-900">WDM Technology Benefits</h4>
                    <ul className="space-y-1 text-sm text-purple-800">
                      <li>- Massive fiber capacity multiplication up to 16x</li>
                      <li>- Protocol agnostic operation</li>
                      <li>- Passive operation requiring no power</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-purple-100 p-4">
                    <h4 className="mb-2 text-purple-900">Applications</h4>
                    <ul className="space-y-1 text-sm text-purple-800">
                      <li>- Data center interconnects (DCI)</li>
                      <li>- 5G fronthaul and backhaul networks</li>
                      <li>- Service provider metro networks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function UseCases() {
  const useCases = [
    {
      icon: Brain,
      title: "AI/Machine Learning Infrastructure",
      description:
        "The EVO™ platform provides the clean, structured cabling needed to build and scale massive GPU clusters, ensuring reliable communication for distributed training workloads.",
      platform: "EVO™",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Support for thousands of GPU connections",
        "Lossless RoCEv2 and InfiniBand fabric support",
        "Ultra-low latency physical layer",
        "Modular scaling for growing clusters",
      ],
    },
    {
      icon: Cloud,
      title: "Hyperscale Cloud Providers",
      description:
        "Maximize revenue per rack with EVO's unmatched termination density. Simplify fiber management and accelerate tenant provisioning with a modular, easy-to-manage system.",
      platform: "EVO™",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: [
        "Maximum connectivity per square foot",
        "Rapid tenant provisioning capabilities",
        "Tool-free installation and maintenance",
        "Future-proof 400G/800G readiness",
      ],
    },
    {
      icon: Radio,
      title: "5G Networks & Service Providers",
      description:
        "Use the EXO™ WDM platform to multiply the capacity of existing fiber backhaul and fronthaul networks, dramatically reducing capital expenditures.",
      platform: "EXO™",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "16x fiber capacity multiplication",
        "CAPEX reduction for network expansion",
        "Support for multiple protocols simultaneously",
        "Passive operation with no power requirements",
      ],
    },
    {
      icon: Network,
      title: "Data Center Interconnects",
      description:
        "Deploy WDM technology to maximize the utilization of existing dark fiber between facilities, supporting multiple protocols and services over the same physical infrastructure.",
      platform: "EXO™",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Dark fiber capacity maximization",
        "Multi-protocol service support",
        "Long-distance connectivity optimization",
        "Cost-effective DCI solutions",
      ],
    },
  ]

  return (
    <section id="usecases" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Use Cases &amp; Applications
          </Badge>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">Engineered for Next-Generation Applications</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            From AI training clusters to 5G networks, our platforms enable the most demanding connectivity requirements
            across diverse industry applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <Card
                key={index}
                className={cn(
                  useCase.bgColor,
                  useCase.borderColor,
                  "border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                )}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn("rounded-xl border-2 bg-white p-3", useCase.borderColor)}>
                        <IconComponent className={cn("h-7 w-7", useCase.color)} />
                      </div>
                      <div>
                        <CardTitle className="mb-1 text-xl text-slate-900">{useCase.title}</CardTitle>
                        <Badge variant="secondary" className={cn(useCase.bgColor, useCase.color, "border-0 text-xs")}>
                          {useCase.platform} Platform
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="leading-relaxed text-slate-700">{useCase.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-slate-900">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                          <div
                            className={cn(
                              "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                              useCase.color.replace("text-", "bg-"),
                            )}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl text-slate-900">Industry Deployments by the Numbers</h3>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-2">
                <div className="text-3xl text-blue-600">500+</div>
                <div className="text-sm text-slate-600">AI Clusters Connected</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-green-600">1M+</div>
                <div className="text-sm text-slate-600">GPU Links Managed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-purple-600">100+</div>
                <div className="text-sm text-slate-600">5G Networks Enabled</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl text-orange-600">50+</div>
                <div className="text-sm text-slate-600">DCI Deployments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductPerformance() {
  const evoMetrics = [
    {
      label: "Insertion Loss (MM)",
      value: "<0.55dB",
      percentage: 95,
      description: "Industry-leading low loss for multimode fiber",
    },
    {
      label: "Insertion Loss (SM)",
      value: "<0.75dB",
      percentage: 93,
      description: "Exceptional performance for single-mode applications",
    },
    {
      label: "Return Loss (APC)",
      value: ">50dB",
      percentage: 98,
      description: "Superior signal reflection performance",
    },
    {
      label: "Return Loss (UPC)",
      value: ">35dB",
      percentage: 88,
      description: "Excellent UPC connector performance",
    },
  ]

  const exoMetrics = [
    {
      label: "CWDM Insertion Loss",
      value: "<1.8dB",
      percentage: 85,
      description: "Optimal for CWDM wavelength multiplexing",
    },
    {
      label: "LAN-WDM Insertion Loss",
      value: "<2.2dB",
      percentage: 82,
      description: "Efficient LAN-WDM performance",
    },
    {
      label: "8-Channel DWDM",
      value: "<3.0dB",
      percentage: 78,
      description: "High-density DWDM capability",
    },
    {
      label: "Channel Isolation",
      value: ">30dB",
      percentage: 95,
      description: "Excellent channel separation",
    },
  ]

  return (
    <section id="productperformance" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Product Performance
          </Badge>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">
            Proven Signal Integrity for Mission-Critical Applications
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Comprehensive performance metrics demonstrating the exceptional quality and reliability of our EVO™ and EXO™
            platforms in demanding environments.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-600 p-2">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-900">EVO™ Platform Performance</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                {evoMetrics.map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-800">{metric.label}</span>
                      <span className="text-sm text-blue-600">{metric.value}</span>
                    </div>
                    <Progress value={metric.percentage} className="h-2" />
                    <p className="text-xs text-blue-700">{metric.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-lg bg-blue-100 p-4 text-center">
                  <Signal className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                  <div className="text-lg text-blue-900">OM4/OM5</div>
                  <div className="text-xs text-blue-700">Fiber Compatibility</div>
                </div>

                <div className="rounded-lg bg-blue-100 p-4 text-center">
                  <Thermometer className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                  <div className="text-lg text-blue-900">-5°C to +70°C</div>
                  <div className="text-xs text-blue-700">Operating Range</div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-100 p-4">
                <h4 className="mb-3 flex items-center gap-2 text-blue-900">
                  <CheckCircle2 className="h-4 w-4" />
                  Key Performance Features
                </h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>- MTP-12/16/24 and duplex LC connector compatibility</li>
                  <li>- Rigorous testing ensures consistent performance</li>
                  <li>- Detailed insertion loss measurements provided</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-600 p-2">
                  <Signal className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-900">EXO™ WDM Performance</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                {exoMetrics.map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-800">{metric.label}</span>
                      <span className="text-sm text-purple-600">{metric.value}</span>
                    </div>
                    <Progress value={metric.percentage} className="h-2" />
                    <p className="text-xs text-purple-700">{metric.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-lg bg-purple-100 p-4 text-center">
                  <div className="text-lg text-purple-900">16-Ch</div>
                  <div className="text-xs text-purple-700">DWDM Capacity</div>
                </div>

                <div className="rounded-lg bg-purple-100 p-4 text-center">
                  <div className="text-lg text-purple-900">ITU Grid</div>
                  <div className="text-xs text-purple-700">Wavelength Compliant</div>
                </div>
              </div>

              <div className="rounded-lg bg-purple-100 p-4">
                <h4 className="mb-3 flex items-center gap-2 text-purple-900">
                  <CheckCircle2 className="h-4 w-4" />
                  WDM Technology Benefits
                </h4>
                <ul className="space-y-1 text-sm text-purple-800">
                  <li>- Passive operation requires no power consumption</li>
                  <li>- Protocol agnostic - supports multiple service types</li>
                  <li>- ITU grid compliant wavelengths for standardization</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-4xl border-2 border-blue-200 bg-gradient-to-r from-slate-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl text-slate-900">Quality Assurance &amp; Testing</h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="mb-2 text-lg text-slate-900">100% Tested</h4>
                  <p className="text-sm text-slate-600">
                    Every module undergoes rigorous performance testing before shipping
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Signal className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="mb-2 text-lg text-slate-900">Traceable Performance</h4>
                  <p className="text-sm text-slate-600">
                    Detailed insertion loss measurements provided for each cassette
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Thermometer className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="mb-2 text-lg text-slate-900">Environmental Testing</h4>
                  <p className="text-sm text-slate-600">
                    Validated performance across the full operating temperature range
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function InstallationManagement() {
  const features = [
    {
      icon: Wrench,
      title: "Tool-Free Installation",
      description:
        "Hot-swappable cassettes with push-pull latching mechanisms enable rapid deployment and reconfiguration without specialized tools or network downtime.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: RotateCcw,
      title: "Cable Management Excellence",
      description:
        "The 360° rotating wire manager accommodates various cable routing requirements while maintaining proper bend radius protection for high-speed fiber assemblies.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: TrendingUp,
      title: "Modular Scalability",
      description:
        "Start with the capacity you need today and seamlessly add modules as your network grows, protecting your infrastructure investment while adapting to changing requirements.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Each platform undergoes rigorous testing to ensure consistent performance across all modules, with detailed insertion loss measurements provided for every cassette.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section id="installationmanagement" className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Installation &amp; Management
          </Badge>
          <h2 className="mb-6 text-3xl text-slate-900 lg:text-4xl">Simplified Deployment and Operations</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Our platforms are designed for operational efficiency, featuring tool-free installation, intelligent cable
            management, and modular scalability for growing networks.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className={cn(
                  feature.bgColor,
                  feature.borderColor,
                  "border-2 transition-shadow duration-300 hover:shadow-lg",
                )}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={cn("rounded-lg border bg-white p-3", feature.borderColor)}>
                      <IconComponent className={cn("h-6 w-6", feature.color)} />
                    </div>
                    <CardTitle className="text-slate-900">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-slate-700">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          <Card className="border-2 border-blue-200 bg-blue-50/50 text-center">
            <CardContent className="p-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                5
              </div>
              <h3 className="mb-2 text-xl text-slate-900">Minutes</h3>
              <p className="text-sm text-slate-600">Average cassette replacement time with no network disruption</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-green-50/50 text-center">
            <CardContent className="p-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl text-white">
                0
              </div>
              <h3 className="mb-2 text-xl text-slate-900">Tools Required</h3>
              <p className="text-sm text-slate-600">
                Complete installation and maintenance without specialized equipment
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50/50 text-center">
            <CardContent className="p-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl text-white">
                360°
              </div>
              <h3 className="mb-2 text-xl text-slate-900">Cable Management</h3>
              <p className="text-sm text-slate-600">Rotating wire manager accommodates any cable routing requirement</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-12 text-center">
            <h3 className="mb-4 text-3xl">Ready to Transform Your Infrastructure?</h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Get detailed technical specifications, pricing, and deployment guidance from our infrastructure experts.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="bg-white text-blue-600 hover:bg-blue-50" type="button">
                Download Complete Datasheets
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-blue-600" type="button">
                Schedule Infrastructure Consultation
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span>Expert Support Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span>Same-Day Quote Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span>Global Deployment Support</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

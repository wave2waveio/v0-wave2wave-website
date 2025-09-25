import { Introduction } from "./Introduction"
import { ProblemSolution } from "./ProblemSolution"
import { ProductOverview } from "./ProductOverview"
import { CompetitiveAdvantages } from "./CompetitiveAdvantages"
import { TechnicalSpecs } from "./TechnicalSpecs"
import { UseCases } from "./UseCases"
import { ProductPerformance } from "./ProductPerformance"
import { InstallationManagement } from "./InstallationManagement"
import { ProductGallery } from "./ProductGallery"
import { HeroCarousel } from "./HeroCarousel"

export default function PatchPanelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroCarousel />

      <main className="space-y-4 py-4">
        <Introduction />
        <ProblemSolution />
        <ProductOverview />

        <ProductGallery />

        <CompetitiveAdvantages />
        <TechnicalSpecs />
        <UseCases />
        <ProductPerformance />
        <InstallationManagement />
      </main>
    </div>
  )
}

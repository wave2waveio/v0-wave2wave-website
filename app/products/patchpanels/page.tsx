{/*import { Header } from "./components/Header";
import { Hero } from "./components/Hero";*/}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Download,
  Zap,
  Shield,
  Layers,
  Play,
  CheckCircle,
  Cpu,
  Database,
  Network,
  TrendingUp,
  Award,
} from "lucide-react"

import { Introduction } from "./products/patchpanels/Introduction";
import { ProblemSolution } from "./products/patchpanels/ProblemSolution";
import { ProductOverview } from "./products/patchpanels/ProductOverview";
import { CompetitiveAdvantages } from "/products/patchpanels/CompetitiveAdvantages";
import { TechnicalSpecs } from "./products/patchpanels/TechnicalSpecs";
import { UseCases } from "/products/patchpanels//UseCases";
import { ProductPerformance } from "/products/patchpanels//ProductPerformance";
import { InstallationManagement } from "/products/patchpanels//InstallationManagement";
{/*import { Footer } from "./components/Footer";*/}



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Introduction />
        <ProblemSolution />
        <ProductOverview />
        <CompetitiveAdvantages />
        <TechnicalSpecs />
        <UseCases />
        <ProductPerformance />
        <InstallationManagement />
      </main>
    </div>
  );
}

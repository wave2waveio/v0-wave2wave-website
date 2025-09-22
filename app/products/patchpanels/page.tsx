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

import { Introduction } from "./introduction";
import { ProblemSolution } from "./ProblemSolution";
import { ProductOverview } from "./ProductOverview";
import { CompetitiveAdvantages } from "./CompetitiveAdvantages";
import { TechnicalSpecs } from "./TechnicalSpecs";
import { UseCases } from "./UseCases";
import { ProductPerformance } from "./ProductPerformance";
import { InstallationManagement } from "./InstallationManagement";
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

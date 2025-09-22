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

import { Introduction } from "./Introduction";
import { ProblemSolution } from "./components/ProblemSolution";
import { ProductOverview } from "./components/ProductOverview";
import { CompetitiveAdvantages } from "./components/CompetitiveAdvantages";
import { TechnicalSpecs } from "./components/TechnicalSpecs";
import { UseCases } from "./components/UseCases";
import { ProductPerformance } from "./components/ProductPerformance";
import { InstallationManagement } from "./components/InstallationManagement";
{/*import { Footer } from "./components/Footer";*/}



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <ProblemSolution />
        <ProductOverview />
        <CompetitiveAdvantages />
        <TechnicalSpecs />
        <UseCases />
        <ProductPerformance />
        <InstallationManagement />
      </main>
{/*      <Footer /> */}
    </div>
  );
}

"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import type { ConfigModel } from "@survicate/survicate-web-package/survicate_widget"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

function SurveyContent() {
  const searchParams = useSearchParams()
  const emailParam = searchParams.get('email') || 'unknown'
  const initialAnswer = searchParams.get('initial_answer') || ''

  useEffect(() => {
    let cancelled = false

    const loadAndRenderSurvey = async () => {
      try {
        const { default: Survicate } = await import("@survicate/survicate-web-package/survicate_widget")

        if (cancelled) return

        const config: ConfigModel = {
          workspaceKey: "0ba7f90f67934152eee102283195a437",
          traits: {
            email: emailParam,
            initial_answer: initialAnswer,
            source: "email_campaign",
          },
          // This is the critical missing line in 2025
          embed: {
            surveyId: "0b81786631a86a8a",  // ← This is the part after survicate-box-
            containerId: "survicate-box-0b81786631a86a8a",
            displayMethod: "immediate" // or "onExitIntent", "delay", etc.
          }
        }

        await Survicate.init(config)
        console.log("Survicate embedded survey loaded!")
      } catch (err) {
        console.error("Survicate failed to load:", err)
      }
    }

    loadAndRenderSurvey()

    return () => {
      cancelled = true
      // Optional: clean up on unmount
      if (typeof window !== 'undefined' && (window as any).Survicate) {
        ;(window as any).Survicate.destroy?.()
      }
    }
  }, [emailParam,emailParam, initialAnswer])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Feedback</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Thank You for Your Response</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We've recorded your initial feedback. Please take a moment to share more details with us.
          </p>
        </div>

        <Card className="bg-white/10 border-white/10 shadow-2xl backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Help Us Improve</CardTitle>
            <CardDescription className="text-slate-300">
              Your feedback shapes our roadmap.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* ← This ID must match containerId above */}
            <div 
              id="survicate-box-0b81786631a86a8a" 
              className="min-h-[600px] w-full"
            />
            <div className="text-center text-slate-400 text-sm mt-4">
              Loading survey...
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-slate-400 text-sm">
          <p>Wave2Wave.io • An Anchorcraft Co. company</p>
        </div>
      </div>
    </div>
  )
}

export default function NpsSurveyPage() {
  return (
    <Suspense fallback={<div className="text-white p-20 text-center">Loading...</div>}>
      <SurveyContent />
    </Suspense>
  )
}
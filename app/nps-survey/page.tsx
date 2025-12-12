"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Survicate, { ConfigModel } from '@survicate/survicate-web-package/survicate_widget'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function SurveyContent() {
  const searchParams = useSearchParams()
  const emailParam = searchParams.get('email') || 'unknown'
  const initialAnswer = searchParams.get('initial_answer') || ''

  useEffect(() => {
    const survicateConfig: ConfigModel = {
      workspaceKey: '0ba7f90f67934152eee102283195a437',
      traits: {
        email: emailParam,
        initial_answer: initialAnswer,
        source: 'email_campaign',
      },
    }

    Survicate.init(survicateConfig)
      .then(() => {
        console.log('Survicate initialized successfully')
      })
      .catch((error) => {
        console.error('Failed to initialize Survicate:', error)
      })

    // Cleanup on unmount
    return () => {
      // Survicate cleanup if needed
    }
  }, [emailParam, initialAnswer])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Feedback</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Thank You for Your Response</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We've recorded your initial feedback. Please take a moment to share more details with us so we can better serve you.
          </p>
        </div>

        <Card className="bg-white/10 border-white/10 shadow-2xl backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Help Us Improve</CardTitle>
            <CardDescription className="text-slate-300">
              Your feedback shapes our roadmap and how we support you.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Survicate widget will appear here */}
            <div id="survicate-survey-container" className="min-h-[400px]">
              <p className="text-slate-400 text-center py-8">Loading survey...</p>
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
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white flex items-center justify-center">
        <p className="text-slate-300">Loading...</p>
      </div>
    }>
      <SurveyContent />
    </Suspense>
  )
}

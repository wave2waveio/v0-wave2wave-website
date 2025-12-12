"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import { surveyJson } from './survey-config'
import 'survey-core/survey-core.min.css'
import './survey-theme.css'

export default function NpsSurveyPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") ?? ""
  const initialAnswer = searchParams.get("initial_answer") ?? ""
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [survey] = useState(() => new Model(surveyJson))

  useEffect(() => {
    // Configure survey appearance and behavior
    survey.focusFirstQuestionAutomatic = false

    // Handle survey completion
    survey.onComplete.add(async (sender) => {
      setIsSubmitting(true)
      console.log('=== SURVEY SUBMISSION STARTED ===')

      try {
        const results = sender.data
        console.log('Survey results:', results)

        const payload = {
          email: email || results.followup_contact || results.project_contact || 'anonymous',
          source: 'email_followup',
          initial_answer: initialAnswer,
          survey_data: results,
        }
        console.log('Payload to send:', payload)

        // Submit to Google Sheets via existing API endpoint
        console.log('Sending POST to /api/nps-track...')
        const response = await fetch('/api/nps-track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        console.log('Response status:', response.status)
        console.log('Response ok:', response.ok)

        const responseData = await response.json()
        console.log('Response data:', responseData)

        if (!response.ok) {
          throw new Error(`Failed to submit survey: ${response.status}`)
        }

        console.log('=== SURVEY SUBMISSION SUCCESSFUL ===')
        setIsComplete(true)
      } catch (error) {
        console.error('=== SURVEY SUBMISSION ERROR ===')
        console.error('Error submitting survey:', error)
        alert('There was an error submitting your survey. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    })
  }, [survey, email, initialAnswer])

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/10 border-white/10 backdrop-blur shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Thank you for your time.</h2>
                <div className="text-left bg-white/5 rounded-lg p-6 space-y-4">
                  <p className="text-slate-200">
                    Feel free to view our updated brochure here:
                  </p>
                  <a
                    href="https://www.wave2wave.io/Wave2Wave_Product-Overview.2025-November.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sky-400 hover:text-sky-300 underline text-lg font-medium"
                  >
                    Wave2Wave Product Overview (PDF)
                  </a>
                  <p className="text-sm text-slate-300 pt-4 border-t border-white/10">
                    Your feedback directly shapes how we serve you. If you have any immediate feedback, reach out to us at{' '}
                    <a href="mailto:feedback@wave2wave.io" className="text-sky-400 hover:text-sky-300">
                      feedback@wave2wave.io
                    </a>
                    {' '}or call{' '}
                    <a href="tel:+18664732701" className="text-sky-400 hover:text-sky-300">
                      +1-866-473-2701
                    </a>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="mt-10 text-sm text-slate-400">
            Wave2Wave.io • An Anchorcraft Co. company
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white py-20 px-4">
      <div className="max-w-[986px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-sky-300 mb-4">Feedback</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
          <p className="text-lg text-slate-300 mb-4">
            One last minute of your time helps us a ton.
          </p>
          <p className="text-sm text-slate-400">
            100% private. We do not share or sell your contact information.
          </p>
        </div>

        <Card className="bg-white/10 border-white/10 backdrop-blur shadow-2xl overflow-hidden">
          <CardContent className="p-8" suppressHydrationWarning>
            {isSubmitting ? (
              <div className="text-center py-12">
                <div className="animate-spin w-12 h-12 mx-auto mb-4 rounded-full border-4 border-sky-500 border-t-transparent"></div>
                <p className="text-white">Submitting your responses...</p>
              </div>
            ) : (
              <Survey model={survey} />
            )}
          </CardContent>
        </Card>

        <p className="mt-10 text-sm text-slate-400 text-center">
          Wave2Wave.io • An Anchorcraft Co. company
        </p>
      </div>
    </div>
  )
}
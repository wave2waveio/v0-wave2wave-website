"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") ?? "your address"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-white/10 border-white/10 backdrop-blur shadow-2xl overflow-hidden">
          <CardContent className="p-12">
            <div className="text-center space-y-6">
              {/* Checkmark icon */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                You're Unsubscribed
              </h1>

              {/* Confirmation message */}
              <div className="space-y-4 text-slate-200">
                <p className="text-lg">
                  Thank you. You will no longer receive emails from Wave2Wave.
                </p>
                {email !== "your address" && email !== "unknown" && (
                  <p className="text-sm text-slate-300">
                    <span className="font-mono bg-white/5 px-2 py-1 rounded">{email}</span> has been removed from our mailing list.
                  </p>
                )}
              </div>

              {/* Additional information */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <p className="text-sm text-slate-300">
                  If you unsubscribed by mistake or would like to hear from us again in the future, please contact us at{' '}
                  <a href="mailto:info@wave2wave.io" className="text-sky-400 hover:text-sky-300 underline">
                    info@wave2wave.io
                  </a>
                </p>

                <div className="pt-4">
                  <a
                    href="https://wave2wave.io"
                    className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Return to Wave2Wave.io
                  </a>
                </div>
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

export default function UnsubscribeConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-spin w-12 h-12 mx-auto mb-4 rounded-full border-4 border-sky-500 border-t-transparent"></div>
          <p className="text-white">Processing...</p>
        </div>
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  )
}

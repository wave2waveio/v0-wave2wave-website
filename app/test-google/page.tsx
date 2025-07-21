"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function TestGooglePage() {
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const testConnection = async () => {
    setIsLoading(true)
    setTestResult(null)

    try {
      const response = await fetch("/api/test-google", {
        method: "POST",
      })

      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({
        success: false,
        message: `Network error: ${error instanceof Error ? error.message : "Unknown error"}`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Google Sheets Integration Test</CardTitle>
            <CardDescription>Test the Google Sheets API connection and environment variables</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {testResult && (
              <Alert className={testResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                {testResult.success ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription className={testResult.success ? "text-green-800" : "text-red-800"}>
                  {testResult.message}
                </AlertDescription>
              </Alert>
            )}

            <Button onClick={testConnection} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing Connection...
                </>
              ) : (
                "Test Google Sheets Connection"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

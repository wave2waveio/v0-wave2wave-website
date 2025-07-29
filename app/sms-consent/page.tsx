import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SMSConsentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Contact
              </Link>
            </Button>

            <h1 className="text-4xl font-bold text-slate-900 mb-6">SMS/Text Messaging Consent & Terms</h1>
            <p className="text-xl text-slate-600">
              Information about our SMS/text messaging services and your consent options
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">SMS Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  By providing your mobile phone number to Wave2Wave.io, you consent to receive text messages from us
                  regarding your inquiries, project updates, and service notifications. This consent is not required as
                  a condition of purchase.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">What You'll Receive</h3>
                  <ul className="list-disc pl-6 text-blue-800 space-y-1">
                    <li>Project status updates and notifications</li>
                    <li>Appointment confirmations and reminders</li>
                    <li>Quote and proposal delivery notifications</li>
                    <li>Important service announcements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Message Frequency & Charges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Message Frequency</h3>
                    <p className="text-slate-700">
                      Message frequency varies based on your project activity and preferences. You may receive up to 5
                      messages per week during active projects.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Charges</h3>
                    <p className="text-slate-700">
                      Message and data rates may apply. Wave2Wave.io does not charge for SMS services, but your
                      carrier's standard messaging rates will apply.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Opt-Out Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  You can opt out of SMS messages at any time using any of these methods:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Text STOP</h3>
                    <p className="text-slate-700 text-sm">Reply "STOP" to any message to immediately unsubscribe</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                    <p className="text-slate-700 text-sm">
                      Send an email to info@wave2wave.io with "SMS OPT-OUT" in the subject
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
                    <p className="text-slate-700 text-sm">Call +1 (866) 473-2701 and request to be removed from SMS</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> After opting out, you may receive one final confirmation message. You may
                    still receive SMS messages related to active service requests or appointments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Help & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">For help with SMS services or to update your preferences:</p>

                <div className="space-y-2">
                  <p className="text-slate-700">
                    <strong>Text "HELP"</strong> to +1 (866) 473-2701 for assistance
                  </p>
                  <p className="text-slate-700">
                    <strong>Email:</strong> info@wave2wave.io
                  </p>
                  <p className="text-slate-700">
                    <strong>Phone:</strong> +1 (866) 473-2701 (Mon-Fri 8:00 AM - 6:00 PM EST)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Privacy & Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Your mobile phone number and SMS preferences are protected under our privacy policy. We do not sell,
                  rent, or share your mobile information with third parties for marketing purposes.
                </p>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Data Security</h3>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    <li>Your phone number is stored securely and encrypted</li>
                    <li>SMS content is not stored longer than necessary for service delivery</li>
                    <li>Access to your information is limited to authorized personnel only</li>
                    <li>We comply with applicable data protection regulations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-slate-700 space-y-3">
                  <p>
                    <strong>Effective Date:</strong> January 28, 2025
                  </p>
                  <p>
                    By consenting to receive SMS messages from Wave2Wave.io, you agree to these terms and conditions. We
                    reserve the right to modify these terms with notice.
                  </p>
                  <p>
                    <strong>Supported Carriers:</strong> This service is available for most major U.S. carriers. Service
                    may not be available on all carriers or in all areas.
                  </p>
                  <p>
                    <strong>Technical Issues:</strong> While we strive for reliable service, SMS delivery is not
                    guaranteed due to factors beyond our control including carrier issues, device compatibility, or
                    network conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About SMS Services?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us if you have questions about our SMS services or need help with your preferences.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

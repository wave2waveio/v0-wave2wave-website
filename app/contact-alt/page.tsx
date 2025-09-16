"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare, Users, Zap } from "lucide-react"
import { submitContactForm, submitSMSRequest } from "../contact/actions"

// Country codes data
const countryCodes = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+47", country: "NO", flag: "🇳🇴" },
  { code: "+45", country: "DK", flag: "🇩🇰" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
  { code: "+43", country: "AT", flag: "🇦🇹" },
  { code: "+32", country: "BE", flag: "🇧🇪" },
  { code: "+351", country: "PT", flag: "🇵🇹" },
  { code: "+353", country: "IE", flag: "🇮🇪" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+64", country: "NZ", flag: "🇳🇿" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+852", country: "HK", flag: "🇭🇰" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
]

// Phone number formatting function
function formatPhoneNumber(value: string, countryCode: string): string {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "")

  // Format based on country code
  if (countryCode === "+1") {
    // US/Canada format: (XXX) XXX-XXXX
    if (digits.length >= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    } else if (digits.length >= 3) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    } else {
      return digits
    }
  } else if (countryCode === "+44") {
    // UK format: XXXX XXX XXXX
    if (digits.length >= 7) {
      return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 11)}`
    } else if (digits.length >= 4) {
      return `${digits.slice(0, 4)} ${digits.slice(4)}`
    } else {
      return digits
    }
  } else {
    // Generic international format: XXX XXX XXXX
    if (digits.length >= 6) {
      return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`
    } else if (digits.length >= 3) {
      return `${digits.slice(0, 3)} ${digits.slice(3)}`
    } else {
      return digits
    }
  }
}

// Phone validation function
function validatePhoneNumber(phone: string, countryCode: string): boolean {
  const digits = phone.replace(/\D/g, "")

  // Minimum length requirements by country
  const minLengths: { [key: string]: number } = {
    "+1": 10, // US/Canada
    "+44": 10, // UK
    "+49": 10, // Germany
    "+33": 9, // France
    "+39": 9, // Italy
    "+34": 9, // Spain
    "+31": 9, // Netherlands
    "+46": 8, // Sweden
    "+47": 8, // Norway
    "+45": 8, // Denmark
    "+41": 9, // Switzerland
    "+43": 10, // Austria
    "+32": 9, // Belgium
    "+351": 9, // Portugal
    "+353": 9, // Ireland
    "+61": 9, // Australia
    "+64": 8, // New Zealand
    "+81": 10, // Japan
    "+82": 10, // South Korea
    "+65": 8, // Singapore
    "+852": 8, // Hong Kong
    "+86": 11, // China
    "+91": 10, // India
    "+55": 10, // Brazil
    "+52": 10, // Mexico
    "+27": 9, // South Africa
  }

  const minLength = minLengths[countryCode] || 8
  return digits.length >= minLength && digits.length <= 15
}

export default function ContactAltPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const [smsData, setSmsData] = useState({
    name: "",
    phone: "",
    countryCode: "+1",
    consent: false,
  })

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [smsStatus, setSmsStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [phoneError, setPhoneError] = useState("")
  const [smsPhoneError, setSmsPhoneError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      const formatted = formatPhoneNumber(value, "+1")
      setFormData((prev) => ({ ...prev, [name]: formatted }))

      // Clear error when user starts typing
      if (phoneError) {
        setPhoneError("")
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSmsInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (name === "phone") {
      const formatted = formatPhoneNumber(value, smsData.countryCode)
      setSmsData((prev) => ({ ...prev, [name]: formatted }))

      // Clear error when user starts typing
      if (smsPhoneError) {
        setSmsPhoneError("")
      }
    } else if (name === "countryCode") {
      setSmsData((prev) => ({ ...prev, [name]: value }))

      // Reformat phone number with new country code
      if (smsData.phone) {
        const formatted = formatPhoneNumber(smsData.phone, value)
        setSmsData((prev) => ({ ...prev, phone: formatted }))
      }
    } else if (type === "checkbox") {
      setSmsData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setSmsData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate phone number
    if (formData.phone && !validatePhoneNumber(formData.phone, "+1")) {
      setPhoneError("Please enter a valid phone number")
      return
    }

    setFormStatus("loading")

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setFormStatus("success")
        setFormData({ name: "", email: "", company: "", phone: "", message: "" })
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    }
  }

  const handleSmsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate phone number
    if (!validatePhoneNumber(smsData.phone, smsData.countryCode)) {
      setSmsPhoneError("Please enter a valid phone number")
      return
    }

    if (!smsData.consent) {
      alert("Please consent to receive SMS messages")
      return
    }

    setSmsStatus("loading")

    try {
      const fullPhone = `${smsData.countryCode}${smsData.phone.replace(/\D/g, "")}`
      const result = await submitSMSRequest({
        name: smsData.name,
        phone: fullPhone,
      })

      if (result.success) {
        setSmsStatus("success")
        setSmsData({ name: "", phone: "", countryCode: "+1", consent: false })
      } else {
        setSmsStatus("error")
      }
    } catch (error) {
      setSmsStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect With Our Infrastructure Experts</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Let's build the future of your data center together. Expert consultation and custom solutions await.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-slate-600 text-white">
                <Clock className="w-4 h-4 mr-2" />
                Rapid Response
              </Badge>
              <Badge variant="secondary" className="bg-slate-600 text-white">
                <Users className="w-4 h-4 mr-2" />
                Engineering Team
              </Badge>
              <Badge variant="secondary" className="bg-slate-600 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Tailored Solutions
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Response Times and Contact Info Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Quick Response Times */}
          <Card className="h-full border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-slate-800">
                <Clock className="w-6 h-6 mr-3 text-slate-600" />
                Committed to Quick Response Times
              </CardTitle>
              <CardDescription>
                We understand that time is critical in data center operations. Our team is committed to providing rapid
                responses to all inquiries.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Emergency Support</h3>
                  <p className="text-slate-600">Critical issues resolved within 2 hours during business hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">General Inquiries</h3>
                  <p className="text-slate-600">All questions answered within 24 hours, typically much faster</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Quote Requests</h3>
                  <p className="text-slate-600">Custom quotes delivered within 48 hours of complete specifications</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Technical Consultation</h3>
                  <p className="text-slate-600">Expert engineering support scheduled within 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="h-full border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-slate-800">
                <MessageSquare className="w-6 h-6 mr-3 text-slate-600" />
                Contact Information
              </CardTitle>
              <CardDescription>Multiple ways to reach our team of data center infrastructure experts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Phone Support</h3>
                  <p className="text-slate-600">Direct line to our technical team</p>
                  <a href="tel:+1-555-WAVE-2-WAVE" className="text-slate-700 hover:text-slate-900 font-medium">
                    +1 (555) WAVE-2-WAVE
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Email Support</h3>
                  <p className="text-slate-600">Detailed inquiries and documentation</p>
                  <a href="mailto:info@wave2wave.com" className="text-slate-700 hover:text-slate-900 font-medium">
                    info@wave2wave.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Headquarters</h3>
                  <p className="text-slate-600">Visit our main facility and engineering center</p>
                  <address className="text-slate-700 not-italic">
                    123 Data Center Drive
                    <br />
                    Silicon Valley, CA 94000
                  </address>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Business Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                  <p className="text-slate-600">Emergency support available 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Contact Form */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="border-slate-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className={`border-slate-300 ${phoneError ? "border-red-500" : ""}`}
                    />
                    {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    className="border-slate-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-900"
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading" ? "Sending..." : "Send Message"}
                </Button>

                {formStatus === "success" && (
                  <div className="text-green-600 text-center">Thank you! We'll get back to you within 24 hours.</div>
                )}

                {formStatus === "error" && (
                  <div className="text-red-600 text-center">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Quick SMS Contact Request */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Quick SMS Contact Request</CardTitle>
              <CardDescription>
                Need a quick response? We'll text you back within 2 hours during business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSmsSubmit} className="space-y-6">
                <div>
                  <label htmlFor="sms-name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="sms-name"
                    name="name"
                    type="text"
                    required
                    value={smsData.name}
                    onChange={handleSmsInputChange}
                    placeholder="John Smith"
                    className="border-slate-300"
                  />
                </div>

                <div>
                  <label htmlFor="sms-phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={smsData.countryCode}
                      onChange={handleSmsInputChange}
                      className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white min-w-[120px]"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <Input
                      id="sms-phone"
                      name="phone"
                      type="tel"
                      required
                      value={smsData.phone}
                      onChange={handleSmsInputChange}
                      placeholder="123-456-7890"
                      className={`flex-1 border-slate-300 ${smsPhoneError ? "border-red-500" : ""}`}
                    />
                  </div>
                  {smsPhoneError && <p className="text-red-500 text-sm mt-1">{smsPhoneError}</p>}
                  <p className="text-xs text-slate-500 mt-1">
                    Example:{" "}
                    {smsData.countryCode === "+1"
                      ? "(555) 123-4567"
                      : smsData.countryCode === "+44"
                        ? "7700 900123"
                        : smsData.countryCode === "+49"
                          ? "30 12345678"
                          : "123 456 7890"}
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="sms-consent"
                    name="consent"
                    checked={smsData.consent}
                    onChange={handleSmsInputChange}
                    className="mt-1 h-4 w-4 text-slate-600 focus:ring-slate-500 border-slate-300 rounded"
                    required
                  />
                  <label htmlFor="sms-consent" className="text-sm text-slate-700">
                    I consent to receive SMS messages from Wave2Wave about my inquiry. Message and data rates may apply.
                    Reply STOP to opt out.
                    <a href="/sms-consent" className="text-slate-700 hover:text-slate-900 underline ml-1">
                      Learn more
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-900"
                  disabled={smsStatus === "loading"}
                >
                  {smsStatus === "loading" ? "Sending..." : "Request SMS Contact"}
                </Button>

                {smsStatus === "success" && (
                  <div className="text-green-600 text-center">
                    Thanks! We'll text you back within 2 hours during business hours.
                  </div>
                )}

                {smsStatus === "error" && (
                  <div className="text-red-600 text-center">
                    There was an error with your request. Please try again.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

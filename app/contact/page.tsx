"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, X, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitContactForm, submitSmsForm } from "./actions"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB file limit
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
  "text/plain",
  "application/acad",
  "application/dxf",
  "application/zip",
  "application/xml",
  "application/json",
]

// Country codes with their names and codes
const COUNTRY_CODES = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Peru", code: "+51", flag: "🇵🇪" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
  { name: "Hungary", code: "+36", flag: "🇭🇺" },
  { name: "Romania", code: "+40", flag: "🇷🇴" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
]

// E.164 phone number validation (without country code)
const validatePhoneNumber = (phoneNumber: string): boolean => {
  // Remove all non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, "")
  // Should have at least 4 digits and no more than 15 digits (total E.164 limit minus country code)
  return cleaned.length >= 4 && cleaned.length <= 15
}

const formatPhoneNumber = (input: string): string => {
  // Remove all non-digit characters
  return input.replace(/\D/g, "")
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
    uploadedFiles: [] as File[],
  })

  const [smsFormData, setSmsFormData] = useState({
    name: "",
    countryCode: "+1", // Default to US
    phone: "",
    message: "",
    smsConsent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)

  const [isSmsSubmitting, setIsSmsSubmitting] = useState(false)
  const [smsSubmitResult, setSmsSubmitResult] = useState<{ success: boolean; message: string } | null>(null)
  const [phoneValidationError, setPhoneValidationError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    console.log("Contact form submission started...")

    try {
      const formDataToSubmit = new FormData()
      formDataToSubmit.append("firstName", formData.firstName)
      formDataToSubmit.append("lastName", formData.lastName)
      formDataToSubmit.append("email", formData.email)
      formDataToSubmit.append("company", formData.company)
      formDataToSubmit.append("phone", formData.phone)
      formDataToSubmit.append("inquiryType", formData.inquiryType)
      formDataToSubmit.append("message", formData.message)

      // Add files to FormData
      formData.uploadedFiles.forEach((file, index) => {
        if (file && file.size > 0) {
          formDataToSubmit.append(`file_${index}`, file)
        }
      })

      console.log("Calling submitContactForm...")
      const result = await submitContactForm(formDataToSubmit)
      console.log("submitContactForm result:", result)

      if (!result || typeof result !== "object" || !("success" in result) || !("message" in result)) {
        console.error("Invalid server response:", result)
        throw new Error("Invalid response from server")
      }

      setSubmitResult(result)
      if (result.success) {
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          inquiryType: "",
          message: "",
          uploadedFiles: [],
        })
        setFileError(null)
      }
    } catch (error: any) {
      console.error("Contact form error:", error)
      let errorMessage = error.message || "There was an error sending your message. Please try again."
      if (error.message === "Invalid response from server") {
        errorMessage = "The uploaded file is too large (max 5MB). Please upload a smaller file or try without files."
      }
      setSubmitResult({
        success: false,
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSmsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate SMS consent
    if (!smsFormData.smsConsent) {
      setSmsSubmitResult({
        success: false,
        message: "Please consent to receive SMS messages before submitting.",
      })
      return
    }

    // Validate phone number format
    if (!validatePhoneNumber(smsFormData.phone)) {
      setPhoneValidationError("Please enter a valid phone number (4-15 digits)")
      return
    }

    setIsSmsSubmitting(true)
    setSmsSubmitResult(null)
    setPhoneValidationError(null)

    try {
      // Build full E.164 phone for the customer
      const fullPhoneNumber = smsFormData.countryCode + formatPhoneNumber(smsFormData.phone)

      const fd = new FormData()
      fd.append("name", smsFormData.name)
      fd.append("phone", fullPhoneNumber) // E.164
      fd.append("message", smsFormData.message)
      fd.append("smsConsent", String(smsFormData.smsConsent))

      const result = await submitSmsForm(fd)

      setSmsSubmitResult(result)

      if (result.success) {
        // Reset SMS form on success
        setSmsFormData({
          name: "",
          countryCode: "+1",
          phone: "",
          message: "",
          smsConsent: false,
        })
      }
    } catch (error: any) {
      setSmsSubmitResult({
        success: false,
        message: "There was an error submitting your SMS request. Please try again.",
      })
    } finally {
      setIsSmsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSmsInputChange = (field: string, value: string | boolean) => {
    if (field === "phone" && typeof value === "string") {
      // Format phone number (remove non-digits)
      const formattedPhone = formatPhoneNumber(value)
      setSmsFormData((prev) => ({ ...prev, [field]: formattedPhone }))

      // Clear validation error when user starts typing
      if (phoneValidationError) {
        setPhoneValidationError(null)
      }
    } else {
      setSmsFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFileError(null)

    // Validate file sizes
    const oversizedFiles = files.filter((file) => file.size > MAX_FILE_SIZE)
    if (oversizedFiles.length > 0) {
      setFileError(`Files too large (max 4MB): ${oversizedFiles.map((f) => f.name).join(", ")}`)
      e.target.value = ""
      return
    }

    // Validate file types
    const invalidFiles = files.filter((file) => !ALLOWED_FILE_TYPES.includes(file.type))
    if (invalidFiles.length > 0) {
      setFileError(
        `Invalid file types: ${invalidFiles.map((f) => f.name).join(", ")}. Supported formats: PDF, DOC, XLS, CSV, TXT, DWG, DXF, ZIP, XML, JSON`,
      )
      e.target.value = ""
      return
    }

    // Validate file count
    const currentFiles = formData.uploadedFiles
    const newFiles = [...currentFiles, ...files].slice(0, 5) // Limit to 5 files
    if (files.length + currentFiles.length > 5) {
      setFileError("You can upload a maximum of 5 files.")
      e.target.value = ""
      return
    }

    setFormData((prev) => ({ ...prev, uploadedFiles: newFiles }))
    e.target.value = ""
  }

  const removeFile = (index: number) => {
    const newFiles = formData.uploadedFiles.filter((_, i) => i !== index)
    setFormData((prev) => ({ ...prev, uploadedFiles: newFiles }))
    setFileError(null)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Your Infrastructure Solution</h1>
            <p className="text-xl text-slate-200">
              Ready to discuss your project? Our Wave2Wave.io experts are here to help you design, deploy, and optimize
              your critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Response Times & Contact Information Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Quick Response Times */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Committed to Quick Response Times</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Initial response within 24 hours</div>
                      <div className="text-sm text-slate-500">
                        We'll acknowledge your inquiry and provide next steps
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Quote turnaround in 2-3 business days</div>
                      <div className="text-sm text-slate-500">Detailed proposals for your project requirements</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Technical consultation within 48 hours</div>
                      <div className="text-sm text-slate-500">Expert guidance from our engineering team</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-slate-600">+1 (866) 473-2701</p>
                      <p className="text-sm text-slate-500">Mon-Fri 8:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-slate-600">info@wave2wave.io</p>
                      <p className="text-sm text-slate-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-slate-600">
                        1017 El Camino Real, #448
                        <br />
                        Redwood City, CA 94063
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & SMS Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us an Email Below</CardTitle>
                <CardDescription>Tell us as much as you can and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitResult && (
                  <Alert
                    className={`mb-6 ${submitResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                  >
                    {submitResult.success ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={submitResult.success ? "text-green-800" : "text-red-800"}>
                      {submitResult.message}
                    </AlertDescription>
                  </Alert>
                )}

                {fileError && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">{fileError}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select onValueChange={(value) => handleInputChange("inquiryType", value)} disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="structured-cabling">Structured Cabling & Hardware</SelectItem>
                        <SelectItem value="kitting-logistics">Advanced Kitting & Logistics</SelectItem>
                        <SelectItem value="dcim-services">DCIM & Digital Twin Services</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details / Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file-upload">Upload Documents</Label>
                    <div className="space-y-2">
                      {formData.uploadedFiles.length < 5 && (
                        <Input
                          id="file-upload"
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.dwg,.dxf,.zip,.xml,.json"
                          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          disabled={isSubmitting}
                        />
                      )}
                      <p className="text-sm text-slate-500">
                        Upload DCIM design, spreadsheet or other document (up to 5 files, max 5MB each, formats: PDF,
                        DOC, XLS, CSV, TXT, DWG, DXF, ZIP, XML, JSON)
                      </p>
                      {formData.uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          {formData.uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-slate-50 p-2 rounded-md">
                              <div className="flex-1">
                                <span className="text-sm text-slate-700">{file.name}</span>
                                <span className="text-xs text-slate-500 ml-2">({formatFileSize(file.size)})</span>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                className="h-6 w-6 p-0 hover:bg-red-100"
                                disabled={isSubmitting}
                              >
                                <X className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    {submitResult && !submitResult.success && (
                      <Button type="button" size="lg" variant="outline" onClick={handleSubmit} disabled={isSubmitting}>
                        Retry
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick SMS Contact Form */}
{/*            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Quick SMS Contact Request</CardTitle>
                <CardDescription>
                  Need a quick response? Send us your contact info and we'll text you back within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {smsSubmitResult && (
                  <Alert
                    className={`mb-6 ${smsSubmitResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                  >
                    {smsSubmitResult.success ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={smsSubmitResult.success ? "text-green-800" : "text-red-800"}>
                      {smsSubmitResult.message}
                    </AlertDescription>
                  </Alert>
                )}

                {phoneValidationError && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">{phoneValidationError}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSmsSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="sms-name">Name *</Label>
                    <Input
                      id="sms-name"
                      value={smsFormData.name}
                      onChange={(e) => handleSmsInputChange("name", e.target.value)}
                      required
                      disabled={isSmsSubmitting}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sms-country">Country *</Label>
                    <Select
                      value={smsFormData.countryCode}
                      onValueChange={(value) => handleSmsInputChange("countryCode", value)}
                      disabled={isSmsSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {COUNTRY_CODES.map((country) => (
                          <SelectItem key={`${country.name}-${country.code}`} value={country.code}>
                            <span className="flex items-center space-x-2">
                              <span>{country.flag}</span>
                              <span>{country.name}</span>
                              <span className="text-slate-500">({country.code})</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sms-phone">Phone Number *</Label>
                    <div className="flex space-x-2">
                      <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-medium text-gray-700 min-w-[80px]">
                        {smsFormData.countryCode}
                      </div>
                      <Input
                        id="sms-phone"
                        type="tel"
                        value={smsFormData.phone}
                        onChange={(e) => handleSmsInputChange("phone", e.target.value)}
                        required
                        disabled={isSmsSubmitting}
                        placeholder="1234567890"
                        className={`flex-1 ${phoneValidationError ? "border-red-300 focus:border-red-500" : ""}`}
                      />
                    </div>
                    <p className="text-sm text-slate-500">
                      Enter your phone number without the country code (e.g., 1234567890)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sms-message">Brief Message</Label>
                    <Textarea
                      id="sms-message"
                      rows={3}
                      value={smsFormData.message}
                      onChange={(e) => handleSmsInputChange("message", e.target.value)}
                      disabled={isSmsSubmitting}
                      placeholder="Brief description of what you need help with..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="smsConsent"
                        checked={smsFormData.smsConsent}
                        onChange={(e) => handleSmsInputChange("smsConsent", e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                        disabled={isSmsSubmitting}
                      />
                      <Label htmlFor="smsConsent" className="text-sm text-slate-600 leading-relaxed">
                        By submitting your phone number, you are consenting to receive text messages from us. You can
                        opt out at any time by texting "STOP". Message and data rates may apply.
                      </Label>
                    </div>

                    <div className="text-sm text-slate-500">
                      <Link href="/sms-consent" className="text-blue-600 hover:text-blue-800 underline">
                        View SMS Consent & Terms
                      </Link>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSmsSubmitting || !smsFormData.smsConsent}
                  >
                    {isSmsSubmitting ? "Sending..." : "Send SMS Request"}
                  </Button>
                </form>
              </CardContent>
            </Card> 
            */}
          </div>
        </div>
      </section>
    </div>
  )
}

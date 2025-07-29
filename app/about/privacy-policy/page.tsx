import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/about">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About
              </Link>
            </Button>

            <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-600">How Wave2Wave.io collects, uses, and protects your information</p>
            <p className="text-sm text-slate-500 mt-2">Last Updated: July 29, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Introduction</h2>
              <p className="text-slate-700 mb-6">
                This Privacy Policy explains how Wave2Wave.io ("Company", "we", "us", or "our") collects, uses, and
                protects information obtained through its Customer Sales Portal (the "Portal") used by business
                customers ("Customer", "you").
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Information We Collect</h2>
              <p className="text-slate-700 mb-4">
                We may collect the following types of information when you or your users access the Portal:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Contact details (name, email, phone number)</li>
                <li>Company information (company name, address, tax ID)</li>
                <li>User credentials and account preferences</li>
                <li>Order history, invoices, and payment records</li>
                <li>Usage data (IP address, browser type, Portal interaction history)</li>
                <li>Uploaded documents or forms (e.g., POs, certificates)</li>
                <li>Payment information including account numbers, credit card details, etc.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. How We Use Information</h2>
              <p className="text-slate-700 mb-4">We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>To process and fulfill orders</li>
                <li>To manage user accounts and preferences</li>
                <li>To provide support and respond to inquiries</li>
                <li>To send updates related to your orders or account</li>
                <li>To detect and prevent fraud or misuse</li>
                <li>To analyze usage and improve the Portal experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Information Sharing</h2>
              <p className="text-slate-700 mb-4">
                We do not sell or rent your information. We may share information with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Service providers under confidentiality (e.g., hosting, billing, logistics)</li>
                <li>Legal or regulatory authorities when required by law</li>
                <li>Affiliates and subsidiaries for internal business purposes</li>
                <li>In the context of a merger, acquisition, or sale of assets</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Data Retention</h2>
              <p className="text-slate-700 mb-6">
                We retain customer data only as long as necessary to fulfill the purposes outlined above, or as required
                by law, contract, or internal policy (e.g., for accounting and compliance).
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">6. Security</h2>
              <p className="text-slate-700 mb-6">
                We implement administrative, technical, and physical safeguards to protect customer data, including
                encryption, access controls, and secure hosting. However, no system is completely secure and we cannot
                guarantee absolute protection.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">7. International Transfers</h2>
              <p className="text-slate-700 mb-6">
                If you are accessing the Portal from outside the United States, note that your information will be
                transferred to and processed in the U.S. and may be accessed by our U.S.-based personnel.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">8. Your Rights</h2>
              <p className="text-slate-700 mb-6">
                You may request access, correction, or deletion of your personal information, subject to any legal or
                contractual obligations. Requests should be submitted to info@wave2wave.io
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">9. Changes to this Policy</h2>
              <p className="text-slate-700 mb-6">
                We may update this Privacy Policy from time to time. Material changes will be notified through the
                Portal or by email. Continued use after changes constitutes your acceptance.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">10. Contact Us</h2>
              <p className="text-slate-700 mb-4">
                For questions about this Privacy Policy or our data practices, please contact:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <p className="text-slate-700">
                  <strong>Wave2Wave.io</strong>
                  <br />
                  Attn: Legal Department
                  <br />
                  1017 El Camino Real, #448
                  <br />
                  Redwood City CA 94063
                  <br />
                  Email: info@wave2wave.io
                </p>
              </div>

              <hr className="my-12 border-slate-200" />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <p className="text-blue-900 font-semibold mb-2">Questions about your privacy?</p>
                <p className="text-blue-800">
                  Contact <strong>info@wave2wave.io</strong> or call <strong>+1 (866) 473-2701</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

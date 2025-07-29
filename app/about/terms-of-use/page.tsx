import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function TermsOfUsePage() {
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

            <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms of Use</h1>
            <p className="text-xl text-slate-600">B2B Customer Sales Portal Terms of Use for Wave2Wave.io</p>
            <p className="text-sm text-slate-500 mt-2">Last Updated: July 29, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Acceptance of Terms</h2>
              <p className="text-slate-700 mb-6">
                By accessing or using the Wave2Wave.io Customer Sales Portal (the "Portal") you ("Customer") agree to be
                bound by these Terms of Use ("Terms"). If Customer has executed a separate written agreement with
                Wave2Wave.io ("Seller") governing the purchase of products or services (e.g., an MSA), that agreement
                controls in case of conflict; otherwise these Terms apply. If Customer does not agree, do not use the
                Portal.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Eligibility & Account Administration</h2>
              <ol className="list-decimal pl-6 mb-6 text-slate-700 space-y-3">
                <li>
                  <strong>B2B Only.</strong> The Portal is intended solely for commercial customers. Consumer
                  transactions are not permitted.
                </li>
                <li>
                  <strong>Authorized Users.</strong> Customer shall restrict access to employees or agents who (a) have
                  a need to transact on Customer's behalf and (b) are bound to comply with these Terms.
                </li>
                <li>
                  <strong>Credentials & Security.</strong> Customer is responsible for (a) maintaining the
                  confidentiality of usernames, passwords, API keys, or SSO tokens, (b) all activities under those
                  credentials, and (c) notifying Seller immediately of any unauthorized use or security incident.
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Orders, Quotes & Contract Formation</h2>
              <ol className="list-decimal pl-6 mb-6 text-slate-700 space-y-3">
                <li>
                  <strong>Quotes.</strong> Prices shown in the Portal or in emailed quotations are in U.S. Dollars,
                  exclusive of taxes, and valid for the period stated (default 30 days).
                </li>
                <li>
                  <strong>Purchase Orders.</strong> Submitting an order through the Portal or issuing a signed purchase
                  order ("PO") constitutes an offer to buy under these Terms. Orders become binding only when Seller
                  issues a Sales Order Acknowledgement or ships Product.
                </li>
                <li>
                  <strong>Non‑Cancellable / Non‑Returnable (NCNR).</strong> Custom or specially‑procured items are NCNR
                  once the PO is accepted.
                </li>
                <li>
                  <strong>Changes & Cancellations.</strong> Customer may request changes only in writing. Seller may
                  accept or reject requests at its discretion and may charge reasonable costs already incurred.
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Payment Terms</h2>
              <ol className="list-decimal pl-6 mb-6 text-slate-700 space-y-3">
                <li>
                  Unless otherwise agreed in writing, invoices are Net 30 days from invoice date, subject to credit
                  approval and limits.
                </li>
                <li>Late balances accrue 1.5% interest per month (or the maximum lawful rate).</li>
                <li>
                  Customer shall pay all applicable sales, use, VAT, GST, or similar taxes, import duties, and brokerage
                  fees unless a valid exemption certificate is provided.
                </li>
                <li>
                  Payments must be made free of any withholding taxes; if withholding is required, Customer shall
                  gross‑up amounts so Seller receives the full invoiced value.
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Shipping, Title & Risk of Loss</h2>
              <p className="text-slate-700 mb-6">
                Shipping terms default to FOB Origin (Incoterms® 2020, Seller's facility, Fremont, CA) unless otherwise
                agreed. Title and risk transfer when goods are delivered to the first carrier.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">6. License & Permitted Use of the Portal</h2>
              <p className="text-slate-700 mb-6">
                Seller grants Customer a non‑exclusive, non‑transferable, revocable license to (a) configure quotes, (b)
                place orders, (c) track shipments, and (d) download invoices/documents solely for Customer's internal
                business purposes. Reverse engineering, scraping, penetration testing, or resale of Portal access is
                prohibited.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">7. Proprietary Rights</h2>
              <p className="text-slate-700 mb-6">
                All intellectual‑property rights in the Portal, its underlying software, and any content provided by
                Seller (except Customer data) remain the sole property of Seller or its licensors. No rights are granted
                except as expressly stated.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">8. Customer Data & Privacy</h2>
              <ol className="list-decimal pl-6 mb-6 text-slate-700 space-y-3">
                <li>
                  Customer retains all rights in data uploaded to or generated within the Portal ("Customer Data").
                </li>
                <li>
                  Seller will process Customer Data in accordance with the Company Privacy Policy and any applicable
                  data‑processing addendum.
                </li>
                <li>Each party shall comply with applicable data‑protection laws (e.g., GDPR, CCPA).</li>
              </ol>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">9. Confidentiality</h2>
              <p className="text-slate-700 mb-6">
                Information disclosed through the Portal that is marked or reasonably understood to be confidential
                ("Confidential Information") shall be kept confidential and used only to fulfill the parties' business
                relationship. Exclusions include information that is (a) publicly available without breach, (b)
                independently developed, or (c) rightly received from a third party without restriction.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">10. Export Compliance</h2>
              <p className="text-slate-700 mb-6">
                Products, software, and technical data may be subject to U.S. Export Administration Regulations and
                other laws. Customer shall not export, re‑export, or transfer controlled items without required licenses
                and will not use the Products in prohibited end‑uses (e.g., weapons, nuclear).
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">11. Warranty; Disclaimers</h2>
              <p className="text-slate-700 mb-6">
                Products are warranted only as expressly stated in Seller's Limited Warranty accompanying the Products.{" "}
                <strong>
                  THE PORTAL IS PROVIDED "AS IS" WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, OR NON‑INFRINGEMENT.
                </strong>{" "}
                Seller does not warrant uninterrupted or error‑free Portal operation.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">12. Limitation of Liability</h2>
              <p className="text-slate-700 mb-6">
                <strong>IN NO EVENT</strong> will Seller be liable for (a) indirect, incidental, special, or
                consequential damages, (b) loss of profits, revenue, or data, or (c) aggregate damages exceeding the
                amount paid by Customer for the specific order giving rise to the claim, even if advised of the
                possibility of such damages. These limits apply to the fullest extent permitted by law.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">13. Indemnification</h2>
              <p className="text-slate-700 mb-6">
                Customer agrees to defend, indemnify, and hold harmless Seller and its affiliates against claims,
                damages, and expenses arising from (a) Customer's breach of these Terms, (b) misuse of the Portal, or
                (c) violation of applicable law by Customer or its Users.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">14. Suspension & Termination</h2>
              <p className="text-slate-700 mb-6">
                Seller may suspend or terminate Portal access immediately (a) for material breach, (b) if any invoice is
                past due, (c) if Customer becomes insolvent, or (d) to comply with law. Sections 7–13 and 16–17 survive
                termination.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">15. Governing Law & Venue</h2>
              <p className="text-slate-700 mb-6">
                These Terms are governed by the laws of the State of California, USA, without regard to conflict‑of‑law
                rules. The parties consent to exclusive jurisdiction in the state and federal courts in San Mateo
                County, California.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">16. Changes to Terms</h2>
              <p className="text-slate-700 mb-6">
                Seller may modify these Terms by posting an updated version in the Portal. Continued use after the
                effective date constitutes acceptance. Material changes will be flagged via email or Portal notice at
                least 30 days in advance where required by law.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">17. Force Majeure</h2>
              <p className="text-slate-700 mb-6">
                Neither party is liable for delay or failure to perform due to causes beyond its reasonable control
                (e.g., natural disasters, labor disputes, supplier failures, government actions).
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">18. Notices</h2>
              <p className="text-slate-700 mb-4">
                Legal notices must be in writing and delivered by (a) personal delivery, (b) certified U.S. mail (return
                receipt requested), or (c) overnight courier to:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <p className="text-slate-700 mb-2">
                  <strong>Wave2Wave.io</strong>
                </p>
                <p className="text-slate-700 mb-2">Attn: Legal Department</p>
                <p className="text-slate-700 mb-2">1017 El Camino Real, #448</p>
                <p className="text-slate-700 mb-2">Redwood City CA 94063</p>
                <p className="text-slate-700">Email: info@wave2wave.io</p>
              </div>
              <p className="text-slate-700 mb-6">
                Notice to Customer will be sent to the billing address or email on file.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                19. Entire Agreement; Severability; Waiver
              </h2>
              <p className="text-slate-700 mb-6">
                These Terms, together with any Credit Agreement, MSA, or PO Acknowledgement, constitute the entire
                agreement regarding Portal use. If any provision is held unenforceable, the remainder remains in effect.
                Seller's failure to enforce any right is not a waiver.
              </p>

              <hr className="my-12 border-slate-200" />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <p className="text-blue-900 font-semibold mb-2">Questions?</p>
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

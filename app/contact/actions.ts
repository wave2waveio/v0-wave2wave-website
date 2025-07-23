"use server"

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`, {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message || "Submission failed")
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Unknown error submitting the form",
    }
  }
}

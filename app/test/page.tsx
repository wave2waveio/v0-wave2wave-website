"use client"

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p>If you can see this, the basic Next.js setup is working.</p>
      <button onClick={() => alert("Button clicked!")} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Test Button
      </button>
    </div>
  )
}

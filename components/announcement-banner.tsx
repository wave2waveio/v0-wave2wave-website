import Link from "next/link"

export function AnnouncementBanner() {
  return (
    <div className="bg-blue-600 text-white py-2 px-4 text-center">
      <p className="text-lg font-bold">
        Cabling123 is now part of Wave2Wave.io!{" "}
        <Link href="/cabling123" className="underline hover:text-blue-200">
          Learn more
        </Link>
      </p>
    </div>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpecTableProps {
  specifications: Array<{
    label: string
    value: string | React.ReactNode
  }>
  className?: string
}

export const SpecTable = React.forwardRef<HTMLTableElement, SpecTableProps>(
  ({ specifications, className }, ref) => {
    return (
      <div className="overflow-x-auto rounded">
        <table
          ref={ref}
          className={cn(
            "w-full border-2 border-slate-200 rounded overflow-hidden",
            className
          )}
        >
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-[#333333] border-b-2 border-slate-200">
                Specification
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-[#333333] border-b-2 border-slate-200">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec, index) => (
              <tr
                key={index}
                className={cn(
                  "border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors",
                  index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                )}
              >
                <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                  {spec.label}
                </td>
                <td className="px-6 py-4 text-sm font-mono text-[#333333]">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
)
SpecTable.displayName = "SpecTable"

/**
 * Usage Example:
 *
 * <SpecTable specifications={[
 *   { label: "Cable Type", value: "OM4 Multimode Fiber" },
 *   { label: "Connector", value: "MPO-24 (Male)" },
 *   { label: "Length Options", value: "1m - 100m (3-inch increments)" },
 *   { label: "Jacket", value: "LSZH (Plenum Rated)" },
 *   { label: "Testing", value: "100% Factory Tested" },
 *   { label: "Standards", value: "TIA-568, IEEE 802.3" },
 * ]} />
 */

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

interface ComparisonColumn {
  header: string
  subheader?: string
  highlighted?: boolean
}

interface ComparisonRow {
  label: string
  values: (string | boolean | React.ReactNode)[]
}

interface ComparisonTableProps {
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
  className?: string
}

export function ComparisonTable({
  columns,
  rows,
  className,
}: ComparisonTableProps) {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr>
            <th className="bg-slate-100 px-6 py-4 text-left font-semibold text-[#333333] border-r border-slate-200">
              Feature
            </th>
            {columns.map((column, index) => (
              <th
                key={index}
                className={cn(
                  "px-6 py-4 text-center font-semibold border-r border-slate-200 last:border-r-0",
                  column.highlighted
                    ? "bg-gradient-to-br from-[#0072CE] to-[#005BA4] text-white"
                    : "bg-slate-100 text-[#333333]"
                )}
              >
                <div className="font-bold text-lg">{column.header}</div>
                {column.subheader && (
                  <div
                    className={cn(
                      "text-sm font-normal mt-1",
                      column.highlighted ? "text-blue-100" : "text-slate-600"
                    )}
                  >
                    {column.subheader}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b border-slate-200 last:border-b-0",
                rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"
              )}
            >
              <td className="px-6 py-4 font-medium text-[#333333] border-r border-slate-200">
                {row.label}
              </td>
              {row.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={cn(
                    "px-6 py-4 text-center border-r border-slate-200 last:border-r-0",
                    columns[colIndex]?.highlighted && "bg-blue-50/50"
                  )}
                >
                  {typeof value === "boolean" ? (
                    value ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    )
                  ) : (
                    <span className="text-slate-700">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

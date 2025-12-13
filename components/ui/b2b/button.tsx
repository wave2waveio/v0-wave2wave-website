import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const b2bButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0072CE] text-white hover:bg-[#005BA4] shadow-sm hover:shadow-md focus-visible:ring-[#0072CE]",
        secondary:
          "border-2 border-[#0072CE] bg-transparent text-[#0072CE] hover:bg-[#0072CE] hover:text-white focus-visible:ring-[#0072CE]",
        outline:
          "border-2 border-[#333333] bg-transparent text-[#333333] hover:bg-[#333333] hover:text-white focus-visible:ring-[#333333]",
        ghost:
          "bg-transparent text-[#333333] hover:bg-slate-100 focus-visible:ring-slate-400",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded",
        md: "h-11 px-6 text-base rounded",
        lg: "h-14 px-8 text-lg rounded",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface B2BButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof b2bButtonVariants> {
  asChild?: boolean
  loading?: boolean
}

const B2BButton = React.forwardRef<HTMLButtonElement, B2BButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    if (asChild) {
      return (
        <Comp
          className={cn(b2bButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(b2bButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" />}
        {children}
      </Comp>
    )
  }
)
B2BButton.displayName = "B2BButton"

export { B2BButton, b2bButtonVariants }

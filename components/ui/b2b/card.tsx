import * as React from "react"

import { cn } from "@/lib/utils"

const B2BCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded bg-white border-2 border-slate-200 shadow-sm hover:shadow-md hover:border-[#0072CE]/30 transition-all duration-200",
      className
    )}
    {...props}
  />
))
B2BCard.displayName = "B2BCard"

const B2BCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8", className)}
    {...props}
  />
))
B2BCardHeader.displayName = "B2BCardHeader"

const B2BCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-tight tracking-tight text-[#333333]",
      className
    )}
    {...props}
  />
))
B2BCardTitle.displayName = "B2BCardTitle"

const B2BCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-base text-slate-600 leading-relaxed", className)}
    {...props}
  />
))
B2BCardDescription.displayName = "B2BCardDescription"

const B2BCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
))
B2BCardContent.displayName = "B2BCardContent"

const B2BCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-8 pt-0 border-t border-slate-100 mt-4", className)}
    {...props}
  />
))
B2BCardFooter.displayName = "B2BCardFooter"

export { B2BCard, B2BCardHeader, B2BCardFooter, B2BCardTitle, B2BCardDescription, B2BCardContent }

import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, rows = 4, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      rows={rows} // Default to 4 rows, but can be overridden via props
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea"

export { Textarea }

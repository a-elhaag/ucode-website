import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "hover:shadow-md hover:border-blue-400 hover:ring-1 hover:ring-blue-400",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

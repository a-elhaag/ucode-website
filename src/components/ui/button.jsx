import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        blue_orange: "bg-blue-600 text-white shadow-lg hover:bg-orange-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1",
        blue_yellow: "bg-blue-600 text-white shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1",
        orange_blue: "bg-orange-500 text-white shadow-lg hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1",
        orange_yellow: "bg-orange-500 text-white shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1",
        yellow_blue: "bg-yellow-400 text-black shadow-lg hover:bg-blue-600 hover:text-white hover:shadow-xl hover:-translate-y-1",
        yellow_orange: "bg-yellow-400 text-black shadow-lg hover:bg-orange-500 hover:text-black hover:shadow-xl hover:-translate-y-1",
        outline:
          "border border-gray-300 bg-white text-black shadow-sm hover:bg-gray-100 hover:text-gray-700",
        ghost: "hover:bg-gray-200 text-black",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-orange-500",
      },
      size: {
        default: "h-9 px-6 py-2",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-10 rounded-full px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "blue_orange", // Default to blue variant
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

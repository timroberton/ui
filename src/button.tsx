"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export const getClassesForButton = cva(
  "inline-flex items-center justify-center rounded border border-transparent font-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-primary-content focus:ring-primary  hover:bg-primary-focus",
        secondary:
          "bg-secondary text-secondary-content focus:ring-secondary  hover:bg-secondary-focus",
        neutral:
          "bg-neutral text-neutral-content focus:ring-neutral  hover:bg-neutral-focus",
        success:
          "bg-success text-success-content focus:ring-success  hover:bg-success-focus",
        warning:
          "bg-warning text-warning-content focus:ring-warning  hover:bg-warning-focus",
        danger:
          "bg-error text-error-content focus:ring-error  hover:bg-error-focus",
      },
      size: {
        small: "text-sm py-1 px-2",
        medium: "text-base py-2 px-4",
      },
      margin: {
        left: "ml-2",
        right: "mr-2",
      },
    },
    // compoundVariants: [
    //   { intent: "primary", size: "medium", className: "uppercase" },
    // ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof getClassesForButton> & {
    children: React.ReactNode;
  };

export function Button({
  className,
  intent,
  size,
  margin,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getClassesForButton({
        intent,
        size,
        margin,
        className,
      })}
      {...props}
    >
      {props.children}
    </button>
  );
}

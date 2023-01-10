"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export const getClassesForInput = cva(
  "block w-full rounded border-base-300 text-base-content",
  {
    variants: {
      intent: {
        primary: "focus:border-primary focus:ring-primary",
        secondary: "focus:border-secondary focus:ring-primary",
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
    },
  }
);

type InputProps = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof getClassesForInput>;

export function Input({ className, intent, margin, ...props }: InputProps) {
  return (
    <input
      className={getClassesForInput({
        intent,
        margin,
        className,
      })}
      {...props}
    />
  );
}

type InputWithLabelProps = InputProps & { rootId: string; label: string };

export function InputWithLabel({
  label,
  rootId,
  ...props
}: InputWithLabelProps) {
  return (
    <div>
      <label
        htmlFor={rootId}
        className="text-base-content-lighter block text-sm"
      >
        {label}
      </label>
      <div className="mt-1">
        <Input name={rootId} {...props} />
      </div>
    </div>
  );
}

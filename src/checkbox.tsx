"use client";

import { Switch } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import { Fragment } from "react";

export const getClassesForCheckbox = cva(
  "relative h-6 w-11 inline-flex items-center rounded-[9999px]",
  {
    variants: {
      checked: {
        true: "",
        false: "",
      },
      intent: {
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        error: "",
      },
    },
    compoundVariants: [
      { intent: "primary", checked: true, className: "bg-primary" },
      { intent: "primary", checked: false, className: "bg-neutral" },
      { intent: "secondary", checked: true, className: "bg-secondary" },
      { intent: "secondary", checked: false, className: "bg-neutral" },
      { intent: "error", checked: true, className: "bg-error" },
      { intent: "error", checked: false, className: "bg-neutral" },
      { intent: "warning", checked: true, className: "bg-warning" },
      { intent: "warning", checked: false, className: "bg-neutral" },
      { intent: "success", checked: true, className: "bg-success" },
      { intent: "success", checked: false, className: "bg-neutral" },
    ],
    defaultVariants: {
      intent: "primary",
    },
  }
);

type CheckboxProps = Omit<
  VariantProps<typeof getClassesForCheckbox>,
  "checked"
> & {
  checked: boolean;
  onChange: (v: boolean) => void;
};

export function Checkbox({ intent, checked, onChange }: CheckboxProps) {
  return (
    <Switch checked={checked} onChange={onChange} as={Fragment}>
      {({ checked }) => (
        <button className={getClassesForCheckbox({ checked, intent })}>
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-[9999px] bg-white transition`}
          />
        </button>
      )}
    </Switch>
  );
}

type CheckboxWithLabelProps = CheckboxProps & {
  label: string;
  labelOnLeft?: boolean;
};

export function CheckboxWithLabel({
  intent,
  checked,
  onChange,
  label,
  labelOnLeft,
}: CheckboxWithLabelProps) {
  return (
    <Switch.Group>
      <div className="flex items-center">
        {labelOnLeft && <Switch.Label className="mr-2">{label}</Switch.Label>}
        <Checkbox intent={intent} checked={checked} onChange={onChange} />
        {!labelOnLeft && <Switch.Label className="ml-2">{label}</Switch.Label>}
      </div>
    </Switch.Group>
  );
}

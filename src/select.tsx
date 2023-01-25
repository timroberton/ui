"use client";

import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { cva, VariantProps } from "class-variance-authority";

export const getClassesForSelect = cva(
  "rounded border border-base-300 w-full cursor-pointer bg-white py-2 relative text-base-content pl-3 pr-10 text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      intent: {
        primary: "focus-visible:border-primary focus-visible:ring-primary",
        secondary: "focus-visible:border-secondary focus-visible:ring-secondary",
        success: "focus-visible:border-success focus-visible:ring-success",
        warning: "focus-visible:border-warning focus-visible:ring-warning",
        error: "focus-visible:border-error focus-visible:ring-error",
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

type SelectProps<T> = VariantProps<typeof getClassesForSelect> & {
  selected: T;
  options: { key: T; text: string }[];
  onChange: (v: T) => void;
  label?: string;
};

export function Select<T extends string | number>({
  selected, options, onChange, label, intent
}: SelectProps<T>) {
  const selectedFull = options.find((a) => a.key === selected);

  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative">
        {label &&
        <Listbox.Label className="text-base-content-lighter block text-sm mb-1">{label}</Listbox.Label>
        }
        <Listbox.Button className={getClassesForSelect({intent})}>
          <span className="block truncate">{selectedFull?.text}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base-content focus-visible:outline-none z-10">
            {options.map((opt) => (
              <Listbox.Option
                key={opt.key}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-base-200 text-base-content" : "text-base-content-lighter"
                  }`
                }
                value={opt.key}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate font-400 ${(selected || active) ? "text-base-content" : "text-base-content-lighter"}`}
                    >
                      {opt.text}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
      </div>
    </Listbox>
  );
}

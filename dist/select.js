"use client";
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { cva } from "class-variance-authority";
export var getClassesForSelect = cva("rounded border border-base-300 w-full cursor-pointer bg-white py-2 relative text-base-content pl-3 pr-10 text-left focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none", {
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
});
export function Select(_a) {
    var selected = _a.selected, options = _a.options, onChange = _a.onChange, label = _a.label, intent = _a.intent;
    var selectedFull = options.find(function (a) { return a.key === selected; });
    return (_jsx(Listbox, __assign({ value: selected, onChange: onChange }, { children: _jsxs("div", __assign({ className: "relative" }, { children: [label &&
                    _jsx(Listbox.Label, __assign({ className: "text-base-content-lighter block text-sm mb-1" }, { children: label })), _jsxs(Listbox.Button, __assign({ className: getClassesForSelect({ intent: intent }) }, { children: [_jsx("span", __assign({ className: "block truncate" }, { children: selectedFull === null || selectedFull === void 0 ? void 0 : selectedFull.text })), _jsx("span", __assign({ className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, { children: _jsx(ChevronUpDownIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }) }))] })), _jsx(Listbox.Options, __assign({ className: "absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base-content focus-visible:outline-none z-10" }, { children: options.map(function (opt) { return (_jsx(Listbox.Option, __assign({ className: function (_a) {
                            var active = _a.active;
                            return "relative cursor-pointer select-none py-2 pl-10 pr-4 ".concat(active ? "bg-base-200 text-base-content" : "text-base-content-lighter");
                        }, value: opt.key }, { children: function (_a) {
                            var selected = _a.selected, active = _a.active;
                            return (_jsxs(_Fragment, { children: [_jsx("span", __assign({ className: "block truncate font-400 ".concat((selected || active) ? "text-base-content" : "text-base-content-lighter") }, { children: opt.text })), selected ? (_jsx("span", __assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3 text-base-content" }, { children: _jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }) }))) : null] }));
                        } }), opt.key)); }) }))] })) })));
}
//# sourceMappingURL=select.js.map
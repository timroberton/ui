"use client";
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { cva } from "class-variance-authority";
import { Fragment } from "react";
export var getClassesForSelect = cva("block w-full rounded border-base-300 text-base-content", {
    variants: {
        intent: {
            primary: "focus:border-primary focus:ring-primary",
            secondary: "focus:border-secondary focus:ring-secondary",
            success: "focus:border-success focus:ring-success",
            warning: "focus:border-warning focus:ring-warning",
            error: "focus:border-error focus:ring-error",
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
});
export default function Select(p) {
    var selectedFull = p.options.find(function (a) { return a.key === p.selected; });
    return (_jsx(Listbox, __assign({ value: p.selected, onChange: p.onChange }, { children: _jsxs("div", __assign({ className: "relative mt-1" }, { children: [_jsxs(Listbox.Button, __assign({ className: "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm" }, { children: [_jsx("span", __assign({ className: "block truncate" }, { children: selectedFull === null || selectedFull === void 0 ? void 0 : selectedFull.text }), void 0), _jsx("span", __assign({ className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, { children: _jsx(ChevronUpDownIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0) }), void 0)] }), void 0), _jsx(Transition, __assign({ as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: _jsx(Listbox.Options, __assign({ className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, { children: p.options.map(function (opt) { return (_jsx(Listbox.Option, __assign({ className: function (_a) {
                                var active = _a.active;
                                return "relative cursor-default select-none py-2 pl-10 pr-4 " + (active ? "bg-amber-100 text-amber-900" : "text-gray-900");
                            }, value: opt.key }, { children: function (_a) {
                                var selected = _a.selected;
                                return (_jsxs(_Fragment, { children: [_jsx("span", __assign({ className: "block truncate " + (selected ? "font-medium" : "font-normal") }, { children: opt.text }), void 0), selected ? (_jsx("span", __assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600" }, { children: _jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0) }), void 0)) : null] }, void 0));
                            } }), opt.key)); }) }), void 0) }), void 0)] }), void 0) }), void 0));
}
//# sourceMappingURL=select.js.map
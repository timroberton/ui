"use client";
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from "@headlessui/react";
import { cva } from "class-variance-authority";
import { Fragment } from "react";
export var getClassesForCheckbox = cva("relative h-6 w-11 inline-flex items-center rounded-[9999px]", {
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
});
export function Checkbox(_a) {
    var intent = _a.intent, checked = _a.checked, onChange = _a.onChange;
    return (_jsx(Switch, __assign({ checked: checked, onChange: onChange, as: Fragment }, { children: function (_a) {
            var checked = _a.checked;
            return (_jsx("button", __assign({ className: getClassesForCheckbox({ checked: checked, intent: intent }) }, { children: _jsx("span", { className: "".concat(checked ? "translate-x-6" : "translate-x-1", " inline-block h-4 w-4 transform rounded-[9999px] bg-white transition") }) })));
        } })));
}
export function CheckboxWithLabel(_a) {
    var intent = _a.intent, checked = _a.checked, onChange = _a.onChange, label = _a.label, labelOnLeft = _a.labelOnLeft;
    return (_jsx(Switch.Group, { children: _jsxs("div", __assign({ className: "flex items-center" }, { children: [labelOnLeft && _jsx(Switch.Label, __assign({ className: "mr-2" }, { children: label })), _jsx(Checkbox, { intent: intent, checked: checked, onChange: onChange }), !labelOnLeft && _jsx(Switch.Label, __assign({ className: "ml-2" }, { children: label }))] })) }));
}
//# sourceMappingURL=checkbox.js.map
"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
export var getClassesForInput = cva("block w-full rounded border-base-300", {
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
});
export function Input(_a) {
    var className = _a.className, intent = _a.intent, margin = _a.margin, props = __rest(_a, ["className", "intent", "margin"]);
    return (_jsx("input", __assign({ className: getClassesForInput({
            intent: intent,
            margin: margin,
            className: className,
        }) }, props), void 0));
}
//# sourceMappingURL=input.js.map
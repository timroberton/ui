"use client";
import { __assign, __rest } from "tslib";
import React from "react";
import { cva } from "class-variance-authority";
export var getClassesForButton = cva("inline-flex items-center justify-center rounded border border-transparent font-400 focus:outline-none", {
    variants: {
        intent: {
            primary: "bg-primary text-primary-content focus:ring-primary  hover:bg-primary-focus",
            secondary: "bg-secondary text-secondary-content focus:ring-secondary  hover:bg-secondary-focus",
        },
        size: {
            small: "text-sm py-1 px-2",
            medium: "text-base py-2 px-4",
        },
        margin: {
            left: "ml-2",
            right: "mr-2",
        },
        showFocusedState: {
            true: "focus:ring-2 focus:ring-offset-2",
            false: "focus:ring-none",
        },
    },
    // compoundVariants: [
    //   { intent: "primary", size: "medium", className: "uppercase" },
    // ],
    defaultVariants: {
        intent: "primary",
        size: "medium",
        showFocusedState: false,
    },
});
export function Button(_a) {
    var className = _a.className, intent = _a.intent, size = _a.size, margin = _a.margin, showFocusedState = _a.showFocusedState, props = __rest(_a, ["className", "intent", "size", "margin", "showFocusedState"]);
    return (React.createElement("button", __assign({ className: getClassesForButton({
            intent: intent,
            size: size,
            margin: margin,
            showFocusedState: showFocusedState,
            className: className,
        }) }, props), props.children));
}
//# sourceMappingURL=button.js.map
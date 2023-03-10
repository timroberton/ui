"use client";
import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
export var getClassesForInput = cva("block w-full rounded border-base-300 text-base-content", {
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
export function Input(_a) {
    var className = _a.className, intent = _a.intent, margin = _a.margin, type = _a.type, props = __rest(_a, ["className", "intent", "margin", "type"]);
    return (_jsx("input", __assign({ className: getClassesForInput({
            intent: intent,
            margin: margin,
            className: className,
        }), type: type !== null && type !== void 0 ? type : "text" }, props)));
}
export function InputWithLabel(_a) {
    var label = _a.label, rootId = _a.rootId, props = __rest(_a, ["label", "rootId"]);
    return (_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: rootId, className: "text-base-content-lighter block text-sm mb-1" }, { children: label })), _jsx("div", __assign({ className: "" }, { children: _jsx(Input, __assign({ name: rootId }, props)) }))] }));
}
//# sourceMappingURL=input.js.map
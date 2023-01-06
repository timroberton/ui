"use client";
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Button = exports.getClassesForButton = void 0;
var class_variance_authority_1 = require("class-variance-authority");
exports.getClassesForButton = class_variance_authority_1.cva("inline-flex items-center justify-center rounded border border-transparent font-400 focus:outline-none", {
    variants: {
        intent: {
            primary: "bg-primary text-primary-content focus:ring-primary  hover:bg-primary-focus",
            secondary: "bg-secondary text-secondary-content focus:ring-secondary  hover:bg-secondary-focus"
        },
        size: {
            small: "text-sm py-1 px-2",
            medium: "text-base py-2 px-4"
        },
        margin: {
            left: "ml-2",
            right: "mr-2"
        },
        showFocusedState: {
            "true": "focus:ring-2 focus:ring-offset-2",
            "false": "focus:ring-none"
        }
    },
    // compoundVariants: [
    //   { intent: "primary", size: "medium", className: "uppercase" },
    // ],
    defaultVariants: {
        intent: "primary",
        size: "medium",
        showFocusedState: false
    }
});
function Button(_a) {
    var className = _a.className, intent = _a.intent, size = _a.size, margin = _a.margin, showFocusedState = _a.showFocusedState, props = __rest(_a, ["className", "intent", "size", "margin", "showFocusedState"]);
    return (<button className={exports.getClassesForButton({
            intent: intent,
            size: size,
            margin: margin,
            showFocusedState: showFocusedState,
            className: className
        })} {...props}>
      {props.children}
    </button>);
}
exports.Button = Button;

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
exports.Input = exports.getClassesForInput = void 0;
var class_variance_authority_1 = require("class-variance-authority");
exports.getClassesForInput = class_variance_authority_1.cva("block w-full rounded border-base-300", {
    variants: {
        intent: {
            primary: "focus:border-primary focus:ring-primary",
            secondary: "focus:border-secondary focus:ring-primary"
        },
        margin: {
            left: "ml-2",
            right: "mr-2"
        }
    },
    // compoundVariants: [
    //   { intent: "primary", size: "medium", className: "uppercase" },
    // ],
    defaultVariants: {
        intent: "primary"
    }
});
function Input(_a) {
    var className = _a.className, intent = _a.intent, margin = _a.margin, props = __rest(_a, ["className", "intent", "margin"]);
    return (<input className={exports.getClassesForInput({
            intent: intent,
            margin: margin,
            className: className
        })} {...props}/>);
}
exports.Input = Input;

"use client";
import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dialog } from "@headlessui/react";
import { createContext, useContext, useState } from "react";
import { Button } from "./button";
import { Input, InputWithLabel } from "./input";
//@ts-ignore
var Context = createContext();
export default function AlertProvider(_a) {
    var _b, _c, _d, _e, _f;
    var children = _a.children;
    var _g = useState(undefined), alertState = _g[0], setAlertState = _g[1];
    var _h = useState(""), promptInput = _h[0], setPromptInput = _h[1];
    function openAlert(v) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setAlertState(__assign(__assign({}, v), { stateType: "alert", alertResolver: resolve }));
                    })];
            });
        });
    }
    function openConfirm(v) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setAlertState(__assign(__assign({}, v), { stateType: "confirm", confirmResolver: resolve }));
                    })];
            });
        });
    }
    function openPrompt(v) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setPromptInput(v.initialInputText);
                        setAlertState(__assign(__assign({}, v), { stateType: "prompt", promptResolver: resolve }));
                    })];
            });
        });
    }
    function openComponent(v) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setAlertState(__assign(__assign({}, v), { stateType: "component", componentResolver: resolve }));
                    })];
            });
        });
    }
    function cancelAny() {
        if ((alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "alert") {
            alertState.alertResolver();
        }
        if ((alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "confirm") {
            alertState.confirmResolver(false);
        }
        if ((alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "prompt") {
            alertState.promptResolver(undefined);
        }
        if ((alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "component") {
            alertState.componentResolver(undefined);
        }
        setAlertState(undefined);
    }
    return (_jsxs(Context.Provider, __assign({ value: { openAlert: openAlert, openConfirm: openConfirm, openPrompt: openPrompt, openComponent: openComponent } }, { children: [children, _jsxs(Dialog, __assign({ open: !!alertState, onClose: cancelAny, className: "relative z-50" }, { children: [_jsx("div", { className: "fixed inset-0 bg-black/30", "aria-hidden": "true" }, void 0), _jsx("div", __assign({ className: "fixed inset-0 flex items-center justify-center p-4" }, { children: _jsx(Dialog.Panel, __assign({ className: "bg-base-100 mx-auto max-w-lg rounded px-10 py-8" }, { children: (alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "component" ? (_jsx(alertState.element, __assign({ close: function (p) {
                                    setAlertState(undefined);
                                    alertState.componentResolver(p);
                                } }, alertState.elementProps), void 0)) : (_jsxs(_Fragment, { children: [(alertState === null || alertState === void 0 ? void 0 : alertState.title) && (_jsx(Dialog.Title, __assign({ className: "font-700 mb-2 text-lg " + ((alertState === null || alertState === void 0 ? void 0 : alertState.intent) === "danger" ? "text-error" : "") }, { children: alertState.title }), void 0)), (alertState === null || alertState === void 0 ? void 0 : alertState.text) && _jsx("p", __assign({ className: "mb-4" }, { children: alertState === null || alertState === void 0 ? void 0 : alertState.text }), void 0), (alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "alert" && (_jsx("div", __assign({ className: "" }, { children: _jsx(Button, __assign({ onClick: function () {
                                                setAlertState(undefined);
                                                alertState.alertResolver();
                                            }, intent: alertState.intent }, { children: (_b = alertState.closeButtonLabel) !== null && _b !== void 0 ? _b : "Close" }), void 0) }), void 0)), (alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "confirm" && (_jsxs("div", __assign({ className: "" }, { children: [_jsx(Button, __assign({ onClick: function () {
                                                    setAlertState(undefined);
                                                    alertState.confirmResolver(true);
                                                }, intent: alertState.intent }, { children: (_c = alertState.confirmButtonLabel) !== null && _c !== void 0 ? _c : "Confirm" }), void 0), _jsx(Button, __assign({ onClick: function () {
                                                    setAlertState(undefined);
                                                    alertState.confirmResolver(false);
                                                }, intent: "neutral", margin: "left" }, { children: "Cancel" }), void 0)] }), void 0)), (alertState === null || alertState === void 0 ? void 0 : alertState.stateType) === "prompt" && (_jsx(_Fragment, { children: _jsxs("form", __assign({ id: "promptForm", className: "" }, { children: [_jsx("div", __assign({ className: "mb-4 w-96" }, { children: alertState.inputLabel ? (_jsx(InputWithLabel, { rootId: "prompt-input", label: alertState.inputLabel, type: (_d = alertState.inputType) !== null && _d !== void 0 ? _d : "text", value: promptInput, onChange: function (v) { return setPromptInput(v.target.value); }, autoFocus: true }, void 0)) : (_jsx(Input, { type: (_e = alertState.inputType) !== null && _e !== void 0 ? _e : "text", value: promptInput, onChange: function (v) { return setPromptInput(v.target.value); }, autoFocus: true }, void 0)) }), void 0), _jsxs("div", __assign({ className: "" }, { children: [_jsx(Button, __assign({ type: "submit", form: "promptForm", onClick: function () {
                                                                setAlertState(undefined);
                                                                alertState.promptResolver(promptInput);
                                                            }, intent: alertState.intent }, { children: (_f = alertState.saveButtonLabel) !== null && _f !== void 0 ? _f : "Confirm" }), void 0), _jsx(Button, __assign({ type: "button", onClick: function () {
                                                                setAlertState(undefined);
                                                                alertState.promptResolver(undefined);
                                                            }, intent: "neutral", margin: "left" }, { children: "Cancel" }), void 0)] }), void 0)] }), void 0) }, void 0))] }, void 0)) }), void 0) }), void 0)] }), void 0)] }), void 0));
}
export var useAlert = function () { return useContext(Context); };
//# sourceMappingURL=alert.js.map